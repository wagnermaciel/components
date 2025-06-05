/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Selection} from '@angular/cdk/collections';
import {Directive, EventEmitter, Input, Output, booleanAttribute, signal} from '@angular/core';
import {takeUntil} from 'rxjs/operators';

import {SelectionStrategy} from './selection-strategy';
import {GridFocus, GridFocusCell, GridFocusInputs, RowCol} from '../grid-focus/grid-focus';
import {SignalLike, WritableSignalLike} from '../signal-like/signal-like';

/**
 * Behaves similarly to CdkSelection but that is specifically designed for grid.
 * When the items are rendered in a grid, this directive can be used to track the selected items.
 * It also provides support for common selection patterns in a grid, like select all and clear all.
 *
 * @template T The type of the values that can be selected.
 */
@Directive({
  selector: '[cdkGridSelection]',
  exportAs: 'cdkGridSelection',
  standalone: true,
  providers: [{provide: SelectionStrategy, useExisting: CdkGridSelection}],
})
export class CdkGridSelection<T> extends SelectionStrategy<T> {
  /** The selected values. */
  override selection = new Selection<T>(
    this.multiple,
    undefined,
    false,
    this.compareWith ?? ((o1, o2) => o1 === o2),
  );

  /** Whether multiple items can be selected. */
  @Input({transform: booleanAttribute}) multiple = false;

  /**
   * The function to use to compare the option values with the selected values.
   * If not provided, the values will be compared by reference.
   */
  @Input() compareWith: ((o1: T, o2: T) => boolean) | undefined;

  /** Emits when the selection has changed. */
  @Output('cdkGridSelectionChange') readonly selectionChanged = new EventEmitter<T[]>();

  constructor() {
    super();
    this.selection.changed.pipe(takeUntil(this.destroyed)).subscribe(() => {
      this.selectionChanged.emit(this.selection.selected);
    });
  }

  /**
   * Toggles the selection of an item.
   * @param value The value to toggle
   */
  toggle(value: T): void {
    this.selection.toggle(value);
  }

  /**
   * Selects all items.
   * If no items are provided, all items in the selection will be selected.
   * If items are provided, only those items will be selected.
   * @param items The items to select
   */
  selectAll(...items: T[]): void {
    const values = items.length ? items : this._getAllValues();
    this.selection.select(...values);
  }

  /**
   * Deselects all items.
   * If no items are provided, all items in the selection will be deselected.
   * If items are provided, only those items will be deselected.
   * @param items The items to deselect
   */
  deselectAll(...items: T[]): void {
    const values = items.length ? items : this._getAllValues();
    this.selection.deselect(...values);
  }

  /** Clears the selection. */
  clear(): void {
    this.selection.clear();
  }

  /** Gets whether an item is selected. */
  isSelected(value: T): boolean {
    return this.selection.isSelected(value);
  }

  /** Gets whether the selection is empty. */
  isEmpty(): boolean {
    return this.selection.isEmpty();
  }

  private _getAllValues(): T[] {
    // This method should be implemented by the consumer of the directive.
    // It is expected to return all possible values that can be selected.
    throw new Error('Method not implemented.');
  }
}

/**
 * Interface for items that can be selected in a grid.
 * @template V The type of the item's value.
 */
export interface GridSelectionItem<V> extends GridFocusCell {
  /** The value of the item. */
  value: SignalLike<V>;
}

/**
 * Interface for the inputs of the grid selection behavior.
 * @template V The type of the item values.
 */
export interface GridSelectionInputs<V> extends GridFocusInputs<GridSelectionItem<V>> {
  /** Whether multiple items can be selected. */
  multi: SignalLike<boolean>;
  /** The selected values. */
  value: WritableSignalLike<V[]>;
  /**
   * The selection mode.
   * - `follow`: The selection follows the focused item.
   * - `explicit`: The selection is only changed by explicit user interaction.
   */
  selectionMode: SignalLike<'follow' | 'explicit'>;
}

/**
 * Manages selection within a grid.
 * @template T The type of the grid items, extending GridSelectionItem.
 * @template V The type of the value associated with each grid item.
 */
export class GridSelection<T extends GridSelectionItem<V>, V> {
  /** Coordinates of the start of a shift-click range selection. */
  rangeStartCoords = signal<RowCol | null>(null);
  /** Coordinates of the end of a shift-click range selection. */
  rangeEndCoords = signal<RowCol | null>(null);

  constructor(readonly inputs: GridSelectionInputs<V> & {focusManager: GridFocus<T>}) {}

  /**
   * Selects the given item or the currently focused item if no item is provided.
   * @param item The item to select.
   * @param opts Options for the selection.
   *   - anchor: Whether to set the anchor for range selection. Defaults to true.
   */
  select(item?: GridSelectionItem<V>, opts = {anchor: true}): void {
    const targetItem = (item ?? this.inputs.focusManager.activeCell()) as GridSelectionItem<V> | null;

    if (!targetItem || targetItem.disabled?.() || this.inputs.value().includes(targetItem.value())) {
      return;
    }

    if (!this.inputs.multi()) {
      this.deselectAll(); // Placeholder
    }

    const coords = this.inputs.focusManager.getCoordinates(targetItem as T);
    if (opts.anchor && coords) {
      this.beginRangeSelection(coords); // Placeholder
    }

    this.inputs.value.update(values => values.concat(targetItem.value()));
  }

  /**
   * Deselects the given item or the currently focused item if no item is provided.
   * @param item The item to deselect.
   */
  deselect(item?: GridSelectionItem<V>): void {
    const targetItem = (item ?? this.inputs.focusManager.activeCell()) as GridSelectionItem<V> | null;

    if (!targetItem || targetItem.disabled?.()) {
      return;
    }

    this.inputs.value.update(values => values.filter(value => value !== targetItem.value()));
  }

  /** Toggles selection of the currently focused item. */
  toggle(): void {
    const item = this.inputs.focusManager.activeCell() as GridSelectionItem<V> | null;
    if (!item) {
      return;
    }

    if (this.inputs.value().includes(item.value())) {
      this.deselect();
    } else {
      this.select();
    }
  }

  /** Deselects all items. */
  deselectAll(): void {
    const cells = (this.inputs.cells?.() || []).flat();
    for (const cell of cells) {
      this.deselect(cell as GridSelectionItem<V>);
    }
  }

  /** Selects only the currently focused item. */
  selectOne(): void {
    this.deselectAll();
    this.select();
  }

  /** Selects all items if multi-select is enabled. */
  selectAll(): void {
    if (!this.inputs.multi()) {
      console.warn('selectAll() called but multi-select is not enabled.');
      return;
    }
    const cells = (this.inputs.cells?.() || []).flat();
    for (const cell of cells) {
      this.select(cell as GridSelectionItem<V>, {anchor: false});
    }

    // After selecting all, set the anchor to the first available cell or a default.
    this.beginRangeSelection();
  }

  /** Toggles the selection state of all items (select all or deselect all). */
  toggleAll(): void {
    const cells = (this.inputs.cells?.() || []).flat();
    const selectableValues = cells
      .filter(cell => !cell.disabled?.())
      .map(cell => (cell as GridSelectionItem<V>).value());

    const allSelected = selectableValues.every(v => this.inputs.value().includes(v));

    if (allSelected) {
      this.deselectAll();
    } else {
      this.selectAll();
    }
  }

  /**
   * Begins or updates a range selection.
   * If coords are provided, sets both start and end of the range to these coordinates.
   * If no coords are provided, uses the active cell's coordinates, or defaults to {row: 0, col: 0}.
   * @param coords The coordinates of the start of the range.
   */
  beginRangeSelection(coords?: RowCol): void {
    if (coords) {
      this.rangeStartCoords.set(coords);
      this.rangeEndCoords.set(coords);
    } else {
      const activeCell = this.inputs.focusManager.activeCell();
      const activeCellCoords = activeCell
        ? this.inputs.focusManager.getCoordinates(activeCell as T)
        : null;
      if (activeCellCoords) {
        this.rangeStartCoords.set(activeCellCoords);
        this.rangeEndCoords.set(activeCellCoords);
      } else {
        // Default if no active cell or grid is empty.
        // Consider if null is a better default if selectRange handles it.
        const defaultCoords = {row: 0, col: 0};
        this.rangeStartCoords.set(defaultCoords);
        this.rangeEndCoords.set(defaultCoords);
      }
    }
  }

  /**
   * Extends the selection to the currently focused item, creating a range.
   * Requires multi-select to be enabled.
   * @param opts Options for the selection.
   *   - anchor: Whether to update the range anchor if selection is being reduced.
   *     Currently not used in this 2D implementation but kept for API similarity.
   */
  selectRange(opts = {anchor: true}): void {
    if (!this.inputs.multi()) {
      // Range selection is only for multi-selection mode
      this.selectOne(); // Or simply return, depending on desired behavior
      return;
    }

    const currentActiveCell = this.inputs.focusManager.activeCell() as T | null;
    if (!currentActiveCell) {
      return;
    }
    const currentActiveCoords = this.inputs.focusManager.getCoordinates(currentActiveCell);
    if (!currentActiveCoords) {
      return;
    }

    let startCoords = this.rangeStartCoords();
    if (startCoords === null) {
      // If range selection hasn't started, begin it with the current item.
      this.beginRangeSelection(currentActiveCoords);
      startCoords = currentActiveCoords;
    }

    // In this 2D version, rangeStartCoords is the fixed anchor.
    // The selection always goes from rangeStartCoords to currentActiveCoords.

    const prevEndCoords = this.rangeEndCoords();
    const cellsInNewRange = this._getCellsInRange(startCoords, currentActiveCoords);
    const cellsInOldRange = prevEndCoords ? this._getCellsInRange(startCoords, prevEndCoords) : new Set<T>();

    // Deselect cells that were in the old range but not in the new one.
    for (const cell of cellsInOldRange) {
      if (!cellsInNewRange.has(cell)) {
        this.deselect(cell as GridSelectionItem<V>);
      }
    }

    // Select cells that are in the new range.
    for (const cell of cellsInNewRange) {
      // select() already checks if the item is already selected or disabled.
      this.select(cell as GridSelectionItem<V>, {anchor: false});
    }

    this.rangeEndCoords.set(currentActiveCoords);
  }

  /**
   * Gets all the cells within the geometric range defined by two coordinate pairs.
   * @param coords1 The first corner of the range.
   * @param coords2 The second corner of the range.
   * @returns A set of cells within the specified range.
   */
  private _getCellsInRange(coords1: RowCol, coords2: RowCol): Set<T> {
    const cellsInRange = new Set<T>();
    if (!this.inputs.cells) {
      return cellsInRange; // Grid might not be populated yet or cells input is missing
    }

    const minRow = Math.min(coords1.row, coords2.row);
    const maxRow = Math.max(coords1.row, coords2.row);
    const minCol = Math.min(coords1.col, coords2.col);
    const maxCol = Math.max(coords1.col, coords2.col);

    for (let r = minRow; r <= maxRow; r++) {
      for (let c = minCol; c <= maxCol; c++) {
        const cell = this.inputs.focusManager.getCell({row: r, col: c});
        // Ensure cell is not disabled before adding.
        // The GridSelectionItem interface might not have disabled directly,
        // but GridFocusCell (which it extends) does.
        if (cell && !(cell as GridSelectionItem<V>).disabled?.()) {
          cellsInRange.add(cell as T);
        }
      }
    }
    return cellsInRange;
  }
}

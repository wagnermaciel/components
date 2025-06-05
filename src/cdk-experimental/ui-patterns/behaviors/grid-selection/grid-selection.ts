/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {signal} from '@angular/core'; // Ensure computed is imported if used
import {SignalLike, WritableSignalLike} from '../signal-like/signal-like';
import {GridFocus, GridFocusCell, GridFocusInputs, RowCol} from '../grid-focus/grid-focus';

/** Represents a cell in a grid that can be selected. */
export interface GridSelectionCell<V> extends GridFocusCell {
  /** The value of the item. */
  value: SignalLike<V>;
}

/** Represents the required inputs for a grid that contains selectable cells. */
export interface GridSelectionInputs<T extends GridSelectionCell<V>, V> extends GridFocusInputs<T> {
  /** Whether multiple cells in the grid can be selected at once. */
  multi: SignalLike<boolean>;

  /** The current value of the grid selection (an array of the selected item values). */
  value: WritableSignalLike<V[]>;

  /** The selection strategy used by the grid. */
  selectionMode: SignalLike<'follow' | 'explicit'>;
}

/** Controls selection for a 2D grid of cells. */
export class GridSelection<T extends GridSelectionCell<V>, V> {
  /** The start coordinates to use for range selection. */
  rangeStartCoords = signal<RowCol | null>(null);

  /** The end coordinates to use for range selection. */
  rangeEndCoords = signal<RowCol | null>(null);

  constructor(readonly inputs: GridSelectionInputs<T, V> & {focusManager: GridFocus<T>}) {}

  /** Selects the item at the current active coordinates. */
  select(item?: T, opts = {anchor: true}) {
    item = item ?? this.inputs.focusManager.activeCell();

    if (!item || item.disabled() || this.inputs.value().includes(item.value())) {
      return;
    }

    if (!this.inputs.multi()) {
      this.deselectAll(); // Deselect all if not in multi-select mode
    }

    // Get canonical coordinates for the item to be selected.
    const currentItemCoords = this.inputs.focusManager.getCoordinates(item);
    if (!currentItemCoords) return; // Should not happen if item is valid

    if (opts.anchor) {
      this.beginRangeSelection(currentItemCoords);
    }
    this.inputs.value.update(values => [...values, item.value()]);
  }

  /** Deselects the given item, or the current active item if not provided. */
  deselect(item?: T) {
    item = item ?? (this.inputs.focusManager.activeCell() as T);

    if (item && !item.disabled()) {
      this.inputs.value.update(values => values.filter(value => value !== item.value()));
    }
  }

  /** Toggles selection for the item at the current active coordinates. */
  toggle() {
    const item = this.inputs.focusManager.activeCell();
    if (!item) return;

    this.inputs.value().includes(item.value()) ? this.deselect(item) : this.select(item);
  }

  /** Toggles only the item at the current active coordinates (selects it if not selected, deselects if selected). */
  toggleOne() {
    const item = this.inputs.focusManager.activeCell();
    if (!item) return;

    if (this.inputs.value().includes(item.value())) {
      this.deselect(item);
    } else {
      // For toggleOne, if multi is false, we still want to deselect others first.
      if (!this.inputs.multi()) {
        this.deselectAll();
      }
      // Select the item, ensuring anchor is set for potential range start.
      this.select(item, {anchor: true});
    }
  }

  /** Deselects all items in the grid. */
  deselectAll() {
    // Iterate over all cells and deselect them one by one.
    // This approach is simple. If performance becomes an issue for very large grids,
    // directly setting value to [] might be an option, but deselect checks disabled state.
    const allItems: T[] = [];
    this.inputs.cells().forEach(row => row.forEach(cell => allItems.push(cell)));

    for (const item of allItems) {
      // We only care about the value being present in the selection array.
      // The deselect method itself will handle disabled checks if needed,
      // but here we are simply removing any existing value from the selection.
      if (!item.disabled() && this.inputs.value().includes(item.value())) {
        this.inputs.value.update(values => values.filter(v => v !== item.value()));
      }
    }
    // After deselecting all, clear the selection value array directly for robustness
    if (this.inputs.value().length > 0) {
      this.inputs.value.set([]);
    }
  }

  /** Sets the selection to only the current active item. */
  selectOne() {
    const item = this.inputs.focusManager.activeCell();
    if (!item) return;

    this.deselectAll();
    // Select the item, ensuring anchor is set correctly.
    this.select(item, {anchor: true});
  }

  /** Marks the given coordinates as the start of a range selection. */
  beginRangeSelection(coords?: RowCol) {
    coords = coords ?? this.inputs.activeCoords();
    if (!coords) {
      // activeCoords might be null if grid is empty or no focus yet
      this.rangeStartCoords.set(null);
      this.rangeEndCoords.set(null);
      return;
    }
    this.rangeStartCoords.set(coords);
    this.rangeEndCoords.set(coords); // Initially, start and end are the same.
  }

  // selectAll, toggleAll, selectRange, and _getItemsInRect will be added later.

  /** Selects all non-disabled items in the grid. */
  selectAll() {
    if (!this.inputs.multi()) {
      // Consider logging a warning or throwing an error if called in single-selection mode
      return;
    }

    const allItems: T[] = [];
    this.inputs.cells().forEach(row => row.forEach(cell => allItems.push(cell)));

    for (const item of allItems) {
      if (!item.disabled() && !this.inputs.value().includes(item.value())) {
        // Select without setting anchor for each, anchor is set at the end
        this.inputs.value.update(values => [...values, item.value()]);
      }
    }

    // After selecting all, set the range to encompass the whole grid
    // or based on the first and last item, though this might be less relevant for selectAll.
    // For now, let's try to set a meaningful range, e.g. first and last focusable cells.
    // This part might need refinement based on desired UX for range after selectAll.
    const focusableItems = allItems.filter(item => !item.disabled());
    if (focusableItems.length > 0) {
      const firstCoords = this.inputs.focusManager.getCoordinates(focusableItems[0]);
      // For lastCoords, we need to find the item that would be last in a flattened list.
      // This might be tricky with colspans/rowspans if we want true visual last.
      // Let's use the last item in the focusableItems array for simplicity.
      const lastCoords = this.inputs.focusManager.getCoordinates(
        focusableItems[focusableItems.length - 1],
      );

      if (firstCoords) this.rangeStartCoords.set(firstCoords);
      if (lastCoords) this.rangeEndCoords.set(lastCoords);
      // If only one item, start and end are the same.
      if (focusableItems.length === 1 && firstCoords) this.rangeEndCoords.set(firstCoords);
    } else {
      this.rangeStartCoords.set(null);
      this.rangeEndCoords.set(null);
    }
  }

  /**
   * Selects all items in the grid if not all are already selected,
   * otherwise deselects all items.
   */
  toggleAll() {
    if (!this.inputs.multi()) {
      // In single selection mode, toggleAll might not make sense,
      // or it could toggle the active item if that's the only one selected.
      // For now, let's restrict to multi-selection mode or do nothing.
      return;
    }

    const selectableItemValues = this.inputs
      .cells()
      .flat() // Flatten the 2D array of cells
      .filter(item => !item.disabled())
      .map(item => item.value());

    const allSelected = selectableItemValues.every(itemValue =>
      this.inputs.value().includes(itemValue),
    );

    allSelected ? this.deselectAll() : this.selectAll();
  }

  /**
   * Selects all items within the rectangular range defined by `rangeStartCoords`
   * and the current `activeCoords`.
   * Deselects items previously in range but now out of range if anchor moves.
   */
  selectRange(opts = {anchor: true}) {
    if (!this.inputs.multi()) return; // Range selection is for multi-select mode

    const startCoords = this.rangeStartCoords();
    const currentActiveCoords = this.inputs.activeCoords();

    if (!startCoords || !currentActiveCoords) {
      // If there's no anchor or no active item, range selection cannot be performed.
      return;
    }

    // If the shift key selection is moving the start of the range
    // (e.g. user Shift+Clicked, then Shift+ArrowKey in a direction that changes the anchor)
    // This logic is similar to ListSelection's `isStartOfRange`
    // We need to determine if the previous active coordinates was the start of the range.
    // For Grid, this is more complex. Let's assume for now `beginRangeSelection` correctly sets the anchor.
    // The primary task here is to select items in the new rectangle
    // and deselect items that were in the old rectangle but not in the new one.

    const newEndCoords = currentActiveCoords;
    const oldEndCoords = this.rangeEndCoords(); // Get the previous end of the range

    // Get items in the new selection rectangle
    const itemsInNewRange = this._getItemsInRect(startCoords, newEndCoords);

    // Get items in the old selection rectangle (if there was one)
    const itemsInOldRange = oldEndCoords ? this._getItemsInRect(startCoords, oldEndCoords) : [];

    // Deselect items that were in the old range but are not in the new range
    for (const item of itemsInOldRange) {
      if (!itemsInNewRange.includes(item)) {
        this.deselect(item);
      }
    }

    // Select items that are in the new range and not already selected
    for (const item of itemsInNewRange) {
      // select method handles disabled and already selected checks
      // We pass anchor: false because the range anchor (rangeStartCoords) is already set.
      // The selection of individual items within the range does not change the anchor.
      this.select(item, {anchor: false});
    }

    // Update the end of the range
    this.rangeEndCoords.set(newEndCoords);
  }

  /**
   * Returns unique items within the rectangular area defined by start and end coordinates.
   * The coordinates are inclusive.
   */
  private _getItemsInRect(startCoords: RowCol, endCoords: RowCol): T[] {
    if (!startCoords || !endCoords) {
      return [];
    }

    const minRow = Math.min(startCoords.row, endCoords.row);
    const maxRow = Math.max(startCoords.row, endCoords.row);
    const minCol = Math.min(startCoords.col, endCoords.col);
    const maxCol = Math.max(startCoords.col, endCoords.col);

    const itemsInRect = new Set<T>();
    const allCells = this.inputs.cells();

    // Iterate over the grid cells. If a cell's own coordinates fall within the
    // rectangle, it's a candidate. Then, use focusManager.getCell to ensure we get the
    // correct cell if there's spanning.
    // A more direct way: iterate through all defined cells and check if they overlap with the rectangle.

    allCells.flat().forEach(cell => {
      // Get the canonical start coordinates of the current cell
      const cellStartRow = cell.rowindex();
      const cellStartCol = cell.colindex();
      // Get the end coordinates of the current cell based on rowspan/colspan
      const cellEndRow = cellStartRow + cell.rowspan() - 1;
      const cellEndCol = cellStartCol + cell.colspan() - 1;

      // Check for overlap between the cell's area and the selection rectangle
      const overlaps =
        cellStartRow <= maxRow &&
        cellEndRow >= minRow &&
        cellStartCol <= maxCol &&
        cellEndCol >= minCol;

      if (overlaps && !cell.disabled()) {
        itemsInRect.add(cell);
      }
    });

    return Array.from(itemsInRect);
  }
  // End of GridSelection class
}

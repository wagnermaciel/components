/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {computed, signal, Signal, WritableSignal} from '@angular/core';
import {SignalLike, WritableSignalLike} from '../behaviors/signal-like/signal-like';
import {GridCellPattern} from './grid-cell';
import {MockGridPattern} from './grid-types'; // MockGridPattern for self-reference if needed by cells
import {GridFocus, GridFocusInputs, RowCol} from '../behaviors/grid-focus/grid-focus';
import {GridNavigation, GridNavigationInputs} from '../behaviors/grid-navigation/grid-navigation';
// Correct import for ModifierKey
import {ModifierKey} from '../behaviors/event-manager/event-manager';
import {KeyboardEventManager} from '../behaviors/event-manager/keyboard-event-manager';
import {PointerEventManager} from '../behaviors/event-manager/pointer-event-manager';

/** Inputs for a GridPattern. */
// These inputs are now closer to what GridFocusInputs and GridNavigationInputs expect.
export interface GridInputs {
  // From GridFocusInputs
  focusMode: SignalLike<'roving' | 'activedescendant'>;
  disabled: SignalLike<boolean>;
  cells: SignalLike<GridCellPattern[][]>; // Changed to 2D array
  activeCoords: WritableSignalLike<RowCol>; // Changed from activeIndex
  skipDisabled: SignalLike<boolean>;

  // From GridNavigationInputs (excluding those already in GridFocusInputs)
  wrap: SignalLike<boolean>;
  wrapBehavior: SignalLike<'continuous' | 'loop'>;

  // GridPattern specific
  readonly: SignalLike<boolean>;
  orientation: SignalLike<'vertical' | 'horizontal'>; // Still relevant for GridPattern logic potentially
  // textDirection is implicitly handled by LTR/RTL for key names, but GridNavigation might need it if it has text-direction sensitive logic
  textDirection?: SignalLike<'ltr' | 'rtl'>;
}

/** Represents the state and behavior of a grid UI pattern. */
// Implement MockGridPattern for cells to reference this GridPattern instance if needed.
export class GridPattern implements MockGridPattern {
  readonly focusManager: GridFocus<GridCellPattern>;
  readonly navigation: GridNavigation<GridCellPattern>;

  readonly readonly: SignalLike<boolean>;
  readonly orientation: SignalLike<'vertical' | 'horizontal'>;
  readonly cells: SignalLike<GridCellPattern[][]>;
  readonly activeCoords: WritableSignalLike<RowCol>;
  readonly disabled: SignalLike<boolean>; // This will now be inputs.disabled

  constructor(readonly inputs: GridInputs) {
    this.readonly = inputs.readonly;
    this.orientation = inputs.orientation;
    this.cells = inputs.cells;
    this.activeCoords = inputs.activeCoords;
    this.disabled = inputs.disabled;

    // Prepare inputs for behaviors
    const gridFocusInputs: GridFocusInputs<GridCellPattern> = {
      focusMode: inputs.focusMode,
      disabled: inputs.disabled,
      cells: inputs.cells,
      activeCoords: inputs.activeCoords,
      skipDisabled: inputs.skipDisabled,
    };
    this.focusManager = new GridFocus(gridFocusInputs);

    const gridNavigationInputs: GridNavigationInputs<GridCellPattern> = {
      ...gridFocusInputs, // Spread all focus inputs
      gridFocus: this.focusManager,
      wrap: inputs.wrap,
      wrapBehavior: inputs.wrapBehavior,
      // textDirection can be passed if GridNavigation supports it
      // textDirection: inputs.textDirection,
    };
    this.navigation = new GridNavigation(gridNavigationInputs);
  }

  // Method for MockGridPattern
  getCellFromCoords(coords: RowCol): GridCellPattern | void {
    return this.focusManager.getCell(coords);
  }

  readonly tabindex: Signal<number> = computed(() => this.focusManager.getGridTabindex());
  readonly activedescendant: Signal<string | undefined> = computed(() =>
    this.focusManager.getActiveDescendant(),
  );

  readonly keydown = computed(() => {
    const manager = new KeyboardEventManager();
    const activeCellInstance = computed<GridCellPattern | undefined>(() => {
      const cell = this.focusManager.activeCell();
      return cell === undefined ? undefined : cell;
    });

    // Navigation keys
    // const isVertical = computed(() => this.orientation() === 'vertical'); // Not directly used for key names now
    const isRtl = computed(() => this.inputs.textDirection?.() === 'rtl');

    // Define keys based on orientation and textDirection
    const upKey = 'ArrowUp';
    const downKey = 'ArrowDown';
    const leftKey = computed(() => (isRtl() ? 'ArrowRight' : 'ArrowLeft'));
    const rightKey = computed(() => (isRtl() ? 'ArrowLeft' : 'ArrowRight'));

    manager
      .on(upKey, event => {
        if (!activeCellInstance()?.trapsNavigation()) {
          this.navigation.up();
          event.preventDefault();
        }
      })
      .on(downKey, event => {
        if (!activeCellInstance()?.trapsNavigation()) {
          this.navigation.down();
          event.preventDefault();
        }
      })
      .on(leftKey, event => {
        // Use computed key
        if (!activeCellInstance()?.trapsNavigation()) {
          this.navigation.left();
          event.preventDefault();
        }
      })
      .on(rightKey, event => {
        // Use computed key
        if (!activeCellInstance()?.trapsNavigation()) {
          this.navigation.right();
          event.preventDefault();
        }
      })
      .on('Home', event => {
        if (!activeCellInstance()?.trapsNavigation()) {
          const currentCoords = this.activeCoords();
          const targetCell =
            event.ctrlKey || event.metaKey
              ? this.findFirstFocusableCell()
              : this.findFirstFocusableInRow(currentCoords.row);

          if (targetCell) this.navigation.gotoCell(targetCell);
          event.preventDefault();
        }
      })
      .on('End', event => {
        if (!activeCellInstance()?.trapsNavigation()) {
          const currentCoords = this.activeCoords();
          const targetCell =
            event.ctrlKey || event.metaKey
              ? this.findLastFocusableCell()
              : this.findLastFocusableInRow(currentCoords.row);

          if (targetCell) this.navigation.gotoCell(targetCell);
          event.preventDefault();
        }
      });
    // PageUp/PageDown commented out for skeleton
    /*.on('PageUp', (event) => {
         if (!activeCellInstance()?.trapsNavigation()) {
          // this.navigation.prevPage();
          event.preventDefault();
        }
      })
      .on('PageDown', (event) => {
        if (!activeCellInstance()?.trapsNavigation()) {
          // this.navigation.nextPage();
          event.preventDefault();
        }
      });*/
    return manager;
  });

  // Helper methods for Home/End
  private findFirstFocusableInRow(rowIndex: number): GridCellPattern | undefined {
    const rows = this.cells();
    if (rowIndex < 0 || rowIndex >= rows.length) return undefined;
    const rowCells = rows[rowIndex];
    for (const cell of rowCells) {
      if (this.focusManager.isFocusable(cell)) return cell;
    }
    return undefined;
  }

  private findLastFocusableInRow(rowIndex: number): GridCellPattern | undefined {
    const rows = this.cells();
    if (rowIndex < 0 || rowIndex >= rows.length) return undefined;
    const rowCells = rows[rowIndex];
    for (let i = rowCells.length - 1; i >= 0; i--) {
      if (this.focusManager.isFocusable(rowCells[i])) return rowCells[i];
    }
    return undefined;
  }

  private findFirstFocusableCell(): GridCellPattern | undefined {
    for (const row of this.cells()) {
      for (const cell of row) {
        if (this.focusManager.isFocusable(cell)) return cell;
      }
    }
    return undefined;
  }

  private findLastFocusableCell(): GridCellPattern | undefined {
    const rows = this.cells();
    for (let r = rows.length - 1; r >= 0; r--) {
      const rowCells = rows[r];
      for (let c = rowCells.length - 1; c >= 0; c--) {
        if (this.focusManager.isFocusable(rowCells[c])) return rowCells[c];
      }
    }
    return undefined;
  }

  readonly pointerdown = computed(() => {
    const manager = new PointerEventManager();
    manager.on((event: PointerEvent) => {
      const targetCell = this._getCellFromEvent(event);
      if (targetCell && !targetCell.disabled() && !this.readonly()) {
        this.navigation.gotoCell(targetCell);
      }
    });
    return manager;
  });

  onKeydown(event: KeyboardEvent): void {
    if (!this.disabled()) {
      // direct use of signal
      this.keydown().handle(event);
    }
  }

  onPointerdown(event: PointerEvent): void {
    if (!this.disabled()) {
      // direct use of signal
      this.pointerdown().handle(event);
    }
  }

  setDefaultState(): void {
    const firstCell = this.findFirstFocusableCell();
    if (firstCell) {
      const coords = this.focusManager.getCoordinates(firstCell);
      if (coords) {
        this.activeCoords.set(coords);
      }
    } else if (this.cells().length > 0 && this.cells()[0].length > 0) {
      // If no focusable cell, set to {0,0} if grid is not empty
      this.activeCoords.set({row: 0, col: 0});
    }
    // If grid is empty, activeCoords remains as initialized (presumably by consumer or default signal value)
  }

  private _getCellFromEvent(event: PointerEvent): GridCellPattern | undefined {
    if (!(event.target instanceof HTMLElement)) {
      return undefined;
    }
    // Role might be on a child element, so search up to the cell.
    const cellElement = (event.target as HTMLElement).closest(
      '[role="gridcell"]',
    ) as HTMLElement | null;
    if (!cellElement) {
      return undefined;
    }
    // Find cell by element reference
    for (const row of this.cells()) {
      for (const cell of row) {
        if (cell.element() === cellElement) {
          return cell;
        }
      }
    }
    return undefined;
  }
}

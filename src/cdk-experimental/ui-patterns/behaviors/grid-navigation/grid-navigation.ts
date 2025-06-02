/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {SignalLike} from '../signal-like/signal-like';
import {GridFocus, GridFocusCell, GridFocusInputs, RowCol} from '../grid-focus/grid-focus';

/** Represents an item in a collection, such as a listbox option, than can be navigated to. */
export interface GridNavigationCell extends GridFocusCell {}

/** Represents the required inputs for a collection that has navigable items. */
export interface GridNavigationInputs<T extends GridNavigationCell> extends GridFocusInputs<T> {
  gridFocus: GridFocus<T>;
  wrap: SignalLike<boolean>;
  wrapBehavior: SignalLike<'continuous' | 'loop'>;
}

/** Controls navigation for a grid of items. */
export class GridNavigation<T extends GridNavigationCell> {
  constructor(readonly inputs: GridNavigationInputs<T>) {}

  /** Navigates to the given item. */
  gotoCell(cell?: T): boolean {
    return cell ? this.inputs.gridFocus.focusCell(cell) : false;
  }

  /** Navigates to the given coordinates. */
  gotoCoords(coords: RowCol): boolean {
    return this.inputs.gridFocus.focusCoordinates(coords);
  }

  /** Navigates to the item above the current item. */
  up(): boolean {
    const colcount = this.inputs.gridFocus.colCount();
    const rowcount = this.inputs.gridFocus.rowCount();

    const step = ({row, col}: {row: number; col: number}) => {
      const isRowWrapping = this.inputs.wrap() && row - 1 < 0;
      const isColumnWrapping = isRowWrapping && this.inputs.wrapBehavior() === 'continuous';

      const nextRow = isRowWrapping ? (row - 1 + rowcount) % rowcount : Math.max(row - 1, 0);
      const nextCol = isColumnWrapping ? (col - 1 + colcount) % colcount : col;

      return {
        row: nextRow,
        col: nextCol,
      };
    };

    const startCoordinates = {
      row: this.inputs.activeCoords().row,
      col: this.inputs.activeCoords().col,
    };

    return this._advance(startCoordinates, step);
  }

  /** Navigates to the item below the current item. */
  down(): boolean {
    const colcount = this.inputs.gridFocus.colCount();
    const rowcount = this.inputs.gridFocus.rowCount();

    const step = ({row, col}: {row: number; col: number}) => {
      const isRowWrapping = this.inputs.wrap() && row + 1 >= rowcount;
      const isColumnWrapping = isRowWrapping && this.inputs.wrapBehavior() === 'continuous';

      const nextRow = isRowWrapping ? (row + 1) % rowcount : Math.min(row + 1, rowcount - 1);
      const nextCol = isColumnWrapping ? (col + 1 + colcount) % colcount : col;

      return {
        row: nextRow,
        col: nextCol,
      };
    };

    const startCoordinates = {
      row: this.inputs.activeCoords().row,
      col: this.inputs.activeCoords().col,
    };

    return this._advance(startCoordinates, step);
  }

  /** Navigates to the item to the left of the current item. */
  left(): boolean {
    const activeCell = this.inputs.gridFocus.activeCell()!;
    const colspan = activeCell.colspan();
    const colcount = this.inputs.gridFocus.colCount();
    const rowcount = this.inputs.gridFocus.rowCount();

    const step = ({row, col}: {row: number; col: number}) => {
      const isColumnWrapping = this.inputs.wrap() && col - colspan < 0;
      const isRowWrapping = isColumnWrapping && this.inputs.wrapBehavior() === 'continuous';

      const nextCol = isColumnWrapping
        ? (col - colspan + colcount) % colcount
        : Math.max(col - colspan, 0);

      const nextRow = isRowWrapping ? (row - 1 + rowcount) % rowcount : row;

      return {
        row: nextRow,
        col: nextCol,
      };
    };

    const startCoordinates = {
      row: this.inputs.activeCoords().row,
      col: activeCell.colindex(),
    };

    return this._advance(startCoordinates, step);
  }

  /** Navigates to the item to the right of the current item. */
  right(): boolean {
    const activeCell = this.inputs.gridFocus.activeCell()!;
    const colspan = activeCell.colspan();
    const colcount = this.inputs.gridFocus.colCount();
    const rowcount = this.inputs.gridFocus.rowCount();

    const step = ({row, col}: {row: number; col: number}) => {
      const isColumnWrapping = this.inputs.wrap() && col + colspan >= colcount;
      const isRowWrapping = isColumnWrapping && this.inputs.wrapBehavior() === 'continuous';

      const nextCol = isColumnWrapping
        ? (col + colspan + colcount) % colcount
        : Math.min(col + colspan, colcount - 1);

      const nextRow = isRowWrapping ? (row + 1 + rowcount) % rowcount : row;

      return {
        row: nextRow,
        col: nextCol,
      };
    };

    const startCoordinates = {
      row: this.inputs.activeCoords().row,
      col: activeCell.colindex(),
    };

    return this._advance(startCoordinates, step);
  }

  /**
   * Continuously calls the given stepFn starting at the given coordinates
   * until either a new focusable cell is reached or the grid fully loops.
   */
  private _advance(coords: RowCol, stepFn: (coords: RowCol) => RowCol) {
    let prevCoords = {row: coords.row, col: coords.col};
    let nextCoords = {row: coords.row, col: coords.col};
    let nextCell = this.inputs.gridFocus.activeCell();

    while (true) {
      prevCoords = {row: nextCoords.row, col: nextCoords.col};
      nextCoords = stepFn(nextCoords);

      // The step did not result in any change in coordinates.
      //
      // This will happen if the user is at a boundary (start/end row or col)
      // and tries to advance past it while `wrap` is false.
      if (nextCoords.row === prevCoords.row && nextCoords.col === prevCoords.col) {
        return false;
      }

      // The step has resulted in arriving back to the original coordinates.
      //
      // This will happen if the other cells in the grid are unfocusable and `wrap`
      // is true. The `stepFn` will eventually loop all the way back to the original cells.
      if (nextCoords.row === coords.row && nextCoords.col === coords.col) {
        return false;
      }

      nextCell = this.inputs.gridFocus.getCell(nextCoords)!;

      // The `stepFn` has successfully reached a cell that is focusable.
      if (this.inputs.gridFocus.isFocusable(nextCell)) {
        return this.gotoCoords(nextCoords);
      }
    }
  }
}

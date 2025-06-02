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
    return false;
  }

  /** Navigates to the item below the current item. */
  down(): boolean {
    return false;
  }

  /** Navigates to the item to the left of the current item. */
  left(): boolean {
    return false;
  }

  /** Navigates to the item to the right of the current item. */
  right(): boolean {
    return false;
  }
}

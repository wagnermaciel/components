/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {SignalLike} from '../behaviors/signal-like/signal-like';
import {GridCellPattern} from './grid-cell';
// GridFocus and GridNavigation will be imported in files that use them.
// We need GridFocusCell definition for MockGridPattern if it exposes focusManager directly.
import {RowCol, GridFocus} from '../behaviors/grid-focus/grid-focus';
import {GridNavigation} from '../behaviors/grid-navigation/grid-navigation';

/** Represents the properties exposed by a GridPattern that GridCellPattern needs to access. */
export interface MockGridPattern {
  // Expose the actual behavior instances if cells need to interact with them
  // Or expose specific computed values/methods from GridPattern
  focusManager?: GridFocus<GridCellPattern>; // Cell might need this for tabindex or active state
  navigation?: GridNavigation<GridCellPattern>; // Less likely for cell to need this directly
  readonly: SignalLike<boolean>;
  orientation: SignalLike<'vertical' | 'horizontal'>;
  // activeCoords might be more relevant than activeCellIndex for a cell to know its state
  activeCoords: SignalLike<RowCol>;
  getCellFromCoords(coords: RowCol): GridCellPattern | void;
}

/** Represents the properties exposed by a GridCellPattern that GridCellWidgetPattern needs to access. */
export interface MockGridCellPattern {
  id: SignalLike<string>;
  rowIndex: SignalLike<number>; // Ensure this matches GridFocusCell 'rowindex' if passed through
  colIndex: SignalLike<number>; // Ensure this matches GridFocusCell 'colindex' if passed through
  disabled: SignalLike<boolean>;
  element: SignalLike<HTMLElement | undefined>; // Widget might not always have direct cell element
  parentGrid: SignalLike<MockGridPattern | undefined>;
  // If widgets need to know if the cell is active:
  // active: SignalLike<boolean>;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {ListFocusInputs, ListFocusItem} from '../behaviors/list-focus/list-focus';
import {ListNavigationInputs, ListNavigationItem} from '../behaviors/list-navigation/list-navigation';
import {SignalLike} from '../behaviors/signal-like/signal-like';
import {GridCellPattern} from './grid-cell';
import {GridCellWidgetPattern} from './grid-cell-widget';
// Forward declaration for GridPattern to break circular dependency
// Actual GridPattern will be in './grid-pattern'
// import {GridPattern} from './grid-pattern';
import {GridFocus} from '../behaviors/grid-focus/grid-focus';
import {GridNavigation} from '../behaviors/grid-navigation/grid-navigation';

/** Represents the properties exposed by a GridPattern that GridCellPattern needs to access. */
export interface MockGridPattern {
  focusManager: GridFocus<GridCellPattern>;
  navigation: GridNavigation<GridCellPattern>;
  readonly: SignalLike<boolean>;
  orientation: SignalLike<'vertical' | 'horizontal'>;
  items: SignalLike<GridCellPattern[]>;
  activeCellIndex: SignalLike<number>; // Or however the active cell is tracked by GridFocus
  // Add other properties/methods of GridPattern that GridCellPattern might need
}

/** Represents the properties exposed by a GridCellPattern that GridCellWidgetPattern needs to access. */
export interface MockGridCellPattern {
  id: SignalLike<string>;
  rowIndex: SignalLike<number>;
  colIndex: SignalLike<number>;
  disabled: SignalLike<boolean>;
  element: SignalLike<HTMLElement | undefined>;
  parentGrid: SignalLike<MockGridPattern | undefined>; // Changed from GridPattern to MockGridPattern
  // Add other properties/methods of GridCellPattern that GridCellWidgetPattern might need
}

/** Inputs for GridFocus behavior, tailored for GridCellPattern. */
export interface GridFocusInputs<T extends ListFocusItem> extends ListFocusInputs<T> {
  // Grid-specific properties for focus, if any, can be added here.
  // For now, it directly uses ListFocusInputs structure.
}

/** Inputs for GridNavigation behavior, tailored for GridCellPattern. */
export interface GridNavigationInputs<T extends ListNavigationItem> extends ListNavigationInputs<T> {
  // Grid-specific properties for navigation, if any, can be added here.
  // For now, it directly uses ListNavigationInputs structure.
}

// It's useful to also define the item types that GridFocus and GridNavigation will use.
// These are essentially what GridCellPattern will need to implement.
export interface GridFocusItemPattern extends ListFocusItem {
  // GridCellPattern specific focus properties/methods
  rowIndex: SignalLike<number>;
  colIndex: SignalLike<number>;
}

export interface GridNavigationItemPattern extends ListNavigationItem {
  // GridCellPattern specific navigation properties/methods
  rowIndex: SignalLike<number>;
  colIndex: SignalLike<number>;
}

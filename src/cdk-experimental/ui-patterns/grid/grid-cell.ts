/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {computed, signal, Signal} from '@angular/core';
import {SignalLike} from '../behaviors/signal-like/signal-like';
import {
  GridFocusItemPattern,
  GridNavigationItemPattern,
  MockGridPattern,
} from './grid-types';
import {GridCellWidgetPattern} from './grid-cell-widget';

/** Inputs for a GridCellPattern. */
export interface GridCellInputs extends GridFocusItemPattern, GridNavigationItemPattern {
  /** A unique identifier for the cell. */
  // id is part of GridFocusItemPattern & GridNavigationItemPattern

  /** The row index of the cell. */
  rowIndex: SignalLike<number>;

  /** The column index of the cell. */
  colIndex: SignalLike<number>;

  /** Whether the cell is disabled. */
  // disabled is part of GridFocusItemPattern & GridNavigationItemPattern

  /** The HTMLElement representing the cell. */
  // element is part of GridFocusItemPattern & GridNavigationItemPattern

  /** Widgets contained within this cell. */
  widgets: SignalLike<GridCellWidgetPattern[]>;

  /** A reference to the parent GridPattern. */
  parentGrid: SignalLike<MockGridPattern | undefined>;
}

/** Represents a cell within a grid. */
export class GridCellPattern implements GridFocusItemPattern, GridNavigationItemPattern {
  /** A unique identifier for the cell. */
  readonly id: SignalLike<string>;

  /** The row index of the cell. */
  readonly rowIndex: SignalLike<number>;

  /** The column index of the cell. */
  readonly colIndex: SignalLike<number>;

  /** Whether the cell is disabled. */
  readonly disabled: SignalLike<boolean>;

  /** The HTMLElement representing the cell. */
  readonly element: SignalLike<HTMLElement | undefined>;

  /** Widgets contained within this cell. */
  readonly widgets: SignalLike<GridCellWidgetPattern[]>;

  /** A reference to the parent GridPattern. */
  readonly parentGrid: SignalLike<MockGridPattern | undefined>;

  /** The text used by typeahead search (optional, could be derived or empty). */
  readonly searchTerm: SignalLike<string>; // Required by ListNavigationItem

  constructor(inputs: GridCellInputs) {
    this.id = inputs.id;
    this.rowIndex = inputs.rowIndex;
    this.colIndex = inputs.colIndex;
    this.disabled = inputs.disabled;
    this.element = inputs.element;
    this.widgets = inputs.widgets;
    this.parentGrid = inputs.parentGrid;
    // Default searchTerm to empty string if not provided or applicable
    this.searchTerm = inputs.searchTerm ?? signal('');
  }

  /** Whether the cell is currently active (e.g., has focus or contains the active widget). */
  readonly active: Signal<boolean> = computed(() => {
    const parent = this.parentGrid();
    if (!parent) {
      return false;
    }
    const activeCell = parent.focusManager.activeItem();
    return activeCell === this;
  });

  /** The tabindex of the cell. */
  readonly tabindex: Signal<number> = computed(() => {
    const parent = this.parentGrid();
    return parent?.focusManager.getItemTabindex(this) ?? -1;
  });

  /**
   * Whether this cell should trap focus/navigation.
   * True if any interactive widget within this cell is active and editable or uses arrow keys.
   */
  readonly trapsNavigation: Signal<boolean> = computed(() => {
    const widgets = this.widgets();
    // Check if any widget is currently active *within this cell*
    // This might require more sophisticated state management if widgets themselves become active.
    // For now, we assume if a widget is editable or uses arrows, and this cell is active,
    // the navigation might be trapped. A more robust check would involve checking if a specific
    // widget *inside this cell* currently has focus.
    if (this.active()) {
      for (const widget of widgets) {
        if (!widget.disabled() && (widget.editable() || widget.usesArrowKeys())) {
          // This is a simplified check. A real implementation might need to know
          // if the focus is *on* the widget itself.
          return true;
        }
      }
    }
    return false;
  });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {computed, signal, Signal} from '@angular/core';
import {SignalLike} from '../behaviors/signal-like/signal-like';
import {MockGridPattern} from './grid-types';
import {GridCellWidgetPattern} from './grid-cell-widget';
import {GridFocusCell} from '../behaviors/grid-focus/grid-focus'; // Import GridFocusCell

/** Inputs for a GridCellPattern. */
// Note: GridFocusCell provides id, element, disabled, rowspan, colspan, rowindex, colindex
export interface GridCellInputs extends Pick<GridFocusCell, 'id' | 'element' | 'disabled'> {
  rowindex: SignalLike<number>; // Explicitly use lowercase 'i'
  colindex: SignalLike<number>; // Explicitly use lowercase 'i'
  rowspan?: SignalLike<number>; // Optional, defaults to 1
  colspan?: SignalLike<number>; // Optional, defaults to 1
  widgets: SignalLike<GridCellWidgetPattern[]>;
  parentGrid: SignalLike<MockGridPattern | undefined>;
  searchTerm?: SignalLike<string>; // Add searchTerm
}

/** Represents a cell within a grid. */
export class GridCellPattern implements GridFocusCell {
  readonly id: SignalLike<string>;
  readonly element: SignalLike<HTMLElement>; // Changed to HTMLElement (non-undefined)
  readonly disabled: SignalLike<boolean>;
  readonly rowindex: SignalLike<number>; // Implements GridFocusCell
  readonly colindex: SignalLike<number>; // Implements GridFocusCell
  readonly rowspan: SignalLike<number>; // Implements GridFocusCell
  readonly colspan: SignalLike<number>; // Implements GridFocusCell

  readonly widgets: SignalLike<GridCellWidgetPattern[]>;
  readonly parentGrid: SignalLike<MockGridPattern | undefined>;
  readonly searchTerm: SignalLike<string>;

  constructor(inputs: GridCellInputs) {
    this.id = inputs.id;
    this.element = inputs.element;
    this.disabled = inputs.disabled;
    this.rowindex = inputs.rowindex;
    this.colindex = inputs.colindex;
    this.rowspan = inputs.rowspan ?? signal(1);
    this.colspan = inputs.colspan ?? signal(1);
    this.widgets = inputs.widgets;
    this.parentGrid = inputs.parentGrid;
    this.searchTerm = inputs.searchTerm ?? signal('');
  }

  readonly active: Signal<boolean> = computed(() => {
    const parent = this.parentGrid();
    if (!parent?.focusManager) return false;
    // Access activeCell via focusManager from MockGridPattern
    const activeCellInstance = parent.focusManager.activeCell();
    return activeCellInstance === this;
  });

  readonly tabindex: Signal<number> = computed(() => {
    const parent = this.parentGrid();
    if (!parent?.focusManager) return -1;
    // Access getCellTabindex via focusManager from MockGridPattern
    return parent.focusManager.getCellTabindex(this);
  });

  readonly trapsNavigation: Signal<boolean> = computed(() => {
    if (this.active()) {
      for (const widget of this.widgets()) {
        if (!widget.disabled() && (widget.editable() || widget.usesArrowKeys())) {
          return true;
        }
      }
    }
    return false;
  });
}

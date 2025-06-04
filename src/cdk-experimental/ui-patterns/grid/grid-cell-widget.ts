/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {computed, signal, Signal} from '@angular/core';
import {SignalLike} from '../behaviors/signal-like/signal-like';
import {MockGridCellPattern} from './grid-types';

/** Inputs for a GridCellWidgetPattern. */
export interface GridCellWidgetInputs<V = unknown> {
  /** A unique identifier for the widget. */
  id: SignalLike<string>;

  /** Whether the widget is disabled. */
  disabled: SignalLike<boolean>;

  /** The HTMLElement representing the widget. */
  element: SignalLike<HTMLElement | undefined>;

  /** The value associated with the widget (optional). */
  value?: SignalLike<V | undefined>;

  /** Whether the widget is editable (e.g., a text input). */
  editable: SignalLike<boolean>;

  /** Whether the widget uses arrow keys for its own internal navigation. */
  usesArrowKeys: SignalLike<boolean>;

  /** A reference to the parent GridCellPattern. */
  parentCell: SignalLike<MockGridCellPattern | undefined>;
}

/** Represents an interactive widget within a grid cell. */
export class GridCellWidgetPattern<V = unknown> {
  /** A unique identifier for the widget. */
  readonly id: SignalLike<string>;

  /** Whether the widget is disabled. */
  readonly disabled: SignalLike<boolean>;

  /** The HTMLElement representing the widget. */
  readonly element: SignalLike<HTMLElement | undefined>;

  /** The value associated with the widget (optional). */
  readonly value?: SignalLike<V | undefined>;

  /** Whether the widget is editable. */
  readonly editable: SignalLike<boolean>;

  /** Whether the widget uses arrow keys for its own internal navigation. */
  readonly usesArrowKeys: SignalLike<boolean>;

  /** A reference to the parent GridCellPattern. */
  readonly parentCell: SignalLike<MockGridCellPattern | undefined>;

  // TODO: Implement actual logic for active and selected states.
  /** Whether the widget is currently active (e.g., has focus). Placeholder. */
  readonly active: Signal<boolean> = signal(false);

  /** Whether the widget is currently selected. Placeholder. */
  readonly selected: Signal<boolean> = signal(false);

  constructor(inputs: GridCellWidgetInputs<V>) {
    this.id = inputs.id;
    this.disabled = inputs.disabled;
    this.element = inputs.element;
    this.value = inputs.value;
    this.editable = inputs.editable;
    this.usesArrowKeys = inputs.usesArrowKeys;
    this.parentCell = inputs.parentCell;
  }
}

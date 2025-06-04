/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {computed, signal, Signal, WritableSignal} from '@angular/core';
import {SignalLike} from '../behaviors/signal-like/signal-like';
import {GridCellPattern} from './grid-cell';
import {GridFocusInputs, GridNavigationInputs, MockGridPattern} from './grid-types';
import {GridFocus} from '../behaviors/grid-focus/grid-focus';
import {GridNavigation} from '../behaviors/grid-navigation/grid-navigation';
import {KeyboardEventManager, ModifierKey as ModKey} from '../behaviors/event-manager/keyboard-event-manager';
import {PointerEventManager} from '../behaviors/event-manager/pointer-event-manager';

/** Inputs for a GridPattern. */
export interface GridInputs extends GridFocusInputs<GridCellPattern>, GridNavigationInputs<GridCellPattern> {
  /** Whether the grid is readonly. */
  readonly: SignalLike<boolean>;

  // orientation, items, activeIndex, wrap, textDirection, disabled are
  // already part of GridFocusInputs and GridNavigationInputs
}

/** Represents the state and behavior of a grid UI pattern. */
export class GridPattern implements MockGridPattern {
  /** Controls focus management for the grid. */
  readonly focusManager: GridFocus<GridCellPattern>;

  /** Controls keyboard navigation for the grid. */
  readonly navigation: GridNavigation<GridCellPattern>;

  /** Whether the grid is readonly. */
  readonly readonly: SignalLike<boolean>;

  /** Orientation of the grid. */
  readonly orientation: SignalLike<'vertical' | 'horizontal'>;

  /** The items (cells) in the grid. */
  readonly items: SignalLike<GridCellPattern[]>;

  /** The index of the currently active cell. */
  readonly activeCellIndex: WritableSignal<number>; // from ListFocusInputs

  /** Whether navigation should wrap around the grid. */
  readonly wrap: SignalLike<boolean>; // from ListNavigationInputs

  /** The text direction of the grid. */
  readonly textDirection: SignalLike<'ltr' | 'rtl'>; // from ListNavigationInputs

  /** Whether the grid is disabled. */
  readonly disabled: Signal<boolean>; // from ListFocusInputs (isListDisabled)

  constructor(readonly inputs: GridInputs) {
    this.readonly = inputs.readonly;
    this.orientation = inputs.orientation;
    this.items = inputs.items;
    this.activeCellIndex = inputs.activeIndex; // Ensure this is writable from inputs
    this.wrap = inputs.wrap;
    this.textDirection = inputs.textDirection;

    // Initialize behaviors
    // It's important that `this` is correctly typed for the behaviors if they need to call back
    // into `GridPattern` or access its specific properties beyond what base inputs provide.
    // For now, we assume inputs are sufficient.
    this.focusManager = new GridFocus(inputs);
    this.navigation = new GridNavigation(inputs);

    this.disabled = this.focusManager.isListDisabled;
  }

  /** The tabindex of the grid container. */
  readonly tabindex: Signal<number> = computed(() => this.focusManager.getListTabindex());

  /** The ID of the currently active descendant (active cell). */
  readonly activedescendant: Signal<string | undefined> = computed(() =>
    this.focusManager.getActiveDescendant(),
  );

  /** Keyboard event manager for the grid. */
  readonly keydown = computed(() => {
    const manager = new KeyboardEventManager();
    const activeCell = computed(() => this.focusManager.activeItem());

    // Navigation keys
    const prevRowKey = 'ArrowUp';
    const nextRowKey = 'ArrowDown';
    const prevColKey = 'ArrowLeft';
    const nextColKey = 'ArrowRight';

    manager
      .on(prevRowKey, (event) => {
        if (!activeCell()?.trapsNavigation()) {
          this.navigation.prevRow();
          event.preventDefault(); // Prevent scrolling
        }
      })
      .on(nextRowKey, (event) => {
        if (!activeCell()?.trapsNavigation()) {
          this.navigation.nextRow();
          event.preventDefault();
        }
      })
      .on(prevColKey, (event) => {
        if (!activeCell()?.trapsNavigation()) {
          this.navigation.prevCol();
          event.preventDefault();
        }
      })
      .on(nextColKey, (event) => {
        if (!activeCell()?.trapsNavigation()) {
          this.navigation.nextCol();
          event.preventDefault();
        }
      })
      .on('Home', (event) => {
        if (!activeCell()?.trapsNavigation()) {
          event.ctrlKey || event.metaKey ? this.navigation.firstCell() : this.navigation.firstCellInRow();
          event.preventDefault();
        }
      })
      .on('End', (event) => {
        if (!activeCell()?.trapsNavigation()) {
          event.ctrlKey || event.metaKey ? this.navigation.lastCell() : this.navigation.lastCellInRow();
          event.preventDefault();
        }
      })
      .on('PageUp', (event) => {
         if (!activeCell()?.trapsNavigation()) {
          this.navigation.prevPage(); // Assuming GridNavigation will have this
          event.preventDefault();
        }
      })
      .on('PageDown', (event) => {
        if (!activeCell()?.trapsNavigation()) {
          this.navigation.nextPage(); // Assuming GridNavigation will have this
          event.preventDefault();
        }
      });

    // Add more keybindings as needed, e.g., for selection if/when that's added.
    // Consider read-only state: if (this.readonly()) { ... }
    return manager;
  });

  /** Pointer event manager for the grid. */
  readonly pointerdown = computed(() => {
    const manager = new PointerEventManager();
    manager.on((event: PointerEvent) => {
      const targetCell = this._getCellFromEvent(event);
      if (targetCell && !targetCell.disabled() && !this.readonly()) {
        this.navigation.gotoCell(targetCell);
        // Potentially focus the cell or a widget within it.
        // For now, navigation.gotoCell updates activeIndex, which focusManager uses.
      }
    });
    return manager;
  });

  /** Handles keydown events on the grid container. */
  onKeydown(event: KeyboardEvent): void {
    if (!this.disabled()) {
      this.keydown().handle(event);
    }
  }

  /** Handles pointerdown events on the grid container. */
  onPointerdown(event: PointerEvent): void {
    if (!this.disabled()) {
      this.pointerdown().handle(event);
    }
  }

  /** Sets the initial state of the grid, typically focusing the first available cell. */
  setDefaultState(): void {
    // GridFocus's constructor or an init method should handle setting initial activeIndex.
    // This might involve finding the first non-disabled cell.
    // For now, we assume GridFocus handles this based on its inputs.
    // If GridFocus needs an explicit call:
    // this.focusManager.setInitialActiveItem();
    // Or, more directly if activeIndex is managed here:
    let firstFocusableIndex = -1;
    const items = this.items();
    for (let i = 0; i < items.length; i++) {
      if (!items[i].disabled()) {
        firstFocusableIndex = i;
        break;
      }
    }
    if (firstFocusableIndex !== -1) {
      this.activeCellIndex.set(firstFocusableIndex);
    }
  }

  private _getCellFromEvent(event: PointerEvent): GridCellPattern | undefined {
    if (!(event.target instanceof HTMLElement)) {
      return undefined;
    }
    const cellElement = event.target.closest('[role="gridcell"]'); // Assuming cells have role="gridcell"
    if (!cellElement) {
      return undefined;
    }
    return this.items().find(cell => cell.element() === cellElement);
  }
}

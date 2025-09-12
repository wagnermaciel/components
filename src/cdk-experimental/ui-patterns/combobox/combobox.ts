/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {KeyboardEventManager, PointerEventManager} from '../behaviors/event-manager';
import {computed, signal} from '@angular/core';
import {SignalLike} from '../behaviors/signal-like/signal-like';
import {ListItem} from '../behaviors/list/list';

/** Represents the required inputs for a combobox. */
export type ComboboxInputs<T extends ListItem<any>> = {
  /** The controls for the popup associated with the combobox. */
  popupControls: SignalLike<ComboboxPopupControls<T> | undefined>;

  /** The HTML input element that serves as the combobox input. */
  element: SignalLike<HTMLInputElement | undefined>;

  /** The filtering mode for the combobox. */
  filterMode: SignalLike<'manual' | 'auto-select' | 'highlight'>;
};

export type ComboboxPopupControls<T> = {
  /** The ID of the active item in the popup. */
  activeId: SignalLike<string | undefined>;

  /** Navigates to the next item in the popup. */
  next: () => void;

  /** Navigates to the previous item in the popup. */
  prev: () => void;

  /** Navigates to the first item in the popup. */
  first: () => void;

  /** Navigates to the last item in the popup. */
  last: () => void;

  /** Selects the current item in the popup. */
  select: (item?: T) => void;

  /** Filters the items in the popup. */
  filter: (text: string) => void;

  /** Removes focus from any item in the popup. */
  unfocus: () => void;

  /** Returns the item corresponding to the given event. */
  getItem: (e: PointerEvent) => T | undefined;

  /** Returns the currently selected item in the popup. */
  getSelectedItem: () => T | undefined;
};

/** Controls the state of a combobox. */
export class ComboboxPattern<T extends ListItem<any>> {
  /** Whether the combobox is expanded. */
  expanded = signal(false);

  /** The ID of the active item in the combobox. */
  activedescendant = computed(() => this.inputs.popupControls()?.activeId() ?? null);

  /** The current search string for filtering. */
  searchString = signal('');

  /** The currently highlighted item in the combobox. */
  highlightedItem = signal<T | undefined>(undefined);

  /** The keydown event manager for the combobox. */
  keydown = computed(() => {
    if (!this.expanded()) {
      return new KeyboardEventManager()
        .on('ArrowDown', () => this.open({first: true}))
        .on('ArrowUp', () => this.open({last: true}));
    }

    return new KeyboardEventManager()
      .on('ArrowDown', () => this.next())
      .on('ArrowUp', () => this.prev())
      .on('Home', () => this.first())
      .on('End', () => this.last())
      .on('Escape', () => this.close())
      .on('Enter', () => {
        this.inputs.popupControls()?.select();
        this.commit();
        this.close();

        const element = this.inputs.element();

        if (element) {
          const length = element.value.length;
          element.setSelectionRange(length, length);
        }
      });
  });

  /** The pointerup event manager for the combobox. */
  pointerup = computed(() =>
    new PointerEventManager().on(e => {
      const item = this.inputs.popupControls()?.getItem(e);

      if (item) {
        this.inputs.popupControls()?.select(item);
        this.commit();
        this.close();
      }
    }),
  );

  constructor(readonly inputs: ComboboxInputs<T>) {}

  /** Handles keydown events for the combobox. */
  onKeydown(event: KeyboardEvent) {
    this.keydown().handle(event);
  }

  /** Handles pointerup events for the combobox. */
  onPointerup(event: PointerEvent) {
    this.pointerup().handle(event);
  }

  /** Handles input events for the combobox. */
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputs.popupControls()?.filter(input.value);
    this.searchString.set(input.value);

    if (event instanceof InputEvent && event.inputType === 'deleteContentBackward') {
      return;
    }

    this.inputs.popupControls()?.first();
    this.open();

    if (this.inputs.filterMode() === 'auto-select') {
      this.inputs.popupControls()?.select();
    }

    if (this.inputs.filterMode() === 'highlight') {
      this.inputs.popupControls()?.select();
      this.highlight();
    }
  }

  /** Handles blur events for the combobox. */
  onBlur() {
    if (this.inputs.filterMode() === 'manual') {
      return;
    }

    this.commit();
  }

  /** Closes the combobox. */
  close() {
    this.expanded.set(false);
    this.inputs.popupControls()?.unfocus();
  }

  /** Opens the combobox. */
  open(nav?: {first?: boolean; last?: boolean}) {
    this.expanded.set(true);

    if (nav?.first) {
      this.first();
    } else if (nav?.last) {
      this.last();
    }
  }

  highlight() {
    const element = this.inputs.element();
    const item = this.inputs.popupControls()?.getSelectedItem();

    if (!item) {
      return;
    }

    const isHighlightable = item
      .searchTerm()
      .toLowerCase()
      .startsWith(this.searchString().toLowerCase());

    if (element && isHighlightable) {
      element.value = item.searchTerm();
      element.setSelectionRange(this.searchString().length, item.searchTerm().length);
      this.highlightedItem.set(item);
    }
  }

  /** Navigates to the next focusable item in the combobox popup. */
  next() {
    this._navigate(() => this.inputs.popupControls()?.next());
  }

  /** Navigates to the previous focusable item in the combobox popup. */
  prev() {
    this._navigate(() => this.inputs.popupControls()?.prev());
  }

  /** Navigates to the first focusable item in the combobox popup. */
  first() {
    this._navigate(() => this.inputs.popupControls()?.first());
  }

  /** Navigates to the last focusable item in the combobox popup. */
  last() {
    this._navigate(() => this.inputs.popupControls()?.last());
  }

  /** Updates the value of the input based on the currently selected item. */
  commit() {
    const element = this.inputs.element();
    const item = this.inputs.popupControls()?.getSelectedItem();

    if (element && item) {
      element.value = item.searchTerm();
    }
  }

  /** Navigates and handles additional actions based on filter mode. */
  private _navigate(operation: () => void) {
    operation();

    if (this.inputs.filterMode() === 'auto-select') {
      this.inputs.popupControls()?.select();
    }

    if (this.inputs.filterMode() === 'highlight') {
      this.inputs.popupControls()?.select();
      this.commit();
      const selectedItem = this.inputs.popupControls()?.getSelectedItem();

      if (selectedItem && selectedItem === this.highlightedItem()) {
        this.highlight();
      }
    }
  }
}

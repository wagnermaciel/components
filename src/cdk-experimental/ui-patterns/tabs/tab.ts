/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {computed, signal, Signal} from '@angular/core';
import {Tablist} from './tablist';
import {ListSelectionItem} from '../list-selection/list-selection';
import {ListNavigationItem} from '../list-navigation/list-navigation';
import {ListFocusItem} from '../list-focus/list-focus';

/** The required inputs to tabs. */
export interface TabInputs extends ListNavigationItem, ListSelectionItem, ListFocusItem {
  tablist: Signal<Tablist>;
}

let count = 0;

/** An tab in a tablist. */
export class Tab {
  /** A unique identifier for the tab. */
  id = signal(`${count++}`);

  /** The position of the tab in the list. */
  index = computed(
    () =>
      this.tablist()
        .navigation.items()
        .findIndex(i => i.id() === this.id()) ?? -1,
  );

  /** Whether the tab is selected. */
  selected = computed(() => this.tablist().selection.selectedIds().includes(this.id()));

  /** Whether the tab is disabled. */
  disabled: Signal<boolean>;

  /** A reference to the parent tablist. */
  tablist: Signal<Tablist>;

  /** The tabindex of the tab. */
  tabindex: Signal<-1 | 0>;

  /** The html element that should receive focus. */
  element: Signal<HTMLElement>;

  constructor(args: Omit<TabInputs, 'id'>) {
    this.tablist = args.tablist;
    this.element = args.element;
    this.disabled = args.disabled;
    this.tabindex = this.tablist().focus.getItemTabindex(this);
  }
}

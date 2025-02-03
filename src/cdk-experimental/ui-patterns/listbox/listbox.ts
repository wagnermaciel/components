/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {Option} from './option';
import {ListSelection, ListSelectionInputs} from '../list-selection/list-selection';
import {ListTypeahead, ListTypeaheadInputs} from '../list-typeahead/list-typeahead';
import {ListNavigation, ListNavigationInputs} from '../list-navigation/list-navigation';
import {ListFocus, ListFocusInputs} from '../list-focus/list-focus';
import {computed, Signal} from '@angular/core';
import {ListboxController} from './controller';

/** The required inputs for the listbox. */
export type ListboxInputs = ListNavigationInputs<Option> &
  ListSelectionInputs<Option> &
  ListTypeaheadInputs &
  ListFocusInputs<Option>;

/** Controls the state of a listbox. */
export class Listbox {
  /** Controls navigation for the listbox. */
  navigation: ListNavigation<Option>;

  /** Controls selection for the listbox. */
  selection: ListSelection<Option>;

  /** Controls typeahead for the listbox. */
  typeahead: ListTypeahead<Option>;

  /** Controls focus for the listbox. */
  focus: ListFocus<Option>;

  /** Whether the list is vertically or horizontally oriented. */
  orientation: Signal<'vertical' | 'horizontal'>;

  /** The tabindex of the listbox. */
  tabindex: Signal<-1 | 0>;

  /** The id of the current active item. */
  activedescendant: Signal<string | null>;

  /** Whether multiple items in the list can be selected at once. */
  multiselectable: Signal<boolean>;

  /** The number of items in the listbox. */
  setsize = computed(() => this.navigation.items().length);

  private get controller(): Promise<ListboxController> {
    if (this._controller === null) {
      return this.loadController();
    }
    return Promise.resolve(this._controller);
  }
  private _controller: ListboxController | null = null;

  constructor(args: ListboxInputs) {
    this.orientation = args.orientation;
    this.multiselectable = args.multiselectable;

    this.navigation = new ListNavigation(args);
    this.selection = new ListSelection({...args, navigation: this.navigation});
    this.typeahead = new ListTypeahead({...args, navigation: this.navigation});
    this.focus = new ListFocus({...args, navigation: this.navigation});

    this.tabindex = this.focus.getListTabindex();
    this.activedescendant = this.focus.getActiveDescendant();
  }

  /** Loads the controller for the listbox. */
  async loadController(): Promise<ListboxController> {
    return import('./controller').then(({ListboxController: ListboxController}) => {
      this._controller = new ListboxController(this);
      return this._controller;
    });
  }

  /** The keydown handler for the listbox. */
  async onKeydown(event: KeyboardEvent) {
    (await this.controller).onKeydown(event);
  }

  /** The mousedown handler for the listbox. */
  async onMousedown(event: MouseEvent) {
    (await this.controller).onMousedown(event);
  }

  /** The focus handler for the listbox. */
  async onFocus() {
    if (!this._controller) {
      await this.loadController();
      await this.navigation.loadController();
      await this.selection.loadController();
      await this.typeahead.loadController();
      await this.focus.loadController();
    }
  }
}

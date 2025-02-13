/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {Tab} from './tab';
import {ListSelection, ListSelectionInputs} from '../list-selection/list-selection';
import {ListNavigation, ListNavigationInputs} from '../list-navigation/list-navigation';
import {ListFocus, ListFocusInputs} from '../list-focus/list-focus';
import {computed, Signal} from '@angular/core';
import {TablistController} from './controller';

/** The required inputs for the tablist. */
export type TablistInputs = ListNavigationInputs<Tab> &
  ListSelectionInputs<Tab> &
  ListFocusInputs<Tab>;

/** Controls the state of a tablist. */
export class Tablist {
  /** Controls navigation for the tablist. */
  navigation: ListNavigation<Tab>;

  /** Controls selection for the tablist. */
  selection: ListSelection<Tab>;

  /** Controls focus for the tablist. */
  focus: ListFocus<Tab>;

  /** Whether the list is vertically or horizontally oriented. */
  orientation: Signal<'vertical' | 'horizontal'>;

  /** The tabindex of the tablist. */
  tabindex: Signal<-1 | 0>;

  /** The id of the current active item. */
  activedescendant: Signal<string | null>;

  /** Whether multiple items in the list can be selected at once. */
  multiselectable: Signal<boolean>;

  /** The number of items in the tablist. */
  setsize = computed(() => this.navigation.items().length);

  private get controller(): Promise<TablistController> {
    if (this._controller === null) {
      return this.loadController();
    }
    return Promise.resolve(this._controller);
  }
  private _controller: TablistController | null = null;

  constructor(args: TablistInputs) {
    this.orientation = args.orientation;
    this.multiselectable = args.multiselectable;

    this.navigation = new ListNavigation(args);
    this.selection = new ListSelection({...args, navigation: this.navigation});
    this.focus = new ListFocus({...args, navigation: this.navigation});

    this.tabindex = this.focus.getListTabindex();
    this.activedescendant = this.focus.getActiveDescendant();
  }

  /** Loads the controller for the tablist. */
  async loadController(): Promise<TablistController> {
    return import('./controller').then(({TablistController: TablistController}) => {
      this._controller = new TablistController(this);
      return this._controller;
    });
  }

  /** The keydown handler for the tablist. */
  async onKeydown(event: KeyboardEvent) {
    (await this.controller).onKeydown(event);
  }

  /** The mousedown handler for the tablist. */
  async onMousedown(event: MouseEvent) {
    (await this.controller).onMousedown(event);
  }

  /** The focus handler for the tablist. */
  async onFocus() {
    if (!this._controller) {
      await this.loadController();
      await this.navigation.loadController();
      await this.selection.loadController();
      await this.focus.loadController();
    }
  }
}

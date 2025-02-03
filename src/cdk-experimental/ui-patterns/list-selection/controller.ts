/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {ListSelectionItem, ListSelection} from './list-selection';

/** Controls selection for a list of items. */
export class ListSelectionController<T extends ListSelectionItem> {
  constructor(readonly state: ListSelection<T>) {
    if (this.state.selectedIds()) {
      this.anchor();
    }
  }

  /** Selects the item at the current active index. */
  select(item?: T) {
    item = item ?? this.state.items()[this.state.navigation.activeIndex()];

    if (item.disabled() || this.state.selectedIds().includes(item.id())) {
      return;
    }

    if (!this.state.multiselectable()) {
      this.deselectAll();
    }

    // TODO: Need to discuss when to drop this.
    this.anchor();
    this.state.selectedIds.update(ids => ids.concat(item.id()));
  }

  /** Deselects the item at the current active index. */
  deselect(item?: T) {
    item = item ?? this.state.items()[this.state.navigation.activeIndex()];

    if (!item.disabled()) {
      this.state.selectedIds.update(ids => ids.filter(id => id !== item.id()));
    }
  }

  /** Toggles the item at the current active index. */
  toggle() {
    const item = this.state.items()[this.state.navigation.activeIndex()];
    this.state.selectedIds().includes(item.id()) ? this.deselect() : this.select();
  }

  /** Selects all items in the list. */
  selectAll() {
    if (!this.state.multiselectable()) {
      return; // Should we log a warning?
    }

    for (const item of this.state.items()) {
      this.select(item);
    }

    this.anchor();
  }

  /** Deselects all items in the list. */
  deselectAll() {
    for (const item of this.state.items()) {
      this.deselect(item);
    }
  }

  /** Selects the items in the list starting at the last selected item. */
  selectFromAnchor() {
    const anchorIndex = this.state.items().findIndex(i => this.state.anchorId() === i.id());
    this.selectFromIndex(anchorIndex);
  }

  /** Selects the items in the list starting at the last active item. */
  selectFromActive() {
    this.selectFromIndex(this.state.navigation.prevActiveIndex());
  }

  /** Selects the items in the list starting at the given index. */
  private selectFromIndex(index: number) {
    if (index === -1) {
      return;
    }

    const upper = Math.max(this.state.navigation.activeIndex(), index);
    const lower = Math.min(this.state.navigation.activeIndex(), index);

    for (let i = lower; i <= upper; i++) {
      this.select(this.state.items()[i]);
    }
  }

  /** Sets the selection to only the current active item. */
  selectOne() {
    this.deselectAll();
    this.select();
  }

  /** Sets the anchor to the current active index. */
  private anchor() {
    const item = this.state.items()[this.state.navigation.activeIndex()];
    this.state.anchorId.set(item.id());
  }
}

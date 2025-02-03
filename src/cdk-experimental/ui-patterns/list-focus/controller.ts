/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {ListFocusItem, ListFocus} from './list-focus';

/** Controls focus for a list of items. */
export class ListFocusController<T extends ListFocusItem> {
  constructor(readonly state: ListFocus<T>) {}

  /** Focuses the current active item. */
  focus() {
    if (this.state.focusStrategy() === 'activedescendant') {
      return;
    }

    const item = this.state.navigation.items()[this.state.navigation.activeIndex()];
    item.element().focus();
  }
}

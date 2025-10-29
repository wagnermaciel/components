/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {computed} from '@angular/core';
import {SignalLike} from '../behaviors/signal-like/signal-like';
import {ListItem} from '../behaviors/list/list';
import type {ToolbarPattern} from './toolbar';

/** An interface that allows sub patterns to expose the necessary controls for the toolbar. */
export interface ToolbarWidgetGroupControls {
  /** Whether the widget group is currently on the first item. */
  isOnFirstItem(): boolean;

  /** Whether the widget group is currently on the last item. */
  isOnLastItem(): boolean;

  /** Navigates to the next widget in the group. */
  next(wrap: boolean): void;

  /** Navigates to the previous widget in the group. */
  prev(wrap: boolean): void;

  /** Navigates to the first widget in the group. */
  first(): void;

  /** Navigates to the last widget in the group. */
  last(): void;

  /** Removes focus from the widget group. */
  unfocus(): void;

  /** Triggers the action of the currently active widget in the group. */
  trigger(): void;

  /** Navigates to the widget targeted by a pointer event. */
  goto(event: PointerEvent): void;

  /** Sets the widget group to its default initial state. */
  setDefaultState(): void;
}

/** Represents the required inputs for a toolbar widget group. */
export interface ToolbarWidgetGroupInputs<V>
  extends Omit<
    ListInputs<ToolbarWidgetPattern<V>, V>,
    'multi' | 'selectionFollowsFocus' | 'values' | 'trackBy' | 'orientation' | 'wrap'
  > {
  /** A reference to the parent toolbar. */
  toolbar: SignalLike<ToolbarPattern<V> | undefined>;

  /** A unique identifier for the widget. */
  id: SignalLike<string>;

  /** The html element that should receive focus. */
  element: SignalLike<HTMLElement>;

  /** Whether the list can have more than one selected item. */
  multi?: SignalLike<boolean>;

  /** Whether selection moves automatically with focus. */
  selectionFollowsFocus?: SignalLike<boolean>;

  /** The values of the selected items. */
  values?: SignalLike<readonly V[]>;

  /** A function to track items by. */
  trackBy?: (value: V) => unknown;

  /** The orientation of the list. */
  orientation?: SignalLike<'vertical' | 'horizontal'>;

  /** Whether the list wraps around when navigating. */
  wrap?: SignalLike<boolean>;
}

import {List, ListItem, ListInputs} from '../behaviors/list/list';
import type {ToolbarWidgetPattern} from './toolbar-widget';

/** A group of widgets within a toolbar that provides nested navigation. */
export class ToolbarWidgetGroupPattern<V>
  implements ListItem<V>, ToolbarWidgetGroupControls, List<ToolbarWidgetPattern<V>, V>
{
  /** A unique identifier for the widget. */
  readonly id: SignalLike<string>;

  /** The html element that should receive focus. */
  readonly element: SignalLike<HTMLElement>;

  /** Whether the widget is disabled. */
  readonly disabled: SignalLike<boolean>;

  /** A reference to the parent toolbar. */
  readonly toolbar: SignalLike<ToolbarPattern<V> | undefined>;

  /** The text used by the typeahead search. */
  readonly searchTerm = () => ''; // Unused because toolbar does not support typeahead.

  /** The value associated with the widget. */
  readonly value = () => '' as V; // Unused because toolbar does not support selection.

  /** Whether the widget is selectable. */
  readonly selectable = () => true; // Unused because toolbar does not support selection.

  /** The position of the widget within the toolbar. */
  readonly index = computed(() => this.toolbar()?.inputs.items().indexOf(this) ?? -1);

  /** The list behavior that manages the items in the group. */
  readonly list: List<ToolbarWidgetPattern<V>, V>;

  constructor(readonly inputs: ToolbarWidgetGroupInputs<V>) {
    this.id = inputs.id;
    this.element = inputs.element;
    this.disabled = inputs.disabled;
    this.toolbar = inputs.toolbar;
    this.list = new List({
      ...inputs,
      multi: inputs.multi ?? (() => false),
      selectionFollowsFocus: inputs.selectionFollowsFocus ?? (() => false),
      values: inputs.values ?? (() => []),
      trackBy: inputs.trackBy ?? (() => {}),
      orientation: inputs.orientation ?? (() => 'horizontal'),
      wrap: inputs.wrap ?? (() => true),
    });
  }

  /** Whether the group is currently on the first item. */
  isOnFirstItem = () => this.list.navigationBehavior.isAtFirstItem();

  /** Whether the group is currently on the last item. */
  isOnLastItem = () => this.list.navigationBehavior.isAtLastItem();

  /** Navigates to the next widget in the group. */
  next = (wrap: boolean) => this.list.next({wrap, focusElement: true});

  /** Navigates to the previous widget in the group. */
  prev = (wrap: boolean) => this.list.prev({wrap, focusElement: true});

  /** Navigates to the first widget in the group. */
  first = () => this.list.first({focusElement: true});

  /** Navigates to the last widget in the group. */
  last = () => this.list.last({focusElement: true});

  /** Removes focus from the widget group. */
  unfocus = () => this.list.unfocus();

  /** Triggers the action of the currently active widget in the group. */
  trigger = () => {
    this.list.focusBehavior.activeItem()?.toolbar().trigger();
  };

  /** Navigates to the widget targeted by a pointer event. */
  goto = (event: PointerEvent) => {
    const target = event.target;
    if (target instanceof HTMLElement) {
      const item = this.list.focusBehavior.getItem(target);
      if (item) {
        this.list.goto(item, {focusElement: true});
      }
    }
  };

  /** Sets the widget group to its default initial state. */
  setDefaultState() {
    this.list.selectionBehavior.deselectAll();
    this.list.focusBehavior.unfocus();
  }
}

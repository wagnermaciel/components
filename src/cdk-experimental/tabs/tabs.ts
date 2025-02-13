/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {
  computed,
  contentChildren,
  Directive,
  ElementRef,
  inject,
  input,
  model,
} from '@angular/core';
import {Tab} from '../ui-patterns/tabs/tab';
import {Tablist} from '../ui-patterns/tabs/tablist';
import {Tabpanel} from '../ui-patterns/tabs/tabpanel';

@Directive({
  selector: '[cdkTablist]',
  exportAs: 'cdkTablist',
  host: {
    'role': 'tablist',
    'class': 'cdk-tablist',
    '[attr.tabindex]': 'state.tabindex()',
    // '[attr.aria-disabled]': 'state.disabled()',
    '[attr.aria-multiselectable]': 'state.multiselectable()',
    '[attr.aria-activedescendant]': 'state.activedescendant()',
    '[attr.aria-orientation]': 'state.orientation()',
    '(focusin)': 'state.onFocus()',
    '(keydown)': 'state.onKeydown($event)',
    '(mousedown)': 'state.onMousedown($event)',
    // '(focusout)': '_handleFocusOut($event)',
    // '(focusin)': '_handleFocusIn()',
  },
})
export class CdkTablis {
  /** Whether the tablist is vertically or horizontally oriented. */
  orientation = input<'vertical' | 'horizontal'>('horizontal');

  /** Whether multiple tabs in the list can be selected at once. */
  multiselectable = input<boolean>(false);

  /** Whether focus should wrap when navigating. */
  wrap = input<boolean>(true);

  /** Whether disabled items in the list should be skipped when navigating. */
  skipDisabled = input<boolean>(true);

  /** The direction that text is read based on the users locale. */
  directionality = input<'rtl' | 'ltr'>('ltr');

  /** The focus strategy used by the tablist. */
  focusStrategy = input<'roving tabindex' | 'activedescendant'>('roving tabindex');

  /** The selection strategy used by the tablist. */
  selectionStrategy = input<'follow' | 'explicit'>('follow');

  /** The ids of the current selected items. */
  selectedIds = model<string[]>([]);

  /** The current index that has been navigated to. */
  activeIndex = model<number>(0);

  /** The CdkTabs nested inside of the CdkTablist. */
  private cdkTabs = contentChildren(CdkTab, {descendants: true});

  /** The Tab UIPatterns of the child CdkTabs. */
  items = computed(() => this.cdkTabs().map(tab => tab.state));

  /** The Tablist UIPattern. */
  state: Tablist = new Tablist(this);
}

@Directive({
  selector: '[cdkTab]',
  exportAs: 'cdkTab',
  host: {
    'role': 'tab',
    'class': 'cdk-tab',
    '[attr.aria-selected]': 'state.selected()',
    '[attr.tabindex]': 'state.tabindex()',
    '[attr.aria-disabled]': 'state.disabled()',
    // '[attr.aria-controls]': '',
  },
})
export class CdkTab {
  /** Whether an item is disabled. */
  disabled = input<boolean>(false);

  /** A reference to the tab element. */
  private elementRef = inject(ElementRef);

  element = computed(() => this.elementRef.nativeElement);

  /** The parent CdkTablist. */
  private cdkTablist = inject(CdkTablist);

  /** The parent Tablist UIPattern. */
  listbox = computed(() => this.cdkTablist.state);

  /** The Tab UIPattern. */
  state: Tab = new Tab(this);
}

@Directive({
  selector: '[cdkTabpanel]',
  exportAs: 'cdkTabpanel',
  host: {
    'role': 'tabpanel',
    'class': 'cdk-tabpanel',
  },
})
export class CdkTabpanel {
  /** The Tabpanel UIPattern. */
  state: Tabpanel = new Tabpanel(this);
}

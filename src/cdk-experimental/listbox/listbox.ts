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
  signal,
} from '@angular/core';
import {Option} from '../ui-patterns/listbox/option';
import {ListboxInputs, ListboxPattern} from '../ui-patterns/listbox/listbox';
import {Directionality} from '@angular/cdk/bidi';
import {startWith, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Directive({
  selector: '[cdkListbox]',
  exportAs: 'cdkListbox',
  host: {
    'role': 'listbox',
    'class': 'cdk-listbox',
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
export class CdkListbox implements ListboxInputs {
  /** Whether the list is vertically or horizontally oriented. */
  orientation = input<'vertical' | 'horizontal'>('vertical');

  /** Whether multiple items in the list can be selected at once. */
  multiselectable = input<boolean>(false);

  /** Whether focus should wrap when navigating. */
  wrap = input<boolean>(true);

  /** Whether disabled items in the list should be skipped when navigating. */
  skipDisabled = input<boolean>(true);

  /** The focus strategy used by the list. */
  focusStrategy = input<'roving tabindex' | 'activedescendant'>('roving tabindex');

  /** The selection strategy used by the list. */
  selectionStrategy = input<'follow' | 'explicit'>('follow');

  /** The amount of time before the typeahead search is reset. */
  delay = input<number>(0.5);

  /** The ids of the current selected items. */
  selectedIds = model<string[]>([]);

  /** The current index that has been navigated to. */
  activeIndex = model<number>(0);

  /** The CdkOptions nested inside of the CdkListbox. */
  private cdkOptions = contentChildren(CdkOption, {descendants: true});

  /** The Option UIPatterns of the child CdkOptions. */
  items = computed(() => this.cdkOptions().map(option => option.state));

  /** The directionality (LTR / RTL) context for the application (or a subtree of it). */
  private dir = inject(Directionality);

  /** A signal wrapper for directionality. */
  directionality = signal<'rtl' | 'ltr'>('rtl');

  /** Emits when the list has been destroyed. */
  private readonly destroyed = new Subject<void>();

  /** The Listbox UIPattern. */
  state: ListboxPattern = new ListboxPattern(this);

  constructor() {
    this.dir.change
      .pipe(startWith(this.dir.value), takeUntil(this.destroyed))
      .subscribe(value => this.directionality.set(value));
  }

  ngOnDestroy() {
    this.destroyed.complete();
  }
}

@Directive({
  selector: '[cdkOption]',
  exportAs: 'cdkOption',
  host: {
    'role': 'option',
    'class': 'cdk-option',
    '[attr.aria-selected]': 'state.selected()',
    '[attr.tabindex]': 'state.tabindex()',
    '[attr.aria-disabled]': 'state.disabled()',
    // '[class.cdk-option-active]': 'isActive()',
    // '(click)': '_clicked.next($event)',
    // '(focus)': '_handleFocus()',
  },
})
export class CdkOption {
  /** Whether an item is disabled. */
  disabled = input<boolean>(false);

  /** The text used by the typeahead search. */
  label = input<string>();

  /** The text used by the typeahead search. */
  searchTerm = computed(() => this.label() ?? this.element().textContent);

  /** A reference to the option element. */
  private elementRef = inject(ElementRef);

  element = computed(() => this.elementRef.nativeElement);

  /** The parent CdkListbox. */
  private cdkListbox = inject(CdkListbox);

  /** The parent Listbox UIPattern. */
  listbox = computed(() => this.cdkListbox.state);

  /** The Option UIPattern. */
  state: Option = new Option(this);
}

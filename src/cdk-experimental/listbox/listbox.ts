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
  OnDestroy,
  signal,
} from '@angular/core';
import {OptionPattern} from '@angular/cdk-experimental/ui-patterns/listbox/option';
import {ListboxInputs, ListboxPattern} from '@angular/cdk-experimental/ui-patterns/listbox/listbox';
import {Directionality} from '@angular/cdk/bidi';
import {startWith, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

/**
 * A listbox container.
 *
 * Listboxes are used to display a list of items for a user to select from. The CdkListbox is meant
 * to be used in conjunction with CdkOption as follows:
 *
 * ```html
 * <ul cdkListbox>
 *   <li cdkOption>Item 1</li>
 *   <li cdkOption>Item 2</li>
 *   <li cdkOption>Item 3</li>
 * </ul>
 * ```
 */
@Directive({
  selector: '[cdkListbox]',
  exportAs: 'cdkListbox',
  host: {
    'role': 'listbox',
    'class': 'cdk-listbox',
    '[attr.tabindex]': 'state.tabindex()',
    '[attr.aria-disabled]': 'state.disabled()',
    '[attr.aria-multiselectable]': 'state.multiselectable()',
    '[attr.aria-activedescendant]': 'state.activedescendant()',
    '[attr.aria-orientation]': 'state.orientation()',
    '(focusin)': 'state.onFocus()',
    '(keydown)': 'state.onKeydown($event)',
    '(mousedown)': 'state.onMousedown($event)',
  },
})
export class CdkListbox implements ListboxInputs, OnDestroy {
  /** The directionality (LTR / RTL) context for the application (or a subtree of it). */
  private _dir = inject(Directionality);

  /** Whether the list is vertically or horizontally oriented. */
  orientation = input<'vertical' | 'horizontal'>('vertical');

  /** Whether multiple items in the list can be selected at once. */
  multiselectable = input<boolean>(false);

  /** Whether focus should wrap when navigating. */
  wrap = input<boolean>(true);

  /** Whether disabled items in the list should be skipped when navigating. */
  skipDisabled = input<boolean>(true);

  /** The focus strategy used by the list. */
  focusMode = input<'roving' | 'activedescendant'>('roving');

  /** The selection strategy used by the list. */
  selectionMode = input<'follow' | 'explicit'>('follow');

  /** The amount of time before the typeahead search is reset. */
  delay = input<number>(0.5); // Picked arbitrarily.

  /** The ids of the current selected items. */
  selectedIds = model<string[]>([]);

  /** The current index that has been navigated to. */
  activeIndex = model<number>(0);

  /** The CdkOptions nested inside of the CdkListbox. */
  private _cdkOptions = contentChildren(CdkOption, {descendants: true});

  /** The Option UIPatterns of the child CdkOptions. */
  items = computed(() => this._cdkOptions().map(option => option.state));

  /** A signal wrapper for directionality. */
  directionality = signal<'ltr' | 'rtl'>('ltr');

  /** Emits when the list has been destroyed. */
  private readonly _destroyed = new Subject<void>();

  /** Whether the listbox is disabled. */
  disabled = input<boolean>(false);

  /** The Listbox UIPattern. */
  state: ListboxPattern = new ListboxPattern(this);

  constructor() {
    this._dir.change
      .pipe(startWith(this._dir.value), takeUntil(this._destroyed))
      .subscribe(value => this.directionality.set(value));
  }

  ngOnDestroy() {
    this._destroyed.complete();
  }
}

/** A selectable option in a CdkListbox. */
@Directive({
  selector: '[cdkOption]',
  exportAs: 'cdkOption',
  host: {
    'role': 'option',
    'class': 'cdk-option',
    '[attr.aria-selected]': 'state.selected()',
    '[attr.tabindex]': 'state.tabindex()',
    '[attr.aria-disabled]': 'state.disabled()',
  },
})
export class CdkOption {
  /** A reference to the option element. */
  private _elementRef = inject(ElementRef);

  /** The parent CdkListbox. */
  private _cdkListbox = inject(CdkListbox);

  /** Whether an item is disabled. */
  disabled = input<boolean>(false);

  /** The text used by the typeahead search. */
  label = input<string>();

  /** The text used by the typeahead search. */
  searchTerm = computed(() => this.label() ?? this.element().textContent);

  /** A reference to the option element. */
  element = computed(() => this._elementRef.nativeElement);

  /** The parent Listbox UIPattern. */
  listbox = computed(() => this._cdkListbox.state);

  /** The Option UIPattern. */
  state = new OptionPattern(this);
}

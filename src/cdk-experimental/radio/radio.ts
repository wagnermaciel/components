/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {
  afterRenderEffect,
  booleanAttribute,
  computed,
  contentChildren,
  Directive,
  ElementRef,
  inject,
  input,
  linkedSignal,
  model,
  signal,
  WritableSignal,
} from '@angular/core';
import {RadioButtonPattern, RadioGroupPattern} from '../ui-patterns';
import {Directionality} from '@angular/cdk/bidi';
import {_IdGenerator} from '@angular/cdk/a11y';

// TODO: Move mapSignal to it's own file so it can be reused across components.

/**
 * Creates a new writable signal (signal V) whose value is connected to the given original
 * writable signal (signal T) such that updating signal V updates signal T and vice-versa.
 *
 * This function establishes a two-way synchronization between the source signal and the new mapped
 * signal. When the source signal changes, the mapped signal updates by applying the `transform`
 * function. When the mapped signal is explicitly set or updated, the change is propagated back to
 * the source signal by applying the `reverse` function.
 */
export function mapSignal<T, V>(
  originalSignal: WritableSignal<T>,
  operations: {
    transform: (value: T) => V;
    reverse: (value: V) => T;
  },
) {
  const mappedSignal = linkedSignal(() => operations.transform(originalSignal()));
  const updateMappedSignal = mappedSignal.update;
  const setMappedSignal = mappedSignal.set;

  mappedSignal.set = (newValue: V) => {
    setMappedSignal(newValue);
    originalSignal.set(operations.reverse(newValue));
  };

  mappedSignal.update = (updateFn: (value: V) => V) => {
    updateMappedSignal(oldValue => updateFn(oldValue));
    originalSignal.update(oldValue => operations.reverse(updateFn(operations.transform(oldValue))));
  };

  return mappedSignal;
}

/**
 * A radio button group container.
 *
 * Radio groups are used to group multiple radio buttons or radio group labels so they function as
 * a single form control. The CdkRadioGroup is meant to be used in conjunction with CdkRadioButton
 * as follows:
 *
 * ```html
 * <div cdkRadioGroup>
 *   <label cdkRadioButton value="1">Option 1</label>
 *   <label cdkRadioButton value="2">Option 2</label>
 *   <label cdkRadioButton value="3">Option 3</label>
 * </div>
 * ```
 */
@Directive({
  selector: '[cdkRadioGroup]',
  exportAs: 'cdkRadioGroup',
  host: {
    'role': 'radiogroup',
    'class': 'cdk-radio-group',
    '[attr.tabindex]': 'pattern.tabindex()',
    '[attr.aria-readonly]': 'pattern.readonly()',
    '[attr.aria-disabled]': 'pattern.disabled()',
    '[attr.aria-orientation]': 'pattern.orientation()',
    '[attr.aria-activedescendant]': 'pattern.activedescendant()',
    '(keydown)': 'pattern.onKeydown($event)',
    '(pointerdown)': 'pattern.onPointerdown($event)',
    '(focusin)': 'onFocus()',
  },
})
export class CdkRadioGroup<V> {
  /** The CdkRadios nested inside of the CdkRadioGroup. */
  private readonly _cdkRadios = contentChildren(CdkRadio<V>, {descendants: true});

  /** A signal wrapper for directionality. */
  protected textDirection = inject(Directionality).valueSignal;

  /** The RadioButton UIPatterns of the child CdkRadioButtons. */
  protected items = computed(() =>
    this._cdkRadios()
      .map(radio => radio.radioButtonPattern)
      .filter((pattern): pattern is RadioButtonPattern<V> => pattern !== undefined),
  );

  /** Whether the radio group is vertically or horizontally oriented. */
  orientation = input<'vertical' | 'horizontal'>('horizontal');

  /** Whether disabled items in the group should be skipped when navigating. */
  skipDisabled = input(true, {transform: booleanAttribute});

  /** The focus strategy used by the radio group. */
  focusMode = input<'roving' | 'activedescendant'>('roving');

  /** Whether the radio group is disabled. */
  disabled = input(false, {transform: booleanAttribute});

  /** Whether the radio group is readonly. */
  readonly = input(false, {transform: booleanAttribute});

  /** The value of the currently selected radio button. */
  value = model<V | null>(null);

  /** The internal selection state for the radio group. */
  private readonly _value = mapSignal<V | null, V[]>(this.value, {
    transform: value => (value !== null ? [value] : []),
    reverse: values => (values.length === 0 ? null : values[0]),
  });

  /** The RadioGroup UIPattern. */
  pattern: RadioGroupPattern<V> = new RadioGroupPattern<V>({
    // ListNavigationInputs
    items: this.items,
    orientation: this.orientation,
    textDirection: this.textDirection,
    skipDisabled: this.skipDisabled,
    focusMode: this.focusMode,
    activeIndex: signal(0),
    // SelectionInputs
    value: this._value,
    readonly: this.readonly,
    disabled: this.disabled,
  });

  /** Whether the radio group has received focus yet. */
  private _hasFocused = signal(false);

  constructor() {
    afterRenderEffect(() => {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        const violations = this.pattern.validate();
        for (const violation of violations) {
          console.error(violation);
        }
      }
    });

    afterRenderEffect(() => {
      if (!this._hasFocused()) {
        this.pattern.setDefaultState();
      }
    });
  }

  onFocus() {
    this._hasFocused.set(true);
  }
}

/** Label for a CdkRadioButton. */
@Directive({
  selector: '[cdkRadioLabel]',
  host: {
    'class': 'cdk-radio-label',
  },
})
export class CdkRadioLabel {}

/**
 * A radio button component.
 *
 * This component is used in conjunction with CdkRadioGroup and CdkRadioLabel to create a radio
 * button.
 *
 * ```html
 * <div cdkRadio value="1">
 *   <div cdkRadioButton></div>
 *   <label cdkRadioLabel>Option 1</label>
 * </div>
 * ```
 */
@Directive({
  selector: '[cdkRadio]',
  exportAs: 'cdkRadio',
  host: {
    'class': 'cdk-radio',
  },
})
export class CdkRadio<V> {
  /** The CdkRadioButton nested inside the CdkRadio. */
  private readonly _cdkRadioButton = contentChildren(CdkRadioButton, {descendants: true});
  /** The CdkRadioLabel nested inside the CdkRadio. */
  private readonly _cdkRadioLabel = contentChildren(CdkRadioLabel, {descendants: true});

  /** The value associated with the radio button. */
  value = input.required<V>();

  /** Whether the radio button is disabled. */
  disabled = input(false, {transform: booleanAttribute});

  /** The RadioButton UIPattern of the inner CdkRadioButton. */
  get radioButtonPattern(): RadioButtonPattern<V> | undefined {
    const radioButton = this._cdkRadioButton()[0];
    return radioButton?.pattern;
  }

  // TODO: Connect CdkRadioLabel to CdkRadioButton, likely via aria-labelledby.
}

/** A selectable radio button in a CdkRadioGroup. */
@Directive({
  selector: '[cdkRadioButton]',
  exportAs: 'cdkRadioButton',
  host: {
    'role': 'radio',
    'class': 'cdk-radio-button',
    '[class.cdk-active]': 'pattern.active()',
    '[attr.tabindex]': 'pattern.tabindex()',
    '[attr.aria-checked]': 'pattern.selected()',
    // Note: pattern.disabled() will reflect the disabled state from CdkRadio
    '[attr.aria-disabled]': 'pattern.disabled()',
    '[id]': 'pattern.id()',
  },
})
export class CdkRadioButton<V> {
  /** A reference to the radio button element. */
  private readonly _elementRef = inject(ElementRef);

  /** The parent CdkRadio directive. */
  private readonly _cdkRadio = inject(CdkRadio<V>);

  /** The parent CdkRadioGroup. */
  // RadioButtonPattern needs access to the group's pattern.
  // CdkRadio should be a child of CdkRadioGroup.
  private readonly _cdkRadioGroup = inject(CdkRadioGroup<V>);

  /** A unique identifier for the radio button. */
  private readonly _generatedId = inject(_IdGenerator).getId('cdk-radio-button-');

  /** A unique identifier for the radio button. */
  protected id = computed(() => this._generatedId);

  /** The value associated with the radio button (obtained from CdkRadio). */
  protected value = computed(() => this._cdkRadio.value());

  /** The parent RadioGroup UIPattern. */
  protected group = computed(() => this._cdkRadioGroup.pattern);

  /** A reference to the radio button element to be focused on navigation. */
  protected element = computed(() => this._elementRef.nativeElement);

  /** Whether the radio button is disabled (obtained from CdkRadio). */
  protected disabled = computed(() => this._cdkRadio.disabled());

  /** The RadioButton UIPattern. */
  pattern = new RadioButtonPattern<V>({
    // `this` can't be spread here directly as `value` and `disabled` are now computed signals.
    // We need to provide the signals directly to the pattern.
    id: this.id,
    value: this.value,
    disabled: this.disabled,
    group: this.group,
    element: this.element,
  });
}

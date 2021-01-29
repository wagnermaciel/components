/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {coerceNumberProperty, NumberInput} from '@angular/cdk/coercion';
import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, EventEmitter, Inject, Input, Output} from '@angular/core';
import {Thumb} from '@material/slider';
import {MatSlider} from './slider';

/**
 * The native input(s) used by the MatSlider.
 */
@Directive({
  selector: '[mat-slider-thumb]',
  host: {
    'class': 'mdc-slider__input',
    'type': 'range',
    '[min]': 'min',
    '[max]': 'max',
    '[step]': 'step',
    '[attr.value]': 'value',
    '(focus)': '_focus.emit()',
    '(blur)': '_blur.emit()',
  }
}) export class MatSliderThumb {
  /** The value of this slider input. */
  @Input()
  get value(): string|null {
    const attrValue = this.getRootEl().getAttribute('value');
    if (attrValue !== null && this._value !== attrValue) {
      this._value = attrValue;
    }
    return this._value;
  };
  set value(v: string|null) {
    this.initialized = true;
    this._value = v;
    const hostElement = this.getRootEl();
    hostElement.value = v!;
    hostElement.setAttribute('value', v!);
    if (this._slider.initialized) {
      this._slider.setValue(coerceNumberProperty(v), this.thumb);
    }
  };
  private _value: string|null;

  /** The minimum value that this slider input can have. */
  @Input()
  get min(): number {
    if (this._slider.isRange && this.thumb === Thumb.END) {
      return this._slider.getValue(Thumb.START);
    }
    return this._slider.min;
  };
  set min(v: number) { throw Error('Invalid attribute "min" on MatSliderThumb.'); }

  /** The maximum value that this slider input can have. */
  @Input()
  get max(): number {
    if (this._slider.isRange && this.thumb === Thumb.START) {
      return this._slider.getValue(Thumb.END);
    }
    return this._slider.max;
  };
  set max(v: number) { throw Error('Invalid attribute "max" on MatSliderThumb.'); }

  /** The size of each increment between the values of the slider. */
  @Input()
  get step(): number { return this._slider.step; }
  set step(v: number) { throw Error('Invalid attribute "step" on MatSliderThumb.'); }

  /** MDC Slider does not use the disabled attribute it's native inputs. */
  @Input()
  set disabled(v: boolean) { throw Error('Invalid attribute "disabled" on MatSliderThumb.'); }

  @Output() readonly _blur: EventEmitter<void> = new EventEmitter<void>();
  @Output() readonly _focus: EventEmitter<void> = new EventEmitter<void>();

  /** Indicates which slider thumb this input corresponds to. */
  thumb: Thumb;

  /** Whether or not this slider input value has been initialized. */
  initialized: boolean;

  constructor(
    @Inject(DOCUMENT) private readonly _document: any,
    private _el: ElementRef,
    private _slider: MatSlider) {
      // We need to initialize these values in the constructor because if the value is set by the
      // developer, the value will be calculated before the min and max are. Because of this
      // behavior, if we hit the edge case where the value is less than the min or greater than the
      // max, the value will be set to the min or max respectively instead of the desired/expected
      // value.
      const hostElement = this.getRootEl();
      hostElement.min = this._slider.min.toString();
      hostElement.max = this._slider.max.toString();
      hostElement.step = this._slider.step.toString();
    }

  init({ thumb }: { thumb: Thumb }) {
    this.thumb = thumb;

    // Normal slider - end thumb default value is min.
    // Ranged slider - start thumb default value is min, end thumb default value is max.
    if (!this.initialized) {
      this.value = (this._slider.isRange && thumb === Thumb.END)
        ? this._slider.max.toString()
        : this._slider.min.toString();
    }

    // If the slider is disabled, MDC needs us to set this property before the foundation is init.
    if (this._slider.isDisabled) {
      this.getRootEl().disabled = true;
    }
  }

  getRootEl(): HTMLInputElement { return this._el.nativeElement; };
  isFocused(): boolean { return this.getRootEl() === this._document.activeElement; }

  static ngAcceptInputType_value: NumberInput;
}

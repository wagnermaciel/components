/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {coerceNumberProperty, NumberInput} from '@angular/cdk/coercion';
import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
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
  }
}) export class MatSliderThumb {
  /** The value of this slider input. */
  @Input()
  get value(): string|null {
    // Normally, we want to use the value attribute (which is set by the MDC foundation), but if
    // the MDC foundation has not yet been initialized, we default to the value of the input.
    return this._slider.initialized
      ? this.getRootEl().getAttribute('value')
      : this._value;
  };
  set value(v: string|null) {
    this._value = v;
    this.initialized = true;
    if (this._slider.initialized) {
      this._slider.setValue(coerceNumberProperty(v), this.thumb);
    }
    this.getRootEl().setAttribute('value', v!);
    this.getRootEl().value = v!;
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


  /** Indicates which slider thumb this input corresponds to. */
  thumb: Thumb;

  /** Whether or not this slider input value has been initialized. */
  initialized: boolean;

  constructor(
    private _el: ElementRef,
    private _slider: MatSlider) {}

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

  static ngAcceptInputType_value: NumberInput;
}

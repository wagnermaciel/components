/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  BooleanInput,
  coerceBooleanProperty,
  coerceNumberProperty,
  NumberInput,
} from '@angular/cdk/coercion';
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  Output,
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Thumb} from '@material/slider';
import {Subject} from 'rxjs';
import {
  MatSliderInterface,
  MatSliderRangeThumbInterface,
  MatSliderThumbInterface,
  MAT_SLIDER_RANGE_THUMB_TOKEN,
  MAT_SLIDER_THUMB_TOKEN,
  MAT_SLIDER_TOKEN,
} from './slider-interface';

/**
 * Provider that allows the slider thumb to register as a ControlValueAccessor.
 * @docs-private
 */
export const MAT_SLIDER_THUMB_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderThumb),
  multi: true,
};

/**
 * Provider that allows the range slider thumb to register as a ControlValueAccessor.
 * @docs-private
 */
export const MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderRangeThumb),
  multi: true,
};

/** Represents an event emitted by the MatSlider component. */
export class MatSliderEvent {
  /** The html element that was the target of the event. */
  target: HTMLInputElement;

  /** The MatSliderThumb that was interacted with. */
  source: MatSliderThumbInterface;

  /** The MatSlider that was interacted with. */
  parent: MatSliderInterface;

  /** The current value of the slider. */
  value: number;
}

/**
 * Directive that adds slider-specific behaviors to an input element inside `<mat-slider>`.
 * Up to two may be placed inside of a `<mat-slider>`.
 *
 * If one is used, the selector `matSliderThumb` must be used, and the outcome will be a normal
 * slider. If two are used, the selectors `matSliderStartThumb` and `matSliderEndThumb` must be
 * used, and the outcome will be a range slider with two slider thumbs.
 */
@Directive({
  selector: 'input[matSliderThumb]',
  exportAs: 'matSliderThumb',
  host: {
    'class': 'mdc-slider__input',
    'type': 'range',
    '[attr.aria-valuetext]': '_valuetext',
    '(change)': '_onChange()',
    '(input)': '_onInput()',
    // TODO(wagnermaciel): Consider using a global event listener instead.
    // Reason: I have found a semi-consistent way to mouse up without triggering this event.
    '(blur)': '_onBlur()',
    '(focus)': '_onFocus()',
  },
  providers: [
    MAT_SLIDER_THUMB_VALUE_ACCESSOR,
    {provide: MAT_SLIDER_THUMB_TOKEN, useExisting: MatSliderThumb},
  ],
})
export class MatSliderThumb implements MatSliderThumbInterface, OnDestroy, ControlValueAccessor {
  @Input()
  get value(): number {
    return coerceNumberProperty(this._hostElement.value);
  }
  set value(v: NumberInput) {
    const val = coerceNumberProperty(v).toString();
    if (this._hasSetInitialValue && !this._isActive) {
      this._hostElement.value = val;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
    } else {
      this._initialValue = val;
    }
  }
  @Output() readonly valueChange: EventEmitter<string> = new EventEmitter<string>();

  /** The current translateX in px of the slider visual thumb. */
  get translateX(): number {
    if (this._slider.min >= this._slider.max) {
      this._translateX = this._slider._inputOffset;
      return this._translateX as number;
    }
    if (this._translateX === undefined) {
      this._translateX = this._calcTranslateXByValue();
    }
    return this._translateX;
  }
  set translateX(v: number) {
    this._translateX = v;
  }
  private _translateX: number | undefined;

  /** Indicates whether this thumb is the start or end thumb. */
  thumbPosition: Thumb = Thumb.END;

  get min(): number {
    return coerceNumberProperty(this._hostElement.min);
  }
  set min(v: NumberInput) {
    this._hostElement.min = coerceNumberProperty(v).toString();
    this._cdr.detectChanges();
  }

  get max(): number {
    return coerceNumberProperty(this._hostElement.max);
  }
  set max(v: NumberInput) {
    this._hostElement.max = coerceNumberProperty(v).toString();
    this._cdr.detectChanges();
  }

  get step(): number {
    return coerceNumberProperty(this._hostElement.step);
  }
  set step(v: NumberInput) {
    this._hostElement.step = coerceNumberProperty(v).toString();
    this._cdr.detectChanges();
  }

  get disabled(): boolean {
    return coerceBooleanProperty(this._hostElement.disabled);
  }
  set disabled(v: BooleanInput) {
    this._hostElement.disabled = coerceBooleanProperty(v);
    this._cdr.detectChanges();

    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }

  get percentage(): number {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }

  get fillPercentage(): number {
    if (!this._slider._cachedTrackWidth) {
      return this._slider._isRtl ? 1 : 0;
    }
    if (this.translateX === this._slider._inputOffset) {
      return 0;
    }
    return (this.translateX - this._slider._inputOffset) / this._slider._cachedTrackWidth;
  }

  /** The host native HTML input element. */
  _hostElement: HTMLInputElement;

  /** The aria-valuetext string representation of the input's value. */
  _valuetext: string;

  /** The radius of a native html slider's knob. */
  _knobRadius: number = 8;

  /** Whether user's cursor is currently in a mouse down state on the input. */
  _isActive: boolean = false;

  /** Whether the input is currently focused (either by tab or after clicking). */
  _isFocused: boolean = false;

  /** Used to relay updates to _isFocused to the slider visual thumbs. */
  private _setIsFocused(v: boolean): void {
    this._isFocused = v;
  }

  /**
   * Whether the initial value has been set.
   * This exists because the initial value cannot be immediately set because the min and max
   * must first be relayed from the parent MatSlider component, which can only happen later
   * in the component lifecycle.
   */
  private _hasSetInitialValue: boolean = false;

  /** The stored initial value. */
  _initialValue: string | undefined;

  /** Defined when a user is using a form control to manage slider value & validation. */
  private _formControl: FormControl | undefined;

  /** Emits when the component is destroyed. */
  protected readonly _destroyed = new Subject<void>();

  /**
   * Indicates whether UI updates should be skipped.
   *
   * This flag is used to avoid flickering
   * when correcting values on pointer up/down.
   */
  _skipUIUpdate: boolean = false;

  /** Callback called when the slider input value changes. */
  private _onChangeFn: (value: any) => void = () => {};

  /** Callback called when the slider input has been touched. */
  private _onTouchedFn: () => void = () => {};

  constructor(
    readonly _ngZone: NgZone,
    readonly _elementRef: ElementRef<HTMLInputElement>,
    readonly _cdr: ChangeDetectorRef,
    @Inject(MAT_SLIDER_TOKEN) protected _slider: MatSliderInterface,
  ) {
    this._hostElement = _elementRef.nativeElement;
    this._ngZone.runOutsideAngular(() => {
      this._hostElement.addEventListener('pointerdown', this._onPointerDown);
      this._hostElement.addEventListener('pointermove', this._onPointerMove);
      this._hostElement.addEventListener('pointerup', this._onPointerUp);
    });
  }

  ngOnDestroy(): void {
    this._hostElement.removeEventListener('pointerdown', this._onPointerDown);
    this._hostElement.removeEventListener('pointermove', this._onPointerMove);
    this._hostElement.removeEventListener('pointerup', this._onPointerUp);
    this._destroyed.next();
    this._destroyed.complete();
  }

  initProps(): void {
    this._updateWidthInactive();
    this.disabled = this._slider.disabled;
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
    this._initValue();
  }

  initUI(): void {
    this._updateThumbUIByValue();
  }

  _initValue(): void {
    this._hasSetInitialValue = true;
    if (this._initialValue === undefined) {
      this.value = this._getDefaultValue();
    } else {
      this.value = this._initialValue;
    }
  }

  _getDefaultValue(): number {
    return this.min;
  }

  _onBlur(): void {
    this._setIsFocused(false);
    this._onTouchedFn();
  }

  _onFocus(): void {
    this._setIsFocused(true);
  }

  _onChange(): void {
    // only used to handle the edge case where user
    // mousedown on the slider then uses arrow keys.
    if (this._isActive) {
      this._updateThumbUIByValue({withAnimation: true});
    }
  }

  _onInput(): void {
    this.valueChange.emit(this._hostElement.value);
    this._onChangeFn(this.value);
    // handles arrowing and updating the value when
    // a step is defined.
    if (this._slider.step || !this._isActive) {
      this._updateThumbUIByValue({withAnimation: true});
    }
    this._slider._onValueChange(this);
  }

  _onNgControlValueChange(): void {
    // only used to handle when the value change
    // originates outside of the slider.
    if (!this._isActive || !this._isFocused) {
      this._slider._onValueChange(this);
      this._updateThumbUIByValue();
    }
    this._slider.disabled = this._formControl!.disabled;
  }

  _onPointerDown = (event: PointerEvent): void => {
    this._pointerDownHandler(event);
  };

  _pointerDownHandler(event: PointerEvent): void {
    if (this.disabled || event.button !== 0) {
      return;
    }

    this._isActive = true;
    this._setIsFocused(true);
    this._updateWidthActive();
    this._slider._updateDimensions();

    // Does nothing if a step is defined because we
    // want the value to snap to the values on input.
    if (!this._slider.step) {
      this._updateThumbUIByPointerEvent(event, {withAnimation: true});
    }

    if (!this.disabled) {
      this._handleValueCorrection(event);
    }
  }

  /**
   * Corrects the value of the slider on pointer up/down.
   *
   * Called on pointer down and up because the value is set based
   * on the inactive width instead of the active width.
   */
  private _handleValueCorrection(event: PointerEvent): void {
    // Don't update the UI with the current value! The value on pointerdown
    // and pointerup is calculated in the split second before the input(s)
    // resize. See _updateWidthInactive() and _updateWidthActive() for more
    // details.
    this._skipUIUpdate = true;

    // Note that this function gets triggered before the actual value of the
    // slider is updated. This means if we were to set the value here, it
    // would immediately be overwritten. Using setTimeout ensures the setting
    // of the value happens after the value has been updated by the
    // pointerdown event.
    setTimeout(() => {
      this._skipUIUpdate = false;
      this._fixValue(event);
    }, 0);
  }

  /** Corrects the value of the slider based on the pointer event's position. */
  _fixValue(event: PointerEvent): void {
    const xPos = event.clientX - this._slider._cachedLeft - this._slider._rippleRadius;
    const width = this._slider._cachedWidth - this._slider._inputOffset * 2;

    const percentage = this._slider._isRtl ? 1 - xPos / width : xPos / width;

    // To ensure the percentage is rounded to two decimals.
    const fixedPercentage = Math.round(percentage * 100) / 100;

    const value = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;

    const prevValue = this.value;
    if (value === prevValue) {
      console.log('no fix', value);
      // Because we prevented UI updates, if it turns out that the race
      // condition didn't happen and the value is already correct, we
      // have to apply the ui updates now.
      this._slider._onValueChange(this);
      this._updateThumbUIByValue({withAnimation: this._slider._hasAnimation});
      return;
    }

    console.log('fix value', value);
    this.value = value;
    this.valueChange.emit(this._hostElement.value);
    this._onChangeFn(this.value);
    this._slider._onValueChange(this);
    this._updateThumbUIByValue({withAnimation: this._slider._hasAnimation});
  }

  _onPointerMove = (event: PointerEvent): void => {
    this._pointerMoveHandler(event);
  };

  _pointerMoveHandler(event: PointerEvent): void {
    // Again, does nothing if a step is defined because
    // we want the value to snap to the values on input.
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByPointerEvent(event);
    }
  }

  _onPointerUp = (event: PointerEvent): void => {
    this._pointerUpHandler(event);
  };

  _pointerUpHandler(event: PointerEvent): void {
    this._isActive = false;
    this._updateWidthInactive();
    if (!this.disabled) {
      this._handleValueCorrection(event);
    }
  }

  _clamp(v: number): number {
    return Math.max(
      Math.min(v, this._slider._cachedWidth - this._slider._inputOffset),
      this._slider._inputOffset,
    );
  }

  _calcTranslateXByValue(): number {
    if (this._slider._isRtl) {
      return (1 - this.percentage) * this._slider._cachedTrackWidth + this._slider._inputOffset;
    }
    return this.percentage * this._slider._cachedTrackWidth + this._slider._inputOffset;
  }

  _calcTranslateXByPointerEvent(event: PointerEvent): number {
    return event.clientX - this._slider._cachedLeft;
  }

  _updateHiddenUI(): void {
    this._updateThumbUIByValue();
    this._updateWidthInactive();
  }

  /**
   * Used to set the slider width to the correct
   * dimensions while the user is dragging.
   */
  _updateWidthActive(): void {
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    this._hostElement.style.width = `calc(100% - ${this._slider._inputPadding * 2}px)`;
  }

  /**
   * Sets the slider input to disproportionate dimensions to allow for touch
   * events to be captured on touch devices.
   */
  _updateWidthInactive(): void {
    this._hostElement.style.padding = '0px';
    this._hostElement.style.width = '100%';
  }

  _updateThumbUIByValue(options?: {withAnimation: boolean}): void {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }

  _updateThumbUIByPointerEvent(event: PointerEvent, options?: {withAnimation: boolean}): void {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options);
  }

  _updateThumbUI(options?: {withAnimation: boolean}) {
    this._slider._setTransition(!!options?.withAnimation);
    this._slider._onTranslateXChange(this);
  }

  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Registers a callback to be invoked when the input's value changes from user input.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnChange(fn: any): void {
    this._onChangeFn = fn;
  }

  /**
   * Registers a callback to be invoked when the input is blurred by the user.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnTouched(fn: any): void {
    this._onTouchedFn = fn;
  }

  /**
   * Sets the disabled state of the slider.
   * @param isDisabled The new disabled state
   * @docs-private
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  focus(): void {
    this._hostElement.focus();
  }

  blur(): void {
    this._hostElement.blur();
  }
}

@Directive({
  selector: 'input[matSliderStartThumb], input[matSliderEndThumb]',
  exportAs: 'matSliderRangeThumb',
  providers: [
    MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR,
    {provide: MAT_SLIDER_RANGE_THUMB_TOKEN, useExisting: MatSliderRangeThumb},
  ],
})
export class MatSliderRangeThumb extends MatSliderThumb implements MatSliderRangeThumbInterface {
  getSibling(): MatSliderRangeThumbInterface | undefined {
    if (!this._sibling) {
      this._sibling = this._slider._getInput(this._isEndThumb ? Thumb.START : Thumb.END) as
        | MatSliderRangeThumb
        | undefined;
    }
    return this._sibling;
  }
  private _sibling: MatSliderRangeThumb | undefined;

  /** Returns the minimum translateX position allowed for this slider input's visual thumb. */
  getMinPos(): number {
    const sibling = this.getSibling();
    if (!this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._inputOffset;
  }

  /** Returns the maximum translateX position allowed for this slider input's visual thumb. */
  getMaxPos(): number {
    const sibling = this.getSibling();
    if (this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._cachedWidth - this._slider._inputOffset;
  }

  _setIsLeftThumb(): void {
    this._isLeftThumb =
      (this._isEndThumb && this._slider._isRtl) || (!this._isEndThumb && !this._slider._isRtl);
  }

  /** Whether this slider corresponds to the input on the left hand side. */
  _isLeftThumb: boolean;

  /** Whether this slider corresponds to the input with greater value. */
  _isEndThumb: boolean;

  constructor(
    _ngZone: NgZone,
    @Inject(MAT_SLIDER_TOKEN) _slider: MatSliderInterface,
    _elementRef: ElementRef<HTMLInputElement>,
    override readonly _cdr: ChangeDetectorRef,
  ) {
    super(_ngZone, _elementRef, _cdr, _slider);
    this._isEndThumb = this._hostElement.hasAttribute('matSliderEndThumb');
    this._setIsLeftThumb();
    this.thumbPosition = this._isEndThumb ? Thumb.END : Thumb.START;
  }

  override _getDefaultValue(): number {
    return this._isEndThumb && this._slider._isRange ? this.max : this.min;
  }

  override initUI(): void {
    this._updateHiddenUI();
  }

  override _onInput(): void {
    super._onInput();
    this._updateSibling();
    if (!this._isActive) {
      this._updateWidthInactive();
    }
  }

  override _onNgControlValueChange(): void {
    super._onNgControlValueChange();
    this.getSibling()?._updateMinMax();
  }

  override _pointerDownHandler(event: PointerEvent): void {
    if (this.disabled) {
      return;
    }
    if (this._sibling) {
      this._sibling._updateWidthActive();
      this._sibling._hostElement.classList.add('mat-slider__input--no-pointer-events');
    }
    super._pointerDownHandler(event);
  }

  override _pointerUpHandler(event: PointerEvent): void {
    super._pointerUpHandler(event);
    if (this._sibling) {
      this._sibling._updateWidthInactive();
      this._sibling._hostElement.classList.remove('mat-slider__input--no-pointer-events');
    }
  }

  override _pointerMoveHandler(event: PointerEvent): void {
    super._pointerMoveHandler(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }

  override _fixValue(event: PointerEvent): void {
    super._fixValue(event);
    this._sibling?._updateMinMax();
  }

  override _clamp(v: number): number {
    return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
  }

  override _updateHiddenUI(): void {
    this._updateStaticStyles();
    this._updateThumbUIByValue();
    this._updateMinMax();
    this._updateWidthInactive();
    this._updateSibling();
  }

  _updateMinMax(): void {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, sibling.value);
    }
  }

  // TODO(wagnermaciel): describe the difference between inactive and active width and why we need it.
  override _updateWidthActive(): void {
    const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
    const maxWidth = this._slider._cachedWidth - this._slider._inputPadding * 2 - minWidth;
    const percentage =
      this._slider.min < this._slider.max
        ? (this.max - this.min) / (this._slider.max - this._slider.min)
        : 1;
    const width = maxWidth * percentage + minWidth;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
  }

  // TODO(wagnermaciel): describe the difference between inactive and active width and why we need it.
  override _updateWidthInactive(): void {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    const maxWidth = this._slider._cachedWidth;
    const midValue = this._isEndThumb
      ? this.value - (this.value - sibling.value) / 2
      : this.value + (sibling.value - this.value) / 2;

    const _percentage = this._isEndThumb
      ? (this.max - midValue) / (this._slider.max - this._slider.min)
      : (midValue - this.min) / (this._slider.max - this._slider.min);

    const percentage = this._slider.min < this._slider.max ? _percentage : 1;

    const width = maxWidth * percentage;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = '0px';
  }

  _updateStaticStyles(): void {
    this._hostElement.classList.toggle('mat-slider__right-input', !this._isLeftThumb);
  }

  private _updateSibling(): void {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    sibling._updateMinMax();
    if (this._isActive) {
      sibling._updateWidthActive();
    } else {
      sibling._updateWidthInactive();
    }
  }

  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  override writeValue(value: any): void {
    this.value = value;
    this._updateWidthInactive();
    this._updateSibling();
  }
}
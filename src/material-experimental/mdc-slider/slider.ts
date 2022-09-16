/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Directionality} from '@angular/cdk/bidi';
import {
  BooleanInput,
  coerceBooleanProperty,
  coerceNumberProperty,
  NumberInput,
} from '@angular/cdk/coercion';
import {DOCUMENT} from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  Self,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import {FormControl, FormControlDirective, NgControl, NgModel} from '@angular/forms';
import {
  CanDisableRipple,
  MatRipple,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  mixinColor,
  mixinDisableRipple,
  RippleAnimationConfig,
  RippleGlobalOptions,
  RippleRef,
  RippleState,
} from '@angular/material/core';
import {ANIMATION_MODULE_TYPE} from '@angular/platform-browser/animations';
import {Thumb, TickMark} from '@material/slider';
import {Subject, Subscription} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {isSliderThumbHovered} from './slider-math';

// todo: handle the following edge case:
// 1. start dragging discrete slider
// 2. tab to disable checkbox
// 3. without ending drag, disable the slider

/** Represents an event emitted by the MatSlider component. */
export class MatSliderEvent {
  /** The html element that was the target of the event. */
  target: HTMLInputElement;

  /** The MatSliderThumb that was interacted with. */
  source: MatSliderThumb;

  /** The MatSlider that was interacted with. */
  parent: MatSlider;

  /** The current value of the slider. */
  value: number;
}

/**
 * The visual slider thumb.
 *
 * Handles the slider thumb ripple states (hover, focus, and active),
 * and displaying the value tooltip on discrete sliders.
 * INTERNAL USE ONLY.
 */
@Component({
  selector: 'mat-slider-visual-thumb',
  templateUrl: './slider-thumb.html',
  styleUrls: ['slider-thumb.css'],
  host: {
    'class': 'mdc-slider__thumb mat-mdc-slider-visual-thumb',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MatSliderVisualThumb implements AfterViewInit, OnDestroy {
  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  @Input() discrete: boolean;

  /** Indicates which slider thumb this input corresponds to. */
  @Input() thumbPosition: Thumb;

  /** The display value of the slider thumb. */
  @Input() valueIndicatorText: string;

  /** Whether ripples on the slider thumb should be disabled. */
  @Input() disableRipple: boolean = false;

  /** The MatRipple for this slider thumb. */
  @ViewChild(MatRipple) private readonly _ripple: MatRipple;

  /** The slider thumb knob. */
  @ViewChild('knob') _knob: ElementRef<HTMLElement>;

  /** The slider thumb value indicator container. */
  @ViewChild('valueIndicatorContainer')
  _valueIndicatorContainer: ElementRef<HTMLElement>;

  /** The slider input corresponding to this slider thumb. */
  private _sliderInput: MatSliderThumb;

  /** The RippleRef for the slider thumbs hover state. */
  private _hoverRippleRef: RippleRef | undefined;

  /** The RippleRef for the slider thumbs focus state. */
  private _focusRippleRef: RippleRef | undefined;

  /** The RippleRef for the slider thumbs active state. */
  private _activeRippleRef: RippleRef | undefined;

  /** Whether the slider thumb is currently being pressed. */
  readonly _isActive = false;

  protected _isValueIndicatorVisible: boolean = false;

  /** Whether the slider thumb is currently being hovered. */
  _isHovered: boolean = false;

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _ngZone: NgZone,
    @Inject(forwardRef(() => MatSlider)) private readonly _slider: MatSlider,
    private readonly _elementRef: ElementRef<HTMLElement>,
  ) {}

  ngAfterViewInit() {
    this._ripple.radius = 24;
    this._sliderInput = this._slider._getInput(this.thumbPosition)!;

    // These two listeners don't update any data bindings so we bind them
    // outside of the NgZone to prevent Angular from needlessly running change detection.
    this._ngZone.runOutsideAngular(() => {
      this._sliderInput._hostElement.addEventListener('mousemove', this._onMouseMove);
      this._sliderInput._hostElement.addEventListener('mousedown', this._onDragStart);
      this._sliderInput._hostElement.addEventListener('mouseup', this._onDragEnd);
      this._sliderInput._hostElement.addEventListener('mouseleave', this._onMouseLeave);
      this._sliderInput._hostElement.addEventListener('focus', this._onFocus);
      this._sliderInput._hostElement.addEventListener('blur', this._onBlur);
    });
  }

  ngOnDestroy() {
    this._elementRef.nativeElement.removeEventListener('mouseleave', this._onMouseLeave);
  }

  private _onMouseMove = (event: MouseEvent): void => {
    if (this._sliderInput._isFocused) {
      return;
    }

    const rect = this._getHostElement().getBoundingClientRect();
    const isHovered = isSliderThumbHovered(event, rect);
    if (isHovered) {
      if (!this._isHovered) {
        this._isHovered = true;
        this._showHoverRipple();
      }
    } else {
      if (this._isHovered) {
        this._isHovered = false;
        this._hideRipple(this._hoverRippleRef);
      }
    }
  };

  private _onMouseLeave = (): void => {
    this._isHovered = false;
    this._hideRipple(this._hoverRippleRef);
  };

  private _onFocus = (): void => {
    // We don't want to show the hover ripple on top of the focus ripple.
    // Happen when the users cursor is over a thumb and then the user tabs to it.
    this._hideRipple(this._hoverRippleRef);
    this._showFocusRipple();
  };

  private _onBlur = (): void => {
    // Happens when the user tabs away while still dragging a thumb.
    if (!this._isActive) {
      this._hideRipple(this._focusRippleRef);
    }
    // Happens when the user tabs away from a thumb but their cursor is still over it.
    if (this._isHovered) {
      this._showHoverRipple();
    }
  };

  private _onDragStart = (): void => {
    (this as {_isActive: boolean})._isActive = true;
    this._showActiveRipple();
  };

  private _onDragEnd = (): void => {
    (this as {_isActive: boolean})._isActive = false;
    this._hideRipple(this._activeRippleRef);
    // Happens when the user starts dragging a thumb, tabs away, and then stops dragging.
    if (!this._sliderInput._isFocused) {
      this._hideRipple(this._focusRippleRef);
    }
  };

  /** Handles displaying the hover ripple. */
  private _showHoverRipple(): void {
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({enterDuration: 0, exitDuration: 0});
      this._hoverRippleRef?.element.classList.add('mat-mdc-slider-hover-ripple');
    }
  }

  /** Handles displaying the focus ripple. */
  private _showFocusRipple(): void {
    // Show the focus ripple event if noop animations are enabled.
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({enterDuration: 0, exitDuration: 0});
      this._focusRippleRef?.element.classList.add('mat-mdc-slider-focus-ripple');
    }
  }

  /** Handles displaying the active ripple. */
  private _showActiveRipple(): void {
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({enterDuration: 225, exitDuration: 400});
      this._activeRippleRef?.element.classList.add('mat-mdc-slider-active-ripple');
    }
  }

  /** Whether the given rippleRef is currently fading in or visible. */
  private _isShowingRipple(rippleRef?: RippleRef): boolean {
    return rippleRef?.state === RippleState.FADING_IN || rippleRef?.state === RippleState.VISIBLE;
  }

  /** Manually launches the slider thumb ripple using the specified ripple animation config. */
  private _showRipple(animation: RippleAnimationConfig): RippleRef | undefined {
    if (this.disableRipple) {
      return;
    }
    this._showValueIndicator();
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {enterDuration: 0, exitDuration: 0} : animation,
      centered: true,
      persistent: true,
    });
  }

  private _hideRipple(rippleRef?: RippleRef): void {
    rippleRef?.fadeOut();

    const isShowingAnyRipple =
      this._isShowingRipple(this._hoverRippleRef) ||
      this._isShowingRipple(this._focusRippleRef) ||
      this._isShowingRipple(this._activeRippleRef);
    if (!isShowingAnyRipple) {
      this._hideValueIndicator();
    }
  }

  /** Gets the hosts native HTML element. */
  _getHostElement(): HTMLElement {
    return this._elementRef.nativeElement;
  }

  /** Gets the native HTML element of the slider thumb knob. */
  _getKnob(): HTMLElement {
    return this._knob.nativeElement;
  }

  /**
   * Gets the native HTML element of the slider thumb value indicator
   * container.
   */
  _getValueIndicatorContainer(): HTMLElement {
    return this._valueIndicatorContainer.nativeElement;
  }

  private _showValueIndicator(): void {
    this._isValueIndicatorVisible = true;
    this._cdr.detectChanges();
  }

  private _hideValueIndicator(): void {
    this._isValueIndicatorVisible = false;
    this._cdr.detectChanges();
  }
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
  providers: [],
  host: {
    'class': 'mdc-slider__input',
    'type': 'range',
    '[style.pointer-events]': '"auto"',
    '[style.width]': '"calc(100% + 16px);"',
    '(change)': '_onChange()',
    '(input)': '_onInput()',
    '(mousedown)': '_onMouseDown($event)',
    '(mousemove)': '_onMouseMove($event)',
    // TODO: Use a global event listener instead.
    // Reason: I have found a semi-consistent way to mouse up without triggering this event.
    '(mouseup)': '_onMouseUp()',
    '(blur)': '_onBlur()',
  },
})
export class MatSliderThumb implements OnInit, OnDestroy {
  /** The host native HTML input element. */
  _hostElement: HTMLInputElement;

  get translateX(): number {
    if (this._slider.min >= this._slider.max) {
      this._translateX = 0;
      return 0;
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

  thumbPosition: Thumb = Thumb.END;

  set min(v: NumberInput) {
    this._hostElement.min = coerceNumberProperty(v).toString();
    this._cdr.detectChanges();
  }
  get min(): number {
    return coerceNumberProperty(this._hostElement.min);
  }

  set max(v: NumberInput) {
    this._hostElement.max = coerceNumberProperty(v).toString();
    this._cdr.detectChanges();
  }
  get max(): number {
    return coerceNumberProperty(this._hostElement.max);
  }

  set step(v: NumberInput) {
    this._hostElement.step = coerceNumberProperty(v).toString();
    this._cdr.detectChanges();
  }
  get step(): number {
    return coerceNumberProperty(this._hostElement.step);
  }

  set disabled(v: BooleanInput) {
    this._hostElement.disabled = coerceBooleanProperty(v);
    this._cdr.detectChanges();

    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }
  get disabled(): boolean {
    return coerceBooleanProperty(this._hostElement.disabled);
  }

  get percentage(): number {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }

  get fillPercentage(): number {
    if (!this._slider._cachedHostRect) {
      return this._slider._isRtl ? 1 : 0;
    }
    if (this.translateX === 0) {
      return 0;
    }
    return this.translateX / this._slider._cachedHostRect.width;
  }

  _isActive: boolean = false;
  _isFocused: boolean = false;

  /** The injected document if available or fallback to the global document reference. */
  private _document: Document;

  _hasSetInitialValue: boolean = false;

  _initialValue: string | undefined;

  private _formControl: FormControl | undefined;

  /** Emits when the component is destroyed. */
  protected readonly _destroyed = new Subject<void>();

  @Input()
  set value(v: NumberInput) {
    const val = coerceNumberProperty(v).toString();
    if (this._hasSetInitialValue) {
      if (!this._isActive || !this._isFocused) {
        this._hostElement.value = val;
        this._slider._onValueChange(this);
        this._cdr.detectChanges();
      }
    } else {
      this._initialValue = val;
    }
  }
  get value(): number {
    return coerceNumberProperty(this._hostElement.value);
  }

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    @Inject(DOCUMENT) document: any,
    @Inject(forwardRef(() => MatSlider)) readonly _slider: MatSlider,
    @Optional() @Self() readonly ngControl: NgControl,
    readonly _elementRef: ElementRef<HTMLInputElement>,
    readonly _cdr: ChangeDetectorRef,
  ) {
    this._document = document;
    this._hostElement = _elementRef.nativeElement;
    this._onNgControlValueChange = this._onNgControlValueChange.bind(this);
  }

  ngOnInit(): void {
    if (!this.ngControl) {
      return;
    }

    if (this.ngControl instanceof FormControlDirective) {
      this._formControl = this.ngControl.form;
    } else if (this.ngControl instanceof NgModel) {
      this._formControl = this.ngControl.control;
    }

    if (this._formControl) {
      this._formControl.valueChanges
        .pipe(takeUntil(this._destroyed))
        .subscribe(this._onNgControlValueChange);
    }
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  initProps(): void {
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
    this._isFocused = false;
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

  _onMouseDown(event: MouseEvent): void {
    if (event.button !== 0) {
      return;
    }

    this._isActive = true;
    this._isFocused = true;

    // does nothing if a step is defined because we
    // want the value to snap to the values on input.
    if (!this._slider.step) {
      this._updateThumbUIByMouseEvent(event, {withAnimation: true});
    }
  }

  _onMouseMove(event: MouseEvent): void {
    // again, does nothing if a step is defined because
    // we want the value to snap to the values on input.
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByMouseEvent(event);
    }
  }

  _onMouseUp(): void {
    this._isActive = false;
  }

  _clamp(v: number): number {
    const rect = this._slider._elementRef.nativeElement.getBoundingClientRect();
    return Math.max(Math.min(v, rect.width), 0);
  }

  _calcTranslateXByValue(): number {
    const rect = this._slider._elementRef.nativeElement.getBoundingClientRect();
    if (this._slider._isRtl) {
      return (1 - this.percentage) * rect.width;
    }
    return this.percentage * rect.width;
  }

  _calcTranslateXByMouseEvent(event: MouseEvent): number {
    const rect = this._slider._elementRef.nativeElement.getBoundingClientRect();
    return event.clientX - rect.left;
  }

  _updateHiddenUI(): void {
    this._updateThumbUIByValue();
  }

  _updateThumbUIByValue(options?: {withAnimation: boolean}): void {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }

  _updateThumbUIByMouseEvent(event: MouseEvent, options?: {withAnimation: boolean}): void {
    this.translateX = this._clamp(this._calcTranslateXByMouseEvent(event));
    this._updateThumbUI(options);
  }

  _updateThumbUI(options?: {withAnimation: boolean}) {
    this._slider._transition = options?.withAnimation ? 'transform 80ms' : 'transform 0ms';
    this._slider._onTranslateXChange(this);
    this._slider._cdr.markForCheck();
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
  providers: [],
  host: {
    '[style.width]': '_styleWidth',
    '[style.left]': '_left',
    '[style.right]': '_right',
    '[style.margin-left]': '_marginLeft',
    '[style.margin-right]': '_marginRight',
    '[style.z-index]': '_zIndex',
  },
})
export class MatSliderRangeThumb extends MatSliderThumb {
  _zIndex: string = 'auto';
  _styleWidth: string = 'calc(50% + 16px)'; // half the padding

  _left: string;
  _right: string;
  _marginLeft: string;
  _marginRight: string;

  get _sibling(): MatSliderRangeThumb | undefined {
    if (!this.__sibling) {
      this.__sibling = this._slider._getInput(this._isEndThumb ? Thumb.START : Thumb.END) as
        | MatSliderRangeThumb
        | undefined;
    }
    return this.__sibling;
  }
  private __sibling: MatSliderRangeThumb | undefined;

  get _minPos(): number {
    if (!this._isLeftThumb && this._sibling) {
      return this._sibling.translateX;
    }
    return 0;
  }

  get _maxPos(): number {
    if (this._isLeftThumb && this._sibling) {
      return this._sibling.translateX;
    }
    return this._slider._elementRef.nativeElement.getBoundingClientRect().width;
  }

  _isEndThumb: boolean;

  get _isLeftThumb(): boolean {
    // todo: remove this getter and just set this in constructor / on dir change.
    return (this._isEndThumb && this._slider._isRtl) || (!this._isEndThumb && !this._slider._isRtl);
  }

  constructor(
    readonly _ngZone: NgZone,
    @Inject(DOCUMENT) document: any,
    @Inject(forwardRef(() => MatSlider)) _slider: MatSlider,
    @Optional() @Self() override readonly ngControl: NgControl,
    _elementRef: ElementRef<HTMLInputElement>,
    override readonly _cdr: ChangeDetectorRef,
  ) {
    super(document, _slider, ngControl, _elementRef, _cdr);
    this._isEndThumb = this._hostElement.hasAttribute('matSliderEndThumb');
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
  }

  override _onNgControlValueChange(): void {
    super._onNgControlValueChange();
    this._updateSibling();
  }

  override _onMouseMove(event: MouseEvent): void {
    this._updateZIndex(event);
    super._onMouseMove(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }

  override _clamp(v: number): number {
    return Math.max(Math.min(v, this._maxPos), this._minPos);
  }

  override _updateHiddenUI(): void {
    this._updateStaticStyles();
    this._updateThumbUIByValue();
    this._updateMinMax();
    this._updateWidth();
    this._updateSibling();
  }

  private _updateMinMax(): void {
    if (!this._sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, this._sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, this._sibling.value);
    }
  }

  _updateWidth(): void {
    if (this._slider.min >= this._slider.max) {
      this._styleWidth = `calc(100% + 16px)`;
      return;
    }
    const percentage = (this.max - this.min) / (this._slider.max - this._slider.min);
    this._styleWidth = `calc(${percentage * 100}% + 16px)`;
  }

  _updateStaticStyles(): void {
    if (this._isLeftThumb) {
      this._left = '0';
      this._right = 'auto';
      this._marginLeft = '-24px'; // todo: these are based on ripple and visual thumb radius.
      this._marginRight = '0';
    } else {
      this._left = 'auto';
      this._right = '0';
      this._marginLeft = '0';
      this._marginRight = '-24px';
    }
  }

  private _updateSibling(): void {
    if (!this._sibling) {
      return;
    }
    this._sibling._updateMinMax();
    this._sibling._updateWidth();
  }

  private _updateZIndex(event: MouseEvent): void {
    if (!this._sibling) {
      return;
    }
    const rect = this._slider._elementRef.nativeElement.getBoundingClientRect();
    const dx1 = Math.abs(event.clientX - rect.left - this.translateX);
    const dx2 = Math.abs(event.clientX - rect.left - this._sibling.translateX);
    if (dx1 < dx2) {
      this._zIndex = '1';
      this._sibling._zIndex = 'auto';
    } else if (dx1 > dx2) {
      this._zIndex = 'auto';
      this._sibling._zIndex = '1';
    }
  }
}

// Boilerplate for applying mixins to MatSlider.
const _MatSliderMixinBase = mixinColor(
  mixinDisableRipple(
    class {
      constructor(public _elementRef: ElementRef<HTMLElement>) {}
    },
  ),
  'primary',
);

/**
 * Allows users to select from a range of values by moving the slider thumb. It is similar in
 * behavior to the native `<input type="range">` element.
 */
@Component({
  selector: 'mat-slider',
  templateUrl: 'slider.html',
  styleUrls: ['slider.css'],
  host: {
    'class': 'mat-mdc-slider mdc-slider',
    '[class.mdc-slider--range]': '_isRange',
    '[class.mdc-slider--disabled]': 'disabled',
    '[class.mdc-slider--discrete]': 'discrete',
    '[class.mdc-slider--tick-marks]': 'showTickMarks',
    '[class._mat-animation-noopable]': '_noopAnimations',
  },
  exportAs: 'matSlider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  inputs: ['color', 'disableRipple'],
})
export class MatSlider
  extends _MatSliderMixinBase
  implements AfterContentInit, AfterViewInit, CanDisableRipple, OnDestroy
{
  _setValue(v: number, thumbPosition: Thumb) {
    const input = this._getInput(thumbPosition);
    if (input) {
      input.value = v;
    }
  }

  @ViewChild('trackActive') _trackActive: ElementRef<HTMLElement>;

  /** The slider thumb(s). */
  @ViewChildren(MatSliderVisualThumb) _thumbs: QueryList<MatSliderVisualThumb>;

  /** The sliders hidden range input(s). */
  @ContentChild(MatSliderThumb) _input: MatSliderThumb;

  /** The sliders hidden range input(s). */
  @ContentChildren(MatSliderRangeThumb, {descendants: false})
  _inputs: QueryList<MatSliderRangeThumb>;

  /** Whether the slider is disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(v: BooleanInput) {
    this._disabled = coerceBooleanProperty(v);
    const endInput = this._getInput(Thumb.END);
    const startInput = this._getInput(Thumb.START);

    if (endInput) {
      endInput.disabled = this._disabled;
    }
    if (startInput) {
      startInput.disabled = this._disabled;
    }
  }
  private _disabled: boolean = false;

  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  @Input()
  get discrete(): boolean {
    return this._discrete;
  }
  set discrete(v: BooleanInput) {
    this._discrete = coerceBooleanProperty(v);
  }
  private _discrete: boolean = false;

  /** Whether the slider displays tick marks along the slider track. */
  @Input()
  get showTickMarks(): boolean {
    return this._showTickMarks;
  }
  set showTickMarks(v: BooleanInput) {
    this._showTickMarks = coerceBooleanProperty(v);
  }
  private _showTickMarks: boolean = false;

  /** The minimum value that the slider can have. */
  @Input()
  get min(): number {
    return this._min;
  }
  set min(v: NumberInput) {
    const min = coerceNumberProperty(v, this._min);
    if (this._min !== min) {
      this._updateMin(min);
    }
  }
  private _min: number = 0;

  private _updateMin(min: number): void {
    const prevMin = this._min;
    this._min = min;
    this._isRange ? this._updateMinRange({old: prevMin, new: min}) : this._updateMinNonRange(min);
    this._onMinMaxOrStepChange();
  }

  private _updateMinRange(min: {old: number; new: number}): void {
    const endInput = this._getInput(Thumb.END) as MatSliderRangeThumb;
    const startInput = this._getInput(Thumb.START) as MatSliderRangeThumb;

    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;

    startInput.min = min.new;
    endInput.min = Math.max(min.new, startInput.value);
    startInput.max = Math.min(endInput.max, endInput.value);

    startInput._updateWidth();
    endInput._updateWidth();

    min.new < min.old
      ? this._onTranslateXChangeBySideEffect(endInput, startInput)
      : this._onTranslateXChangeBySideEffect(startInput, endInput);

    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }

    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }

  private _updateMinNonRange(min: number): void {
    const input = this._getInput(Thumb.END);
    if (input) {
      const oldValue = input.value;

      input.min = min;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);

      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }

  /** The maximum value that the slider can have. */
  @Input()
  get max(): number {
    return this._max;
  }
  set max(v: NumberInput) {
    const max = coerceNumberProperty(v, this._max);
    if (this._max !== max) {
      this._updateMax(max);
    }
  }
  private _max: number = 100;

  private _updateMax(max: number): void {
    const prevMax = this._max;
    this._max = max;
    this._isRange ? this._updateMaxRange({old: prevMax, new: max}) : this._updateMaxNonRange(max);
    this._onMinMaxOrStepChange();
  }

  private _updateMaxRange(max: {old: number; new: number}): void {
    const endInput = this._getInput(Thumb.END) as MatSliderRangeThumb;
    const startInput = this._getInput(Thumb.START) as MatSliderRangeThumb;

    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;

    endInput.max = max.new;
    startInput.max = Math.min(max.new, endInput.value);
    endInput.min = startInput.value;

    endInput._updateWidth();
    startInput._updateWidth();

    max.new > max.old
      ? this._onTranslateXChangeBySideEffect(startInput, endInput)
      : this._onTranslateXChangeBySideEffect(endInput, startInput);

    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }

    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }

  private _updateMaxNonRange(max: number): void {
    const input = this._getInput(Thumb.END);
    if (input) {
      const oldValue = input.value;

      input.max = max;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);

      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }

  /** The values at which the thumb will snap. */
  @Input()
  get step(): number | undefined {
    return this._step;
  }
  set step(v: NumberInput) {
    const step = coerceNumberProperty(v, this._step);
    if (this._step !== step) {
      this._updateStep(step);
    }
  }
  private _step: number = 0;

  private _updateStep(step: number): void {
    this._step = step;
    this._isRange ? this._updateStepRange() : this._updateStepNonRange();
    this._onMinMaxOrStepChange();
  }

  private _updateStepRange(): void {
    const endInput = this._getInput(Thumb.END) as MatSliderRangeThumb;
    const startInput = this._getInput(Thumb.START) as MatSliderRangeThumb;

    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;

    const prevStartValue = startInput.value;

    endInput.min = this._min;
    startInput.max = this._max;

    endInput.step = this._step;
    startInput.step = this._step;

    endInput.min = Math.max(this._min, startInput.value);
    startInput.max = Math.min(this._max, endInput.value);

    startInput._updateWidth();
    endInput._updateWidth();

    endInput.value < prevStartValue
      ? this._onTranslateXChangeBySideEffect(startInput, endInput)
      : this._onTranslateXChangeBySideEffect(endInput, startInput);

    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }

    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }

  private _updateStepNonRange(): void {
    const input = this._getInput(Thumb.END);
    if (input) {
      const oldValue = input.value;

      input.step = this._step;
      input._updateThumbUIByValue();

      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }

  /**
   * Function that will be used to format the value before it is displayed
   * in the thumb label. Can be used to format very large number in order
   * for them to fit into the slider thumb.
   */
  @Input() displayWith: (value: number) => string = (value: number) => `${value}`;

  /** Used to keep track of & render the active & inactive tick marks on the slider track. */
  _tickMarks: TickMark[];

  /** Whether animations have been disabled. */
  _noopAnimations: boolean;

  /** Subscription to changes to the directionality (LTR / RTL) context for the application. */
  private _dirChangeSubscription: Subscription;

  /** Observer used to monitor size changes in the slider. */
  private _resizeObserver: ResizeObserver | null;

  /** Cached dimensions of the host element. */
  _cachedHostRect: DOMRect | null;

  protected startValueIndicatorText: string = '';
  protected endValueIndicatorText: string = '';

  _trackActiveLeft: string = 'auto';
  _trackActiveRight: string = '450px';
  _trackActiveTransform: string = 'scaleX(0)';
  _trackActiveTransformOrigin: string = 'right';

  _transition: string = 'transform 0ms';

  _endThumbTransform: string;
  _startThumbTransform: string;

  _isRange: boolean = false;
  _isRtl: boolean = false;

  _tickMarkTrackWidth: number = 0;

  private _resizeTimer: number;

  constructor(
    readonly _ngZone: NgZone,
    readonly _cdr: ChangeDetectorRef,
    elementRef: ElementRef<HTMLElement>,
    @Optional() readonly _dir: Directionality,
    @Optional()
    @Inject(MAT_RIPPLE_GLOBAL_OPTIONS)
    readonly _globalRippleOptions?: RippleGlobalOptions,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) animationMode?: string,
  ) {
    super(elementRef);
    this._noopAnimations = animationMode === 'NoopAnimations';
    this._dirChangeSubscription = this._dir.change.subscribe(() => this._onDirChange());
    this._isRtl = this._dir.value === 'rtl';
  }

  ngAfterViewInit(): void {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      // _validateInputs(this._isRange, this._getInput(Thumb.START), this._getInput(Thumb.END));
    }
    this._observeHostResize();
  }

  ngAfterContentInit(): void {
    const eInput = this._getInput(Thumb.END);
    const sInput = this._getInput(Thumb.START);
    this._isRange = !!eInput && !!sInput;
    if (eInput) {
      eInput.initProps();
      eInput.initUI();
    }
    if (sInput) {
      sInput.initProps();
      sInput.initUI();
    }
    this._cachedHostRect = this._getHostDimensions();
    this._updateTrackUI(eInput!);
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }

  ngOnDestroy(): void {
    this._dirChangeSubscription.unsubscribe();
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }

  /** Handles updating the slider ui after a dir change. */
  private _onDirChange(): void {
    this._isRtl = this._dir.value === 'rtl';
    this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
    this._updateTickMarkUI();
  }

  private _onDirChangeRange(): void {
    const endInput = this._getInput(Thumb.END) as MatSliderRangeThumb;
    const startInput = this._getInput(Thumb.START) as MatSliderRangeThumb;

    endInput.translateX = endInput._calcTranslateXByValue();
    startInput.translateX = startInput._calcTranslateXByValue();

    endInput._updateStaticStyles();
    startInput._updateStaticStyles();

    endInput._updateWidth();
    startInput._updateWidth();

    endInput._updateThumbUIByValue();
    startInput._updateThumbUIByValue();
  }

  private _onDirChangeNonRange(): void {
    const input = this._getInput(Thumb.END)!;
    input._updateThumbUIByValue();
  }

  /** Gets the slider thumb input of the given thumb position. */
  _getInput(thumbPosition: Thumb): MatSliderThumb | MatSliderRangeThumb | undefined {
    if (thumbPosition === Thumb.END && this._input) {
      return this._input;
    }
    if (this._inputs?.length) {
      return thumbPosition === Thumb.START ? this._inputs.first : this._inputs.last;
    }
    return;
  }

  /** Gets the slider thumb HTML input element of the given thumb position. */
  _getThumb(thumbPosition: Thumb): MatSliderVisualThumb {
    return thumbPosition === Thumb.END ? this._thumbs?.last! : this._thumbs?.first!;
  }

  /** Gets the dimensions of the host element. */
  _getHostDimensions() {
    return this._cachedHostRect || this._elementRef.nativeElement.getBoundingClientRect();
  }

  _setTrackActiveStyles(styles: {
    left: string;
    right: string;
    transform: string;
    transformOrigin: string;
  }): void {
    this._trackActiveLeft = styles.left;
    this._trackActiveRight = styles.right;
    this._trackActiveTransform = styles.transform;
    this._trackActiveTransformOrigin = styles.transformOrigin;
  }

  // todo: this should just be a prop on matsliderrangethumb.
  private _isLeftThumb(input: MatSliderRangeThumb): boolean {
    return (input._isEndThumb && this._isRtl) || (!input._isEndThumb && !this._isRtl);
  }

  /** Starts observing and updating the slider if the host changes its size. */
  private _observeHostResize() {
    if (typeof ResizeObserver === 'undefined' || !ResizeObserver) {
      return;
    }

    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(entries => {
        // Triggering a layout while the user is dragging can throw off the alignment.
        if (this._isActive()) {
          return;
        }

        const rect = this._elementRef.nativeElement.getBoundingClientRect();
        if (this._cachedHostRect?.width === rect.width) {
          return;
        }
        this._cachedHostRect = rect;

        if (this._resizeTimer) {
          clearTimeout(this._resizeTimer);
        }

        // this._resizeTimer = setTimeout(() => {
        // The `layout` call is going to call `getBoundingClientRect` to update the dimensions
        // of the host. Since the `ResizeObserver` already calculated them, we can save some
        // work by returning them instead of having to check the DOM again.
        if (!this._isActive()) {
          this._cachedHostRect = entries[0]?.contentRect;
          this._onResize();
          this._cdr.detectChanges();
        }
        // }, 10);
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }

  /** Whether any of the thumbs are currently active. */
  private _isActive(): boolean {
    return this._getThumb(Thumb.START)._isActive || this._getThumb(Thumb.END)._isActive;
  }

  private _getValue(thumbPosition: Thumb = Thumb.END): number {
    const input = this._getInput(thumbPosition);
    if (!input) {
      return this.min;
    }
    return input.value;
  }

  _onTranslateXChange(source: MatSliderThumb): void {
    console.log('translateX');
    this._updateThumbUI(source);
    this._updateTrackUI(source);
    this._cdr.detectChanges();
  }

  // note: order matters here
  _onTranslateXChangeBySideEffect(input1: MatSliderRangeThumb, input2: MatSliderRangeThumb): void {
    console.log('translateX (side effect)');
    input1._updateThumbUIByValue();
    input2._updateThumbUIByValue();
  }

  _onValueChange(source: MatSliderThumb): void {
    console.log('value');
    this._updateValueIndicatorUI(source);
    this._updateTickMarkUI();
    this._cdr.markForCheck();
  }

  _onMinMaxOrStepChange(): void {
    console.log('min, max, or step');
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }

  _onResize(): void {
    console.log('resize');
    const eInput = this._getInput(Thumb.END);
    const sInput = this._getInput(Thumb.START);

    eInput?._updateThumbUIByValue();
    sInput?._updateThumbUIByValue();

    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
  }

  // Thumb styles update conditions
  //
  // 1. TranslateX, resize, or dir change
  //    - Reason: The thumb styles need to be updated according to the new translateX.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.

  /** Updates the translateX of the given thumb. */
  _updateThumbUI(source: MatSliderThumb) {
    console.log('\tthumb');
    const transform = `translateX(${source.translateX}px)`;
    source.thumbPosition === Thumb.END
      ? (this._endThumbTransform = transform)
      : (this._startThumbTransform = transform);
  }

  // Value indicator text update conditions
  //
  // 1. Value
  //    - Reason: The value displayed needs to be updated.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.

  _updateValueIndicatorUI(source: MatSliderThumb): void {
    console.log('\tvalue indicator');
    if (this.discrete) {
      source.thumbPosition === Thumb.START
        ? (this.startValueIndicatorText = this.displayWith(source.value))
        : (this.endValueIndicatorText = this.displayWith(source.value));
    }
  }

  // Update Tick Mark Track Width
  //
  // 1. Min, max, or step
  //    - Reason: The maximum reachable value may have changed.
  //    - Side note: The maximum reachable value is different from the maximum value set by the
  //      user. For example, a slider with [min: 5, max: 100, step: 10] would have a maximum
  //      reachable value of 95.
  // 2. Resize
  //    - Reason: The position for the maximum reachable value needs to be recalculated.

  private _updateTickMarkTrackUI(): void {
    console.log('\tTM track');
    if (!this._cachedHostRect) {
      return;
    }
    const step = this._step && this._step > 0 ? this._step : 1;
    const maxValue = Math.floor(this.max / step) * step;
    const percentage = (maxValue - this.min) / (this.max - this.min);
    this._tickMarkTrackWidth = this._cachedHostRect.width * percentage - 6;
  }

  // Track active update conditions
  //
  // 1. TranslateX
  //    - Reason: The track active should line up with the new thumb position.
  // 2. Min or max
  //    - Reason #1: The 'active' percentage needs to be recalculated.
  //    - Reason #2: The value may have silently changed.
  // 3. Step
  //    - Reason: The value may have silently changed causing the thumb(s) to shift.
  // 4. Dir change
  //    - Reason: The track active will need to be updated according to the new thumb position(s).
  // 5. Resize
  //    - Reason: The total width the 'active' tracks translateX is based on has changed.

  _updateTrackUI(source: MatSliderThumb): void {
    console.log('\ttrack');
    this._isRange
      ? this._updateTrackUIRange(source as MatSliderRangeThumb)
      : this._updateTrackUINonRange(source as MatSliderThumb);
  }

  private _updateTrackUIRange(source: MatSliderRangeThumb): void {
    if (!source._sibling || !this._cachedHostRect) {
      return;
    }

    const activePercentage =
      Math.abs(source._sibling.translateX - source.translateX) / this._cachedHostRect.width;

    if (this._isLeftThumb(source) && this._cachedHostRect) {
      this._setTrackActiveStyles({
        left: 'auto',
        right: `${this._cachedHostRect.width - source._sibling.translateX}px`,
        transformOrigin: 'right',
        transform: `scaleX(${activePercentage})`,
      });
    } else {
      this._setTrackActiveStyles({
        left: `${source._sibling.translateX}px`,
        right: 'auto',
        transformOrigin: 'left',
        transform: `scaleX(${activePercentage})`,
      });
    }
  }

  private _updateTrackUINonRange(source: MatSliderThumb): void {
    this._isRtl
      ? this._setTrackActiveStyles({
          left: 'auto',
          right: '0px',
          transformOrigin: 'right',
          transform: `scaleX(${1 - source.fillPercentage})`,
        })
      : this._setTrackActiveStyles({
          left: '0px',
          right: 'auto',
          transformOrigin: 'left',
          transform: `scaleX(${source.fillPercentage})`,
        });
  }

  // Tick mark update conditions
  //
  // 1. Value
  //    - Reason: a tick mark which was once active might now be inactive or vice versa.
  // 2. Min, max, or step
  //    - Reason #1: the number of tick marks may have changed.
  //    - Reason #2: The value may have silently changed.

  /** Updates the dots along the slider track. */
  _updateTickMarkUI(): void {
    console.log('\ttick mark');
    if (this.step === undefined || this.min === undefined || this.max === undefined) {
      return;
    }
    const step = this.step > 0 ? this.step : 1;
    this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);

    // todo: fix for range slider on dir change.
    if (this._isRtl) {
      this._tickMarks.reverse();
    }
    this._cdr.markForCheck();
  }

  /** Updates tick marks for non range sliders. */
  private _updateTickMarkUINonRange(step: number): void {
    const value = this._getValue();
    let numActive = Math.floor((value - this.min) / step);
    let numInactive = Math.floor((this.max - value) / step);
    this._isRtl ? numActive++ : numInactive++;

    this._tickMarks = Array.from({length: numActive})
      .map(() => TickMark.ACTIVE)
      .concat(Array.from({length: numInactive}).map(() => TickMark.INACTIVE));
  }

  /** Updates tick marks for range sliders. */
  private _updateTickMarkUIRange(step: number): void {
    const endValue = this._getValue();
    const startValue = this._getValue(Thumb.START);
    const numInactiveBeforeStartThumb = Math.floor((startValue - this.min) / step);
    const numActive = Math.floor((endValue - startValue) / step) + 1;
    const numInactiveAfterEndThumb = Math.floor((this.max - endValue) / step);
    this._tickMarks = Array.from({length: numInactiveBeforeStartThumb})
      .map(() => TickMark.INACTIVE)
      .concat(
        Array.from({length: numActive}).map(() => TickMark.ACTIVE),
        Array.from({length: numInactiveAfterEndThumb}).map(() => TickMark.INACTIVE),
      );
    this._cdr.detectChanges();
  }

  _tickMarkTrackByFn(index: number, tickMark: TickMark): string {
    return `${index}-${tickMark}`;
  }
}

/** Ensures that there is not an invalid configuration for the slider thumb inputs. */
function _validateInputs(
  isRange: boolean,
  endInputElement: MatSliderThumb,
  startInputElement?: MatSliderThumb,
): void {
  const startValid =
    !isRange || startInputElement?._hostElement.hasAttribute('matSliderStartThumb');
  const endValid = endInputElement._hostElement.hasAttribute(
    isRange ? 'matSliderEndThumb' : 'matSliderThumb',
  );

  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}

function _throwInvalidInputConfigurationError(): void {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}

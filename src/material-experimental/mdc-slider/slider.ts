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
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  Optional,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
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
import {Subscription} from 'rxjs';
import {GlobalChangeAndInputListener} from './global-change-and-input-listener';
import {calcThumbPositions, mapClientXOnSliderScale, getNumDecimalPlaces} from './slider-math';

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
  private _isActive: boolean = false;

  /** Whether the slider thumb is currently being hovered. */
  _isHovered: boolean = false;

  constructor(
    private readonly _ngZone: NgZone,
    @Inject(forwardRef(() => MatSlider)) private readonly _slider: MatSlider,
    private readonly _elementRef: ElementRef<HTMLElement>,
  ) {}

  ngAfterViewInit() {
    this._ripple.radius = 24;
    this._sliderInput = this._slider._getInput(this.thumbPosition);

    // Note that we don't unsubscribe from these, because they're complete on destroy.
    this._sliderInput.dragStart.subscribe(event => this._onDragStart(event));
    this._sliderInput.dragEnd.subscribe(event => this._onDragEnd(event));

    this._sliderInput._focus.subscribe(() => this._onFocus());
    this._sliderInput._blur.subscribe(() => this._onBlur());

    // These two listeners don't update any data bindings so we bind them
    // outside of the NgZone to prevent Angular from needlessly running change detection.
    this._ngZone.runOutsideAngular(() => {
      this._elementRef.nativeElement.addEventListener('mouseenter', this._onMouseEnter);
      this._elementRef.nativeElement.addEventListener('mouseleave', this._onMouseLeave);
    });
  }

  ngOnDestroy() {
    this._elementRef.nativeElement.removeEventListener('mouseenter', this._onMouseEnter);
    this._elementRef.nativeElement.removeEventListener('mouseleave', this._onMouseLeave);
  }

  private _onMouseEnter = (): void => {
    this._isHovered = true;
    // We don't want to show the hover ripple on top of the focus ripple.
    // This can happen if the user tabs to a thumb and then the user moves their cursor over it.
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._showHoverRipple();
    }
  };

  private _onMouseLeave = (): void => {
    this._isHovered = false;
    this._hoverRippleRef?.fadeOut();
  };

  private _onFocus(): void {
    // We don't want to show the hover ripple on top of the focus ripple.
    // Happen when the users cursor is over a thumb and then the user tabs to it.
    this._hoverRippleRef?.fadeOut();
    this._showFocusRipple();
  }

  private _onBlur(): void {
    // Happens when the user tabs away while still dragging a thumb.
    if (!this._isActive) {
      this._focusRippleRef?.fadeOut();
    }
    // Happens when the user tabs away from a thumb but their cursor is still over it.
    if (this._isHovered) {
      this._showHoverRipple();
    }
  }

  private _onDragStart(event: MatSliderEvent): void {
    if (event.source._thumbPosition === this.thumbPosition) {
      this._isActive = true;
      this._showActiveRipple();
    }
  }

  private _onDragEnd(event: MatSliderEvent): void {
    if (event.source._thumbPosition === this.thumbPosition) {
      this._isActive = false;
      this._activeRippleRef?.fadeOut();
      // Happens when the user starts dragging a thumb, tabs away, and then stops dragging.
      if (!this._sliderInput._isFocused()) {
        this._focusRippleRef?.fadeOut();
      }
    }
  }

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
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {enterDuration: 0, exitDuration: 0} : animation,
      centered: true,
      persistent: true,
    });
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
  selector: 'input[matSliderThumb], input[matSliderStartThumb], input[matSliderEndThumb]',
  exportAs: 'matSliderThumb',
  host: {
    'class': 'mdc-slider__input',
    'type': 'range',
    '(blur)': '_onBlur()',
    '(focus)': '_focus.emit()',
    '(keydown)': '_onKeydown($event)',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MatSliderThumb,
      multi: true,
    },
  ],
})
export class MatSliderThumb implements ControlValueAccessor, OnDestroy {
  /** The slider thumb input value. */
  @Input()
  get value(): number {
    return this._value;
  }
  set value(v: NumberInput) {
    if (!this._setValue(v)) {
      return;
    }
    this.input.emit({
      target: this._hostElement,
      value: this._value,
      source: this,
      parent: this._slider,
    });
    this._slider._updateUI(this._thumbPosition);
  }
  private _value: number = 50;

  /** The minimum accepted value for this slider thumb input. */
  @Input()
  get min(): number {
    return this._min;
  }
  set min(v: NumberInput) {
    this._hostElement.min = coerceNumberProperty(v).toString();

    // todo: for range sliders, start thumb min should stop at 1 before value of end thumb
    const min = coerceNumberProperty(this._hostElement.min);
    if (min === this._min) {
      return;
    }
    this._min = min;
    if (this.value < min) {
      this._setValue(min);
      this._siblingThumb?._setMinAndMax();
    }
  }
  private _min: number = 0;

  /** The maximum accepted value for this slider thumb input. */
  @Input()
  get max(): number {
    return this._max;
  }
  set max(v: NumberInput) {
    this._hostElement.max = coerceNumberProperty(v).toString();
    const max = coerceNumberProperty(this._hostElement.max);
    if (this.value > max) {
      this._setValue(max);
    }
    if (max !== this._max) {
      this._max = max;
    }
  }
  private _max: number = 0;

  /**
   * Emits when the raw value of the slider changes. This is here primarily
   * to facilitate the two-way binding for the `value` input.
   * @docs-private
   */
  @Output() readonly valueChange: EventEmitter<number> = new EventEmitter<number>();

  /** Event emitted when the slider thumb value changes. */
  @Output() readonly input: EventEmitter<MatSliderEvent> = new EventEmitter<MatSliderEvent>();

  /** Event emitted when an alteration to the slider thumb value is committed by the user. */
  @Output() readonly change: EventEmitter<MatSliderEvent> = new EventEmitter<MatSliderEvent>();

  /** Event emitted when the slider thumb starts being dragged. */
  @Output() readonly dragStart: EventEmitter<MatSliderEvent> = new EventEmitter<MatSliderEvent>();

  /** Event emitted when the slider thumb stops being dragged. */
  @Output() readonly dragEnd: EventEmitter<MatSliderEvent> = new EventEmitter<MatSliderEvent>();

  /** Event emitted every time the MatSliderThumb is blurred. */
  @Output() readonly _blur: EventEmitter<void> = new EventEmitter<void>();

  /** Event emitted every time the MatSliderThumb is focused. */
  @Output() readonly _focus: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Used to determine the disabled state of the MatSlider (ControlValueAccessor).
   * For ranged sliders, the disabled state of the MatSlider depends on the combined state of the
   * start and end inputs. See MatSlider._updateDisabled.
   */
  _disabled: boolean = false;

  /**
   * A callback function that is called when the
   * control's value changes in the UI (ControlValueAccessor).
   */
  _registeredOnChangeFn: (value: any) => void = () => {};

  /**
   * A callback function that is called by the forms API on
   * initialization to update the form model on blur (ControlValueAccessor).
   */
  private _onTouched: () => void = () => {};

  /** Indicates which slider thumb this input corresponds to. */
  _thumbPosition: Thumb = this._elementRef.nativeElement.hasAttribute('matSliderStartThumb')
    ? Thumb.START
    : Thumb.END;

  /** The sibling slider thumb input. Null if there is no sibling thumb input. */
  get _siblingThumb(): MatSliderThumb | null {
    if (!this._slider._isRange) {
      return null;
    }
    if (this.__siblingThumb) {
      return this.__siblingThumb;
    }
    this.__siblingThumb = this._slider._getInput(
      this._thumbPosition === Thumb.END ? Thumb.START : Thumb.END,
    );
    return this.__siblingThumb;
  }
  private __siblingThumb: MatSliderThumb | null = null;

  /** The injected document if available or fallback to the global document reference. */
  private _document: Document;

  /** Stores the value of the slider thumb on drag start. */
  private _valueOnDragStart: number | null = null;

  /** The host native HTML input element. */
  _hostElement: HTMLInputElement;

  constructor(
    readonly _cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) document: any,
    @Inject(forwardRef(() => MatSlider)) private readonly _slider: MatSlider,
    private readonly _elementRef: ElementRef<HTMLInputElement>,
  ) {
    this._document = document;
    this._hostElement = _elementRef.nativeElement;
    this._hostElement.min = this._slider.min.toString();
    this._hostElement.max = this._slider.max.toString();
    this._hostElement.step = this._slider.step.toString();
    this._hostElement.disabled = this._slider.disabled;
  }

  ngOnDestroy() {
    this.dragStart.complete();
    this.dragEnd.complete();
    this._focus.complete();
    this._blur.complete();
    this.valueChange.complete();
  }

  _onKeydown(e: KeyboardEvent): void {
    const prev = this._value;
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        this._slider._isRtl
          ? (this.value! -= this._slider.step)
          : (this.value! += this._slider.step);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        this._slider._isRtl
          ? (this.value! += this._slider.step)
          : (this.value! -= this._slider.step);
        break;
    }
    if (this.value !== prev) {
      this._onChange();
    }
  }

  _onChange(): void {
    this.change.emit({
      target: this._hostElement,
      source: this,
      parent: this._slider,
      value: this._value,
    });
    this._registeredOnChangeFn(this._value);
  }

  _onBlur(): void {
    this._onTouched();
    this._blur.emit();
  }

  _onDragStart(): void {
    this._valueOnDragStart = this.value;
    this.focus();
    this.dragStart.emit({
      target: this._hostElement,
      source: this,
      parent: this._slider,
      value: this.value,
    });
  }

  _onDragEnd(): void {
    this.dragEnd.emit({
      target: this._hostElement,
      source: this,
      parent: this._slider,
      value: this.value,
    });
    if (this._valueOnDragStart !== this.value) {
      this._onChange();
    }
    this._valueOnDragStart = null;
  }

  /** Focuses the slider thumb input element. */
  focus(): void {
    this._hostElement.focus();
  }

  /** Removes focus from the slider thumb input element. */
  blur(): void {
    this._hostElement.blur();
  }

  /** Returns true if this slider input currently has focus. */
  _isFocused(): boolean {
    return this._document.activeElement === this._hostElement;
  }

  /**
   * ONLY sets the slider input value.
   * Does not emit any events or trigger any UI updates.
   *
   * @param v a new slider input value
   * @returns true if the slider input value changes
   */
  private _setValue(v: NumberInput): boolean {
    this._hostElement.value = coerceNumberProperty(v).toString();
    const value = coerceNumberProperty(this._hostElement.value);
    if (this.value === value) {
      return false;
    }
    this._value = value;
    if (this._slider._isRange) {
      this._siblingThumb!._setMinAndMax();
    }
    return true;
  }

  /** Sets the min and max of the slider thumb input. */
  _setMinAndMax() {
    this._setMin();
    this.max =
      this._slider._isRange && this._thumbPosition === Thumb.START
        ? this._siblingThumb!.value
        : this._slider.max;
  }

  private _setMin() {
    this.min =
      this._slider._isRange && this._thumbPosition === Thumb.END
        ? this._siblingThumb!.value
        : this._slider.min;
  }

  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value: any): void {
    this._setValue(value);
    this._slider._updateUI();
  }

  /**
   * Registers a callback to be triggered when the value has changed.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn: any): void {
    this._registeredOnChangeFn = fn;
  }

  /**
   * Registers a callback to be triggered when the component is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  /**
   * Sets whether the component should be disabled.
   * Implemented as part of ControlValueAccessor.
   * @param isDisabled
   */
  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
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
    '(mousedown)': '_onMousedown($event)',
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
  /** The slider thumb(s). */
  @ViewChildren(MatSliderVisualThumb) _thumbs: QueryList<MatSliderVisualThumb>;

  /** The sliders hidden range input(s). */
  @ContentChildren(MatSliderThumb, {descendants: false}) _inputs: QueryList<MatSliderThumb>;

  /** Whether the slider is disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(v: BooleanInput) {
    this._disabled = coerceBooleanProperty(v);
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
    const min = Math.min(coerceNumberProperty(v, this._min), this.max - 1);
    this._min = min;
    const lesserInput = this._getInput(this._isRange ? Thumb.START : Thumb.END);
    if (lesserInput) {
      lesserInput.min = min;
    }
    this._updateUI();
  }
  private _min: number = 0;

  /** The maximum value that the slider can have. */
  @Input()
  get max(): number {
    return this._max;
  }
  set max(v: NumberInput) {
    const max = Math.max(coerceNumberProperty(v, this._max), this.min + 1);
    this._max = max;
    const greaterInput = this._getInput(this._isRange ? Thumb.END : Thumb.START);
    if (greaterInput) {
      greaterInput.max = max;
    }
    this._updateUI();
  }
  private _max: number = 100;

  /** The values at which the thumb will snap. */
  @Input()
  get step(): number {
    return this._step;
  }
  set step(v: NumberInput) {
    this._step = coerceNumberProperty(v, this._step);
    this._numDecimalPlaces = getNumDecimalPlaces(this._step);
  }
  private _step: number = 1;

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

  private _mouseMoveSubscription: Subscription | null = null;
  private _mouseUpSubscription: Subscription | null = null;

  /** Observer used to monitor size changes in the slider. */
  private _resizeObserver: ResizeObserver | null;

  private _rect: DOMRect | null;

  private _numDecimalPlaces: number;

  private _activeInput: MatSliderThumb | null;

  _trackActiveLeft: string;
  _trackActiveRight: string;
  _trackActiveTransform: string;
  _trackActiveTransformOrigin: string;

  _transitionDuration: string = '80ms';

  _endThumbTransform: string;
  _startThumbTransform: string;

  _isRange: boolean = false;
  _isRtl: boolean = false;

  constructor(
    readonly _ngZone: NgZone,
    readonly _cdr: ChangeDetectorRef,
    elementRef: ElementRef<HTMLElement>,
    readonly _globalListener: GlobalChangeAndInputListener<
      'input' | 'change' | 'mousemove' | 'mouseup'
    >,
    @Optional() readonly _dir: Directionality,
    @Optional()
    @Inject(MAT_RIPPLE_GLOBAL_OPTIONS)
    readonly _globalRippleOptions?: RippleGlobalOptions,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) animationMode?: string,
  ) {
    super(elementRef);
    this._numDecimalPlaces = getNumDecimalPlaces(this.step);
    this._noopAnimations = animationMode === 'NoopAnimations';
    this._dirChangeSubscription = this._dir.change.subscribe(() => this._onDirChange());
    this._isRtl = this._dir.value === 'rtl';
  }

  ngAfterViewInit(): void {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      _validateInputs(this._isRange, this._getInput(Thumb.START), this._getInput(Thumb.END));
    }
    this._observeHostResize();
  }

  ngAfterContentInit(): void {
    this._isRange = this._inputs.length === 2;
    this._rect = this._elementRef.nativeElement.getBoundingClientRect();
    const endInput = this._getInput(Thumb.END);
    const startInput = this._getInput(Thumb.START);
    endInput._setMinAndMax();
    startInput?._setMinAndMax();
    this._staticUpdateUI();
  }

  ngOnDestroy(): void {
    this._dirChangeSubscription.unsubscribe();
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }

  private _mapClientXOnSliderScale(clientX: number): number {
    return mapClientXOnSliderScale({
      clientX,
      min: this.min,
      max: this.max,
      step: this.step,
      rect: this._rect!,
      isRtl: this._isRtl,
      numDecimalPlaces: this._numDecimalPlaces,
    });
  }

  private _determineActiveInput(value: number): MatSliderThumb | null {
    const endInput = this._getInput(Thumb.END);
    const endThumb = this._getThumb(Thumb.END);
    const startInput = this._getInput(Thumb.START);
    const startThumb = this._getThumb(Thumb.START);

    if (!this._isRange || endThumb._isHovered || value >= endInput.value) {
      return endInput;
    }

    if (startThumb._isHovered || value <= startInput.value) {
      return startInput;
    }

    return null;
  }

  private _onMouseUp = (): void => {
    this._mouseUpSubscription?.unsubscribe();
    this._mouseUpSubscription = null;
    this._mouseMoveSubscription?.unsubscribe();
    this._mouseMoveSubscription = null;
    if (!this._activeInput) {
      return;
    }
    this._activeInput._onDragEnd();
    this._activeInput = null;
  };

  private _onMouseMove = (event: MouseEvent): void => {
    if (this._activeInput) {
      this._activeInput!.value = this._mapClientXOnSliderScale(event.clientX);
      return;
    }
    if (event.clientX === event.clientX) {
      return;
    }
    this._activeInput = this._tiebreak(event);
    this._activeInput._onDragStart();
    this._activeInput!.value = this._mapClientXOnSliderScale(event.clientX);
  };

  _onMousedown = (mousedownEvent: any): void => {
    mousedownEvent.preventDefault();
    if (this.disabled) {
      return;
    }

    this._rect = this._elementRef.nativeElement.getBoundingClientRect();
    const valueOnMouseDown = this._mapClientXOnSliderScale(mousedownEvent.clientX);
    this._activeInput = this._determineActiveInput(valueOnMouseDown);
    if (this._activeInput) {
      this._activeInput._onDragStart();
      this._activeInput.value = valueOnMouseDown;
    }

    this._mouseUpSubscription = this._globalListener.listen('mouseup', this._onMouseUp);

    if (this._mouseMoveSubscription) {
      return;
    }

    this._mouseMoveSubscription = this._globalListener.listen('mousemove', e => {
      this._onMouseMove(e as MouseEvent);
    });
  };

  /** Handles updating the slider foundation after a dir change. */
  private _onDirChange(): void {
    this._isRtl = this._dir.value === 'rtl';
    this._staticUpdateUI();
  }

  private _tiebreak(event: MouseEvent): MatSliderThumb {
    const endThumb = this._getInput(Thumb.END);
    const startThumb = this._getInput(Thumb.START);
    if (event.clientX < event.clientX) {
      return this._isRtl ? startThumb : endThumb;
    }
    return this._isRtl ? endThumb : startThumb;
  }

  private _staticUpdateUI(): void {
    this._transitionDuration = '0ms';
    this._updateUI();
    this._transitionDuration = '80ms';
  }

  /** Gets the slider thumb input of the given thumb position. */
  _getInput(thumbPosition: Thumb): MatSliderThumb {
    return thumbPosition === Thumb.END ? this._inputs?.last! : this._inputs?.first!;
  }

  /** Gets the slider thumb HTML input element of the given thumb position. */
  _getThumb(thumbPosition: Thumb): MatSliderVisualThumb {
    return thumbPosition === Thumb.END ? this._thumbs?.last! : this._thumbs?.first!;
  }

  private _setTrackActiveStyles(styles: {
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

  private _setThumbStyles(thumbPosition: Thumb, styles: {transform: string}) {
    thumbPosition === Thumb.END
      ? (this._endThumbTransform = styles.transform)
      : (this._startThumbTransform = styles.transform);
  }

  private _calcThumbPositions({startValue, endValue}: {startValue: number; endValue: number}): {
    thumbLeftPos: number;
    thumbRightPos: number;
  } {
    return calcThumbPositions({
      endValue,
      startValue,
      isRtl: this._isRtl,
      min: this.min,
      max: this.max,
      rect: this._rect!,
    });
  }

  /** Starts observing and updating the slider if the host changes its size. */
  private _observeHostResize() {
    if (typeof ResizeObserver === 'undefined' || !ResizeObserver) {
      return;
    }

    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => {
        const rect = this._elementRef.nativeElement.getBoundingClientRect();
        if (this._rect!.width === rect.width) {
          return;
        }
        this._rect = rect;
        this._staticUpdateUI();
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }

  /**
   * Updates the active track and thumb style properties to reflect current
   * value.
   */
  _updateUI(thumb?: Thumb) {
    if (!this._getInput(Thumb.END)) {
      return;
    }

    const endValue = this._getInput(Thumb.END).value;
    const startValue = this._isRange ? this._getInput(Thumb.START).value : this.min;
    const percentage = (endValue - startValue) / (this.max - this.min);
    const {thumbLeftPos, thumbRightPos} = this._calcThumbPositions({startValue, endValue});

    // Set active track styles.
    const trackAnimatesFromRight =
      (!this._isRtl && thumb === Thumb.START) || (this._isRtl && thumb !== Thumb.START);

    trackAnimatesFromRight
      ? this._setTrackActiveStyles({
          left: 'auto',
          right: `${this._rect!.width - thumbRightPos}px`,
          transform: `scaleX(${percentage})`,
          transformOrigin: 'right',
        })
      : this._setTrackActiveStyles({
          left: `${thumbLeftPos}px`,
          right: 'auto',
          transform: `scaleX(${percentage})`,
          transformOrigin: 'left',
        });

    // Set thumb styles.
    const thumbStartPos = this._isRtl ? thumbRightPos : thumbLeftPos;
    const thumbEndPos = this._isRtl ? thumbLeftPos : thumbRightPos;

    this._setThumbStyles(Thumb.START, {
      transform: `translateX(${thumbStartPos}px)`,
    });
    this._setThumbStyles(Thumb.END, {
      transform: `translateX(${thumbEndPos}px)`,
    });

    this._cdr.detectChanges();
  }
}

/** Ensures that there is not an invalid configuration for the slider thumb inputs. */
function _validateInputs(
  isRange: boolean,
  startInputElement: MatSliderThumb,
  endInputElement: MatSliderThumb,
): void {
  const startValid = !isRange || startInputElement._hostElement.hasAttribute('matSliderStartThumb');
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

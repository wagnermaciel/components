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
import {Platform} from '@angular/cdk/platform';
import {DOCUMENT} from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import {CanColorCtor, MatRipple, mixinColor} from '@angular/material/core';
import {MDCSliderFoundation, Thumb, TickMark} from '@material/slider';
import {SliderAdapter} from './slider-adapter';
import {MatSliderThumb} from './slider-thumb';
import {MatSliderThumbKnob} from './slider-thumb-knob';

// Boilerplate for applying mixins to MatSlider.
/** @docs-private */
class MatSliderBase {
  constructor(public _elementRef: ElementRef<HTMLElement>) {}
}
const _MatSliderMixinBase:
    CanColorCtor &
    typeof MatSliderBase =
        mixinColor(MatSliderBase, 'primary');

/** A simple event emitted by the MatSlider component. */
export class MatSliderEvent {
  /** The MatSlider that changed. */
  source: MatSlider;

  /** The MatSliderThumb that changed. */
  sliderThumb: MatSliderThumb;

  /** The new value of the source slider. */
  value: number | null;

  constructor(source: MatSlider, sliderThumb: MatSliderThumb, value: number | null) {
    this.source = source;
    this.sliderThumb = sliderThumb;
    this.value = value;
  }
}

export class MatSliderInteractionEvent {
  thumb: Thumb;
  source: MatSlider;
  constructor(source: MatSlider, thumb: Thumb) {
    this.source = source;
    this.thumb = thumb;
  }
}

// TODO(wagnermaciel): Figure out what the MAT_SLIDER_VALUE_ACCESSOR did and add it back.

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
    '[class.mdc-slider--range]': 'isRange',
    '[class.mdc-slider--disabled]': 'isDisabled',
    '[class.mdc-slider--discrete]': 'isDiscrete',
    '[class.mdc-slider--tick-marks]': 'hasTickMarks',
  },
  exportAs: 'matSlider',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MatRipple],
  inputs: ['color'],
})
export class MatSlider extends _MatSliderMixinBase implements AfterViewInit, OnDestroy {

  // ************************* //
  // View and content children //
  // ************************* //

  /** The visual slider thumb(s). */
  @ViewChildren('thumb') _thumbs: QueryList<ElementRef<HTMLElement>>;
  private get thumbs(): HTMLElement[] { return this._thumbs?.toArray().map(e => e.nativeElement); }

  /** The active section of the slider track. */
  @ViewChild('trackActive') _trackActive: ElementRef<HTMLElement>;
  get trackActive(): HTMLElement { return this._trackActive.nativeElement; }

  /** The hidden range inputs. */
  @ContentChildren(MatSliderThumb) _inputs: QueryList<MatSliderThumb>;
  private get inputs(): MatSliderThumb[] { return this._inputs ? this._inputs.toArray() : []; }

  /** The slider thumb knobs. */
  @ViewChildren(MatSliderThumbKnob) _knobs: QueryList<MatSliderThumbKnob>;
  private get knobs(): MatSliderThumbKnob[] { return this._knobs ? this._knobs.toArray() : []; }

  // ****** //
  // Inputs //
  // ****** //

  /** Whether the slider is disabled. */
  @Input()
  get isDisabled(): boolean { return this._isDisabled; }
  set isDisabled(v: boolean) {
    this._isDisabled = coerceBooleanProperty(v);
    if (this.initialized) {
      this._foundation.setDisabled(v);
    }
  }
  private _isDisabled = false;

  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  @Input()
  get isDiscrete(): boolean { return this._isDiscrete; }
  set isDiscrete(v) { this._isDiscrete = coerceBooleanProperty(v); }
  private _isDiscrete = false;

  /** Whether the slider displays tick marks along the slider track. */
  @Input()
  get hasTickMarks(): boolean { return this._hasTickMarks; }
  set hasTickMarks(v: boolean) { this._hasTickMarks = this.isDiscrete && coerceBooleanProperty(v); }
  private _hasTickMarks: boolean = false;

  /** The minimum value that the slider can have. */
  @Input()
  get min(): number { return this._min; }
  set min(v: number) { this._min = coerceNumberProperty(v, this._min); }
  private _min = 0;

  /** The maximum value that the slider can have. */
  @Input()
  get max(): number { return this._max; }
  set max(v: number) { this._max = coerceNumberProperty(v, this._max); }
  private _max = 100;

  /** The values at which the thumb will snap. */
  @Input()
  get step(): number { return this._step; }
  set step(v: number) { this._step = coerceNumberProperty(v, this._step); }
  private _step: number = 1;

  /**
   * Function that will be used to format the value before it is displayed
   * in the thumb label. Can be used to format very large number in order
   * for them to fit into the slider thumb.
   */
  @Input() displayWith: ((value: number) => string) | null;

  // ******* //
  // Outputs //
  // ******* //

  /** Event emitted when the slider value has changed. */
  @Output() readonly change: EventEmitter<MatSliderEvent> = new EventEmitter<MatSliderEvent>();

  /** Event emitted when the slider thumb moves. */
  @Output() readonly input: EventEmitter<MatSliderEvent> = new EventEmitter<MatSliderEvent>();

  /** Event emitted when the slider thumb starts being dragged. */
  @Output() readonly dragStart: EventEmitter<MatSliderEvent> = new EventEmitter<MatSliderEvent>();

  /** Event emitted when the slider thumb stops being dragged. */
  @Output() readonly dragEnd: EventEmitter<MatSliderEvent> = new EventEmitter<MatSliderEvent>();

  // *************** //
  // Class variables //
  // *************** //

  /** Instance of the MDC slider foundation for this slider. */
  private _foundation: MDCSliderFoundation = new MDCSliderFoundation(new SliderAdapter(this));

  /** Used to keep track of & render the active & inactive tick marks on the slider track. */
  get tickMarks(): TickMark[] { return this._tickMarks; }
  set tickMarks(v: TickMark[]) {
    this._tickMarks = v;
    this._cdr.detectChanges();
  }
  private _tickMarks: TickMark[];

  /** Returns an array of the thumb types that exist on the current slider instance. */
  _getThumbTypes(): Thumb[] {
    return this.isRange ? [Thumb.START, Thumb.END] : [Thumb.END];
  }

  /** Whether the foundation has been initialized. */
  initialized: boolean = false;

  /** Whether this is a ranged slider. */
  get isRange(): boolean { return this.inputs.length === 2; }

  _startValueIndicatorText: string;
  _endValueIndicatorText: string;

  getValueIndicatorText(value: number) {
    return this.displayWith ? this.displayWith(value) : value.toString();
  }

  getValueIndicatorTextByThumb(thumb: Thumb) {
    return this.getValueIndicatorText(this.getValue(thumb));
  }

  setValueIndicatorText(value: number, thumb: Thumb) {
    const valueText = this.getValueIndicatorText(value);
    thumb === Thumb.START
      ? this._startValueIndicatorText = valueText
      : this._endValueIndicatorText = valueText;
  }

  // ************** //
  // Public methods //
  // ************** //

  getTickMarkClass(tickMark: TickMark) {
    return tickMark === TickMark.ACTIVE
      ? 'mdc-slider__tick-mark--active'
      : 'mdc-slider__tick-mark--inactive';
  }
  createEvent(value: number, thumb: Thumb): MatSliderEvent {
    return new MatSliderEvent(this, this.getInput(thumb), value);
  }
  getThumbEl(thumb: Thumb = Thumb.END): HTMLElement {
    return thumb === Thumb.END ? this.thumbs[this.thumbs.length - 1] : this.thumbs[0];
  }
  getKnob(thumb: Thumb) {
    return thumb === Thumb.END ? this.knobs[this.knobs.length - 1] : this.knobs[0];
  }
  getKnobEl(thumb: Thumb) {
    return this.getKnob(thumb).getRootEl();
  }
  getInput(thumb: Thumb = Thumb.END): MatSliderThumb {
    return thumb === Thumb.END ? this.inputs[this.inputs.length - 1] : this.inputs[0];
  }
  getInputEl(thumb: Thumb = Thumb.END): HTMLInputElement {
    return this.getInput(thumb).getRootEl();
  }
  getValue(thumb: Thumb = Thumb.END): number {
    return coerceNumberProperty(this.getInput(thumb).value);
  }
  setValue(value: number, thumb: Thumb) {
    thumb === Thumb.START
      ? this._foundation.setValueStart(value)
      : this._foundation.setValue(value);
  }

  private _initInputs(): Promise<void> {
    // TODO(wagnermaciel): Ask mmalerba how this resolves that change detection issue.
    return Promise.resolve().then(() => {
      this.inputs[0].init({
        thumb: this.isRange ? Thumb.START : Thumb.END,
      });
      this.inputs[1]?.init({
        thumb: Thumb.END,
      });
    });
  }

  _hostElement: HTMLElement;
  _window: Window;
  constructor(
    protected _cdr: ChangeDetectorRef,
    protected _platform: Platform,
    _elementRef: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) public _document: any,
  ) {
    super(_elementRef);
    this._hostElement = _elementRef.nativeElement;
    this._window = _document.defaultView || window;
  }

  ngAfterViewInit() {
    this._initInputs().then(() => {
      this.initialized = true;
      this._foundation.init();
      if (this._platform.isBrowser) {
        this._foundation.layout();
      }
    });
  }

  ngOnDestroy() {
    if (this._platform.isBrowser) {
      this._foundation.destroy();
    }
  }

  @Output() readonly _mouseenter: EventEmitter<MatSliderInteractionEvent> = new EventEmitter<MatSliderInteractionEvent>();
  @Output() readonly _mouseleave: EventEmitter<MatSliderInteractionEvent> = new EventEmitter<MatSliderInteractionEvent>();
  createInteractionEvent(thumb: Thumb) {
    return new MatSliderInteractionEvent(this, thumb);
  }

  // The following lines of code enable us to provide a better developer experience by allowing a
  // more intuitive & less strict syntax for using the mat-slider. For example, without this the
  // following would be invalid:
  //
  // <mat-slider step="10" isDisabled>
  //   <input mat-slider-thumb>
  // </mat-slider>
  //
  // Because isDiscrete would technically be an empty string, normally a type error would be thrown.
  // The lines below allows this syntax and we can use coerceBooleanProperty to determine the
  // expected boolean value.
  //
  // Similarly, a type error would normally be thrown for step because a string is being provided.
  // We are again able to convert it to a number using coerceNumberProperty.

  static ngAcceptInputType_isDisabled: BooleanInput;
  static ngAcceptInputType_isDiscrete: BooleanInput;
  static ngAcceptInputType_hasTickMarks: BooleanInput;
  static ngAcceptInputType_min: NumberInput;
  static ngAcceptInputType_max: NumberInput;
  static ngAcceptInputType_step: NumberInput;
}

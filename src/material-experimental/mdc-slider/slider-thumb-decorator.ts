/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {MatRipple, RippleAnimationConfig, RippleRef, RippleState} from '@angular/material/core';
import {MatSlider, MatSliderEvent} from './slider';
import {Thumb} from '@material/slider';
import {MatSliderThumb} from './slider-thumb';

@Directive({
  selector: '[thumb-knob]',
})
export class ThumbKnob implements AfterViewInit {
  private _thumb: Thumb;
  private _sliderInput: MatSliderThumb;

  private _hoverRippleRef: RippleRef;
  private _focusRippleRef: RippleRef;
  private _activeRippleRef: RippleRef;

  private _showHoverRipple(): void {
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({ enterDuration: 0, exitDuration: 0 });
      this._hoverRippleRef.element.classList.add('mdc-slider-hover-ripple');
    }
  }
  private _showFocusRipple(): void {
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({ enterDuration: 0, exitDuration: 0 });
      this._focusRippleRef.element.classList.add('mdc-slider-focus-ripple');
    }
  }
  private _showActiveRipple(): void {
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({ enterDuration: 225, exitDuration: 400 });
      this._activeRippleRef.element.classList.add('mdc-slider-active-ripple');
    }
  }
  private _isShowingRipple(rippleRef?: RippleRef): boolean {
    return rippleRef?.state === RippleState.FADING_IN || rippleRef?.state === RippleState.VISIBLE;
  }
  private _showRipple(animation: RippleAnimationConfig): RippleRef {
    return this._ripple.launch({
      animation,
      centered: true,
      persistent: true,
    });
  }

  private _isActive: boolean = false;

  constructor(
    private _slider: MatSlider,
    private _ripple: MatRipple,
    private _elementRef: ElementRef,
    private _sliderThumb: MatSliderThumbDecorator,
    ) {
      this._ripple.radius = 25;
    }

  ngAfterViewInit() {
    this._thumb = this._sliderThumb.thumb;
    this._sliderInput = this._slider.getInput(this._thumb);

    this._slider.dragStart.subscribe((event: MatSliderEvent) => this._onDragStart(event));
    this._slider.dragEnd.subscribe((event: MatSliderEvent) => this._onDragEnd(event));

    this._sliderInput._focus.subscribe(() => this._onFocus());
    this._sliderInput._blur.subscribe(() => this._onBlur());

    this._sliderThumb.mouseenter.subscribe(() => this._onMouseEnter());
    this._sliderThumb.mouseleave.subscribe(() => this._onMouseLeave());
  }

  private _onMouseEnter(): void {
    // We don't want to show the hover ripple on top of the focus ripple.
    // This can happen if the user tabs to a thumb and then the user moves their cursor over it.
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._showHoverRipple();
    }
  }
  private _onMouseLeave(): void {
    this._hoverRippleRef?.fadeOut();
  }

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
    if (this._sliderThumb.isHovered) {
      this._showHoverRipple();
    }
  }

  private _onDragStart(event: MatSliderEvent): void {
    if (event.sliderThumb.thumb === this._thumb) {
      this._isActive = true;
      this._showActiveRipple();
    }
  }
  private _onDragEnd(event: MatSliderEvent): void {
    if (event.sliderThumb.thumb === this._thumb) {
      this._isActive = false;
      this._activeRippleRef?.fadeOut();
      // Happens when the user starts dragging a thumb, tabs away, and then stops dragging.
      if (!this._sliderInput.isFocused) {
        this._focusRippleRef?.fadeOut();
      }
    }
  }

  getRootEl(): HTMLElement {
    return this._elementRef.nativeElement;
  }
}

/**
 * Handles displaying the slider knobs and their value indicators.
 */
@Component({
  selector: 'mat-slider-thumb',
  templateUrl: 'slider-thumb-decorator.html',
  host: {'class': 'mdc-slider__thumb'},
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MatRipple],
})
export class MatSliderThumbDecorator {
  /** Whether the slider is discrete. */
  @Input()
  get isDiscrete(): boolean { return this._isDiscrete; }
  set isDiscrete(v) { this._isDiscrete = coerceBooleanProperty(v); }
  private _isDiscrete = false;

  /** The text content of the value indicator for a discrete slider. */
  @Input()
  get valueIndicatorText(): string { return this._valueIndicatorText; }
  set valueIndicatorText(v: string) {
    this._valueIndicatorText = v;
    this._cdr.detectChanges();
  }
  private _valueIndicatorText: string;

  @Input() thumb: Thumb;

  @Output() mouseenter: EventEmitter<void> = new EventEmitter<void>();
  @Output() mouseleave: EventEmitter<void> = new EventEmitter<void>();

  /** The visible circle for the slider thumb. */
  @ViewChild(ThumbKnob) _knob: ThumbKnob;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _elementRef: ElementRef<HTMLElement>,
    ) {}

  isHovered: boolean = false;

  @HostListener('mouseenter') onMouseEnter(): void {
    if (!this.isHovered) {
      this.isHovered = true;
      this.mouseenter.emit();
    }
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    if (this.isHovered) {
      this.isHovered = false;
      this.mouseleave.emit();
    }
  }

  getRootEl() {
    return this._elementRef.nativeElement;
  }

  getKnobWidth() {
    return this._knob.getRootEl().getBoundingClientRect().width;
  }
}

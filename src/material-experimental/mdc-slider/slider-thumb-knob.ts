import {AfterViewInit, Directive, ElementRef, Input} from "@angular/core";
import {MatRipple, RippleAnimationConfig, RippleRef, RippleState} from "@angular/material/core";
import {Thumb} from '@material/slider';
import {MatSlider, MatSliderEvent, MatSliderInteractionEvent} from "./slider";

@Directive({
  selector: '[mat-slider-thumb-knob]',
})
export class MatSliderThumbKnob implements AfterViewInit {
  @Input() thumb: Thumb;

  private _isActive: boolean = false;
  private _isFocused: boolean = false;
  private _isHovered: boolean = false;

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
      persistent: true,
    });
  }

  constructor(
    private _slider: MatSlider,
    private _ripple: MatRipple,
    private _elementRef: ElementRef,
    ) {
      this._ripple.radius = 25;
      this._ripple.centered = true;
    }

  ngAfterViewInit() {
    this._slider.dragEnd.subscribe((event: MatSliderEvent) => this._onDragEnd(event));
    this._slider.dragStart.subscribe((event: MatSliderEvent) => this._onDragStart(event));

    this._slider.getInput(this.thumb)._blur.subscribe(() => this._onBlur());
    this._slider.getInput(this.thumb)._focus.subscribe(() => this._onFocus());

    this._slider._mouseenter.subscribe((event: MatSliderInteractionEvent) => {
      this._onMouseEnter(event);
    });
    this._slider._mouseleave.subscribe((event: MatSliderInteractionEvent) => {
      this._onMouseLeave(event);
    });
  }

  private _onMouseEnter(event: MatSliderInteractionEvent): void {
    if (event.thumb === this.thumb) {
      this._isHovered = true;
      // We don't want to show the hover ripple on top of the focus ripple.
      // This can happen if the user tabs to a thumb and then the user moves their cursor over it.
      if (!this._isShowingRipple(this._focusRippleRef)) {
        this._showHoverRipple();
      }
    }
  }

  private _onMouseLeave(event: MatSliderInteractionEvent): void {
    if (event.thumb === this.thumb) {
      this._isHovered = false;
      this._hoverRippleRef?.fadeOut();
    }
  }

  private _onFocus(): void {
    this._isFocused = true;
    // We don't want to show the hover ripple on top of the focus ripple.
    // Happen when the users cursor is over a thumb and then the user tabs to it.
    this._hoverRippleRef?.fadeOut();
    this._showFocusRipple();
  }

  private _onBlur(): void {
    this._isFocused = false;
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
    if (event.sliderThumb.thumb === this.thumb) {
      this._isActive = true;
      this._showActiveRipple();
    }
  }

  private _onDragEnd(event: MatSliderEvent): void {
    if (event.sliderThumb.thumb === this.thumb) {
      this._isActive = false;
      this._activeRippleRef?.fadeOut();
      // Happens when the user starts dragging a thumb, tabs away, and then stops dragging.
      if (!this._isFocused) {
        this._focusRippleRef?.fadeOut();
      }
    }
  }

  getRootEl(): HTMLElement {
    return this._elementRef.nativeElement;
  }
}

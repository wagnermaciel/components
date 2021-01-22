/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {MatRipple} from '@angular/material/core';
import {Thumb} from '@material/slider';
import {MatSliderThumbKnob} from './slider-thumb-knob'

/**
 * Handles displaying the slider knobs and their value indicators.
 */
@Component({
  selector: 'mat-slider-start-thumb-decorator, mat-slider-end-thumb-decorator',
  templateUrl: 'slider-thumb-decorator.html',
  host: {
    'class': 'mdc-slider__thumb',
    '(mouseenter)': '_mouseenter.emit()',
    '(mouseleave)': '_mouseleave.emit()',
  },
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

  @Output() _mouseenter: EventEmitter<void> = new EventEmitter<void>();
  @Output() _mouseleave: EventEmitter<void> = new EventEmitter<void>();

  /** The visible circle for the slider thumb. */
  @ViewChild(MatSliderThumbKnob) _knob: MatSliderThumbKnob;

  /** Which thumb this decorator corresponds to. */
  get thumb(): Thumb {
    if (!this._thumb) {
      this.thumb = this._elementRef.nativeElement.tagName === 'MAT-SLIDER-END-THUMB-DECORATOR'
        ? Thumb.END
        : Thumb.START;
    }
    return this._thumb;
  }
  set thumb(v: Thumb) { this._thumb = v; }
  private _thumb: Thumb;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _elementRef: ElementRef<HTMLElement>,
    ) {}

  getRootEl() {
    return this._elementRef.nativeElement;
  }
}

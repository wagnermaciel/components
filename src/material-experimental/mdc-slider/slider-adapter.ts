/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {SpecificEventListener, EventType} from '@material/base';
import {MDCSliderAdapter, Thumb, TickMark} from '@material/slider';
import {MatSlider} from './slider';

// TODO(wagnermaciel): Figure out why I need to declare the methods on SliderAdapter this way.
// * Object.assign(defaultAdapter, adapter) should return just adapter since it implements
// the same base class and therefore should have the same properties.
// * Object.keys(adapter) shows only `_delegate`. None of the classes show up.
// * Defining the methods like this makes them show up and makes Object.assign work as expected.

export class SliderAdapter implements MDCSliderAdapter {
  constructor(private readonly _delegate: MatSlider) {}
  hasClass = (className: string): boolean => {
    return this._delegate._hostElement.classList.contains(className);
  }
  addClass = (className: string): void => {
    this._delegate._hostElement.classList.add(className);
  }
  removeClass = (className: string): void => {
    this._delegate._hostElement.classList.remove(className);
  }
  getAttribute = (attribute: string): string | null => {
    return this._delegate._hostElement.getAttribute(attribute);
  }
  addThumbClass = (className: string, thumb: Thumb): void => {
    this._delegate.getThumbEl(thumb).classList.add(className);
  }
  removeThumbClass = (className: string, thumb: Thumb): void => {
    this._delegate.getThumbEl(thumb).classList.remove(className);
  }
  getInputValue = (thumb: Thumb): string => {
    return this._delegate.getInputEl(thumb).value;
  }
  setInputValue = (value: string, thumb: Thumb): void => {
    this._delegate.getInput(thumb).value = value;
  }
  getInputAttribute = (attribute: string, thumb: Thumb): string | null => {
    return this._delegate.getInputEl(thumb).getAttribute(attribute);
  }
  setInputAttribute = (attribute: string, value: string, thumb: Thumb): void => {
    this._delegate.getInputEl(thumb).setAttribute(attribute, value);
  }
  removeInputAttribute = (attribute: string, thumb: Thumb): void => {
    this._delegate.getInputEl(thumb).removeAttribute(attribute);
  }
  focusInput = (thumb: Thumb): void => {
    this._delegate.getInputEl(thumb).focus();
  }
  isInputFocused = (thumb: Thumb): boolean => {
    return this._delegate.getInput(thumb).isFocused();
  }
  getThumbKnobWidth = (thumb: Thumb): number => {
    return this._delegate.getKnobEl(thumb).getBoundingClientRect().width;
  }
  getThumbBoundingClientRect = (thumb: Thumb): ClientRect => {
    return this._delegate.getThumbEl(thumb).getBoundingClientRect();
  }
  getBoundingClientRect = (): ClientRect => {
    return this._delegate._hostElement.getBoundingClientRect();
  }
  isRTL = (): boolean => {
    return false;
    // TODO(wagnermaciel): DO NOT FORGET TO IMPLEMENT THIS.
    // throw new Error('Method not implemented.');
  }
  setThumbStyleProperty = (propertyName: string, value: string, thumb: Thumb): void => {
    this._delegate.getThumbEl(thumb).style.setProperty(propertyName, value);
  }
  removeThumbStyleProperty = (propertyName: string, thumb: Thumb): void => {
    this._delegate.getThumbEl(thumb).style.removeProperty(propertyName);
  }
  setTrackActiveStyleProperty = (propertyName: string, value: string): void => {
    this._delegate.trackActive.style.setProperty(propertyName, value);
  }
  removeTrackActiveStyleProperty = (propertyName: string): void => {
    this._delegate.trackActive.style.removeProperty(propertyName);
  }
  setValueIndicatorText = (value: number, thumb: Thumb): void => {
    this._delegate.setValueIndicatorText(value, thumb);
  }
  getValueToAriaValueTextFn = (): ((value: number) => string) | null => {
    return this._delegate.displayWith;
  }
  updateTickMarks = (tickMarks: TickMark[]): void => {
    this._delegate.tickMarks = tickMarks;
  }
  setPointerCapture = (pointerId: number): void => {
    // TODO(wagnermaciel): we did this to silence unit test errors. figure out if we can avoid this.
    try {
      this._delegate._elementRef.nativeElement.setPointerCapture(pointerId);
    } catch (error) {
      console.warn(error);
    }
  }
  emitChangeEvent = (value: number, thumb: Thumb): void => {
    this._delegate.change.emit(this._delegate.createEvent(value, thumb));
  }
  emitInputEvent = (value: number, thumb: Thumb): void => {
    this._delegate.input.emit(this._delegate.createEvent(value, thumb));
  }
  emitDragStartEvent = (value: number, thumb: Thumb): void => {
    this._delegate.dragStart.emit(this._delegate.createEvent(value, thumb));
  }
  emitDragEndEvent = (value: number, thumb: Thumb): void => {
    this._delegate.dragEnd.emit(this._delegate.createEvent(value, thumb));
  }
  registerEventHandler = <K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void => {
    this._delegate._hostElement.addEventListener(evtType, handler);
  }
  deregisterEventHandler = <K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void => {
    this._delegate._hostElement.removeEventListener(evtType, handler);
  }
  registerThumbEventHandler = <K extends EventType>(thumb: Thumb, evtType: K, handler: SpecificEventListener<K>): void => {
    this._delegate.getThumbEl(thumb).addEventListener(evtType, handler);
  }
  deregisterThumbEventHandler = <K extends EventType>(thumb: Thumb, evtType: K, handler: SpecificEventListener<K>): void => {
    this._delegate.getThumbEl(thumb).removeEventListener(evtType, handler);
  }
  registerInputEventHandler = <K extends EventType>(thumb: Thumb, evtType: K, handler: SpecificEventListener<K>): void => {
    this._delegate.getInputEl(thumb).addEventListener(evtType, handler);
  }
  deregisterInputEventHandler = <K extends EventType>(thumb: Thumb, evtType: K, handler: SpecificEventListener<K>): void => {
    this._delegate.getInputEl(thumb).removeEventListener(evtType, handler);
  }
  registerBodyEventHandler = <K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void => {
    this._delegate._document.body.addEventListener(evtType, handler);
  }
  deregisterBodyEventHandler = <K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void => {
    this._delegate._document.body.removeEventListener(evtType, handler);
  }
  registerWindowEventHandler = <K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void => {
    this._delegate._window.addEventListener(evtType, handler);
  }
  deregisterWindowEventHandler = <K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void => {
    this._delegate._window.removeEventListener(evtType, handler);
  }
}

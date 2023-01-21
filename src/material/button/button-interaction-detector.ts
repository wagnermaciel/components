/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {DOCUMENT} from '@angular/common';
import {Inject, Injectable, NgZone, OnDestroy, Optional} from '@angular/core';

/** Handles listening for the initial interaction on a MatButton. */
@Injectable({providedIn: 'root'})
export class MatButtonInitialInteractionListener implements OnDestroy {
  private _document: Document;

  /** Used to get the callbacks that need to be dispatched when an element is interacted with. */
  private _elementsToCallbacks = new Map<Element, (() => void)[]>();

  /** The options for the document level event listeners. */
  private OPTIONS = {passive: true, capture: true};

  constructor(private _ngZone: NgZone, @Optional() @Inject(DOCUMENT) document: any) {
    this._document = document;
    this._ngZone.runOutsideAngular(() => {
      this._document.addEventListener('focus', this._handleRenders, this.OPTIONS);
      this._document.addEventListener('mouseenter', this._handleRenders, this.OPTIONS);
    });
  }

  ngOnDestroy() {
    this._elementsToCallbacks.clear();
    this._ngZone.runOutsideAngular(() => {
      document.removeEventListener('focus', this._handleRenders);
      document.removeEventListener('mouseenter', this._handleRenders);
    });
  }

  /** Checks if the given interaction happened on any of the elements stored and triggers their callback(s). */
  private _handleRenders = (event: Event) => {
    if (!event.target || !(event.target instanceof Element)) {
      return;
    }

    const elements = this._elementsToCallbacks.keys();
    for (const element of elements) {
      if (element.contains(event.target)) {
        this._elementsToCallbacks.get(element)!.forEach(callback => callback());
        this._elementsToCallbacks.delete(element);
      }
    }
  };

  /** Calls the given callback for the initial focus or mouseenter event on the given element. */
  public listen(element: HTMLElement, callback: () => void) {
    const callbacks = this._elementsToCallbacks.get(element) || [];
    callbacks.push(callback);
    this._elementsToCallbacks.set(element, callbacks);
  }
}

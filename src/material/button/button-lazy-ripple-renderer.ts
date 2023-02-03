/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {DOCUMENT} from '@angular/common';
import {
  ANIMATION_MODULE_TYPE,
  Inject,
  Injectable,
  NgZone,
  OnDestroy,
  Optional,
} from '@angular/core';
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleConfig,
  RippleGlobalOptions,
  RippleRenderer,
  RippleTarget,
} from '../core';
import {Platform} from '@angular/cdk/platform';

@Injectable({providedIn: 'root'})
export class MatButtonRippleLoader implements OnDestroy {
  private _document: Document;

  constructor(
    private _platform: Platform,
    private _ngZone: NgZone,
    @Optional() @Inject(DOCUMENT) document: any,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) private animationMode?: string,
    @Optional()
    @Inject(MAT_RIPPLE_GLOBAL_OPTIONS)
    private globalRippleOptions?: RippleGlobalOptions,
  ) {
    this._document = document;

    this._ngZone.runOutsideAngular(() => {
      const options = {passive: true, capture: true};
      this._document.addEventListener('focus', this.onInteraction, options);
      this._document.addEventListener('mouseenter', this.onInteraction, options);
    });
  }

  ngOnDestroy() {
    this._ngZone.runOutsideAngular(() => {
      document.removeEventListener('focus', this.onInteraction);
      document.removeEventListener('mouseenter', this.onInteraction);
    });
  }

  private onInteraction = (event: Event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const button = event.target.closest(
      '.mat-mdc-button-base:not([data-mat-button-ripple-rendered])',
    );

    if (button) {
      this.insertMatButtonRipple(button as HTMLButtonElement);
    }
  };

  insertMatButtonRipple(button: HTMLButtonElement): void {
    const ripple = this._document.createElement('span');
    ripple.classList.add('mat-mdc-button-ripple');

    const target = new MatButtonRippleTarget(button, this.globalRippleOptions, this.animationMode);
    const rippleRenderer = new RippleRenderer(target, this._ngZone, ripple, this._platform);

    rippleRenderer.setupTriggerEvents(button);

    button.append(ripple);
    button.setAttribute('data-mat-button-ripple-rendered', '');
  }
}

class MatButtonRippleTarget implements RippleTarget {
  public rippleConfig: RippleConfig & RippleGlobalOptions;

  constructor(
    private button: HTMLButtonElement,
    private globalRippleOptions?: RippleGlobalOptions,
    animationMode?: string,
  ) {
    this.setRippleConfig(globalRippleOptions, animationMode);
  }

  private setRippleConfig(globalRippleOptions?: RippleGlobalOptions, animationMode?: string) {
    this.rippleConfig = globalRippleOptions || {};
    if (animationMode === 'NoopAnimations') {
      this.rippleConfig.animation = {enterDuration: 0, exitDuration: 0};
    }
  }

  get rippleDisabled(): boolean {
    return this.button.disabled || !!this.globalRippleOptions?.disabled;
  }
}

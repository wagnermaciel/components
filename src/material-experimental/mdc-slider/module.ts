/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import {MatCommonModule} from '@angular/material-experimental/mdc-core';
import {MatSlider} from './slider';
import {MatSliderThumb} from './slider-thumb';
import {MatSliderThumbDecorator} from './slider-thumb-decorator';
import {MatSliderThumbKnob} from './slider-thumb-knob';

@NgModule({
  imports: [MatCommonModule, CommonModule, MatRippleModule],
  exports: [MatSlider, MatSliderThumb],
  declarations: [MatSlider, MatSliderThumb, MatSliderThumbDecorator, MatSliderThumbKnob],
})
export class MatSliderModule {
}

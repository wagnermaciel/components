/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCommonModule} from '@angular/material-experimental/mdc-core';
import {MatSlider} from './slider';
import {MatSliderThumb} from './slider-thumb';
import {MatSliderThumbDecorator} from './slider-thumb-decorator';

@NgModule({
  imports: [MatCommonModule, CommonModule],
  exports: [MatSlider],
  declarations: [MatSlider, MatSliderThumb, MatSliderThumbDecorator],
})
export class MatSliderModule {
}

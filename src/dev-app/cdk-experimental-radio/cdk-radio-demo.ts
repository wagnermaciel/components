/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
// Import examples here, e.g.
// import {CdkRadioBasicExample} from '@angular/components-examples/cdk-experimental/radio';

@Component({
  templateUrl: 'cdk-radio-demo.html',
  // Add imports here, e.g.
  // imports: [CdkRadioBasicExample],
  styleUrl: 'cdk-radio-demo.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkExperimentalRadioDemo {}

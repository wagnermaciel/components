/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  CdkAccordionConfigurableExample,
  CdkAccordionDisabledFocusableExample,
  CdkAccordionDisabledSkippedExample,
  CdkAccordionMultiExpansionExample,
  CdkAccordionSingleExpansionExample,
} from '@angular/components-examples/cdk-experimental/accordion';

@Component({
  selector: 'cdk-accordion-demo',
  templateUrl: 'cdk-accordion-demo.html',
  standalone: true,
  imports: [
    RouterOutlet,
    CdkAccordionConfigurableExample,
    CdkAccordionSingleExpansionExample,
    CdkAccordionMultiExpansionExample,
    CdkAccordionDisabledFocusableExample,
    CdkAccordionDisabledSkippedExample,
  ],
})
export class CdkExperimentalAccordionDemo {}

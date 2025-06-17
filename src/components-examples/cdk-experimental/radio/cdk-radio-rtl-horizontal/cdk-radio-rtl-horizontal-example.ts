import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CdkRadioGroup, CdkRadioButton} from '@angular/cdk-experimental/radio';

/** @title RTL horizontal radio group. */
@Component({
  selector: 'cdk-radio-rtl-horizontal-example',
  exportAs: 'cdkRadioRtlHorizontalExample',
  templateUrl: 'cdk-radio-rtl-horizontal-example.html',
  styleUrls: ['../radio-common.css', '../cdk-radio-horizontal/cdk-radio-horizontal-example.css'], // Reuse horizontal styles
  standalone: true,
  imports: [CdkRadioGroup, CdkRadioButton, FormsModule],
})
export class CdkRadioRtlHorizontalExample {
  drinks = ['Coffee', 'Tea', 'Juice', 'Water'];
  selectedDrink: string | undefined = 'Tea';
}

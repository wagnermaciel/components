import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CdkRadioGroup, CdkRadioButton} from '@angular/cdk-experimental/radio';

/** @title Horizontal radio group. */
@Component({
  selector: 'cdk-radio-horizontal-example',
  exportAs: 'cdkRadioHorizontalExample',
  templateUrl: 'cdk-radio-horizontal-example.html',
  styleUrls: ['../radio-common.css', './cdk-radio-horizontal-example.css'], // Add specific styles
  standalone: true,
  imports: [CdkRadioGroup, CdkRadioButton, FormsModule],
})
export class CdkRadioHorizontalExample {
  tShirtSizes = ['XS', 'S', 'M', 'L', 'XL'];
  selectedTShirtSize: string | undefined = 'M';
}

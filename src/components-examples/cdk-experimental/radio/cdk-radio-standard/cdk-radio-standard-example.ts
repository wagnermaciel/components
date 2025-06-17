import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CdkRadioGroup, CdkRadioButton} from '@angular/cdk-experimental/radio';

/** @title Basic radio group. */
@Component({
  selector: 'cdk-radio-standard-example',
  exportAs: 'cdkRadioStandardExample',
  templateUrl: 'cdk-radio-standard-example.html',
  styleUrls: ['../radio-common.css'], // Add common styles
  standalone: true,
  imports: [CdkRadioGroup, CdkRadioButton, FormsModule],
})
export class CdkRadioStandardExample {
  fruits = ['Apple', 'Banana', 'Cherry'];
  selectedFruit: string | undefined = 'Banana';
}

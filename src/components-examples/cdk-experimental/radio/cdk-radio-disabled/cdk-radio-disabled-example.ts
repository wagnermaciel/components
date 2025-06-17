import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CdkRadioGroup, CdkRadioButton} from '@angular/cdk-experimental/radio';

/** @title Disabled radio group. */
@Component({
  selector: 'cdk-radio-disabled-example',
  exportAs: 'cdkRadioDisabledExample',
  templateUrl: 'cdk-radio-disabled-example.html',
  styleUrls: ['../radio-common.css'],
  standalone: true,
  imports: [CdkRadioGroup, CdkRadioButton, FormsModule],
})
export class CdkRadioDisabledExample {
  transportationModes = ['Car', 'Bus', 'Train', 'Bicycle'];
  selectedTransportation: string | undefined = 'Car';
}

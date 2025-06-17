import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CdkRadioGroup, CdkRadioButton} from '@angular/cdk-experimental/radio';

/** @title Readonly radio group. */
@Component({
  selector: 'cdk-radio-readonly-example',
  exportAs: 'cdkRadioReadonlyExample',
  templateUrl: 'cdk-radio-readonly-example.html',
  styleUrls: ['../radio-common.css'],
  standalone: true,
  imports: [CdkRadioGroup, CdkRadioButton, FormsModule],
})
export class CdkRadioReadonlyExample {
  seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
  selectedSeason: string | undefined = 'Summer';
}

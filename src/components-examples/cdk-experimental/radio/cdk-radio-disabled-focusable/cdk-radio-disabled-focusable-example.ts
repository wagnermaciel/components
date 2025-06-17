import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CdkRadioGroup, CdkRadioButton} from '@angular/cdk-experimental/radio';

interface Snack {
  name: string;
  disabled: boolean;
}

/** @title Radio group with disabled options that are focusable. */
@Component({
  selector: 'cdk-radio-disabled-focusable-example',
  exportAs: 'cdkRadioDisabledFocusableExample',
  templateUrl: 'cdk-radio-disabled-focusable-example.html',
  styleUrls: ['../radio-common.css'],
  standalone: true,
  imports: [CdkRadioGroup, CdkRadioButton, FormsModule],
})
export class CdkRadioDisabledFocusableExample {
  snacks: Snack[] = [
    {name: 'Chips', disabled: false},
    {name: 'Pretzels', disabled: true},
    {name: 'Popcorn', disabled: false},
    {name: 'Trail Mix', disabled: true},
  ];
  selectedSnack: string | undefined = 'Chips';
}

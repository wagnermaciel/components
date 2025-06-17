import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CdkRadioGroup, CdkRadioButton} from '@angular/cdk-experimental/radio';

/** @title Active descendant radio group. */
@Component({
  selector: 'cdk-radio-active-descendant-example',
  exportAs: 'cdkRadioActiveDescendantExample',
  templateUrl: 'cdk-radio-active-descendant-example.html',
  styleUrls: ['../radio-common.css'],
  standalone: true,
  imports: [CdkRadioGroup, CdkRadioButton, FormsModule],
})
export class CdkRadioActiveDescendantExample {
  colors = ['Red', 'Green', 'Blue', 'Yellow'];
  selectedColor: string | undefined = 'Green';
}

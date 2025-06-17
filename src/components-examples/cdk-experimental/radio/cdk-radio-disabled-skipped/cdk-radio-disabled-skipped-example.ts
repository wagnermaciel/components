import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CdkRadioGroup, CdkRadioButton} from '@angular/cdk-experimental/radio';

interface Planet {
  name: string;
  disabled: boolean;
}

/** @title Radio group with disabled options that are skipped. */
@Component({
  selector: 'cdk-radio-disabled-skipped-example',
  exportAs: 'cdkRadioDisabledSkippedExample',
  templateUrl: 'cdk-radio-disabled-skipped-example.html',
  styleUrls: ['../radio-common.css'],
  standalone: true,
  imports: [CdkRadioGroup, CdkRadioButton, FormsModule],
})
export class CdkRadioDisabledSkippedExample {
  planets: Planet[] = [
    {name: 'Mercury', disabled: false},
    {name: 'Venus', disabled: false},
    {name: 'Earth', disabled: false},
    {name: 'Mars', disabled: true}, // Mars is currently uninhabitable for this demo
    {name: 'Jupiter', disabled: false},
    {name: 'Saturn', disabled: true}, // Saturn is too gassy for this demo
    {name: 'Uranus', disabled: false},
    {name: 'Neptune', disabled: false},
  ];
  selectedPlanet: string | undefined = 'Earth';
}

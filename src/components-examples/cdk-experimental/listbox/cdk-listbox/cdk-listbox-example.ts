import {Component} from '@angular/core';
import {CdkListbox, CdkOption} from '@angular/cdk-experimental/listbox';

/** @title Listbox using UI Patterns. */
@Component({
  selector: 'cdk-listbox-example',
  exportAs: 'cdkListboxExample',
  templateUrl: 'cdk-listbox-example.html',
  styleUrl: 'cdk-listbox-example.css',
  imports: [CdkListbox, CdkOption],
})
export class CdkListboxExample {}

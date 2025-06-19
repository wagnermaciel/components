import {Component, computed, model, Signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {
  CdkAccordionGroup,
  CdkAccordionTrigger,
  CdkAccordionPanel,
  CdkAccordionContent,
} from '@angular/cdk-experimental/accordion';

/** @title Accordion with focusable disabled items. */
@Component({
  selector: 'cdk-accordion-disabled-focusable-example',
  templateUrl: 'cdk-accordion-disabled-focusable-example.html',
  styleUrl: '../cdk-accordion-examples.css',
  standalone: true,
  imports: [
    MatIconModule,
    CdkAccordionGroup,
    CdkAccordionTrigger,
    CdkAccordionPanel,
    CdkAccordionContent,
  ],
})
export class CdkAccordionDisabledFocusableExample {
  // We can choose to expand some items by default or none.
  // For this example, let's not pre-expand any to clearly show disabled state.
  expandedIds = model<string[]>([]);
  items = ['item1', 'item2', 'item3', 'item4']; // Added item4 for another disabled example

  expansionIcon(item: string): Signal<string> {
    return computed(() => (this.expandedIds().includes(item) ? 'expand_less' : 'expand_more'));
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {Signal, signal, WritableSignal} from '@angular/core';
import {ListTypeaheadItem, ListTypeahead, ListTypeaheadInputs} from './list-typeahead';
import {fakeAsync, tick} from '@angular/core/testing';
import {
  createListFocusBehavior,
  createListFocusInputs,
  createListFocusItemInputs,
} from '../list-focus/list-focus.spec';

function createListTypeaheadInputs(
  inputs: Partial<ListTypeaheadInputs<ListTypeaheadItem>>,
): ListTypeaheadInputs<ListTypeaheadItem> {
  const listFocusBehavior = createListFocusInputs<ListTypeaheadItem>(inputs);
  return {
    typeaheadDelay: signal(0.5),
    ...listFocusBehavior,
    ...inputs,
  };
}

export function createListTypeaheadItemInputs(
  inputs: Partial<ListTypeaheadItem>,
): ListTypeaheadItem {
  return {
    searchTerm: signal(''),
    ...createListFocusItemInputs(inputs),
    ...inputs,
  };
}

function createListTypeaheadItems(length: number): Signal<ListTypeaheadItem[]> {
  return signal(
    Array.from({length}).map((_, i) => {
      return createListTypeaheadItemInputs({
        id: signal(`${i}`),
        index: signal(i),
        searchTerm: signal(`Item ${i}`),
      });
    }),
  );
}

function createListTypeaheadBehavior(
  inputs: Partial<ListTypeaheadInputs<ListTypeaheadItem>> &
    Pick<ListTypeaheadInputs<ListTypeaheadItem>, 'items' | 'activeItem'>,
): ListTypeahead<ListTypeaheadItem> {
  const focusBehavior = createListFocusBehavior<ListTypeaheadItem>(inputs);
  return new ListTypeahead({
    ...createListTypeaheadInputs({...focusBehavior.inputs, ...inputs}),
    focusBehavior,
  });
}

function createDefaultListTypeaheadBehavior(
  inputs: Partial<ListTypeaheadInputs<ListTypeaheadItem>> = {},
): ListTypeahead<ListTypeaheadItem> {
  const items = inputs.items ?? createListTypeaheadItems(5);
  const activeItem = inputs.activeItem ?? signal(items()[0]);
  return createListTypeaheadBehavior({items, activeItem, ...inputs});
}

describe('List Typeahead', () => {
  let items: ListTypeaheadItem[];
  let typeahead: ListTypeahead<ListTypeaheadItem>;

  beforeEach(() => {
    typeahead = createDefaultListTypeaheadBehavior();
    items = typeahead.inputs.items();
  });

  describe('#search', () => {
    it('should navigate to an item', () => {
      typeahead.search('i');
      expect(typeahead.inputs.focusBehavior.activeIndex()).toBe(1);

      typeahead.search('t');
      typeahead.search('e');
      typeahead.search('m');
      typeahead.search(' ');
      typeahead.search('3');
      expect(typeahead.inputs.focusBehavior.activeIndex()).toBe(3);
    });

    it('should reset after a delay', fakeAsync(() => {
      typeahead.search('i');
      expect(typeahead.inputs.focusBehavior.activeIndex()).toBe(1);

      tick(500);

      typeahead.search('i');
      expect(typeahead.inputs.focusBehavior.activeIndex()).toBe(2);
    }));

    it('should skip disabled items', () => {
      (typeahead.inputs.skipDisabled as WritableSignal<boolean>).set(true);
      (items[1].disabled as WritableSignal<boolean>).set(true);
      typeahead.search('i');
      expect(typeahead.inputs.focusBehavior.activeIndex()).toBe(2);
    });

    it('should not skip disabled items', () => {
      (items[1].disabled as WritableSignal<boolean>).set(true);
      (typeahead.inputs.skipDisabled as WritableSignal<boolean>).set(false);
      typeahead.search('i');
      expect(typeahead.inputs.focusBehavior.activeIndex()).toBe(1);
    });

    it('should ignore keys like shift', () => {
      typeahead.search('i');
      typeahead.search('t');
      typeahead.search('e');

      typeahead.search('Shift');

      typeahead.search('m');
      typeahead.search(' ');
      typeahead.search('2');
      expect(typeahead.inputs.focusBehavior.activeIndex()).toBe(2);
    });

    it('should not allow a query to begin with a space', () => {
      typeahead.search(' ');
      typeahead.search('i');
      typeahead.search('t');
      typeahead.search('e');
      typeahead.search('m');
      typeahead.search(' ');
      typeahead.search('3');
      expect(typeahead.inputs.focusBehavior.activeIndex()).toBe(3);
    });
  });
});

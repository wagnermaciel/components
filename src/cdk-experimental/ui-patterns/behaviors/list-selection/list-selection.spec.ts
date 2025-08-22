/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {Signal, signal, WritableSignal} from '@angular/core';
import {ListSelectionItem, ListSelection, ListSelectionInputs} from './list-selection';
import {
  createListFocusBehavior,
  createListFocusInputs,
  createListFocusItemInputs,
} from '../list-focus/list-focus.spec';

export function createListSelectionInputs(
  inputs: Partial<ListSelectionInputs<ListSelectionItem>>,
): ListSelectionInputs<ListSelectionItem> {
  const listFocusInputs = createListFocusInputs<ListSelectionItem>(inputs);
  return {
    value: signal([]),
    multi: signal(false),
    selectionMode: signal('follow'),
    ...listFocusInputs,
    ...inputs,
  };
}

export function createListSelectionItemInputs(
  inputs: Partial<ListSelectionItem>,
): ListSelectionItem {
  return {
    value: signal(''),
    ...createListFocusItemInputs(inputs),
    ...inputs,
  };
}

function createListSelectionItems(length: number): Signal<ListSelectionItem[]> {
  return signal(
    Array.from({length}).map((_, i) => {
      return createListSelectionItemInputs({
        id: signal(`${i}`),
        value: signal(i),
        index: signal(i),
      });
    }),
  );
}

function createListSelectionBehavior(
  inputs: Partial<ListSelectionInputs<ListSelectionItem>> &
    Pick<ListSelectionInputs<ListSelectionItem>, 'items' | 'activeItem'>,
): ListSelection<ListSelectionItem> {
  const focusBehavior = createListFocusBehavior<ListSelectionItem>(inputs);
  return new ListSelection({
    ...createListSelectionInputs({...focusBehavior.inputs, ...inputs}),
    focusBehavior,
  });
}

function createDefaultListSelectionBehavior(
  inputs: Partial<ListSelectionInputs<ListSelectionItem>> = {},
): ListSelection<ListSelectionItem> {
  const items = inputs.items ?? createListSelectionItems(5);
  const activeItem = inputs.activeItem ?? signal(items()[0]);
  return createListSelectionBehavior({items, activeItem, ...inputs});
}

describe('List Selection', () => {
  describe('#select', () => {
    it('should select an item', () => {
      const selection = createDefaultListSelectionBehavior();
      selection.select(); // [0]
      expect(selection.inputs.value()).toEqual([0]);
    });

    it('should select multiple options', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();

      selection.select(); // [0]
      selection.inputs.focusBehavior.focus(items[1]);
      selection.select(); // [0, 1]

      expect(selection.inputs.value()).toEqual([0, 1]);
    });

    it('should not select multiple options', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(false)});
      const items = selection.inputs.items();
      selection.select(); // [0]
      selection.inputs.focusBehavior.focus(items[1]);
      selection.select(); // [1]
      expect(selection.inputs.value()).toEqual([1]);
    });

    it('should not select disabled items', () => {
      const selection = createDefaultListSelectionBehavior();
      const items = selection.inputs.items();
      (items[0].disabled as WritableSignal<boolean>).set(true);
      selection.select(); // []
      expect(selection.inputs.value()).toEqual([]);
    });

    it('should do nothing to already selected items', () => {
      const selection = createDefaultListSelectionBehavior();
      selection.select(); // [0]
      selection.select(); // [0]
      expect(selection.inputs.value()).toEqual([0]);
    });
  });

  describe('#deselect', () => {
    it('should deselect an item', () => {
      const selection = createDefaultListSelectionBehavior();
      selection.deselect(); // []
      expect(selection.inputs.value().length).toBe(0);
    });

    it('should not deselect disabled items', () => {
      const selection = createDefaultListSelectionBehavior();
      const items = selection.inputs.items();
      selection.select(); // [0]
      (items[0].disabled as WritableSignal<boolean>).set(true);
      selection.deselect(); // [0]
      expect(selection.inputs.value()).toEqual([0]);
    });
  });

  describe('#toggle', () => {
    it('should select an unselected item', () => {
      const selection = createDefaultListSelectionBehavior();
      selection.toggle(); // [0]
      expect(selection.inputs.value()).toEqual([0]);
    });

    it('should deselect a selected item', () => {
      const selection = createDefaultListSelectionBehavior();
      selection.select(); // [0]
      selection.toggle(); // []
      expect(selection.inputs.value().length).toBe(0);
    });
  });

  describe('#toggleOne', () => {
    it('should select an unselected item', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      selection.toggleOne(); // [0]
      expect(selection.inputs.value()).toEqual([0]);
    });

    it('should deselect a selected item', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      selection.select(); // [0]
      selection.toggleOne(); // []
      expect(selection.inputs.value().length).toBe(0);
    });

    it('should only leave one item selected', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();
      selection.select(); // [0]
      selection.inputs.focusBehavior.focus(items[1]);
      selection.toggleOne(); // [1]
      expect(selection.inputs.value()).toEqual([1]);
    });
  });

  describe('#selectAll', () => {
    it('should select all items', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      selection.selectAll();
      expect(selection.inputs.value()).toEqual([0, 1, 2, 3, 4]);
    });

    it('should do nothing if a list is not multiselectable', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(false)});
      selection.selectAll();
      expect(selection.inputs.value()).toEqual([]);
    });
  });

  describe('#deselectAll', () => {
    it('should deselect all items', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      selection.selectAll(); // [0, 1, 2, 3, 4]
      selection.deselectAll(); // []
      expect(selection.inputs.value().length).toBe(0);
    });

    it('should deselect items that are not in the list', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      selection.inputs.value.update(() => [5]);
      selection.deselectAll();
      expect(selection.inputs.value().length).toBe(0);
    });
  });

  describe('#toggleAll', () => {
    it('should select all items', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      selection.toggleAll();
      expect(selection.inputs.value()).toEqual([0, 1, 2, 3, 4]);
    });

    it('should deselect all if all items are selected', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      selection.selectAll();
      selection.toggleAll();
      expect(selection.inputs.value()).toEqual([]);
    });

    it('should ignore disabled items when determining if all items are selected', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();
      (items[0].disabled as WritableSignal<boolean>).set(true);
      selection.toggleAll();
      expect(selection.inputs.value()).toEqual([1, 2, 3, 4]);
      selection.toggleAll();
      expect(selection.inputs.value()).toEqual([]);
    });
  });

  describe('#selectOne', () => {
    it('should select a single item', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();
      selection.selectOne(); // [0]
      selection.inputs.focusBehavior.focus(items[1]);
      selection.selectOne(); // [1]
      expect(selection.inputs.value()).toEqual([1]);
    });

    it('should not select disabled items', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();
      (items[0].disabled as WritableSignal<boolean>).set(true);

      selection.select(); // []
      expect(selection.inputs.value()).toEqual([]);
    });

    it('should do nothing to already selected items', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      selection.selectOne(); // [0]
      selection.selectOne(); // [0]
      expect(selection.inputs.value()).toEqual([0]);
    });

    it('should do nothing if the current active item is disabled', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();

      selection.inputs.focusBehavior.focus(items[1]);
      selection.select();
      expect(selection.inputs.value()).toEqual([1]);

      selection.inputs.focusBehavior.focus(items[0]);
      (items[0].disabled as WritableSignal<boolean>).set(true);
      selection.selectOne();
      expect(selection.inputs.value()).toEqual([1]);
    });

    it('should not select an item if the list is not multiselectable and not all items are deselected', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(false)});
      const items = selection.inputs.items();

      selection.inputs.focusBehavior.focus(items[1]);
      selection.select();
      expect(selection.inputs.value()).toEqual([1]);

      (items[1].disabled as WritableSignal<boolean>).set(true);
      selection.inputs.focusBehavior.focus(items[2]);
      selection.selectOne();
      expect(selection.inputs.value()).toEqual([1]);
    });
  });

  describe('#selectRange', () => {
    it('should select all items from an anchor at a lower index', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();
      selection.select(); // [0]
      selection.inputs.focusBehavior.focus(items[2]);
      selection.selectRange(); // [0, 1, 2]
      expect(selection.inputs.value()).toEqual([0, 1, 2]);
    });

    it('should select all items from an anchor at a higher index', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();
      selection.inputs.activeItem.set(items[3]);

      selection.select(); // [3]
      selection.inputs.focusBehavior.focus(items[1]);
      selection.selectRange(); // [3, 2, 1]

      expect(selection.inputs.value()).toEqual([3, 2, 1]);
    });

    it('should deselect items within the range when the range is changed', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();
      selection.inputs.activeItem.set(items[2]);

      selection.select(); // [2]
      expect(selection.inputs.value()).toEqual([2]);

      selection.inputs.focusBehavior.focus(items[4]);
      selection.selectRange(); // [2, 3, 4]
      expect(selection.inputs.value()).toEqual([2, 3, 4]);

      selection.inputs.focusBehavior.focus(items[0]);
      selection.selectRange(); // [2, 1, 0]
      expect(selection.inputs.value()).toEqual([2, 1, 0]);
    });

    it('should not select a disabled item', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();
      (items[1].disabled as WritableSignal<boolean>).set(true);

      selection.select(); // [0]
      expect(selection.inputs.value()).toEqual([0]);

      selection.inputs.focusBehavior.focus(items[1]);
      selection.selectRange(); // [0]
      expect(selection.inputs.value()).toEqual([0]);

      selection.inputs.focusBehavior.focus(items[2]);
      selection.selectRange(); // [0, 2]
      expect(selection.inputs.value()).toEqual([0, 2]);
    });

    it('should not deselect a disabled item', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();

      selection.select(items[1]); // [1]
      (items[1].disabled as WritableSignal<boolean>).set(true);

      selection.select(); // [0, 1]
      expect(selection.inputs.value()).toEqual([1, 0]);

      selection.inputs.focusBehavior.focus(items[2]);
      selection.selectRange(); // [0, 1, 2]
      expect(selection.inputs.value()).toEqual([1, 0, 2]);

      selection.inputs.focusBehavior.focus(items[0]);
      selection.selectRange(); // [0, 1]
      expect(selection.inputs.value()).toEqual([1, 0]);
    });
  });

  describe('#beginRangeSelection', () => {
    it('should set where a range is starting from', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();
      selection.inputs.focusBehavior.focus(items[2]);
      selection.beginRangeSelection();
      expect(selection.inputs.value()).toEqual([]);
      selection.inputs.focusBehavior.focus(items[4]);
      selection.selectRange(); // [2, 3, 4]
      expect(selection.inputs.value()).toEqual([2, 3, 4]);
    });

    it('should be able to select a range starting on a disabled item', () => {
      const selection = createDefaultListSelectionBehavior({multi: signal(true)});
      const items = selection.inputs.items();
      (items[0].disabled as WritableSignal<boolean>).set(true);
      selection.beginRangeSelection(0);
      selection.inputs.focusBehavior.focus(items[2]);
      selection.selectRange();
      expect(selection.inputs.value()).toEqual([1, 2]);
    });
  });
});

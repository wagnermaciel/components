/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {Signal, signal, WritableSignal} from '@angular/core';
import {ListFocus, ListFocusInputs, ListFocusItem} from './list-focus';

export function createListFocusInputs<T extends ListFocusItem>(
  inputs: Partial<ListFocusInputs<T>>,
): ListFocusInputs<T> {
  return {
    items: signal([]),
    disabled: signal(false),
    focusMode: signal('roving'),
    skipDisabled: signal(false),
    activeItem: signal(undefined),
    element: signal({focus: () => {}} as HTMLElement),
    ...inputs,
  };
}

export function createListFocusItemInputs(inputs: Partial<ListFocusItem>): ListFocusItem {
  return {
    id: signal(''),
    disabled: signal(false),
    element: signal({focus: () => {}} as HTMLElement),
    index: signal(0),
    ...inputs,
  };
}

function createListFocusItems(length: number): Signal<ListFocusItem[]> {
  return signal(
    Array.from({length}).map((_, i) => {
      return createListFocusItemInputs({id: signal(`${i}`), index: signal(i)});
    }),
  );
}

export function createListFocusBehavior<T extends ListFocusItem>(
  inputs: Partial<ListFocusInputs<T>> & Pick<ListFocusInputs<T>, 'items' | 'activeItem'>,
): ListFocus<T> {
  return new ListFocus(createListFocusInputs(inputs));
}

function createDefaultListFocusBehavior(
  inputs: Partial<ListFocusInputs<ListFocusItem>> = {},
): ListFocus<ListFocusItem> {
  const items = inputs.items ?? createListFocusItems(5);
  const activeItem = inputs.activeItem ?? signal(items()[0]);
  return createListFocusBehavior({items, activeItem, ...inputs});
}

describe('List Focus', () => {
  describe('roving', () => {
    let focusBehavior: ListFocus<ListFocusItem>;

    beforeEach(() => {
      focusBehavior = createDefaultListFocusBehavior({focusMode: signal('roving')});
    });

    it('should set the list tabindex to -1', () => {
      expect(focusBehavior.getListTabindex()).toBe(-1);
    });

    it('should set the activedescendant to undefined', () => {
      expect(focusBehavior.getActiveDescendant()).toBeUndefined();
    });

    it('should set the tabindex based on the active index', () => {
      const items = focusBehavior.inputs.items();
      focusBehavior.inputs.activeItem.set(focusBehavior.inputs.items()[2]);
      expect(focusBehavior.getItemTabindex(items[0])).toBe(-1);
      expect(focusBehavior.getItemTabindex(items[1])).toBe(-1);
      expect(focusBehavior.getItemTabindex(items[2])).toBe(0);
      expect(focusBehavior.getItemTabindex(items[3])).toBe(-1);
      expect(focusBehavior.getItemTabindex(items[4])).toBe(-1);
    });
  });

  describe('activedescendant', () => {
    let focusBehavior: ListFocus<ListFocusItem>;

    beforeEach(() => {
      focusBehavior = createDefaultListFocusBehavior({focusMode: signal('activedescendant')});
    });

    it('should set the list tabindex to 0', () => {
      expect(focusBehavior.getListTabindex()).toBe(0);
    });

    it('should set the activedescendant to the active items id', () => {
      expect(focusBehavior.getActiveDescendant()).toBe(focusBehavior.inputs.items()[0].id());
    });

    it('should set the tabindex of all items to -1', () => {
      const items = focusBehavior.inputs.items();
      focusBehavior.inputs.activeItem.set(focusBehavior.inputs.items()[0]);
      expect(focusBehavior.getItemTabindex(items[0])).toBe(-1);
      expect(focusBehavior.getItemTabindex(items[1])).toBe(-1);
      expect(focusBehavior.getItemTabindex(items[2])).toBe(-1);
      expect(focusBehavior.getItemTabindex(items[3])).toBe(-1);
      expect(focusBehavior.getItemTabindex(items[4])).toBe(-1);
    });

    it('should update the activedescendant of the list when navigating', () => {
      focusBehavior.inputs.activeItem.set(focusBehavior.inputs.items()[1]);
      expect(focusBehavior.getActiveDescendant()).toBe(focusBehavior.inputs.items()[1].id());
    });

    it('should focus the list element when focusing an item', () => {
      const focusSpy = spyOn(focusBehavior.inputs.element()!, 'focus');
      focusBehavior.focus(focusBehavior.inputs.items()[1]);
      expect(focusSpy).toHaveBeenCalled();
    });
  });

  describe('#isFocusable', () => {
    it('should return true for enabled items', () => {
      const focusBehavior = createDefaultListFocusBehavior({skipDisabled: signal(true)});
      const items = focusBehavior.inputs.items();
      expect(focusBehavior.isFocusable(items[0])).toBeTrue();
      expect(focusBehavior.isFocusable(items[1])).toBeTrue();
      expect(focusBehavior.isFocusable(items[2])).toBeTrue();
    });

    it('should return false for disabled items', () => {
      const focusBehavior = createDefaultListFocusBehavior({skipDisabled: signal(true)});
      const items = focusBehavior.inputs.items();
      (items[1].disabled as WritableSignal<boolean>).set(true);

      expect(focusBehavior.isFocusable(items[0])).toBeTrue();
      expect(focusBehavior.isFocusable(items[1])).toBeFalse();
      expect(focusBehavior.isFocusable(items[2])).toBeTrue();
    });

    it('should return true for disabled items if skip disabled is false', () => {
      const focusBehavior = createDefaultListFocusBehavior({skipDisabled: signal(false)});
      const items = focusBehavior.inputs.items();
      (items[1].disabled as WritableSignal<boolean>).set(true);

      expect(focusBehavior.isFocusable(items[0])).toBeTrue();
      expect(focusBehavior.isFocusable(items[1])).toBeTrue();
      expect(focusBehavior.isFocusable(items[2])).toBeTrue();
    });
  });
});

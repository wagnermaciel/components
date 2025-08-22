/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {Signal, signal, WritableSignal} from '@angular/core';
import {ListNavigation, ListNavigationInputs, ListNavigationItem} from './list-navigation';
import {
  createListFocusBehavior,
  createListFocusInputs,
  createListFocusItemInputs,
} from '../list-focus/list-focus.spec';

function createListNavigationInputs(
  inputs: Partial<ListNavigationInputs<ListNavigationItem>>,
): ListNavigationInputs<ListNavigationItem> {
  const listFocusBehavior = createListFocusInputs<ListNavigationItem>(inputs);
  return {
    wrap: signal(false),
    textDirection: signal('ltr'),
    orientation: signal('vertical'),
    ...listFocusBehavior,
    ...inputs,
  };
}

export function createListNavigationItemInputs(
  inputs: Partial<ListNavigationItem>,
): ListNavigationItem {
  return {
    ...createListFocusItemInputs(inputs),
    ...inputs,
  };
}

function createListNavigationItems(length: number): Signal<ListNavigationItem[]> {
  return signal(
    Array.from({length}).map((_, i) => {
      return createListNavigationItemInputs({id: signal(`${i}`), index: signal(i)});
    }),
  );
}

function createListNavigationBehavior(
  inputs: Partial<ListNavigationInputs<ListNavigationItem>> &
    Pick<ListNavigationInputs<ListNavigationItem>, 'items' | 'activeItem'>,
): ListNavigation<ListNavigationItem> {
  const focusBehavior = createListFocusBehavior<ListNavigationItem>(inputs);
  return new ListNavigation({
    ...createListNavigationInputs({...focusBehavior.inputs, ...inputs}),
    focusBehavior,
  });
}

function createDefaultListNavigationBehavior(
  inputs: Partial<ListNavigationInputs<ListNavigationItem>> = {},
): ListNavigation<ListNavigationItem> {
  const items = inputs.items ?? createListNavigationItems(5);
  const activeItem = inputs.activeItem ?? signal(items()[0]);
  return createListNavigationBehavior({items, activeItem, ...inputs});
}

describe('List Navigation', () => {
  describe('#goto', () => {
    it('should navigate to an item', () => {
      const nav = createDefaultListNavigationBehavior();
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[0]);
      nav.goto(nav.inputs.items()[3]);
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[3]);
    });
  });

  describe('#next', () => {
    it('should navigate next', () => {
      const nav = createDefaultListNavigationBehavior();
      nav.next(); // 0 -> 1
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[1]);
    });

    it('should wrap', () => {
      const nav = createDefaultListNavigationBehavior({wrap: signal(true)});
      nav.next(); // 0 -> 1
      nav.next(); // 1 -> 2
      nav.next(); // 2 -> 3
      nav.next(); // 3 -> 4
      nav.next(); // 4 -> 0
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[0]);
    });

    it('should not wrap', () => {
      const nav = createDefaultListNavigationBehavior({wrap: signal(false)});
      nav.next(); // 0 -> 1
      nav.next(); // 1 -> 2
      nav.next(); // 2 -> 3
      nav.next(); // 3 -> 4
      nav.next(); // 4 -> 4
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[4]);
    });

    it('should skip disabled items', () => {
      const nav = createDefaultListNavigationBehavior({skipDisabled: signal(true)});
      const items = nav.inputs.items();
      (items[1].disabled as WritableSignal<boolean>).set(true);
      nav.next(); // 0 -> 2
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[2]);
    });

    it('should not skip disabled items', () => {
      const nav = createDefaultListNavigationBehavior({skipDisabled: signal(false)});
      const items = nav.inputs.items();
      (items[1].disabled as WritableSignal<boolean>).set(true);
      nav.next(); // 0 -> 1
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[1]);
    });

    it('should wrap and skip disabled items', () => {
      const nav = createDefaultListNavigationBehavior({
        wrap: signal(true),
        skipDisabled: signal(true),
      });
      const items = nav.inputs.items();
      (items[2].disabled as WritableSignal<boolean>).set(true);
      (items[3].disabled as WritableSignal<boolean>).set(true);
      (items[4].disabled as WritableSignal<boolean>).set(true);

      nav.next(); // 0 -> 1
      nav.next(); // 1 -> 0

      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[0]);
    });

    it('should do nothing if other items are disabled', () => {
      const nav = createDefaultListNavigationBehavior({skipDisabled: signal(true)});
      const items = nav.inputs.items();
      (items[1].disabled as WritableSignal<boolean>).set(true);
      (items[2].disabled as WritableSignal<boolean>).set(true);
      (items[3].disabled as WritableSignal<boolean>).set(true);
      (items[4].disabled as WritableSignal<boolean>).set(true);
      nav.next(); // 0 -> 0
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[0]);
    });

    it('should do nothing if there are no other items to navigate to', () => {
      const items = createListNavigationItems(1);
      const nav = createDefaultListNavigationBehavior({items});
      nav.next(); // 0 -> 0
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[0]);
    });
  });

  describe('#prev', () => {
    it('should navigate prev', () => {
      const nav = createDefaultListNavigationBehavior();
      nav.goto(nav.inputs.items()[2]);
      nav.prev(); // 2 -> 1
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[1]);
    });

    it('should wrap', () => {
      const nav = createDefaultListNavigationBehavior({wrap: signal(true)});
      nav.prev(); // 0 -> 4
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[4]);
    });

    it('should not wrap', () => {
      const nav = createDefaultListNavigationBehavior({wrap: signal(false)});
      nav.prev(); // 0 -> 0
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[0]);
    });

    it('should skip disabled items', () => {
      const nav = createDefaultListNavigationBehavior({skipDisabled: signal(true)});
      nav.goto(nav.inputs.items()[2]);
      const items = nav.inputs.items();
      (items[1].disabled as WritableSignal<boolean>).set(true);
      nav.prev(); // 2 -> 0
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[0]);
    });

    it('should not skip disabled items', () => {
      const nav = createDefaultListNavigationBehavior({skipDisabled: signal(false)});
      nav.goto(nav.inputs.items()[2]);
      const items = nav.inputs.items();
      (items[1].disabled as WritableSignal<boolean>).set(true);
      nav.prev(); // 2 -> 1
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[1]);
    });

    it('should wrap and skip disabled items', () => {
      const nav = createDefaultListNavigationBehavior({
        wrap: signal(true),
        skipDisabled: signal(true),
      });
      nav.goto(nav.inputs.items()[2]);
      const items = nav.inputs.items();
      (items[0].disabled as WritableSignal<boolean>).set(true);
      (items[1].disabled as WritableSignal<boolean>).set(true);
      nav.prev(); // 2 -> 4
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[4]);
    });

    it('should do nothing if other items are disabled', () => {
      const nav = createDefaultListNavigationBehavior({
        skipDisabled: signal(true),
      });
      const items = nav.inputs.items();
      (items[1].disabled as WritableSignal<boolean>).set(true);
      (items[2].disabled as WritableSignal<boolean>).set(true);
      (items[3].disabled as WritableSignal<boolean>).set(true);
      (items[4].disabled as WritableSignal<boolean>).set(true);
      nav.prev(); // 0 -> 0
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[0]);
    });

    it('should do nothing if there are no other items to navigate to', () => {
      const items = createListNavigationItems(1);
      const nav = createDefaultListNavigationBehavior({items});
      nav.prev(); // 0 -> 0
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[0]);
    });
  });

  describe('#first', () => {
    it('should navigate to the first item', () => {
      const nav = createDefaultListNavigationBehavior();
      nav.goto(nav.inputs.items()[2]);
      nav.first();
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[0]);
    });

    it('should skip disabled items', () => {
      const nav = createDefaultListNavigationBehavior({skipDisabled: signal(true)});
      nav.goto(nav.inputs.items()[2]);
      const items = nav.inputs.items();
      (items[0].disabled as WritableSignal<boolean>).set(true);
      nav.first();
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[1]);
    });

    it('should not skip disabled items', () => {
      const nav = createDefaultListNavigationBehavior({skipDisabled: signal(false)});
      nav.goto(nav.inputs.items()[2]);
      const items = nav.inputs.items();
      (items[0].disabled as WritableSignal<boolean>).set(true);
      nav.first();
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[0]);
    });
  });

  describe('#last', () => {
    it('should navigate to the last item', () => {
      const nav = createDefaultListNavigationBehavior();
      nav.last();
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[4]);
    });

    it('should skip disabled items', () => {
      const nav = createDefaultListNavigationBehavior({
        skipDisabled: signal(true),
      });
      const items = nav.inputs.items();
      (items[4].disabled as WritableSignal<boolean>).set(true);
      nav.last();
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[3]);
    });

    it('should not skip disabled items', () => {
      const nav = createDefaultListNavigationBehavior({
        skipDisabled: signal(false),
      });
      const items = nav.inputs.items();
      (items[4].disabled as WritableSignal<boolean>).set(true);
      nav.last();
      expect(nav.inputs.activeItem()).toBe(nav.inputs.items()[4]);
    });
  });
});

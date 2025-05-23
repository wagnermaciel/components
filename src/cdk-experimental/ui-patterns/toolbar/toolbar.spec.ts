/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {signal, WritableSignal} from '@angular/core';
import {ToolbarPattern, ToolbarItemPattern, ToolbarInputs} from './toolbar';
// No import for `untracked` as it's not directly used if item properties are functions.
// No import for `computed` as it's not directly used in the spec file.

describe('ToolbarPattern', () => {
  // Variables to hold the instance of the toolbar pattern and its constituent parts.
  let toolbar: ToolbarPattern<ToolbarItemPattern>;
  let items: ToolbarItemPattern[]; // Mock items for the toolbar.
  let activeIndex: WritableSignal<number>; // Signal for the active item index.
  let mockInputs: ToolbarInputs<ToolbarItemPattern>; // Mock inputs for the toolbar.
  let itemElements: HTMLElement[]; // Array to store HTML elements of mock items.

  /**
   * Creates a mock `ToolbarItemPattern` for testing.
   * @param id The ID of the mock item.
   * @param index The index of the mock item.
   * @param isDisabled Whether the mock item should be initially disabled.
   * @returns A mock `ToolbarItemPattern`.
   */
  function createMockItem(
    id: string,
    index: number,
    initialIsDisabled = false,
  ): ToolbarItemPattern {
    const el = document.createElement('div');
    el.id = id;
    // Store the element in itemElements for direct access in tests (e.g., pointer events).
    if (!itemElements) {
      itemElements = [];
    }
    itemElements[index] = el;

    // Use a mutable variable for disabled state to allow changing it in tests.
    let isDisabled = initialIsDisabled;

    return {
      element: () => el,
      disabled: () => isDisabled,
      index: () => index,
      id: () => id,
      // Helper to change disabled state for testing
      _setDisabled: (state: boolean) => isDisabled = state,
    };
  }

  /**
   * Initializes a `ToolbarPattern` instance with a default set of mock items and inputs.
   * Allows overriding parts of the inputs for specific test scenarios.
   * @param inputs Partial `ToolbarInputs` to override the defaults.
   */
  function initializeToolbar(inputs: Partial<ToolbarInputs<ToolbarItemPattern>> = {}) {
    // Create a default set of items, including one disabled item.
    items = [
      createMockItem('item-0', 0),
      createMockItem('item-1', 1),
      createMockItem('item-2', 2),
      createMockItem('item-3', 3, true), // item-3 is disabled by default.
    ];
    activeIndex = signal(0); // Default active index.

    // Define default inputs for the toolbar.
    // Most SignalLike inputs are provided as functions returning values.
    // activeIndex remains a WritableSignal.
    let currentOrientation = 'horizontal';
    let currentTextDirection = 'ltr';
    let currentIsDisabled = false;
    let currentWrap = true;
    let currentItems = items;

    mockInputs = {
      items: () => currentItems,
      orientation: () => currentOrientation,
      textDirection: () => currentTextDirection,
      disabled: () => currentIsDisabled,
      wrap: () => currentWrap,
      activeIndex, // This is a WritableSignal
      // Predicate to determine if an item is considered for focus/navigation.
      itemPredicate: item => !item.disabled(),
      // Predicate for the list itself (toolbar container). Typically true.
      listPredicate: _ => true,
      ...inputs, // Apply any overrides.
    };

    // Helper to allow tests to change input values for functions
    (mockInputs as any)._setOrientation = (val: 'horizontal' | 'vertical') => currentOrientation = val;
    (mockInputs as any)._setDisabled = (val: boolean) => currentIsDisabled = val;
    (mockInputs as any)._setWrap = (val: boolean) => currentWrap = val;
    (mockInputs as any)._setItems = (val: ToolbarItemPattern[]) => currentItems = val;


    toolbar = new ToolbarPattern(mockInputs);
  }

  beforeEach(() => {
    itemElements = []; // Reset item elements array before each test.
    initializeToolbar(); // Initialize a new toolbar instance.
  });

  // Test suite for the initialization logic of the ToolbarPattern.
  describe('Initialization', () => {
    it('should initialize correctly with default inputs', () => {
      expect(toolbar).toBeTruthy();
      expect(toolbar.focusManager).toBeTruthy('Focus manager should be created');
      expect(toolbar.navigation).toBeTruthy('Navigation manager should be created');
      expect(toolbar.activeIndex()).toBe(0, 'Default active index should be 0');
      expect(toolbar.disabled()).toBe(false, 'Should not be disabled by default');
      expect(toolbar.orientation()).toBe('horizontal', 'Default orientation should be horizontal');
      expect(toolbar.textDirection()).toBe('ltr', 'Default text direction should be LTR');
      expect(toolbar.wrap()).toBe(true, 'Wrapping should be enabled by default');
      // ListFocus sets listTabindex to 0 if activeIndex is >=0 and list not disabled.
      expect(toolbar.tabindex()).toBe(0, 'Default tabindex should be 0 for focusable toolbar');
    });

    it('should reflect disabled input state', () => {
      initializeToolbar({disabled: () => true});
      expect(toolbar.disabled()).toBe(true);
      // ListFocus sets tabindex to -1 if the list is disabled.
      expect(toolbar.tabindex()).toBe(-1, 'Tabindex should be -1 for disabled toolbar');
    });

    it('should reflect orientation input', () => {
      initializeToolbar({orientation: () => 'vertical'});
      expect(toolbar.orientation()).toBe('vertical');
    });

    it('should have correct activedescendant when active item has an ID', () => {
      initializeToolbar({activeIndex: signal(1)}); // item-1 has id 'item-1'
      expect(toolbar.activedescendant()).toBe('item-1');
    });

    it('should have null activedescendant if active item has no ID or ID is null', () => {
      const itemsWithoutIds: ToolbarItemPattern[] = [
        createMockItem('item-0', 0), // This item has an ID.
        {
          ...createMockItem('item-1-no-id', 1),
          id: () => null // This item's ID is explicitly null.
        } as ToolbarItemPattern,
      ];
      initializeToolbar({items: () => itemsWithoutIds, activeIndex: signal(1)});
      expect(toolbar.activedescendant()).toBeNull();
    });
  });

  // Test suite for keyboard navigation behavior.
  describe('Keyboard Navigation', () => {
    // Tests for horizontal, Left-to-Right (LTR) navigation.
    describe('Horizontal LTR', () => {
      beforeEach(() => {
        initializeToolbar({
          orientation: () => 'horizontal',
          textDirection: () => 'ltr',
          wrap: () => false,
        });
      });

      it('should move to next item with ArrowRight', () => {
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'ArrowRight'}));
        expect(toolbar.activeIndex()).toBe(1);
      });

      it('should move to previous item with ArrowLeft', () => {
        toolbar.activeIndex.set(1); // Start from the second item.
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'ArrowLeft'}));
        expect(toolbar.activeIndex()).toBe(0);
      });

      it('should not wrap with ArrowRight at the last enabled item if wrap is false', () => {
        toolbar.activeIndex.set(2); // item-2 is the last enabled item (item-3 is disabled).
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'ArrowRight'}));
        // Stays on item-2 because wrapping is disabled and item-3 is disabled.
        expect(toolbar.activeIndex()).toBe(2);
      });

      it('should wrap with ArrowRight at the last enabled item if wrap is true', () => {
        // To change wrap, we re-initialize or use the setter on mockInputs
        (mockInputs as any)._setWrap(true);
        // Re-initialization is safer if the pattern consumes signals deeply in constructor
        toolbar = new ToolbarPattern(mockInputs);
        toolbar.activeIndex.set(2); // item-2 is the last enabled.
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'ArrowRight'}));
        // Wraps around, skipping disabled item-3, to item-0.
        expect(toolbar.activeIndex()).toBe(0);
      });

      it('should skip disabled items when navigating next (no wrap)', () => {
        // Initial setup: items[0, 1, 2 (enabled), 3 (disabled)], wrap=false. Active is 2.
        toolbar.activeIndex.set(2);
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'ArrowRight'}));
        // Tries to move to item-3 (disabled). Since wrap is false, it stays on item-2.
        expect(toolbar.activeIndex()).toBe(2);
      });

      it('should skip disabled items and wrap when navigating next (wrap=true)', () => {
        (mockInputs as any)._setWrap(true);
        toolbar = new ToolbarPattern(mockInputs);
        toolbar.activeIndex.set(2); // Active is item-2, before disabled item-3.
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'ArrowRight'}));
        // Skips item-3 (disabled) and wraps to item-0.
        expect(toolbar.activeIndex()).toBe(0);
      });

      it('should skip disabled items when navigating prev (wrap=true)', () => {
        (mockInputs as any)._setWrap(true);
        toolbar = new ToolbarPattern(mockInputs);
        toolbar.activeIndex.set(0); // Active is item-0.
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'ArrowLeft'}));
        // Skips item-3 (disabled) and lands on item-2 (last enabled).
        expect(toolbar.activeIndex()).toBe(2);
      });
    });

    // Tests for horizontal, Right-to-Left (RTL) navigation.
    describe('Horizontal RTL', () => {
      beforeEach(() => {
        initializeToolbar({
          orientation: () => 'horizontal',
          textDirection: () => 'rtl',
          wrap: () => false,
        });
      });

      it('should move to next item with ArrowLeft (RTL)', () => {
        // In RTL, ArrowLeft means "next".
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'ArrowLeft'}));
        expect(toolbar.activeIndex()).toBe(1);
      });

      it('should move to previous item with ArrowRight (RTL)', () => {
        // In RTL, ArrowRight means "previous".
        toolbar.activeIndex.set(1); // Start from the second item.
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'ArrowRight'}));
        expect(toolbar.activeIndex()).toBe(0);
      });
    });

    // Tests for vertical navigation.
    describe('Vertical', () => {
      beforeEach(() => {
        initializeToolbar({
          orientation: () => 'vertical',
          wrap: () => false,
        });
      });

      it('should move to next item with ArrowDown', () => {
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'ArrowDown'}));
        expect(toolbar.activeIndex()).toBe(1);
      });

      it('should move to previous item with ArrowUp', () => {
        toolbar.activeIndex.set(1); // Start from the second item.
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'ArrowUp'}));
        expect(toolbar.activeIndex()).toBe(0);
      });
    });

    // Tests for Home and End key navigation.
    describe('Home/End keys', () => {
      it('should move to the first enabled item with Home key', () => {
        (items[0] as any)._setDisabled(true); // Make the first item (item-0) disabled.
        // No need to re-init toolbar if itemPredicate re-evaluates item.disabled()
        // and items() input itself hasn't changed identity.
        // However, ListFocus caches items, so re-init is safer if item list content changes state.
        // For this test, let's assume itemPredicate is re-evaluated by ListFocus/ListNavigation.
        // If ListFocus/Navigation internally cache based on item.disabled() at item list set time,
        // then a full re-init of ToolbarPattern would be needed.
        // The safest is to re-init if inputs that affect filtering/navigation are changed.
        toolbar = new ToolbarPattern(mockInputs);


        toolbar.activeIndex.set(2); // Start from item-2.
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'Home'}));
        // item-1 is now the first enabled item.
        expect(toolbar.activeIndex()).toBe(1);
      });

      it('should move to the last enabled item with End key', () => {
        // items[3] is disabled by default. items[2] is the last enabled item.
        toolbar.activeIndex.set(0); // Start from item-0.
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'End'}));
        expect(toolbar.activeIndex()).toBe(2);
      });
    });

    // Tests navigation behavior when the entire toolbar is disabled.
    describe('Navigation when disabled', () => {
      it('should not navigate when toolbar is disabled', () => {
        initializeToolbar({disabled: () => true}); // Disable the toolbar.
        const initialActiveIndex = toolbar.activeIndex();
        toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'ArrowRight'}));
        // Active index should remain unchanged.
        expect(toolbar.activeIndex()).toBe(initialActiveIndex);
      });
    });
  });

  // Test suite for item activation behavior (e.g., via Enter, Space, Pointer).
  describe('Item Activation', () => {
    let activateItemSpy: jasmine.Spy;
    let consoleLogSpy: jasmine.Spy; // To check logs from within _activateCurrentItem

    beforeEach(() => {
      // Ensure activeIndex is 0 for these tests, unless specified otherwise.
      initializeToolbar({activeIndex: signal(0)});
      // Spy on the private method _activateCurrentItem. callThrough allows original method to execute.
      activateItemSpy = spyOn(toolbar as any, '_activateCurrentItem').and.callThrough();
      // Spy on console.log to verify the logging within _activateCurrentItem
      consoleLogSpy = spyOn(console, 'log');
    });

    it('should call _activateCurrentItem on Enter key press', () => {
      toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'Enter'}));
      expect(activateItemSpy).toHaveBeenCalledTimes(1);
      // _activateCurrentItem will log "Item activated:"
      expect(consoleLogSpy).toHaveBeenCalledWith('Item activated:', items[0]);
      expect(toolbar.activeIndex()).toBe(0); // Focus should be maintained/set by _activateCurrentItem
    });

    it('should call _activateCurrentItem on Space key press', () => {
      toolbar.onKeydown(new KeyboardEvent('keydown', {key: ' '}));
      expect(activateItemSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy).toHaveBeenCalledWith('Item activated:', items[0]);
      expect(toolbar.activeIndex()).toBe(0);
    });

    it('should call _activateCurrentItem and update activeIndex on pointerdown', () => {
      expect(itemElements[1]).toBeTruthy('Item element for item-1 should exist');
      const mockPointerEvent = {
        target: itemElements[1], // Target the specific item's element.
        preventDefault: jasmine.createSpy('preventDefault'), // Spy on preventDefault.
        button: 0, // Primary button.
      } as unknown as PointerEvent;

      // Reset spy for this specific test if needed, or ensure it's clean from beforeEach
      activateItemSpy.calls.reset();
      consoleLogSpy.calls.reset();

      toolbar.onPointerdown(mockPointerEvent);

      expect(toolbar.activeIndex()).toBe(1, 'Active index should update to clicked item');
      expect(activateItemSpy).toHaveBeenCalledTimes(1);
      // Check that _activateCurrentItem's internal log was called for the correct item (items[1])
      expect(consoleLogSpy).toHaveBeenCalledWith('Item activated:', items[1]);
      expect(mockPointerEvent.preventDefault).toHaveBeenCalled();
    });

    it('should call _activateCurrentItem but not log if item is disabled (Enter key)', () => {
      (items[0] as any)._setDisabled(true); // Disable the active item (item-0)
      toolbar = new ToolbarPattern(mockInputs); // Re-initialize if item state affects focus manager caching
      activateItemSpy = spyOn(toolbar as any, '_activateCurrentItem').and.callThrough();
      consoleLogSpy = spyOn(console, 'log');


      toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'Enter'}));
      expect(activateItemSpy).toHaveBeenCalledTimes(1);
      // _activateCurrentItem is called, but its internal log should not happen due to disabled check.
      expect(consoleLogSpy).not.toHaveBeenCalledWith('Item activated:', items[0]);
    });

    it('should not call _activateCurrentItem if the toolbar is disabled', () => {
      // Re-initialize with toolbar disabled state for this specific test
      initializeToolbar({disabled: () => true});
      // Spy after re-initialization
      activateItemSpy = spyOn(toolbar as any, '_activateCurrentItem').and.callThrough();

      // Try keyboard activation.
      toolbar.onKeydown(new KeyboardEvent('keydown', {key: 'Enter'}));

      // Try pointer activation.
      const mockPointerEvent = {
        target: itemElements[0],
        preventDefault: jasmine.createSpy('preventDefault'),
        button: 0,
      } as unknown as PointerEvent;
      toolbar.onPointerdown(mockPointerEvent);

      expect(consoleSpy).not.toHaveBeenCalled();
      // preventDefault should not be called if the method returns early due to disabled state.
      expect(mockPointerEvent.preventDefault).not.toHaveBeenCalled();
    });
  });

  // Test suite for focus management aspects like activedescendant and tabindex.
  describe('Focus Management', () => {
    it('should update activedescendant when activeIndex changes', () => {
      toolbar.activeIndex.set(1); // item-1 has id 'item-1'.
      expect(toolbar.activedescendant()).toBe('item-1');
      toolbar.activeIndex.set(2); // item-2 has id 'item-2'.
      expect(toolbar.activedescendant()).toBe('item-2');
    });

    it('should have tabindex = 0 if not disabled and an active item exists', () => {
      initializeToolbar({disabled: () => false, activeIndex: signal(0)});
      expect(toolbar.tabindex()).toBe(0);
    });

    it('should have tabindex = -1 if toolbar is disabled', () => {
      initializeToolbar({disabled: () => true});
      expect(toolbar.tabindex()).toBe(-1);
    });

    it('should have tabindex = -1 if no active item (e.g., activeIndex is -1)', () => {
      // This scenario depends on ListFocus behavior when activeIndex is -1.
      initializeToolbar({activeIndex: signal(-1)});
      expect(toolbar.tabindex()).toBe(-1);
    });
  });
});

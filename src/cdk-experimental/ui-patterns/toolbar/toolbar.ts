/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {computed, signal, WritableSignal, InputSignal, untracked} from '@angular/core';
import {SignalLike, toSignal} from '../behaviors/signal-like/signal-like';
import {KeyboardEventManager} from '../behaviors/event-manager/event-manager';
import {PointerEventManager} from '../behaviors/event-manager/pointer-event-manager';
import {ListFocus, ListFocusInputs} from '../behaviors/list-focus/list-focus';
import {ListNavigation, ListNavigationInputs} from '../behaviors/list-navigation/list-navigation';

/**
 * Represents an item within a toolbar.
 * Each item typically corresponds to a focusable element.
 */
export interface ToolbarItemPattern {
  /** Whether the item is currently disabled. Disabled items cannot be activated or focused. */
  disabled: SignalLike<boolean>;

  /** The HTML element associated with this toolbar item. */
  element: SignalLike<HTMLElement>;

  /** The numerical index of this item within the toolbar's list of items. */
  index: SignalLike<number>;

  /** Optional ID for the item, used for `aria-activedescendant` to improve accessibility. */
  id?: SignalLike<string | null>;
  // TODO: Consider adding role or type if items can vary significantly (e.g., button, toggle button).
}

/**
 * Represents the required and optional inputs for configuring a `ToolbarPattern`.
 * This interface extends inputs from `ListFocus` and `ListNavigation` behaviors.
 * @template T The type of items managed by the toolbar, typically `ToolbarItemPattern`.
 */
export interface ToolbarInputs<T extends ToolbarItemPattern>
  extends ListFocusInputs<T>, // Includes items, activeIndex, disabled, orientation, textDirection, itemPredicate, listPredicate
    ListNavigationInputs<T> { // Includes wrap (and indirectly uses focusManager, orientation, textDirection, items from ListFocusInputs)
  // No additional inputs are defined here as they are inherited.
  // `focusManager` is instantiated and managed internally by `ToolbarPattern`.
}

/**
 * Controls the state and interactions of a toolbar, a container for grouping interactive controls.
 *
 * This pattern integrates `ListFocus` for focus management (e.g., roving tabindex, disabled state)
 * and `ListNavigation` for keyboard navigation (e.g., arrow keys, Home/End, wrapping).
 * It also provides basic pointer interaction for item activation.
 *
 * @template T The type of items managed by the toolbar. Must extend `ToolbarItemPattern`.
 */
export class ToolbarPattern<T extends ToolbarItemPattern> {
  /** The configuration inputs provided to this toolbar pattern instance. */
  readonly inputs: ToolbarInputs<T>;

  /** Manages focus logic for the toolbar, including roving tabindex and disabled state. */
  readonly focusManager: ListFocus<T>;

  /** Manages keyboard navigation logic for the toolbar, such as arrow key interactions. */
  readonly navigation: ListNavigation<T>;

  /**
   * Internal signal determining if navigation should wrap by default.
   * Combined with `inputs.wrap` to determine the final wrapping behavior.
   */
  private readonly _wrap = signal(true);

  /** The orientation of the toolbar (horizontal or vertical). Derived from `inputs.orientation`. */
  readonly orientation = computed(() => toSignal(this.inputs.orientation)());

  /** Whether the entire toolbar is disabled. Derived from `focusManager.isListDisabled()`. */
  readonly disabled = computed(() => this.focusManager.isListDisabled());

  /** The array of items in the toolbar. Derived from `inputs.items`. */
  readonly items = computed(() => toSignal(this.inputs.items)());

  /**
   * The WritableSignal for the active item's index.
   * This is managed by and sourced from `ListFocus`.
   */
  readonly activeIndex: WritableSignal<number>;

  /** The text direction of the toolbar (ltr or rtl). Derived from `inputs.textDirection`. */
  readonly textDirection = computed(() => toSignal(this.inputs.textDirection)());

  /**
   * Final computed signal indicating whether navigation should wrap around.
   * Combines the internal `_wrap` default with the `inputs.wrap` configuration.
   */
  readonly wrap = computed(() => this._wrap() && toSignal(this.inputs.wrap)());

  /**
   * The ID of the currently active toolbar item, for `aria-activedescendant`.
   * Derived from `focusManager.getActiveDescendant()`.
   */
  readonly activedescendant = computed(() => this.focusManager.getActiveDescendant());

  /**
   * The tabindex for the toolbar's host element, implementing roving tabindex.
   * Derived from `focusManager.listTabindex()`.
   */
  readonly tabindex = computed(() => this.focusManager.listTabindex());

  /**
   * The keyboard key used for navigating to the "previous" item.
   * Determined by the toolbar's `orientation` and `textDirection`.
   * E.g., 'ArrowUp' for vertical, 'ArrowLeft' for LTR horizontal.
   */
  readonly prevKey = computed(() => {
    // Read signals only once for efficiency within this computed.
    const orientation = this.orientation();
    const direction = this.textDirection();
    if (orientation === 'vertical') {
      return 'ArrowUp';
    }
    return direction === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
  });

  /**
   * The keyboard key used for navigating to the "next" item.
   * Determined by the toolbar's `orientation` and `textDirection`.
   * E.g., 'ArrowDown' for vertical, 'ArrowRight' for LTR horizontal.
   */
  readonly nextKey = computed(() => {
    // Read signals only once for efficiency within this computed.
    const orientation = this.orientation();
    const direction = this.textDirection();
    if (orientation === 'vertical') {
      return 'ArrowDown';
    }
    return direction === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
  });

  /**
   * Manages and handles keyboard events for the toolbar.
   * This includes navigation (arrows, Home/End) and activation (Enter, Space).
   */
  readonly keydown = computed(() => {
    const manager = new KeyboardEventManager();
    // Navigation handlers
    manager.addHandler({key: this.prevKey()}, () => this.prev());
    manager.addHandler({key: this.nextKey()}, () => this.next());
    manager.addHandler({key: 'Home'}, () => this.first());
    manager.addHandler({key: 'End'}, () => this.last());

    // Activation handlers
    const activationHandler = () => {
      // `untracked` is used because `activeItem` itself is a computed signal.
      // We only want to react to the keydown event, not changes in `activeItem`.
      const activeItem = untracked(this.focusManager.activeItem);
      if (activeItem) {
        // Ensure the item is fully focused/activated by the navigation manager.
        this.navigation.goto(activeItem);
        // Placeholder for actual item activation logic (e.g., click, command execution).
        console.log(`${event?.key === ' ' ? 'Space' : 'Enter'} pressed on active item:`, activeItem);
      }
    };
    manager.addHandler({key: 'Enter'}, activationHandler);
    manager.addHandler({key: ' '}, activationHandler); // Space key for activation

    return manager;
  });

  /**
   * Manages and handles pointer events (e.g., clicks) on toolbar items.
   * Primary use is to activate an item on pointer down.
   */
  readonly pointerdown = computed(() => {
    const manager = new PointerEventManager();
    // Handles primary button clicks (typically left mouse button).
    manager.addHandler({button: 0}, (event: PointerEvent) => {
      const item = this.goto(event); // Navigates to and focuses the clicked item.
      if (item) {
        // Placeholder for actual item activation logic.
        console.log('Pointer down on item:', item);
      }
    });
    return manager;
  });

  /**
   * Constructs a new ToolbarPattern.
   * @param inputs The configuration inputs for the toolbar.
   */
  constructor(inputs: ToolbarInputs<T>) {
    this.inputs = inputs;

    // Initialize the ListFocus behavior with the provided inputs.
    this.focusManager = new ListFocus(inputs);
    // Link the toolbar's activeIndex to the focus manager's activeIndex.
    this.activeIndex = this.focusManager.activeIndex;

    // Initialize the ListNavigation behavior.
    this.navigation = new ListNavigation({
      ...inputs, // Pass all relevant inputs.
      focusManager: this.focusManager, // Provide the instantiated focus manager.
      // Navigation wrap behavior is controlled by the toolbar's own composite `wrap` signal.
      wrap: this.wrap,
    });
  }

  /** Navigates to and focuses the first enabled item in the toolbar. */
  first() {
    this.navigation.first();
  }

  /** Navigates to and focuses the last enabled item in the toolbar. */
  last() {
    this.navigation.last();
  }

  /** Navigates to and focuses the next enabled item in the toolbar based on orientation and text direction. */
  next() {
    this.navigation.next();
  }

  /** Navigates to and focuses the previous enabled item in the toolbar based on orientation and text direction. */
  prev() {
    this.navigation.prev();
  }

  /**
   * Finds the toolbar item associated with a given pointer event.
   * This method is typically used to identify which item was clicked.
   * @param event The pointer event (e.g., from a click or pointerdown).
   * @returns The `ToolbarItemPattern` corresponding to the event target, or `undefined` if no item is found.
   */
  private _getItem(event: PointerEvent): T | undefined {
    if (!(event.target instanceof HTMLElement)) {
      return undefined; // Event target must be an HTMLElement.
    }

    const items = this.items(); // Get current items.
    for (const item of items) {
      // `requireSync: true` because this is in an event handler, expecting immediate value.
      const itemElement = toSignal(item.element, {requireSync: true});
      // Check if the event target is the item's element or a descendant of it.
      if (itemElement === event.target || itemElement.contains(event.target as Node)) {
        return item;
      }
    }
    return undefined; // No matching item found.
  }

  /**
   * Handles pointer events (typically clicks or pointerdowns) to navigate to and focus an item.
   * It identifies the target item from the event and uses `ListNavigation` to update focus.
   * @param event The pointer event.
   * @returns The `ToolbarItemPattern` that was navigated to, or `undefined` if no item was targeted.
   */
  goto(event: PointerEvent): T | undefined {
    const item = this._getItem(event);
    if (item) {
      // If an item is found, navigate to it (which also updates focus).
      this.navigation.goto(item);
    }
    return item;
  }

  /**
   * Handles keydown events for the toolbar.
   * This method delegates to the `keydown` event manager if the toolbar is not disabled.
   * @param event The `KeyboardEvent` to handle.
   */
  onKeydown(event: KeyboardEvent) {
    if (this.disabled()) {
      return; // Do nothing if the toolbar is disabled.
    }
    this.keydown().handle(event); // Delegate to the keyboard event manager.
  }

  /**
   * Handles pointerdown events for the toolbar.
   * This method delegates to the `pointerdown` event manager if the toolbar is not disabled.
   * It also prevents default browser focus behavior, as focus is managed by this pattern.
   * @param event The `PointerEvent` to handle.
   */
  onPointerdown(event: PointerEvent) {
    if (this.disabled()) {
      return; // Do nothing if the toolbar is disabled.
    }
    // Prevent default browser focus behavior (e.g., on button click).
    // Focus is managed by ListFocus and ListNavigation.
    event.preventDefault();
    this.pointerdown().handle(event); // Delegate to the pointer event manager.
  }
}

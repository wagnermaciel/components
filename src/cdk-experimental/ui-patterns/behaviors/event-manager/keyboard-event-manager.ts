import {Signal} from '@angular/core';
import {
  EventHandlerConfig,
  EventHandlerOptions,
  EventManager,
  hasModifiers,
  ModifierKey,
} from './event-manager';

/**
 * A config that specifies how to handle a particular keyboard event.
 */
export interface KeyboardEventHandlerConfig extends EventHandlerConfig<KeyboardEvent> {
  key: string | Signal<string> | RegExp;
  modifiers: number | number[];
}

/**
 * An event manager that is specialized for handling keyboard events. By default this manager stops
 * propagation and prevents default on all events it handles.
 */
export class KeyboardEventManager extends EventManager<KeyboardEvent> {
  override configs: KeyboardEventHandlerConfig[] = [];

  protected override defaultHandlerOptions: EventHandlerOptions = {
    preventDefault: true,
    stopPropagation: true,
  };

  /**
   * Configures this event manager to handle events with a specific modifer and key combination.
   *
   * @param modifiers The modifier combinations that this handler should run for.
   * @param key The key that this handler should run for (or a predicate function that takes the
   *   event's key and returns whether to run this handler).
   * @param handler The handler function
   * @param options Options for whether to stop propagation or prevent default.
   */
  on(
    modifiers: number | number[],
    key: string | Signal<string> | RegExp,
    handler: ((event: KeyboardEvent) => void) | ((event: KeyboardEvent) => boolean),
    options?: Partial<EventHandlerOptions>,
  ): this;

  /**
   * Configures this event manager to handle events with a specific key and no modifiers.
   *
   * @param key The key that this handler should run for (or a predicate function that takes the
   *   event's key and returns whether to run this handler).
   * @param handler The handler function
   * @param options Options for whether to stop propagation or prevent default.
   */
  on(
    key: string | Signal<string> | RegExp,
    handler: ((event: KeyboardEvent) => void) | ((event: KeyboardEvent) => boolean),
    options?: Partial<EventHandlerOptions>,
  ): this;

  on(...args: any[]) {
    const key = args.length === 3 ? args[1] : args[0];
    const handler = args.length === 3 ? args[2] : args[1];
    const modifiers = args.length === 3 ? args[0] : ModifierKey.None;

    // TODO: Add strict type checks again when finalizing this API.

    this.configs.push({
      key,
      handler,
      modifiers,
      ...this.defaultHandlerOptions,
    });

    return this;
  }

  getConfigs(event: KeyboardEvent) {
    return this.configs.filter(config => this.checkKey(config, event));
  }

  // TODO: Make modifiers accept a signal as well.

  private checkKey(config: KeyboardEventHandlerConfig, event: KeyboardEvent) {
    if (config.key instanceof RegExp) {
      return config.key.test(event.key);
    }

    const key = typeof config.key === 'string' ? config.key : config.key();
    return key.toLowerCase() === event.key.toLowerCase() && hasModifiers(event, config.modifiers);
  }
}

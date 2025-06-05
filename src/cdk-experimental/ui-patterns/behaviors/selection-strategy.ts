/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {SelectionModel} from '@angular/cdk/collections';
import {EventEmitter, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

/**
 * Base class for selection strategies.
 *
 * @template T The type of the values that can be selected.
 * @docs-private
 */
export abstract class SelectionStrategy<T> implements OnDestroy {
  /** The selected values. */
  abstract selection: SelectionModel<T>;

  /** Emits when the selection has changed. */
  abstract readonly selectionChanged: EventEmitter<T[]>;

  /** Emits when the directive is destroyed. */
  protected readonly destroyed = new Subject<void>();

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  /** Toggles the selection of an item. */
  abstract toggle(value: T): void;

  /** Selects all items. */
  abstract selectAll(...items: T[]): void;

  /** Deselects all items. */
  abstract deselectAll(...items: T[]): void;

  /** Clears the selection. */
  abstract clear(): void;

  /** Gets whether an item is selected. */
  abstract isSelected(value: T): boolean;

  /** Gets whether the selection is empty. */
  abstract isEmpty(): boolean;
}

import {SignalLike, resolveSignalLike} from '../signal-like/signal-like';
import {ListFocusItem} from '../list-focus/list-focus';
import {GridFocus} from '../grid-focus/grid-focus'; // GridFocusCellCoordinates removed

/** Represents an item in a collection, such as a listbox option, than can be navigated to. */
export interface GridNavigationItem extends ListFocusItem {}

/** Represents the required inputs for a collection that has navigable items. */
export interface GridNavigationInputs<T extends GridNavigationItem> {
  gridFocus: GridFocus<T>;
  wrapRows: SignalLike<boolean>;
  wrapColumns: SignalLike<boolean>;
}

/** Controls navigation for a grid of items. */
export class GridNavigation<T extends GridNavigationItem> {
  constructor(readonly inputs: GridNavigationInputs<T>) {}

  /** Navigates to the given item. */
  goto(item?: T): boolean {
    return item ? this.inputs.gridFocus.focus(item) : false;
  }

  /** Navigates to the item above the current item. */
  up(): boolean {
    return false;
  }

  /** Navigates to the item below the current item. */
  down(): boolean {
    return false;
  }

  /** Navigates to the item to the left of the current item. */
  left(): boolean {
    return false;
  }

  /** Navigates to the item to the right of the current item. */
  right(): boolean {
    return false;
  }
}

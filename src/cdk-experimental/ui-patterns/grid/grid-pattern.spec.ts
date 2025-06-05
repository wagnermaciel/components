/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {signal, WritableSignal} from '@angular/core';
import {GridInputs, GridPattern} from './grid-pattern';
import {GridCellPattern, GridCellInputs} from './grid-cell';
import {GridCellWidgetPattern} from './grid-cell-widget';
import {RowCol} from '../behaviors/grid-focus/grid-focus';
import {createKeyboardEvent} from '@angular/cdk/testing/private';
import {ModifierKeys} from '@angular/cdk/testing'; // Assuming this is the correct path from listbox.spec
import {SignalLike, WritableSignalLike} from '../behaviors/signal-like/signal-like';
import {MockGridPattern} from './grid-types';

// Helper types for tests
type TestGridInputs = GridInputs;
type TestGridCell = GridCellPattern & {
  // Make some properties writable for testing
  disabled: WritableSignal<boolean>;
  trapsNavigation: WritableSignal<boolean>; // Assuming we might want to toggle this for tests
  // Add other writable properties if needed for tests, e.g., for widgets
  widgets: WritableSignal<GridCellWidgetPattern[]>;
};
type TestGridPattern = GridPattern;

// Keyboard event helpers
const arrowUp = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 38, 'ArrowUp', mods);
const arrowDown = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 40, 'ArrowDown', mods);
const arrowLeft = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 37, 'ArrowLeft', mods);
const arrowRight = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 39, 'ArrowRight', mods);
const home = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 36, 'Home', mods);
const end = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 35, 'End', mods);
const pageUp = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 33, 'PageUp', mods);
const pageDown = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 34, 'PageDown', mods);
// Add space, enter, etc., if GridPattern handles them directly for selection/activation
// const space = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 32, ' ', mods);
// const enter = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 13, 'Enter', mods);

// Pointer event helper
function pointerDownEvent(targetElement: HTMLElement, options?: PointerEventInit): PointerEvent {
  // Basic mock of PointerEvent. Add more properties if needed by the handlers.
  return {
    target: targetElement,
    preventDefault: jasmine.createSpy('preventDefault'),
    stopPropagation: jasmine.createSpy('stopPropagation'),
    // Allow overriding other properties like button, ctrlKey, etc.
    ...options,
  } as unknown as PointerEvent;
}

describe('GridPattern', () => {
  // Helper to create a single mock GridCellPattern
  function createMockCell(
    id: string,
    rowIndex: number,
    colIndex: number,
    parentGridSignal: SignalLike<MockGridPattern | undefined>, // Use MockGridPattern
    disabledState: boolean = false,
    trapsNavigationState: boolean = false, // This param is unused, trapsNavigation is computed
  ): TestGridCell {
    const element = document.createElement('div');
    element.id = id;
    element.setAttribute('role', 'gridcell'); // Important for _getCellFromEvent

    const cellInputs: GridCellInputs = {
      id: signal(id),
      element: signal(element),
      disabled: signal(disabledState),
      rowindex: signal(rowIndex),
      colindex: signal(colIndex),
      rowspan: signal(1), // Default, can be customized if needed for specific tests
      colspan: signal(1), // Default, can be customized
      widgets: signal([]), // Default to no widgets
      parentGrid: parentGridSignal,
      searchTerm: signal(`${id}`), // Default search term
    };

    // Create the cell, then cast to TestGridCell to override signals for testing
    const cell = new GridCellPattern(cellInputs) as TestGridCell;
    // Make specific signals writable for test manipulation
    cell.disabled = cellInputs.disabled as WritableSignal<boolean>;
    cell.widgets = cellInputs.widgets as WritableSignal<GridCellWidgetPattern[]>;

    // For trapsNavigation, it's a computed signal in the actual GridCellPattern.
    // To make it directly writable for testing GridPattern's reaction to it,
    // we would need a more complex mock. The `trapsNavigationState` param is not used
    // because `trapsNavigation` on TestGridCell is not being directly set here.
    // It remains a computed signal from GridCellPattern.
    // If direct override is needed, `(cell as any).trapsNavigation = signal(trapsNavigationState);` could be used
    // or `TestGridCell` definition would need to redeclare `trapsNavigation` as `WritableSignal`.
    // For now, the `trapsNavigationState` parameter is unused.

    return cell;
  }

  // Main setup function for GridPattern
  function setupGrid(
    cellData: {id: string; disabled?: boolean; traps?: boolean}[][], // 2D array for initial cell states
    gridInputs: Partial<Omit<TestGridInputs, 'cells' | 'activeCoords'>> = {},
    initialActiveCoords: RowCol = {row: 0, col: 0},
  ): {grid: TestGridPattern; cells: TestGridCell[][]; activeCoordsSignal: WritableSignal<RowCol>} {
    const activeCoordsSignal = signal<RowCol>(initialActiveCoords);

    // Create a WritableSignal for the parentGrid reference to pass to cells
    // It will be set after the grid is instantiated to avoid circular dependency during construction.
    const parentGridSignal = signal<MockGridPattern | undefined>(undefined);

    const cellsMatrix: TestGridCell[][] = cellData.map((row, rowIndex) =>
      row.map((cellConfig, colIndex) =>
        createMockCell(
          cellConfig.id,
          rowIndex,
          colIndex,
          parentGridSignal,
          cellConfig.disabled,
          cellConfig.traps,
        ),
      ),
    );

    const defaultInputs: Omit<TestGridInputs, 'activeCoords' | 'cells'> = {
      focusMode: signal('roving'),
      disabled: signal(false),
      skipDisabled: signal(true), // From GridFocusInputs
      wrap: signal(true), // From GridNavigationInputs
      wrapBehavior: signal('loop'), // From GridNavigationInputs
      readonly: signal(false),
      orientation: signal('vertical'),
      textDirection: signal('ltr'),
      ...gridInputs,
    };

    const fullGridInputs: TestGridInputs = {
      ...defaultInputs,
      cells: signal(cellsMatrix as GridCellPattern[][]), // Cast as TestGridCell[][] is compatible
      activeCoords: activeCoordsSignal as WritableSignalLike<RowCol>, // Ensure it's WritableSignalLike
    };

    const grid = new GridPattern(fullGridInputs) as TestGridPattern;

    // Now set the parentGrid for all cells
    parentGridSignal.set(grid); // `grid` implements `MockGridPattern`

    // Call setDefaultState after everything is wired up
    // grid.setDefaultState(); // Will be called in tests explicitly where needed

    return {grid, cells: cellsMatrix, activeCoordsSignal};
  }

  // Example of a default grid setup for convenience in tests
  function getDefaultGrid(
    rows = 3,
    cols = 3,
    gridInputs: Partial<Omit<TestGridInputs, 'cells' | 'activeCoords'>> = {},
    initialActiveCoords: RowCol = {row: 0, col: 0},
  ) {
    const cellData: {id: string; disabled?: boolean; traps?: boolean}[][] = [];
    for (let r = 0; r < rows; r++) {
      const rowData: {id: string; disabled?: boolean; traps?: boolean}[] = [];
      for (let c = 0; c < cols; c++) {
        rowData.push({id: `cell-${r}-${c}`});
      }
      cellData.push(rowData);
    }
    return setupGrid(cellData, gridInputs, initialActiveCoords);
  }

  // Basic test to ensure setup works (will be expanded in next steps)
  it('should create a GridPattern instance', () => {
    const {grid} = getDefaultGrid();
    expect(grid).toBeInstanceOf(GridPattern);
  });

  describe('#setDefaultState', () => {
    it('should set activeCoords to the first cell if it is focusable', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(2, 2);
      activeCoordsSignal.set({row: -1, col: -1}); // Set to something else initially
      grid.setDefaultState();
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
    });

    it('should set activeCoords to the first focusable cell if initial cells are disabled', () => {
      const cellData = [
        [{id: 'cell-0-0', disabled: true}, {id: 'cell-0-1'}],
        [{id: 'cell-1-0'}, {id: 'cell-1-1'}],
      ];
      // activeCoordsSignal is {row:0, col:0} by default in setupGrid
      const {grid, activeCoordsSignal} = setupGrid(cellData, {}, {row: 0, col: 0});
      // Manually set activeCoords to something invalid before calling setDefaultState
      activeCoordsSignal.set({row: -1, col: -1});
      grid.setDefaultState();
      expect(activeCoordsSignal()).toEqual({row: 0, col: 1});
    });

    it('should set activeCoords to the first cell of the next row if the first row is disabled', () => {
      const cellData = [
        [
          {id: 'cell-0-0', disabled: true},
          {id: 'cell-0-1', disabled: true},
        ],
        [{id: 'cell-1-0'}, {id: 'cell-1-1'}],
      ];
      const {grid, activeCoordsSignal} = setupGrid(cellData, {}, {row: 0, col: 0});
      activeCoordsSignal.set({row: -1, col: -1});
      grid.setDefaultState();
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0});
    });

    it('should keep activeCoords at {row: 0, col: 0} if all cells are disabled', () => {
      const cellData = [
        [
          {id: 'cell-0-0', disabled: true},
          {id: 'cell-0-1', disabled: true},
        ],
        [
          {id: 'cell-1-0', disabled: true},
          {id: 'cell-1-1', disabled: true},
        ],
      ];
      // Note: GridPattern's setDefaultState currently sets to 0,0 if no focusable cell is found.
      // The grid.disabled() signal itself is directly from inputs.disabled, not computed based on all cells being disabled.
      const {grid, activeCoordsSignal} = setupGrid(
        cellData,
        {disabled: signal(true)},
        {row: 0, col: 0},
      );
      activeCoordsSignal.set({row: -1, col: -1});
      grid.setDefaultState();
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(grid.disabled()).toBe(true); // Check grid disabled state passed via input
    });
  });

  describe('Initial Properties', () => {
    it('should have tabindex = 0 for default (roving) focus mode if not disabled', () => {
      const {grid} = getDefaultGrid(2, 2, {focusMode: signal('roving')});
      grid.setDefaultState(); // Ensure focus manager initializes
      expect(grid.tabindex()).toBe(0);
    });

    it('should have tabindex = 0 for activedescendant focus mode if not disabled', () => {
      const {grid} = getDefaultGrid(2, 2, {focusMode: signal('activedescendant')});
      grid.setDefaultState();
      expect(grid.tabindex()).toBe(0);
    });

    it('should have tabindex = 0 even if disabled (GridFocus.getGridTabindex returns 0 if disabled)', () => {
      const {grid} = getDefaultGrid(2, 2, {disabled: signal(true)});
      grid.setDefaultState();
      expect(grid.tabindex()).toBe(0);
    });

    it('should have activedescendant undefined for roving focus mode', () => {
      const {grid} = getDefaultGrid(2, 2, {focusMode: signal('roving')});
      grid.setDefaultState();
      expect(grid.activedescendant()).toBeUndefined();
    });

    it('should have activedescendant as the ID of the active cell for activedescendant focus mode', () => {
      const cellData = [[{id: 'cell-0-0'}, {id: 'cell-0-1'}]];
      const {grid, activeCoordsSignal} = setupGrid(
        cellData,
        {focusMode: signal('activedescendant')},
        {row: 0, col: 0},
      );
      grid.setDefaultState();
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(grid.activedescendant()).toBe('cell-0-0');
    });

    it('should have activedescendant undefined if grid is disabled, even in activedescendant mode', () => {
      const {grid} = getDefaultGrid(2, 2, {
        focusMode: signal('activedescendant'),
        disabled: signal(true),
      });
      grid.setDefaultState();
      expect(grid.activedescendant()).toBeUndefined();
    });
  });

  describe('Keyboard Navigation (onKeydown)', () => {
    it('should navigate down on ArrowDown', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(3, 3); // 3x3 grid
      grid.setDefaultState(); // activeCoords is {0,0}
      const event = arrowDown();
      spyOn(event, 'preventDefault');

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should navigate up on ArrowUp', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(3, 3, {}, {row: 1, col: 0});
      const event = arrowUp();
      spyOn(event, 'preventDefault');

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should navigate right on ArrowRight (ltr)', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(3, 3, {orientation: signal('horizontal')});
      grid.setDefaultState(); // {0,0}
      const event = arrowRight();
      spyOn(event, 'preventDefault');

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 1});
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should navigate left on ArrowLeft (ltr, horizontal)', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(
        3,
        3,
        {orientation: signal('horizontal')},
        {row: 0, col: 1},
      );
      const event = arrowLeft();
      spyOn(event, 'preventDefault');

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should navigate left on ArrowRight (rtl, horizontal)', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(3, 3, {
        orientation: signal('horizontal'),
        textDirection: signal('rtl'),
      });
      grid.setDefaultState(); // {0,0}
      const event = arrowRight();
      spyOn(event, 'preventDefault');

      // In RTL, physical ArrowRight matches `leftKey`. Calls `navigation.left()`.
      // `navigation.left()` moves to visual left (decreasing col index or wrapping to end).
      // From {0,0}, visual left in RTL (pressing ArrowRight) would go to {0,2} if wrapping.
      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 2});
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should navigate right on ArrowLeft (rtl, horizontal)', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(
        3,
        3,
        {
          orientation: signal('horizontal'),
          textDirection: signal('rtl'),
        },
        {row: 0, col: 1},
      );
      const event = arrowLeft();
      spyOn(event, 'preventDefault');
      // In RTL, physical ArrowLeft matches `rightKey`. Calls `navigation.right()`.
      // `navigation.right()` moves to visual right (increasing col index or wrapping to start).
      // From {0,1}, visual right in RTL (pressing ArrowLeft) goes to {0,0}.
      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should navigate to first cell in row on Home', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(3, 3, {}, {row: 1, col: 2});
      const event = home();
      spyOn(event, 'preventDefault');

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should navigate to first cell in grid on Ctrl+Home', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(3, 3, {}, {row: 1, col: 2});
      const event = home({control: true});
      spyOn(event, 'preventDefault');

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should navigate to last cell in row on End', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(3, 3, {}, {row: 1, col: 0});
      const event = end();
      spyOn(event, 'preventDefault');

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 2});
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should navigate to last cell in grid on Ctrl+End', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(3, 3, {}, {row: 0, col: 0});
      const event = end({control: true});
      spyOn(event, 'preventDefault');

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 2, col: 2});
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should not navigate if active cell trapsNavigation', () => {
      const {grid, cells, activeCoordsSignal} = getDefaultGrid(3, 3);
      grid.setDefaultState(); // {0,0}
      const cellWithWidget = cells[0][0];
      // Spy on the 'trapsNavigation' signal itself if it were directly writable.
      // Since it's computed, we spy on its getter.
      // For a computed signal, its value is obtained by calling it like a function.
      // So we need to ensure our spy strategy works for `activeCellInstance()?.trapsNavigation()`.
      // The `trapsNavigation` on `TestGridCell` is not a `WritableSignal` by default in `createMockCell`.
      // The `GridCellPattern.trapsNavigation` is a `Signal<boolean>`.
      // We can't directly make `cellWithWidget.trapsNavigation.set(true)`.
      // So, spy on the .trapsNavigation() call path.
      // The `activeCellInstance()` returns a `GridCellPattern | undefined`.
      // `activeCellInstance()?.trapsNavigation()` will call the `trapsNavigation` signal function.

      // To make this test effective, we need to ensure `cellWithWidget.trapsNavigation()` returns true.
      // This is tricky because `trapsNavigation` is a computed signal based on widget states.
      // For a focused unit test on GridPattern, we can mock this specific cell's behavior.
      // The TestGridCell type has `trapsNavigation: WritableSignal<boolean>` but createMockCell doesn't set it up as writable.
      // Let's assume we can forcibly make it behave as if it's trapping.
      // One way: spy on `cellWithWidget.trapsNavigation` itself if it's a `Signal` object.
      // The `trapsNavigation` property on `GridCellPattern` is `readonly active: Signal<boolean> = ...`.
      // So, we spy on the function returned by the signal.
      const trapsSignal = signal(true); // Create a new signal that returns true
      spyOn(cellWithWidget, 'trapsNavigation').and.returnValue(trapsSignal); // Spy on the method if it's a method
      // Or, if trapsNavigation is a property returning a signal:
      // spyOnProperty(cellWithWidget, 'trapsNavigation', 'get').and.returnValue(trapsSignal);

      // Re-evaluating spy strategy: `cellWithWidget.trapsNavigation` is a `Signal<boolean>`.
      // `activeCellInstance()?.trapsNavigation()` calls the signal function.
      // So we need `activeCellInstance()` to return our modified cell, and that cell's `trapsNavigation` signal to return true.
      // The `spyOnProperty` is the correct approach for a property that returns a signal.
      spyOnProperty(cellWithWidget, 'trapsNavigation', 'get').and.returnValue(
        signal(true) as Signal<boolean>,
      );

      const event = arrowDown();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'down');

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(event.preventDefault).not.toHaveBeenCalled();
      expect(grid.navigation.down).not.toHaveBeenCalled();
    });

    it('should navigate in readonly mode', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(3, 3, {readonly: signal(true)});
      grid.setDefaultState(); // {0,0}
      grid.onKeydown(arrowDown());
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0});
    });

    it('should not navigate when disabled', () => {
      const {grid, activeCoordsSignal} = getDefaultGrid(3, 3, {disabled: signal(true)});
      grid.setDefaultState(); // {0,0}
      const initialCoords = {...activeCoordsSignal()};

      grid.onKeydown(arrowDown());
      expect(activeCoordsSignal()).toEqual(initialCoords);
      grid.onKeydown(arrowUp());
      expect(activeCoordsSignal()).toEqual(initialCoords);
    });
  });

  describe('Computed Properties', () => {
    describe('tabindex', () => {
      it('should be 0 for roving focus mode when not disabled', () => {
        const {grid} = getDefaultGrid(2, 2, {focusMode: signal('roving'), disabled: signal(false)});
        // setDefaultState might influence active cell, but tabindex is mostly about grid state here
        grid.setDefaultState();
        expect(grid.tabindex()).toBe(0);
      });

      it('should be 0 for activedescendant focus mode when not disabled', () => {
        const {grid} = getDefaultGrid(2, 2, {
          focusMode: signal('activedescendant'),
          disabled: signal(false),
        });
        grid.setDefaultState();
        expect(grid.tabindex()).toBe(0);
      });

      it('should be 0 when grid is disabled (roving)', () => {
        const {grid} = getDefaultGrid(2, 2, {focusMode: signal('roving'), disabled: signal(true)});
        grid.setDefaultState();
        expect(grid.tabindex()).toBe(0); // GridFocus.getGridTabindex returns 0 if disabled
      });

      it('should be 0 when grid is disabled (activedescendant)', () => {
        const {grid} = getDefaultGrid(2, 2, {
          focusMode: signal('activedescendant'),
          disabled: signal(true),
        });
        grid.setDefaultState();
        expect(grid.tabindex()).toBe(0); // GridFocus.getGridTabindex returns 0 if disabled
      });
    });

    describe('activedescendant', () => {
      it('should be undefined for roving focus mode', () => {
        const {grid} = getDefaultGrid(2, 2, {focusMode: signal('roving')});
        grid.setDefaultState(); // activeCoords will be {0,0}
        expect(grid.activedescendant()).toBeUndefined();
      });

      it('should be the ID of the active cell for activedescendant focus mode', () => {
        const cellData = [
          [{id: 'cell-0-0'}, {id: 'cell-0-1'}],
          [{id: 'cell-1-0', disabled: true}, {id: 'cell-1-1'}],
        ];
        // Initial activeCoords {0,1}
        const {grid, activeCoordsSignal} = setupGrid(
          cellData,
          {focusMode: signal('activedescendant')},
          {row: 0, col: 1},
        );
        // No setDefaultState here, rely on initial activeCoords
        expect(activeCoordsSignal()).toEqual({row: 0, col: 1});
        expect(grid.activedescendant()).toBe('cell-0-1');

        // Change active cell
        activeCoordsSignal.set({row: 1, col: 1});
        expect(grid.activedescendant()).toBe('cell-1-1');
      });

      it('should be undefined if no cell is active (e.g., invalid activeCoords), even in activedescendant mode', () => {
        // GridFocus.activeCell() would return undefined if activeCoords points to no cell or out of bounds
        // For this test, we can set activeCoords to an out-of-bounds value.
        const {grid, activeCoordsSignal} = getDefaultGrid(2, 2, {
          focusMode: signal('activedescendant'),
        });
        activeCoordsSignal.set({row: 5, col: 5}); // Out of bounds
        expect(grid.activedescendant()).toBeUndefined();
      });

      it('should be undefined when grid is disabled, even in activedescendant mode', () => {
        const {grid} = getDefaultGrid(2, 2, {
          focusMode: signal('activedescendant'),
          disabled: signal(true),
        });
        grid.setDefaultState(); // activeCoords will be {0,0}
        expect(grid.activedescendant()).toBeUndefined();
      });

      it('should be undefined if the active cell has no ID (though our mocks always do)', () => {
        // This scenario is harder to test with current mocks as they always have an ID.
        // Conceptually, if focusManager.activeCell() returns a cell with id() returning undefined,
        // then activedescendant should be undefined.
        // We can mock activeCell() on focusManager for this specific test.
        const {grid, cells} = getDefaultGrid(1, 1, {focusMode: signal('activedescendant')});
        grid.setDefaultState(); // active is {0,0}

        // Spy on the activeCell method of the actual focusManager instance
        spyOn(grid.focusManager, 'activeCell').and.returnValue(
          {...cells[0][0], id: signal(undefined as any as string)}, // Mock cell with undefined id
        );
        expect(grid.activedescendant()).toBeUndefined();
      });
    });
  });
});

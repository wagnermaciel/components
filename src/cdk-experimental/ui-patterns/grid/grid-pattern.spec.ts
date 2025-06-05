/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// Keep necessary imports for signals, GridPattern classes, and testing utilities
import {signal, WritableSignal, Signal} from '@angular/core';
import {GridInputs, GridPattern} from './grid-pattern';
import {GridCellPattern, GridCellInputs} from './grid-cell';
import {GridCellWidgetPattern} from './grid-cell-widget';
import {RowCol} from '../behaviors/grid-focus/grid-focus';
import {createKeyboardEvent} from '@angular/cdk/testing/private';
import {ModifierKeys} from '@angular/cdk/testing';
import {SignalLike, WritableSignalLike} from '../behaviors/signal-like/signal-like';
import {MockGridPattern} from './grid-types';


// Keyboard event helpers - KEEP THESE
const arrowUp = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 38, 'ArrowUp', mods);
const arrowDown = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 40, 'ArrowDown', mods);
const arrowLeft = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 37, 'ArrowLeft', mods);
const arrowRight = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 39, 'ArrowRight', mods);
const home = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 36, 'Home', mods);
const end = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 35, 'End', mods);
const pageUp = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 33, 'PageUp', mods);
const pageDown = (mods?: ModifierKeys) => createKeyboardEvent('keydown', 34, 'PageDown', mods);
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

// --- New Test Types and Helper Functions ---

interface TestGridCellConfig {
  id?: string; // Optional, can be generated
  disabled?: boolean;
  rowspan?: number;
  colspan?: number;
  trapsNavigation?: boolean; // To control the trapsNavigation signal for testing
  // Add config for widgets if needed to test actual trapsNavigation logic
}

// TestGridCell needs to be compatible with GridCellPattern and GridFocusCell
interface TestGridCell extends GridCellPattern {
  // Make specific signals writable for easier test manipulation
  id: WritableSignal<string>; // GridCellPattern has SignalLike, make it WritableSignal for tests
  element: WritableSignal<HTMLElement>;
  disabled: WritableSignal<boolean>;
  rowindex: WritableSignal<number>;
  colindex: WritableSignal<number>;
  rowspan: WritableSignal<number>;
  colspan: WritableSignal<number>;
  widgets: WritableSignal<GridCellWidgetPattern[]>; // From GridCellPattern
  parentGrid: WritableSignal<MockGridPattern | undefined>; // From GridCellPattern

  // Override trapsNavigation to be a writable signal for direct control in GridPattern tests
  trapsNavigation: WritableSignal<boolean>;
  // searchTerm is part of GridCellPattern, ensure it's handled
  searchTerm: WritableSignal<string>;
}

let cellIdCounter = 0;

function createTestCell(
  config: TestGridCellConfig = {},
  parentGridSignal: WritableSignal<MockGridPattern | undefined> // Made Writable for setupGridPattern
): TestGridCell {
  const id = config.id ?? `test-cell-${cellIdCounter++}`;
  const element = document.createElement('div');
  element.id = id;
  element.setAttribute('role', 'gridcell');
  // Spy on focus like in grid-navigation.spec.ts if needed for GridPattern tests
  // spyOn(element, 'focus').and.callThrough();

  // These are the inputs for GridCellPattern constructor
  const cellInputs: GridCellInputs = {
    id: signal(id),
    element: signal(element),
    disabled: signal(config.disabled ?? false),
    // rowindex/colindex will be properly set by setupGridPattern
    rowindex: signal(-1), // Placeholder
    colindex: signal(-1), // Placeholder
    rowspan: signal(config.rowspan ?? 1),
    colspan: signal(config.colspan ?? 1),
    widgets: signal([]),
    parentGrid: parentGridSignal, // parentGridSignal is WritableSignal<MockGridPattern | undefined>
                                 // GridCellInputs expects SignalLike<MockGridPattern | undefined> - compatible
    searchTerm: signal(id),
  };

  // Instantiate the actual GridCellPattern
  const cellPattern = new GridCellPattern(cellInputs);

  // Create the TestGridCell object, making signals writable and adding/overriding trapsNavigation
  const testCell: TestGridCell = {
    ...cellPattern, // Spread properties from actual GridCellPattern
    // Override with WritableSignals for testing where needed
    id: cellInputs.id as WritableSignal<string>,
    element: cellInputs.element as WritableSignal<HTMLElement>,
    disabled: cellInputs.disabled as WritableSignal<boolean>,
    rowindex: cellInputs.rowindex as WritableSignal<number>, // Will be updated
    colindex: cellInputs.colindex as WritableSignal<number>, // Will be updated
    rowspan: cellInputs.rowspan as WritableSignal<number>,
    colspan: cellInputs.colspan as WritableSignal<number>,
    widgets: cellInputs.widgets as WritableSignal<GridCellWidgetPattern[]>,
    parentGrid: parentGridSignal, // Keep as WritableSignal for setup convenience
    trapsNavigation: signal(config.trapsNavigation ?? false), // Override for direct control
    searchTerm: cellInputs.searchTerm as WritableSignal<string>,

    // Ensure all methods from GridCellPattern are available (they are via spread)
    // Ensure it's compatible with GridFocusCell (rowindex, colindex, rowspan, colspan, id, element, disabled)
  };
  return testCell;
}

// Main setup function for GridPattern tests
function setupGridPattern(
  gridCellConfig: TestGridCellConfig[][], // Defines the grid structure and cell properties
  initialActiveCoords: RowCol = {row: 0, col: 0},
  patternInputs: Partial<GridInputs> = {} // Overrides for GridPattern's own inputs
): {
  grid: GridPattern;
  cells: TestGridCell[][];
  activeCoordsSignal: WritableSignal<RowCol>;
} {
  cellIdCounter = 0; // Reset ID counter for fresh IDs per setup
  const activeCoordsSignal = signal<RowCol>(initialActiveCoords);
  const parentGridSignal = signal<MockGridPattern | undefined>(undefined) as WritableSignal<MockGridPattern | undefined>;


  const cellsMatrix: TestGridCell[][] = gridCellConfig.map((rowConfig) =>
    rowConfig.map((cellConfig) => createTestCell(cellConfig, parentGridSignal))
  );

  // Default inputs for GridPattern, similar to those for GridFocus/GridNavigation
  const defaultGridPatternInputs: Omit<GridInputs, 'cells' | 'activeCoords'> = {
    focusMode: signal('roving'),
    disabled: signal(false),
    skipDisabled: signal(true),
    wrap: signal(true),
    wrapBehavior: signal('loop'),
    readonly: signal(false),
    orientation: signal('vertical'), // Default for GridPattern
    textDirection: signal('ltr'),
    ...patternInputs, // User overrides
  };

  const fullGridInputs: GridInputs = {
    ...defaultGridPatternInputs,
    cells: signal(cellsMatrix as GridCellPattern[][]), // Cast to base type for GridInputs
    activeCoords: activeCoordsSignal as WritableSignalLike<RowCol>,
  };

  const grid = new GridPattern(fullGridInputs);
  parentGridSignal.set(grid); // Now grid is created, set it for cells

  // Update rowindex and colindex for each cell using the focusManager from the created grid
  for (const row of cellsMatrix) {
    for (const cell of row) {
      const coords = grid.focusManager.getCoordinates(cell);
      if (coords) {
        cell.rowindex.set(coords.row);
        cell.colindex.set(coords.col);
      } else {
        // Should not happen if cells are part of the grid's `cells` input
        console.warn('Cell not found in grid by focusManager:', cell.id());
      }
    }
  }
  // grid.setDefaultState(); // Call explicitly in tests where needed

  return {grid, cells: cellsMatrix, activeCoordsSignal};
}

// --- Predefined Grid Data Structures ---

// Simple 3x3 grid
const simpleGridData: TestGridCellConfig[][] = [
  [{}, {}, {}], // Cells will get auto-generated IDs like test-cell-0, test-cell-1, etc.
  [{}, {}, {}],
  [{}, {}, {}],
];

// Grid with some disabled cells
const disabledCellsGridData: TestGridCellConfig[][] = [
  [{id: 'd-0-0'}, {id: 'd-0-1', disabled: true}, {id: 'd-0-2'}],
  [{id: 'd-1-0', disabled: true}, {id: 'd-1-1'}, {id: 'd-1-2', disabled: true}],
  [{id: 'd-2-0'}, {id: 'd-2-1'}, {id: 'd-2-2'}],
];

// Grid with rowspans and colspans
/*
 * Visual representation for `spannedGridDataFinal`:
 * ┌─────────┬─────────┬─────────┐
 * │ sgf-0-0 │ sgf-0-1 │ sgf-0-2 │  (sgf-0-1 has rowspan 2)
 * │ (1x1)   │ (2x1)   │ (1x1)   │
 * ├─────────┼         ├─────────┤
 * │ sgf-1-0 │         │ sgf-1-2 │  (sgf-1-0 has colspan 2)
 * │ (1x2)   │         │ (1x1)   │
 * ├─────────┴─────────┼─────────┤
 * │ /*spacer*/│/*spacer*/│ sgf-2-2 │  (sgf-2-2 is 1x1)
 * │         │         │ (1x1)   │
 * └─────────┴─────────┴─────────┘
 *
 * Array structure for definition (cells defined are top-left of their span):
 * Row 0: [sgf-0-0 (1x1)] [sgf-0-1 (2x1)] [sgf-0-2 (1x1)]
 * Row 1: [sgf-1-0 (1x2)] [             ] [sgf-1-2 (1x1)] (sgf-0-1 from Row 0 occupies (1,1))
 * Row 2: [             ] [             ] [sgf-2-2 (1x1)] (sgf-1-0 from Row 1 occupies (2,0) and (2,1))
 */
const spannedGridDataFinal: TestGridCellConfig[][] = [
  [{id: 'sgf-0-0'}, {id: 'sgf-0-1', rowspan: 2}, {id: 'sgf-0-2'}],
  [{id: 'sgf-1-0', colspan: 2}, /* sgf-0-1 from R0 occupies this slot */ {id: 'sgf-1-2'}],
  [/* sgf-1-0 from R1 occupies this slot */ /* sgf-1-0 from R1 also occupies this slot */ {id: 'sgf-2-2'}]
];


// Grid with a cell that initially traps navigation
const trapsNavGridData: TestGridCellConfig[][] = [
  [{id: 't-0-0'}, {id: 't-0-1'}],
  [{id: 't-1-0', trapsNavigation: true}, {id: 't-1-1'}],
];


describe('GridPattern (New Setup)', () => {
  describe('#setDefaultState', () => {
    it('should set activeCoords to the first cell {0,0} if it is focusable', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(simpleGridData);
      // Ensure activeCoords is something else before the call
      activeCoordsSignal.set({row: -1, col: -1});
      grid.setDefaultState();
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
    });

    it('should set activeCoords to the first focusable cell if initial cells are disabled', () => {
      // disabledCellsGridData: d-0-1 is disabled, d-0-0 is not. d-1-0 is disabled.
      // Expected: d-0-0 {0,0}
      const data1 = [[{id: 'c00', disabled: true}, {id: 'c01'}], [{id: 'c10'}, {id: 'c11'}]];
      const {grid: grid1, activeCoordsSignal: acs1} = setupGridPattern(data1);
      acs1.set({row:-1, col:-1});
      grid1.setDefaultState();
      expect(acs1()).toEqual({row: 0, col: 1}); // first focusable is c01 at {0,1}

      // Expected: d-0-2 {0,2} from disabledCellsGridData
      const data2 = [
        [{id: 'd00', disabled: true}, {id: 'd01', disabled: true}, {id: 'd02'}],
        [{id: 'd10'}, {id: 'd11'}, {id: 'd12'}]
      ];
      const {grid: grid2, activeCoordsSignal: acs2} = setupGridPattern(data2);
      acs2.set({row:-1, col:-1});
      grid2.setDefaultState();
      expect(acs2()).toEqual({row: 0, col: 2});
    });

    it('should set activeCoords to the first cell of the next focusable row if an entire row is disabled', () => {
      const data = [
        [{id: 'r0c0', disabled: true}, {id: 'r0c1', disabled: true}],
        [{id: 'r1c0'}, {id: 'r1c1'}],
      ];
      const {grid, activeCoordsSignal} = setupGridPattern(data);
      activeCoordsSignal.set({row: -1, col: -1});
      grid.setDefaultState();
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0});
    });

    it('should keep activeCoords at {row: 0, col: 0} if all cells are disabled and report grid as disabled', () => {
      const allDisabledData: TestGridCellConfig[][] = [
        [{disabled: true}, {disabled: true}],
        [{disabled: true}, {disabled: true}],
      ];
      const {grid, activeCoordsSignal} = setupGridPattern(allDisabledData, {row:0, col:0}, {disabled: signal(false)});
      // Even if grid input `disabled` is false, if all cells are disabled, focusManager might report grid as disabled.
      // GridPattern's `setDefaultState` finds first focusable. If none, it defaults to 0,0.
      // The `grid.disabled()` computed signal relies on `focusManager.isGridDisabled()`.

      activeCoordsSignal.set({row: -1, col: -1}); // Force change
      grid.setDefaultState();

      // Check activeCoords (GridPattern's setDefaultState defaults to 0,0 if nothing focusable)
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      // Check grid.disabled() (which uses focusManager.isGridDisabled())
      expect(grid.disabled()).toBe(true);
    });
  });

  describe('Initial Properties (after setDefaultState)', () => {
    it('should have tabindex = 0 for default (roving) focus mode if not disabled', () => {
      const {grid} = setupGridPattern(simpleGridData, {row:0, col:0}, {
        focusMode: signal('roving'),
        disabled: signal(false)
      });
      grid.setDefaultState();
      expect(grid.tabindex()).toBe(0);
    });

    it('should have tabindex = 0 for activedescendant focus mode if not disabled', () => {
      const {grid} = setupGridPattern(simpleGridData, {row:0, col:0}, {
        focusMode: signal('activedescendant'),
        disabled: signal(false)
      });
      grid.setDefaultState();
      expect(grid.tabindex()).toBe(0);
    });

    it('should have tabindex = 0 when grid input disabled is true', () => {
      const {grid} = setupGridPattern(simpleGridData, {row:0, col:0}, {
        disabled: signal(true) // Grid itself is marked disabled
      });
      grid.setDefaultState();
      // GridFocus.getGridTabindex() returns 0 if this.inputs.disabled() is true
      expect(grid.tabindex()).toBe(0);
    });

    it('should have activedescendant undefined for roving focus mode', () => {
      const {grid} = setupGridPattern(simpleGridData, {row:0, col:0}, {focusMode: signal('roving')});
      grid.setDefaultState();
      expect(grid.activedescendant()).toBeUndefined();
    });

    it('should have activedescendant as the ID of the active cell for activedescendant mode', () => {
      const cellData: TestGridCellConfig[][] = [[{id: 'cell-A0'}, {id: 'cell-A1'}]];
      const {grid, activeCoordsSignal} = setupGridPattern(cellData, {row:0, col:0}, {
        focusMode: signal('activedescendant')
      });
      grid.setDefaultState(); // Sets activeCoords based on focusable cells
      expect(activeCoordsSignal()).toEqual({row:0, col:0});
      expect(grid.activedescendant()).toBe('cell-A0'); // ID of cell at {0,0}
    });

    it('should have activedescendant undefined if grid input disabled is true, even in activedescendant mode', () => {
      const {grid} = setupGridPattern(simpleGridData, {row:0, col:0}, {
        focusMode: signal('activedescendant'),
        disabled: signal(true) // Grid itself is marked disabled
      });
      grid.setDefaultState();
      expect(grid.activedescendant()).toBeUndefined();
    });

    it('should be undefined if the active cell has no ID (mocked)', () => {
      const {grid, cells} = setupGridPattern([[{id: 'id-1'}]], {row:0, col:0}, {
        focusMode: signal('activedescendant')
      });
      grid.setDefaultState();

      // Override the active cell's ID signal for this test
      const activeCell = grid.focusManager.activeCell();
      if (activeCell) {
        // This requires TestGridCell's id to be WritableSignal, which it is.
        (activeCell as TestGridCell).id.set(undefined as any as string);
      }
      expect(grid.activedescendant()).toBeUndefined();
    });
  });

  describe('Keyboard Navigation (onKeydown)', () => {
    it('should navigate down on ArrowDown', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(simpleGridData); // 3x3
      grid.setDefaultState(); // activeCoords is {0,0}
      const event = arrowDown();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'down').and.callThrough(); // Ensure underlying nav is called

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.down).toHaveBeenCalled();
    });

    it('should navigate up on ArrowUp', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(simpleGridData, {row: 1, col: 0});
      const event = arrowUp();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'up').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.up).toHaveBeenCalled();
    });

    it('should navigate right on ArrowRight (ltr, default orientation vertical means nav maps to right)', () => {
      // GridPattern's default keydown for ArrowRight (when vertical) calls navigation.right()
      const {grid, activeCoordsSignal} = setupGridPattern(simpleGridData);
      grid.setDefaultState(); // {0,0}
      const event = arrowRight();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'right').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 1});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.right).toHaveBeenCalled();
    });

    it('should navigate left on ArrowLeft (ltr, default orientation vertical means nav maps to left)', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(simpleGridData, {row:0, col:1});
      const event = arrowLeft();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'left').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.left).toHaveBeenCalled();
    });

    // RTL Tests (assuming default vertical orientation for key mapping logic in GridPattern)
    it('should navigate left on ArrowRight (rtl)', () => {
        const {grid, activeCoordsSignal} = setupGridPattern(simpleGridData, {row: 0, col: 0}, {textDirection: signal('rtl')});
        const event = arrowRight(); // Physical ArrowRight
        spyOn(event, 'preventDefault');
        spyOn(grid.navigation, 'left').and.callThrough(); // In RTL, ArrowRight keydown maps to navigation.left()

        grid.onKeydown(event);
        // From (0,0), navigation.left() in a 3x3 grid wraps to (0,2)
        expect(activeCoordsSignal()).toEqual({row: 0, col: 2});
        expect(event.preventDefault).toHaveBeenCalled();
        expect(grid.navigation.left).toHaveBeenCalled();
    });

    it('should navigate right on ArrowLeft (rtl)', () => {
        const {grid, activeCoordsSignal} = setupGridPattern(simpleGridData, {row: 0, col: 1}, {textDirection: signal('rtl')});
        const event = arrowLeft(); // Physical ArrowLeft
        spyOn(event, 'preventDefault');
        spyOn(grid.navigation, 'right').and.callThrough(); // In RTL, ArrowLeft keydown maps to navigation.right()

        grid.onKeydown(event);
        // From (0,1), navigation.right() in RTL (visual right) goes to (0,0)
        expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
        expect(event.preventDefault).toHaveBeenCalled();
        expect(grid.navigation.right).toHaveBeenCalled();
    });


    it('should navigate to first cell in row on Home', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(simpleGridData, {row: 1, col: 2});
      const event = home();
      spyOn(event, 'preventDefault');
      // We expect gotoCell to be called with cells[1][0]
      spyOn(grid.navigation, 'gotoCell').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.gotoCell).toHaveBeenCalledWith(cells[1][0]);
    });

    it('should navigate to first cell in grid on Ctrl+Home', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(simpleGridData, {row: 1, col: 2});
      const event = home({control: true});
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'gotoCell').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.gotoCell).toHaveBeenCalledWith(cells[0][0]);
    });

    it('should navigate to last cell in row on End', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(simpleGridData, {row: 1, col: 0});
      const event = end();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'gotoCell').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 2});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.gotoCell).toHaveBeenCalledWith(cells[1][2]);
    });

    it('should navigate to last cell in grid on Ctrl+End', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(simpleGridData, {row: 0, col: 0});
      const event = end({control: true});
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'gotoCell').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 2, col: 2}); // Last cell in simpleGridData (3x3)
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.gotoCell).toHaveBeenCalledWith(cells[2][2]);
    });

    it('should not navigate if active cell trapsNavigation', () => {
      // Use trapsNavGridData: t-1-0 traps navigation
      // trapsNavGridData: [[{id: 't-0-0'}, {id: 't-0-1'}], [{id: 't-1-0', trapsNavigation: true}, {id: 't-1-1'}]]
      const {grid, activeCoordsSignal} = setupGridPattern(trapsNavGridData, {row: 1, col: 0}); // Start on the trapping cell

      const event = arrowDown();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'down');

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0}); // Should not have moved
      // In GridPattern, if trapsNavigation is true, it does NOT call event.preventDefault() itself.
      expect(event.preventDefault).not.toHaveBeenCalled();
      expect(grid.navigation.down).not.toHaveBeenCalled();
    });

    it('should navigate in readonly mode', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(simpleGridData, {row:0,col:0}, {readonly: signal(true)});
      grid.onKeydown(arrowDown());
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0});
    });

    it('should not navigate when grid is disabled', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(simpleGridData, {row:0,col:0}, {disabled: signal(true)});
      const initialCoords = {row: 0, col: 0};
      spyOn(grid.navigation, 'down');

      grid.onKeydown(arrowDown());
      expect(activeCoordsSignal()).toEqual(initialCoords);
      expect(grid.navigation.down).not.toHaveBeenCalled();
    });

    // PageUp/PageDown tests can be added later if functionality is implemented in GridPattern
  });

  describe('Pointer Interaction (onPointerdown)', () => {
    it('should set activeCoords to the clicked cell', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(simpleGridData); // 3x3
      grid.setDefaultState(); // Initial: {0,0}

      const targetCell = cells[1][1]; // Target cell (1,1)
      const event = pointerDownEvent(targetCell.element()); // element() is WritableSignal<HTMLElement>
                                                          // so targetCell.element() gives HTMLElement

      spyOn(grid.navigation, 'gotoCell').and.callThrough();

      grid.onPointerdown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 1});
      expect(grid.navigation.gotoCell).toHaveBeenCalledWith(targetCell);
    });

    it('should allow focusing cell when readonly', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(simpleGridData, {row:0,col:0}, {readonly: signal(true)});
      grid.setDefaultState(); // Initial: {0,0}

      const targetCell = cells[1][2];
      const event = pointerDownEvent(targetCell.element());
      spyOn(grid.navigation, 'gotoCell').and.callThrough();

      grid.onPointerdown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 2});
      expect(grid.navigation.gotoCell).toHaveBeenCalledWith(targetCell);
    });

    it('should do nothing if the grid is disabled', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(simpleGridData, {row:0,col:0}, {disabled: signal(true)});
      grid.setDefaultState(); // Initial: {0,0}
      const initialCoords = {row:0, col:0}; // Use value from activeCoordsSignal after setDefaultState if needed

      const targetCell = cells[1][1];
      const event = pointerDownEvent(targetCell.element());
      spyOn(grid.navigation, 'gotoCell');

      grid.onPointerdown(event);
      expect(activeCoordsSignal()).toEqual(initialCoords);
      expect(grid.navigation.gotoCell).not.toHaveBeenCalled();
    });

    it('should do nothing if the clicked cell is disabled', () => {
      const cellDataWithDisabled: TestGridCellConfig[][] = [
        [{}, {}],
        [{disabled: true}, {}] // Cell (1,0) is disabled
      ];
      const {grid, cells, activeCoordsSignal} = setupGridPattern(cellDataWithDisabled);
      grid.setDefaultState(); // Initial: {0,0}
      const initialCoords = {row:0, col:0};

      const disabledCell = cells[1][0]; // This is the disabled cell
      const event = pointerDownEvent(disabledCell.element());
      spyOn(grid.navigation, 'gotoCell');

      grid.onPointerdown(event);
      expect(activeCoordsSignal()).toEqual(initialCoords);
      expect(grid.navigation.gotoCell).not.toHaveBeenCalled();
    });

    it('should do nothing if click target is not a cell element', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(simpleGridData);
      grid.setDefaultState();
      const initialCoords = {row:0, col:0};

      const nonCellElement = document.createElement('div');
      const event = pointerDownEvent(nonCellElement);
      spyOn(grid.navigation, 'gotoCell');

      grid.onPointerdown(event);
      expect(activeCoordsSignal()).toEqual(initialCoords);
      expect(grid.navigation.gotoCell).not.toHaveBeenCalled();
    });
  });

  describe('Computed Properties (New Setup)', () => { // Renamed slightly to indicate it's the new version
    describe('tabindex', () => {
      it('should be 0 for roving focus mode when not disabled', () => {
        const {grid} = setupGridPattern(simpleGridData, {row:0, col:0}, {
          focusMode: signal('roving'),
          disabled: signal(false)
        });
        grid.setDefaultState();
        expect(grid.tabindex()).toBe(0);
      });

      it('should be 0 for activedescendant focus mode when not disabled', () => {
        const {grid} = setupGridPattern(simpleGridData, {row:0, col:0}, {
          focusMode: signal('activedescendant'),
          disabled: signal(false)
        });
        grid.setDefaultState();
        expect(grid.tabindex()).toBe(0);
      });

      it('should be 0 when grid input disabled is true (roving)', () => {
        const {grid} = setupGridPattern(simpleGridData, {row:0, col:0}, {
          focusMode: signal('roving'),
          disabled: signal(true)
        });
        grid.setDefaultState();
        expect(grid.tabindex()).toBe(0);
      });

      it('should be 0 when grid input disabled is true (activedescendant)', () => {
        const {grid} = setupGridPattern(simpleGridData, {row:0, col:0}, {
          focusMode: signal('activedescendant'),
          disabled: signal(true)
        });
        grid.setDefaultState();
        expect(grid.tabindex()).toBe(0);
      });
    });

    describe('activedescendant', () => {
      it('should be undefined for roving focus mode', () => {
        const {grid} = setupGridPattern(simpleGridData, {row:0, col:0}, {
            focusMode: signal('roving')
        });
        grid.setDefaultState(); // activeCoords will be {0,0}
        expect(grid.activedescendant()).toBeUndefined();
      });

      it('should be the ID of the active cell for activedescendant focus mode', () => {
        const cellData: TestGridCellConfig[][] = [[{id: 'cell-X0'}, {id: 'cell-X1'}]];
        // Test with initial activeCoords set to a specific, valid cell
        const {grid, activeCoordsSignal} = setupGridPattern(cellData, {row:0, col:1}, {
          focusMode: signal('activedescendant')
        });
        // No setDefaultState here to respect initialActiveCoords if that's intended for the test.
        // Or call setDefaultState if the test is about the state *after* initialization.
        // Given it's "Initial Properties (after setDefaultState)" in previous test, let's be consistent.
        // grid.setDefaultState(); // This might change activeCoords if {0,1} is not focusable or is not the first.
                                // Let's ensure activeCoords is what we expect AFTER setDefaultState for this test.
                                // However, the original test had activeCoords set and then checked.
                                // The `activedescendant` should reflect the current `activeCoordsSignal` without needing setDefaultState
                                // if the grid is already initialized with cells.
        expect(activeCoordsSignal()).toEqual({row:0, col:1}); // Ensure it's starting where we want
        expect(grid.activedescendant()).toBe('cell-X1');

        // Change active cell
        activeCoordsSignal.set({row:0, col:0});
        expect(grid.activedescendant()).toBe('cell-X0');
      });

      it('should be undefined if no cell is active (e.g., invalid activeCoords), even in activedescendant mode', () => {
        const {grid, activeCoordsSignal} = setupGridPattern(simpleGridData, {row:0, col:0}, {
            focusMode: signal('activedescendant')
        });
        // grid.setDefaultState(); // Initializes to a valid state, e.g. {0,0}
        activeCoordsSignal.set({row: 99, col: 99}); // Set to out of bounds
        expect(grid.focusManager.activeCell()).toBeUndefined(); // Verify assumption
        expect(grid.activedescendant()).toBeUndefined();
      });

      it('should be undefined when grid input disabled is true, even in activedescendant mode', () => {
        const {grid} = setupGridPattern(simpleGridData, {row:0, col:0}, {
          focusMode: signal('activedescendant'),
          disabled: signal(true)
        });
        grid.setDefaultState();
        expect(grid.activedescendant()).toBeUndefined();
      });

      it('should be undefined if the active cell has no ID (mocked by overriding signal)', () => {
        const cellData: TestGridCellConfig[][] = [[{id: 'valid-id'}]];
        const {grid, cells, activeCoordsSignal} = setupGridPattern(cellData, {row:0, col:0}, {
          focusMode: signal('activedescendant')
        });
        // grid.setDefaultState(); // activeCoords is {0,0} by default if initialActiveCoords is not changed by setDefaultState

        const activeCell = cells[0][0]; // This is a TestGridCell
        activeCell.id.set(undefined as any as string); // Override the ID signal directly on the mock

        // Ensure the active cell is indeed the one we modified
        // This requires activeCoordsSignal to be set to this cell's coords if not already.
        activeCoordsSignal.set({row:0, col:0});


        expect(grid.activedescendant()).toBeUndefined();
      });
    });
  });
});

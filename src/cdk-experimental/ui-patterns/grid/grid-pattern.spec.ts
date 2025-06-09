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
  parentGridSignal: WritableSignal<MockGridPattern | undefined>, // Made Writable for setupGridPattern
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
  patternInputs: Partial<GridInputs> = {}, // Overrides for GridPattern's own inputs
): {
  grid: GridPattern;
  cells: TestGridCell[][];
  activeCoordsSignal: WritableSignal<RowCol>;
} {
  cellIdCounter = 0; // Reset ID counter for fresh IDs per setup
  const activeCoordsSignal = signal<RowCol>(initialActiveCoords);
  const parentGridSignal = signal<MockGridPattern | undefined>(undefined) as WritableSignal<
    MockGridPattern | undefined
  >;

  const cellsMatrix: TestGridCell[][] = gridCellConfig.map(rowConfig =>
    rowConfig.map(cellConfig => createTestCell(cellConfig, parentGridSignal)),
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

// --- Predefined Grid Data Structures (modeled after grid-navigation.spec.ts) ---

/**
 * GRID A Config: (gridAData)
 * ┌─────┬─────┬─────┐
 * │ 0,0 │ 0,1 │ 0,2 │
 * ├─────┼─────┼─────┤
 * │ 1,0 │ 1,1 │ 1,2 │
 * ├─────┼─────┼─────┤
 * │ 2,0 │ 2,1 │ 2,2 │
 * └─────┴─────┴─────┘
 */
const gridA: TestGridCellConfig[][] = [
  [{}, {}, {}],
  [{}, {}, {}],
  [{}, {}, {}],
];

/**
 * GRID B Config: (gridBData)
 * ┌─────┬─────┬─────┐
 * │ 0,0 │ 0,1 │ 0,2 │ (0,2 rowspan:2)
 * ├─────┼─────┤     │
 * │ 1,0 │ 1,1 │     │ (1,1 rowspan:2)
 * ├─────┤     ├─────┤
 * │ 2,0 │     │ 2,2 │ (2,0 rowspan:2)
 * │     ├─────┼─────┤
 * │     │ 3,1 │ 3,2 │
 * └─────┴─────┴─────┘
 */
const gridB: TestGridCellConfig[][] = [
  [{}, {}, {rowspan: 2}],
  [{}, {rowspan: 2}],
  [{rowspan: 2}, {}],
  [{}, {}],
];

/**
 * GRID C Config: (gridCData)
 * ┌───────────┬─────┬─────┐
 * │ 0,0       │ 0,2 │ 0,3 │ (0,0 colspan:2) - Note: grid-navigation.spec.ts IDs are 0,0 0,2 0,3
 * ├─────┬─────┴─────┼─────┤                   This means 0,1 is conceptually skipped for new cell defs.
 * │ 1,0 │ 1,1       │ 1,3 │ (1,1 colspan:2)
 * ├─────┼─────┬─────┴─────┤
 * │ 2,0 │ 2,1 │ 2,2       │ (2,2 colspan:2)
 * └─────┴─────┴───────────┘
 */
const gridC: TestGridCellConfig[][] = [
  [{colspan: 2}, {}, {}],
  [{}, {colspan: 2}, {}],
  [{}, {}, {colspan: 2}],
];

/**
 * GRID D Config: (gridDDataFinal) - Complex mix of row and colspans
 * From grid-navigation.spec.ts:
 * gridD.set([
 *   [createCell({rowspan: 2}), createCell({colspan: 2}), createCell()], // Row 0: (0,0)r2, (0,1)c2, (0,3)
 *   [createCell({rowspan: 2, colspan: 2}), createCell({rowspan: 2})],   // Row 1: (1,1)r2c2, (1,3)r2
 *   [createCell()],                                                      // Row 2: (2,0)
 *   [createCell(), createCell(), createCell({colspan: 2})],              // Row 3: (3,0), (3,1), (3,2)c2
 * ]);
 * Visual representation for `gridDDataFinal`:
 * ┌─────┬───────────┬─────┐
 * │ d00 │ d01       │ d03 │ (d00 rowspan:2; d01 colspan:2)
 * │ r2  ├───────────┼─────┤
 * │     │ d11       │ d13 │ (d11 rowspan:2, colspan:2; d13 rowspan:2)
 * ├─────┤ r2c2      │ r2  │
 * │ d20 │           │     │
 * ├─────┼─────┬─────┴─────┤
 * │ d30 │ d31 │ d32       │ (d32 colspan:2)
 * └─────┴─────┴───────────┘
 */
const gridD: TestGridCellConfig[][] = [
  [{id: 'd00', rowspan: 2}, {id: 'd01', colspan: 2}, {id: 'd03'}], // Row 0
  [
    {id: 'd11', rowspan: 2, colspan: 2},
    {id: 'd13', rowspan: 2},
  ], // Row 1
  [{id: 'd20'}], // Row 2
  [{id: 'd30'}, {id: 'd31'}, {id: 'd32', colspan: 2}], // Row 3
];

// Grid with a cell that initially traps navigation (using one of the above for simplicity)
const trapsNavGridData: TestGridCellConfig[][] = [
  // Example using a 2x2 structure
  [{id: 't-0-0'}, {id: 't-0-1'}],
  [{id: 't-1-0', trapsNavigation: true}, {id: 't-1-1'}],
];

describe('GridPattern (New Setup)', () => {
  describe('#setDefaultState', () => {
    it('should set activeCoords to the first cell {0,0} if it is focusable', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(gridA); // Use gridA
      // Ensure activeCoords is something else before the call
      activeCoordsSignal.set({row: -1, col: -1});
      grid.setDefaultState();
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
    });

    it('should set activeCoords to the first focusable cell if initial cells are disabled', () => {
      const data1 = [
        [{id: 'c00', disabled: true}, {id: 'c01'}],
        [{id: 'c10'}, {id: 'c11'}],
      ];
      const {grid: grid1, activeCoordsSignal: acs1} = setupGridPattern(data1);
      acs1.set({row: -1, col: -1});
      grid1.setDefaultState();
      expect(acs1()).toEqual({row: 0, col: 1});

      const data2 = [
        [{id: 'd00', disabled: true}, {id: 'd01', disabled: true}, {id: 'd02'}],
        [{id: 'd10'}, {id: 'd11'}, {id: 'd12'}],
      ];
      const {grid: grid2, activeCoordsSignal: acs2} = setupGridPattern(data2);
      acs2.set({row: -1, col: -1});
      grid2.setDefaultState();
      expect(acs2()).toEqual({row: 0, col: 2});
    });

    it('should set activeCoords to the first cell of the next focusable row if an entire row is disabled', () => {
      const data = [
        [
          {id: 'r0c0', disabled: true},
          {id: 'r0c1', disabled: true},
        ],
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
      const {grid, activeCoordsSignal} = setupGridPattern(
        allDisabledData,
        {row: 0, col: 0},
        {disabled: signal(false)},
      );
      activeCoordsSignal.set({row: -1, col: -1});
      grid.setDefaultState();
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(grid.disabled()).toBe(true);
    });
  });

  describe('Initial Properties (after setDefaultState)', () => {
    it('should have tabindex = 0 for default (roving) focus mode if not disabled', () => {
      const {grid} = setupGridPattern(
        gridA,
        {row: 0, col: 0},
        {
          // Use gridA
          focusMode: signal('roving'),
          disabled: signal(false),
        },
      );
      grid.setDefaultState();
      expect(grid.tabindex()).toBe(0);
    });

    it('should have tabindex = 0 for activedescendant focus mode if not disabled', () => {
      const {grid} = setupGridPattern(
        gridA,
        {row: 0, col: 0},
        {
          // Use gridA
          focusMode: signal('activedescendant'),
          disabled: signal(false),
        },
      );
      grid.setDefaultState();
      expect(grid.tabindex()).toBe(0);
    });

    it('should have tabindex = 0 when grid input disabled is true', () => {
      const {grid} = setupGridPattern(
        gridA,
        {row: 0, col: 0},
        {
          // Use gridA
          disabled: signal(true),
        },
      );
      grid.setDefaultState();
      expect(grid.tabindex()).toBe(0);
    });

    it('should have activedescendant undefined for roving focus mode', () => {
      const {grid} = setupGridPattern(gridA, {row: 0, col: 0}, {focusMode: signal('roving')}); // Use gridA
      grid.setDefaultState();
      expect(grid.activedescendant()).toBeUndefined();
    });

    it('should have activedescendant as the ID of the active cell for activedescendant mode', () => {
      const cellData: TestGridCellConfig[][] = [[{id: 'cell-X0'}, {id: 'cell-X1'}]];
      const {grid, activeCoordsSignal} = setupGridPattern(
        cellData,
        {row: 0, col: 0},
        {
          focusMode: signal('activedescendant'),
        },
      );
      grid.setDefaultState();
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(grid.activedescendant()).toBe('cell-X0');
    });

    it('should have activedescendant undefined if grid input disabled is true, even in activedescendant mode', () => {
      const {grid} = setupGridPattern(
        gridA,
        {row: 0, col: 0},
        {
          // Use gridA
          focusMode: signal('activedescendant'),
          disabled: signal(true),
        },
      );
      grid.setDefaultState();
      expect(grid.activedescendant()).toBeUndefined();
    });

    it('should be undefined if the active cell has no ID (mocked)', () => {
      const {grid, cells} = setupGridPattern(
        [[{id: 'id-1'}]],
        {row: 0, col: 0},
        {
          focusMode: signal('activedescendant'),
        },
      );
      grid.setDefaultState();

      const activeCell = grid.focusManager.activeCell();
      if (activeCell) {
        (activeCell as TestGridCell).id.set(undefined as any as string);
      }
      expect(grid.activedescendant()).toBeUndefined();
    });
  });

  describe('Keyboard Navigation (onKeydown)', () => {
    it('should navigate down on ArrowDown', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(gridA);
      grid.setDefaultState();
      const event = arrowDown();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'down').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.down).toHaveBeenCalled();
    });

    it('should navigate up on ArrowUp', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(gridA, {row: 1, col: 0});
      const event = arrowUp();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'up').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.up).toHaveBeenCalled();
    });

    it('should navigate right on ArrowRight (ltr, default orientation vertical means nav maps to right)', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(gridA);
      grid.setDefaultState();
      const event = arrowRight();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'right').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 1});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.right).toHaveBeenCalled();
    });

    it('should navigate left on ArrowLeft (ltr, default orientation vertical means nav maps to left)', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(gridA, {row: 0, col: 1});
      const event = arrowLeft();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'left').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.left).toHaveBeenCalled();
    });

    it('should navigate left on ArrowRight (rtl)', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(
        gridA,
        {row: 0, col: 0},
        {textDirection: signal('rtl')},
      );
      const event = arrowRight();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'left').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 2}); // gridAData is 3x3
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.left).toHaveBeenCalled();
    });

    it('should navigate right on ArrowLeft (rtl)', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(
        gridA,
        {row: 0, col: 1},
        {textDirection: signal('rtl')},
      );
      const event = arrowLeft();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'right').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.right).toHaveBeenCalled();
    });

    it('should navigate to first cell in row on Home', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(gridA, {row: 1, col: 2});
      const event = home();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'gotoCell').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.gotoCell).toHaveBeenCalledWith(cells[1][0]);
    });

    it('should navigate to first cell in grid on Ctrl+Home', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(gridA, {row: 1, col: 2});
      const event = home({control: true});
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'gotoCell').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 0, col: 0});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.gotoCell).toHaveBeenCalledWith(cells[0][0]);
    });

    it('should navigate to last cell in row on End', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(gridA, {row: 1, col: 0});
      const event = end();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'gotoCell').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 2}); // gridAData is 3x3
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.gotoCell).toHaveBeenCalledWith(cells[1][2]);
    });

    it('should navigate to last cell in grid on Ctrl+End', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(gridA, {row: 0, col: 0});
      const event = end({control: true});
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'gotoCell').and.callThrough();

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 2, col: 2});
      expect(event.preventDefault).toHaveBeenCalled();
      expect(grid.navigation.gotoCell).toHaveBeenCalledWith(cells[2][2]);
    });

    it('should not navigate if active cell trapsNavigation', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(trapsNavGridData, {row: 1, col: 0});

      const event = arrowDown();
      spyOn(event, 'preventDefault');
      spyOn(grid.navigation, 'down');

      grid.onKeydown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0});
      expect(event.preventDefault).not.toHaveBeenCalled();
      expect(grid.navigation.down).not.toHaveBeenCalled();
    });

    it('should navigate in readonly mode', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(
        gridA,
        {row: 0, col: 0},
        {readonly: signal(true)},
      );
      grid.onKeydown(arrowDown());
      expect(activeCoordsSignal()).toEqual({row: 1, col: 0});
    });

    it('should not navigate when grid is disabled', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(
        gridA,
        {row: 0, col: 0},
        {disabled: signal(true)},
      );
      const initialCoords = {row: 0, col: 0};
      spyOn(grid.navigation, 'down');

      grid.onKeydown(arrowDown());
      expect(activeCoordsSignal()).toEqual(initialCoords);
      expect(grid.navigation.down).not.toHaveBeenCalled();
    });
  });

  describe('Pointer Interaction (onPointerdown)', () => {
    it('should set activeCoords to the clicked cell', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(gridA);
      grid.setDefaultState();

      const targetCell = cells[1][1];
      const event = pointerDownEvent(targetCell.element());

      spyOn(grid.navigation, 'gotoCell').and.callThrough();

      grid.onPointerdown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 1});
      expect(grid.navigation.gotoCell).toHaveBeenCalledWith(targetCell);
    });

    it('should allow focusing cell when readonly', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(
        gridA,
        {row: 0, col: 0},
        {readonly: signal(true)},
      );
      grid.setDefaultState();

      const targetCell = cells[1][2];
      const event = pointerDownEvent(targetCell.element());
      spyOn(grid.navigation, 'gotoCell').and.callThrough();

      grid.onPointerdown(event);
      expect(activeCoordsSignal()).toEqual({row: 1, col: 2});
      expect(grid.navigation.gotoCell).toHaveBeenCalledWith(targetCell);
    });

    it('should do nothing if the grid is disabled', () => {
      const {grid, cells, activeCoordsSignal} = setupGridPattern(
        gridA,
        {row: 0, col: 0},
        {disabled: signal(true)},
      );
      grid.setDefaultState();
      const initialCoords = {row: 0, col: 0};

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
        [{id: 'disabled-cell', disabled: true}, {}],
      ];
      const {grid, cells, activeCoordsSignal} = setupGridPattern(cellDataWithDisabled);
      grid.setDefaultState();
      const initialCoords = {row: 0, col: 0};

      const disabledCell = cells[1][0];
      const event = pointerDownEvent(disabledCell.element());
      spyOn(grid.navigation, 'gotoCell');

      grid.onPointerdown(event);
      expect(activeCoordsSignal()).toEqual(initialCoords);
      expect(grid.navigation.gotoCell).not.toHaveBeenCalled();
    });

    it('should do nothing if click target is not a cell element', () => {
      const {grid, activeCoordsSignal} = setupGridPattern(gridA);
      grid.setDefaultState();
      const initialCoords = {row: 0, col: 0};

      const nonCellElement = document.createElement('div');
      const event = pointerDownEvent(nonCellElement);
      spyOn(grid.navigation, 'gotoCell');

      grid.onPointerdown(event);
      expect(activeCoordsSignal()).toEqual(initialCoords);
      expect(grid.navigation.gotoCell).not.toHaveBeenCalled();
    });
  });

  describe('Computed Properties (New Setup)', () => {
    describe('tabindex', () => {
      it('should be 0 for roving focus mode when not disabled', () => {
        const {grid} = setupGridPattern(
          gridA,
          {row: 0, col: 0},
          {
            focusMode: signal('roving'),
            disabled: signal(false),
          },
        );
        grid.setDefaultState();
        expect(grid.tabindex()).toBe(0);
      });

      it('should be 0 for activedescendant focus mode when not disabled', () => {
        const {grid} = setupGridPattern(
          gridA,
          {row: 0, col: 0},
          {
            focusMode: signal('activedescendant'),
            disabled: signal(false),
          },
        );
        grid.setDefaultState();
        expect(grid.tabindex()).toBe(0);
      });

      it('should be 0 when grid input disabled is true (roving)', () => {
        const {grid} = setupGridPattern(
          gridA,
          {row: 0, col: 0},
          {
            focusMode: signal('roving'),
            disabled: signal(true),
          },
        );
        grid.setDefaultState();
        expect(grid.tabindex()).toBe(0);
      });

      it('should be 0 when grid input disabled is true (activedescendant)', () => {
        const {grid} = setupGridPattern(
          gridA,
          {row: 0, col: 0},
          {
            focusMode: signal('activedescendant'),
            disabled: signal(true),
          },
        );
        grid.setDefaultState();
        expect(grid.tabindex()).toBe(0);
      });
    });

    describe('activedescendant', () => {
      it('should be undefined for roving focus mode', () => {
        const {grid} = setupGridPattern(
          gridA,
          {row: 0, col: 0},
          {
            focusMode: signal('roving'),
          },
        );
        grid.setDefaultState();
        expect(grid.activedescendant()).toBeUndefined();
      });

      it('should be the ID of the active cell for activedescendant focus mode', () => {
        const cellData: TestGridCellConfig[][] = [[{id: 'cell-X0'}, {id: 'cell-X1'}]];
        const {grid, activeCoordsSignal} = setupGridPattern(
          cellData,
          {row: 0, col: 1},
          {
            // Start on cell-X1
            focusMode: signal('activedescendant'),
          },
        );

        expect(activeCoordsSignal()).toEqual({row: 0, col: 1});
        expect(grid.activedescendant()).toBe('cell-X1');

        activeCoordsSignal.set({row: 0, col: 0});
        expect(grid.activedescendant()).toBe('cell-X0');
      });

      it('should be undefined if no cell is active (e.g., invalid activeCoords), even in activedescendant mode', () => {
        const {grid, activeCoordsSignal} = setupGridPattern(
          gridA,
          {row: 0, col: 0},
          {
            focusMode: signal('activedescendant'),
          },
        );
        activeCoordsSignal.set({row: 99, col: 99});
        expect(grid.focusManager.activeCell()).toBeUndefined();
        expect(grid.activedescendant()).toBeUndefined();
      });

      it('should be undefined when grid input disabled is true, even in activedescendant mode', () => {
        const {grid} = setupGridPattern(
          gridA,
          {row: 0, col: 0},
          {
            focusMode: signal('activedescendant'),
            disabled: signal(true),
          },
        );
        grid.setDefaultState();
        expect(grid.activedescendant()).toBeUndefined();
      });

      it('should be undefined if the active cell has no ID (mocked by overriding signal)', () => {
        const cellData: TestGridCellConfig[][] = [[{id: 'valid-id'}]];
        const {grid, cells, activeCoordsSignal} = setupGridPattern(
          cellData,
          {row: 0, col: 0},
          {
            focusMode: signal('activedescendant'),
          },
        );

        const activeCell = cells[0][0];
        activeCell.id.set(undefined as any as string);

        activeCoordsSignal.set({row: 0, col: 0});

        expect(grid.activedescendant()).toBeUndefined();
      });
    });
  });
});

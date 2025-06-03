/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {computed, signal, WritableSignal, Signal} from '@angular/core';
import {GridFocus} from '../grid-focus/grid-focus';
import {GridNavigation, GridNavigationCell, GridNavigationInputs} from './grid-navigation';

interface TestCell extends GridNavigationCell {
  disabled: WritableSignal<boolean>;
  rowspan: WritableSignal<number>;
  colspan: WritableSignal<number>;
}

type TestGridNavInputs = Partial<GridNavigationInputs<TestCell>> & {
  numRows: number;
  numCols: number;
};

type TestGridNav = GridNavigation<TestCell>;

function createCell(gridFocus: Signal<GridFocus<any> | undefined>, config: any = {}): TestCell {
  const element = document.createElement('div');
  spyOn(element, 'focus').and.callThrough();

  const cell: TestCell = {
    id: signal(`cell-${config.row}-${config.col}`),
    element: signal(element),
    disabled: signal(false),
    rowspan: signal(1),
    colspan: signal(1),
    rowindex: signal(0),
    colindex: signal(0),
    ...config,
  };

  const coordinates = computed(() => gridFocus()?.getCoordinates(cell) ?? {row: -1, col: -1});
  cell.rowindex = computed(() => coordinates().row);
  cell.colindex = computed(() => coordinates().col);

  return cell;
}

export function createCells(
  gridFocus: Signal<GridFocus<TestCell> | undefined>,
  config: any,
): WritableSignal<TestCell[][]> {
  return signal(
    Array.from({length: config.numRows}).map((_, r) =>
      Array.from({length: config.numCols}).map((_, c) => {
        return createCell(gridFocus, {id: `cell-${r}-${c}`});
      }),
    ),
  );
}

function createGridNav(
  config: TestGridNavInputs = {
    numRows: 3,
    numCols: 3,
  },
): {
  gridNav: TestGridNav;
  cells: Signal<TestCell[][]>;
} {
  const gridFocusSignal = signal<GridFocus<any> | undefined>(undefined);
  const cells = createCells(gridFocusSignal, config);

  const wrap = signal(true);
  const disabled = signal(false);
  const skipDisabled = signal(false);
  const focusMode = signal('roving' as const);
  const activeCoords = signal({row: 0, col: 0});
  const wrapBehavior = signal('continuous' as const);

  const gridFocus = new GridFocus<TestCell>({
    cells,
    disabled,
    focusMode,
    activeCoords,
    skipDisabled,
    ...config,
  });

  const gridNav = new GridNavigation<TestCell>({
    wrap,
    cells,
    disabled,
    gridFocus,
    focusMode,
    activeCoords,
    skipDisabled,
    wrapBehavior,
    ...config,
  });

  gridFocusSignal.set(gridFocus);
  return {gridNav, cells};
}

describe('GridNavigation', () => {
  describe('basic navigation', () => {
    it('should navigate up when `up()` is called', () => {
      const {gridNav, cells} = createGridNav({numRows: 3, numCols: 3});
      gridNav.inputs.activeCoords.set({row: 1, col: 1});
      gridNav.up();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 1});
      expect(cells()[0][1].element().focus).toHaveBeenCalled();
    });

    it('should navigate down when `down()` is called', () => {
      const {gridNav, cells} = createGridNav({numRows: 3, numCols: 3});
      gridNav.inputs.activeCoords.set({row: 1, col: 1});
      gridNav.down();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 2, col: 1});
      expect(cells()[2][1].element().focus).toHaveBeenCalled();
    });

    it('should navigate left when `left()` is called', () => {
      const {gridNav, cells} = createGridNav({numRows: 3, numCols: 3});
      gridNav.inputs.activeCoords.set({row: 1, col: 1});
      gridNav.left();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 1, col: 0});
      expect(cells()[1][0].element().focus).toHaveBeenCalled();
    });

    it('should navigate right when `right()` is called', () => {
      const {gridNav, cells} = createGridNav({numRows: 3, numCols: 3});
      gridNav.inputs.activeCoords.set({row: 1, col: 1});
      gridNav.right();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 1, col: 2});
      expect(cells()[1][2].element().focus).toHaveBeenCalled();
    });
  });

  describe('wrapping behavior', () => {
    it('should wrap continuously when `wrap` is `true` and `wrapBehavior` is `"continuous"`', () => {
      const {gridNav, cells} = createGridNav({
        numRows: 3,
        numCols: 3,
        wrap: signal(true),
        wrapBehavior: signal('continuous'),
      });

      // Test wrapping up
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      gridNav.up();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 2, col: 0});
      expect(cells()[2][0].element().focus).toHaveBeenCalled();

      // Test wrapping left
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      gridNav.left();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 2, col: 2});
      expect(cells()[2][2].element().focus).toHaveBeenCalled();

      // Test wrapping down
      gridNav.inputs.activeCoords.set({row: 2, col: 2});
      gridNav.down();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 2});
      expect(cells()[0][2].element().focus).toHaveBeenCalled();

      // Test wrapping right
      gridNav.inputs.activeCoords.set({row: 2, col: 2});
      gridNav.right();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0});
      expect(cells()[0][0].element().focus).toHaveBeenCalled();
    });

    it('should loop when `wrap` is `true` and `wrapBehavior` is `"loop"`', () => {
      const {gridNav, cells} = createGridNav({
        numRows: 3,
        numCols: 3,
        wrap: signal(true),
        wrapBehavior: signal('loop'),
      });

      // Test wrapping up
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      gridNav.up();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 2, col: 0});
      expect(cells()[2][0].element().focus).toHaveBeenCalled();

      // Test wrapping left
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      gridNav.left();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 2});
      expect(cells()[0][2].element().focus).toHaveBeenCalled();

      // Test wrapping down
      gridNav.inputs.activeCoords.set({row: 2, col: 2});
      gridNav.down();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 2});
      expect(cells()[0][2].element().focus).toHaveBeenCalled();

      // Test wrapping right
      gridNav.inputs.activeCoords.set({row: 2, col: 2});
      gridNav.right();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 2, col: 0});
      expect(cells()[2][0].element().focus).toHaveBeenCalled();
    });

    it('should not wrap when `wrap` is `false`', () => {
      const {gridNav, cells} = createGridNav({
        numRows: 3,
        numCols: 3,
        wrap: signal(false),
      });

      // Test navigating up from the top edge
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      gridNav.up();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0});
      expect(cells()[0][0].element().focus).not.toHaveBeenCalled();

      // Test navigating left from the left edge
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      // Reset the spy since it was called in the previous assertion
      (cells()[0][0].element().focus as jasmine.Spy).calls.reset();
      gridNav.left();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0});
      expect(cells()[0][0].element().focus).not.toHaveBeenCalled();

      // Test navigating down from the bottom edge
      gridNav.inputs.activeCoords.set({row: 2, col: 2});
      gridNav.down();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 2, col: 2});
      expect(cells()[2][2].element().focus).not.toHaveBeenCalled();

      // Test navigating right from the right edge
      gridNav.inputs.activeCoords.set({row: 2, col: 2});
      // Reset the spy since it was called in the previous assertion
      (cells()[2][2].element().focus as jasmine.Spy).calls.reset();
      gridNav.right();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 2, col: 2});
      expect(cells()[2][2].element().focus).not.toHaveBeenCalled();
    });
  });

  describe('disabled cell handling', () => {
    it('should skip disabled cells when `skipDisabled` is `true`', () => {
      const {gridNav, cells} = createGridNav({
        numRows: 3,
        numCols: 3,
        skipDisabled: signal(true),
      });

      // Disable cell (0, 1) and (1,0)
      cells()[0][1].disabled.set(true);
      cells()[1][0].disabled.set(true);

      // Test navigating up past disabled cell
      gridNav.inputs.activeCoords.set({row: 1, col: 1});
      gridNav.up(); // Would go to (0,1) but it is disabled
      expect(gridNav.inputs.activeCoords()).toEqual({row: 2, col: 1}); // Active coords should update to the next available cell
      expect(cells()[0][1].element().focus).not.toHaveBeenCalled(); // Focus should not be called on disabled
      expect(cells()[2][1].element().focus).toHaveBeenCalled();


      // Test navigating left past disabled cell
      gridNav.inputs.activeCoords.set({row: 1, col: 1});
      // Reset the spy since it was called in the previous assertion
      (cells()[2][1].element().focus as jasmine.Spy).calls.reset();
      gridNav.left(); // Would go to (1,0) but it is disabled
      expect(gridNav.inputs.activeCoords()).toEqual({row: 1, col: 2}); // Active coords should update to the next available cell
      expect(cells()[1][0].element().focus).not.toHaveBeenCalled(); // Focus should not be called on disabled
      expect(cells()[1][2].element().focus).toHaveBeenCalled();
    });

    it('should not skip disabled cells when `skipDisabled` is `false`', () => {
      const {gridNav, cells} = createGridNav({
        numRows: 3,
        numCols: 3,
        skipDisabled: signal(false),
      });

      // Disable cell (0, 1) and (1,0)
      cells()[0][1].disabled.set(true);
      cells()[1][0].disabled.set(true);

      // Test navigating up to disabled cell
      gridNav.inputs.activeCoords.set({row: 1, col: 1});
      gridNav.up(); // Would go to (0,1) which is disabled
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 1}); // Active coords should update
      expect(cells()[0][1].element().focus).not.toHaveBeenCalled(); // Focus should not be called on disabled cell
      // No other cell should be focused
      expect(cells()[1][1].element().focus).not.toHaveBeenCalled();


      // Test navigating left to disabled cell
      gridNav.inputs.activeCoords.set({row: 1, col: 1});
      gridNav.left(); // Would go to (1,0) which is disabled
      expect(gridNav.inputs.activeCoords()).toEqual({row: 1, col: 0}); // Active coords should update
      expect(cells()[1][0].element().focus).not.toHaveBeenCalled(); // Focus should not be called on disabled cell
      // No other cell should be focused
      expect(cells()[1][1].element().focus).not.toHaveBeenCalled();
    });
  });

  describe('colspan and rowspan functionality', () => {
    it('should navigate correctly with `colspan` values', () => {
      const {gridNav, cells} = createGridNav({
        numRows: 3,
        numCols: 3,
      });

      // Set cell (0,0) to have colspan 2
      cells()[0][0].colspan.set(2);

      // Navigate from (0,0) right, should go to (0,2) because (0,0) spans over (0,1)
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      gridNav.right();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 2});
      expect(cells()[0][2].element().focus).toHaveBeenCalled();

      // Navigate from (0,2) left, should go to (0,0)
      gridNav.inputs.activeCoords.set({row: 0, col: 2});
      (cells()[0][2].element().focus as jasmine.Spy).calls.reset();
      gridNav.left();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0});
      expect(cells()[0][0].element().focus).toHaveBeenCalled();

      // Navigate from (1,0) up, should go to (0,0)
      gridNav.inputs.activeCoords.set({row: 1, col: 0});
      (cells()[0][0].element().focus as jasmine.Spy).calls.reset();
      gridNav.up();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0});
      expect(cells()[0][0].element().focus).toHaveBeenCalled();

      // Navigate from (1,1) up, should go to (0,0) (as (0,1) is covered by (0,0))
      gridNav.inputs.activeCoords.set({row: 1, col: 1});
      (cells()[0][0].element().focus as jasmine.Spy).calls.reset();
      gridNav.up();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0});
      expect(cells()[0][0].element().focus).toHaveBeenCalled();
    });

    it('should navigate correctly with `rowspan` values', () => {
      const {gridNav, cells} = createGridNav({
        numRows: 3,
        numCols: 3,
      });

      // Set cell (0,0) to have rowspan 2
      cells()[0][0].rowspan.set(2);

      // Navigate from (0,0) down, should go to (2,0) because (0,0) spans over (1,0)
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      gridNav.down();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 2, col: 0});
      expect(cells()[2][0].element().focus).toHaveBeenCalled();

      // Navigate from (2,0) up, should go to (0,0)
      gridNav.inputs.activeCoords.set({row: 2, col: 0});
      (cells()[2][0].element().focus as jasmine.Spy).calls.reset();
      gridNav.up();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0});
      expect(cells()[0][0].element().focus).toHaveBeenCalled();

      // Navigate from (0,1) left, should go to (0,0)
      gridNav.inputs.activeCoords.set({row: 0, col: 1});
      (cells()[0][0].element().focus as jasmine.Spy).calls.reset();
      gridNav.left();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0});
      expect(cells()[0][0].element().focus).toHaveBeenCalled();

      // Navigate from (1,1) left, should go to (0,0) (as (1,0) is covered by (0,0))
      gridNav.inputs.activeCoords.set({row: 1, col: 1});
      (cells()[0][0].element().focus as jasmine.Spy).calls.reset();
      gridNav.left();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0});
      expect(cells()[0][0].element().focus).toHaveBeenCalled();
    });

    it('should navigate correctly with combined `colspan` and `rowspan` values', () => {
      const {gridNav, cells} = createGridNav({
        numRows: 4,
        numCols: 4,
      });

      // Set cell (0,0) to have colspan 2 and rowspan 2
      cells()[0][0].colspan.set(2);
      cells()[0][0].rowspan.set(2);

      // Navigate from (0,0) right, should go to (0,2)
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      gridNav.right();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 2});
      expect(cells()[0][2].element().focus).toHaveBeenCalled();

      // Navigate from (0,0) down, should go to (2,0)
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      (cells()[0][2].element().focus as jasmine.Spy).calls.reset(); // reset from previous navigation
      gridNav.down();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 2, col: 0});
      expect(cells()[2][0].element().focus).toHaveBeenCalled();

      // Navigate from (0,2) left, should go to (0,0)
      gridNav.inputs.activeCoords.set({row: 0, col: 2});
      (cells()[2][0].element().focus as jasmine.Spy).calls.reset();
      gridNav.left();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0});
      expect(cells()[0][0].element().focus).toHaveBeenCalled();

      // Navigate from (2,0) up, should go to (0,0)
      gridNav.inputs.activeCoords.set({row: 2, col: 0});
      (cells()[0][0].element().focus as jasmine.Spy).calls.reset();
      gridNav.up();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0});
      expect(cells()[0][0].element().focus).toHaveBeenCalled();

      // Navigate from (1,1) (covered by 0,0), then right -> (0,2)
      gridNav.inputs.activeCoords.set({row: 1, col: 1});
      (cells()[0][0].element().focus as jasmine.Spy).calls.reset();
      gridNav.right();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 2});
      expect(cells()[0][2].element().focus).toHaveBeenCalled();


      // Navigate from (1,1) (covered by 0,0), then down -> (2,0)
      gridNav.inputs.activeCoords.set({row: 1, col: 1});
      (cells()[0][2].element().focus as jasmine.Spy).calls.reset();
      gridNav.down();
      expect(gridNav.inputs.activeCoords()).toEqual({row: 2, col: 0});
      expect(cells()[2][0].element().focus).toHaveBeenCalled();
    });
  });

  describe('`gotoCell()` and `gotoCoords()` methods', () => {
    it('`gotoCell()`: Should navigate to the specified cell', () => {
      const {gridNav, cells} = createGridNav({numRows: 3, numCols: 3});
      const targetCell = cells()[1][2];
      gridNav.gotoCell(targetCell);
      expect(gridNav.inputs.activeCoords()).toEqual({row: 1, col: 2});
      expect(targetCell.element().focus).toHaveBeenCalled();
    });

    it('`gotoCell()`: Should not navigate if the cell is undefined', () => {
      const {gridNav, cells} = createGridNav({numRows: 3, numCols: 3});
      const initialActive = cells()[0][0];
      gridNav.inputs.activeCoords.set({row: 0, col: 0}); // Ensure initial focus
      initialActive.element().focus(); // Simulate initial focus

      gridNav.gotoCell(undefined as any);
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0});
      // Ensure focus was not called again on the initial cell beyond the initial setup
      expect(initialActive.element().focus).toHaveBeenCalledTimes(1);
    });

    it('`gotoCell()`: Should not navigate if the cell is disabled and `skipDisabled` is `false`', () => {
      const {gridNav, cells} = createGridNav({
        numRows: 3,
        numCols: 3,
        skipDisabled: signal(false),
      });
      const targetCell = cells()[1][1];
      targetCell.disabled.set(true);

      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      cells()[0][0].element().focus(); // Initial focus

      gridNav.gotoCell(targetCell);
      // activeCoords will update because GridFocus updates it, but focus will not happen.
      expect(gridNav.inputs.activeCoords()).toEqual({row: 1, col: 1});
      expect(targetCell.element().focus).not.toHaveBeenCalled();
      expect(cells()[0][0].element().focus).toHaveBeenCalledTimes(1); // Original cell still "focused"
    });

    it('`gotoCell()`: Should navigate and focus next available if cell is disabled and `skipDisabled` is `true`', () => {
      const {gridNav, cells} = createGridNav({
        numRows: 3,
        numCols: 3,
        skipDisabled: signal(true),
        wrap: signal(false), // To make next available predictable without wrapping
      });
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      cells()[0][0].element().focus();


      const disabledCell = cells()[0][1];
      disabledCell.disabled.set(true);

      const nextAvailableCell = cells()[0][2]; // Assuming LTR reading for "next"

      gridNav.gotoCell(disabledCell);
      // Active coords are set to the disabled cell by GridFocus, as per GridFocus behavior.
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 1});
      // Focus should not be on the disabled cell itself.
      expect(disabledCell.element().focus).not.toHaveBeenCalled();
      // GridFocus.focusCell with skipDisabled will move focus to the next available cell.
      expect(nextAvailableCell.element().focus).toHaveBeenCalled();
    });

    it('`gotoCoords()`: Should navigate to the cell at the specified coordinates', () => {
      const {gridNav, cells} = createGridNav({numRows: 3, numCols: 3});
      gridNav.gotoCoords({row: 1, col: 2});
      expect(gridNav.inputs.activeCoords()).toEqual({row: 1, col: 2});
      expect(cells()[1][2].element().focus).toHaveBeenCalled();
    });

    it('`gotoCoords()`: Should not navigate if coordinates are out of bounds', () => {
      const {gridNav, cells} = createGridNav({numRows: 3, numCols: 3});
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      cells()[0][0].element().focus(); // Simulate initial focus

      gridNav.gotoCoords({row: 5, col: 5});
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 0}); // Should remain unchanged
      expect(cells()[0][0].element().focus).toHaveBeenCalledTimes(1); // No new focus calls
    });

    it('`gotoCoords()`: Should not navigate if cell at coords is disabled and `skipDisabled` is `false`', () => {
      const {gridNav, cells} = createGridNav({
        numRows: 3,
        numCols: 3,
        skipDisabled: signal(false),
      });
      cells()[1][1].disabled.set(true);
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      cells()[0][0].element().focus(); // Initial focus

      gridNav.gotoCoords({row: 1, col: 1});
      // activeCoords will update by GridFocus, but focus will not occur on the disabled cell.
      expect(gridNav.inputs.activeCoords()).toEqual({row: 1, col: 1});
      expect(cells()[1][1].element().focus).not.toHaveBeenCalled();
      expect(cells()[0][0].element().focus).toHaveBeenCalledTimes(1);
    });

    it('`gotoCoords()`: Should navigate and focus next available if cell at coords is disabled and `skipDisabled` is `true`', () => {
      const {gridNav, cells} = createGridNav({
        numRows: 3,
        numCols: 3,
        skipDisabled: signal(true),
        wrap: signal(false), // For predictable "next available"
      });
      gridNav.inputs.activeCoords.set({row: 0, col: 0});
      cells()[0][0].element().focus(); // Initial focus

      cells()[0][1].disabled.set(true);
      const nextAvailableCell = cells()[0][2];

      gridNav.gotoCoords({row: 0, col: 1});
      // activeCoords will be set to the target disabled cell by GridFocus.
      expect(gridNav.inputs.activeCoords()).toEqual({row: 0, col: 1});
      // Focus should not be on the disabled cell itself.
      expect(cells()[0][1].element().focus).not.toHaveBeenCalled();
      // GridFocus.focusCell with skipDisabled will move focus to the next available cell.
      expect(nextAvailableCell.element().focus).toHaveBeenCalled();
    });
  });
});

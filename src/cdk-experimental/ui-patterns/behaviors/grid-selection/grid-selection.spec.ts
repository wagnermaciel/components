/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {computed, signal, WritableSignal} from '@angular/core';
import {GridFocus} from '../grid-focus/grid-focus';
import {GridSelection, GridSelectionCell, GridSelectionInputs} from './grid-selection';

type TestGridSelection = GridSelection<TestCell, string>;

interface TestCell extends GridSelectionCell<string> {
  disabled: WritableSignal<boolean>;
}

interface TestCellInputs {
  rowspan?: number;
  colspan?: number;
}

function createCell(config?: TestCellInputs): TestCell {
  const element = document.createElement('div');
  spyOn(element, 'focus').and.callThrough();

  return {
    id: signal(''),
    value: signal(''),
    rowindex: signal(0),
    colindex: signal(0),
    disabled: signal(false),
    element: signal(element),
    rowspan: signal(config?.rowspan ?? 1),
    colspan: signal(config?.colspan ?? 1),
  };
}

type TestGridSelectionInputs = Partial<GridSelectionInputs<TestCell, string>> &
  Pick<GridSelectionInputs<TestCell, string>, 'cells'>;

function createGridSelection(config: TestGridSelectionInputs): {
  gridSelection: TestGridSelection;
  cells: TestCell[][];
} {
  const value = signal([]);
  const multi = signal(true);
  const disabled = signal(false);
  const skipDisabled = signal(false);
  const focusMode = signal('roving' as const);
  const activeCoords = signal({row: 0, col: 0});
  const selectionMode = signal('explicit' as const);

  const gridFocus = new GridFocus<TestCell>({
    disabled,
    focusMode,
    activeCoords,
    skipDisabled,
    ...config,
  });

  const gridSelection = new GridSelection<TestCell, string>({
    value,
    multi,
    disabled,
    focusMode,
    activeCoords,
    skipDisabled,
    selectionMode,
    focusManager: gridFocus,
    ...config,
  });

  for (const row of config.cells()) {
    for (const cell of row) {
      const coordinates = computed(() => gridFocus.getCoordinates(cell) ?? {row: -1, col: -1});
      cell.rowindex = computed(() => coordinates().row);
      cell.colindex = computed(() => coordinates().col);
      cell.value = computed(() => `(${cell.rowindex()},${cell.colindex()})`);
    }
  }

  return {gridSelection, cells: config.cells()};
}

describe('GridSelection', () => {
  /**
   * GRID A:
   * ┌─────┬─────┬─────┐
   * │ 0,0 │ 0,1 │ 0,2 │
   * ├─────┼─────┼─────┤
   * │ 1,0 │ 1,1 │ 1,2 │
   * ├─────┼─────┼─────┤
   * │ 2,0 │ 2,1 │ 2,2 │
   * └─────┴─────┴─────┘
   */
  let gridA = signal<TestCell[][]>([]);

  /**
   * GRID B:
   * ┌─────┬─────┬─────┐
   * │ 0,0 │ 0,1 │ 0,2 │
   * ├─────┼─────┤     │
   * │ 1,0 │ 1,1 │     │
   * ├─────┤     ├─────┤
   * │ 2,0 │     │ 2,2 │
   * │     ├─────┼─────┤
   * │     │ 3,1 │ 3,2 │
   * └─────┴─────┴─────┘
   */
  let gridB = signal<TestCell[][]>([]);

  /**
   * GRID C:
   * ┌───────────┬─────┬─────┐
   * │ 0,0       │ 0,2 │ 0,3 │
   * ├─────┬─────┴─────┼─────┤
   * │ 1,0 │ 1,1       │ 1,3 │
   * ├─────┼─────┬─────┴─────┤
   * │ 2,0 │ 2,1 │ 2,2       │
   * └─────┴─────┴───────────┘
   */
  let gridC = signal<TestCell[][]>([]);

  /**
   * GRID D:
   * ┌─────┬───────────┬─────┐
   * │ 0,0 │ 0,1       │ 0,3 │
   * │     ├───────────┼─────┤
   * │     │ 1,1       │ 1,3 │
   * ├─────┤           │     │
   * │ 2,0 │           │     │
   * ├─────┼─────┬─────┴─────┤
   * │ 3,0 │ 3,1 │ 3,2       │
   * └─────┴─────┴───────────┘
   */
  let gridD = signal<TestCell[][]>([]);

  beforeEach(() => {
    gridA.set([
      [createCell(), createCell(), createCell()],
      [createCell(), createCell(), createCell()],
      [createCell(), createCell(), createCell()],
    ]);

    gridB.set([
      [createCell(), createCell(), createCell({rowspan: 2})],
      [createCell(), createCell({rowspan: 2})],
      [createCell({rowspan: 2}), createCell()],
      [createCell(), createCell()],
    ]);

    gridC.set([
      [createCell({colspan: 2}), createCell(), createCell()],
      [createCell(), createCell({colspan: 2}), createCell()],
      [createCell(), createCell(), createCell({colspan: 2})],
    ]);

    gridD.set([
      [createCell({rowspan: 2}), createCell({colspan: 2}), createCell()],
      [createCell({rowspan: 2, colspan: 2}), createCell({rowspan: 2})],
      [createCell()],
      [createCell(), createCell(), createCell({colspan: 2})],
    ]);
  });

  describe('select()', () => {});
  describe('deselect()', () => {});
  describe('toggle()', () => {});
  describe('selectOne()', () => {});
  describe('toggleOne()', () => {});
  describe('selectAll()', () => {});
  describe('deselectAll()', () => {});
  describe('toggleAll()', () => {});
});

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

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {signal} from '@angular/core';

let count = 0;

/** A tabpanel associated with a tab. */
export class Tabpanel {
  /** A unique identifier for the tabpanel. */
  id = signal(`${count++}`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {join, Path} from '@angular-devkit/core';
import {Tree} from '@angular-devkit/schematics';

/** Regular expression that matches stylesheet paths */
const STYLESHEET_REGEX = /.*\.(css|scss)/;

/** Regular expression that matches html paths */
const HTML_REGEX = /.*\.(html)/;

/** Regular expression that matches ts paths */
const TYPESCRIPT_REGEX = /.*\.(ts)/;

/**
 * Finds files in the given directory from within the specified tree using the given regex.
 * @param tree Devkit tree where files can be found.
 * @param regex The regex used to match files.
 * @param startDirectory Optional start directory where files should be searched in.
 *   This can be useful if only files within a given folder are relevant (to avoid unnecessary
 *   iterations).
 */
export function findFiles(tree: Tree, regex: RegExp, startDirectory: string = '/'): string[] {
  const result: string[] = [];
  const visitDir = (dirPath: Path) => {
    const {subfiles, subdirs} = tree.getDir(dirPath);

    subfiles.forEach(fileName => {
      if (regex.test(fileName)) {
        result.push(join(dirPath, fileName));
      }
    });

    // Visit directories within the current directory to find other stylesheets.
    subdirs.forEach(fragment => {
      // Do not visit directories or files inside node modules or `dist/` folders.
      if (fragment !== 'node_modules' && fragment !== 'dist') {
        visitDir(join(dirPath, fragment));
      }
    });
  };
  visitDir(startDirectory as Path);
  return result;
}

/**
 * Finds stylesheets in the given directory from within the specified tree.
 * @param tree Devkit tree where stylesheet files can be found in.
 * @param startDirectory Optional start directory where stylesheets should be searched in.
 *   This can be useful if only stylesheets within a given folder are relevant (to avoid
 *   unnecessary iterations).
 */
 export function findStylesheetFiles(tree: Tree, startDirectory: string = '/'): string[] {
  return findFiles(tree, STYLESHEET_REGEX, startDirectory);
}

/**
 * Finds html files in the given directory from within the specified tree.
 * @param tree Devkit tree where html files can be found in.
 * @param startDirectory Optional start directory where html files should be searched in.
 *   This can be useful if only html files within a given folder are relevant (to avoid
 *   unnecessary iterations).
 */
 export function findHTMLFiles(tree: Tree, startDirectory: string = '/'): string[] {
  return findFiles(tree, HTML_REGEX, startDirectory);
}

/**
 * Finds typescript files in the given directory from within the specified tree.
 * @param tree Devkit tree where ts files can be found in.
 * @param startDirectory Optional start directory where ts files should be searched in.
 *   This can be useful if only ts files within a given folder are relevant (to avoid
 *   unnecessary iterations).
 */
 export function findTypeScriptFiles(tree: Tree, startDirectory: string = '/'): string[] {
  return findFiles(tree, TYPESCRIPT_REGEX, startDirectory);
}

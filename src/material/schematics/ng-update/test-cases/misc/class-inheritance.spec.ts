import {createTestCaseSetup, resolveBazelPath} from '@angular/cdk/schematics/testing';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import {MIGRATION_PATH} from '../../../paths';

// src/material/schematics/ng-update
const ngUpdateDir = dirname(import.meta.url);

describe('class inheritance misc checks', () => {
  describe('v6 class which extends MatFormFieldControl', () => {
    it('should report if class does not declare "shouldLabelFloat"', async () => {
      const {runFixers} = await createTestCaseSetup('migration-v6', MIGRATION_PATH, [
        resolveBazelPath(ngUpdateDir, './test-cases/misc/class-inheritance_input.ts'),
      ]);

      const {logOutput} = await runFixers();

      // tslint:disable:max-line-length
      expect(logOutput).toMatch(
        /Found class "WithoutLabelProp".*extends "MatFormFieldControl.*must define "shouldLabelFloat"/,
      );
      expect(logOutput).not.toMatch(
        /Found class "WithLabelProp".*extends "MatFormFieldControl".*must define "shouldLabelFloat"/,
      );
      // tslint:enable:max-line-length
    });
  });
});

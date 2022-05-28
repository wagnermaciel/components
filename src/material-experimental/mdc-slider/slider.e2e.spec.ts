/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {clickElementAtPoint, getElement, Point, pressKeys} from '../../cdk/testing/private/e2e';
import {Thumb} from '@material/slider';
import {browser, by, element, ElementFinder, Key} from 'protractor';

describe('MDC-based MatSlider', () => {
  const getStandardSlider = () => element(by.id('standard-slider'));

  beforeAll(async () => await browser.get('mdc-slider'));

  describe('standard slider', async () => {
    let slider: ElementFinder;
    beforeAll(() => (slider = getStandardSlider()));
    beforeEach(async () => await setValueByClick(slider, 0));

    it('should update the value by click', async () => {
      await setValueByClick(slider, 15);
      expect(await getSliderValue(slider)).toBe(15);
    });

    it('should update the value by slide', async () => {
      await slideToValue(slider, 35);
      expect(await getSliderValue(slider)).toBe(35);
    });

    it('should update the value by keypress', async () => {
      await focusSliderThumb(slider);
      await pressKeys(Key.ARROW_RIGHT);
      expect(await getSliderValue(slider)).toBe(1);
      await pressKeys(Key.ARROW_UP);
      expect(await getSliderValue(slider)).toBe(2);
      await pressKeys(Key.ARROW_LEFT);
      expect(await getSliderValue(slider)).toBe(1);
      await pressKeys(Key.ARROW_DOWN);
      expect(await getSliderValue(slider)).toBe(0);
    });
  });
});

/** Returns the current value of the slider. */
async function getSliderValue(
  slider: ElementFinder,
  thumbPosition: Thumb = Thumb.END,
): Promise<number> {
  const inputs = await slider.all(by.css('.mdc-slider__input'));
  return thumbPosition === Thumb.END
    ? Number(await inputs[inputs.length - 1].getAttribute('value'))
    : Number(await inputs[0].getAttribute('value'));
}

/** Focuses on the MatSlider at the coordinates corresponding to the given thumb. */
async function focusSliderThumb(
  slider: ElementFinder,
  thumbPosition: Thumb = Thumb.END,
): Promise<void> {
  const webElement = await getElement(slider).getWebElement();
  const coords = await getCoordsForValue(slider, await getSliderValue(slider, thumbPosition));
  return await browser.actions().mouseMove(webElement, coords).mouseDown().perform();
}

/** Clicks on the MatSlider at the coordinates corresponding to the given value. */
async function setValueByClick(slider: ElementFinder, value: number): Promise<void> {
  return clickElementAtPoint(slider, await getCoordsForValue(slider, value));
}

/** Clicks on the MatSlider at the coordinates corresponding to the given value. */
async function slideToValue(
  slider: ElementFinder,
  value: number,
  thumbPosition: Thumb = Thumb.END,
): Promise<void> {
  const webElement = await getElement(slider).getWebElement();
  const startCoords = await getCoordsForValue(slider, await getSliderValue(slider, thumbPosition));
  const endCoords = await getCoordsForValue(slider, value);
  return await browser
    .actions()
    .mouseMove(webElement, startCoords)
    .mouseDown()
    .mouseMove(webElement, endCoords)
    .mouseUp()
    .perform();
}

/** Returns the x and y coordinates for the given slider value. */
async function getCoordsForValue(slider: ElementFinder, value: number): Promise<Point> {
  const inputs = await slider.all(by.css('.mdc-slider__input'));

  const min = Number(await inputs[0].getAttribute('min'));
  const max = Number(await inputs[inputs.length - 1].getAttribute('max'));
  const percent = (value - min) / (max - min);

  const {width, height} = await slider.getSize();

  // NOTE: We use Math.round here because protractor silently breaks if you pass in an imprecise
  // floating point number with lots of decimals. This allows us to avoid the headache but it may
  // cause some innaccuracies in places where these decimals mean the difference between values.

  const x = Math.round(width * percent);
  const y = Math.round(height / 2);

  return {x, y};
}

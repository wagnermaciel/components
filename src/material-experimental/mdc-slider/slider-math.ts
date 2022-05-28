/** Maps clientX to a value on the slider scale. */
export function mapClientXOnSliderScale({
  isRtl,
  min,
  max,
  step,
  rect,
  clientX,
  numDecimalPlaces,
}: {
  isRtl: boolean;
  min: number;
  max: number;
  step: number;
  rect: DOMRect;
  clientX: number;
  numDecimalPlaces: number;
}): number {
  const xPos = clientX - rect!.left;
  let pctComplete = xPos / rect!.width;
  if (isRtl) {
    pctComplete = 1 - pctComplete;
  }

  // Fit the percentage complete between the range [min,max]
  // by remapping from [0, 1] to [min, min+(max-min)].
  const value = min + pctComplete * (max - min);
  if (value === max || value === min) {
    return value;
  }
  return Number(quantize(value, min, step).toFixed(numDecimalPlaces));
}

/**
 * Given a number, returns the number of digits that appear after the
 * decimal point.
 * See
 * https://stackoverflow.com/questions/9539513/is-there-a-reliable-way-in-javascript-to-obtain-the-number-of-decimal-places-of
 */
export function getNumDecimalPlaces(n: number): number {
  // Pull out the fraction and the exponent.
  const match = /(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(n));
  // NaN or Infinity or integer.
  // We arbitrarily decide that Infinity is integral.
  if (!match) return 0;

  const fraction = match[1] || ''; // E.g. 1.234e-2 => 234
  const exponent = match[2] || 0; // E.g. 1.234e-2 => -2
  // Count the number of digits in the fraction and subtract the
  // exponent to simulate moving the decimal point left by exponent places.
  // 1.234e+2 has 1 fraction digit and '234'.length -  2 == 1
  // 1.234e-2 has 5 fraction digit and '234'.length - -2 == 5
  return Math.max(
    0, // lower limit
    (fraction === '0' ? 0 : fraction.length) - Number(exponent),
  );
}

/** Calculates the quantized value based on step value. */
function quantize(value: number, min: number, step: number): number {
  const numSteps = Math.round((value - min) / step);
  return min + numSteps * step;
}

export function calcThumbPositions({
  isRtl,
  startValue,
  endValue,
  min,
  max,
  width,
}: {
  isRtl: boolean;
  min: number;
  max: number;
  endValue: number;
  startValue: number;
  width: number;
}): {thumbLeftPos: number; thumbRightPos: number} {
  const percentage = (endValue - startValue) / (max - min);
  const rangePx = percentage * width;

  const thumbLeftPos = isRtl
    ? ((max - endValue) / (max - min)) * width
    : ((startValue - min) / (max - min)) * width;
  return {
    thumbLeftPos,
    thumbRightPos: thumbLeftPos + rangePx,
  };
}

export function isSliderThumbHovered(event: MouseEvent, rect: DOMRect) {
  const radius = rect.width / 2;
  const centerX = rect.x + radius;
  const centerY = rect.y + radius;
  const dx = event.clientX - centerX;
  const dy = event.clientY - centerY;
  return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
}

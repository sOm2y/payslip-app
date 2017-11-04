//@flow

/**
 * All calculation results should be rounded to the whole dollar. 
 * If >= 50 cents round up to the next dollar increment, otherwise round down.
 * 
 */

import Decimal from 'decimal.js';

// FIXME: em... using decimal.js maybe a bit redunant?
function incrementAfter50Rounding(input: number): number {
  const value = new Decimal(input);

  return value.round().toNumber();
}

export { incrementAfter50Rounding };

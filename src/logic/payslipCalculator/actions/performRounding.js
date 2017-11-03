//@flow

/**
 * All calculation results should be rounded to the whole dollar. 
 * If >= 50 cents round up to the next dollar increment, otherwise round down.
 */

import Decimal from 'decimal.js';

function incrementAfter50(input: number): number {
  const value = new Decimal(input);

  return value.round().toNumber();
}

export default incrementAfter50;

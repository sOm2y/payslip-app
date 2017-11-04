//@flow

import Decimal from 'decimal.js';

type CalculateSuperInput = {
  grossIncome: number,
  superRate: number
};

function calculateSuper({
  grossIncome,
  superRate
}: CalculateSuperInput): number {
  const rateDecimal = new Decimal(superRate);

  return rateDecimal.times(grossIncome).toNumber();
}

export default (round: number => number) => (
  input: CalculateSuperInput
) => round(calculateSuper(input));

//@flow

const FROM_0_TO_18200 = '0-18200';
const FROM_18201_TO_37000 = '18201-37000';
const FROM_37001_TO_80000 = '37001-80000';
const FROM_80001_TO_180000 = '80001-180000';
const FROM_180001_TO_OVER = '180001 and over';

type SalaryRangeEnum =
  | '0-18200'
  | '18201-37000'
  | '37001-80000'
  | '80001-180000'
  | '180001 and over';

function _determineRange(
  annualSalaryRounded: number
): SalaryRangeEnum {
  // perform a binary tree search for range
  // assume most salary range is between 37001-80000

  return annualSalaryRounded > 37000
    ? annualSalaryRounded <= 80000
      ? FROM_37001_TO_80000
      : annualSalaryRounded <= 180000
        ? FROM_80001_TO_180000
        : FROM_180001_TO_OVER
    : annualSalaryRounded > 18200
      ? FROM_18201_TO_37000
      : FROM_0_TO_18200;
}

const _fromTax = {
  [FROM_0_TO_18200]: (input: number) => 0,
  [FROM_18201_TO_37000]: (input: number) => (input - 18200) * 0.19,
  [FROM_37001_TO_80000]: (input: number) =>
    (input - 37000) * 0.325 + 3572,
  [FROM_80001_TO_180000]: (input: number) =>
    (input - 80000) * 0.37 + 17547,
  [FROM_180001_TO_OVER]: (input: number) =>
    (input - 180000) * 0.45 + 54547
};

export default (round: number => number) => (
  input: AnnualSalaryInput
) => {
  const range = _determineRange(input.annualSalary);

  return round(_fromTax[range](input.annualSalary) / 12);
};

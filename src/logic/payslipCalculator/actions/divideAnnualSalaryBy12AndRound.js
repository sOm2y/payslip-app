//@flow

function divideAnnualSalaryBy12AndRound(
  round: number => number
): (input: AnnualSalaryInput) => number {
  return (input: AnnualSalaryInput) => round(input.annualSalary / 12);
}

export default divideAnnualSalaryBy12AndRound;

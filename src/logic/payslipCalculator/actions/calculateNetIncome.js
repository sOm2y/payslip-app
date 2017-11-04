//@flow

type CalculateNetIncomeInput = {
  grossIncome: number,
  incomeTax: number
};

function calculateNetIncome({
  grossIncome,
  incomeTax
}: CalculateNetIncomeInput) {
  return grossIncome - incomeTax;
}

export default calculateNetIncome;

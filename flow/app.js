//@flow
/* eslint no-undef: 0 */ // --> this should be an eslint error

declare type Input = {
  firstName: string,
  lastName: string,
  annualSalary: number,
  superRate: number,
  paymentStartDate: Date
};

declare type PayslipCalculationResult = {
  isError: boolean,
  reason: string,
  payslip: {
    name: string,
    payPeriod: string,
    grossIncome: number,
    incomeTax: number,
    netIncome: number,
    super: number
  }
};

declare type ValidationResult = {
  isValid: boolean,
  reason: string | undefined
};

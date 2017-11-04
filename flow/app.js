//@flow
/* eslint no-undef: 0 */ // --> this should be an eslint error

declare type NameInput = {
  firstname: string,
  lastname: string
};

declare type AnnualSalaryInput = {
  annualSalary: number
};

declare type SuperRateInput = {
  superRate: number
};

declare type Input = NameInput &
  AnnualSalaryInput &
  SuperRateInput & {
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

declare type ValidationResult =
  | { isInvalid: true, reason: string }
  | { isInvalid: false };

declare type ValidationResults =
  | {
      isInvalid: true,
      reasons: { [property: string]: string }
    }
  | {
      isInvalid: false
    };

declare type Result<T> =
  | {
      isInvalid: false,
      value: T
    }
  | {
      isInvalid: true,
      reasons: { [property: string]: string }
    };

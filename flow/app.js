//@flow
/* eslint no-undef: 0 */ // --> this should be an eslint error

type NameInput = {
  firstname: string,
  lastname: string
};

declare type Input = NameInput & {
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

declare type ValidationResult =
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

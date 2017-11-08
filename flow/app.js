//@flow
/* eslint no-undef: 0 */ // --> this should be an eslint error

declare type NameFieldTypes = 'firstname' | 'lastname';

declare type InputFieldTypes = 'annualSalary' | 'superRate' | 'paymentStartDate';

declare type FieldTypes = NameFieldTypes | InputFieldTypes;

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

declare type PaymentStartDateInput = {
  paymentStartDate: string
};

declare type PayslipInput = NameInput & AnnualSalaryInput & SuperRateInput & PaymentStartDateInput;

declare type Payslip = {
  name: string,
  payPeriod: string,
  grossIncome: number,
  incomeTax: number,
  netIncome: number,
  super: number
};

declare type PayslipCalculationResult = Result<Payslip>;

declare type ValidationResult = { isInvalid: true, reason: string } | { isInvalid: false };

declare type ValidationResults =
  | {|
      isInvalid: true,
      reasons: FailReasons
    |}
  | {|
      isInvalid: false
    |};

declare type Result<T> =
  | {|
      isInvalid: false,
      value: T
    |}
  | FailResult;

declare type FailReasons = { [property: FieldTypes]: string };

declare type FailResult = {|
  isInvalid: true,
  reasons: FailReasons
|};

declare type MonthAndRange = { month: string, range: string };

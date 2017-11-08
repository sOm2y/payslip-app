//@flow
/* eslint no-undef: 0 */ // --> this should be an eslint error

declare type InputProps = {
  value: string,
  failReasons: string,
  onChange: string => mixed,
  type: FieldTypes
};

declare type InputComponentStates = {
  firstname: string,
  lastname: string,
  annualSalary: string,
  superRate: string,
  paymentStartDate: string,
  failReasons?: FailReasons
};

# the logic module

contain the business logic
current have payslip calculation logic

## exports 
```js
// out of box
import calculator from payslipCalculator
calculator(input:PayslipInput):Result<Payslip> 

// calculation logic
import cal from 'payslipCalculator/calculatePayslip'
cal(input:PayslipInput):Payslip 

// validation logic
import validate from 'payslipCalculator/validateInput'
validate(input:PayslipInput):ValidationResults

```


## payslip calculation

expect input
```js
type PayslipInput={
  firstname: string,
  lastname: string,
  annualSalary: number,
  superRate: number,
  paymentStartDate: string
  
}
```

output

```js
// output
type Result<Payslip> =
  | {|
      isInvalid: false,
      value: Payslip
    |}
  | FailResult;

// happy ending
type Payslip = {
  name: string,
  payPeriod: string,
  grossIncome: number,
  incomeTax: number,
  netIncome: number,
  super: number
};


// sad ending..
type FailResult = {|
  isInvalid: true,
  reasons: FailReasons
|};

type FailReasons = { [property: FieldTypes]: string };

// validation result
type ValidationResults =
  | {|
      isInvalid: true,
      reasons: FailReasons
    |}
  | {|
      isInvalid: false
    |};


```
//@flow

import React from 'react';

import { FormHelperText } from 'material-ui/Form';

function renderFailText(failReason: string) {
  if (failReason === null || typeof failReason === 'undefined') {
    throw new Error('fail reason cannot be empty, please check error message render method in App/InputComponent/shared.js');
  }

  return <FormHelperText>{failReason}</FormHelperText>;
}

function doMapState(state: InputComponentStates): PayslipInput {
  if (
    state === null ||
    typeof state === 'undefined' ||
    state.annualSalary === null ||
    typeof state.annualSalary === 'undefined'
  ) {
    throw new Error('empty properties found in `InputComponentState`, please check state input, got: ', JSON.stringify(state));
  }

  return {
    firstname: state.firstname,
    lastname: state.lastname,
    annualSalary: parseInt(state.annualSalary.replace(',', ''), 0),
    superRate: parseInt(state.superRate, 0) / 100,
    paymentStartDate: state.paymentStartDate
  };
}

export { renderFailText, doMapState };

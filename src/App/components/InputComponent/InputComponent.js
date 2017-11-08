//@flow

/**
 * the input component
 * 
 */

import React from 'react';
import Grid from 'material-ui/Grid';

import Name from './Name';
import AnnualSalary from './AnnualSalary';
import SuperRate from './SuperRate';
import PaymentStartDate from './PaymentStartDate';
import HeadLine from './HeadLine';
import Actions from './Actions';
import { doMapState } from './shared';

import Spacer from '../shared/Spacer';
import Container from '../shared/Container';

type Props = {
  onSubmit: PayslipInput => PayslipCalculationResult,
  onReset: () => mixed
};

const initialState: InputComponentStates = {
  firstname: '',
  lastname: '',
  annualSalary: '',
  superRate: '',
  paymentStartDate: '',
  failReasons: {}
};

const renderInputArea = (renderInput: Function) => (
  <Grid container id="input-area">
    <Grid item xs={12}>
      {renderInput(Name)('firstname')}
    </Grid>
    <Grid item xs={12}>
      {renderInput(Name)('lastname')}
    </Grid>
    <Grid item xs={12} md={8}>
      {renderInput(AnnualSalary)('annualSalary')}
    </Grid>
    <Grid item xs={12} md={4}>
      {renderInput(SuperRate)('superRate')}
    </Grid>

    <Grid item xs={12}>
      {renderInput(PaymentStartDate)('paymentStartDate')}
    </Grid>
  </Grid>
);

class InputComponent extends React.PureComponent<Props, InputComponentStates> {
  state = initialState;

  _updateField = (field: FieldTypes) => (value: string) => {
    this.setState({ [field]: value, failReasons: { ...this.state.failReasons, [field]: '' } });
  };

  _renderInput = (Comp: Class<React.Component<InputProps>>) => (field: FieldTypes) => (
    <Comp
      type={field}
      key={field}
      value={this.state[field]}
      onChange={this._updateField(field)}
      failReasons={this.state.failReasons[field]}
    />
  );

  _handleSubmit = () => {
    const result = this.props.onSubmit(doMapState(this.state));
    if (result.isInvalid) {
      this.setState({ failReasons: result.reasons });
    }
  };
  render() {
    const { onReset } = this.props;

    return (
      <Container>
        <HeadLine />
        {renderInputArea(this._renderInput)}
        <Spacer height={72} />
        <Actions
          onClickReset={() => {
            this.setState(initialState, () => {
              onReset();
            });
          }}
          onClickOk={this._handleSubmit}
        />
      </Container>
    );
  }
}

export default InputComponent;

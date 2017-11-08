//@flow

/**
 * 
 * the root app file
 * it should in charge of put all ui component together.
 * accept a data store to perform business logic
 * 
 */

import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import AppContainer from './components/AppContainer';
import InputComponent from './components/InputComponent';
import ResultComponent from './components/ResultComponent';
import payslipCalculator from '../logic/payslipCalculator';
import theme from './theme';

class App extends Component<{}, { payslip?: Payslip, showResult: boolean }> {
  state = { payslip: undefined, showResult: false };

  _hideResult = () => this.setState({ showResult: false });

  _submitAndUpdate = (input: PayslipInput) => {
    const result = payslipCalculator(input);
    if (!result.isInvalid) {
      this.setState({ payslip: result.value, showResult: true });
    }

    return result;
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer
          showResult={this.state.showResult}
          onHideResult={this._hideResult}
          input={<InputComponent onReset={this._hideResult} onSubmit={this._submitAndUpdate} />}
          result={this.state.payslip && <ResultComponent result={this.state.payslip} />}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;

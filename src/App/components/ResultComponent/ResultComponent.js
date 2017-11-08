//@flow

import React from 'react';

import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Container from '../shared/Container';
import Spacer from '../shared/Spacer';

import FormattedGrid from './FormattedGrid';

class ResultComponent extends React.PureComponent<{ result: Payslip }> {
  render() {
    const { result } = this.props;

    return (
      <Container>
        <Typography type="subheading">
          Payslip for <b>{result.name}</b>
        </Typography>
        <Divider />
        <Spacer height={32} />
        <Grid container>
          <FormattedGrid value="Pay Period" isTitle />
          <FormattedGrid value={result.payPeriod} />

          <FormattedGrid value="Gross Income" isTitle />
          <FormattedGrid value={result.grossIncome} isMoney />

          <FormattedGrid value="Income Tax" isTitle />
          <FormattedGrid value={result.incomeTax} isMoney />

          <FormattedGrid value="Net Income" isTitle />
          <FormattedGrid value={result.netIncome} isMoney />

          <FormattedGrid value="Super" isTitle />
          <FormattedGrid value={result.super} isMoney />
        </Grid>
      </Container>
    );
  }
}

export default ResultComponent;

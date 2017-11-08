import React from 'react';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';

import generateDateRange from '../../../../shared/generateDateRange';
import { renderFailText } from '../shared';

const dates = generateDateRange();

class PaymentStartDate extends React.PureComponent<InputProps> {
  render() {
    const { onChange, value, failReasons } = this.props;

    return (
      <FormControl error={!!failReasons && failReasons.length !== 0} style={{ width: '100%' }}>
        <TextField
          SelectProps={{
            native: true
          }}
          select
          label="Payment Start Date"
          value={value}
          onChange={(evt) => onChange(evt.target.value)}
          margin="normal"
          error={!!failReasons && failReasons.length !== 0}
        >
          <option value={-1}> </option>
          {dates.map((date) => (
            <option key={date.month} value={date.month}>
              {date.range}
            </option>
          ))}
        </TextField>
        {failReasons && renderFailText(failReasons)}
      </FormControl>
    );
  }
}

export default PaymentStartDate;

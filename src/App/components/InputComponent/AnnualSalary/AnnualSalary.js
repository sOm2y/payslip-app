//@flow

import React from 'react';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

import { renderFailText } from '../shared';
import FormattedInput from './FormattedInput';

class AnnualSalary extends React.PureComponent<InputProps> {
  render() {
    const { failReasons, onChange, value } = this.props;

    return (
      <FormControl error={failReasons && failReasons.length !== 0} style={{ width: '100%' }}>
        <InputLabel>Annual Salary</InputLabel>
        <Input
          value={value}
          onChange={(evt) => {
            onChange(evt.target.value);
          }}
          inputComponent={FormattedInput}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
        {value > 999999999 && <FormHelperText>Hello Bill, sorry, I mean, Mr. Gates?</FormHelperText>}
        {value > 999999 && <FormHelperText>wow... seriously?</FormHelperText>}
        {failReasons && renderFailText(failReasons)}
      </FormControl>
    );
  }
}

export default AnnualSalary;

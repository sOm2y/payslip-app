//@flow

import React from 'react';

import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

import { renderFailText } from '../shared';
import FormattedInput from './FormattedInput';

class SuperRate extends React.PureComponent<InputProps> {
  render() {
    const { failReasons, onChange, value } = this.props;

    return (
      <FormControl error={failReasons && failReasons.length !== 0} style={{ width: '100%' }}>
        <InputLabel>Super Rate</InputLabel>
        <Input
          value={value}
          onChange={(evt) => {
            const value = parseInt(evt.target.value, 0);
            onChange(value > 50 ? '50' : evt.target.value);
          }}
          inputComponent={FormattedInput}
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
        />
        {!failReasons && <FormHelperText>between 0 and 50</FormHelperText>}
        {failReasons && renderFailText(failReasons)}
      </FormControl>
    );
  }
}

export default SuperRate;

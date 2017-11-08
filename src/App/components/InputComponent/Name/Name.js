//@flow

import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

import { renderFailText } from '../shared';
import { getLabel } from './utils';

class Name extends React.PureComponent<InputProps> {
  render() {
    const { type, failReasons, value, onChange } = this.props;
    const label = getLabel(type);

    return (
      <FormControl error={failReasons && failReasons.length !== 0} style={{ width: '100%' }}>
        <InputLabel>{label}</InputLabel>
        <Input value={value} onChange={(evt) => onChange(evt.target.value)} />
        {failReasons && renderFailText(failReasons)}
      </FormControl>
    );
  }
}

export default Name;

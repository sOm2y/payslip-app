//@flow

import React from 'react';
import NumberFormat from 'react-number-format';

class FormattedInput extends React.PureComponent<{ onChange: Function }> {
  render() {
    const { onChange, ...others } = this.props;

    return (
      <NumberFormat
        {...others}
        allowNegative={false}
        thousandSeparator={','}
        decimalScale={0}
        onValueChange={(values) => {
          onChange({
            target: {
              value: values.value
            }
          });
        }}
      />
    );
  }
}

export default FormattedInput;

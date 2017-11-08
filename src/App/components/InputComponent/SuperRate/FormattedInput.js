//@flow

import React from 'react';
import NumberFormat from 'react-number-format';

class FormattedInput extends React.PureComponent<{ onChange: Function }> {
  render() {
    return (
      <NumberFormat
        {...this.props}
        allowNegative={false}
        decimalScale={0}
        format="##"
        thousandSeparator
        onValueChange={(values) => {
          this.props.onChange({
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

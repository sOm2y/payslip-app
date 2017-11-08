//@flow

import React from 'react';

class Spacer extends React.PureComponent<{ height?: number, width?: number }> {
  render() {
    const { height, width } = this.props;

    return (
      <div
        style={{
          height,
          width
        }}
      />
    );
  }
}

export default Spacer;

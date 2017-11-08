//@flow

import React from 'react';
import Typography from 'material-ui/Typography';

class HeadLine extends React.PureComponent<{}> {
  render() {
    return (
      <div
        style={{
          height: 50
        }}
      >
        <Typography type="headline" id="title">
          Please input your detail
        </Typography>
      </div>
    );
  }
}

export default HeadLine;

//@flow

import React from 'react';
import Button from 'material-ui/Button';

class Actions extends React.PureComponent<{ onClickOk: Function, onClickReset: Function }> {
  render() {
    const { onClickOk, onClickReset } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Button className="btn_reset" onClick={onClickReset}>
          Reset
        </Button>

        <Button className="btn_ok" color="primary" raised onClick={onClickOk}>
          Ok
        </Button>
      </div>
    );
  }
}

export default Actions;

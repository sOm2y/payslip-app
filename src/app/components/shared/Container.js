//@flow

import React from 'react';
import type { Node } from 'react';

import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

const styles = {
  container: {
    padding: 32,
    maxWidth: 360
  }
};

class Container extends React.PureComponent<{ children: Node, classes: { container: string } }> {
  render() {
    const { classes, children, ...others } = this.props;

    return (
      <Paper {...others} className={classes.container}>
        {children}
      </Paper>
    );
  }
}

export default withStyles(styles)(Container);

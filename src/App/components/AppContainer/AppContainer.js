//@flow

/**
 * 
 * the app container, should be take the whole page.
 * using flex box layout
 * with approprate background art
 * 
 */

import React from 'react';
import type { Node } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
type Props = {
  children: Node,
  classes: {
    container: string,
    ribbon: string,
    childrenWrapper: string,
    headlineWrapper: string
  }
};

const styles = (theme) => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex'
  },
  ribbon: {
    height: 200,
    width: '100%',
    position: 'fixed',
    zIndex: -1,
    backgroundColor: theme.palette.primary[500]
  },
  childrenWrapper: {
    paddingTop: 48,
    paddingLeft: 32
  },
  headlineWrapper: {
    padding: [12, 32],
    color: theme.palette.common.white
  }
});

class AppContainer extends React.PureComponent<Props> {
  render() {
    const { children, classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.ribbon}>
          <div className={classes.headlineWrapper}>
            <Typography type="headline" color="inherit">
              The Payslip App
            </Typography>
          </div>
        </div>
        <div className={classes.childrenWrapper}>{children}</div>
      </div>
    );
  }
}

export default withStyles(styles)(AppContainer);

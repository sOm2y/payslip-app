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
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Grow from 'material-ui/transitions/Grow';
import Button from 'material-ui/Button';
import CloseIcon from 'material-ui-icons/Close';

import Spacer from '../shared/Spacer';
import logo from './logo.svg';
type Props = {
  input: Node,
  result?: Node,
  showResult: boolean,
  onHideResult: Function,
  classes: {
    container: string,
    ribbon: string,
    childrenWrapper: string,
    headlineWrapper: string,
    logo: string,
    input: string,
    result: string,
    separator: string,
    bottom: string,
    fab: string
  }
};

const styles = (theme) => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  ribbon: {
    height: 200,
    width: '100%',
    backgroundColor: theme.palette.primary[500],
    position: 'fixed',
    zIndex: -1
  },
  separator: { width: 3, height: 30, marginRight: 24, backgroundColor: 'white' },
  childrenWrapper: {
    paddingTop: 82,
    padding: 24,
    zIndex: 10,
    paddingBottom: 48
  },
  headlineWrapper: {
    padding: [24, 36],
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    height: 30,
    marginRight: 24
  },
  bottom: {
    position: 'fixed',
    bottom: 10,
    left: 22
  },
  fab: {
    position: 'fixed',
    bottom: 28,
    right: 16,
    zIndex: 999
  },
  input: {},
  result: {}
});

class AppContainer extends React.PureComponent<Props> {
  render() {
    const { input, result, classes, showResult, onHideResult } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.ribbon}>
          <div className={classes.headlineWrapper}>
            <img src={logo} alt="myob" className={classes.logo} />
            <div className={classes.separator} />
            <Typography type="body1" color="inherit">
              Payslip App
            </Typography>
          </div>
        </div>
        <div className={classes.childrenWrapper}>
          <Grid container>
            <Hidden mdDown>
              <Spacer width={120} />
            </Hidden>

            <Hidden xsDown={showResult}>
              <Grid item xs={12} sm={showResult ? 6 : 12} lg={4} className={classes.input}>
                {input}
              </Grid>
            </Hidden>

            <Hidden mdDown>
              <Spacer width={80} />
            </Hidden>

            <Grow in={showResult}>
              <Grid item xs={12} sm={6} lg={4} className={classes.result}>
                <Hidden xsDown>
                  <Spacer height={48} />
                </Hidden>
                {result}
              </Grid>
            </Grow>
          </Grid>
        </div>
        <Hidden smUp>
          <Grow in={showResult}>
            <Button fab color="accent" className={classes.fab} onClick={onHideResult}>
              <CloseIcon />
            </Button>
          </Grow>
        </Hidden>

        <Typography type="caption" className={classes.bottom}>
          &copy; Hao 2017, for MYOB, logo belongs to MYOB{' '}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(AppContainer);

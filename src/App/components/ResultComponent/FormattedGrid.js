//@flow

import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

class FormattedGrid extends React.PureComponent<{
  value: string | number,
  isTitle?: boolean,
  isMoney?: boolean
}> {
  render() {
    const { value, isTitle, isMoney } = this.props;

    return (
      <Grid item xs={isTitle ? 4 : 8}>
        <Typography type={isTitle ? 'caption' : 'body1'} align={isTitle ? 'left' : 'right'}>
          {isMoney && '$ '}
          {value}
        </Typography>
      </Grid>
    );
  }
}
export default FormattedGrid;

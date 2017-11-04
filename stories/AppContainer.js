//@flow

import React from 'react';

import Paper from 'material-ui/Paper';

import AppContainer from '../src/App/components/AppContainer';

export default () => (
  <AppContainer>
    <Paper
      style={{
        height: 500,
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      a huge paper
    </Paper>
  </AppContainer>
);

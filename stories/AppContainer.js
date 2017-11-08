//@flow

import React from 'react';

import Paper from 'material-ui/Paper';

import AppContainer from '../src/App/components/AppContainer';

export default () => (
  <AppContainer
    input={
      <Paper style={{ height: 460, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        a huge paper
      </Paper>
    }
    result={
      <Paper
        style={{ height: 320, width: '100%', flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        a huge paper
      </Paper>
    }
  />
);

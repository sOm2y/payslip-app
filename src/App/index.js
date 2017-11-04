//@flow

import React from 'react';
import App from './App';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './theme';

export default () => (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
);

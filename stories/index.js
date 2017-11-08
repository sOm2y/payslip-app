//@flow

import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../src/App/theme';

import AppContainer from './AppContainer';
import InputComponent from './InputComponent';
import ResultComponent from './ResultComponent';

addDecorator((story) => <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>);

storiesOf('Payslip App', module)
  .add('AppContainer', () => <AppContainer />)
  .add('InputComponent', () => <InputComponent />)
  .add('ResultComponent', () => <ResultComponent />);

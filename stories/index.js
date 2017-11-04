//@flow

import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AppContainer from './AppContainer';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../src/App/theme';

addDecorator(story => <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>);

storiesOf('Payslip App', module).add('AppContainer', () => <AppContainer />);

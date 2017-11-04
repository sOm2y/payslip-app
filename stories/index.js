//@flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AppContainer from '../src/App/components/AppContainer';

storiesOf('Payslip App', module).add('AppContainer', () => <AppContainer>hello</AppContainer>);

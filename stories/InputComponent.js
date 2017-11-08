//@flow

import React from 'react';

import InputComponent from '../src/App/components/InputComponent';
import { action } from '@storybook/addon-actions';

export default () => <InputComponent onSubmit={action('submitted')} />;

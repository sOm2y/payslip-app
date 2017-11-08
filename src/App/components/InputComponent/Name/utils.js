//@flow

import type { ComponentType } from './types';

export function getLabel(type: ComponentType) {
  switch (type) {
    case 'firstname':
      return 'First Name';
    case 'lastname':
      return 'Last Name';

    default:
      throw new Error('type for `Name` can only be either `firstname` or `lastname`, but got: ' + type);
  }
}

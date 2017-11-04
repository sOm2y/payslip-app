//@flow

/**
 * 
 * the app container, should be take the whole page.
 * using flex box layout
 * with approprate background art
 * 
 */

import React from 'react';

class AppContainer extends React.PureComponent<{ children: React.ReactNode }> {
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default AppContainer;

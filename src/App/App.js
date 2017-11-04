//@flow

/**
 * 
 * the root app file
 * it should in charge of put all ui component together.
 * accept a data store to perform business logic
 * 
 */

import React, { Component } from 'react';

import AppContainer from './components/AppContainer';

class App extends Component<{}> {
  render() {
    return <AppContainer>it works!</AppContainer>;
  }
}

export default App;

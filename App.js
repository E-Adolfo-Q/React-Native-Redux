import React, { Component } from "react";
import ReduxAsyncApp from './app/ReduxAsyncApp'
import { Provider } from 'react-redux'
import store from './app/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxAsyncApp />
      </Provider>
    );
  }
}

export default App


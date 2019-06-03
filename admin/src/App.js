import React, { Component } from 'react';
import Router from "./Router/Router"
import {Provider} from "react-redux"
import store from './store/store'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
         <Router></Router>
      </Provider>
      </div>
    );
  }
}
export default App;

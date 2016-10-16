import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducer from './reducers/index';

import Card from './components/Card.js';
import Header from './components/Header.js';

injectTapEventPlugin();

let store = createStore(reducer);

class App extends Component {

  render () {
    console.log(store.getState());
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Card />
        </div>
      </MuiThemeProvider>
     );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);


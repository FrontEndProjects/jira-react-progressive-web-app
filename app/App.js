import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

import Card from './components/Card.js';

let store = createStore(reducer);

class App extends Component {

  render () {
    console.log(store.getState());
    return (
      <div>
        <h1>Header 1</h1>
        <Card />
      </div>
     );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);


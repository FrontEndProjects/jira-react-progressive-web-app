import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Card from './components/Card.js';
import Header from './components/Header.js';

injectTapEventPlugin();

class App extends Component {

  render () {
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

render(<App />, document.getElementById('app'));


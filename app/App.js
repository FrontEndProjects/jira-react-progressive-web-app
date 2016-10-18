import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Card from './components/Card.js';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

injectTapEventPlugin();

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {open: false};
    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer () {
    this.setState({open: !this.state.open});
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
            <Menu desktop={true}>
              <MenuItem primaryText="Name of user" />
              <Divider />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
              <Divider />
              <MenuItem primaryText="Sign out" />
            </Menu>
          </Drawer>
          <AppBar title='Header' onLeftIconButtonTouchTap={this.openDrawer} />
          <Card />
        </div>
      </MuiThemeProvider>
     );
  }
}

render(<App />, document.getElementById('app'));


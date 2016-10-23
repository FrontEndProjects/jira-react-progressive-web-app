import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';

export default class Bar extends Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false
    };

    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer () {
    this.setState({
      open: !this.state.open
    });
  }

  render () {
    return (
      <div>
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})} >
          <Menu desktop={true}>
            <MenuItem primaryText={'Hi ' + this.props.user} />
            <Divider />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Help" />
            <Divider />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Drawer>
        <AppBar title={this.props.user} onLeftIconButtonTouchTap={this.openDrawer} />
      </div>
  );
  }

}
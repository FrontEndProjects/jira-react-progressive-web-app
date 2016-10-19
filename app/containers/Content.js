import React, { Component } from 'react';
import Card from '../components/Card';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';

class ContentContainer extends Component {

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
    let issues = this.props.issues;
    let Cards = issues.map((elem, idx) => {
      return <Card title={elem.fields.summary} key={idx} />;
    });

    return (
        <div>
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={(open) => this.setState({open})} >
            <Menu desktop={true}>
              <MenuItem primaryText="Hi User" />
              <Divider />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
              <Divider />
              <MenuItem primaryText="Sign out" />
            </Menu>
          </Drawer>
          <AppBar title={'Hi ' + this.props.username} onLeftIconButtonTouchTap={this.openDrawer} />
          {Cards}
        </div>
     );
  }
}

export default ContentContainer;

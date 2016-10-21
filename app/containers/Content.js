import React, { Component } from 'react';
import TaskHeader from '../components/tasksHeader/TaskHeader';
import Task from '../components/task/Task';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';

import dateFormat from 'dateformat';

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
    let issuesNumber = issues.length;
    let Cards = issues.map((elem, idx) => {
      return <Task
        title={elem.fields.summary}
        avatar={elem.fields.reporter.avatarUrls['32x32']}
        link={elem.key}
        reporter={elem.fields.reporter.displayName}
        reporterEmail={elem.fields.reporter.emailAddress}
        created={dateFormat(elem.fields.created, 'dddd, dS mmmm yyyy, h:MM:ss')}
        updated={dateFormat(elem.fields.uptaded, 'dddd, dS mmmm yyyy, h:MM:ss')}
        project={elem.fields.project.name}
        key={idx}
       />;
    });

    return (
        <div>
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={(open) => this.setState({open})} >
            <Menu desktop={true}>
              <MenuItem primaryText={'Hi ' + this.props.username} />
              <Divider />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
              <Divider />
              <MenuItem primaryText="Sign out" />
            </Menu>
          </Drawer>
          <AppBar title={this.props.username} onLeftIconButtonTouchTap={this.openDrawer} />
          <TaskHeader issuesNumber={issuesNumber} />
          {Cards}
        </div>
     );
  }
}

export default ContentContainer;

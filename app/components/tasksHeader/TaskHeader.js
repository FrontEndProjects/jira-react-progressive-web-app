import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

class TaskHeader extends Component {

  render () {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={'Your open jira tasks: ' + this.props.issuesNumber} />
          <ToolbarSeparator />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton label='log your hours!' primary={true} />
        </ToolbarGroup>
      </Toolbar>
     );
  }
}

export default TaskHeader;

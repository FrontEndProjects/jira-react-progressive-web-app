import React, { Component } from 'react';
import Task from '../components/Card';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

class TaskContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false
    };

    this.openDrawer = this.openDrawer.bind(this);
  }

  render () {
    let issues = this.props.issues;
    let Cards = issues.map((elem, idx) => {
      return <Task
        title={elem.fields.summary}
        avatar={elem.fields.creator.avatarUrls['32x32']}
        link={elem.self}
        key={idx}
       />;
    });

    return (
      1;
     );
  }
}

export default TaskContainer;

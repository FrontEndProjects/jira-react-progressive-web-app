import React, { Component } from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Task extends Component {

  render () {
    let href = 'https://jira.nitro-digital.com/browse/' + this.props.link;
    return (
      <Card>
        <CardHeader
          title={this.props.title}
          avatar={this.props.avatar}
        >
          <FlatButton
            href={href}
            label="go to jira project"
          />
        </CardHeader>
      </Card>
     );
  }
}

export default Task;

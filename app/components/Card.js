import React, { Component } from 'react';
import { Card, CardHeader } from 'material-ui/Card';

class Task extends Component {

  render () {
    return (
      <Card>
        <CardHeader
          title={this.props.title}
          subtitle={this.props.link}
          avatar={this.props.avatar}
        />
      </Card>
     );
  }
}

export default Task;

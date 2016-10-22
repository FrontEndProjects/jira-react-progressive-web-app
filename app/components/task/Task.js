import React, { Component } from 'react';
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Task extends Component {

  render () {
    let href = 'https://jira.nitro-digital.com/browse/' + this.props.link;
    return (
      <Card
        style={{
          margin: '1em auto',
          width: '90%'
        }}
      >
        <CardHeader
          title={this.props.title}
          subtitle={this.props.link}
          avatar={this.props.avatar}
          actAsExpander={false}
          showExpandableButton={true}
        >
        </CardHeader>
        <CardActions style={styles.cardActions}>
          <RaisedButton label="Go to Jira project" href={href} target="_blank" style={styles.raisedButton} />
        </CardActions>
        <CardText expandable={true} style={styles.cardText}>
          <Paper zDepth={1} style={styles.paper}>
            Reporter: {this.props.reporter} <br />
            Reporter e-mail: {this.props.reporterEmail} <br />
            Created: {this.props.created} <br />
            Updated: {this.props.updated} <br />
            Project: {this.props.project}
          </Paper>
        </CardText>
      </Card>
     );
  }
}

const styles = {
  paper: {
    padding: 8
  },
  raisedButton: {
    marginLeft: 8
  },
  cardText: {
    paddingTop: 0
  },
  cardActions: {
    paddingTop: 0,
    paddingBottom: 16
  }
};

export default Task;

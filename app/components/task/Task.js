import React, { Component } from 'react';
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export default class Task extends Component {

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
            <List>
              <ListItem>Reporter: {this.props.reporter}</ListItem>
              <ListItem>Reporter e-mail: {this.props.reporterEmail}</ListItem>
              <ListItem>Created: {this.props.created}</ListItem>
              <ListItem>Updated: {this.props.updated}</ListItem>
              <ListItem>Project: {this.props.project}</ListItem>
            </List>
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

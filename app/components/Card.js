import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

class Card extends Component {

  render () {
    return (
      <ListItem primaryText={this.props.title} >
      </ListItem>
     );
  }
}

export default Card;

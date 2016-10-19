import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';

import LoginContainer from './containers/Login.js';
import ContentContainer from './containers/Content.js';

injectTapEventPlugin();

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isLogged: false,
      login: '',
      password: ''
    };

    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleLoginButton = this.handleLoginButton.bind(this);
  }

  handleLoginInput (e) {
    this.setState({
      login: e.target.value
    });
  }

  handlePasswordInput (e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLoginButton () {
    let login = this.state.login;
    let password = this.state.password;

    return axios({
      url: `https://jira.nitro-digital.com/rest/api/2/search?jql=status%20in%20(Open%2C%20%22In%20Progress%22)%20AND%20assignee%20in%20(${login})`,
      method: 'get',
      responseType: 'json',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      auth: {
        username: `${login}`,
        password: `${password}`
      }
    })
    .then(response => {
      console.log(response);
      console.log(response.data.issues[0].fields.assignee.displayName);
      this.setState({
        isLogged: true
      });
    })
    .catch(error => console.log(error));
  }

  render () {
    if (this.state.isLogged) {
      return (
        <MuiThemeProvider>
          <ContentContainer />
        </MuiThemeProvider>
     );
    } else {
      return (
        <MuiThemeProvider>
          <LoginContainer
            handleLoginButton={this.handleLoginButton}
            handleLoginInput={this.handleLoginInput}
            handlePasswordInput ={this.handlePasswordInput}
          />
        </MuiThemeProvider>
      );
    }
  }
}

render(<App />, document.getElementById('app'));


import React, { Component } from 'react';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';

import LoginContainer from './LoginContainer';
import ContentContainer from './ContentContainer';

export default class MainContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isLogged: false,
      data: [],
      login: '',
      password: '',
      errorText: '',
      progress: false
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
    this.setState({
      progress: true
    });

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
      this.setState({
        progress: false,
        isLogged: true,
        data: response.data.issues
      });
      console.log(this.state.data);
    })
    .catch(error => {
      console.log(error);
      let status = error.response.status === 401 ? 'Incorrect data' : '';
      this.setState({
        errorText: `${status}`,
        progress: false
      });
    });
  }

  render () {
    if (this.state.isLogged) {
      return (
        <MuiThemeProvider>
          <ContentContainer
            issues={this.state.data}
            username={this.state.login}
          />
        </MuiThemeProvider>
     );
    } else {
      return (
        <MuiThemeProvider>
        <div>
          <LinearProgress
            mode="indeterminate"
            style={this.state.progress ? styles.showProgress : styles.hideProgress}
            color="#FF4081"
          />
          <LoginContainer
            handleLoginButton={this.handleLoginButton}
            handleLoginInput={this.handleLoginInput}
            handlePasswordInput={this.handlePasswordInput}
            errorInfo={this.state.errorText}
          />
          </div>
        </MuiThemeProvider>
      );
    }
  }
}

const styles = {
  showProgress: {
    display: 'block'
  },
  hideProgress: {
    display: 'none'
  }
};

import React, { Component } from 'react';
import getIssues from '../axios/getIssues';

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

    getIssues(this.state.login, this.state.password, this);
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

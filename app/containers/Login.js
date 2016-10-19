import React, { Component } from 'react';
import LoginForm from '../components/form/LoginForm.js';
import AppBar from 'material-ui/AppBar';

class LoginContainer extends Component {

  render () {
    return (
        <div>
          <AppBar title='Log in to Jira' />
          <LoginForm
            handleLoginButton={this.props.handleLoginButton}
            handleLoginInput={this.props.handleLoginInput}
            handlePasswordInput ={this.props.handlePasswordInput}
            error={this.props.errorInfo}
           />
        </div>
     );
  }
}

export default LoginContainer;

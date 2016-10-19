import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './login-form.scss';

class LoginForm extends Component {

  render () {
    return (
      <div className="input-form">
        <TextField
          hintText="Enter your login"
          fullWidth={true}
          onChange={this.props.handleLoginInput}
          errorText={this.props.error}
        />
        <TextField
          hintText="Enter your password"
          type="password"
          fullWidth={true}
          onChange={this.props.handlePasswordInput}
          errorText={this.props.error}
        />
        <TextField
          hintText="Url to your jira site"
          type="text"
          fullWidth={true}
          onChange={this.props.handlePasswordInput}
        />
        <RaisedButton
          label="Log In"
          fullWidth={true}
          onClick={this.props.handleLoginButton}
        />
      </div>
     );
  }
}

export default LoginForm;

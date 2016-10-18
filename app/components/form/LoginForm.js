import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './login-form.scss';

class LoginForm extends Component {

  constructor (props) {
    super(props);
    this.handleLoginButton = this.handleLoginButton.bind(this);
  }

  handleLoginButton () {
    console.log('Username: ', this.refs.username.getValue());
    console.log('Password: ', this.refs.password.getValue());
  }

  render () {
    return (
      <div className="input-form">
        <TextField hintText="Enter your e-mail" fullWidth={true} ref="username" />
        <TextField hintText="Enter your password" type="password" fullWidth={true} ref="password" />
        <RaisedButton label="Log In" fullWidth={true} onClick={this.handleLoginButton}/>
      </div>
     );
  }
}

export default LoginForm;

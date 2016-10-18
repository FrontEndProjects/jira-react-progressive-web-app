import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import './login-form.scss';

class LoginForm extends Component {

  render () {
    return (
      <div className="input-form">
        <TextField hintText="Enter your e-mail" fullWidth={true} ref="username" />
        <TextField hintText="Enter your password" type="password" fullWidth={true} ref="password" />
        <FlatButton label="Log In" />
      </div>
     );
  }
}

export default LoginForm;

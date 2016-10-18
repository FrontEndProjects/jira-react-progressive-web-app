import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './login-form.scss';

class LoginForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
    this.handleLoginButton = this.handleLoginButton.bind(this);
    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleLoginButton () {
    console.log('Username: ', this.state.login);
    console.log('Password: ', this.state.password);
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

  render () {
    return (
      <div className="input-form">
        <TextField hintText="Enter your login" fullWidth={true} value={this.state.login} onChange={this.handleLoginInput} />
        <TextField hintText="Enter your password" type="password" fullWidth={true} value={this.state.password} onChange={this.handlePasswordInput} />
        <RaisedButton label="Log In" fullWidth={true} onClick={this.handleLoginButton}/>
      </div>
     );
  }
}

export default LoginForm;

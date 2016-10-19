import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import axios from 'axios';

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
    let login = this.state.login;
    let password = this.state.password;

    console.log('Username: ', login);
    console.log('Password: ', password);

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
    })
    .catch(error => console.log(error));
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

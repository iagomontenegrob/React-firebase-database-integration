import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  onInputChange(target) {
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();

    this.props.onHandleSubmit({
      'email': this.state.email,
      'password': this.state.password
    });
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={(event) => this.onHandleSubmit(event)}>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={(event) => this.onInputChange(event.target)} />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(event) => this.onInputChange(event.target)} />
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './login.css';
import 'semantic-ui-css/semantic.min.css'
import { DB_CONFIG } from './Config/config'
import firebase from 'firebase/app'
import 'firebase/database'
import TableUsuarios from './table'
import './table.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      users: [

      ]

    };

    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('user');

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {

    event.preventDefault();
    this.db.push({
      email: this.state.email,
      senha: this.state.senha
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    //alert(value);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentWillMount() {

    const users_now = this.state.users;

    this.db.on('child_added', snap => {

      users_now.push({
        email: snap.val().email,
        senha: snap.val().senha
      })

      this.setState ({
        users: users_now
      })
    })
  }

  render() {
    return (

      <div>
        <div className="login-page">
          <div className="form">

            <form className="login-form" onSubmit={this.handleSubmit}>
              <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange} placeholder="Email" />
              <input name="senha" type="password" value={this.state.senha} onChange={this.handleInputChange} placeholder="Senha" />
              <button type="submit">Entrar</button>
            </form>
          </div>
        </div>

        <TableUsuarios users={this.state.users} />
      </div>
    );
  }

}

export default App;

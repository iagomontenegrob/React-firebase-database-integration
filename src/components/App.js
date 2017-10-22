import React, { Component } from 'react';
import firebase from 'firebase/app'
import 'firebase/database'

import { DB_CONFIG } from '../config/config'

import UserForm from './user-form';
import UserTable from './user-table';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('user');
  }

  componentWillMount() {
    const users_now = this.state.users;

    this.db.on('child_added', snap => {
      users_now.push({
        email: snap.val().email,
        password: snap.val().password
      })

      this.setState ({
        users: users_now
      })
    })
  }

  handleSubmit(user) {
    this.db.push({
      email: user.email,
      password: user.password
    })
  }

  render() {
    return (
      <div>
        <UserForm onHandleSubmit={(event) => this.handleSubmit(event)} />
        <UserTable users={this.state.users} />
      </div>
    );
  }
}

export default App;

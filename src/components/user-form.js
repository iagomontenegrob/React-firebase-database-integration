import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      message: '',
      messageVisible: false
    }
  }

  

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  onInputChange(target) {
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  closeMessage(){
    this.setState({messageVisible: false});
  }

  validateForm(){

    this.state.message = "";
    
    if(this.state.email == "" && this.state.password == ""){
      this.state.message = "Email and Password required"
    }else if(this.state.email == ""){
      this.state.message = "Email required"
    }else if(this.state.password == ""){
      this.state.message = "Password required"
    }else if(!this.validateEmail(this.state.email)){
      this.state.message = "Email incorrect"
    }else if(this.state.password.length < 6){
      this.state.message = "Password must be at least 4 characters"
    }

    if(this.state.message == ""){
      return true;
    }else{
      return false;
    }
  }

  onHandleSubmit(event) {
    event.preventDefault();

    this.setState({messageVisible: false});
    
    if(this.validateForm()){
      this.props.onHandleSubmit({
        'email': this.state.email,
        'password': this.state.password
      });

      this.state.email = "";
      this.state.password = "";
    }else{
      this.setState({messageVisible: true});
    }
  }

  render() {
    return (
      <div className="login-page">
    
      
        { this.state.messageVisible ? 
        <div class="ui warning message transition">
          <i class="close icon" onClick={(event) => this.closeMessage(event)}></i>
          <div class="header">
            {this.state.message}
          </div>
        </div> 
        : null }
        
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
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import Register from "./register.component";
import Login from "./login.component";
import axios from 'axios';
import history from "../../config/history";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);  
    this.props.history.push("/dashboard");
  }

//doesnot work the endpoint for logout user session
  handleLogoutClick() {
     localStorage.removeItem("user")
     history.replace("/signin")
      
  }
// in home module should be only login part, so register will be deleted  
  render() {
    return (
      <div>
        <h1>Home </h1>
        <h1>Status: {this.props.loggedInStatus} </h1>
        <h2>Logged user:{this.props.user_name} </h2>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Register handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>

    );
  }
}
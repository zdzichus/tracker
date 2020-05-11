import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import '../../../node_modules/bootswatch/dist/yeti/bootstrap.min.css'; // Added this :boom:
import axios from "../../config/axios"
import history from "../../config/history";

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user_name: "",
      email: "",
      user_password: "",
      loginErrors: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this); 
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const UserObject = {
      user_password: this.state.user_password,
      email: this.state.email
    }

    axios.post('/users/signin', UserObject)
      .then(response => {
        if (response.data.logged_in) {         
          localStorage.setItem("user", response.data.token);
          console.log("response from login", response);
          this.props.history.push("/user-list");
        }
        return response.data;
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <br></br>  <br></br>
      
        <div class="container">
          <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
              <div class="bs-component">
                <div class="card border-info mb-3">
                  <div class="card-header">Login</div>
                  <div class="card-body">
                    <div className="form-group">
                      <label>Email address</label>
                      <input type="email" className="form-control" name="email" placeholder="Enter email" 
                      value={this.state.email} 
                      onChange={this.handleChange} required 
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" name="user_password" placeholder="Enter password"
                      value={this.state.user_password} 
                      onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    <ul class="list-unstyled">
                      <li class="float-lg-right">
                        <label className="forgot-password text-right">
                          Forgot <a href="#">password?</a>
                        </label>
                      </li>
                      <li class="float-lg-left">
                        <label className="forgot-password text-left">
                          Register <a href="../register-user">now?</a>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4"></div>
          </div>

        </div>
      </form>
    );
  }
}
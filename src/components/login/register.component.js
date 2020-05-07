import React, { Component } from "react";
import '../../../node_modules/bootswatch/dist/yeti/bootstrap.min.css'; // Added this :boom:
import axios from "axios";

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: "",
            email: "",
            user_password: "",
            registartionErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        const UserObject = {
            user_name: this.state.user_name,
            user_password: this.state.user_password,
            email: this.state.email
        }
     axios.post('http://192.168.0.46:4000/users/register-user', UserObject)
            .then(response => {
                if (response.data.status === "created") {
                    this.props.handleSuccessfulAuth(response.data);
                    console.log(response.data);
                }
            })
            .catch(error => {
                console.log("registartion error", error);
            });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
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
                                    <div class="card-header">Register</div>
                                    <div class="card-body">
                                        <div className="form-group">
                                            <label>User name</label>
                                            <input type="text" className="form-control" 
                                            name="user_name" 
                                            placeholder="First name" 
                                            value={this.state.user_name} 
                                            onChange={this.handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Email address</label>
                                            <input type="email" className="form-control" 
                                            name="email" 
                                            placeholder="Enter email" 
                                            value={this.state.email} 
                                            onChange={this.handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" 
                                            name="user_password" 
                                            placeholder="Enter password" 
                                            value={this.state.user_password} 
                                            onChange={this.handleChange} required />
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                                        <label className="forgot-password text-right">
                                            Already registered <a href="../signin">Login?</a>
                                        </label>
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


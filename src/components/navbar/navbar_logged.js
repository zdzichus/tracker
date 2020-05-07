import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Login from "./components/login/login.component";
import Register from "./components/login/register.component";
import Home from "./components/login/home.component";
import Dashboard from "./components/login/dashboard.component";
import UserList from "./components/user/user-list.component";

export default class Navbar extends Component {
 
    
  render() {
    return (
         <div className="Navbar">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signin"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/register-user"}>Register</Link>
                  </li>
                   <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Home</Link>
                    </li>
                 
                </ul>
              </div>
            </div>
          </nav>
        </div>
   
    );
  }
}

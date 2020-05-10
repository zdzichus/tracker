<<<<<<< HEAD

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import axios from "axios";
import Login from "./components/login/login.component";
import Register from "./components/login/register.component";
import Home from "./components/login/home.component";
import Dashboard from "./components/login/dashboard.component";
import history from "./config/history";


import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

=======
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
>>>>>>> refs/remotes/origin/master
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Login from "./components/login/login.component";
import Register from "./components/login/register.component";
import Home from "./components/login/home.component";
import Dashboard from "./components/login/dashboard.component";
import UserList from "./components/user/user-list.component";

<<<<<<< HEAD

function App() {
    return (<Router>
        <div className="container">
            <header >
=======
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      _id:'',
      user: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
  }
    handleLogout(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }
    handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
    });
  }
>>>>>>> refs/remotes/origin/master

    componentDidMount(){
     this.checkLoginStatus();
   }
   

<<<<<<< HEAD
                        <Navbar.Brand>
                            <Link to={"/user-list"} className="nav-link">
                                Project Tarcking
                            </Link>
                        </Navbar.Brand>

                        <Nav className="justify-content-end">
                            <Nav>
                                <Link to={"/create-user"} className="nav-link">
                                    Create User
                                </Link>
                            </Nav>

                             
                            <Nav>
                                <Link to={"/user-list"} className="nav-link">
                                    Users List
                                </Link>
                            </Nav>
                            <Nav>
                                <Link to={"/project-list"} className="nav-link">
                                    Project List
                                </Link>
                            </Nav>

                            <Nav>
                                <Link to={"/create-project"} className="nav-link">
                                    Create Project
                                </Link>
                            </Nav>
                            <Nav>
                                <Link to={"/create-timesheet"} className="nav-link">
                                    Create TimeSheet
                                </Link>
                            </Nav>
                             <Nav>
                                <Link to={"/timesheet-list"} className="nav-link">
                                    TimeSheet List
                                </Link>
                            </Nav>



                        </Nav>

                    </Container>
                </Navbar>
            </header>

            <Container>
                <Row>
                    <Col md={12}>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path='/' component={Login} />
                                <Route path="/create-user" component={CreateUser} />
                                <Route path="/edit-user/:id" component={EditUser} />
                                 <Route path="/edit-project/:id" component={EditProject} />
                                <Route path="/user-list" component={UserList} />
                                <Route path="/project-list" component={ProjectList} />
                                 <Route path="/create-project" component={CreateProject} />
                                  <Route path="/create-timesheet" component={CreateTimeSheet} />
                                  <Route path="/timesheet-list" component={TimesheetList} /> 
                                  <Route exact path='/signin' component={Login} />
                                    <Route exact path='/register-user' component={Register} />

                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
=======
  checkLoginStatus() {
    axios.get('http://192.168.0.46:4000/users/logged_in/5eb0717ddb657b0dd1842b90')
      .then(response => {
        console.log("logged in ?", response);
        if (
          response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
          //console.log("logged in ?" , response);
        } else if (
          !response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          })
        }
    }).catch(error =>{
       console.log("check login error", error)
  });  
 }
    
  render() {
    return (
      <Router>
        <div className="App">
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
                     <li className="nav-item">
                    <Link className="nav-link" to={"/dashboard"}>Dashboard</Link>
                  </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={"/user-list"}>User List</Link>
                  </li>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route
                  exact path={"/"}
                  render={props => (<Home
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus} />)} />
                <Route
                    exact path={"/dashboard"}
                    render={props => (<Dashboard 
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout} 
                    loggedInStatus={this.state.loggedInStatus} />)} />
                <Route path="/signin" component={Login} />
                <Route path="/register-user" component={Register} />
                <Route path="/home" component={Home} />
                 <Route path="/user-list" component={UserList} />
              </Switch>
            </div>
          </div>
>>>>>>> refs/remotes/origin/master
        </div>
      </Router>
    );
  }
}

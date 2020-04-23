import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateProject from "./components/create-project.component";
import CreateUser from "./components/create-user.component";
import CreateTimeSheet from "./components/create-timesheet.component";
import EditUser from "./components/edit-user.component";
import EditProject from "./components/edit-project.component";
import UserList from "./components/user-list.component";
import ProjectList from "./components/project-list.component";
import TimesheetList from "./components/timesheet-list.component";

function App() {
    return (<Router>
        <div className="container">
            <header >

                <Navbar bg="dark" variant="dark">
                    <Container>

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
                                <Route exact path='/' component={CreateUser} />
                                <Route path="/create-user" component={CreateUser} />
                                <Route path="/edit-user/:id" component={EditUser} />
                                 <Route path="/edit-project/:id" component={EditProject} />
                                <Route path="/user-list" component={UserList} />
                                <Route path="/project-list" component={ProjectList} />
                                 <Route path="/create-project" component={CreateProject} />
                                  <Route path="/create-timesheet" component={CreateTimeSheet} />
                                  <Route path="/timesheet-list" component={TimesheetList} /> 
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Router>);
}

export default App;
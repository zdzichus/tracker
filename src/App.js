import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import UserList from "./components/user-list.component";

function App() {
    return (<Router>
        <div className="container">
            <header >

                <Navbar bg="dark" variant="dark">
                    <Container>

                        <Navbar.Brand>
                            <Link to={"/user-list"} className="nav-link">
                                Project Tarck
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
                                <Route path="/user-list" component={UserList} />
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Router>);
}

export default App;
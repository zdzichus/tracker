import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "jquery/dist/bootstrap.min.css";
//import "proper.js/dist/umd/popper.min.js";
//import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateUser from "./components/create-user.component";
import CreateTimeSheet from "./components/create-timesheet.component";
import EditTimeSheet from "./components/edit-timesheet.component";
import TimeSheetList from "./components/timesheet-list.component";
import EditUser from "./components/edit-user.component";
import UserList from "./components/user-list.component";



function App() {
    return (<Router>
        <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div class="container">
                <a class="navbar-brand" href="/user-list">Project Tracking</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="collapse navbar-collapse" id="navbarColor01"></div>
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active"><a class="nav-link" href="/user-list">Dashboard<span class="sr-only">(current)</span></a></li>
                                <li class="nav-item"><a class="nav-link" href="/user-list">User List</a></li>
                                <li class="nav-item"><a class="nav-link" href="/create-user">Create User</a></li>
                                <li class="nav-item"><a class="nav-link" href="/timesheet-list">TimeSheets</a></li>
                                <li class="nav-item"><a class="nav-link" href="/create-timesheet">Create TimeSheet</a></li>
                            </ul>
            </div>
        </div><br></br><br></br><br></br>

        <Container>
            <Row>
                <Col md={12}>
                    <div className="wrapper">
                        <Switch>
                            <Route exact path='/' component={CreateUser} />
                            <Route path="/create-user" component={CreateUser} />
                            <Route path="/edit-user/:id" component={EditUser} />
                            <Route path="/user-list" component={UserList} />
                            <Route path="/create-timesheet" component={CreateTimeSheet} />
                            <Route path="/edit-timesheet" component={EditTimeSheet} />
                            <Route path="/timesheet-list" component={TimeSheetList} />
                        </Switch>
                    </div>
                </Col>
            </Row>
        </Container>


    </Router>);
}

export default App;
import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UserTableRow from './UserTableRow';


export default class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Users: []
        };
    }

    componentDidMount() {
        axios.get('http://192.168.0.46:4000/users/')
            .then(res => {
                this.setState({
                    Users: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.Users.map((res, i) => {
            return <UserTableRow obj={res} key={i} />;
        });
    }


    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Surname</th>
                    <th>Password</th>
                    <th>Application Role</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.DataTable()}
                </tbody>
            </Table>
        </div>);
    }
}
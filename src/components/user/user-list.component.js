import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import UserTableRow from './UserTableRow';
import axios from "../../config/axios";


export default class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Users: []
        };
    }

    componentDidMount() {
        axios.get('/users/')
            .then(res => {
                this.setState({
                    
                    Users: res.data
                    
                }); 
            })
            .catch((error) => {
                console.log(error);
            })
      }

    UserDataTable() {
      
        return this.state.Users.map((res, i) => {
            return <UserTableRow obj={res} key={i} />;
        });
        
    }


    render() {
         
        return (<div className="table-wrapper">
             <h1>User list </h1>
        <h1>Status: {this.props.loggedInStatus} </h1>
        <h2>Logged user:{this.props.user_name} </h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>                
                 
                    <th>Company Role</th>
                    <th>Application Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.UserDataTable()}
                </tbody>
            </Table>
          
         
        </div>);
    }
}
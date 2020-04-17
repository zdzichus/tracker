import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class UserTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }


    deleteUser() {
        if (window.confirm('Do you want to delete this user permanently?')) {
            axios.delete('http://192.168.0.46:4000/users/delete-user/' + this.props.obj._id)

            .then((res) => {
                console.log('User successfully deleted!')
            }).catch((error) => {
            console.log(error)
        })   }
        window.location.reload()
    }


    render() {
        return (
            <tr>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.user_password}</td>
                <td>{this.props.obj.user_name}</td>
                <td>{this.props.obj.user_surname}</td> 
                <td>{this.props.obj.user_app_role}</td>
                <td>{this.props.obj.user_role}</td>
               

                <td>  
                                   
                     <Link className="edit-link" to={"/edit-user/" + this.props.obj._id}>
                        Edit     
                    </Link>&nbsp;&nbsp;  
                    
                    <Button onClick={this.deleteUser} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}
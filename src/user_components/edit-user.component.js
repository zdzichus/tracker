import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserSurname = this.onChangeUserSurname.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUserRole = this.onChangeUserRole.bind(this);
        this.onChangeUserAppRole = this.onChangeUserAppRole.bind(this);
        this.onChangeUserInactive = this.onChangeUserInactive.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            email: '',
            user_name: '',
            user_surname: '',
            user_password: '',
            user_role: '',
            user_app_role: '',
            user_inactive: false,
            
        }
    }

    componentDidMount() {
        axios.get('http://192.168.0.46:4000/users/edit-user/' + this.props.match.params.id)
            .then(res => {console.log("przy wczytywaniu editu")
                this.setState({
                    user_name: res.data.user_name,
                    email: res.data.email,
                    user_surname: res.data.user_surname,
                    user_password: res.data.user_password,
                    user_app_role: res.data.user_app_role,
                    user_role: res.data.user_role,
                    user_inactive: res.data.user_inactive
                

                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    onChangeUserEmail(e) {
        this.setState({
         emial: e.target.value
         })
    }
    onChangeUserName(e) {
        this.setState({
            user_name: e.target.value
        
        })
    }

    onChangeUserSurname(e) {
        this.setState({
            user_surname: e.target.value
        })
    }

    onChangeUserPassword(e) {
        this.setState({
            user_password: e.target.value
        })
    }


    onChangeUserRole(e) {
        this.setState({
            user_role: e.target.value
        })
    }

    onChangeUserAppRole(e) {
        this.setState({
            user_app_role: e.target.value
        })
    }
    onChangeUserInactive(e) {
        this.setState({
            user_inactive: !this.state.user_inactive
        })
    }




    onSubmit(e) {
        e.preventDefault()

        const UserObject = {
            user_name: this.state.user_name,
            email: this.state.email,
            user_surname: this.state.user_surname,
            user_password: this.state.user_password,
            user_app_role: this.state.user_app_role,
            user_role: this.state.user_role,
            user_inactive: this.state.user_inactive
       
        
        };

        axios.put('http://192.168.0.46:4000/users/update-user/' + this.props.match.params.id, UserObject)
            .then((res) => {
                console.log(res.data)
                console.log('User successfully updated')
            }).catch((error) => {
            console.log(error)
        })

        // Redirect to User List
        this.props.history.push('/user-list')
    }


    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                 <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail} />
                </Form.Group>
                <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="pass" value={this.state.user_password} onChange={this.onChangeUserPassword} />
                </Form.Group>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={this.state.user_name} onChange={this.onChangeUserName} />
                </Form.Group>

               
                <Form.Group controlId="Surname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" value={this.state.user_surname} onChange={this.onChangeUserSurname} />
                </Form.Group>
                
                <Form.Group controlId="AppRole">
                    <Form.Label>User Application Role</Form.Label>
                    <Form.Control type="text" value={this.state.user_app_role} onChange={this.onChangeUserAppRole} />
                </Form.Group>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="userApplicationRole"
                                id="User"
                                value="User"
                                checked={this.state.user_role==='User'}
                                onChange={this.onChangeUserRole}
                        />
                        <label className="form-check-label">User</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="userApplicationRole"
                                id="Admin"
                                value="Admin"
                                checked={this.state.user_role==='Admin'}
                                onChange={this.onChangeUserRole}
                        />
                        <label className="form-check-label">Admin</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input"
                                type="radio"
                                name="userApplicationRole"
                                id="Manager"
                                value="Manager"
                                checked={this.state.user_role==='Manager'}
                                onChange={this.onChangeUserRole}
                        />
                        <label className="form-check-label">Manager</label>
                    </div>
                </div>
                <div className="form-check">
                    <input  className="form-check-input"
                            id="completedCheckbox"
                            type="checkbox"
                            name="completedCheckbox"
                            onChange={this.onChangeUserInactive}
                            checked={this.state.user_inactive}
                            value={this.state.user_inactive}
                    />
                    <label className="form-check-label" htmlFor="activeCheckbox">
                        InActive
                    </label>
                </div>

                <br />

                <Button variant="danger" size="lg" block="block" type="submit">
                    Update User
                </Button>
            </Form>
        </div>);
    }
}
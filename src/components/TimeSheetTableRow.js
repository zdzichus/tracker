import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class ProjectTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteProject = this.deleteProject.bind(this);
    }


    deleteProject() {
        if (window.confirm('Do you realy want to delete this project permanently?')) {
            axios.delete('http://192.168.0.46:4000/projects/delete-project/' + this.props.obj._id)

            .then((res) => {
                console.log('Project successfully deleted!')
            }).catch((error) => {
            console.log(error)
        })   }
        window.location.reload()
    }

    render() {
             
        return ( <option>{this.props.obj.project_name}</option> );
    }
}

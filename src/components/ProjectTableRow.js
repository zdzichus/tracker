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
        return (
            <tr>
                <td>{this.props.obj.project_name}</td>
                <td>{this.props.obj.duration}</td>
                <td>{this.props.obj.start_day}</td>
                <td>{this.props.obj.finish_day}</td>
               

                <td>
                    <Link className="edit-link" to={"/edit-project/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteProject} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}
import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ProjectTableRow from './ProjectTableRow';


export default class ProjectList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Projects: []
        };
    }

    componentDidMount() {
        axios.get('http://192.168.0.46:4000/projects/')
            .then(res => {
                this.setState({
                    Projects: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
            
    }

    DataTable() {
        return this.state.Projects.map((res, i) => {
            return <ProjectTableRow obj={res} key={i} />;
        });
    }


    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Duration</th>
                    <th>Project Start</th>
                    <th>Project Finish</th>
                 
                </tr>
                </thead>
                <tbody>
                {this.DataTable()}
                </tbody>
            </Table>
        </div>);
    }
}
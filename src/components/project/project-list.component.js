import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import ProjectTableRow from './ProjectTableRow';
import axios from "../../config/axios";
import history from "../../config/history";


export default class ProjectList extends Component {

    constructor(props) {
        super(props)
         this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            Projects: []
        };
    }
  handleLogoutClick() {
     localStorage.removeItem("user")
     history.replace("/signin")
     this.props.history.push('/signin')
     
      
  }
    componentDidMount() {
        axios.get('/projects/')
            .then(res => {
                this.setState({
                    Projects: res.data
                   
                });
            })
            .catch((error) => {
                console.log(error);
            })
            
    }

    ProjectDataTable() {
        return this.state.Projects.map((res, i) => { 
            return <ProjectTableRow obj={res} key={i} />;
            
        });
    }


    render() {
        return (<div className="table-wrapper">
              <button onClick={() => this.handleLogoutClick()}>Logout</button>
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
                {this.ProjectDataTable() }
                
                </tbody>
            </Table>
        </div>);
    }
}



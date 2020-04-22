import "bootswatch/dist/yeti/bootstrap.min.css"; 
import React, { Component } from "react";
import axios from 'axios';
import Select from 'react-select';
import TimeSheetTableRow from './TimeSheetTableRow';
import Table from 'react-bootstrap/Table';

export default class CreateTimeSheet extends Component {
    constructor(props) {
        super(props);
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
            return <TimeSheetTableRow obj={res} key={i} />;
            
        });
    }


    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
               
                <tbody>
                 <label for="exampleSelect1">Project Names</label>
                <select class="form-control" id="exampleSelect1">
                 {this.DataTable() }
                </select>   
                </tbody>
            </Table>
        </div>);
    }
}
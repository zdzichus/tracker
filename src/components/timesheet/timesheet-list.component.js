import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TimeSheetTableRow from './TimeSheetTableRow';



export default class TimesheetList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            TimeSheets: []
        };
    }

    componentDidMount() {
        axios.get('http://192.168.0.46:4000/timesheets/')
            .then(res => {
                this.setState({
                    TimeSheets: res.data
                   
                });
            })
            .catch((error) => {
                console.log(error);
            })
            
    }

    DataTable() {
        return this.state.TimeSheets.map((res, i) => { 
            return <TimeSheetTableRow obj={res} key={i} />;
            
        });
    }


    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Vacation </th>
                    <th>Sick</th>
                    <th>working hours</th>
                    <th>Project Assigned </th>
                     <th>Date </th>
                      <th>Action</th>
                 
                </tr>
                </thead>
                <tbody>
                {this.DataTable() }
                
                </tbody>
            </Table>
        </div>);
    }
}



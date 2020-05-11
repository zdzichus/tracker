import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import TimeSheetTableRow from './TimeSheetTableRow';
import axios from "../../config/axios";
import history from "../../config/history";



export default class TimesheetList extends Component {

    constructor(props) {
        super(props)
          this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            TimeSheets: []
        };
    }

  handleLogoutClick() {
     localStorage.removeItem("user")
     history.replace("/signin")
     this.props.history.push('/signin')
     
      
  }
    componentDidMount() {
        axios.get('/timesheets/')
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
             <button onClick={() => this.handleLogoutClick()}>Logout</button>
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



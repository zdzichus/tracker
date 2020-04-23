import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class TimeSheetTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteTimeSheet = this.deleteTimeSheet.bind(this);
    }


    deleteTimeSheet() {
        if (window.confirm('Do you realy want to delete this TimeSheet permanently?')) {
            axios.delete('http://192.168.0.46:4000/timesheets/delete-timesheet/' + this.props.obj._id)

            .then((res) => {
                console.log('Timesheet successfully deleted!')
            }).catch((error) => {
            console.log(error)
        })   }
        window.location.reload()
    }

    render() {
        return (
            <tr>

           
                <td>{this.props.obj.timesheet_vacation}</td>
                <td>{this.props.obj.timesheet_sick_day}</td>
                <td>{this.props.obj.timesheet_project_work}</td>
                <td>{this.props.obj.project_name}</td>
                 <td>{this.props.obj.timesheet_date}</td>
              
                <td>
                    <Link className="edit-link" to={"/edit-timesheet/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteTimeSheet} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}
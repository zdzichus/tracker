import "bootswatch/dist/yeti/bootstrap.min.css"; 
import React, { Component } from "react";
import axios from 'axios';
import Select from 'react-select';
import TimeSheetTableRowProject from './TimeSheetTableRowProject';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateTimeSheet extends Component {
    constructor(props) {
        super(props);

      // Setting up functions
        this.onChangeTimeSheetVacation = this.onChangeTimeSheetVacation.bind(this);
        this.onChangeTimeSheetSickDay = this.onChangeTimeSheetSickDay.bind(this);
        this.onChangeTimeSheetProjectWork = this.onChangeTimeSheetProjectWork.bind(this);
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeTimesheetDate = this.onChangeTimesheetDate.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            timesheet_vacation: '',
            timesheet_sick_day: '',
			timesheet_project_work: '',
            project_name: '',
            timesheet_date: '',
         
            
            Projects: []
        };
    }
  
       onChangeTimeSheetVacation(e) {
        this.setState({
            timesheet_vacation: e.target.value
        })
    }

    onChangeTimeSheetSickDay(e) {
        this.setState({
            timesheet_sick_day: e.target.value
        })
    }

    onChangeTimeSheetProjectWork(e) {
        this.setState({
            timesheet_project_work: e.target.value
        })
	}
        
     onChangeProjectName(e) {
        this.setState({
            project_name: e.target.value
        })
    }
    
    onChangeTimesheetDate(e) {
        this.setState({
            timesheet_date: e.target.value
        })

    }
        
    
	   onSubmit(e) {
        e.preventDefault()

        const TimeSheetObject = {

            timesheet_vacation: this.state.timesheet_vacation,
            timesheet_sick_day: this.state.timesheet_sick_day,      
            timesheet_project_work: this.state.timesheet_project_work,
            project_name: this.state.project_name,
            timesheet_date: this.state.timesheet_date
            
        };
        axios.post('http://192.168.0.46:4000/timesheets/create-timesheet', TimeSheetObject)
            .then(res => console.log(res.data));

        this.setState({ timesheet_vacation: '', timesheet_sick_day: '', timesheet_project_work: '', project_name: '', timesheet_date: ''  })

        // Redirect to Timesheet List
        this.props.history.push('/timesheet-list')
        window.location.reload()
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

     TimeDataTable() {
        return this.state.Projects.map((res, i) => { 
        return < TimeSheetTableRowProject obj={res} key={i} />;
          
        });
    }


    render() {
        return (
            <div className="table-wrapper">
                <Form onSubmit={this.onSubmit}>
                  
                        <div class="col-lg-2">
                            <div class="bs-component">
                                <Form.Group controlId="Monday">
                                    <Form.Label>Monday</Form.Label>
                                         <Form.Control placeholder="vacation" type="figure" value={this.state.timesheet_vacation} onChange={this.onChangeTimeSheetVacation} />
                                         <Form.Control placeholder="sickness" type="figure" value={this.state.timesheet_sick_day} onChange={this.onChangeTimeSheetSickDay} />
                                         <Form.Control placeholder="project work" type="figure" value={this.state.timesheet_project_work} onChange={this.onChangeTimeSheetProjectWork} />
                                    </Form.Group>
                            </div>
                        </div>
                            <div  class="bs-component">
                                    <label for="exampleSelect1">Assing Project </label>                            
                                    <select class="form-control" id="exampleSelect1"value={this.state.project_name} onChange={this.onChangeProjectName}  >
                                    {this.TimeDataTable()}
                                    </select>
                            </div>
                             <Form.Group controlId="StartDay">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" value={this.state.timesheet_date} onChange={this.onChangeTimesheetDate} />
                                 </Form.Group>
                        <br></br>
                        <div>
                            <Button variant="danger" size="lg" block="block" type="submit">Submit </Button>
                        </div>

                
                </Form>

            </div>);
    }
}
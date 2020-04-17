import "bootswatch/dist/[yeti]/bootstrap.min.css"; 
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateTimeSheet extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeTimeSheetVacation = this.onChangeTimeSheetVacation.bind(this);
        this.onChangeTimeSheetSickDay = this.onChangeTimeSheetSickDay.bind(this);
        this.onChangeTimeSheetProjectWork = this.onChangeTimeSheetProjectWork.bind(this);
		this.onChangeTimeSheeDate = this.onChangeTimeSheetDate.bind(this);
		
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            timesheet_vacation: '',
            timesheet_sick_day: '',
			timesheet_project_work: '',
			 timesheet_date: '',
            }
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
	    onChangeTimeSheetDate(e) {
        this.setState({
            timesheet_date: e.target.value
        })
    }
	
	

    onSubmit(e) {
        e.preventDefault()

        const UserObject = {
            timesheet_vacation: this.state.timesheet_vacation,
            timesheet_sick_day: this.state.timesheet_sick_day,
            timesheet_date: this.timesheet_date,
           
        };
        axios.post('http://192.168.0.46:4000/timesheets/create-timesheet', UserObject)
            .then(res => console.log(res.data));

        this.setState({ timesheet_vacation: '', timesheet_sick_day: '', timesheet_project_work: '', timesheet_date: ''  })

        // Redirect to User List
        this.props.history.push('/timesheet-list')
    }

	newday(){
	var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleDateString();	
	
   }

    render() {
        return (<div className="form-wrapper">
			<Form onSubmit={this.onSubmit}>
			<div class="row">
				<div class="col-lg-2">
					 <div class="bs-component">
						<Form.Group controlId="Monday">
                    	<Form.Label>Monday</Form.Label><p>Date/Time: <span id="datetime" ></span></p>
                    	<Form.Control placeholder= "vacation" type="figure" value={this.state.timesheet_vacation} onChange={this.onChangeTimeSheetVacation} />
						<Form.Control placeholder= "sickness" type="figure" value={this.state.timesheet_sick_day} onChange={this.onChangeTimeSheetSickDay} />
						<Form.Control placeholder= "project work" type="figure" value={this.state.timesheet_project_work} onChange={this.onChangeTimeSheetProjectWork} />
               		 	</Form.Group>
					 </div>
				</div>
				<div class="col-lg-2">
					 <div class="bs-component">
						<Form.Group controlId="Tuesday">
                    <Form.Label>Tuesday</Form.Label>
                    <Form.Control placeholder= "vacation" type="figure" value={this.state.timesheet_vacation} onChange={this.onChangeTimeSheetVacation} />
					<Form.Control placeholder= "sickness" type="figure" value={this.state.timesheet_sick_day} onChange={this.onChangeTimeSheetSickDay} />
					<Form.Control placeholder= "project work" type="figure" value={this.state.timesheet_project_work} onChange={this.onChangeTimeSheetProjectWork} />
                </Form.Group>
					 </div>
				</div>
				<div class="col-lg-2">
					 <div class="bs-component">
						<Form.Group controlId="Wenesday">
                    <Form.Label>Wenesday</Form.Label>
                    <Form.Control placeholder= "vacation" type="figure" value={this.state.timesheet_vacation} onChange={this.onChangeTimeSheetVacation} />
					<Form.Control placeholder= "sickness" type="figure" value={this.state.timesheet_sick_day} onChange={this.onChangeTimeSheetSickDay} />
					<Form.Control placeholder= "project work" type="figure" value={this.state.timesheet_project_work} onChange={this.onChangeTimeSheetProjectWork} />
              	    </Form.Group>
					 </div>
				</div>
				<div class="col-lg-2">
					 <div class="bs-component">
						<Form.Group controlId="Thursday">
                    <Form.Label>Thursday</Form.Label>
                    <Form.Control placeholder= "vacation" type="figure" value={this.state.timesheet_vacation} onChange={this.onChangeTimeSheetVacation} />
					<Form.Control placeholder= "sickness" type="figure" value={this.state.timesheet_sick_day} onChange={this.onChangeTimeSheetSickDay} />
					<Form.Control placeholder= "project work" type="figure" value={this.state.timesheet_project_work} onChange={this.onChangeTimeSheetProjectWork} />
               		 </Form.Group> 
					 </div>
				</div>
				<div class="col-lg-2">
					 <div class="bs-component">
						<Form.Group controlId="Friday">
                    <Form.Label>Friday</Form.Label>
                    <Form.Control placeholder= "vacation" type="figure" value={this.state.timesheet_vacation} onChange={this.onChangeTimeSheetVacation} />
					<Form.Control placeholder= "sickness" type="figure" value={this.state.timesheet_sick_day} onChange={this.onChangeTimeSheetSickDay} />
					<Form.Control placeholder= "project work" type="figure" value={this.state.timesheet_project_work} onChange={this.onChangeTimeSheetProjectWork} />
               		 </Form.Group>
					 </div>
				</div>
				<div class="col-lg-2">
					 <div class="bs-component">
						<Form.Group controlId="Suturday">
                    <Form.Label>Suturday</Form.Label>
                    <Form.Control placeholder= "vacation" type="figure" value={this.state.timesheet_vacation} onChange={this.onChangeTimeSheetVacation} />
					<Form.Control placeholder= "sickness" type="figure" value={this.state.timesheet_sick_day} onChange={this.onChangeTimeSheetSickDay} />
					<Form.Control placeholder= "project work" type="figure" value={this.state.timesheet_project_work} onChange={this.onChangeTimeSheetProjectWork} />
               		 </Form.Group>
					 </div>
				</div>
				<div class="col-lg-2">
					 <div class="bs-component">
						<Form.Group controlId="Sunday">
                    <Form.Label>Sunday</Form.Label>
                    <Form.Control placeholder= "vacation" type="figure" value={this.state.timesheet_vacation} onChange={this.onChangeTimeSheetVacation} />
					<Form.Control placeholder= "sickness" type="figure" value={this.state.timesheet_sick_day} onChange={this.onChangeTimeSheetSickDay} />
					<Form.Control placeholder= "project work" type="figure" value={this.state.timesheet_project_work} onChange={this.onChangeTimeSheetProjectWork} />
                	</Form.Group>
					 </div>
				</div>
			</div>			
                <div class="col-lg-6">
                <Button variant="danger" size="lg" block="block" type="submit">Submit TimeSheets</Button>
				</div>
	 </Form>
        </div>);
    }
}
import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import FormGroup from "react-bootstrap/FormGroup";


export default class CreateTimeSheet extends Component {

    constructor(props) {
        super(props);

        this.onChangeWorkingHoursChange = this.onChangeWorkingHoursChange.bind(this);  
        this.onChangeVacationHoursChange = this.onChangeVacationHoursChange.bind(this);
        this.onChangeSickHoursChange = this.onChangeSickHoursChange.bind(this);   

        this.state = {
            working_hours: '',
            vacation_hours: '',
            sick_hours: '',
        };   
    }
    onChangeWorkingHoursChange (e) {
        let working_hours = e.target.value;

            this.setState({
                working_hours: e.target.value
            })
        }

    onChangeVacationHoursChange (e) {
        let vacation_hours = e.target.value;

            this.setState({
                vacation_hours: e.target.value
            })
        }
    onChangeSickHoursChange (e) {
        let onChangeSickHoursChange = e.target.value;

            this.setState({
                sick_hours: e.target.value
            })
        }

       state = {
            date: "",
            tomorrow: ""
       };

        componentDidMount() {
        this.getDate();
        
        }

        getDate = () => {
        var date = new Date().toDateString();
        this.setState({ date });
          
        };
        
        render() {
        const { date } = this.state;     
        return (<div className="form-wrapper">
			<Form onChange={this.onChangeWorkingHoursChange}>
			<div class="row">
				<div class="col-lg-3">
					 <div class="bs-component">
						<Form.Group controlId="Monday">
                    	<div> {date}</div>
                    	<Form.Check  placeholder= "working hours" type="tel" value={this.state.working_hours} onChange={this.onChangeWorkingHoursChange} />
						<Form.Check  placeholder= "vacation hours" type="tel" value={this.state.vacation_hours} onChange={this.onChangeVacationHoursChange} />
                        <Form.Check  placeholder= "sick hours" type="tel" value={this.state.sick_hours} onChange={this.onChangeSickHoursChange} />
                        </Form.Group>
                        <div>Working Hours{this.state.working_hours}</div>
                        <div>Working Hours{this.state.vacation_hours} </div>
                        <div>Working Hours{this.state.sick_hours}</div>
					 </div>
				</div>
				
			</div>			
               
	   </Form>
        </div>);
    }


}


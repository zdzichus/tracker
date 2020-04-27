import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditProject extends Component {

    constructor(props) {
        super(props)

       this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeStartDay= this.onChangeStartDay.bind(this);
        this.onChangeFinishDay= this.onChangeFinishDay.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            project_name: '',
            duration: '',
            start_day: '',
            finish_day: '',
          

        }
    }

    componentDidMount() {
        axios.get('http://192.168.0.46:4000/projects/edit-project/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    project_name: res.data.project_name,
                    duration: res.data.duration,
                    start_day: res.data.start_day,
                    finish_day: res.data.finish_day,
                  
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeProjectName(e) {
        this.setState({
            project_name: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeStartDay(e) {
        this.setState({
            start_day: e.target.value
        })
    }


    onChangeFinishDay(e) {
        this.setState({
            finish_day: e.target.value
        })
    }

   


    onSubmit(e) {
        e.preventDefault()

        const ProjectObject = {
            project_name: this.state.project_name,
            duration: this.state.duration,
            start_day: this.state.start_day,
            finish_day: this.state.finish_day,
        

        };

        axios.put('http://192.168.0.46:4000/projects/update-project/' + this.props.match.params.id, ProjectObject)
            .then((res) => {
                console.log(res.data)
                console.log('Project successfully updated')
            }).catch((error) => {
            console.log(error)
        })

        // Redirect to Project List
        this.props.history.push('/project-list')
    }


   render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="ProjectName">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control type="text" value={this.state.project_name} onChange={this.onChangeProjectName} />
                </Form.Group>

                <Form.Group controlId="Duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="text" value={this.state.duration} onChange={this.onChangeDuration} />
                </Form.Group>
                <Form.Group controlId="StartDay">
                    <Form.Label>Start Day</Form.Label>
                    <Form.Control type="date" value={this.state.start_day} onChange={this.onChangeStartDay} />
                </Form.Group>
                <Form.Group controlId="Password">
                    <Form.Label>Finish Day</Form.Label>
                    <Form.Control type="date" value={this.state.finish_day} onChange={this.onChangeFinishDay} />
                        
                </Form.Group>
               
              

                <Button variant="danger" size="lg" block="block" type="submit">
                  Update Project
                </Button>
            </Form>
        </div>);
    }
}
import "bootswatch/dist/yeti/bootstrap.min.css"; 
import React, { Component } from "react";
import axios from 'axios';
import Select from 'react-select';

export default class CreateTimeSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Projects: []
        };
    }

    getProjectsData() {
        axios.get('http://192.168.0.46:4000/projects/')

            .then(res => {
                const data = res.data
                console.log(data)
                const projects = data.map( u =>
             
                    
                <p>{u.project_name}</p>
                  
             
                 
                )
                this.setState({
                    projects
                })

                   
            })

    }


    componentDidMount() {
        this.getProjectsData()
    }


    render() {
        return (
            <div>
              
                  {this.state.projects} 

              
            </div>
        )
    }
}

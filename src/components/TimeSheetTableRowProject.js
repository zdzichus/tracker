import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


export default class TimeSheetTableRowProject extends Component {

   
    

    render() {
             
        return ( <option>{this.props.obj.project_name}</option> );
         

    }
}

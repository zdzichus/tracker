import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";

const Dashboard = props => {
  return (
    <div>
      <div>
        <h1>Dashboard </h1>
        <h1>Status: {props.loggedInStatus} </h1>
        <h2>Logged user:{props.user_name} </h2>
      </div>
    </div>

  );
};
export default Dashboard;
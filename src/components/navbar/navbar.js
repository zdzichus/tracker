import React, { Component } from 'react';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


  function render_navbar() {
    return (
         <div className="Navbar">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signin"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/register-user"}>Register</Link>
                  </li>
                   <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Home</Link>
                  </li>
                 
                </ul>
              </div>
            </div>
          </nav>
        </div>
   
    );
  }


export default render_navbar;
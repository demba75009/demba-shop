import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom";

import Style from "./TheHeader.module.css";

const TheHeader = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="navbar bg-danger">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <NavLink className="navbar-br text-dark p-3 " to="/Product">
          Demba Shop
        </NavLink>
        <button
          onClick={() => setShow(!show)}
          className="navbar-toggler btn btn-outline-secondary"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={` ${show ? "show" : ""}collapse navbar-collapse`}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" onClick={() => setShow(!show)}>
              <NavLink className="nav-link" to="/AddProduct">
                AddProduct
              </NavLink>
            </li>
           
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item" onClick={() => setShow(!show)}>
              <NavLink className="nav-link" to="/Panier">
                Panier
              </NavLink>
            </li>
          </ul>

  <ul className="navbar-nav">
            <li className="nav-item" onClick={() => setShow(!show)}>
            <a className="nav-link" href="https://fr.linkedin.com/in/demba-kante-68510714b">
              <i className="fab fa-linkedin text-primary"></i>
              </a>
            </li>
          </ul>



        </div>


      </nav>
      <h6 className = "animate__animated animate__heartBeat animate__infinite">Kante Demba</h6>

    </div>
  );
};

export default TheHeader;

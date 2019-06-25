import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-body">
        <div className="navbar">
          <div className="avatar">
            <div className="user-display">USER</div>
          </div>
          <div className="home-icon">
            <Link to="/dashboard">
              <Icon.Home size={40} className="icons" />
            </Link>
          </div>
          <div className="add-icon">
            <Link to="/post">
              <Icon.FilePlus size={40} className="icons" />
            </Link>
          </div>
          <div className="power-icon">
            <Link to="/auth">
              <Icon.Power size={40} className="icons" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

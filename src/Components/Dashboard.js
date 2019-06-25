import React, { Component } from "react";
import * as Icon from "react-feather";
import { Link } from 'react-router-dom'

import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-console">
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
    );
  }
}

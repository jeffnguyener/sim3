import React, { Component } from "react";
import * as Icon from "react-feather";

import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-console">
        <div className="avatar">
          <div className="user-display">USER</div>
        </div>
        <div className="home-icon">
          <Icon.Home size={40} />
        </div>
        <div className="add-icon">
          <Icon.FilePlus size={40} />
        </div>
        <div className="power-icon">
          <Icon.Power size={40} />
        </div>
      </div>
    );
  }
}

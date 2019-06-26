import React, { Component } from "react";

import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashContainer">
        <div className="dash-console">
          <div className="dash-search" />
        </div>
        <div className="post-container">
          {}
          <div className="dash-profile" />
        </div>
      </div>
    );
  }
}

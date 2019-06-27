import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { updateUser, clearUser } from "../redux/reducer";
import * as Icon from "react-feather";
import { connect } from "react-redux";

import "./Nav.css";

class Nav extends Component {

  componentDidMount() {
    axios
      .get("/auth/usersposts")
      .then(res => {
        this.props.updateUser(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  handUserLogout = () => {
    axios.get("/auth/logout").then(res => {
      this.props.clearUser();
      window.alert(res.data);
      this.props.history.push("/");
    });
  };

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
            <button onClick={this.handUserLogout}>
              <Icon.Power size={40} className="icons" />
              </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

const mapDispatchToProps = {
  clearUser,
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

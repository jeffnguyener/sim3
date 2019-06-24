import React, { Component } from "react";
import axios from "axios";
import { updateUser } from "../redux/reducer";
import { connect } from "react-redux";
import styled from "styled-components";

import "./Login.css";

const Button = styled.button`
  font-family: sans-serif;
  font-size: 12px;
  border: none;
  padding: 5px 10px;
  background: gray;
  color: white;
  &:hover {
    background: black;
    cursor: pointer;
  }
`;

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    axios.get("/auth/login").then(res => {
      this.props.updateUser(res.data);
      this.props.history.push("/dashboard");
    });
  }
  handleLoginInfoUpdate(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleUserLogin(e) {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post("/auth/login", { username, password })
      .then(res => {
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <body>
        <div className="login-form">
          <span className="skull" role="img" aria-label="skull">
            ☠︎
          </span>
          <br />
          <br />
          <h1 classname="helo">helo</h1>
          <br />
          <br />
          <form onSubmit={this.handleUserLogin}>
            <label className="username-input" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              onChange={this.handleLoginInfoUpdate}
            />
            <br />
            <br />
            <label className="password-input" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={this.handleLoginInfoUpdate}
            />
            <br />
            <br />
            <div className="button-space">
            <Button>Login</Button>
            <Button>Register</Button>
            </div>
          </form>
        </div>
      </body>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(
  mapStateToProps,
  { updateUser }
)(Auth);

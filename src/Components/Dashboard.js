import React, { Component } from "react";
import axios from 'axios'
import { connect } from 'react-redux'

import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('/auth/usersposts')
      .then(res => this.setState({posts: res.data}))
  }

  render() {
    const allPosts = this.state.posts.map(posts => {
      console.log(this.state)
      return (
        <div key={posts.id}>
          <div>{posts.title}</div>
          <div>{posts.img}</div>
          <div>{posts.content}</div>
        </div>
      )
    })
    return (
      <div className="dashContainer">
        <div className="dash-console">
          <div className="dash-search" />
        </div>
        <div className="post-container">
          {allPosts}
          <div className="dash-profile" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Dashboard);
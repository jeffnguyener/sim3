import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Post extends Component {
    state = {
        title: '',
        img: '',
        content: ''
    }

    handleNewPost= () => {
        const { title, img, content } = this.state
        axios.post('/user/newpost', {
            title, img, content
        }).then(res => {
            this.props.history.push('/dashboard')
        })
    }

    handleUpdateInfo = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
      };

    render() {
        return (
            <div>
                <form onSubmit={this.handleUpdateUser}>
                <label className="title-input" htmlFor="title">
                Title:
              </label>
              <br />
              <input
                type="text"
                id="title"
                onChange={this.handleUpdateInfo}
              />
              <br />
              <br />
              {}
              <br />
              <br />
              <br />
              <label className="img-input" htmlFor="img">
                Image URL:
              </label>
              <br />
              <input
                type="text"
                id="title"
                onChange={this.handleUpdateInfo}
              />
              <br />
              <br />
              <label className="content-input" htmlFor="content">
                Image URL:
              </label>
              <br />
              <input
                type="text"
                id="content"
                onChange={this.handleUpdateInfo}
              />
              <br />
              <br />
              <button>Post</button>
              </form>
            </div>
        )
    }
}

export default connect()(Post);
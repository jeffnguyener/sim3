import React, { Component } from 'react'
import axios from 'axios'
import { updateUser } from '../redux/reducer'
import { connect } from 'react-redux'

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    
    componentDidMount(){
        axios.get('/auth/login').then((res) => {
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
        })
    }
    handleLoginInfoUpdate(e){
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleUserLogin(e){
        e.preventDefault()
        const { username, password } = this.state
        axios.post('/auth/login', { username, password })
        .then((res) => {
            this.props.history.push('/dashboard')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {updateUser})(Auth);
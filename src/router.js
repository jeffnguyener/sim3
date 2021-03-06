import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Auth from './Components/Auth'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import Nav from './Components/Nav'
import Post from './Components/Post'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/new' component={Form} />
        <Route path='/nav' component={Nav} />
        <Route path='/post/:postid' component={Post} />
    </Switch>
)
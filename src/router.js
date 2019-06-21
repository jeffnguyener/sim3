import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Auth from './Components/Auth'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import Nav from './Components/Nav'
import Post from './Components/Post'

export default (
    <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/form' component={Form} />
        <Route path='/nav' component={Nav} />
        <Route path='/post' component={Post} />
    </Switch>
)
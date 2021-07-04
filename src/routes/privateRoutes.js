import React from 'react'
import { PostFeed, EditProfile, UserProfile } from './../pages'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export default function PrivateRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Posts" />
        </Route>
        <Route path="/Added" exact>
          <Redirect to="/Posts" />
        </Route>
        <Route path="/Posts" component={PostFeed} />
        <Route path="/Modifier" component={EditProfile} />
        <Route path="/User" component={UserProfile} />
        <Route path="User/:email" children={UserProfile} />
      </Switch>
    </Router>
  )
}

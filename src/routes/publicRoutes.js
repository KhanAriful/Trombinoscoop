import React from 'react'
import { LoginPage, SignupPage, PostFeed, EditProfile, UserProfile } from './../pages'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export default function PublicRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Connexion" />
        </Route>
        <Route path="/Connexion" component={LoginPage} />
        <Route path="/Inscription" component={SignupPage} />
        <Route path="/Posts" component={PostFeed} />
        <Route path="/Modifier" component={EditProfile} />
        <Route path="/User" component={UserProfile} />
      </Switch>
    </Router>
  )
}

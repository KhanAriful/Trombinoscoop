import React from 'react'
import { LoginPage, SignupPage } from './../pages'
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom'

export default function PublicRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Connexion" />
        </Route>
        <Route path="/Connexion" component={LoginPage} />
        <Route path="/Inscription" component={SignupPage} />
      </Switch>
    </Router>
  )
}

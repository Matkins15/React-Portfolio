import React from 'react'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Portfolio from './containers/Portfolio/Portfolio'
import Contact from './containers/Contact/Contact'
import App from './containers/App/App'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='portfolio' component={Portfolio} />
      <Route path='contact' component={Contact} />
    </Route>
  </Router>
)

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
    </Route>
    <Route path='/about' component={App}>
      <IndexRoute component={About} />
    </Route>
    <Route path='/portfolio' component={App}>
      <IndexRoute component={Portfolio} />
    </Route>
    <Route path='/contact' component={App}>
      <IndexRoute component={Contact} />
    </Route>
  </Router>
)

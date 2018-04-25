import React, { Component } from 'react'
import { Navigation } from './Nav.style'
import { Link } from 'react-router'

export default class Nav extends Component {
  render () {
    return (
      <Navigation>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/contact'>Contact</Link>
        </ul>
      </Navigation>
    )
  }
}

import React, { Component } from 'react'
import { Navigation } from './nav.style'
import { Link } from 'react-router'

export default class Nav extends Component {
  render () {
    return (
      <Navigation>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link>Portfolio</Link>
          <Link>Contact</Link>
        </ul>
      </Navigation>
    )
  }
}


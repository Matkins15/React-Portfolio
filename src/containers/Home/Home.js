import React, { Component, PropTypes } from 'react'
import { Container } from '../../theme/layout'
import Nav from '../../containers/Nav/Nav'
import { LandingImage, RevealP } from './Home.style'
import Canvas from '../../containers/Canvas/Canvas.js'

class Home extends Component {

  render () {
    return (
      <div>
        <Nav />
        <Container>
          <Canvas />
          <h1>Matthew Atkins</h1>
          <h4>Front End Developer</h4>
        </Container>
      </div>
    )
  }
}

export default Home

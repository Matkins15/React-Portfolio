import React, { Component, PropTypes } from 'react'
import { Container } from '../../theme/layout'
import Nav from '../../containers/Nav/Nav'
import { CenterText } from './Home.style'
import Canvas from '../../containers/Canvas/Canvas.js'

class Home extends Component {

  render () {
    const name = {
      fontSize: '5em'
    }

    const title = {
      fontSize: '2em'
    }
    return (
      <div>
        <Nav />
        <Container>
          <Canvas />
          <CenterText>
            <span style={name}>Matthew Atkins</span>
            <span style={title}>Front End Developer</span>
          </CenterText>
        </Container>
      </div>
    )
  }
}

export default Home

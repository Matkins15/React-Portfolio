import React, { Component, PropTypes } from 'react'
import { Container } from '../../theme/layout'
import { CenterText } from './Home.style'
import Canvas from '../../containers/Canvas/Canvas.js'
import Radium from 'radium'

class Home extends Component {

  render () {
    const name = {
      fontSize: '100px',
      letterSpacing: '.15em'
    }

    const title = {
      fontSize: '50px',
      letterSpacing: '.1em'
    }
    return (
      <div>
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

export default Radium(Home)

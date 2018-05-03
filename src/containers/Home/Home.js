import React, { Component, PropTypes } from 'react'
import { Container } from '../../theme/layout'
// import Nav from '../../containers/Nav/Nav'
import { CenterText } from './Home.style'
import Canvas from '../../containers/Canvas/Canvas.js'

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
        {/* <Nav /> */}
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

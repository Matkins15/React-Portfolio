import React, { Component, PropTypes } from 'react'
import { Container } from '../../theme/layout'
import Nav from '../../containers/Nav/Nav'
import { LandingImage, RevealP } from './Home.style'
// import WhenInView from 'components/WhenInView/WhenInView'

class Home extends Component {

  render () {
    let portfolioItems
    return (
      <div>
        <Nav />
        <Container>
          <LandingImage>
            <h1>Matthew Atkins</h1>
            <h4>Front End Developer</h4>
          </LandingImage>
          <RevealP hide={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </RevealP>
        </Container>
      </div>
    )
  }
}

export default Home

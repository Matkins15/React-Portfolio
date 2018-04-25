import React, { Component, PropTypes } from 'react'
import { Container } from '../../theme/layout'
import { Link } from 'react-router'
import { Nav, LandingImage, RevealP } from './Home.style'
// import WhenInView from 'components/WhenInView/WhenInView'

export default class Home extends Component {
  // static PropTypes = {}

  render () {
    return (

      <Container>
        <Nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link>Portfolio</Link>
          <Link>Contact</Link>
        </Nav>

        <LandingImage>
          <h1>Matthew Atkins</h1>
          <h4>Front End Developer</h4>
        </LandingImage>
        {/* <Image src={require('../../assets/music-store.jpg')} alt='music-store'/> */}
        {/* <WhenInView>
          {({IsInView}) => {

          }}
        </WhenInView> */}
        <RevealP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </RevealP>
      </Container>
    )
  }
}

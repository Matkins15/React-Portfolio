import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import Container from '../theme/layout/Container'
import { Link } from 'react-router';


const Image = styled.img`
  width: 100vw;
  height: 80vh; 
 `

 const Nav = styled.div`
   width: 100vw;
   height: 10vh;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
 `
 

export default class Home extends Component {
  static PropTypes = {}

  render () {
    return (
      <div>
        <Nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link>Portfolio</Link>
          <Link>Contact</Link>
        </Nav>
        <Image src={require('../assets/music-store.jpg')} alt='music-store'/>
        <Container>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Container>
      </div>
    )
  }
}

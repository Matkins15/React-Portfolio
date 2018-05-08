import React, { Component } from 'react'
// import { Navigation } from './Nav.style'
import { Link } from 'react-router'
import { stack as Menu } from 'react-burger-menu'

export default class Nav extends Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    const styles = {
      /* Position and sizing of burger button */
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      /* Color/shape of burger icon bars */
      bmBurgerBars: {
        background: '#373a47'
      },
      /* Position and sizing of clickable cross button */
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      /* Color/shape of close button cross */
      bmCross: {
        background: '#bdc3c7'
      },
      /* General sidebar styles */
      bmMenu: {
        // background: '#e3e3e3',
        background: '#000',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMenuWrap: {
        position: 'fixed',
        right: 'inherit',
        zIndex: '1100',
        height: '100%',
        transform: 'translate3d(-300px, 0px, 0px)',
        transition: 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
      },
      /* Morph shape necessary with bubble or elastic */
      bmMorphShape: {
        fill: '#373a47'
      },
      /* Wrapper for item list */
      bmItemList: {
        color: '#fff',
        padding: '0.8em'
      },
      /* Styling of overlay */
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }

    const link = {
      color: '#fff',
      textDecoration: 'none',
      padding: '.25em 0em'
    }

    return (
      // <Navigation>
      <Menu styles={styles} isOpen={false} >
        <Link style={link} to='/'>Home</Link>
        <Link style={link} to='/about'>About</Link>
        <Link style={link} to='/portfolio'>Portfolio</Link>
      </Menu>
      // </Navigation>
    )
  }
}

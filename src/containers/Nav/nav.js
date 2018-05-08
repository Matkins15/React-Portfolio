import React, { Component } from 'react'
// import { Navigation } from './Nav.style'
import { Link } from 'react-router'
import { stack as Menu } from 'react-burger-menu'

export default class Nav extends Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#e3e3e3',
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
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#fff',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }
    return (
      // <Navigation>
      <Menu styles={styles} isOpen={false}>
        <Link className='menu-item' to='/'>Home</Link>
        <Link className='menu-item' to='/about'>About</Link>
        <Link className='menu-item' to='/portfolio'>Portfolio</Link>
      </Menu>
      // </Navigation>
    )
  }
}

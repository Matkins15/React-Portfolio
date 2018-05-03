import React, { Component } from 'react'
// import { Navigation } from './Nav.style'
import { Link } from 'react-router'
import { slide as Menu } from 'react-burger-menu'

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
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }
    return (
      // <Navigation>
      <div id='outer-container'>
        <main id='page-wrap'>
          <Menu styles={styles}>
            <Link className='menu-item' to='/'>Home</Link>
            <Link className='menu-item' to='/about'>About</Link>
            <Link className='menu-item' to='/portfolio'>Portfolio</Link>
            <Link className='menu-item' to='/contact'>Contact</Link>
          </Menu>
        </main>
      </div>
      // </Navigation>
    )
  }
}

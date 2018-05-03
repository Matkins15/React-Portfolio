import React, { Component } from 'react'
// import { Navigation } from './Nav.style'
import { Link } from 'react-router'
import { stack as Menu } from 'react-burger-menu'

export default class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: props.isOpen
    }
    console.log(props)
  }
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({
      menuOpen: this.state.menuOpen
    })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({
      menuOpen: false
    })
    console.log(this.state.menuOpen)
    console.log('i was clicked')
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  toggleMenu () {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
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
        background: '#333',
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
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }
    return (
      // <Navigation>
      <Menu styles={styles}>
        <Link onClick={() => this.closeMenu()} className='menu-item' to='/'>Home</Link>
        <Link onClick={() => this.closeMenu()} className='menu-item' to='/about'>About</Link>
        <Link onClick={() => this.closeMenu()} className='menu-item' to='/portfolio'>Portfolio</Link>
        <Link onClick={() => this.closeMenu()} className='menu-item' to='/contact'>Contact</Link>
      </Menu>
      // </Navigation>
    )
  }
}

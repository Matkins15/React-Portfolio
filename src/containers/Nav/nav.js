import React, { Component } from 'react'
import { Link } from 'react-router'
import { stack as Menu } from 'react-burger-menu'
import Radium from 'radium'

class Nav extends Component {
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
        background: '#ffffff'
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
        color: 'red',
        padding: '0.8em'
      },
      /* Styling of overlay */
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      },
      link: {
        color: '#fff',
        textDecoration: 'none',
        padding: '.25em 0em',
        textTransform: 'uppercase',

        ':hover': {
          color: 'red'
        }
      }
    }

    // const link = {
    //   color: '#fff',
    //   textDecoration: 'none',
    //   padding: '.25em 0em',
    //   textTransform: 'uppercase'
    // }

    return (
      <Menu styles={styles} isOpen={false} >
        <Link style={styles.link} to='/'>Home</Link>
        <Link style={styles.link} to='/about'>About</Link>
        <Link style={styles.link} to='/portfolio'>Portfolio</Link>
      </Menu>
    )
  }
}

export default Radium(Nav, Link)

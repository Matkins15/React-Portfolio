import React, { Component } from 'react'
import Nav from '../../containers/Nav/Nav'

class App extends Component {

  componentWillMount () {
    document.body.style.margin = '0'
  }
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     menuOpen: false
  //   }
  // }
  // // This keeps your state in sync with the opening/closing of the menu
  // // via the default means, e.g. clicking the X, pressing the ESC key etc.
  // handleStateChange (state) {
  //   this.setState({
  //     menuOpen: state.isOpen
  //   })
  // }
  //
  // // This can be used to close the menu, e.g. when a user clicks a menu item
  // closeMenu () {
  //   this.setState({
  //     menuOpen: false
  //   })
  // }
  //
  // // This can be used to toggle the menu, e.g. when using a custom icon
  // // Tip: You probably want to hide either/both default icons if using a custom icon
  // toggleMenu () {
  //   this.setState({
  //     menuOpen: !this.state.menuOpen
  //   })
  // }

  render () {
    return (
      <div>
        <Nav width={'20%'} />
        {this.props.children}
      </div>
    )
  }
}

export default App

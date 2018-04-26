import React, { Component } from 'react'
// import { Portfolio } from './containers/Portfolio/Portfolio'

class App extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App

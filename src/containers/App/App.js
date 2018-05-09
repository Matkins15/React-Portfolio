import React, { Component } from 'react'
import Nav from '../../containers/Nav/Nav'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

class App extends Component {
  componentWillMount () {
    document.body.style.margin = '0'
  }

  render () {
    const images = require.context('../../assets', true)

    return (
      <MuiThemeProvider>
        <div>
          <Nav />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App

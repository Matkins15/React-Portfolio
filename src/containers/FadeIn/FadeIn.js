import React, { Component } from 'react'
import { ReactCSSTransitionGroup } from 'react-transition-group'

class FadeIn extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName='toggle'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {this.props.hidden} ? null : <div className='toggle-base'>{this.props.children}></div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
export default FadeIn

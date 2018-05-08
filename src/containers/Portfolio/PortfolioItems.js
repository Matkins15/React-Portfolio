import React, { Component } from 'react'
import { Container } from '../../theme/layout'

class PortfolioItems extends Component {
  render () {
    let items
    if (this.props.port.portfolio) {
      console.log(this.props.port.portfolio)
    }
    return (
      <div>
        <h1>PortfolioItems</h1>
        <div>
          {this.props.port.portfolio.map((item) =>
            <div>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <img src='{item.imageUrl}' />
            </div>
           )}
        </div>
      </div>
    )
  }
}

export default PortfolioItems

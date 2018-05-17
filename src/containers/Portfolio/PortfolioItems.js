import React, { Component } from 'react'
import { Container } from '../../theme/layout'

class PortfolioItems extends Component {
  render () {
    // let items
    if (this.props.port.sellr) {
      console.log(this.props.port.sellr)
    }

    const image = {
      height: '40vh'
    }

    return (
      <div>
        <h1>Sellr</h1>
        <div>
          {this.props.port.sellr.map((item) =>
            <div>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <img style={image} src={item.imageUrl} />
            </div>
           )}
        </div>
      </div>
    )
  }
}

export default PortfolioItems

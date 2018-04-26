import React, { Component } from 'react'

class PortfolioItems extends Component {
  render () {
    console.log(this.props.portfolio)
    let items
    if (this.props.portfolio) {
      items = this.props.portfolio.map(key => key.name)
      console.log(items)
    }
    return (
      <div>
        <h1>PortfolioItems</h1>
        <li>
          {items}
        </li>
      </div>
    )
  }
}

export default PortfolioItems

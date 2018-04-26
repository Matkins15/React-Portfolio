import React, { Component } from 'react'

class PortfolioItems extends Component {
  render () {
    let items
    if (this.props.portfolio) {
      items = this.props.portfolio.map(portfolioObj => {
        let newPortObj = {}
        newPortObj.name = portfolioObj.name
        newPortObj.description = portfolioObj.description
        newPortObj.image = portfolioObj.image
        console.log(newPortObj)
        return newPortObj
      })
    }
    return (
      <div>
        <h1>PortfolioItems</h1>

      </div>
    )
  }
}

export default PortfolioItems

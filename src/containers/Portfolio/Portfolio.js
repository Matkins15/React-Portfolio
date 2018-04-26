import React, { Component } from 'react'
import Nav from '../../containers/Nav/Nav'

export default class Portfolio extends Component {
  constructor () {
    super()
    this.state = {
      portfolio: [
        {
          name: 'Sellr Store Owner Navigation View',
          description: 'quick links landing page for users to easily navigate though dashboard ',
          image: 'src/assets/quickLinksView.png'
        },
        {
          name: 'Sellr Edit Product View',
          description: 'user administrative edit product dashboard view',
          image: 'src/assets/EditStoreProduct.png'
        }
      ]
    }
  }
  render () {
    let portfolioItems
    if (this.state.portfolio) {
      portfolioItems = this.state.portfolio.map(portfolio => {
        console.log(portfolio)
      })
    }
    return (
      <div>
        <Nav />
        <h1>Portfolio Stuff</h1>
      </div>
    )
  }
}

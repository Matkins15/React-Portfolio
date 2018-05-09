import React, { Component } from 'react'
import Nav from '../../containers/Nav/Nav'
import PortfolioItems from '../../containers/Portfolio/PortfolioItems'
import { Container } from '../../theme/layout'

class Portfolio extends Component {
  constructor () {
    super()
  }

  render () {
    const images = require.context('../../assets', true)
    const dog = images('./quickLinksView.png')
    console.log(dog)
    let port = {
      portfolio: [
        {
          name: 'Sellr Dashboard',
          description: 'Tool to used to allow users to manage store products, ads and store details that are presented on store tablets and websites.',
          imageUrl: dog
        },
        {
          name: 'Sellr Mobile',
          description: 'App used to add, delete and update store products.' }
      ]
    }
    return (
      <Container>
        <PortfolioItems key={port.portfolio.name} port={port} />
      </Container>
    )
  }
}

export default Portfolio

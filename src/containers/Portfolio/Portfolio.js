import React, { Component } from 'react'
import Nav from '../../containers/Nav/Nav'
import PortfolioItems from '../../containers/Portfolio/PortfolioItems'
import { Container } from '../../theme/layout'

export default class Portfolio extends Component {
  render () {
    let port = {
      portfolio: [
        {
          name: 'Sellr Store Owner Navigation View',
          description: 'quick links landing page for users to easily navigate though dashboard ',
          imageUrl: require('../../assets/quickLinksView.png')
        },
        {
          name: 'Sellr Edit Product View',
          description: 'user administrative edit product dashboard view',
          imageUrl: require('../../assets/EditStoreProduct.png')
        }
      ]
    }
    return (
      <Container>
        <PortfolioItems key={port.portfolio.name} port={port} />
      </Container>
    )
  }
}

import React, { Component } from 'react'
import Nav from '../../containers/Nav/Nav'
import PortfolioItems from '../../containers/Portfolio/PortfolioItems'
import { Container } from '../../theme/layout'
import { Wrapper } from './Portfolio.style'

class Portfolio extends Component {
  constructor () {
    super()
  }

  render () {
    const images = require.context('../../assets', true)
    const quickLinks = images('./quickLinksView.png')
    const editStore = images('./editStoreProduct.png')

    const eventr = {
      width: '300px',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #E0E0E0',
      backgroundColor: '#F8F8F8'
    }
    const sellr = {
      width: '300px',
      height: '300px'
    }

    const logos = {
      opacity: '.7'
    }

    let port = {
      portfolio: [
        {
          name: 'Sellr Dashboard',
          description: 'Tool to used to allow users to manage store products, ads and store details that are presented on store tablets and websites.',
          imageUrl: quickLinks
        },
        {
          name: 'Sellr Mobile',
          description: 'App used to add, delete and update store products.',
          imageUrl: editStore
        }
      ]
    }
    return (
      <Container>
        <Wrapper>
          <a><img style={sellr} src={require(`../../assets/sellrLogo.jpg`)} /></a>
          <div style={eventr}>
            <img style={logos} src={require(`../../assets/eventrLogo.png`)} />
          </div>
        </Wrapper>
        <PortfolioItems key={port.portfolio.name} port={port} />
      </Container>
    )
  }
}

export default Portfolio

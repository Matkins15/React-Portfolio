import React, { Component } from 'react'
import Nav from '../../containers/Nav/Nav'
import PortfolioItems from '../../containers/Portfolio/PortfolioItems'
// import { Container } from '../../theme/layout'
import { Wrapper, PortfolioContainer } from './Portfolio.style'

class Portfolio extends Component {
  constructor () {
    super()
  }

  render () {
    const images = require.context('../../assets', true)
    const quickLinks = images('./quickLinksView.png')
    const editStore = images('./editStoreProduct.png')

    const title = {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '2em',
      fontSize: '1em',
      letterSpacing: '.4em',
      fontWeight: '500'
    }

    const sellr = {
      width: '30vw',
      height: '45vh',
      padding: '0em 1em'
    }

    const logos = {
      opacity: '.7'
    }

    let port = {
      sellr: [
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
      <PortfolioContainer>
        <span style={title}>Projects</span>
        <Wrapper>
          <a><img style={sellr} src={require(`../../assets/eventrMac.jpg`)} /></a>
          <a><img style={sellr} src={require(`../../assets/sellrMac.jpg`)} /></a>
          <a><img style={sellr} src={require(`../../assets/portfolioMac.jpg`)} /></a>
        </Wrapper>
        <PortfolioItems key={port.sellr.name} port={port} />
      </PortfolioContainer>
    )
  }
}

export default Portfolio

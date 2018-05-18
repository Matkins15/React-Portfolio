import React, { Component } from 'react'
import Nav from '../../containers/Nav/Nav'
import PortfolioItems  from '../../containers/Portfolio/PortfolioItems'
import EventrItems  from '../../containers/Portfolio/EventrItems.js'

// import { Container } from '../../theme/layout'
import { Wrapper, PortfolioContainer } from './Portfolio.style'

class Portfolio extends Component {
  constructor () {
    super()
    this.state = {
      render: '',
      sellr: false    }
  }

  handleClick = () => {
    const { sellr } = this.state
    this.setState({ sellr: !sellr })
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
          <a><img id={this.state.eventr} onClick={this.handleClick.bind(this)} style={sellr} src={require(`../../assets/eventrMac.jpg`)} /></a>
          <a><img id={this.state.sellr} onClick={this.handleClick.bind(this)} style={sellr} src={require(`../../assets/sellrMac.jpg`)} /></a>
          <a><img id={this.state.portfolio} style={sellr} src={require(`../../assets/portfolioMac.jpg`)} /></a>
        </Wrapper>
        {this.state.sellr && <PortfolioItems shown={this.state.shown} key={port.sellr.name} port={port} />}
        <EventrItems />      
      </PortfolioContainer>
    )
  }
}

export default Portfolio

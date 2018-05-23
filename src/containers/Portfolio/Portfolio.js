import React, { Component } from 'react'
import Nav from '../../containers/Nav/Nav'
import PortfolioItems  from '../../containers/Portfolio/PortfolioItems'
import EventrItems  from '../../containers/Portfolio/EventrItems.js'

// import { Container } from '../../theme/layout'
import { Wrapper, PortfolioContainer } from './Portfolio.style'

class Portfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      render: false,
      active: false
    }
    console.log(this.state);
  }

  toggelComponents = (props) => {
    this.setState({ active: !this.state.active })
    this.shiftComponents(props)
    console.log(this.state.active)
    console.log(this.state.render);
    console.log('hello');
  }

  shiftComponents = (props) => {
    if (this.state.active) {
      console.log(this.state.render);
      } else {
      console.log(!this.state.render);
    }
  }

  render () {
    const images = require.context('../../assets', true)
    const quickLinks = images('./quickLinksView.png')
    const editStore = images('./editStoreProduct.png')
    const sellrMac = images('./sellrMac.jpg')
    const eventrMac = images('./eventrMac.jpg')
    const portfolioMac = images('./portfolioMac.jpg')

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

    let projects = {
      items: [
        {
          title: 'Sellr',
          description: 'Tool to used to allow users to manage store products, ads and store details that are presented on store tablets and websites.',
          technologies: ['AngularJS', 'Ionic', 'Less', 'Javascript'],
          image: sellrMac
        },
        {
          title: 'Eventr',
          description: 'Last application built in my coding bootcamp for finding local events within a 5 mile radius using google maps API.',
          technologies: ['AngularJS', 'Google Maps API', 'CSS3', 'Javascript', 'Rails'],
          image: eventrMac
        },
        {
          title: 'Portfolio',
          description: 'Last application built in my coding bootcamp for finding local events within a 5 mile radius using google maps API.',
          technologies: ['ReactJS', 'Javascript', 'Create React App'],
          image: portfolioMac
        }
      ]
    }
    return (
      <PortfolioContainer>
        <PortfolioItems active={this.state.active} key={projects.title} projects={projects} />
      </PortfolioContainer>
    )
  }
}

export default Portfolio

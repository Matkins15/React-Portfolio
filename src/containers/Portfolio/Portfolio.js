import React, { Component } from 'react'
import PortfolioItems  from '../../containers/Portfolio/PortfolioItems'
import { Container } from '../../theme/layout'

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
    const sellrMac = images('./sellrMac.jpg')
    const eventrMac = images('./eventrMac.jpg')
    const portfolioMac = images('./portfolioMac.jpg')

    let projects = {
      items: [
        {
          title: 'Sellr',
          description: 'Sellr is a digital marketing company primarily supporting clients in the industry of beers, wines and spirits. I supported both the web and mobile application used to assit store owners with managing their store products, ads and store details.',
          technologies: ['AngularJS', 'Ionic', 'Less', 'Javascript'],
          image: sellrMac
        },
        {
          title: 'Eventr',
          description: 'Last project built in my coding bootcamp. The application allows users to identify all local events taking place within 5 mile radius of their current locatin.',
          technologies: ['AngularJS', 'Google Maps API', 'CSS3', 'Javascript', 'Rails'],
          image: eventrMac
        },
        {
          title: 'Portfolio',
          description: 'You are currently on this site. My first React app using Create React App.',
          technologies: ['ReactJS', 'Javascript', 'Create React App'],
          image: portfolioMac
        }
      ]
    }
    return (
      <Container>
        <PortfolioItems active={this.state.active} key={projects.title} projects={projects} />
      </Container>
    )
  }
}

export default Portfolio

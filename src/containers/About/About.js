import React, { Component, PropTypes } from 'react'
import { Container } from '../../theme/layout'
import { Bar } from 'react-chartjs-2';
import { PortfolioImage } from './About.style'
import Contact from '../../containers/Contact/Contact'

class About extends Component {
  constructor(props){
    console.log(props);
    super(props)
    this.state = {
      chartData: {
        labels: ['HTML5', 'CSS3', 'Less', 'Javascript', 'AngularJS', 'reactJS', 'ionic' ],
        datasets: [
            {
            label: 'Skills',
            data: [ 8, 7, 7, 6, 7, 5, 7],
            backgroundColor: ['#eee', '#000', '#333', '#aaa', '#ccc', '#ttt', '#222']
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
  }

  render () {
    const header = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: '2em 0em'
    }
    const portfolioImage = {
      height: '40vh',
      width: 'auto',
      marginRight: '2em'
    }

    const about = {
      flex: '1',
      lineHeight: '1.5em'
      
    }
    
    return (
      <div>
        <Container>
          <div style={header}>
            <img style={portfolioImage} src={require(`../../assets/portfolio-pic.jpg`)} />
            <p style={about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <Bar
            data={this.state.chartData}
          	options={{
              title: {
                display:this.props.displayTitle,
                text: 'My Skills',
                fontSize: 18
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
          	}}
          />
        </Container>
        <Contact />
      </div>
    )
  }
}

export default About

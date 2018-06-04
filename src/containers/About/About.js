import React, { Component } from 'react'
import { Container } from '../../theme/layout'
import { Bar } from 'react-chartjs-2';
import { Name, AboutText, TopWrapper, IconsBlock, Image } from './About.style'
import Contact from '../../containers/Contact/Contact'
import MediaQuery from 'react-responsive'

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
            backgroundColor: '#000'
          }
        ]
      },
      hidden: 'true'
    }
  }

  static defaultProps = {
    displaytitle: 'true',
    displaylegend: 'true',
    legendposition: 'bottom'
  }

  render () {
    const icon = {
      height: '25vh',
      padding: '1em 1em'
    }

    const title = {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '2em',
      fontSize: '1em',
      letterSpacing: '.4em',
      fontWeight: '500'
    }

    const breakpoints = {
      desktop: `(min-width: 1025px)`,
      tablet: `(min-width: 768px) and (max-width: 1024px)`,
      phone: `(max-width: 767px)`
    };

    return (
      <div>
        <Container>
          <Name>Matthew Atkins</Name>
          <TopWrapper>
            <Image src={require(`../../assets/portfolio-pic.jpg`)} />
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AboutText>
          </TopWrapper>
          <span style={title}>Skills Playlist</span>
          <IconsBlock>
            <img style={icon} src={require(`../../assets/AngularJS.png`)} alt='icons' />
            <img style={icon} src={require(`../../assets/ReactJS.png`)} alt='icons' />
            <img style={icon} src={require(`../../assets/Ionic.png`)} alt='icons' />
            <img style={icon} src={require(`../../assets/CSS3.png`)} alt='icons' />
            <img style={icon} src={require(`../../assets/ES6.svg`)} alt='icons' />
            <img style={icon} src={require(`../../assets/HTML5.png`)} alt='icons' />
          </IconsBlock>
          <Bar
            data={this.state.chartData}
          	options={{
              title: {
                display:this.props.displaytitle,
                // text: 'My Skills',
                fontSize: 18
              },
              legend: {
                display: this.props.displaylegend,
                position: this.props.legendposition
              },
              layout: {
                padding: {
                  left:50,
                  right:50,
                  bottom:5,
                  top:5
                }
              }
          	}}
          />
        </Container>
        <span style={title}>Let's Connect</span>
        <Contact />
      </div>
    )
  }
}

export default About

import React, { Component, PropTypes } from 'react'
import { Container } from '../../theme/layout'
import { Bar } from 'react-chartjs-2';
import { Header, AboutText, PortfolioImage, TopWrapper, IconsBlock } from './About.style'
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
      }
    }
  }

  static defaultProps = {
    displaytitle: 'true',
    displaylegend: 'true',
    legendposition: 'bottom'
  }

  render () {
    const portfolioImage = {
      height: '40vh'
    }

    const icon = {
      height: '25vh',
      padding: '1em 1em'
    }

    const title = {
      display: 'flex',
      justifyContent: 'center'
    }

    const breakpoints = {
      desktop: `(min-width: 1025px)`,
      tablet: `(min-width: 768px) and (max-width: 1024px)`,
      phone: `(max-width: 767px)`
    };

    return (
      <div>
        <Container>
          <h3 style={title}>Matthew Atkins</h3>
          <TopWrapper>
            <PortfolioImage>
              <MediaQuery {...this.props } query="(min-device-width: 700px)" >
                <img style={portfolioImage} src={require(`../../assets/portfolio-pic.jpg`)} />
              </MediaQuery>
            </PortfolioImage>
            <Header>
              <AboutText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </AboutText>
            </Header>
          </TopWrapper>
          <h3 style={title}>Skills Playlist</h3>
          <IconsBlock>
            <img style={icon} src={require(`../../assets/AngularJS.png`)} />
            <img style={icon} src={require(`../../assets/ReactJS.png`)} />
            <img style={icon} src={require(`../../assets/Ionic.png`)} />
            <img style={icon} src={require(`../../assets/CSS3.png`)} />
            <img style={icon} src={require(`../../assets/ES6.svg`)} />
            <img style={icon} src={require(`../../assets/HTML5.png`)} />
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
        <Contact />
      </div>
    )
  }
}

export default About

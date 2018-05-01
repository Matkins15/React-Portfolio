import React, { Component, PropTypes } from 'react'
import { Container } from '../../theme/layout'
import Nav from '../../containers/Nav/Nav'
import { Bar } from 'react-chartjs-2';


export default class About extends Component {
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
    legendPosition: 'right'
  }
  
  render () {
    return (
      <div>
        <Nav />
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Container } from '../../theme/layout'
import { Wrapper, Description, Technologies } from './Portfolio.style'


class PortfolioItems extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    console.log(props.projects.items)
  }

  getTechnologies = (props) => {
    this.props.projects.items.map((item) => {
      item.technologies.forEach((tech) => {
        console.log(tech);
      })
    })
  }

  render (props) {
    const image = {
      height: '40vh'
    }
    {this.getTechnologies(props)}
    return (
      <div>
        {this.props.projects.items.map((item) =>
          <Wrapper>
            <h1>{item.title}</h1>
            <img style={image} src={item.image} />
            <Description>{item.description}</Description>
              {item.technologies.forEach((tech) =>
              <ul>
                <li>{tech}</li>
              </ul>
              )}
          </Wrapper>
         )}
      </div>
    )
  }
}

export default PortfolioItems

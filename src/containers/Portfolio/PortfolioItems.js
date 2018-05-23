import React, { Component } from 'react'
import { Container } from '../../theme/layout'

class PortfolioItems extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render () {
    const image = {
      height: '40vh'
    }

    return (
      <div>
        <div>
          {this.props.projects.items.map((item) =>
            <div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <ul>
                {item.technologies.forEach((tech) => {
                  <li>{tech}</li>
                })}
              </ul>
              <img style={image} src={item.image} />
            </div>
           )}
        </div>
      </div>
    )
  }
}

export default PortfolioItems

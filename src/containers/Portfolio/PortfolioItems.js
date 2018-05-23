import React, { Component } from 'react'
import { Container } from '../../theme/layout'
import { Wrapper, Description, Technologies, Content } from './Portfolio.style'

class PortfolioItems extends Component {
  constructor (props) {
    super(props)
  }

  render (props) {
    const image = {
      height: '40vh'
    }
    return (
      <div>
        {this.props.projects.items.map((item) =>
          <Wrapper>
            <h1>{item.title}</h1>
            <img style={image} src={item.image} />
            <Content>
              <Description>{item.description}</Description>
              <Technologies>
                {item.technologies.map((techItems) => <p>{techItems}</p>)}
              </Technologies>
            </Content>
          </Wrapper>
         )}
      </div>
    )
  }
}

export default PortfolioItems

import React, { Component } from 'react'
import { Container } from '../../theme/layout'
import { Wrapper, Description, Technologies } from './Portfolio.style'

class PortfolioItems extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    console.log(props.projects.items)
  }

  // getTechnologies = (props) => {
  //   this.props.projects.items.map((item) => {
  //     let techItems = item.technologies.map((tech) => {
  //     })
  //   })
  // }

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
            {/* <Content>

            </Content> */}
            <Description>{item.description}</Description>
            <Technologies>
              <ul>
                {item.technologies.map((techItems) => <li>{techItems}</li>)}
              </ul>
            </Technologies>
          </Wrapper>
         )}
      </div>
    )
  }
}

export default PortfolioItems

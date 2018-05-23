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

    const technologies = {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    }

    const name = {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '2em',
      fontSize: '2em',
      letterSpacing: '.5em',
      fontWeight: '700'
    }

    const title = {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '2em',
      fontSize: '1em',
      letterSpacing: '.4em',
      fontWeight: '500'
    }

    const span = {
      paddingBottom: '.5em',
      fontWeight: 'bold'
    }
    return (
      <div>
        <span style={name}>Recent Projects</span>
        {this.props.projects.items.map((item) =>
          <Wrapper>
            <span style={title}>{item.title}</span>
            <img style={image} src={item.image} />
            <Content>
              <Description>
                <div style={technologies}>
                  <span style={span}>Description</span>
                  {item.description}
                </div>
              </Description>
              <Technologies>
                <div style={technologies}>
                  <span style={span}>Technologies Used</span>
                  {item.technologies.map((techItems) => <p>{techItems}</p>)}
                </div>
              </Technologies>
            </Content>
          </Wrapper>
         )}
      </div>
    )
  }
}

export default PortfolioItems

import React, { Component } from 'react'
import { Container } from '../../theme/layout'
import { Wrapper } from './Contact.style'

export default class Contact extends Component {
  render () {
    return (
      <Container>
        <Wrapper>
          <h1>Contact Me</h1>
          <form>
            <div>
              <label>Contact Me</label>
            </div>
            <div>
              <label>Name</label>
              <input type='text' ref='Name' placeholder='Your name..' />
            </div>
            <div>
              <label>Phone Number</label>
              <input type='text' ref='Name' placeholder='Your phone number..' />
            </div>
            <div>
              <label>Title</label>
              <input type='text' ref='Name' />
            </div>

          </form>
        </Wrapper>
      </Container>
    )
  }
}

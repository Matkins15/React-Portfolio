import React, { Component } from 'react'
import { Container } from '../../theme/layout'
import { Wrapper } from './Contact.style'

export default class Contact extends Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: ''
    }
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: ''
    })
  }
  
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
              <label>First Name</label>
              <input name='firstName' onChange={e => this.change(e)} value={this.state.firstName} type='text' ref='First Name' placeholder='first name' />
            </div>
            <div>
              <label>Last Name</label>
              <input name='lastName' onChange={e => this.change(e)} value={this.state.lastName} type='text' ref='Last Name' placeholder='last name' />
            </div>
            <div>
              <label>Email</label>
              <input name='email' onChange={e => this.change(e)} type='email' ref='Email' placeholder='email' />
            </div>
            <div>
              <label>Subject</label>
              <input name='subject' onChange={e => this.change(e)} type='text' ref='Subject' placeholder='thanks for visiting. tell me about yourself!'/>
            </div>
            <button onClick={(e) => this.onSubmit(e)}>Submit</button>
          </form>
        </Wrapper>
      </Container>
    )
  }
}

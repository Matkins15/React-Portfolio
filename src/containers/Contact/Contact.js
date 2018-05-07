import React, { Component } from 'react'
import { Container } from '../../theme/layout'
import { Wrapper } from './Contact.style'
import TextField from 'material-ui/TextField';


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
              <TextField
                name='firstName' 
                hintText="First Name"
                floatingLabelText="First Name"
                onChange={e => this.change(e)} 
                value={this.state.firstName}
              /><br />
              <TextField
                name='lastName' 
                hintText="Last Name"
                floatingLabelText="Last Name"
                onChange={e => this.change(e)} 
                value={this.state.lastName}
              /><br />

              <TextField
                name='email' 
                hintText="Email"
                floatingLabelText="Email"
                onChange={e => this.change(e)} 
                value={this.state.email}
              /><br />
              <TextField
                name='subject' 
                hintText="Interested? I'm available for hire!"
                floatingLabelText="Subject"
                onChange={e => this.change(e)} 
                value={this.state.subject}
              /><br />
            <button onClick={(e) => this.onSubmit(e)}>Submit</button>
          </form>
        </Wrapper>
      </Container>
    )
  }
}

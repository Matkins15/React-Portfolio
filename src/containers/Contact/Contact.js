import React, { Component } from 'react'
import { Container } from '../../theme/layout'
import { Wrapper, SocialIcons } from './Contact.style'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { FaBeer, FaGithub, FaInstagram, FaLinkedin, FaEnvelope} from 'react-icons/lib/fa';



export default class Contact extends Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
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
    const buttonStyle = {
      display: 'table',
      margin: '0 auto'
    }

    const social = {
      fontSize: '4em',
      padding: '.5em'
    }
    return (
      <Container>
        <Wrapper>
          <h1>Contact Me</h1>
          <SocialIcons>
            <FaGithub style={social}/>
            <FaInstagram style={social}/>
            <FaEnvelope style={social}/>
            <FaLinkedin style={social}/>
          </SocialIcons>
          {/* <form>
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
              name='message' 
              hintText="Interested? I'm available for hire!"
              floatingLabelText="Message"
              onChange={e => this.change(e)} 
              value={this.state.message}
            /><br />
            <RaisedButton label="Submit" style={buttonStyle} onClick={(e) => this.onSubmit(e)}/>
          </form> */}
        </Wrapper>
      </Container>
    )
  }
}

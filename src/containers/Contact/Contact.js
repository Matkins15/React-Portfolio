import React, { Component } from 'react'
import { Container } from '../../theme/layout'
import { Wrapper, SocialIcons } from './Contact.style'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { FaBeer, FaGithub, FaInstagram, FaLinkedin, FaEnvelope} from 'react-icons/lib/fa';

class Contact extends Component {
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
          <h3>Hit me up!</h3>
          <SocialIcons>
            <FaGithub style={social}/>
            <FaInstagram style={social}/>
            <FaEnvelope style={social}/>
            <FaLinkedin style={social}/>
          </SocialIcons>
        </Wrapper>
      </Container>
    )
  }
}

export default Contact
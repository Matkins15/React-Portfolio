import React, { Component } from 'react'
import { Container } from '../../theme/layout'
import { Wrapper, SocialIcons } from './Contact.style'
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope} from 'react-icons/lib/fa'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      instagramShare: 'https://www.instagram.com/matkins15/',
      githubShare: 'https://github.com/Matkins15',
      linkedinShare: 'https://www.linkedin.com/in/matthewatkins/',
      emailShare: 'mailto:matthew1atkins@gmail.com'
    }
    console.log(this.state)
  }

  openConnection = (media) => {
    window.open(media)
  }

  render () {
    const social = {
      fontSize: '4em',
      padding: '.5em',
      cursor: 'pointer'
    }
    return (
      <Container>
        <Wrapper>
          <SocialIcons>
            <FaGithub style={social} onClick={() => this.openConnection(this.state.githubShare)} target="_blank"  />
            <FaInstagram style={social} onClick={() => this.openConnection(this.state.instagramShare)} target="_blank" />
            <FaEnvelope style={social} onClick={() => this.openConnection(this.state.emailShare)} />
            <FaLinkedin style={social} onClick={() => this.openConnection(this.state.linkedinShare)} target="_blank" />
          </SocialIcons>
        </Wrapper>
      </Container>
    )
  }
}

export default Contact

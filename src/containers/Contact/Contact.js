import React, { Component } from 'react'

export default class Contact extends Component {
  render () {
    return (
      <div>
        <h1>Contact Stuff</h1>
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
      </div>
    )
  }
}

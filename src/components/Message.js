import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
export class Message extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Vistor Login" />
          <h3>Thanks for submission</h3>
          <p>You will be notified soon with further details</p>
        </>
      </MuiThemeProvider>
    )
  }
}


export default Message

import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
export class Display extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault()
    this.props.previousStep();
  }
  render() {
    const { values: { username,
phone,
companyname,
officeaddress,
residentialaddress} } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Vistor Login" />
          <List>
            <ListItem
              primaryText="User Name"
              secondaryText={username}
            />
            <ListItem
              primaryText="Company Name"
              secondaryText={companyname}
            />
            <ListItem
              primaryText="Phone Number"
              secondaryText={phone}
            />
            <ListItem
              primaryText="Officeaddress"
              secondaryText={officeaddress}
            />
            <ListItem
              primaryText="Residentialaddress"
              secondaryText={residentialaddress}
            />
          </List>
          <br />

          <RaisedButton
            label="Confirm"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            secondary={true}
            style={styles.button}
            onClick={this.back}
          />
        </>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default Display

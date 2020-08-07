import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export class Login extends Component {
  continue=e=>{
    e.preventDefault()
    this.props.nextStep();
  }
  render() {
    const {values,handleChange}=this.props;
    return (
      <MuiThemeProvider>
      <>
      <AppBar title="Vistor Login"/>
          <TextField
            floatingLabelText="Full Name"
            onChange={handleChange('username')}
            defaultValue={values.username}
            required="true"
          />
          <br/>
          <TextField
            floatingLabelText="Phone Number"
            onChange={handleChange('phone')}
            defaultValue={values.phone}
            required="true"
          />
          <br/>
          <TextField
            floatingLabelText="Address"
            onChange={handleChange('address')}
            defaultValue={values.address}
            required="true"
            margin='normal'
          /><br/>
          <RaisedButton
          label="Register"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          </>
      </MuiThemeProvider>
    )
  }
}

const styles={
  button:{
    margin:15
  }
}

export default Login

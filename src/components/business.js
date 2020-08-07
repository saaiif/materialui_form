import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export class Business extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep();
  }
  back=e=>{
    e.preventDefault()
    this.props.previousStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Company Login" />
          <TextField
            floatingLabelText="User Name"
            onChange={handleChange('username')}
            defaultValue={values.username}
          />
          <br />
          <TextField
            floatingLabelText="Company Name"
            onChange={handleChange('companyName')}
            defaultValue={values.companyName}
          />
          <br />
          <TextField
            floatingLabelText="Phone Number"
            onChange={handleChange('phone')}
            defaultValue={values.phone}
          />
          <br />
          <TextField
            floatingLabelText="Officeaddress"
            onChange={handleChange('officeaddress')}
            defaultValue={values.officeaddress}
            margin='normal'
          /><br />
          <TextField
            floatingLabelText="Residentialaddress"
            onChange={handleChange('residentialaddress')}
            defaultValue={values.residentialaddress}
            margin='normal'
          /><br />
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

export default Business

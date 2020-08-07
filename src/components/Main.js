import React, { Component } from 'react'
import { Login } from './login';
import {Business} from './business';
import {Display} from './Display';
import { Message } from './Message';

export class Main extends Component {
  state={
    step:1,
    username: "",
    phone: "",
    address: "",
    companyname: "",
    officeaddress: "",
    residentialaddress: "",
  }

  nextStep=()=>{
    const {step}= this.state;
    this.setState({
      step:step+1
    })
  }

  previousStep=()=>{
    const {step}=this.state;
    this.setState({
      step:step-1
    })
  }

  handleChange= input => e =>{
    this.setState({[input]:e.target.value})
  }

  render() {
    const {step} = this.state;
    const { username,
phone,
address,
companyname,
officeaddress,
residentialaddress} = this.state;
    const values = {
      username,
      phone,
      address,
      companyname,
      officeaddress,
      residentialaddress
    }
    switch (step) {
      case 1:
        return (
          <Login
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 2:
          return(
            <Business
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 3:
            return(
              <Display
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                values={values}
              />
            );
            case 4:
              return(
               <Message/>
              )
    }
  }
}

export default Main


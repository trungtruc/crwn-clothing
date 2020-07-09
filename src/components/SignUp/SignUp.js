import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import './SignUp.scss';
import CustomButton from '../CustomButton/CustomButton';

class SignUp extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }


  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '', confirmPassword: '', displayName: '' });
  }
  handleChange = event => {
    const {value, name} = event.target;
    this.setState({ [name] : value });
  }
  render() {
    return (
      <div className='sign-up'>
        <h2>I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='displayName' type='text' value={this.state.displayName} 
          onChange={this.handleChange}
          label='Display Name'
          required></FormInput>

          <FormInput name='email' type='email' value={this.state.email} 
          onChange={this.handleChange}
          label='Email'
          required></FormInput>

          <FormInput name='password' type='password' value={this.state.password}
          onChange={this.handleChange}
          label='Password'
          required></FormInput>

          <FormInput name='confirmPassword' type='password' value={this.state.confirmPassword}
          onChange={this.handleChange}
          label='Confirm Password'
          required></FormInput>

          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
  
export default SignUp;
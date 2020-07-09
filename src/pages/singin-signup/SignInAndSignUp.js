import React from 'react';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignInAndSignUp.scss'

const SignInAndSignUp = (props) => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUp;
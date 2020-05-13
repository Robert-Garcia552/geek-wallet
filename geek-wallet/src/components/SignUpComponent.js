import React, { Component } from 'react';
import wallet from '../assets/wallet.jpg';
import PrimaryButton from './shared/PrimaryButtonComponent';
import styled from 'styled-components';

const SignUp = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;

  @media (min-width: 740px) {
    grid-template-columns: .5fr 1fr;
    column-gap: 0;
  }

  input {
    border-bottom: 1px solid gray;
    width: 300px;
    margin-top: auto;
    padding-bottom: 2px;
  }

  label {
    margin-top: auto;
    text-align: left;
    width: 100%;
  }
`;

const FormDiv = styled.div`
  margin: auto 0;
`

export default class SignUpComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      birthdate: "",
      password: ""
    }
  }

  handleInput = (e) => {
    let input = e.target.name;
    let value = e.target.value;

    this.setState({ [input]: value });
  }

  render() {
    return(
      <div className='flex-container'>
        <div className='sign-up'>
          <h2 className='header'>Sign Up</h2>
          <p className='sub-header'>Let's leave the green where it should be</p>
          <img src={wallet} className='wallet' alt='wallet'/>
        </div>
        <FormDiv>
          <SignUp action='http://localhost:5000/users/add' method='post'>
            <label for='name'>Name</label>
            <input type='text' id='name' name='name' value={this.state.name} onChange={this.handleInput} required />
            <label for='email'>Email</label>
            <input type='email' id='email' name='email' value={this.state.email} onChange={this.handleInput} required />
            <label for='birthdate'>Birthday</label>
            <input type='date' id='birthdate' name='birthdate' value={this.state.birthdate} onChange={this.handleInput} required />
            <label for='password'>Password</label>
            <input type='password' id='password' name='password' onChange={this.handleInput} required />
            <PrimaryButton
              text='Submit'
            />
          </SignUp>
          <a href='/'>Already Have an Account? Sign In</a>
        </FormDiv>
      </div>
    )
  }
}
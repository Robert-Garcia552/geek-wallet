import React from 'react';
import logo from '../assets/geek-wallet-logo.png';

export default function Navbar() {
  return(
    <div className='navbar'>
      <div className='flex-container'>
        <img src={logo} className='nav-logo' />
        <h1 className='nav-header'>Geek Wallet</h1>
      </div>
      <div className='flex-container'>
        <a href='/' className='nav-link'>Home</a>
        <a href='/about' className='nav-link'>About</a>
      </div>
    </div>
  )
}

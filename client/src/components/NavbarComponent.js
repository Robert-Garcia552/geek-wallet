import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import logo from '../assets/geek-wallet-logo.png';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [active, setActive] =  useState(false);

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setActive(!active);
  }

    return(
      <div className='navbar'>
        <div className='flex-container'>
          <i aria-controls='menu' className='fas fa-bars fa-2x' onClick={ toggleDrawer } ></i>
          <Drawer 
            onClose={toggleDrawer}
            open={active}
          >
            <div className='drawer'>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <i class="fas fa-home fa-2x"></i>
                  </ListItemIcon>
                  <ListItemText>  
                    <Link to='/' onClick={toggleDrawer}>Home</Link>
                  </ListItemText>
                </ListItem>
                <Divider/>
                <ListItem>
                  <ListItemIcon>
                    <i class="fas fa-info-circle fa-2x"></i>
                  </ListItemIcon>
                  <ListItemText>
                    <Link to='/about' onClick={toggleDrawer}>About</Link>
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </Drawer>
          <img src={logo} className='nav-logo' alt='logo' />
          <h1 className='nav-header'>Movie Chest</h1>
        </div>
      
        <div className='flex-container'>
          <a href='/' className='nav-link'>Home</a>
          <a href='/about' className='nav-link'>About</a>
        </div>
      </div>
    )
}

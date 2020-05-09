import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import logo from '../assets/geek-wallet-logo.png';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }  

  toggleDrawer = (event) => {
    const active = this.state.active;

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ active: !active });
  }

  render() {
  return(
    <div className='navbar'>
      <div className='flex-container'>
        <i aria-controls='menu' className='fas fa-bars fa-2x' onClick={ this.toggleDrawer } ></i>
        <Drawer 
          onClose={this.toggleDrawer}
          open={this.state.active}
        >
          <div className='drawer'>
            <List>
              <ListItem>
                <ListItemIcon>
                  <i class="fas fa-home fa-2x"></i>
                </ListItemIcon>
                <ListItemText>  
                  <Link to='/' onClick={this.toggleDrawer}>Home</Link>
                </ListItemText>
              </ListItem>
              <Divider/>
              <ListItem>
                <ListItemIcon>
                  <i class="fas fa-info-circle fa-2x"></i>
                </ListItemIcon>
                <ListItemText>
                  <Link to='/about' onClick={this.toggleDrawer}>About</Link>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </Drawer>
        <img src={logo} className='nav-logo' alt='logo' />
        <h1 className='nav-header'>Geek Wallet</h1>
      </div>
     
      <div className='flex-container'>
        <a href='/' className='nav-link'>Home</a>
        <a href='/about' className='nav-link'>About</a>
      </div>
    </div>
  )
  }
}

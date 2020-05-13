import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Navbar from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import SignUpComponent from './components/SignUpComponent';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/' exact component={HomeComponent} />
      <Route path='/about' component={AboutComponent} />
      <Route path='/sign-up' component={SignUpComponent} />
      <GlobalStyles />
      <footer className='blue-background'>
        <p>Copyright © {new Date().getFullYear()} | Robert Garcia</p>
      </footer>
    </Router>
  );
}

export default App;

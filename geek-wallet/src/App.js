import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Navbar from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import SignUpComponent from './components/SignUpComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/' exact component={HomeComponent} />
      <Route path='/about' component={AboutComponent} />
      <Route path='/sign-up' component={SignUpComponent} />
      <GlobalStyles />
      <FooterComponent/>
    </Router>
  );
}

export default App;

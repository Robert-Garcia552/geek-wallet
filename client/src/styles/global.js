import { createGlobalStyle } from 'styled-components';

const breakpoints = {
  med: '740px'
}

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0; 
    border: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px 'Montserrat', sans-serif;
    letter-spacing: .5px;
  }
  * a:link, * a:visited, * a:hover, * a:active {
    text-decoration: none;
    color: black;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
// Containers
  .flex-container {
    display: flex;
    justify-content: space-around;
  }

// Navbar
  .navbar {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
  }
  .nav-link {
    padding: 20px;
    display: none;

    @media (min-width: ${breakpoints.med}) {
      display: block;
    }
  }
  .nav-logo {
    height: 40px;
    width: 80px;
    display: inline;
    margin: auto;
  }
  .nav-header {
    font-size: 1.5em;
    margin: auto;
    padding: 10px;
  }
  .fa-bars {
    color: #008255;
    margin: auto;
    padding-right: 10px;

    @media (min-width: ${breakpoints.med}) {
      display: none;
    }
  }
  .drawer {
    width: 250px;

    .fas {
      color: #A9CFF5;
    }
  }
// Buttons
  .primary-btn {
    background: #008255;
    padding: 10px;
  
    & a:link, & a:visited, & a:hover, & a:active {
      text-decoration: none;
      color: #ffffff;
    }
  }
`;
import { createGlobalStyle } from 'styled-components';
import { breakpoints, colors } from './utils.js';

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

  #root {
    padding-bottom: 60px;
  }

  phantom {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
  }

  footer {
    padding: 20px;
    margin-top: 10px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  
    & > p {
      text-align: center;
    }
  }
// Containers
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 16px;
  }

  .container {
    padding: 100px;
    text-align: center;

    & > * {
      padding-top: 16px;
    }
  }

  .blue-background {
    background: ${colors.blue};
    color: ${colors.white};
  }

  .green-background {
    background: ${colors.green};
  }

  .cards {
    justify-content: center;
  }

  .card {
    text-align: left;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media ${breakpoints.md} {
      padding: 130px 30px;
    }

    .card-header {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 20px;
    }

    .card-text {
      font-size: 16px;
    }
  }

  .list-items {
    padding-top: 16px;
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

    @media ${breakpoints.med} {
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

    @media ${breakpoints.med} {
      display: none;
    }
  }

  .drawer {
    width: 250px;

    .fas {
      color: #A9CFF5;
    }
  }

  // Home
  .header {
    font-size: 1.5em;
  }

  .sub-header {
    font-size: 1.3em;
  }

  .muted-text {
    margin-top: 20px;
    color: #696969;
  }

  .show {
    display: block;
    padding-top: 16px;
  }

  .hide {
    height: 0;
    display: none;
  }

  .details {
    justify-content: center;
  }

  .details-text {
    @media ${breakpoints.med} {
      width: 40%;
      margin: auto 0;
    }

    & > * {
      padding-top: 16px;
    }
  }

  hr {
    border-top: .5px solid black;
    margin-top: 10px;
    padding: 5px;
  }

  .fa-ul {
    margin-left: 0;
  }

  .fa-li {
    left: auto;
    right: 0;
  }

  // Sign Up
  .sign-up {
    padding: 20px;
    text-align: center;

    & > * {
      margin-bottom: 16px;
    }
  }

  .wallet {
    height: 200px;
    width: 300px;
    border-radius: 50px;
  }
`;
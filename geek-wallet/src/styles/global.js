import { createGlobalStyle } from 'styled-components';

const breakpoints = {
  med: '740px'
}

const colors = {
  blue: '#074a76'
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
    color: #ffffff;
  }

  .green-background {
    background: #e3f9f1;
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

    @media (min-width: ${breakpoints.med}) {
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
    @media (min-width: ${breakpoints.med}) {
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

// Buttons
  .primary-btn {
    background: #008255;
    padding: 10px;
    margin: 16px 0;
  
    & a:link, & a:visited, & a:hover, & a:active {
      text-decoration: none;
      color: #ffffff;
    }
  }

  footer {
    padding: 20px;
    margin-top: 10px;
  
    & > p {
      text-align: center;
    }
  }
`;
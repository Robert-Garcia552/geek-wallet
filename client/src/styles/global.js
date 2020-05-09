import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('<https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap>');
  
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
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  .primary-btn {
    background: #008255;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: .5px;
    font-size: 16px;
  
    & a:link, & a:visited, & a:hover, & a:active {
      text-decoration: none;
      color: #ffffff;
    }
  }
`;
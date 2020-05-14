import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  background: #008255;
  padding: 12px;
  margin: 16px 0;
  min-width: 150px;

  & a:link, & a:visited, & a:hover, & a:active {
    text-decoration: none;
    color: #ffffff;
  }
`;

export default function PrimaryButtonComponent(props) {
  return(
    <PrimaryButton onClick={props.handleSubmit}>
      <a href={ props.href }>
        { props.text }
      </a>
    </PrimaryButton>
  )
}

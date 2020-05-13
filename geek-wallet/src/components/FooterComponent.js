import React from 'react';
import { colors } from '../styles/utils';
import styled from 'styled-components';

const Footer = styled.div`
  background-color: ${colors.blue};
  color: ${colors.white};
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
`;

const Phantom = styled.div`
  display: block;
  padding: 20px;
  height: 60px;
  width: 100%;
`;

export default function FooterComponent() {
  return(
    <div>
      <Phantom></Phantom>
      <Footer>
        <p>Created by Robert Garcia</p>
      </Footer>
    </div>
  )
}
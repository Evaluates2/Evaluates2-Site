import React from 'react';
import styled from '@emotion/styled';

const StyledPrinciplesHeader = styled.div`

  background-image: linear-gradient(90deg,#000032,#0ff);
  min-height: 425px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
  width: 100%;
  padding: 10vh 10vw;
  
  h1.header {
    font-size: 80px;
    line-height: 100px;
    font-family: 'e2-Raleway-Extra-Bold';
    letter-spacing: 1px;
    text-align: left;
  }

`;

const KeyPrinciplesHeader = ({headerText}) => (
  <StyledPrinciplesHeader>
    <h1 className='header'>{headerText}</h1>
  </StyledPrinciplesHeader>
);

export default KeyPrinciplesHeader;

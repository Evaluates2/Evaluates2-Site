import React from 'react';
import styled from '@emotion/styled';

const StyledPrinciplesInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
  width: 100%;
  padding: 6vw 10vw;
  
  h1.header {
    font-size: calc(10px + 3vw);
    line-height: calc(15px + 4.5vw);
    margin: 3vw 0;
    font-family: 'e2-Raleway-Semi-Bold';
    letter-spacing: 1px;
    text-align: left;
    /* font-size: 27px; */
    /* line-height: 60px; */
  }
  
  p {
    font-size: calc(10px + 2vw);
    line-height: calc(16px + 3.5vw);
    font-family: 'e2-Raleway';
    color: #DDDDDD;
  }

`;

const KeyPrinciplesInfoBlock = ({data}) => (
  <StyledPrinciplesInfoBlock>
    <h1 className='header'>{data.header ? data.header : ''}</h1>
    <p>{data.paragraph1 ? data.paragraph1 : ''}</p>
    <p>{data.paragraph2 ? data.paragraph2 : ''}</p>

    <br/>
    <br/>
    <br/>
    <br/>
  </StyledPrinciplesInfoBlock>
);

export default KeyPrinciplesInfoBlock;

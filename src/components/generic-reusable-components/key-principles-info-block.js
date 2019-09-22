import React from 'react';
import styled from '@emotion/styled';

const StyledPrinciplesInfoBlock = styled.div`

  /* background-image: linear-gradient(90deg,#000032,#0ff); */
  /* min-height: 425px; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
  width: 100%;
  padding: 20px 70px;
  
  h1.header {
    font-size: 80px;
    line-height: 100px;
    font-family: 'e2-Raleway-Semi-Bold';
    letter-spacing: 1px;
    text-align: left;
    font-size: 22px;
    line-height: 32px;
  }
  
  p {
    font-size: 16px;
    font-family: 'e2-Raleway';
    color: #DDDDDD;
  }

`;

const KeyPrinciplesInfoBlock = ({data}) => (
  <StyledPrinciplesInfoBlock>
    {/* <h4 className='infoBlock'>{infoBlockText}</h4> */}
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

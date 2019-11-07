import React from 'react';
import styled from '@emotion/styled';

const StyledServicePageHero = styled.div`
   flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1#generic-hero-h {
    font-family: 'e2-Raleway-Extra-Bold';
    text-align: center;
    margin-top: calc(160px + 10vw);
    letter-spacing: 0.5vw;
    line-height: calc(30px + 9vw);
    font-size: calc(16px + 8vw);
  }
  p {
    font-family: 'e2-Raleway';
    text-align: center;
    padding: calc(15px + 2vw) calc(10px + 1vw); 
    opacity: 0.8;
    font-size: calc(7px + 3vw);
    line-height: calc(15px + 6vw);
    margin: calc(7px + 10vw) calc(7px + 2vw) calc(20px + 6vw);;

  }

`;

const ServicePageHero = ({title, description}) => {
  
  return (
    <StyledServicePageHero>
      <h1 id="generic-hero-h">{title}</h1>
      <p>{description}</p>
    </StyledServicePageHero>
  )
  
}

export default ServicePageHero;
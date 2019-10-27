import React from 'react';
import styled from '@emotion/styled';

const StyledServicePageHero = styled.div`
  height: 40vw;
  min-height: 400px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: calc(100px + 20vw) calc(10px + 2vw) calc(10px + 5vw);
  

  h1 {
    font-family: 'e2-Raleway-Extra-Bold';
    text-align: center;
    padding: calc(20px + 10vw) calc(10px + 1vw) calc(2px + 13vw);
    font-size: calc(3px + 9vw);
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
  }
  
  p {
    opacity: 0.7;
    line-height: calc(15px + 4vw);
    font-size: calc(7px + 3vw);
    margin-top: calc(7px + 1vw);
    max-width: 95vw;
    text-align: center;
    font-family: 'e2-Raleway-Semi-Bold';
    
  }


`;

const ServicePageHero = ({title, description}) => {
  
  return (
    <StyledServicePageHero>
      <h1>{title}</h1>
      <p>{description}</p>
    </StyledServicePageHero>
  )
  
}

export default ServicePageHero;
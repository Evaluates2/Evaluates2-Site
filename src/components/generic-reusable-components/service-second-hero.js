import React from 'react';
import styled from '@emotion/styled';

const StyledSecondServiceHero = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: calc(100px + 10vw) calc(10px + 1vw) calc(10px + 3vw);
    font-family: 'e2-Raleway-Extra-Bold';
    line-height: calc(30px + 12vw);
    font-size: calc(3px + 9vw);
    text-align: center;
  }
  
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1 {
    font-family: 'e2-Raleway-Extra-Bold';
    text-align: center;
    margin-top: calc(160px + 10vw);
    letter-spacing: 0.5vw;
    line-height: calc(30px + 9vw);
    font-size: calc(16px + 8vw);
  }
  p {
    max-width: 95vw;
    text-align: center;  
    font-family: 'e2-Raleway';
    text-align: center;
    padding: calc(10px + 1vw) calc(10px + 1vw); 
    opacity: 0.8;
    font-size: calc(7px + 3vw);
    line-height: calc(15px + 6vw);
    margin: calc(7px + 10vw) calc(7px + 2vw) calc(20px + 6vw);;
    opacity: 0.7;
  }

`;

const SecondServiceHero = ({title, description}) => {
  
  return (
    <StyledSecondServiceHero>
      <h1>{title}</h1>
      <p>

      {description}
      </p>
    </StyledSecondServiceHero>
  )
  
}

export default SecondServiceHero;
import React from 'react';
import styled from '@emotion/styled';

const StyledSecondServiceHero = styled.div`
  /* min-height: 400px; */
  /* line-height: 85px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 60px; */
  /* margin-bottom: 175px; */
  /* height: 40vw; */
  /* min-height: 400px; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: calc(10px + 20vw) calc(5px + 3vw); */
  

  h1 {
    font-family: 'e2-Raleway-Extra-Bold';
    text-align: center;
    
    margin: calc(100px + 10vw) calc(10px + 1vw) calc(10px + 3vw);
    line-height: calc(30px + 12vw);
    font-size: calc(3px + 9vw);

  }
  
  p {
    opacity: 0.7;
    line-height: calc(15px + 5vw);
    font-size: calc(7px + 3vw);
    margin-top: 3vw;
    max-width: 95vw;
    text-align: center;
    font-family: 'e2-Raleway-Semi-Bold';
    
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
    font-family: 'e2-Raleway';
    text-align: center;
    padding: calc(10px + 1vw) calc(10px + 1vw); 
    opacity: 0.8;
    font-size: calc(7px + 3vw);
    line-height: calc(15px + 6vw);
    margin: calc(7px + 10vw) calc(7px + 2vw) calc(20px + 6vw);;
    opacity: 0.8;
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
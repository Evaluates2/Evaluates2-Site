import React from 'react';
import styled from '@emotion/styled';

const StyledSecondServiceHero = styled.div`
  height: 800px;
  min-height: 400px;
  line-height: 85px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 175px;


  h1 {
    max-width: 95vw;
    text-align: left;
    letter-spacing: 5px;
    font-size: 80px;
    line-height: 100px;
    width: 85%;
    font-family: 'e2-Raleway-Extra-Bold';
    
    @media only screen and (min-width: 660px) {

    }
    
    @media only screen and (min-width: 990px) {

    }
  }

  p {
    text-align: left;
    margin: 27px;
    font-family: 'e2-Raleway';
    width: 85%;
    padding-right: 20px;
    opacity: .7;
    font-size: 30px;
    letter-spacing: 1px;

    @media only screen and (min-width: 660px) {
    }
    @media only screen and (min-width: 990px) {
    }
  }
`;

const SecondServiceHero = ({title, description}) => {
  
  return (
    <StyledSecondServiceHero>
      <h1>{title}</h1>
      {description}
    </StyledSecondServiceHero>
  )
  
}

export default SecondServiceHero;
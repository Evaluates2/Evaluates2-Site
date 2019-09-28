import React from 'react';
import styled from '@emotion/styled';

const StyledServicePageHero = styled.div`
  height: 800px;
  min-height: 400px;
  line-height: 85px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 200px;

  h1 {
    max-width: 95vw;
    font-size: 120px;
    line-height: 160px;
    font-weight: 800;
    text-align: center;
    letter-spacing: 5px;

    font-family: 'e2-Raleway-Extra-Bold';

    @media only screen and (min-width: 660px) {
      font-size: 120px;

    }

    @media only screen and (min-width: 990px) {

    }
  }

  p {
    
    margin: 0px 130px;
    text-align: center;
    font-family: 'e2-Raleway';
    font-size: 38px;
    letter-spacing: 1px;
    opacity: .7;
    @media only screen and (min-width: 660px) {

    }
    @media only screen and (min-width: 990px) {
    }
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
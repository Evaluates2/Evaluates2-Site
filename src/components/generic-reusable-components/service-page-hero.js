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
  margin-top: 60px;

  h1 {
    @media only screen and (min-width: 660px) {
      font-size: 95px;
      line-height: 150px;
    }

    @media only screen and (min-width: 990px) {
      font-size: 120px;
      line-height: 250px;
    }
  }

  p {
    @media only screen and (min-width: 660px) {
      font-size: 23px;
    }
    @media only screen and (min-width: 990px) {
      font-size: 30px;
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
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Global from "../components/Global";

const StyledTeamPage = styled.div`
font-family: 'e2-Raleway-Black';
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h1 {
    font-family: 'e2-Raleway-Black';
    font-size: 44px;
    max-width: 95vw;
    line-height: 140px;
    text-align: center;
    letter-spacing: 4px;
  }
  p {
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 2px;
    font-family: 'e2-Raleway';
  }
`;


const SectionHero = styled.div`
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
  font-size: 100px;
 
    @media only screen and (max-width: 990px) {
      font-size: 80px;
    }

    @media only screen and (max-width: 660px) {
      font-size: 60px;
    }
  
  }
  p {
    font-size: 38px;
    opacity: 0.7;
    margin: 7px;
      opacity: 0.7;
      width: 80vw;
    min-width: 90%;
    text-align: center;
    line-height: 60px;

    @media only screen and (max-width: 990px) {
      font-size: 30px;
    }

    @media only screen and (max-width: 660px) {
      font-size: 24px;
    }

  }
`;

const TermsTextSection = styled.div`
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 400px 100px 250px;

  h1 {
    line-height: 60px;
    font-size: 50px;
    text-align: left;
    padding-bottom: 40px;
  }
  p {
    color: #c3c3c3;
    font-size: 20px;
    line-height: 40px;
    /* margin: 10px 50px; */
    text-align: left;
    width: 100%;
  }
`;

const TeamPage = () => (
  <Global pageTitle={'Terms'} path={'terms'} description={'terms'}>
    <Layout>
      <StyledTeamPage>

        <br />
        <br />
        <br />
        <br />


        <SectionHero>
          <h1>Our Terms</h1>
          <p>transparent and straightforward.</p>
        </SectionHero>
        <TermsTextSection>
          <h1>Evaluates2 Terms of Service</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </TermsTextSection>

      </StyledTeamPage>

    </Layout>
  </Global>
);

export default TeamPage;
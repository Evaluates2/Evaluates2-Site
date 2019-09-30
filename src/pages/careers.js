import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Global from "../components/Global"

const CareersPageContainer = styled.div`
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
    font-size: 38px;
    opacity: 0.7;
    @media only screen and (min-width: 660px) {
      font-size: 23px;
    }
    @media only screen and (min-width: 990px) {
      /* font-size: 30px; */
    }
  }
`;

const WorkTogetherSection = styled.div`
  padding: 5px;
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 60px 40px;
  h1 {
    line-height: 55px;
    text-align: left;
  }
  p {
    text-align: left;
    width: 100%;
  }
`;

const CareersPage = () => (
  <Global pageTitle={'Careers'} path={'careers'} description={'careers'}>
    <Layout>

      <CareersPageContainer>
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Join our team</h1>
        <h3>Working with the smartest people you know sure is fun</h3>

        <h3>
          We're growing our team of experienced, talented polyglot developers in the
          greater NYC area. If you're passionate about delivering quality software
          and want to spend more time coding and working on engaging projects, and
          less time dealing with paperwork and pitches, apply below!
    </h3>

        <h3>Time Off</h3>

        <p>
          All work and no plan makes Jack and Jill very tired. We believe in a
          well-balanced schedule that includes 15 days of paid vacation time to go
          have fun!
    </p>

        <h3>Professional Development Time</h3>
        <p>
          Continual learning is one of Def Method's core values. As such, employees
          are given 20 days of professional development time to go to conferences,
          learn new skills, or catch up on their reading.
    </p>
        <h3>Professional Development Budget</h3>
        <p>
          Similarly, employees are given a yearly budget to spend on these
          conferences, courses, and professional development related expenses.
    </p>
        <h3>Medical, Dental, Vision Insurance</h3>
        <p>
          Healthy employees are happy employees. Def Method employees are offered
          competitive insurance benefits for medical, vision and dental coverage.
    </p>
        <h3>401(k)</h3>
        <p>
          At Def Method we care about your future and offer a 401(k) with a company
          match. It makes planning for the future a no-brainer.
    </p>
        <h1>How to apply</h1>
        <h3>to join Def Method's engineering team</h3>

        <h3>Stage 1:</h3>
        <h1>Phone Screen</h1>
        <p>
          To start, we ask that you take 30-min to speak with someone from our HR
          team to make sure we are the right fit for you.
    </p>
        <h3>Stage 2:</h3>
        <h1>Code Test</h1>
        <p>
          A challenge is always fun, right? We encourage you to have fun with the
          code test and look forward to seeing your response.
    </p>
        <h3>Stage 3:</h3>
        <h1>In Person Interview</h1>
        <p>
          Once you've passed the code test, we invite you to join us at the Def
          Method offices for two in-person interviews. If it works out, you get an
          offer on the spot!
    </p>
        <h1>
          Join us!
    </h1>
        - Product Manager
    <br />
        - Mid-Level Software Engineer
    <br />
        - Senior Softare Engineer
    <br />
        - Contract / Freelance Senior Software Engineer
    <br />
        <br />
        <br />
        <br />
      </CareersPageContainer>
    </Layout>
  </Global>
);
export default CareersPage;
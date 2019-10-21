import React, { useState } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import styled from '@emotion/styled';
import TechnicalAuditsImage from '../components/img-components/technical-audits.img.js';
import ResourceEfficiencyImage from '../components/img-components/resource-efficiency.img';
import StaffAugmentationImage from '../components/img-components/staff-augmentation.img';
import JsFizzbuzzScreenshotImage from '../components/img-components/js-fizzbuzz.img';
import KeyPrinciplesHeader from './../components/generic-reusable-components/key-principle-header';
import KeyPrinciplesInfoBlock from './../components/generic-reusable-components/key-principles-info-block';
import ChangeGearsBlock from './../components/generic-reusable-components/change-gears-block';
import JoinOurTeamCornerBtn from './../components/generic-reusable-components/join-our-team-corner-btn';
import ServicePageHero from './../components/generic-reusable-components/service-page-hero';
import StackableColumnsContainer from '../components/generic-reusable-components/stackable-columns-container';
import StackableColumn from '../components/generic-reusable-components/stackable-column';
import SecondServiceHero from '../components/generic-reusable-components/service-second-hero';
import ReadyToGetStartedSection from '../components/generic-reusable-components/ready-to-get-started-section';
import Global from "../components/Global"

const DataAndAnalyticsPageContainer = styled.div`
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
      font-size: 28px;
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
  margin: 300px 100px;
  padding: 60px 20px;
  h1 {
    font-size: 80px;
    line-height: 115px;
    text-align: center;
    margin-bottom: 80px;
  }
  p {
    font-size: 28px;
    text-align: center;
    width: 100%;
    line-height: 60px;
  }
`;

const LanguagesHeaderSection = styled.div`
  padding: 5px 20px;;
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
    font-size: 80px;
    line-height: 168px;
  }
  p {
    text-align: left;
    width: 94%;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 2px;
    opacity: 0.8;
  }
`;

const LanguagePickerGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-auto-flow: column;
  width: 100%;
  @media only screen and (min-width: 660px) {
  }
  @media only screen and (min-width: 990px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-columns: 370px auto;
  }
`;

const LanguageOptionsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  padding-left: 20px;
  margin-left: 40px;
  @media only screen and (min-width: 990px) {
    /* grid-column-start: 1; */
    /* grid-column-end: 2; */
    height: 100%;
    grid-row: 1 / 4;
    /* grid-column: 1 / 2; */
  }
  ul {
    padding: 5px;
    text-align: left;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
  }
  li {
    font-size: 30px;
    padding: 10px;
    text-align: left;
    line-height: 58px;
    cursor: pointer;
    border-radius: 3rem;
    font-family: 'e2-Raleway-Bold';
    letter-spacing: 2px;
    @media only screen and (min-width: 660px) {
      /* font-size: 35px; */
      /* grid-column: 1 / 2; */
    }
    @media only screen and (min-width: 990px) {
      margin-top: 20px;
      margin-bottom: 20px;
      /* width: 370px; */
      /* flex: 1; */
      font-size: 35px;
      line-height: 56px;
      /* grid-column: 1 / 2; */
      /* grid-row: 1 / 1; */
    }
  }
  .li-selected {
    background-image: linear-gradient(
      90deg,
      rgba(27, 189, 189, 0),
      rgba(27, 189, 189, 0.08),
      rgba(27, 189, 189, 0.65)
    );
  }
`;

const LanguageInfoSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  grid-column: 1 / 1;
  grid-row: 2 / 2;
  h1 {
    font-size: 50px;
  }
  p {
    /* font-size:  */
    padding: 0 45px 40px;
    text-align: left;
    width: 94%;
    font-size: 20px;
    line-height: 37px;
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    opacity: 0.8;
  }
  @media only screen and (min-width: 660px) {
  }
  @media only screen and (min-width: 990px) {
    grid-column: 2 / 2;
    grid-row: 1 / 2;
  }
`;

const LanguageIdeScreenshotContainer = styled.div`
  grid-row: 3 / 3;
  padding: 10px 60px;
  @media only screen and (min-width: 990px) {
    grid-column: 2 / 2;
    grid-row: 2 / 2;
  }
  img {
    text-align: center;
    height: 100%;
  }
`;

const BestStackForYouSection = styled.div`
  padding: 20px;
  h1 {
    margin: 50px 20px;
    line-height: 55px;
    text-align: left;
    font-size: 80px;
    line-height: 168px;
  }
  h2 {
    margin-top: 100px;
    padding-left: 20px;
    font-size: 44px;
  }
  p {
    margin: 30px 20px;
    text-align: left;
    font-size: 23px;
    line-height: 32px;
    letter-spacing: 2px;
    opacity: 0.8;
  }
`;

const StackBuilderResults = styled.div`
  h1 {
  }
`;

const BuildYourOwnStackSection = styled.div`
  /* justify-content: space-evenly; */
  /* padding: 5px; */
  /* background-color: #001a33; */
  /* color: white; */
  /* display: flex; */
  /* flex-direction: column; */
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  justify-content: center;
  min-height: 400px;
  padding: 25px 25px;
  @media only screen and (max-width: 990px) {
    align-items: center;
    flex-direction: column;
  }
  h2 {
    line-height: 55px;
    text-align: center;
    font-size: 60px;
    line-height: 168px;
    font-family: 'e2-Raleway-Bold';
  }
  h4 {
    font-size: 35px;
    margin-bottom: 40px;
    font-family: 'e2-Raleway-Black';
    text-align: left;
  }
  p {
    text-align: left;
    width: 100%;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 2px;
  }
  ul {
    padding: 5px;
    text-align: left;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    margin-right: -74px;
    /* width: 100%; */
  }
  li {
    font-size: 30px;
    padding: 10px;
    text-align: left;
    line-height: 58px;
    border-radius: 3rem;
    font-family: 'e2-Raleway-Semi-Bold';
    @media only screen and (min-width: 660px) {
      /* font-size: 35px; */
      /* grid-column: 1 / 2; */
    }
    @media only screen and (min-width: 990px) {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 27px;
      line-height: 38px;
    }
  }
  .li-hovered {
    background-image: linear-gradient(
      90deg,
      rgba(27, 189, 189, 0),
      rgba(27, 189, 189, 0.08),
      rgba(27, 189, 189, 0.65)
    );
  }
  .li-selected {
    background-image: linear-gradient(
      90deg,
      rgba(28, 220, 70, 0.3),
      rgba(28, 220, 70, 0.05),
      rgba(28, 220, 70, 0.65)
    );
  }

`;


const keyPrinciplesData = {
  'DatabasesVsDataWareHouses': {

    header: 'A Playground For Data Engineers To Go Wild',
    paragraph1:
    'Though engineers don\'t like to admit it, production databases can be pretty delicate and unstable. The need for the business side to have continuously fresh data can sometimes cause conflict between business and engineering.',
    paragraph2:
    'We specializez in putting systems in place so that the data engineers can use data warehousing solutions (such as google bigtable) to go crazy and and crunch numbers in any way they see fit without risk of negatively affecting production data or performance.'
  },
  'Data Visualisation': {
    header: 'The Importance of Test Driven Development (TDD)',
    paragraph1:
      'Here at Evaluate2 we have several core values that we insist on when working with a client, and one of those core values is the use of test-driven development. Test Driven Development, or "TDD" for short, is a software development process that builds up a suite of automated tests alongside the software source code. These tests run continuously to quickly ensure proper functionality and to reduce the presence of bugs.',
    paragraph2: 'In our opinion, testing is paramount for the future success of your project, and your future success is our main priority. By taking an outside-in approach we can be confident that our tests are passing only when they should be passing, and depending on the project we utilize a wide variety of automated tests including unit testing, end-to-end testing, UI testing, Behavior-driven testing, load testing, and smoke testing.',
  },
  'Strategic Decision Making': {
    header: 'Keeping a Project Robust & Fresh',
    paragraph1:
      'Third-party libraries are great to use, but there are a few considerations that must be carefully considered. Our engineers can help guide decision making in library selection and provide support for upgrading old libraries to newer versions.',
    paragraph2:
      'After years of development most large project will have significat amounts of technical tebt. Maybe the engineers just couldn\'t get those automated tests to work so they abandoned the pracice, or maybe the project works but there are tons of annoying warnings in the console. With the expertise from an Evaluates2 engineers these kinds of problems can be quickly addressed, the necessary modifications can be made, and your project can be reborn and as a thriving and happy project.',
  },
};

const DataAndAnalyticsPage = () => {
  const [lastLanguageClicked, setLastLanguageClicked] = useState('');
  const [lastLanguageHovered, setLastLanguageHovered] = useState('');
  const [languageSelected, setLanguageSelected] = useState('');

  const handleLanguageOptionHoverOver = newLanguageChoice => {
    setLastLanguageHovered(newLanguageChoice);
    if (lastLanguageClicked === '') {
      setLanguageSelected(newLanguageChoice);
    }
  };

  const handleLanguageOptionClick = (newLanguageChoice, event) => {
    event.stopPropagation();
    setLastLanguageClicked(newLanguageChoice);
    setLanguageSelected(newLanguageChoice);
  };

  const pageClicked = () => {
    setLastLanguageClicked('');
  };

  const handleLanguageOptionHoverOut = () => {
    setLastLanguageHovered('');

    if (lastLanguageClicked === '') setLanguageSelected('');
    /*
        Decided not to do anything here... :D
      */

  };

  return (
    <Global pageTitle={'Data And Analytics'} path={'dataAndAnalytics'} description={'dataAndAnalytics'}>
      <Layout>

        <DataAndAnalyticsPageContainer onClick={pageClicked}>
          <br />
          <br />
          <br />
          <br />
          <SectionHero>
            <h1>
              Data & Analytics
          </h1>
            <p>Decisions based on facts, not assumptions.
            </p>
          </SectionHero>
          {/* <ServicePageHero title="DataAndAnalytics" description="Code crafted with care."></ServicePageHero> */}
          {/* <SecondServiceHero title="Ways we can work together" description="...to get your products built."></SecondServiceHero> */}

          <WorkTogetherSection>

            <h1>
            Truly understand your users.
            </h1>
            <p>
            By harnessing the data of how users interact with their applications, businesses can more
            confidently make calculated decisions based on historical evidence. 
              </p>
          </WorkTogetherSection>
          <StackableColumnsContainer>
            <StackableColumn>
              <TechnicalAuditsImage />
              <h1>Intelligently Manage Your Data</h1>
              <p>
                At Evaluates2 we understand that data and analytics is important for every company and every application, and we are aware of this from day 1. We will set up a practical flow of data from databases to data warehouses where it can then be easily queried against for analytics and other testing purposes.
              </p>
              
            </StackableColumn>
            <StackableColumn>
              <StaffAugmentationImage />
              <h1>Custom Visualizations & Dashboards</h1>
              <p>
                We are familiar with various frontend charting and data visualization libraries. Visual aids such as simple pies charts and bar charts can consolidate millions of rows worth of data into understandable metrics which business leaders can act upon with confidence.
              </p>
            </StackableColumn>
            <StackableColumn>
              <ResourceEfficiencyImage />
              <h1>Data-Justified Business Decisions</h1>
              <p>
                Regardless of whether a business is a budding new startup or a centries-old tycoon, every business is continuous fighting to validate that it's business model holds up in today's every-changing economy. Evaluates2 canc help companies wrangle the chaotic, dissonant strams of data into one managable stream of consciousness.
              </p>
            </StackableColumn>
          </StackableColumnsContainer>

          <LanguagesHeaderSection>
            <h1>The Data You Need Is Out There</h1>
            <p>
              ...are you ignoring it or capturing and analyzing it?
          </p>
          </LanguagesHeaderSection>
          
          <BestStackForYouSection>
            <h1>It's true, these days... EVERY COMPANY is a tech company!</h1>
            <h2>...because everyone can benefit from intelligent data usage.</h2>
            <p>
              From simply understanding what your customers are asking for to predicting where the market is headed years down the road, intelligent analysis of data gives businesses a significant market advantage. Elavauates2 engineer can implement data-centric architectures and make recommendations on ways for making data more accessible to all areas of a company.
          </p>
          </BestStackForYouSection>
          {/* <BuildYourOwnStackSection>
            <StackableColumn>
              <h2>Frontends</h2>
              <ul>
                <li>React (JavaScript or TypeScript)</li>
                <li>Angular (TypeScript)</li>
                <li>Reagent (ClojureScript)</li>
                <li>Vue (JavaScript)</li>
                <li>Elm</li>
                <li>NativeScript</li>
                <li>Native Ios (Swift)</li>
                <li>Native Android (Kotlin)</li>
              </ul>
            </StackableColumn>
            <StackableColumn>
              <h2>Backends</h2>
              <ul>
                <li>NodeJS (Express + JavaScript)</li>
                <li>NodeJS (Express + TypeScript)</li>
                <li>NodeJS (Serverless JavaScript)</li>
                <li>NodeJS (Serverless TypeScript)</li>
                <br />
                <li>NodeJS (Serverless ClojureScript)</li>
                <li>JVM Clojure (Pedastal or Ring)</li>
                <br />
                <li>Go (Revel)</li>
                <br />
                <li>Java (Spring / Spark)</li>
                <li>Java (Serverless Java)</li>
                <br />
                <li>Python (Python Flask / Django)</li>
                <li>Python (Serverless Python)</li>
                <br />
                <li>C# (with NancyFx)</li>
                <li>C# (Serverless C#)</li>
              </ul>
            </StackableColumn>
            <StackableColumn>
              <h2>Databases</h2>
              <ul>
                <h4>(NoSQL)</h4>
                <li>MongoDB</li>
                <li>DynamoDB</li>
                <li>Redis</li>
                <li>Datomic</li>
                <li>Neo4J</li>
                <li>Cassandra</li>
                <h4>(Relational)</h4>
                <li>Postgres</li>
                <li>Google BigTable</li>
                <li>Amazon RDS</li>
                <li>MySQL</li>
              </ul>
            </StackableColumn>
          </BuildYourOwnStackSection> */}

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <KeyPrinciplesHeader headerText="Databases Vs Data Warehouses"></KeyPrinciplesHeader>
          <KeyPrinciplesInfoBlock data={keyPrinciplesData['DatabasesVsDataWareHouses']}></KeyPrinciplesInfoBlock>

          <KeyPrinciplesHeader headerText="Data Visualisation"></KeyPrinciplesHeader>
          <KeyPrinciplesInfoBlock data={keyPrinciplesData['Data Visualisation']}></KeyPrinciplesInfoBlock>

          <KeyPrinciplesHeader headerText="Strategic Decision Making"></KeyPrinciplesHeader>
          <KeyPrinciplesInfoBlock data={keyPrinciplesData['Strategic Decision Making']}></KeyPrinciplesInfoBlock>

          <ChangeGearsBlock headerText='Find out more about how we work...' linkText='Product Management' linkTo='/product-management'></ChangeGearsBlock>
          <ReadyToGetStartedSection>
            <h1>Ready to partner with us?</h1>
            <Link to="/contact">Contact us today!</Link>
          </ReadyToGetStartedSection>
          <br />
          <br />
          <br />
          <br />
          <JoinOurTeamCornerBtn />

        </DataAndAnalyticsPageContainer>
      </Layout>
    </Global>
  );
};
export default DataAndAnalyticsPage;
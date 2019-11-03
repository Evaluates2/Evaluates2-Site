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
import StackableDataColumnsContainer from '../components/generic-reusable-components/stackable-columns-container';
// import StackableColumn from '../components/generic-reusable-components/stackable-column';
import SecondServiceHero from '../components/generic-reusable-components/service-second-hero';
import ReadyToGetStartedSection from '../components/generic-reusable-components/ready-to-get-started-section';
import Global from "../components/Global"

const DataAndAnalyticsPageContainer = styled.div`
  /* font-family: 'e2-Raleway-Black'; */
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* h1 {
    font-family: 'e2-Raleway-Black';
    font-size: 44px;
    max-width: 95vw;
    line-height: 10px;
    text-align: center;
    letter-spacing: 4px;
  }
  p {
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 2px;
    font-family: 'e2-Raleway';
  } */
`;

const SectionHeroDataPage = styled.div`
line-height: 85px;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1 {
  font-family: "e2-Raleway-Extra-Bold";
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
  opacity: 0.7;
  font-size: calc(7px + 3vw);
  line-height: calc(15px + 6vw);
  margin: calc(7px + 10vw) calc(7px + 2vw) calc(20px + 6vw);;

}

`;

const WorkTogetherSectionData = styled.div`
   padding: 5px;
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  margin: 25vw 2vw;

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
    padding: calc(15px + 2vw) calc(10px + 1vw); 
    opacity: 0.7;
    font-size: calc(14px + 1vw);
    line-height: calc(28px + 2vw);
    margin: calc(7px + 4vw) calc(7px + 2vw) calc(20px + 6vw);

  }
`;

const YouDataIsOutThereSection = styled.div`
  padding: 5px 20px;
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 60px 40px;
  padding: 5px;
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  margin: 25vw 2vw;

  h1 {
    font-family: 'e2-Raleway-Extra-Bold';
    text-align: left;
    margin-top: calc(160px + 10vw);
    letter-spacing: 0.5vw;
    line-height: calc(30px + 9vw);
    font-size: calc(16px + 8vw);
    padding: 0 calc(10px + 2vw); 
  }

  p {
    font-family: 'e2-Raleway';
    text-align: left;
    padding: calc(15px + 2vw) calc(10px + 1vw); 
    opacity: 0.7;
    font-size: calc(15px + 1vw);
    line-height: calc(30px + 1vw);
    margin: calc(7px + 4vw) calc(7px + 2vw) calc(20px + 6vw);

  }
`;

const EveryBusinessIsTechSection = styled.div`
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 60px 40px;
  padding: 5px;
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  margin: 25vw 2vw;

  h1 {
    font-family: 'e2-Raleway-Extra-Bold';
    text-align: left;
    margin-top: calc(160px + 10vw);
    letter-spacing: 0.5vw;
    line-height: calc(30px + 9vw);
    font-size: calc(16px + 7vw);
    padding: 0 calc(10px + 2vw); 
  }
    
  h2 {
    font-family: 'e2-Raleway-Bold';
    text-align: left;
    margin-top: calc(15px + 5vw);
    letter-spacing: 0.25vw;
    line-height: calc(30px + 5vw);
    font-size: calc(20px + 2vw);
    padding: 0 calc(20px + 2vw); 
  }

  p {
    font-family: 'e2-Raleway';
    text-align: left;
    padding: calc(15px + 2vw) calc(10px + 1vw); 
    opacity: 0.7;
    font-size: calc(6px + 2.5vw);
    line-height: calc(15px + 5vw);
    margin: calc(7px + 4vw) calc(7px + 2vw) calc(20px + 6vw);

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


  const StackableDataColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw calc(3px + 2vw);
  height: 100%;
  width: 33%;

  @media only screen and (max-width: 960px) {
    justify-content: flex-start;
    width: 100%;
  }

  h1 {
    font-family: 'e2-Raleway-Bold';
    font-size: calc(15px + 2vw);
    max-width: 95vw;
    line-height: calc(25px + 2vw);
    text-align: center;
    -webkit-letter-spacing: 4px;
    -moz-letter-spacing: 4px;
    -ms-letter-spacing: 4px;
    letter-spacing: 1.5px;
    /* margin: 20px auto; */
    min-height: 10vw;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-family: 'e2-Raleway-Semi-Bold';
    font-size: calc(15px + 2vw);
    max-width: 95vw;
    line-height: 5vw;
    min-height: 5vw;
    padding-top: 3vw;
  }

  p {
    margin-bottom: 3vw;
    line-height: calc(19px + 3vw);
    text-align: justify;
    font-size: calc(11px + 1vw);
    letter-spacing: calc(0.2vw);
    font-family: 'e2-Raleway-Light';
    opacity: 0.7;
  }

  .gatsby-image-wrapper {
    height: auto;
    width: 80%;
    text-align: center;
    max-width: 310px;
  }

  ul {
    font-size: 24px;
    line-height: 37px;
    padding-top: 20px;
  }

  li {
    font-size: calc(15px + 2vw);
    max-width: 95vw;
    line-height: calc(15px + 5vw);
    min-height: 5vw;
    padding-top: 3vw;
    font-family: 'e2-Raleway-Semi-Bold';
  }

`;

  return (
    <Global pageTitle={'Data And Analytics'} path={'dataAndAnalytics'} description={'dataAndAnalytics'}>
      <Layout>

        <DataAndAnalyticsPageContainer onClick={pageClicked}>
       
          <SectionHeroDataPage>
            <h1>
              Data & Analytics
          </h1>
            <p>Decisions based on facts, not assumptions.
            </p>
          </SectionHeroDataPage>
          {/* <ServicePageHero title="DataAndAnalytics" description="Code crafted with care."></ServicePageHero> */}
          {/* <SecondServiceHero title="Ways we can work together" description="...to get your products built."></SecondServiceHero> */}

          <WorkTogetherSectionData>

            <h1>
              Truly understand your users.
            </h1>
            <p>
              By harnessing the data of how users interact with their applications, businesses can more
              confidently make calculated decisions based on historical evidence.
              </p>
          </WorkTogetherSectionData>
          <StackableDataColumnsContainer>
            <StackableDataColumn>
            <TechnicalAuditsImage />
              <h1>Intelligently Manage Your Data</h1>
              <p>
                At Evaluates2 we understand that data and analytics is important for every company and every application, and we are aware of this from day 1. We will set up a practical flow of data from databases to data warehouses where it can then be easily queried against for analytics and other testing purposes.
              </p>

            </StackableDataColumn>
            <StackableDataColumn>
              <StaffAugmentationImage />
              <h1>Custom Visualizations & Dashboards</h1>
              <p>
                We are familiar with various frontend charting and data visualization libraries. Visual aids such as simple pies charts and bar charts can consolidate millions of rows worth of data into understandable metrics which business leaders can act upon with confidence.
              </p>
            </StackableDataColumn>
            <StackableDataColumn>
              <ResourceEfficiencyImage />
              <h1>Data-Justified Business Decisions</h1>
              <p>
                Regardless of whether a business is a budding new startup or a centries-old tycoon, every business is continuous fighting to validate that it's business model holds up in today's every-changing economy. Evaluates2 canc help companies wrangle the chaotic, dissonant strams of data into one managable stream of consciousness.
              </p>
            </StackableDataColumn>
          </StackableDataColumnsContainer>

          <YouDataIsOutThereSection>
            <h1>The Data You Need Is Out There</h1>
            <p>
              ...are you ignoring it or capturing and analyzing it?
          </p>
          </YouDataIsOutThereSection>

          <EveryBusinessIsTechSection>
            <h1>It's true, these days... EVERY COMPANY is a tech company!</h1>
            <h2>...because everyone can benefit from intelligent data usage.</h2>
            <p>
              From simply understanding what your customers are asking for to predicting where the market is headed years down the road, intelligent analysis of data gives businesses a significant market advantage. Elavauates2 engineer can implement data-centric architectures and make recommendations on ways for making data more accessible to all areas of a company.
          </p>
          </EveryBusinessIsTechSection>
          {/* <BuildYourOwnStackSection>
            <StackableDataColumn>
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
            </StackableDataColumn>
            <StackableDataColumn>
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
            </StackableDataColumn>
            <StackableDataColumn>
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
            </StackableDataColumn>
          </BuildYourOwnStackSection> */}

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

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
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

const EngineeringPageContainer = styled.div`
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

const languageDescriptionsMap = {
  JavaScript:
    "JavaScript stuff! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the including versions of Lorem Ipsum.",
  TypeScript:
    "TypeScript stuff! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the including versions of Lorem Ipsum.",
  'Clojure / ClojureScript':
    "Clojure / ClojureScript Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the including versions of Lorem Ipsum.",
  'Go Lang':
    "Go Lang stuff! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with theincluding versions of Lorem Ipsum.",
  Rust:
    "Rust stuff! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the including versions of Lorem Ipsum.",
  Swift:
    "Swift stuff! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the including versions of Lorem Ipsum.",
  Kotlin:
    "Kotlin stuff! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the including versions of Lorem Ipsum.",
  Java:
    "Java stuff! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the including versions of Lorem Ipsum.",
  'C#':
    "C# stuff! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the including versions of Lorem Ipsum.",
};

const keyPrinciplesData = {
  'CI & Multiple Environments': {

    header: 'The Use of Continuous Integration and Multiple Environments',
    paragraph1:
    'Each time an engineer makes a substantial change he or she will commit this change to GitHub (or your favorite hosting service!). Here at Evaluates2 we employ automated continuous delivery processes whereby any changes in GitHub (to specially designated branches) are detected at which point all builds are done, varous automated tests are run, etc. If any step fails, all developers are notified immediately so that a fix can be made. After all commands exit successfully the continuous delivery system will then deploy these new changes directly to the staging environment.',
    paragraph2:
    'Evaluates2 prefers to maintain three environments when building applications: development, staging, and production. Development is connected to automated continuous deployment and should be rapidly changing. Staging is the "pre-release" envionment where we can give a final check over on things before pushing to prod. Production is the live user-facing application environment! '
  },
  'Test Driven Development': {
    header: 'The Importance of Test Driven Development (TDD)',
    paragraph1:
      'Here at Evaluate2 we have several core values that we insist on when working with a client, and one of those core values is the use of test-driven development. Test Driven Development, or "TDD" for short, is a software development process that builds up a suite of automated tests alongside the software source code. These tests run continuously to quickly ensure proper functionality and to reduce the presence of bugs.',
    paragraph2: 'In our opinion, testing is paramount for the future success of your project, and your future success is our main priority. By taking an outside-in approach we can be confident that our tests are passing only when they should be passing, and depending on the project we utilize a wide variety of automated tests including unit testing, end-to-end testing, UI testing, Behavior-driven testing, load testing, and smoke testing.',
  },
  'Healthy Dependencies': {
    header: 'Keeping a Project Robust & Fresh',
    paragraph1:
      'Third-party libraries are great to use, but there are a few considerations that must be carefully considered. Our engineers can help guide decision making in library selection and provide support for upgrading old libraries to newer versions.',
    paragraph2:
      'After years of development most large project will have significat amounts of technical tebt. Maybe the engineers just couldn\'t get those automated tests to work so they abandoned the pracice, or maybe the project works but there are tons of annoying warnings in the console. With the expertise from an Evaluates2 engineers these kinds of problems can be quickly addressed, the necessary modifications can be made, and your project can be reborn and as a thriving and happy project.',
  },
};

const EngineeringPage = () => {
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
    <Global pageTitle={'Engineering'} path={'engineering'} description={'engineering'}>
      <Layout>

        <EngineeringPageContainer onClick={pageClicked}>
          <br />
          <br />
          <br />
          <br />
          <SectionHero>
            <h1>
              Engineering
          </h1>
            <p>Code crafted with care.
            </p>
          </SectionHero>
          {/* <ServicePageHero title="Engineering" description="Code crafted with care."></ServicePageHero> */}
          {/* <SecondServiceHero title="Ways we can work together" description="...to get your products built."></SecondServiceHero> */}

          <WorkTogetherSection>

            <h1>
              We Love Building Software
            </h1>
            <p>
             ...so if you have a great idea, let's make it happen.
              </p>
          </WorkTogetherSection>
          <StackableColumnsContainer>
            <StackableColumn>
              <TechnicalAuditsImage />
              <h1>Technical Audits</h1>
              <p>
                FREE upfront audits of your project on:
              </p>
              <ul>
                <li>
                  Code Quality
                </li>
                <li>
                  Automated Testing
                </li>
                <li>
                  User Experience
                </li>
                <li>
                  Full Platform Support
                </li>
                <li>
                  Security
                </li>
                <li>
                  Data Integrity
                </li>
              </ul>
            </StackableColumn>
            <StackableColumn>
              <StaffAugmentationImage />
              <h1>Staff Augmentation</h1>
              <p>
                Our clients work onsite in New York City, and we can provide a full development team or individual Evaluates2 engineers!
              </p>
            </StackableColumn>
            <StackableColumn>
              <ResourceEfficiencyImage />
              <h1>Resource Efficiency</h1>
              <p>
                When Evaluates2 engineers are integrated into other teams they can lead by example, increase the code quality, testing breadth, etc, and set the to be leveraged by others.
              </p>
            </StackableColumn>
          </StackableColumnsContainer>

          <LanguagesHeaderSection>
            <h1>Languages</h1>
            <p>
              We're a test-obsessed team of polyglot engineers who strive to
              always use the best tools for the job. We specialize in functional
              programming, building beatifully interactive UIs, and putting up lean, lightning fast
              microservices all with an outside-in TDD approach. 
          </p>
          </LanguagesHeaderSection>
          <LanguagePickerGrid>
            <LanguageOptionsColumn>
              <ul>
                <li
                  className={
                    languageSelected === 'JavaScript' ? 'li-selected' : ''
                  }
                  onClick={event => {
                    handleLanguageOptionClick('JavaScript', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('JavaScript');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  JavaScript
              </li>
                <li
                  className={
                    languageSelected === 'TypeScript' ? 'li-selected' : ''
                  }
                  onClick={event => {
                    handleLanguageOptionClick('TypeScript', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('TypeScript');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  TypeScript
              </li>
                <li
                  className={
                    languageSelected === 'Clojure / ClojureScript'
                      ? 'li-selected'
                      : ''
                  }
                  onClick={event => {
                    handleLanguageOptionClick('Clojure / ClojureScript', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Clojure / ClojureScript');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Clojure / ClojureScript
              </li>
                <li
                  className={languageSelected === 'Go Lang' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Go Lang', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Go Lang');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Go Lang
              </li>
                <li
                  className={languageSelected === 'Rust' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Rust', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Rust');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Rust
              </li>
                <li
                  className={languageSelected === 'Swift' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Swift', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Swift');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Swift
              </li>
                <li
                  className={languageSelected === 'Kotlin' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Kotlin', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Kotlin');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Kotlin
              </li>
                <li
                  className={languageSelected === 'Java' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('Java', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('Java');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  Java
              </li>
                <li
                  className={languageSelected === 'C#' ? 'li-selected' : ''}
                  onClick={event => {
                    handleLanguageOptionClick('C#', event);
                  }}
                  onMouseOver={() => {
                    handleLanguageOptionHoverOver('C#');
                  }}
                  onMouseOut={() => {
                    handleLanguageOptionHoverOut();
                  }}
                >
                  C#
              </li>
              </ul>
            </LanguageOptionsColumn>
            <LanguageInfoSection>
              <h1>
                {lastLanguageClicked === ''
                  ? lastLanguageHovered
                  : lastLanguageClicked}
              </h1>
              <p>
                {
                  languageDescriptionsMap[
                  lastLanguageClicked === ''
                    ? lastLanguageHovered
                    : lastLanguageClicked
                  ]
                }
              </p>
            </LanguageInfoSection>

            <LanguageIdeScreenshotContainer>
              {languageSelected === 'JavaScript' && <JsFizzbuzzScreenshotImage />}
              {/* TODO - Add screenshots for other languages */}
            </LanguageIdeScreenshotContainer>
          </LanguagePickerGrid>

          <BestStackForYouSection>
            <h1>We'll Use The Right Tech For YOUR Business.</h1>
            <h2>Choose Your Own Tech Stack Trio!</h2>
            <p>
              The tech stack for any of our software projects generally includes a
              front-end, back-end, and a database. There are many options from
              which to choose, and if you are at all unsure we can help you decide
              which combination should fit best for your team and product. Of
              course these are not fully exhaustive lists of possible front-ends,
              backends, and databases, but these are the core competencies of the
              current Evaluates2 team!
          </p>
          </BestStackForYouSection>
          <BuildYourOwnStackSection>
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
          </BuildYourOwnStackSection>

          <KeyPrinciplesHeader headerText="Continuous Integration & Multiple Environments"></KeyPrinciplesHeader>
          <KeyPrinciplesInfoBlock data={keyPrinciplesData['CI & Multiple Environments']}></KeyPrinciplesInfoBlock>

          <KeyPrinciplesHeader headerText="Test Driven Development"></KeyPrinciplesHeader>
          <KeyPrinciplesInfoBlock data={keyPrinciplesData['Test Driven Development']}></KeyPrinciplesInfoBlock>

          <KeyPrinciplesHeader headerText="Healthy Dependencies"></KeyPrinciplesHeader>
          <KeyPrinciplesInfoBlock data={keyPrinciplesData['Healthy Dependencies']}></KeyPrinciplesInfoBlock>

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

        </EngineeringPageContainer>
      </Layout>
    </Global>
  );
};
export default EngineeringPage;
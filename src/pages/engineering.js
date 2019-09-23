import React, { useState } from 'react';
import { Link } from 'gatsby';
import Global from "../components/Global"
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import TechnicalAuditsImage from '../components/img-components/technical-audits.img.js';
import ResourceEfficiencyImage from '../components/img-components/resource-efficiency.img';
import StaffAugmentationImage from '../components/img-components/staff-augmentation.img';
import JsFizzbuzzScreenshotImage from '../components/img-components/js-fizzbuzz.img';
import KeyPrinciplesHeader from './../components/generic-reusable-components/key-principle-header';
import KeyPrinciplesInfoBlock from './../components/generic-reusable-components/key-principles-info-block';
import ChangeGearsBlock from './../components/generic-reusable-components/change-gears-block';

const EngineeringPageContainer = styled.div`
  font-family: 'e2-Raleway-Black';
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    @media only screen and (min-width: 660px) {
      font-size: 23px;
    }
    @media only screen and (min-width: 990px) {
      font-size: 30px;
    }
  }
`;

const StackableColumnsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const StackableColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  height: 100%;

  @media only screen and (max-width: 640px) {
    justify-content: flex-start;
  }

  h1 {
    font-family: 'e2-Raleway-Bold';
    font-size: 26px;
    max-width: 95vw;
    line-height: 60px;
    text-align: center;
    -webkit-letter-spacing: 4px;
    -moz-letter-spacing: 4px;
    -ms-letter-spacing: 4px;
    letter-spacing: 1.5px;
  }

  p {
    font-size: 15px;
    line-height: 22px;
    font-family: 'e2-Raleway-Light';
  }

  .gatsby-image-wrapper {
    height: auto;
    width: 40%;
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

const LanguagesHeaderSection = styled.div`
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
    font-size: 80px;
    line-height: 168px;
  }

  p {
    text-align: left;
    width: 100%;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 2px;
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
  }

  @media only screen and (min-width: 660px) {
  }

  @media only screen and (min-width: 990px) {
    grid-column: 2 / 2;
    grid-row: 1 / 2;
  }
`;

const LanguageIdeScreenshotContainer = styled.div`
  padding: 30px;
  /* grid-column: 1 / 1; */
  grid-row: 3 / 3;

  /* @media only screen and (min-width: 660px) {
      grid-column: 2 / 2;
      grid-row: 2 / 2;
    } */

  @media only screen and (min-width: 990px) {
    grid-column: 2 / 2;
    grid-row: 2 / 2;
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

  /* @media only screen and (max-width: 640px) {
    flex-direction: column;
  } */
`;

const CallToActionFooter = styled.div`
  h1 {
    font-family: 'e2-Raleway-Black-Italic';
    font-size: 40px;
    margin: 50px 50px 20px 50px;
  }

  a {
    cursor: pointer;
    font-family: 'e2-Raleway-Semi-Bold-Italic';
    display: flex;
    justify-content: center;
    padding: 20px;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    font-size: 30px;
    letter-spacing: 1.5px;
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
  Java:
    "Java stuff! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the including versions of Lorem Ipsum.",
  'C#':
    "C# stuff! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the including versions of Lorem Ipsum.",
};

const keyPrinciplesData = {
  'CI & Multiple Environments': {
    header: 'The Use of Continuous Integration and Multiple Environments',
    paragraph1:
      'Every time our engineers make a substantive change, they will commit this change to GitHub (or other hosting service of your choice). Def Method employs an automated continuous delivery process whereby any changes in GitHub are detected. Once a change is detected, all unit tests are run. If they fail, all developers are notified immediately so that a fix can be made. If all tests pass, the continuous delivery system will deploy these new changes directly to the staging environment.',
    paragraph2:
      'Def Method maintains two environments when building applications: a staging and a production environment. Production is what you might expect: it’s the live site, the public-facing application that everyone uses on a daily basis. The staging environment is not open to the public. Our customer and Def Method engineers are the only ones who can see the staging environment. With a staging environment, stakeholders can see our progress, evaluate features, and experiment without worrying about impacting real users. We also benefit from seeing features run on an identical ecosystem as production. This increases the efficiency of delivering features and reduces the risk of introducing bugs into the production system.',
  },
  'Test Driven Development': {
    header: 'The Importance of Test Driven Development (TDD)',
    paragraph1:
      'At Def Method we have several core values that we insist on when working with a client. Once of those core values is the use of test-driven development. Test Driven Development or TDD, for short, is a software development process that builds up a suite of automated tests alongside our software. These tests run continuously to ensure proper functionality and to reduce the presence of bugs. In our opinion, testing is paramount for the future success of your project. Since we partner with each of our clients, your future success is a main priority. See more on our philosophy on test-first in the article below.',
    paragraph2: '',
  },
  'Healthy Dependencies': {
    header: 'The Use of Continuous Integration and Multiple Environments',
    paragraph1:
      'Every time our engineers make a substantive change, they will commit this change to GitHub (or other hosting service of your choice). Def Method employs an automated continuous delivery process whereby any changes in GitHub are detected. Once a change is detected, all unit tests are run. If they fail, all developers are notified immediately so that a fix can be made. If all tests pass, the continuous delivery system will deploy these new changes directly to the staging environment.',
    paragraph2:
      'Def Method maintains two environments when building applications: a staging and a production environment. Production is what you might expect: it’s the live site, the public-facing application that everyone uses on a daily basis. The staging environment is not open to the public. Our customer and Def Method engineers are the only ones who can see the staging environment. With a staging environment, stakeholders can see our progress, evaluate features, and experiment without worrying about impacting real users. We also benefit from seeing features run on an identical ecosystem as production. This increases the efficiency of delivering features and reduces the risk of introducing bugs into the production system.',
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
    // setLastLanguageHovered('');
  };

  return (
    <Layout>
      <SEO title="Engineering" />

      <EngineeringPageContainer onClick={pageClicked}>
        <SectionHero>
          <h1>Engineering</h1>
          <p>Code crafted with care.</p>
        </SectionHero>
        <WorkTogetherSection>
          <h1>Ways we can work together</h1>
          <p>...to get your products built.</p>
        </WorkTogetherSection>
        <StackableColumnsContainer>
          <StackableColumn>
            <TechnicalAuditsImage />
            <h1>Technical Audits</h1>
            <p>
              During the technical audit an Evaluates2 engineer will work with
              you to answer any technical questions you may have. For example
              they can focus on an assessment of the health of your current code
              base, work on estimating time & cost for new features you are
              looking to build, and they can offer general technical guidance
              for your technical decisions. Also, it's free! 😊
            </p>
          </StackableColumn>
          <StackableColumn>
            <StaffAugmentationImage />

            <h1>Staff Augmentation</h1>
            <p>
              Our NYC-based engineers will work on site with your team. By
              having our engineers in the office, you can experience information
              osmosis. In general working this way means that development can be
              more productive and the engineers can better understand the
              industry and overall company goals. Also, your team will benefit
              more from working with our engineers day-to-day, sharing knowledge
              with your team, build lasting relationships with junior and senior
              team members alike.
            </p>
          </StackableColumn>
          <StackableColumn>
            <ResourceEfficiencyImage />
            <h1>Resource Efficiency</h1>
            <p>
              We teach through example. When you work with Evaluates2 engineers
              they not only will move your product forward, but they will also
              work with your team to make strides with overall resource
              efficiency. This can be done through pair programming,
              implementation of agile process such as daily standups, or overall
              engineer management.
            </p>
          </StackableColumn>
        </StackableColumnsContainer>
        {/* <Link to="/">home</Link> */}
        {/* <br/> */}
        {/* <Link to="/page-p/">Page P</Link> */}
        <LanguagesHeaderSection>
          <h1>Languages</h1>
          <p>
            We're a test-obsessed team of polyglot engineers who strive to
            always use the best tools for the job. We specialize in functional
            programming, web development, and building out lean, lightning fast
            microservices.
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
            {/* Screenshots for other languages */}
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
        {/* <StackBuilderResults>
          <h2>You chose...</h2>
          <h1>{'Tech Stack Nickname'}</h1>
          <p>Plain old JavaScript gets the job done!</p>
          <ul>
            <li>Front-end: JavaScript</li>
            <li>Backend: Clojure / ClojureScript</li>
            <li>Database: Database</li>
          </ul>
        </StackBuilderResults> */}

        <KeyPrinciplesHeader headerText="Continuous Integration & Multiple Environments"></KeyPrinciplesHeader>
        <KeyPrinciplesInfoBlock data={keyPrinciplesData['CI & Multiple Environments']}></KeyPrinciplesInfoBlock>
        
        <KeyPrinciplesHeader headerText="Test Driven Development"></KeyPrinciplesHeader>
        <KeyPrinciplesInfoBlock data={keyPrinciplesData['Test Driven Development']}></KeyPrinciplesInfoBlock>
        
        <KeyPrinciplesHeader headerText="Healthy Dependencies"></KeyPrinciplesHeader>
        <KeyPrinciplesInfoBlock data={keyPrinciplesData['Healthy Dependencies']}></KeyPrinciplesInfoBlock>
        
        <ChangeGearsBlock headerText='Find out more about how we work...' linkText='Product Management' linkTo='/product-management'></ChangeGearsBlock>

        <CallToActionFooter>
          <h1>Ready to partner with us?</h1>
          {/* <h2> */}
          {/* <a></a> */}
          <Link to="/contact">Contact us today!</Link>
          {/* </h2> */}
        </CallToActionFooter>

        <br />
        <br />
        <br />
        <br />
        {/* <br />
        <ul></ul>
        <h2>Choose Your Own Tech Stack Trio!</h2>

        <h2>Frontend Choices:</h2>

        <hr></hr>

        <Link to="/our-values/">
          Learn More about our core agile engineering values ->
        </Link>
        <br />
        <br /> */}
      </EngineeringPageContainer>
    </Layout>
  );
};

export default EngineeringPage;

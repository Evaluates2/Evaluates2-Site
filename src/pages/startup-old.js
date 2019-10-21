import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import styled from '@emotion/styled';
import ServicePageHero from '../components/generic-reusable-components/service-page-hero';
import SecondServiceHero from '../components/generic-reusable-components/service-second-hero';
import SecondServiceHeroDescription from '../components/generic-reusable-components/service-second-hero-description';

import StackableColumnsContainer from '../components/generic-reusable-components/stackable-columns-container';
import StackableColumn from '../components/generic-reusable-components/stackable-column';

import MaintenanceImage from '../components/img-components/maintenance.img';
import ProgressTrackingImage from '../components/img-components/progress-tracking.img';
import ProjectKickoffImage from '../components/img-components/project-kickoff.img';
import ResourceEfficiencyImage from '../components/img-components/resource-efficiency.img';
import StaffAugmentationImage from '../components/img-components/staff-augmentation.img';
import StackableImageAndTextDuo from '../components/generic-reusable-components/stackable-image-and-text-duo';
import ChangeGearsBlock from '../components/generic-reusable-components/change-gears-block';
import ReadyToGetStartedSection from '../components/generic-reusable-components/ready-to-get-started-section';
import JoinOurTeamCornerBtn from '../components/generic-reusable-components/join-our-team-corner-btn';
import Global from "../components/Global"

const StyledStartupPage = styled.div`
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
  .wide {
    width: 95%;
  }
  .discovery-header {
    font-size: 50px;
    color: #ff00ff;
    font-family: 'e2-Raleway-Extra-Bold';
    text-align: center;
  }
  .discovery-p {
    font-size: 20px;
  }
  .startup-img {
    margin-top: 25px;
  }
`;

const StartupSecondHero = styled.div`
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

const StartupPage = () => (
  <Global pageTitle={'Startup'} path={'startup'} description={'startup'}>
    <Layout>
      <StyledStartupPage>
        <br />
        <br />
        <br />

        <ServicePageHero
          title="The E2 Discovery Process"
          description="Ready to bring your idea to life?"
        ></ServicePageHero>

        <br />
        <br />
        {/* <SecondServiceHero
          title="The Product Journey"
          description={SecondServiceHeroDescription}
        ></SecondServiceHero> */}
        <StartupSecondHero>

          <h1>
            The Product Journey
          </h1>
          <p>
            From the very beginnings to long after product launch, we're here to help.
          </p>
        </StartupSecondHero>


        <StackableColumnsContainer className="wide">
          <StackableColumn>
            <p className="discovery-p">Stage 1</p>
            <h2 className="discovery-header">Discovery</h2>
            <ProjectKickoffImage />
            {/* <MaintenanceImage /> */}
          </StackableColumn>
          <StackableColumn>
            <p className="discovery-p">Stage 2</p>
            <h2 className="discovery-header">MVP Build</h2>
            <ProgressTrackingImage />
            {/* <MaintenanceImage /> */}
          </StackableColumn>
          <StackableColumn>
            <p className="discovery-p">Stage 3</p>
            <h2 className="discovery-header">Maintenance</h2>
            <MaintenanceImage className="startup-img" />
          </StackableColumn>
        </StackableColumnsContainer>

        <StackableImageAndTextDuo
          title="Discovery"
          header1="Our Process"
          paragraph1=""
          header2=""
          paragraph2=""
          imgName="DAILY_STANDUPS"
          imgOnLeft={true}
          buttonText="Learn More"
          buttonLinkTo="/contact"
        >
          <p>
            The Evaluates2 discrovery process can be described as somewhat of a combination of a "Design Sprint" as described by Jake Knapp from Google Ventures in the book Sprint (http://www.gv.com/sprint/) and an "agile product inception" as described by Martin Fowler in his Lead Inception article (https://martinfowler.com/articles/lean-inception/). During this this doscover process the team will focus on:
          </p>

          <ul>
            <li>

          - Project goals and key risks
            </li>
            <li>

          - Assumptions
            </li>
            <li>

          - Storyboarding and solution mapping
            </li>
            <li>

          - Feature prioritization
            </li>
            <li>

          - Creative problem solving
            </li>
          </ul>
          
          <p>

            The goal of the Discovery Process is to deliver the information your company needs to make immediate progress on the most important features of the project. You should walk away from this workshop with a team that is firmly aligned and a product plan that is clear and tested.
          </p>
        </StackableImageAndTextDuo>
        <StackableImageAndTextDuo
          title="MVP Development"
          header1=""
          paragraph1="The ultimate goal of the Product Discovery process is to achieve successful application development and delivery. Using the deliverables from the Discovery Workshop, Evaluates2 will begin the development process following the Product Discovery."
          header2=""
          paragraph2=''
          imgName="IPMS/RETROS"
          imgOnLeft={false}
          buttonText="Learn More"
          buttonLinkTo="/"
        >

          <ul>
            <li>

          - Offshore resources
            </li>
            <li>

          - Product Management
            </li>
            <li>

          - Product Strategy
            </li>
            <li>

          - User testing
            </li>

          </ul>
        </StackableImageAndTextDuo>
        <StackableImageAndTextDuo
          title="Maintenance"
          header1="Logs, Analytics, and Systems Upkeep"
          paragraph1="As is a natural course for many websites, startups will typically temporarily move from active development of new features on its website to ongoing maintenance after the launch of the MVP. With maintenance you can rest assured that your application will stay up and running with a part-time engineer keeping your code base up-to-date and smaller features built. During maintenance mode you will get the following:"
          header2=""
          paragraph2=""
          imgName="USER_STORIES"
          imgOnLeft={true}
          buttonText="Learn More"
          buttonLinkTo="/"
        >
          <ul>
            <li>

            - Implementation of small user features
            </li>
            <li>

            - Update and maintenance of 3rd party dependencies
            </li>
            <li>

            - Resolution of bugs
            </li>
            <li>

            - Monitoring for exceptions, unusual traffic patterns, performance degradation, or increased memory usage
            </li>
            <li>

            - Infrastructural and architectural maintenance (AWS, Heroku, etc...)
            </li>

          </ul>

        </StackableImageAndTextDuo>

        <ChangeGearsBlock
          headerText="Find out more about our development work..."
          linkText="Engineering"
          linkTo="/engineering"
        ></ChangeGearsBlock>

        <ReadyToGetStartedSection>
          <h1>Ready to partner with us?</h1>
          <Link to="/contact">Contact us today!</Link>
        </ReadyToGetStartedSection>

        <JoinOurTeamCornerBtn />
        {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Startup Page</h1>
      <p>startup page</p>
      <Link to="/">home</Link>
      <br />
      <Link to="/page-p/">Page P</Link> */}
      </StyledStartupPage>
    </Layout>
  </Global>
);

export default StartupPage;
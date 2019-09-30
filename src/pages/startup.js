import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import styled from '@emotion/styled';
import ServicePageHero from '../components/generic-reusable-components/service-page-hero';
import SecondServiceHero from '../components/generic-reusable-components/service-second-hero';

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
import JoinOurTeamCornerBtn from './../components/generic-reusable-components/join-our-team-corner-btn';
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
      <SecondServiceHero
        title="The Product Journey"
        description="The Def Method Discovery Process is an amalgamation of a Design Sprint as described by Jake Knapp from Google Ventures in the book Sprint (http://www.gv.com/sprint/) and an agile product inception as described by Martin Fowler in his Lead Inception article (https://martinfowler.com/articles/lean-inception/). During this workshop the team will focus on:
        - Project goals and key risks
        - Assumptions
        - Storyboarding and solution mapping
        - Feature prioritization
        - Creative problem solving
        
        The goal of the Discovery Process is to deliver the information your company needs to make immediate progress on the most important features of the platform. You will walk away from this workshop with a team that is firmly aligned and a product plan that is clear and tested."
      ></SecondServiceHero>

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
        header1="15-min Standups"
        paragraph1="The daily standup is a quick check-in between the developers and decision makers on the project. Standups are expected to run less than 15 minutes and each team member in turn shares what task they worked on the previous day, what task they are working on today and if they face any “blockers” or obstacles. Decision makers can help remove any obstacles or answer any clarifying questions on the active user stories during these meetings."
        header2=""
        paragraph2=""
        imgName="DAILY_STANDUPS"
        imgOnLeft={true}
        buttonText="Learn More"
        buttonLinkTo="/contact"
      ></StackableImageAndTextDuo>
      <StackableImageAndTextDuo
        title="MVP Build"
        header1="Iteration Planning Meetings (IPMs)"
        paragraph1="Iteration Planning Meetings (IPM)s also known as Sprint planning occurs once every week or every two weeks depending on the project needs. At this meeting the team together review the user stories that they will work on for the following sprint, clarify the acceptance criteria and point the stories. Once all the stories are pointed they will use story points as a guide to commit to completing a unit of work during the sprint. At the end of the sprint the team will demo their deliverables to the client and other stakeholders."
        header2="Retrospectives (Retros)"
        paragraph2='Retrospective meetings are held once every week or every two weeks depending on the team. Retrospectives allows the team to evaluate their progress, share what worked well for them and what created friction in their work during the past sprint. Regular retrospectives allow the team to check in frequently and run mini-experiments to improve workflow and become more efficient as a team. The retrospective aims to answer questions such as, "What should we stop doing?", "What should we continue doing?", and "What can we start doing that will help us be more efficient?"'
        imgName="IPMS/RETROS"
        imgOnLeft={false}
        buttonText="Learn More"
        buttonLinkTo="/"
      ></StackableImageAndTextDuo>
      <StackableImageAndTextDuo
        title="Maintenance & Monitoring"
        header1="Story Writing"
        paragraph1="We write requirements in the form of user stories using the format: As a <user>, when <action>, I want <a feature> so that <user goals> ‍Writing stories this way keeps the business and engineering teams focused on the end user and guides product design and development according to the needs of the target user. Once we have defined each user story, we add functional and non-functional requirements and acceptance criteria that need to be met for the user story to be considered completed. We break down our user stories to make sure each user story is small enough to be done within 2-3 days to ensure ongoing progress and prevent blockers."
        header2="Story Acceptance"
        paragraph2="Our engineering teams deliver continuously and you, the client, play the primary role in reviewing and accepting delivered features. As soon as a user story is complete it is put in a queue for you to review and approve. To facilitate the review and feedback process we hold weekly demos of the delivered features with the engineers. This is where you provide feedback to the team on what you see. The ongoing nature of the review and feedback process throughout development allows you to call in adjustments as the work is being done reducing significant rework and redesign. It also provides full transparency to you with regard to the progress and quality of work being conducted."
        imgName="USER_STORIES"
        imgOnLeft={true}
        buttonText="Learn More"
        buttonLinkTo="/"
      ></StackableImageAndTextDuo>

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
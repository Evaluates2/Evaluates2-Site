import React from 'react';
import { Link } from 'gatsby';
import Global from '../components/Global';
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
import ChangeGearsBlock from '../components/generic-reusable-components/change-gears-block';
import ReadyToGetStartedSection from '../components/generic-reusable-components/ready-to-get-started-section';
import StackableImageAndTextDuo from '../components/generic-reusable-components/stackable-image-and-text-duo';
import JoinOurTeamCornerBtn from './../components/generic-reusable-components/join-our-team-corner-btn';
import JobDescriptionBlock from './../components/generic-reusable-components/job-description-block';
import JobPosting from './../components/generic-reusable-components/job-posting';

const stringWithBrackets = `We write requirements in the form of user stories using the format:
As a <user>, when <action>, I want <a feature> so that <user goals>`;

const CareersPageContainer = styled.div`
  font-family: 'e2-Raleway-Black';
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  p {
    @media only screen and (max-width: 900px) {
      padding-right: 60px;
    }
  }

  .how-to-apply {
    margin: 50px 0 20px;
    font-size: 70px;
    /* display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start; */
  }

  .to-join {
    font-size: 25px;
    font-family: 'e2-Raleway';
    padding: 0;
  }

  .join-us {
    font-size: 70px;
    display: flex;
    flex: 1;
    flex-direction: row;
    font-family: 'e2-Raleway-Extra-Bold';
    justify-content: flex-start;
    margin-left: 200px;
    width: 100%;
  }
`;

const JobDescriptionBlocks = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const CareersPage = () => (
  <Global
    pageTitle={'Product Management'}
    path={'product-management'}
    description={'product-management'}
  >
    <Layout>
      <CareersPageContainer>
        <ServicePageHero
          title="Join Our Team"
          description="Working with the smartest people you know sure is fun..."
        ></ServicePageHero>
        <SecondServiceHero
          title="Now is the time to join us!"
          description="We're growing our team of experience, polyglot engineers in and around the NYC area. If you're passionate about develping quality software, writing great automated tests, and love ."
          description="We're growing our team of experience, polyglot engineers in and around the NYC area. If you're passionate about develping quality software, writing great automated tests, and architecting awesome software then we'd love to have you!"
        ></SecondServiceHero>

        <h1 className="how-to-apply">How To Apply</h1>
        <p className="to-join">...to join the Evaluate2 team.</p>
        <StackableColumnsContainer>
          <StackableColumn>
            <ProjectKickoffImage />
            <h3>stage 1</h3>
            <h1>Phone Screen</h1>
            <p>
              To begin, we ask that you speak to someone from hr for 3 min to
              make sure we are the right fit for you.
            </p>
          </StackableColumn>
          <StackableColumn>
            <ProgressTrackingImage />
            <h3>stage 2</h3>
            <h1>Code Test</h1>
            <p>
              A challenge is always fun, right? We like to give a small
              take-home challenge to allow you to display you coding skills.
            </p>
          </StackableColumn>
          <StackableColumn>
            <MaintenanceImage />
            <h3>stage 3</h3>
            <h1>In-Person Interview</h1>
            <p>
              Once you've passed the voding test, we invite you to come into the
              Evaluates2 offices for a roud of in person interviews. If it works
              out, you'll often get an offer on the spot!
            </p>
          </StackableColumn>
        </StackableColumnsContainer>
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <h1 className="join-us">Join us</h1>
        <br />
        <br />

        <JobDescriptionBlocks>
          <JobDescriptionBlock isInternBlock={false} linkTo="https://www.google.com">
            {/* <JobPosting> */}
              <h2>Contract / Freelance Senior Software Engineer</h2>
              <h3>New York, NY, United States</h3>
              <br />
              <h4>Mid-level Software Engineer at Evaluates2</h4>
              <p>New York, NY</p>
              <br />
              <br />
              <h4>About Evalues2</h4>
              <p>
                We are.. we can, by delivering excellent results for our
                customers. We apply user-centered design and agile software
                development principles to help our customers create valuable
                products, and are always refining our craft.
              </p>
              <br />
              <br />
              <h4>Why You'll Love Working at Evaluates2</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>
              <br />
              <br />
              <h4>What You'll Bring</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>{' '}
              <h4>What You'll Be Doing Here at Evaluates2</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>
              <br />
              <br />
              <h4>Core Qualifications For Joining Evaluates2</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>
            {/* </JobPosting> */}
          </JobDescriptionBlock>
          
        </JobDescriptionBlocks>
        <br />
        <br />
        <JobDescriptionBlocks>
          <JobDescriptionBlock isInternBlock={false} linkTo="https://www.google.com">
            {/* <JobPosting> */}
              <h2>Mid-Level Software Engineer</h2>
              <h3>New York, NY, United States</h3>
              <br />
              <h4>Mid-level Software Engineer at Evaluates2</h4>
              <p>New York, NY</p>
              <br />
              <br />
              <h4>About Evalues2</h4>
              <p>
                We are.. we can, by delivering excellent results for our
                customers. We apply user-centered design and agile software
                development principles to help our customers create valuable
                products, and are always refining our craft.
              </p>
              <br />
              <br />
              <h4>Why You'll Love Working at Evaluates2</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>
              <br />
              <br />
              <h4>What You'll Bring</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>{' '}
              <h4>What You'll Be Doing Here at Evaluates2</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>
              <br />
              <br />
              <h4>Core Qualifications For Joining Evaluates2</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>
            {/* </JobPosting> */}
          </JobDescriptionBlock>
          
        </JobDescriptionBlocks>
        <br />
        <br />
        <JobDescriptionBlocks>
          <JobDescriptionBlock isInternBlock={false} linkTo="https://www.google.com">
            {/* <JobPosting> */}
              <h2>Mid-Level Software Engineer</h2>
              <h3>New York, NY, United States</h3>
              <br />
              <h4>Mid-level Software Engineer at Evaluates2</h4>
              <p>New York, NY</p>
              <br />
              <br />
              <h4>About Evalues2</h4>
              <p>
                We are.. we can, by delivering excellent results for our
                customers. We apply user-centered design and agile software
                development principles to help our customers create valuable
                products, and are always refining our craft.
              </p>
              <br />
              <br />
              <h4>Why You'll Love Working at Evaluates2</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>
              <br />
              <br />
              <h4>What You'll Bring</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>{' '}
              <h4>What You'll Be Doing Here at Evaluates2</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>
              <br />
              <br />
              <h4>Core Qualifications For Joining Evaluates2</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>
            {/* </JobPosting> */}
          </JobDescriptionBlock>
          
        </JobDescriptionBlocks>
        <br />
        <br />
        <JobDescriptionBlocks>
          <JobDescriptionBlock isInternBlock={false} linkTo="https://www.google.com">
            {/* <JobPosting> */}
              <h2>Mid-Level Software Engineer</h2>
              <h3>New York, NY, United States</h3>
              <br />
              <h4>Mid-level Software Engineer at Evaluates2</h4>
              <p>New York, NY</p>
              <br />
              <br />
              <h4>About Evalues2</h4>
              <p>
                We are.. we can, by delivering excellent results for our
                customers. We apply user-centered design and agile software
                development principles to help our customers create valuable
                products, and are always refining our craft.
              </p>
              <br />
              <br />
              <h4>Why You'll Love Working at Evaluates2</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>
              <br />
              <br />
              <h4>What You'll Bring</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>{' '}
              <h4>What You'll Be Doing Here at Evaluates2</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>
              <br />
              <br />
              <h4>Core Qualifications For Joining Evaluates2</h4>
              <p>
                {' '}
                work on a variety of projects, solve coding challenges and work
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding within
                your team. We know you’re not just hands on a keyboard. You have
                ideas and we’ll want to hear them.
              </p>
            {/* </JobPosting> */}
          </JobDescriptionBlock>
          
        </JobDescriptionBlocks>
        <br />
        <br />
        <JobDescriptionBlocks>
          <JobDescriptionBlock isInternBlock={true} linkTo="https://www.google.com">
            {/* <JobPosting> */}
              <h2>Strategy & Operations Intern</h2>
              <h3>New York, NY, United States</h3>
              <br />
              <h4>Mid-level Software Engineer at Evaluates2</h4>
              <ul>
                <li>
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding
                </li>
                <li>
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding
                </li>
                <li>
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding
                </li>
                <li>
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding
                </li>
                <li>
                with a team of language-agnostic experts who’ll have your back.
                You'll promote diversity, inclusion, and understanding
                </li>

              </ul>
            {/* </JobPosting> */}
          </JobDescriptionBlock>
          
        </JobDescriptionBlocks>
        <br />
        <br />

        <ReadyToGetStartedSection>
          <h1>Ready to partner with us?</h1>

          <Link to="/contact">Contact us today!</Link>
        </ReadyToGetStartedSection>
        {/* <JoinOurTeamCornerBtn /> */}
      </CareersPageContainer>
    </Layout>
  </Global>
);
export default CareersPage;

/**
 *
 *  <JoinOurTeamHeader>
 *  <JoinOurTeamBlurb>
 *  <InterviewProcessSection>
 *  <JobDescriptionBlocks>
 *  <JobDescriptionBlock/>
 *  <JobDescriptionBlock/>
 *  <JobDescriptionBlock/>
 *  </JobDescriptionBlocks>
 *  </GetStartedCallToAction>
 *
 */

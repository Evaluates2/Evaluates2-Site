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

const JobDescriptionBlocks = styled.div``;


const CareersPage = () => (
  <Global
    pageTitle={'Product Management'}
    path={'product-management'}
    description={'product-management'}
  >
    <Layout>
      <CareersPageContainer>
        <ServicePageHero
          title="E2 Careers"
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
        <br />
        <br />

        <JobDescriptionBlocks>

          <JobDescriptionBlock
            title='Contact/Freelance Senior Software Engineer'
            location='New York, NY, Unites States'
            linkTo="https://www.google.com"
          />
        </JobDescriptionBlocks>
        <br />
        <br />

        <JobPosting>
          <h1>stuff</h1>
          <p>other stuff</p>
        </JobPosting>
        <br />
        <br />
        {/* <StackableImageAndTextDuo
          title="Daily Standups"
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
          title="IPMs/Retros"
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
          title="User Stories"
          header1="Story Writing"
          paragraph1="We write requirements in the form of user stories using the format: As a <user>, when <action>, I want <a feature> so that <user goals> ‍Writing stories this way keeps the business and engineering teams focused on the end user and guides product design and development according to the needs of the target user. Once we have defined each user story, we add functional and non-functional requirements and acceptance criteria that need to be met for the user story to be considered completed. We break down our user stories to make sure each user story is small enough to be done within 2-3 days to ensure ongoing progress and prevent blockers."
          header2="Story Acceptance"
          paragraph2="Our engineering teams deliver continuously and you, the client, play the primary role in reviewing and accepting delivered features. As soon as a user story is complete it is put in a queue for you to review and approve. To facilitate the review and feedback process we hold weekly demos of the delivered features with the engineers. This is where you provide feedback to the team on what you see. The ongoing nature of the review and feedback process throughout development allows you to call in adjustments as the work is being done reducing significant rework and redesign. It also provides full transparency to you with regard to the progress and quality of work being conducted."
          imgName="USER_STORIES"
          imgOnLeft={true}
          buttonText="Learn More"
          buttonLinkTo="/"
        ></StackableImageAndTextDuo>
        <StackableImageAndTextDuo
          title="Pair Programming"
          header1="A Collective Knowledge And Ownership of the Codebase"
          paragraph1="We like pair programming because it's aawesome!"
          header2="Story Acceptance"
          paragraph2="Our engineering teams deliver continuously and you, the client, play the primary role in reviewing and accepting delivered features. As soon as a user story is complete it is put in a queue for you to review and approve. To facilitate the review and feedback process we hold weekly demos of the delivered features with the engineers. This is where you provide feedback to the team on what you see. The ongoing nature of the review and feedback process throughout development allows you to call in adjustments as the work is being done reducing significant rework and redesign. It also provides full transparency to you with regard to the progress and quality of work being conducted."
          imgName="USER_STORIES"
          imgOnLeft={false}
          buttonText="Learn More"
          buttonLinkTo="/"
        ></StackableImageAndTextDuo>
        <StackableImageAndTextDuo
          title="Live Demos!"
          header1="A Happy Ending For Every Sprint"
          paragraph1="We like pair programming because it's aawesome!"
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
        ></ChangeGearsBlock> */}
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

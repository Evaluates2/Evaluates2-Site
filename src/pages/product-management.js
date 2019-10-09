import React from 'react';
import { Link } from 'gatsby';
import Global from "../components/Global"
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

const stringWithBrackets = `We write requirements in the form of user stories using the format:
As a <user>, when <action>, I want <a feature> so that <user goals>`;

const ProjectManagementPageContainer = styled.div`
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
`;


const ProductManagementPage = () => (
  <Global pageTitle={'Product Management'} path={'product-management'} description={'product-management'}>

    <Layout>

      <ProjectManagementPageContainer>
        <ServicePageHero
          title="Product Management"
          description="Leadership that guides successful product development."
        ></ServicePageHero>
        <SecondServiceHero
          title="Our Development Process"
          description="We'll show you how to get the most of agile development methodologies such as SCRUM and XP (extreme programming) to get work done quickly and effectively."
        ></SecondServiceHero>
        <StackableColumnsContainer>
          <StackableColumn>
            <ProjectKickoffImage />
            <h1>Project Kickoff</h1>

            <p>
              We like to start off every new project with a team that's firmly aligned and prepared to develop what the client needs. We start off by collecting requirements an learning how your business operates so we can and align with your goals. By the end of the project kickoff we should have a backlog of tasks roughly estimated and an idea of what we should have at various stages throughout develpoment. 
            </p>

            <p>
              Every successful project starts with a team that's firmly aligned
              and prepared for product development. At Def Method, we start off
              every project by collecting product requirements, aligning with your
              team on goals, and building out an initial project estimate
              spreadsheet that is broken down by a backlog and icebox.
          </p>
            <p>
              The purpose of the kickoff is primary to align all team members on these goals and focus on building a product that hits these keys deliverables, is a nice, clean codebase, and is actually a <i>fun</i> project for the people building it!
          </p>
          </StackableColumn>
          <StackableColumn>
            <ProgressTrackingImage />
            <h1>Progress Tracking</h1>
            <p>
              Once a project is kicked off, Def Method PMs use an agile process to
              manage product development. This includes daily standups, weekly
              IPMs, weekly demos and project retros.
          </p>
            <p>
              The PMs will work with the project management tools that your team
              prefers. For user story tracking we commonly use Pivotal Tracker,
              Trello, or Jira. Pivotal Tracker and Trello come with a low learning
              curve and are straightforward to set up, whereas Jira allows for
              detailed customization of workflow and is well suited to larger
              scale projects. We typically use Slack for communication, Google
              Hangouts/Meet for remote meetings, Rollbar for error tracking and
              New Relic for performance monitoring.
          </p>
          </StackableColumn>
          <StackableColumn>
            <MaintenanceImage />
            <h1>Post-Development Maintenance</h1>
            <p>
              As is a natural course for many websites, development moves
              temporarily from active development of new features to ongoing
              maintenance.
          </p>
            <p>
              As part of our development process, we will implement the
              appropriate tracking tools to ensure your application is effectively
              maintained. This includes error tracking and performance monitoring
              tools with appropriate notification settings and user tracking tools
              such as Google Analytics, Mix Panel or Heap. At Def Method we stand
              behind the products we build and will support you if your product
              goes down. We offer maintenance plans for customers that are
              interested in having the option for development of small features
              and bug resolution.
          </p>
          </StackableColumn>
        </StackableColumnsContainer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <StackableImageAndTextDuo
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
        ></ChangeGearsBlock>
        <ReadyToGetStartedSection>
          <h1>Ready to partner with us?</h1>
          <Link to="/contact">Contact us today!</Link>
        </ReadyToGetStartedSection>
        <JoinOurTeamCornerBtn />
      </ProjectManagementPageContainer>
    </Layout>
  </Global>
);
export default ProductManagementPage;
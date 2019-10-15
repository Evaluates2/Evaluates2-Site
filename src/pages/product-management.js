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
          description="We'll show you how to get the most of agile development methodologies such as SCRUM and XP to get work done quickly and effectively."
        ></SecondServiceHero>
        <StackableColumnsContainer>
          <StackableColumn>
            <ProjectKickoffImage />
            <h1>Project Kickoff</h1>

            <p>
              We like to start off every new project with a team that's firmly aligned and prepared to develop what the client needs. We start off by collecting requirements an learning how your business operates so we can and align with your goals. By the end of the project kickoff we should have a backlog of tasks roughly estimated and an idea of what we should have built at various stages throughout develpoment. 
            </p>
            <p>
              The purpose of the kickoff is primary to align all team members on these goals, itentify risks or contrainsts that can be mitigated against, establish keys deliverables of the project.
          </p>
          </StackableColumn>
          <StackableColumn>
            <ProgressTrackingImage />
            <h1>Progress Tracking</h1>
            <p>
              After a project has kciked off, an Evaluates2 project manager will follow relatively stardard agile methodologies to manage the project such as daily standup meetings, IPMs, demos, and retros.
            </p>
            <p>
              Our project managers are flexible enough to use project management software that your team prefers. For user story tracking we typically use Jira, Pivotal Tracker, Clubhouse, Monday, or Trello. Trello is comes with a low price and learning curve while Jira is more suitable for larger enterprise clients, and the others are somewhere in between. We believe the simple, frictionless communication is critical so we use Slack for text communication and Google hangouts or Skype for remote meetings.
            </p>
            {/* <p>
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
          </p> */}
          </StackableColumn>
          <StackableColumn>
            <MaintenanceImage />
            <h1>Post-Development Maintenance</h1>
            <p>
              {/* As is a natural course for many websites, development moves
              temporarily from active development of new features to ongoing
              maintenance. */}

              At Evaluates2 we pride ourselves on being able to finish development of a project quickly and with very few bugs. However, any software will need some upkeep and monitoring, and we set out from the beginning to make maintenace of our applications as easy and streamlined as possible. 
          </p>
            <p>
              {/* As part of our development process, we will implement the
              appropriate tracking tools to ensure your application is effectively
              maintained. This includes error tracking and performance monitoring
              tools with appropriate notification settings and user tracking tools
              such as Google Analytics, Mix Panel or Heap. At Def Method we stand
              behind the products we build and will support you if your product
              goes down. We offer maintenance plans for customers that are
              interested in having the option for development of small features
              and bug resolution. */}

              As part of the development process we will implement the appropriate logging and monitoring tools. We also create detailed documentation and provide training to engineers responsible for maintenace during project handoff sessions. Although we primarily aim to develop a project and let the client take over, we can provide Evaluates2 engineerings on standby for ongoing maintenance and/or bugfixes if desired.
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
          paragraph1="The daily standup is meant to be a quick check-in for all stakeholders of the project. Each person has a chance to talk about what they did the previous day, what they are planning to work on today, and if there are any blockers for current stories. During this time decision makers can help remove obstacles and answer and clarifying questions for active stories."
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
          paragraph1="Iteration Planning Meetings, sometimes referred to as Sprint Planning, normally occurs once every week or every two weeks depending on the project needs. During this time the engineering team and stakeholders select stories they will commit to delivering during the next sprint, re-evaluate the initial point estimations, clarify any more ambiguities in the story, any assign stories to individuals or pair programming teams."
          header2="Retrospectives (Retros)"
          paragraph2='Retro meetings normally occur at the end of a sprint and give the team a chance to reflect on what when well and not-so-well during that sprint. From that the team then develops action items and reviews if they have addressed '
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
          paragraph1="We like pair programming because it's awesome! We often code with two engineers at a computer, each with their own mouse and keyboard. While making changes to the code they are simultaneously talking out loud about what they are thinking. This inherently leads to easier to explain and understand code, and potential trip-ups are often caught and addressed more quickly by a pair. In this way two developers understand the code even before any reviews of pull requests."
          header2=""
          paragraph2=""
          imgName="USER_STORIES"
          imgOnLeft={false}
          buttonText="Learn More"
          buttonLinkTo="/"
        ></StackableImageAndTextDuo>
        <StackableImageAndTextDuo
          title="Live Demos!"
          header1="Every Successful Sprint Should End With Working Software"
          paragraph1="We believe that delivering working software (and software that will work well long into the future) is our main goal. If the engineers commit to delivering x stories in a sprint then by the end of the sprint we should be able to see a working demo of the stories in a live environment."
          header2="Final Story Acceptance"
          paragraph2="Of course not every story is delivered is exactly how the client would like every time or possibly because of some unforseen blocker a story is not finished by the end of the week. That's ok as long as it's a rare occurence and the blocker is communicated as soon as it is discovered during stand-up meetings. In general, we prefer demo meetings that are over more like festive celebrations with catering and live usable devices available. Large releases are often held at offsite locations and involve presentations from senior stakeholders."
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
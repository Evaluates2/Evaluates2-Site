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
import JoinOurTeamCornerBtn from '../components/generic-reusable-components/join-our-team-corner-btn';

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
          title="Product Discovery"
          description="Ready to bring your ideas to life?"
        ></ServicePageHero>
        <SecondServiceHero
          title="The Product Journey"
          description="From initial product inception to post-deployment, we're here to help."
        ></SecondServiceHero>
        <StackableColumnsContainer>
          <StackableColumn>
            <ProjectKickoffImage />
            <h1>Discovery</h1>

            <p>
              During the discovery phase we determine key goals and needs for your software.
            </p>

          </StackableColumn>
          <StackableColumn>
            <ProgressTrackingImage />
            <h1>MVP Build</h1>
            <p>
              Then we get to work building the necessary software in our disclined, agile style.
          </p>
           
          </StackableColumn>
          <StackableColumn>
            <MaintenanceImage />
            <h1>Maintenance</h1>
            <p>
              Once the development has completed we leave your engineering team with detailed usage instructions, documentation, and monitoring tools. We can provide additional suppport if neccesary. 
          </p>
            {/* <p>
              As part of our development process, we will implement the
              appropriate tracking tools to ensure your application is effectively
              maintained. This includes error tracking and performance monitoring
              tools with appropriate notification settings and user tracking tools
              such as Google Analytics, Mix Panel or Heap. At Def Method we stand
              behind the products we build and will support you if your product
              goes down. We offer maintenance plans for customers that are
              interested in having the option for development of small features
              and bug resolution.
          </p> */}
          </StackableColumn>
        </StackableColumnsContainer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <StackableImageAndTextDuo
          title="Flexible Staff Augmentation"
          header1="One Engineer ora Whole Team"
          paragraph1="We work with all sorts of copmanies, large and small, and our services our always customized to the needs or each unique client."
          header2=""
          paragraph2=""
          imgName="DAILY_STANDUPS"
          imgOnLeft={true}
          buttonText="Learn More"
          buttonLinkTo="/contact"
        ></StackableImageAndTextDuo>
        <StackableImageAndTextDuo
          title="Short or Long-Term Contracts"
          header1="Honest & Realistic Estimations"
          paragraph1="We estimate the length of project development based on previous projects and take into account CI / CD setup, test automation, and the possibility to change course mid-development."
          header2="We're On Your Side"
          paragraph2='Our engineers are taught to development with your best interest in mind and they are internally motivated to always bring up new ideas for improvement and innovation within client companies.'
          imgName="IPMS/RETROS"
          imgOnLeft={false}
          buttonText="Learn More"
          buttonLinkTo="/"
        ></StackableImageAndTextDuo>
        <StackableImageAndTextDuo
          title="We'll Work With Your Budget"
          header1="A Free Consultaion Costs Nothing!"
          paragraph1="Do you want to run some ideas by a few experienced engineers or just need some third-party tehnical guidance? Feel free to contact us for a free 15-30 minute techincal evaluation of your project and how it could possibly be improved."
          header2="An E2 Engineer Pays Many Times Over"
          paragraph2="Having Evaluates2 engineers embedded in your teams encourages a culture that appreciates well-written automated tests, solid CI / CD pipelines, multiples environments, and other practices that result in happy, healthy software."
          imgName="USER_STORIES"
          imgOnLeft={true}
          buttonText="Learn More"
          buttonLinkTo="/"
        ></StackableImageAndTextDuo>
        {/* <StackableImageAndTextDuo
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
        ></StackableImageAndTextDuo> */}
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
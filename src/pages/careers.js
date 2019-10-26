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

import PhoneScreenSvg from './../images/phone-screen.svg';
import CodeTestImage from '../components/img-components/code-test.img';
import InPersonInterviewImage from '../components/img-components/in-person-interview.img';


const PhoneScreenImage = styled.div`

  img {
    width: 100%;
  }

`;

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

  h1 {
    margin: 50px 0 20px;
    font-size: 70px;
    /* display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start; */
  }

  .core-values {
    text-align: left;
    width: 70vw;
    padding: 40px;
  }

  .core-value-p {
    font-size: 30px;
    max-width: 70vw;
    font-family: 'e2-Raleway';
    color: lightgray;
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

const OurCoreValues = styled.div`


ol {
  max-width: 70vw;
}

li {
  font-family: 'e2-Raleway-Semi-Bold';
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 1.2px;
  padding: 10px 0;

  .small-description {
  font-size: 22px;
  line-height: 35px;
  letter-spacing: 1.1px;
  color: lightgrey;

  }

}


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
            <PhoneScreenImage style={{ width: '80%', 'maxWidth': '320px' }}>
              <img src={PhoneScreenSvg} />
            </PhoneScreenImage>
            <h3>stage 1</h3>
            <h1>Phone Screen</h1>
            <p>
              To begin, we ask that you speak to someone from hr for 3 min to
              make sure we are the right fit for you.
            </p>
          </StackableColumn>
          <StackableColumn>
            <CodeTestImage />
            <h3>stage 2</h3>
            <h1>Code Test</h1>
            <p>
              A challenge is always fun, right? We like to give a small
              take-home challenge to allow you to display you coding skills.
            </p>
          </StackableColumn>
          <StackableColumn>
            <InPersonInterviewImage />
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
            <h4>Contract / Freelance Senior Software Engineer at Evaluates2</h4>
            <p>New York, NY</p>
            <br />
            <br />
            <h4>About Evalues2</h4>
            <p>
              We are a team of adept and exuberant polyglot engineers, product managers, and consultants committed to building the best software we can. We apply beautiful, user-tested UI design principles, disciplined test-driven engineering practices, and agile project management oversight to create real business value and delight our customers.
              </p>
            <br />
            <br />
            <h4>Why Work At Evaluates2?</h4>
            <p>
              {' '}
              At e2, you get to work on a variety or projects, solve interesting coding challenges, and work with a team of language-agnostic experts who love building awesome software. At Evaluates2 you'll be treated with respect, given lots of praise, and be granted the freedom and flexibility you need to get the job done right in a way that is enjoyable, and possibly even... fun!
              </p>
            <br />
            <br />
            <h4>What You'll Bring to Evaluates2</h4>
            <p>
              {' '}
              * Flexible generalist engineer able to adapt quickly to new projects and platforms.
              <br />
              <br />
              * Experience successfully shipping many applications, either personal or at work.
              <br />
              <br />
              * Excellent communication skills- able to effective give and receive feedback from clients and other e3 team members while being respectful of their feelings.
              <br />
              <br />
              * Eagerness to participate pair programming, work with other engineers face-to-face, and answer questions of non-technical clients.
              <br />
              <br />
              * Intense appreciation for automated testing and willingness to adopt disciplined TDD practices, unit testing, end-to-end testing, and BDD testing frameworks.
              <br />
              <br />
              * 5+ years experience working with modern programming languages.
              <br />
              <br />
              * Experience with or interest in learning our most used languages: JavaScript, TypeScript, Go, Clojure, Swift, Python, Java.
              <br />
              <br />
              * Strengths in web development or native mobile development, with a desire to expand personal skill set.
              </p>{' '}
            <br />
            <h4>How you'll spend your time at Evaluates2</h4>

            <p>

              * Practice - be an advocate for the product by instilling revising and reinforcing the product vision across all stakeholders. Gather user feedback and data to inform product decisions and drive product prioritization. Communicate product requirements and strategy across design, engineering and client teams.
              <br />
              <br />

              * Project Management - monitor, track and evaluate client projects and reiterate on the process as needed. Communicate project status and deliverables to stakeholders.
              <br />
              <br />

              * Tactical - facilitate product discovery and development on client projects, act as PM advisor to our customers and consultants, lead workshops, provide additional project support as needed
              <br />
              <br />

              * Operations - represent product management in sales conversations and scoping work
              <br />
              <br />
              What you’ll bring

              * Collaborating with engineers, product managers, designers, and any involved stakeholders.
              <br />
              <br />
              * Helping team members and the company as a whole improve through your input and innovative ideas.
              <br />
              <br />
            </p>

            <br />
            <h4>Why we love working here at Evaluates2</h4>
            <p>
              * Great pay!
              <br />
              <br />
              * Ability to touch a variety of platforms and languages and a heavy investment from the company in the learning and development of its engineers.
              <br />
              <br />
              * Generous vacation time and minimal travel (if at all)
              <br />
              <br />
              * Flexible hours and work-from-home opportunities.
              <br />
              <br />
              * Work in a respectful, safe place where everyone should feel comfortable and accepted.
              <br />
              <br />
              * Awesome, incredibly smart colleagues and leadership who treat every employee and consultant as a meaningful member of the Evaluates2 family.
              <br />
              <br />
              * Opportunity to join at the very beginning startup phase and be among the first few hires.
            <br />
              <br />
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
            <h4>Mid-Level Software Engineer at Evaluates2</h4>
            <p>New York, NY</p>
            <br />
            <br />
            <h4>About Evalues2</h4>
            <p>
              We are a team of adept and exuberant polyglot engineers, product managers, and consultants committed to building the best software we can. We apply beautiful, user-tested UI design principles, disciplined test-driven engineering practices, and agile project management oversight to create real business value and delight our customers.
              </p>
            <br />
            <br />
            <h4>Why Work At Evaluates2?</h4>
            <p>
              {' '}
              At e2, you get to work on a variety or projects, solve interesting coding challenges, and work with a team of language-agnostic experts who love building awesome software. At Evaluates2 you'll be treated with respect, given lots of praise, and be granted the freedom and flexibility you need to get the job done right in a way that is enjoyable, and possibly even... fun!
              </p>
            <br />
            <br />
            <h4>What You'll Bring to Evaluates2</h4>
            <p>
              {' '}
              * Flexible generalist engineer able to adapt quickly to new projects and platforms.
              <br />
              <br />
              * Experience successfully shipping many applications, either personal or at work.
              <br />
              <br />
              * Excellent communication skills- able to effective give and receive feedback from clients and other e3 team members while being respectful of their feelings.
              <br />
              <br />
              * Eagerness to participate pair programming, work with other engineers face-to-face, and answer questions of non-technical clients.
              <br />
              <br />
              * Intense appreciation for automated testing and willingness to adopt disciplined TDD practices, unit testing, end-to-end testing, and BDD testing frameworks.
              <br />
              <br />
              * 3+ years experience working with modern programming languages.
              <br />
              <br />
              * Experience with or interest in learning our most used languages: JavaScript, TypeScript, Go, Clojure, Swift, Python, Java.
              <br />
              <br />
              * Strengths in web development or native mobile development, with a desire to expand personal skill set.
              </p>{' '}
            <br />
            <h4>How you'll spend your time at Evaluates2</h4>
            <p>
              {' '}
              * Creating software in small teams with active customer involvement.
              <br />
              <br />
              * Collaborating with engineers, product managers, designers, and any involved stakeholders.
              <br />
              <br />
              * Helping team members and the company as a whole improve through your input and innovative ideas.
              <br />
              <br />
              * Learning from other colleagues and sharing your on discoveries as we proceed to make the best software we can.
              </p>
            <br />
            <h4>Why we love working here at Evaluates2</h4>
            <p>
              * Great pay!
              <br />
              <br />
              * Ability to touch a variety of platforms and languages and a heavy investment from the company in the learning and development of its engineers.
              <br />
              <br />
              * Generous vacation time and minimal travel (if at all)
              <br />
              <br />
              * Flexible hours and work-from-home opportunities.
              <br />
              <br />
              * Work in a respectful, safe place where everyone should feel comfortable and accepted.
              <br />
              <br />
              * Awesome, incredibly smart colleagues and leadership who treat every employee and consultant as a meaningful member of the Evaluates2 family.
              <br />
              <br />
              * Opportunity to join at the very beginning startup phase and be among the first few hires.
            <br />
              <br />
            </p>
            {/* </JobPosting> */}
          </JobDescriptionBlock>
        </JobDescriptionBlocks>
        <br />
        <br />
        <JobDescriptionBlocks>
          <JobDescriptionBlock isInternBlock={false} linkTo="https://www.google.com">
            {/* <JobPosting> */}

            <h2>Product Manager</h2>
            <h3>New York, NY, United States</h3>
            <br />
            <h4>Product Manager</h4>
            <p>New York, NY</p>
            <br />
            <br />
            <h4>About Evalues2</h4>
            <p>
              We are a team of adept and exuberant polyglot engineers, product managers, and consultants committed to building the best software we can. We apply beautiful, user-tested UI design principles, disciplined test-driven engineering practices, and agile project management oversight to create real business value and delight our customers.
              </p>
            <br />
            <br />
            <h4>Why Work At Evaluates2?</h4>
            <p>
              {' '}
              At e2, you get to work on a variety or projects, solve interesting coding challenges, and work with a team of language-agnostic experts who love building awesome software. At Evaluates2 you'll be treated with respect, given lots of praise, and be granted the freedom and flexibility you need to get the job done right in a way that is enjoyable, and possibly even... fun!
              </p>
            <br />
            <br />
            <h4>What You'll Bring to Evaluates2</h4>
            <p>
              {' '}
              * Flexible generalist engineer able to adapt quickly to new projects and platforms.
              <br />
              <br />
              * Experience successfully shipping many applications, either personal or at work.
              <br />
              <br />
              * Excellent communication skills- able to effective give and receive feedback from clients and other e3 team members while being respectful of their feelings.
              <br />
              <br />
              * Eagerness to participate pair programming, work with other engineers face-to-face, and answer questions of non-technical clients.
              <br />
              <br />
              * Intense appreciation for automated testing and willingness to adopt disciplined TDD practices, unit testing, end-to-end testing, and BDD testing frameworks.
              <br />
              <br />
              * 5+ years experience working with modern programming languages.
              <br />
              <br />
              * Experience with or interest in learning our most used languages: JavaScript, TypeScript, Go, Clojure, Swift, Python, Java.
              <br />
              <br />
              * Strengths in web development or native mobile development, with a desire to expand personal skill set.
              </p>{' '}
            <br />
            <h4>How you'll spend your time at Evaluates2</h4>
            <p>
              {' '}
              * Creating software in small teams with active customer involvement.
              <br />
              <br />
              * Collaborating with engineers, product managers, designers, and any involved stakeholders.
              <br />
              <br />
              * Helping team members and the company as a whole improve through your input and innovative ideas.
              <br />
              <br />
              * Learning from other colleagues and sharing your on discoveries as we proceed to make the best software we can.
              </p>
            <br />
            <h4>Why we love working here at Evaluates2</h4>
            <p>
              * Great pay!
              <br />
              <br />
              * Ability to touch a variety of platforms and languages and a heavy investment from the company in the learning and development of its engineers.
              <br />
              <br />
              * Generous vacation time and minimal travel (if at all)
              <br />
              <br />
              * Flexible hours and work-from-home opportunities.
              <br />
              <br />
              * Work in a respectful, safe place where everyone should feel comfortable and accepted.
              <br />
              <br />
              * Awesome, incredibly smart colleagues and leadership who treat every employee and consultant as a meaningful member of the Evaluates2 family.
              <br />
              <br />
              * Opportunity to join at the very beginning startup phase and be among the first few hires.
            <br />
              <br />
            </p>
            {/* </JobPosting> */}
          </JobDescriptionBlock>
        </JobDescriptionBlocks>
        <br />
        <br />
        <JobDescriptionBlocks>
          <JobDescriptionBlock isInternBlock={false} linkTo="https://www.google.com">
            {/* <JobPosting> */}

            <h2>Senior Software Engineer</h2>
            <h3>New York, NY, United States</h3>
            <br />
            <h4>Senior Software Engineer</h4>
            <p>New York, NY</p>
            <br />
            <br />
            <h4>About Evalues2</h4>
            <p>
              We are a team of adept and exuberant polyglot engineers, product managers, and consultants committed to building the best software we can. We apply beautiful, user-tested UI design principles, disciplined test-driven engineering practices, and agile project management oversight to create real business value and delight our customers.
              </p>
            <br />
            <br />
            <h4>Why Work At Evaluates2?</h4>
            <p>
              {' '}
              At e2, you get to work on a variety or projects, solve interesting coding challenges, and work with a team of language-agnostic experts who love building awesome software. At Evaluates2 you'll be treated with respect, given lots of praise, and be granted the freedom and flexibility you need to get the job done right in a way that is enjoyable, and possibly even... fun!
              </p>
            <br />
            <br />
            <h4>What You'll Bring to Evaluates2</h4>
            <p>
              {' '}
              * Flexible generalist engineer able to adapt quickly to new projects and platforms.
              <br />
              <br />
              * Experience successfully shipping many applications, either personal or at work.
              <br />
              <br />
              * Excellent communication skills- able to effective give and receive feedback from clients and other e3 team members while being respectful of their feelings.
              <br />
              <br />
              * Eagerness to participate pair programming, work with other engineers face-to-face, and answer questions of non-technical clients.
              <br />
              <br />
              * Intense appreciation for automated testing and willingness to adopt disciplined TDD practices, unit testing, end-to-end testing, and BDD testing frameworks.
              <br />
              <br />
              * 5+ years experience working with modern programming languages.
              <br />
              <br />
              * Experience with or interest in learning our most used languages: JavaScript, TypeScript, Go, Clojure, Swift, Python, Java.
              <br />
              <br />
              * Strengths in web development or native mobile development, with a desire to expand personal skill set.
              </p>{' '}
            <br />
            <h4>How you'll spend your time at Evaluates2</h4>
            <p>
              {' '}
              * Creating software in small teams with active customer involvement.
              <br />
              <br />
              * Collaborating with engineers, product managers, designers, and any involved stakeholders.
              <br />
              <br />
              * Helping team members and the company as a whole improve through your input and innovative ideas.
              <br />
              <br />
              * Learning from other colleagues and sharing your on discoveries as we proceed to make the best software we can.
              </p>
            <br />
            <h4>Why we love working here at Evaluates2</h4>
            <p>
              * Great pay!
              <br />
              <br />
              * Ability to touch a variety of platforms and languages and a heavy investment from the company in the learning and development of its engineers.
              <br />
              <br />
              * Generous vacation time and minimal travel (if at all)
              <br />
              <br />
              * Flexible hours and work-from-home opportunities.
              <br />
              <br />
              * Work in a respectful, safe place where everyone should feel comfortable and accepted.
              <br />
              <br />
              * Awesome, incredibly smart colleagues and leadership who treat every employee and consultant as a meaningful member of the Evaluates2 family.
              <br />
              <br />
              * Opportunity to join at the very beginning startup phase and be among the first few hires.
            <br />
              <br />
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
            <h4>Strategy & Operations Intern</h4>
            <ul>
              <li>
                Help raise awareness of Evaluates2 in the New York City tech community.
                </li>
              <li>
                Help schedule and run public and internal events.
                </li>
              <li>
                Aid in business development and lead generation.
                </li>
              <li>
                Marketing, social media, and customer engagement
                </li>
              <li>
                Content creation: videos, graphics, emails, and/or code!
                </li>

            </ul>
            {/* </JobPosting> */}
          </JobDescriptionBlock>

        </JobDescriptionBlocks>



        <br />
        <br />
        <br />

        <OurCoreValues>
          <h1 className="core-values">Our Core Values</h1>
          <p className="core-value-p">Our unique and down-to-earth core values are a part of what make Evaluates2 such a great place to work!</p>

          <ol>
            <li>Integrity - <span className="small-description">
              Tell the truth and act in a responsible way that is in the best interest of the clients, Evaluates2, and your team members. Always try to do the right thing and be tranparent with your team members.
              </span>
            </li>
            <li>Respect - <span className="small-description">
              Recognize the human rights and privacy of others, reject all kinds of discrimination, and stop judging others altogether. There are things each of us can learn from and teach to every other person, and we can have discussions and build awesome software together without hurting each other's feelings.
            </span>
            </li>
            <li>Growth - <span className="small-description">
              Evaluates2 is an awesome environment for learning new things and experiencing firsthand what TDD-XP-Agile development looks like in practice. As a small and quickly growing company, we expect a lot more growth in terms of projects, clients, and engineers!
            </span>
            </li>
            <li>Innovation - <span className="small-description">
              Help the clients see what they really need. Fail fast and don't get discouraged. Be open-minded to the idea of other teammates, and create a culture where everyone's voice can be heard and where decisions are based on statistically data rather than the boss's gut feelings.
            </span>
            </li>
            <li>Efficiency - <span className="small-description">
              We are always on the lookout for ways we can improve our processes and workflow, allow our tests to give us confidence to deploy rapidly, and in general try to write the simplest, most understandable code.
            </span>
            </li>
            <li>Fun - <span className="small-description">
              That's right, fun is a first-class core company value here at Evaluates2. Finding humor in the work, celebrating our victories, and setting aside time and resources for team building activities all  aim to fuel the enjoyment and excitement employees feel in the morning before going to work at Evaluates2. You may decide to trade your labor for compensation with another company, but once you are hired here you are a member of the Evaluates2 family forever.
            </span>
            </li>
          </ol>
        </OurCoreValues>
        <br />
        <br />
        <br />

        <ReadyToGetStartedSection>
          <h1>Ready to partner with us?</h1>

          <Link to="/contact">Contact us today!</Link>
        </ReadyToGetStartedSection>
        <br />
        <br />
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

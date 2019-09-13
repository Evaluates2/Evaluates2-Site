import React from 'react';
import { Link } from 'gatsby';
import Global from "../components/Global"
import Layout from '../components/layout';

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
`;

const ProductManagementPage = () => (
  <Global pageTitle={''} path={''} description={''}>
    <h1>Product Management</h1>
    <h3>Leadership that guides successful product development</h3>
    <h1>Our process</h1>
    <h3>
      Get the most from software development practices like Agile, SCRUM and XP
      with proven best practices and tools.
    </h3>
    <h1>Project Kickoff</h1>
    <p>
      Every successful project starts with a team that's firmly aligned and
      prepared for product development. At Evaluates2, we start off every
      project by collecting product requirements, aligning with your team on
      goals, and building out an initial project estimate spreadsheet that is
      broken down by a backlog and icebox.
    </p>
    <p>
      The primary goal of the kickoff is to get alignment among all team
      members: clarify the key goals and the anti-goals (what we will not do)
      for the project, identify key constraints (launch date, market conditions,
      budget) and risks factors, and establish the prioritization of features.
      Once we've completed this process with your team, we'll have the
      information we need to dive in head-first to product development.
    </p>
    <h1>Progress Tracking</h1>
    <p>
      Once a project is kicked off, Evaluates2 PMs use an agile process to
      manage product development. This includes daily standups, weekly IPMs,
      weekly demos and project retros.
    </p>
    ‍
    <p>
      The PMs will work with the project management tools that your team
      prefers. For user story tracking we commonly use Pivotal Tracker, Trello,
      or Jira. Pivotal Tracker and Trello come with a low learning curve and are
      straightforward to set up, whereas Jira allows for detailed customization
      of workflow and is well suited to larger scale projects. We typically use
      Slack for communication, Google Hangouts/Meet for remote meetings, Rollbar
      for error tracking and New Relic for performance monitoring.
    </p>
    <h1>Maintenance</h1>
    <p>
      As is a natural course for many websites, development moves temporarily
      from active development of new features to ongoing maintenance.
    </p>
    <p>
      As part of our development process, we will implement the appropriate
      tracking tools to ensure your application is effectively maintained. This
      includes error tracking and performance monitoring tools with appropriate
      notification settings and user tracking tools such as Google Analytics,
      Mix Panel or Heap. At Evaluates2 we stand behind the products we build and
      will support you if your product goes down. We offer maintenance plans for
      customers that are interested in having the option for development of
      small features and bug resolution.
    </p>
    {/* <Link to="/">home</Link> */}
    <br />
    <br />
    <br />
    <br />
    <h1>Daily Standup</h1>
    <h3>15-min standups</h3>
    <p>
      The daily standup is a quick check-in between the developers and decision
      makers on the project. Standups are expected to run less than 15 minutes
      and each team member in turn shares what task they worked on the previous
      day, what task they are working on today and if they face any “blockers”
      or obstacles. Decision makers can help remove any obstacles or answer any
      clarifying questions on the active user stories during these meetings.
    </p>
    <br />
    <br />
    <br />
    <br />
    <h1>IPMs/Retros</h1>
    <h3>Iteration Planning Meetings (IPMs)</h3>
    <p>
      Iteration Planning Meetings (IPM)s also known as Sprint planning occurs
      once every week or every two weeks depending on the project needs. At this
      meeting the team together review the user stories that they will work on
      for the following sprint, clarify the acceptance criteria and point the
      stories. Once all the stories are pointed they will use story points as a
      guide to commit to completing a unit of work during the sprint. At the end
      of the sprint the team will demo their deliverables to the client and
      other stakeholders.
    </p>
    <h3>Retrospectives (Retros)</h3>
    <p>
      Retrospective meetings are held once every week or every two weeks
      depending on the team. Retrospectives allows the team to evaluate their
      progress, share what worked well for them and what created friction in
      their work during the past sprint. Regular retrospectives allow the team
      to check in frequently and run mini-experiments to improve workflow and
      become more efficient as a team. The retrospective aims to answer the
      following questions:
      <ul>
        <li>What should we stop doing?</li>
        <li>What should we continue doing?</li>
        <li>What can we start doing that will help us be more efficient?</li>
      </ul>
    </p>
    <br />
    <br />
    <br />
    <br />‍<h1>User Stories</h1>
    <h3>Story Writing</h3>
    <p>{stringWithBrackets}</p>
    <p>
      ‍Writing stories this way keeps the business and engineering teams focused
      on the end user and guides product design and development according to the
      needs of the target user. Once we have defined each user story, we add
      functional and non-functional requirements and acceptance criteria that
      need to be met for the user story to be considered completed. We break
      down our user stories to make sure each user story is small enough to be
      done within 2-3 days to ensure ongoing progress and prevent blockers.
    </p>
    <h3>Story Acceptance</h3>
    <p>
      Our engineering teams deliver continuously and you, the client, play the
      primary role in reviewing and accepting delivered features. As soon as a
      user story is complete it is put in a queue for you to review and approve.
      To facilitate the review and feedback process we hold weekly demos of the
      delivered features with the engineers. This is where you provide feedback
      to the team on what you see. The ongoing nature of the review and feedback
      process throughout development allows you to call in adjustments as the
      work is being done reducing significant rework and redesign. It also
      provides full transparency to you with regard to the progress and quality
      of work being conducted.
    </p>
    {/* <Link to="/page-p/">Page P</Link> */}
  </Global>
);

export default ProductManagementPage;

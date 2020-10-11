import React from 'react';
import Global from '../components/Global';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import JoinOurTeamCornerBtn from './../components/generic-reusable-components/join-our-team-corner-btn';
import Link from 'gatsby-link';
import TeamMemberBlock from './../components/generic-reusable-components/team-member-block';
import StackableImageAndTextDuo from '../components/generic-reusable-components/stackable-image-and-text-duo';
import StackableColumnsContainer from '../components/generic-reusable-components/stackable-columns-container';
import OurWorkPieceOfWork from '../components/our-work-piece-of-work';
import ChangeGearsBlock from '../components/generic-reusable-components/change-gears-block';
import ReadyToGetStartedSection from '../components/generic-reusable-components/ready-to-get-started-section';

const OurWorkHero = styled.div`

 h1#hero-h-our-work {
    color: #000032;
    font-size: 120px;
    font-family: 'e2-Raleway-Extra-Bold';
    text-align: center;
    margin-top: 150px;
     color: #000032;
    font-family: 'e2-Raleway-Extra-Bold';
    text-align: center;
    margin-top: calc(160px + 12vw);
    letter-spacing: 0.5vw;
    line-height: 5vw;
    font-size: calc(21px + 9vw);
  }
  p {
    color: #000032;
    font-size: 38px;
    font-family: 'e2-Raleway';
    text-align: center;
    padding-top: 5vw; 
    opacity: 0.8;
    line-height: calc(15px + 6vw);
    font-size: calc(7px + 3vw);
    margin: 15vw 7vw 15vw;
  }
  .about-blurb {

    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 30px;
    line-height: 15vw;
    max-width: 800px;
    text-align: justify;

    color: #000011;
    font-size: 38px;
    font-family: 'e2-Raleway';
    text-align: center;
    margin: 10px 40px 150px;
    opacity: 0.8;
  }

  .ourWork-blurb {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 30px;
    line-height: 60px;
    max-width: 800px;
    line-height: 3.5vw;
    text-align: justify;
  }

  div {
    text-align: center !important;
  }

  .ourWork-us-video {
    text-align: center;
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

`;

const CenteredVideo = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BigSectionTitle = styled.div`
  padding: calc(20px + 10vw) calc(15px + 4vw);

  h1 {
    font-size: calc(20px + 2vw);
    line-height: calc(35px + 2vw);
    font-family: 'e2-Raleway-Extra-Bold';
    color: #000032;
  }

  p {
    font-size: calc(14px + 2vw);
    line-height: calc(30px + 2vw);
  }
`;

const NiceQuoteSection = styled.div`
  padding: 0 calc(20px + 2vw);

  h1 {
    margin-bottom: 0;
    font-size: calc(22px + 1vw);
    line-height: calc(35px + 2vw);
    font-family: 'e2-Raleway-Semi-Bold-Italic';
  }

  p {
    font-size: calc(12px + 1vw);
    line-height: calc(25px + 2vw);
    font-family: 'e2-Raleway-Semi-Bold';
    padding-top: calc(25px + 1vw);
  }

  min-height: 300px;
`;

const MidPageAnchor = styled.div`
  min-height: 10px;
  /* padding: 20px; */
`;

const OurWorkBlurb = styled.div`
  p {
    margin-top: 50px 40px;
    font-size: 30px;
    line-height: 50px;
    padding: 10px 40px 230px;
    color: #333333;
    text-align: justify;
  }
`;

const OurTeamSection = styled.div`
  padding: 0 100px;

  h1 {
    font-family: 'e2-Raleway-Extra-Bold';
    font-size: 80px;
    line-height: 100px;
    font-weight: 800;
    margin-bottom: 40px;
  }

  .our-team-grid {
    display: grid;
    grid-gap: 35px;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 100px;
    grid-template-columns: auto auto auto auto auto auto auto;

    @media only screen and (max-width: 1350px) {
      grid-template-columns: auto auto auto auto auto auto;
    }

    @media only screen and (max-width: 1160px) {
      grid-template-columns: auto auto auto auto auto;
    }
    @media only screen and (max-width: 990px) {
      grid-template-columns: auto auto auto auto;
    }

    @media only screen and (max-width: 810px) {
      grid-template-columns: auto auto auto;
    }
    @media only screen and (max-width: 610px) {
      grid-template-columns: auto auto;
    }
    @media only screen and (max-width: 430px) {
      grid-template-columns: auto;
    }

    .team-member-cell {
      .team-member-img {
      }

      h2 {
      }

      p {
      }
    }
  }
`;

const WhatWeveBuiltSection = styled.div`
  padding: 0 100px;

`;

const PinkBoxesContainer = styled.div`
  padding: 0 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

const PinkBox = styled.div`
  display: flex;
  width: 35vw;
  height: 35vw;
  min-width: 250px;
  min-height: 250px;
  max-width: 450px;
  max-height: 450px;
  margin: 20px 20px;
  padding: 30px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  background-image: linear-gradient(51deg, #f0f, #efe51a);
  color: #fff;
  border-radius: 4px;

  h1 {
    font-size: 35px;
    margin: 20px auto 30px 0;
    text-align: left;
    min-height: 85px;
  }

  p {
    font-size: 24px;
  }
`;

const OurWorkPage = () => (
  <Global pageTitle={'OurWork'} path={'ourWork'} description={'ourWork'}>
    <Layout>

      <OurWorkHero>
        <h1 id="hero-h-our-work">Our&nbsp;Work</h1>
        <p>
          We don't just say we build awesome things- we've been doing it for a while...
        </p>
      </OurWorkHero>

      <BigSectionTitle>
        <h1>Success Stories</h1>
        <p>
          A few of the previous projecs we've succesfully launched.
        </p>
      </BigSectionTitle>

      {/* <StackableColumnsContainer> */}
      <OurWorkPieceOfWork
        title="The Triple Gainers"
        header1="sign up form"
        header1link="https://cdn.forms-content.sg-form.com/f034a73f-a80f-11ea-8e17-928c85d443c0"
        paragraph1='The "Triple Gainers" is a daily email sent out on weekdays at 5:30pm EST that analyzes all of the US large cap stocks and displays them in a nice html table with relevant percentages and calculations.'
        header2=""
        paragraph2=""
        imgName="TRIPLE_GAINERS_EMAIL"
        imgOnLeft={true}
        buttonText="Sign Up"
        buttonLinkTo="https://cdn.forms-content.sg-form.com/f034a73f-a80f-11ea-8e17-928c85d443c0"
      >
        <ul>
          <li>Implemented as series of cron-scheduled NodeJS microservices that scrape stock information, crunch numbers, sift through large arrays, and send html emails.</li>
          <li>Utilizes MongoDB for data storage with an efficient "dataframe-like" structure for scraped data.</li>
          <li>Leverages Sengrid for managing the sending of emails, subscription web form, and unsubscribe options pages.</li>
        </ul>
      </OurWorkPieceOfWork>

      <br />

      <OurWorkPieceOfWork
        title="Social Engagement Serverless Functions"
        header1="www.twitter.com/JimLynchCodes"
        header1link="https://www.twitter.com/JimLynchCodes"
        paragraph1="This is a parameterized NodeJS script that runs every few minutes on a cron schedule. It takes keywords, searches for recent twees containing those keywords, and automatically likes the tweet, retweets the tweet, and follows the user who posted it (all configurable via command line flags)."
        header2=""
        paragraph2=""
        imgName="JIM_TWITTER"
        imgOnLeft={false}
        buttonText="See the code!"
        buttonLinkTo="https://github.com/JimLynchCodes/Plug-N-Play-Twitter-Engager"
      >
        <ul>
          <li>Runs via cron-jobs every few minutes on the small Digital Ocean ubuntu server.</li>
          <li>Has aquired thousands of likes & followers for @JimLynchCodes and
          other private client accounts.</li>
          <li>Many iterations including versions for AWS Lambda written in once Es6 JavaScript and
          again later with ClojureScript.</li>
        </ul>
      </OurWorkPieceOfWork>

      <OurWorkPieceOfWork
        title="The JimLynchCodes Blog"
        header1="www.jimlynchcodes.com"
        header1link="https://www.jimlynchcodes.com"
        paragraph1="This is a CMS-based blog site where Jim posts his musings and experiences related to coding, software development, and random life lessons."
        header2=""
        paragraph2=""
        imgName="WOJ_BLOG"
        imgOnLeft={true}
        buttonText="Visit site"
        buttonLinkTo="https://www.jimlynchcodes.com"
      >
        <ul>
          <li>A public place on the web for others to see what Jim's into at any given time, learn about key things he has figured out, and engage with him by leaving comments and questions. </li>
          <li>Over 200 posts by Jim from as far back as 2015.</li>
          <li>Easy to maintain and deploy website with a fun, interactive CMS editor.</li>
        </ul>
      </OurWorkPieceOfWork>

      <OurWorkPieceOfWork
        title="This Website!"
        header1="https://evaluates2.com"
        header1link="https://evaluates2.com"
        paragraph1='The core of this website is a modern, fuctinonal React.js frontend. The contact form uses an AWS Lambda function and was the first ever live deployed instance of our "E2-Super-Contact-Form!" project.'
        header2=""
        paragraph2=""
        imgName="E2_SCREENSHOT"
        imgOnLeft={false}
        buttonText="visit site"
        buttonLinkTo="https://evaluates2.com"
      >
        <ul>
          <li>
            Clean, modern React.js Frontend with Jest and Cucumber+Cypress
            testing.
          </li>
          <li>
            AWS Lambda + MongoDB backend for contact form that includes field
            validation, recaptcha human validation, inserting data into mongoDb,
            and notifying admins of form submissions.
          </li>
          <li>
            Responive design leveraging flexbox, grid-css, media queries, and
            more responsive design tricks for great UI across desktops, tablets,
            and phones!
          </li>
        </ul>
      </OurWorkPieceOfWork>

      <MidPageAnchor>
        <a id="OPEN_SOURCE" />
      </MidPageAnchor>

      <BigSectionTitle>
        <h1>Open Source</h1>
        <p>
          Evaluates2 engineers are not only great contractors; we are also
          contributors back to the open source community!
        </p>
      </BigSectionTitle>

      <OurWorkPieceOfWork
        title="Titanium Lambda"
        header1="www.github.com/jimlynchcodes/titanium-lambda"
        header1link="https://www.github.com/jimlynchcodes/titanium-lambda"
        paragraph1="Titanium Lambda is more of a philosophical way of develop REST apis that runs on serverless technology and is border-line bulletproof because of great automated test coverage."
        header2=""
        paragraph2=""
        imgName="TITANIUM_LAMBDA"
        imgOnLeft={true}
        buttonText="Explore..."
        buttonLinkTo="https://www.github.com/jimlynchcodes/titanium-lambda"
      >
        <ul>
          <li>Massive README with information, images, lessons, and useful tools.</li>
          <li>
            Based on real world experience developing and managing applications with fully serverless backends with high traffic.
          </li>
          <li>
            Barebones NodesJS serverless boilerplate code.
          </li>
        </ul>
      </OurWorkPieceOfWork>

      <OurWorkPieceOfWork
        title="Gatsby Starter TypeScript Redux TDD BDD"
        header1="gatsbyjs.org/starters/Evaluates2/Gatsby-Starter-TypeScript-Redux-TDD-BDD/"
        header1link="https://www.gatsbyjs.org/starters/Evaluates2/Gatsby-Starter-TypeScript-Redux-TDD-BDD/"
        paragraph1="In early 2020 we released this exciting open-source project, an awesome Gatsby starter template that takes care of the tooling setup, allowing you and your team to dive right into building ultra-fast React applications quickly and deploy them with confidence!"
        header2=""
        paragraph2=""
        imgName="GATSBY_STARTER_TDD_BDD"
        imgOnLeft={false}
        buttonText="Explore..."
        buttonLinkTo="https://www.gatsbyjs.org/starters/Evaluates2/Gatsby-Starter-TypeScript-Redux-TDD-BDD/"
      >
        <ul>
          <li>Already setup with Jest for TDD unit testing and Cypress + Cucumber.js for BDD end-to-end testing.</li>
          <li>
            Has TypeScript preconfigured and Redux with configurable localstorage syncing of slices of state pre-installed.
          </li>
          <li>
            Excellent choice for building performant React applications while leveraging automated testing to iterate quickly and accurately!
          </li>
        </ul>
      </OurWorkPieceOfWork>

      <OurWorkPieceOfWork
        title="Free Talks!"
        header1="evaluates2.com/contact"
        header1link="https://evaluates2.com/contact/"
        paragraph1="The engineers and leadership at Evaluates love talking about software develpment, and we be honored to speak at any events Please contact us for more information!"
        header2=""
        paragraph2=""
        imgName="FREE_TALKS"
        imgOnLeft={true}
        buttonText="Contact Us..."
        buttonLinkTo="https://evaluates2.com/contact/"
      >
        <ul>
          <li>Let us show you how we have been building software quickly, accurately, and happily!</li>
          <li>
            These talks are for you! We're willing to present on anything your audience would like to learn more about, from the very technical implementation details to the managing a portfolio of software products in a large organization.
          </li>
          <li>
            Choose your favorite speaker(s) from our team of incredible engineers, data scientists, and product managers, many of whom have a history of presenting great talks.
          </li>
        </ul>
      </OurWorkPieceOfWork>

      {/* <OurWorkPieceOfWork
        title="E2 Super Contact Form"
        header1="www.github.com/e2-super-contact-form"
        header1link="www.github.com/e2-super-contact-form"
        paragraph1="Kate from HR is a tool for making teams better. A fun and easy-to-use Slack-integrated chatbot collected anonymous feedback that can be public or private (specified by the user). This is then aggregated and visualized in a web dashboard."
        header2=""
        paragraph2=""
        imgName="TITANIUM_LAMBDA"
        imgOnLeft={false}
        buttonText="Tweet Jim!"
        buttonLinkTo="www.github.com/e2-super-contact-form"
      >
        <ul>
          <li>Extremely Cheap & Quick to Run & Maintain.</li>
          <li>
            Aquired Thousands of Total Likes & Followers for @WebWhizJim and
            other private client accounts.
          </li>
          <li>
            Written for AWS Lambda Twice Using Both Es6 JavaScript and
            ClojureScript.
          </li>
        </ul>
      </OurWorkPieceOfWork> */}
      <OurWorkPieceOfWork
        title="E2 Public Repositories"
        header1="www.github.com/evaluates2"
        header1link="https://www.github.com/evaluates2"
        paragraph1=""
        header2="Check out some of our public repositories! We have all kinds of cool examples projects and guidelines displaying how we like to build clean, working software."
        paragraph2=""
        imgName="E2_GITHUB"
        imgOnLeft={false}
        buttonText="Explore..."
        buttonLinkTo="https://www.github.com/evaluates2"
      >
        <ul>
          <li>Many example projects and small isolated demos illustrating key concepts, useful development tools, and interviewing materials across various languages.</li>
          <li>
            Examples of automated testing across all the languages we use.
          </li>
          <li>
            Anyone can get involved! Feel free to open issues and pull requests and find us on Twitter if you'd like to join the e2 movement!
          </li>
        </ul>
      </OurWorkPieceOfWork>

      <OurWorkPieceOfWork
        title="Everybody Codes!"
        header1="https://everybodycodes.github.io/Official-Website/"
        header1link="https://everybodycodes.github.io/Official-Website/"
        paragraph1="Awesome people helping EVERYBODY learn to code!"
        header2=""
        paragraph2=""
        imgName="EVERYBODY_CODES"
        imgOnLeft={true}
        buttonText="Check out our Github org..."
        buttonLinkTo="https://github.com/EverybodyCodes"
      >
        <ul>
          <li>Troubled by the disproportionately low number of black, brown, and female coders, Everybody Codes aims to help everyone realize he or she can become a successful software engineer.</li>
          <li>
            Helping seniors and "non software developer" adults dabble with coding because, as Steve Jobs once said, "Everybody should learn to program a computer... because it teaches you how to think".
          </li>
          <li>
            Runs the "30-minute-mentor program" that matches up a disadvantaged child with a successful creative professional for a 30-minute 1-on-1 video call, giving the child a personal connection with a positive role model, allowing them to ask questions / discover key insights, and learn more about his or her specific interests and their respective industies.
          </li>
        </ul>
      </OurWorkPieceOfWork>

      <br />
      <br />
      <br />
      <br />
      <NiceQuoteSection>
        <h1>
          "Although we've already<span className="empashized"> accomplished </span> so much, I still wake
          up every day <span className="empashized">hungry</span> for new{' '}
          <span className="empashized">exciting</span> software development{' '}
          <span className="empashized">challenges</span>."
        </h1>
        <p>- Cofounder & Principal Engineer Jim Lynch</p>
      </NiceQuoteSection>

      <br />
      <br />
      <ChangeGearsBlock
        headerText="Find out more about how we work..."
        linkText="Product Management"
        linkTo="/product-management"
      ></ChangeGearsBlock>

      {/* <WhatWeveBuiltSection>
        <h1>What We've Built</h1>
        <p>
          You don't have to take our word for it that we can build great
          software- just take a look at some the awesome project we've made!
        </p>
      </WhatWeveBuiltSection> */}

      <br />
      <br />
      <br />

      <ReadyToGetStartedSection>
        <h1>Ready to partner with us?</h1>
        <Link to="/contact">Contact us today!</Link>
      </ReadyToGetStartedSection>

      {/* <PinkBoxesContainer>
        <Link to="/our-work">
          <PinkBox>
            <h1>Previous Success Stories</h1>
            <p>Real case stories of businesses we've helped.</p>
          </PinkBox>
        </Link> */}

      {/* <Link to="/our-work">
          <PinkBox>
            <h1>Open Source</h1>
            <p>See how we contribute back to the software comunity.</p>
          </PinkBox>
        </Link>
      </PinkBoxesContainer> */}
      <br />
      <br />
      <br />

      <JoinOurTeamCornerBtn />
      {/* <h1>Some of Our Partners</h1>
      <br />
      <br />
      <br />
      <h1>Nice Quote</h1>
      <p>
        "They are not only razor sharp developers, they are excellent humans as
        well." - person
    </p>
      <br />
      <br />
      <br />
      <br /> */}
      {/* 
      <h1>Our Team</h1> */}
      {/* Jim Lynch Cofounder & Principal Engineer */}
      {/* <Link to="/page-p/"><- Back to </Link>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">home</Link>
    <br /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  </Global>
);

// Evaluates2 is a dedicated team of experienced web and mobile engineers with a focus on developing software solutions using Agile methodology, flexibility, and an open, transparent process. They are committed to hyperlocal development, supporting projects like High Line public park, NYC's Campaign Finance Board, the Museum of Modern Art, born-and-bred NYC like startups ArtsPool and PreeLine.

// Utilizing a talented team of both local and offshore engineers, Evaluates2 is dedicated to keeping projects simple and efficient. Their engineers take the time to get to know the people involved in every step of the application development process and build strong lasting development partnerships with their customers.

export default OurWorkPage;

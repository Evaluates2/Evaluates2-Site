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

const OurWorkHero = styled.div`
  h1 {
    color: #000032;
    font-size: 120px;
    font-family: 'e2-Raleway-Extra-Bold';
    text-align: center;
    margin-top: 150px;
  }
  p {
    color: #000011;
    font-size: 38px;
    font-family: 'e2-Raleway';
    text-align: center;
    margin: 10px 40px 150px;
    opacity: 0.8;

    .ourWork-blurb {
      margin-top: 50px;
      margin-bottom: 50px;
      font-size: 30px;
      line-height: 60px;
      max-width: 800px;
      line-height: 3.5vw;
      text-align: justify;
    }
  }

  div {
    text-align: center !important ;
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
  padding: 0 100px;
  min-height: 500px;

  h1 {
    font-size: 80px;
    line-height: 100px;
    font-family: 'e2-Raleway-Extra-Bold';
    color: #000032;
  }

  p {
    font-size: 30px;
    line-height: 45px;
  }
`;

const NiceQuoteSection = styled.div`
  padding: 0 100px;

  h1 {
    margin-bottom: 0;
    font-size: 34px;
    line-height: 60px;
    font-family: 'e2-Raleway-Semi-Bold-Italic';
  }

  p {
    font-size: 22px;
    line-height: 32px;
    font-weight: 500;
    font-family: 'e2-Raleway-Semi-Bold';
  }

  min-height: 300px;
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

  h1 {
    font-family: 'e2-Raleway-Extra-Bold';
    font-size: 80px;
    line-height: 100px;
    font-weight: 800;
  }

  p {
    opacity: 0.8;
    font-size: 30px;
    line-height: 40px;
    font-family: 'e2-Raleway';

    padding: 20px 0;
  }
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
      <br />
      <br />
      <br />

      <OurWorkHero>
        <h1>Our&nbsp;Work</h1>
        <p>
          We don't just say we've built awesome things- we've been doing it for
          a while...
        </p>
      </OurWorkHero>

      <BigSectionTitle>
        <h1>Success Stories</h1>
        <p>
          A few of the previous projecs we've succesfully helped clients launch.
        </p>
      </BigSectionTitle>

      {/* <StackableColumnsContainer> */}
      <OurWorkPieceOfWork
        title="Kate From HR"
        header1="www.katefromhr.com"
        header1link="https://www.katefromhr.com"
        paragraph1="Kate from HR is a tool for making teams better. A fun and easy-to-use Slack-integrated chatbot collected anonymous feedback that can be public or private (specified by the user). This is then aggregated and visualized in a web dashboard."
        header2=""
        paragraph2=""
        imgName="KATE_FROM_HR"
        imgOnLeft={true}
        buttonText="Learn More"
        buttonLinkTo="https://www.katefromhr.com/why-kate"
      >
        <ul>
          <li>Monthly Pricing Based on Company Size.</li>
          <li>Live & In Production Since Sept. 2019!</li>
          <li>Built with Node.js, Angular 7, AWS Lambda, MongoDB...</li>
        </ul>
      </OurWorkPieceOfWork>

      <br />

      <OurWorkPieceOfWork
        title="Social Engagement Serverless Functions"
        header1="www.twitter.com/WebWhizJim"
        header1link="https://www.twitter.com/WebWhizJim"
        paragraph1="Kate from HR is a tool for making teams better. A fun and easy-to-use Slack-integrated chatbot collected anonymous feedback that can be public or private (specified by the user). This is then aggregated and visualized in a web dashboard."
        header2=""
        paragraph2=""
        imgName="JIM_TWITTER"
        imgOnLeft={false}
        buttonText="Tweet Jim!"
        buttonLinkTo="https://www.twitter.com/WebWhizJim"
      >
        <ul>
          <li>Extremely Cheap & Quick to Run & Maintain.</li>
          <li>Aquired Thousands of Total Likes & Followers for @WebWhizJim and other private client accounts.</li>
          <li>Written for AWS Lambda Twice Using Both Es6 JavaScript and ClojureScript.</li>
        </ul>
      </OurWorkPieceOfWork>

      <OurWorkPieceOfWork
        title="WoJ Blog"
        header1="www.wisdomofjim.com"
        header1link="https://www.wisdomofjim.com"
        paragraph1="Kate from HR is a tool for making teams better. A fun and easy-to-use Slack-integrated chatbot collected anonymous feedback that can be public or private (specified by the user). This is then aggregated and visualized in a web dashboard."
        header2=""
        paragraph2=""
        imgName="JIM_TWITTER"
        imgOnLeft={false}
        buttonText="Tweet Jim!"
        buttonLinkTo="https://www.wisdomofjim.com"
      >
        <ul>
          <li>Extremely Cheap & Quick to Run & Maintain.</li>
          <li>Aquired Thousands of Total Likes & Followers for @WebWhizJim and other private client accounts.</li>
          <li>Written for AWS Lambda Twice Using Both Es6 JavaScript and ClojureScript.</li>
        </ul>
      </OurWorkPieceOfWork>
      {/* </StackableColumnsContainer> */}

      <BigSectionTitle>
        <h1>Open Source</h1>
        <p>
          Evaluates2 engineers are not only great contractors; we are also
          contributors back to the open source community!
        </p>
      </BigSectionTitle>

      <OurWorkPieceOfWork
        title="Titanium Lambda"
        header1="www.wisdomofjim.com"
        header1link="https://www.wisdomofjim.com"
        paragraph1="Kate from HR is a tool for making teams better. A fun and easy-to-use Slack-integrated chatbot collected anonymous feedback that can be public or private (specified by the user). This is then aggregated and visualized in a web dashboard."
        header2=""
        paragraph2=""
        imgName="JIM_TWITTER"
        imgOnLeft={false}
        buttonText="Tweet Jim!"
        buttonLinkTo="https://www.wisdomofjim.com"
      >
        <ul>
          <li>Extremely Cheap & Quick to Run & Maintain.</li>
          <li>Aquired Thousands of Total Likes & Followers for @WebWhizJim and other private client accounts.</li>
          <li>Written for AWS Lambda Twice Using Both Es6 JavaScript and ClojureScript.</li>
        </ul>
      </OurWorkPieceOfWork>

      <OurWorkPieceOfWork
        title="Sample Projects & Workshops"
        header1="www.wisdomofjim.com"
        header1link="https://www.wisdomofjim.com"
        paragraph1="Kate from HR is a tool for making teams better. A fun and easy-to-use Slack-integrated chatbot collected anonymous feedback that can be public or private (specified by the user). This is then aggregated and visualized in a web dashboard."
        header2=""
        paragraph2=""
        imgName="JIM_TWITTER"
        imgOnLeft={false}
        buttonText="Tweet Jim!"
        buttonLinkTo="https://www.wisdomofjim.com"
      >
        <ul>
          <li>Extremely Cheap & Quick to Run & Maintain.</li>
          <li>Aquired Thousands of Total Likes & Followers for @WebWhizJim and other private client accounts.</li>
          <li>Written for AWS Lambda Twice Using Both Es6 JavaScript and ClojureScript.</li>
        </ul>
      </OurWorkPieceOfWork>

      {/* <CenteredVideo>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2AslJmdhSro"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </CenteredVideo> */}

      {/* <OurWorkBlurb>
        <p>
          "At Evaluates2 we believe in the integrity of our code and are
          passionate ourWork always learning. We work tirelessly to help our
          clients build the best products possible and to contribute back to the
          software development community; because it's not just our job, it's
          our passion."
        </p>
      </OurWorkBlurb> */}

<br/>
<br/>
<br/>
<br/>
      <NiceQuoteSection>
        <h1>
          "Although we've <span className="empashized">accomplished</span> a lot, I still wake up every day <span className="empashized">hungry</span> and ready to take on new and <span className="empashized">exciting</span> software development <span className="empashized">challenges</span>."
        </h1>
        <p>- Founder & Principal Engineer Jim Lynch</p>
      </NiceQuoteSection>

      <ChangeGearsBlock headerText='Find out more about how we work...' linkText='Product Management' linkTo='/product-management'></ChangeGearsBlock>

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
      <br />

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
      {/* Jim Lynch Founder & Principal Engineer */}
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

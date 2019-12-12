import React from 'react';
import Global from '../components/Global';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import JoinOurTeamCornerBtn from './../components/generic-reusable-components/join-our-team-corner-btn';
import JimLynchHeadshotImage from './../components/img-components/headshots/jim-lynch-headshot.img';
import NinaXuHeadshotImage from '../components/img-components/headshots/nina-xu-headshot.img';
import LeeDanielHeadshotImage from '../components/img-components/headshots/lee-daniel-headshot.img';
import Link from 'gatsby-link';
import TeamMemberBlock from './../components/generic-reusable-components/team-member-block';
import KateFromHrLogoImage from '../components/img-components/partner-logos/kate-from-hr-logo.img';
import LumigoLogoImage from '../components/img-components/partner-logos/lumigo-logo.img';

const AboutHero = styled.div`
  h1#hero-h-about-us {
    color: #000032;
    font-family: 'e2-Raleway-Extra-Bold';
    text-align: center;
    margin-top: calc(160px + 10vw);
    letter-spacing: 0.5vw;
    line-height: calc(21px + 9vw);
    font-size: calc(21px + 9vw);
  }
  p#hero-p-about-us {
    color: #000032;
    font-family: 'e2-Raleway';
    text-align: center;
    padding: calc(15px + 2vw) calc(10px + 1vw);
    opacity: 0.8;
    font-size: calc(7px + 3vw);
    line-height: calc(15px + 6vw);
    margin: calc(7px + 10vw) calc(7px + 2vw) calc(20px + 6vw);
  }

  .about-blurb {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 30px;
    line-height: 15vw;
    max-width: 800px;
    text-align: justify;
  }

  div {
    text-align: center !important ;
  }

  .about-us-video {
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

const PartnersSection = styled.div`
  h1 {
    font-size: calc(30px + 5vw);
    line-height: calc(60px + 5vw);
    font-family: 'e2-Raleway-Extra-Bold';
    padding: 0 calc(30px + 6vw);
    margin-bottom: 40px;
  }

  div.partner-row {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    min-height: 220px;
    position: relative;
    padding: 30px 0;

    @media only screen and (max-width: 990px) {
      flex-direction: column;
    }

    img {
      object-fit: scale-down !important;
      width: 350px;
    }
  }

  .gatsby-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    /* display: inline; */
    position: relative;
    flex-direction: column;
    width: calc(400px + 20vw);

    @media only screen and (max-width: 990px) {
      width: 100%;
    }
  }

  min-height: 500px;
`;

const NiceQuoteSection = styled.div`
  padding: 0 calc(20px + 2vw);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 0;
    font-size: calc(11px + 2vw);
    line-height: calc(35px + 4vw);
    font-family: 'e2-Raleway-Bold';
  }

  p {
    font-size: 22px;
    line-height: 32px;
    font-weight: 500;
    font-family: 'e2-Raleway-Semi-Bold';
  }
`;

const AboutBlurb = styled.div`
  p {
    /* margin-top: 50px 40px; */
    font-size: calc(13px + 2vw);
    line-height: calc(19px + 4vw);
    padding: 5vw 10vw;

    /* margin: 0 10vw;  */
    color: #333333;
    text-align: justify;
  }
`;

const OurTeamSection = styled.div`
  padding: 20px;

  h1 {
    font-family: 'e2-Raleway-Extra-Bold';
    font-size: calc(50px + 4vw);
    line-height: calc(60px + 4vw);
    margin: calc(30px + 5vw);
    margin-right: 2vw;
    padding: 0 calc(0px + 2vw);
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
  }
`;

const MidPageAnchor = styled.div`
  min-height: 100px;
  padding: 10px + 2vw;
  margin-bottom: (20px + 7vw);
`;

const WhatWeveBuiltSection = styled.div`
  padding: 0 calc(20px + 2vw);

  h1 {
    font-family: 'e2-Raleway-Extra-Bold';
    font-size: 80px;
    line-height: 100px;
    font-weight: 800;
  }

  p {
    opacity: 0.8;
    font-size: calc(14px + 1.5vw);
    line-height: calc(34px + 1.5vw);
    font-family: 'e2-Raleway';

    /* padding: 2vw 3vw; */
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
  min-width: 300px;
  min-height: 300px;
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
    min-height: 85px;

    @media only screen and (max-width: 990px) {
      font-size: 30px;
      min-height: 65px;
    }

    @media only screen and (max-width: 660px) {
      min-height: 55px;
      font-size: 25px;
    }
  }

  p {
    font-size: 24px;
    @media only screen and (max-width: 990px) {
      font-size: 22px;
    }

    @media only screen and (max-width: 660px) {
      font-size: 20px;
    }
  }
`;

const AboutPage = () => (
  <Global pageTitle={'About'} path={'about'} description={'about'}>
    <Layout>
      <AboutHero>
        <h1 id="hero-h-about-us">About Us</h1>
        <p id="hero-p-about-us">
          When it comes to software, we're full of solutions.
        </p>
      </AboutHero>

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

      <AboutBlurb>
        {/* <p>
          "At Evaluates2 we believe in the integrity of our code and are
          passionate about always learning. We work tirelessly to help our
          clients build the best products possible and to contribute back to the
          software development community; because it's not just our job, it's
          our passion."
        </p> */}
        <p>
          Evaluates2 is SO MUCH MORE than just another New York City software
          consulting agency.
          <br />
          <br />
          At Evaluates2, we look at things differently.
          <br />
          <br />
          We are architecting and building the systems of tomorrow.
          <br />
          <br />
          We write the code that is not only ABLE to be maintained and
          understood by other engineers but that is actually EASY to be changed
          and deployed with confidence.
          <br />
          <br />
          We approach troubleshooting the scariest of issues with reason and
          curiosity.
          <br />
          <br />
          We code in pairs, lean heavily on automated testing, and quickly build
          stuff that works.
          <br />
          <br />
          We have spent our lives sharpening these legendary coding skills, and
          despite this we try to stay humble, respectful, open-minded, and eager
          to show others how fun and awesome software development can be when
          it's well done.
          <br />
          <br />
          At Evaluates2 we are not just engineers, product managers, and data
          scientists… we are the agents of change that can transform and
          enlighten ANY company's tech department.
          <br />
          <br />
          So let us help you, and together… we will build great things.
          <br />
          <br />
          <br />
        </p>
      </AboutBlurb>

      <MidPageAnchor>
        <a id="our-partners" />
      </MidPageAnchor>

      <PartnersSection>
        <h1>A Few of Our Partners:</h1>
        {/* <div className="partner-row">
          <AwsLogoImage />
          <GoogleTransparentImage />
          <AppleLogoImage />
        </div>
        <div className="partner-row">
          <MicrosoftLogoImage />
          <ServerlessLogoImage />
          <GithubLogoImage />
        </div> */}
        <a>
          <div></div>
        </a>
        <div className="partner-row">
          {/* <MongoAtlasImage />
          <MozillaLogoImage /> */}
          <a href="https://www.katefromhr.com">
            <KateFromHrLogoImage />
          </a>

          <a href="https://lumigo.io">
            <LumigoLogoImage />
          </a>

          <a>
            <div></div>
          </a>
        </div>
      </PartnersSection>

      <NiceQuoteSection>
        <h1>
          {/* "They are not only razor sharp developers, they are excellent people
          as well." */}
          Evaluates2 engineers are not only razor sharp developers...
          <br />
          they are compassionate and honest people as well.
        </h1>
        {/* <p></p> */}
      </NiceQuoteSection>

      <MidPageAnchor>
        <a id="our-team" />
      </MidPageAnchor>

      <OurTeamSection>
        <h1>Our Team</h1>
        <div className="our-team-grid">
          <TeamMemberBlock
            name="Jim Lynch"
            linkTo="/team/jim-lynch"
            role="CEO / Principal Engineer"
            // img={<AnonymousSilhouetteImage />}
            img={<JimLynchHeadshotImage />}
          ></TeamMemberBlock>
          <TeamMemberBlock
            name="Nina Xu"
            linkTo="/team/nina-xu"
            role="Sales & Business Development Associate"
            // img={<AnonymousSilhouetteImage />}
            img={<NinaXuHeadshotImage />}
          ></TeamMemberBlock>
          <TeamMemberBlock
            name="Lee Daniel"
            linkTo="/team/lee-daniel"
            role="Sr. Software Engineer"
            // img={<AnonymousSilhouetteImage />}
            img={<LeeDanielHeadshotImage />}
          ></TeamMemberBlock>
        </div>
      </OurTeamSection>

      <WhatWeveBuiltSection>
        <h1>What We've Built</h1>
        <p>
          You don't have to take our word for it that we can build great
          software- just take a look at some the awesome project we've made!
        </p>
      </WhatWeveBuiltSection>

      <br />
      <br />
      <br />
      <br />

      <PinkBoxesContainer>
        <Link to="/our-work">
          <PinkBox>
            <h1>Previous Success Stories</h1>
            <p>Real case stories of businesses we've helped.</p>
          </PinkBox>
        </Link>

        <Link to="/our-work#OPEN_SOURCE">
          <PinkBox>
            <h1>Open Source</h1>
            <p>See how we contribute back to the software comunity.</p>
          </PinkBox>
        </Link>
      </PinkBoxesContainer>
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

export default AboutPage;

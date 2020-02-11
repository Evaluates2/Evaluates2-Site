import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Global from '../components/Global';
import PersonImage from '../components/img-components/person-img.img';
import JoinOurTeamCornerBtn from './../components/generic-reusable-components/join-our-team-corner-btn';
import JimLynchHeadshotImage from '../components/img-components/headshots/jim-lynch-headshot.img';
import LeeDanielHeadshotImage from '../components/img-components/headshots/lee-daniel-headshot.img';
import NinaXuHeadshotImage from '../components/img-components/headshots/nina-xu-headshot.img';

const personMap = {
  'jim-lynch': {
    firstName: 'Jim',
    lastName: 'Lynch',
    role: 'Cofounder & Principal Engineer',
    hometown: 'Egg Harbor Township, New Jersey',
    currentLocation: 'Manhattan, New York',
    education:
      'Rutgers University - BA in Mathematics, minor in Economics, NYC Code & Design Academy, Free Code Camp',
    githubProfile: 'https://github.com/jimlynchcodes',
    linkedInProfile: 'https://linkedin.com/in/jimlynchcodes',
    twitterProfile: 'https://twitter.com/jimlynchcodes',
    personImg: <JimLynchHeadshotImage />,
    moreStuff: (
      <>
        <br />
        <p>
          Jim brings his mix of engineering muscle, business acumen, enthusiasm
          for challenges, and technical leadership to the helm of Evaluates2.
          Before founding e2, Jim spent over a decade as a developer delivering
          high-quality software solutions spanning banking, entertainment,
          gaming and e-commerce.
        </p>

        <br />
        <p>
          As the Cofounder and Principal Engineer of Evaluates2 he emulates the brand values of
          transparency in business operations, trust among the team and
          partners, and excellence in code. Jim currently acts as the Principal
          Engineer, signing off on ADRs (architectural decision records), and
          being hands-on in the architural decisions throughout the development
          of the project.
        </p>

        <br />
        <p>
          Jim coined the Term "Titanium Lambda" and created the{' '}
          <a href="https://github.com/JimLynchCodes/Titanium-Lambda">
            corresponding github repo
          </a>{' '}
          in early 2018.
        </p>

        <br />
        <p>
          He blogs about software and life at{' '}
          <a href="http://www.jimlynchcodes.com">www.jimlynchcodes.com</a>.
        </p>

        <br />
        <p>
          When he's not busy thinking about software devlopment in some way, Jim
          enjoy playing sports (such as golf, tennis, and snowboarding),
          socializing with friends and colleagues, and spending time with his
          family.
        </p>
      </>
    ),
  },
  'nina-xu': {
    firstName: 'Nina',
    lastName: 'Xu',
    role: 'Sales & Business Development Associate',
    hometown: 'Fort Lee, New Jersey',
    currentLocation: 'Manhattan, New York',
    education: 'BS, Accounting - New York University',
    githubProfile: '',
    linkedInProfile: '',
    twitterProfile: '',
    personImg: <NinaXuHeadshotImage />,
    moreStuff: (
      <>
        <br />
        <p>
          Nina brings a charisma and charm that allows her to connect with anyone. With years of work in tech retail and sales, Nina can
          understand and explain concepts in both the raw technical form and the
          high-level, layman's terms.
        </p>

        <br />
        <p>
          As Evalutes2's primary business development manager, Nina is
          spearheading the efforts to increase our partners and client
          engagements by signing on many awesome new projects in 2020 and
          beyond!
        </p>

        <br />
        <p>
          In her spare time Nina enjoys listening to relaxing music, playing
          tennis, and feeding fish to her pet penguins.
        </p>
      </>
    ),
  },
  'lee-daniel': {
    firstName: 'Lee',
    lastName: 'Daniel',
    role: 'Sr. Software Engineer',
    hometown: 'Beijing, China',
    currentLocation: 'Beijing, China',
    education: 'BS, Engineering - Zhejiang University',
    githubProfile: 'https://github.com/BestWayDevelopment',
    linkedInProfile: 'https://www.linkedin.com/in/lee-daniel-94b03b147/',
    twitterProfile: '',
    personImg: <LeeDanielHeadshotImage />,
    moreStuff: (
      <>
        <br />
        <p>
          Lee is a passionate software engineer with over a decade of experience
          working on browser, destop, and mobile applications. He also has an
          interest in cryptocurrency and experience with smart contract
          development.
        </p>

        <br />
        <p>
          Lee is a great developer and can be an asset to any team in need of
          JavaScript expertise. He has aided in development of this website and
          has been very much enjoying his recently developments with React,
          React Native, and Nodejs.
        </p>

        <br />
        <p>
          Based in Beijing, China, Lee can provide remote programming expertise,
          joining on calls, submitting pull requests, and participating in
          remote pair proramming.
        </p>
      </>
    ),
  },
};

const StyledTeamPage = styled.div`
  display: flex;
  flex: 1;
  margin: 60px;
  font-family: 'e2-Raleway-Black';
  background-color: white;
  color: #000011;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h1 {
    font-family: 'e2-Raleway-Black';
    font-size: 44px;
    max-width: 95vw;
    line-height: 140px;
    text-align: center;
    letter-spacing: 2px;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.5px;
    font-family: 'e2-Raleway-Semi-Bold';
    color: #333333;
  }
`;

const TeamMemberProfileContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  min-height: 500px;
  margin-top: 50px;

  .img {
    flex: 1;
  }

  .text-container {
    flex: 1;
    padding: 15px 15px 15px 30px;

    h1 {
      font-family: 'e2-Raleway-Extra-Bold';
      text-align: left;
      line-height: 60px;
    }

    p {
      margin-bottom: 6px;
    }
    .roleP {
      font-family: 'e2-Raleway-Semi-Bold';
      padding: 0 0 15px 15px;
    }

    .boldP {
      font-family: 'e2-Raleway-Bold';
    }

    a {
      font-family: 'e2-Raleway-Bold';
      color: #ee2cee;
    }
  }
`;

const BackButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const TeamMemberBackButton = styled.button`
  background-image: linear-gradient(90deg, #ff7d00, #e0d950);
  transition: opacity 0.2s ease;
  color: #fff;
  font-size: 15px;
  line-height: 24px;
  font-family: 'e2-Raleway-Semi-Bold';
  padding: 10px 26px;
  border-radius: 4px;
  border: none;
  outline: 0;
  max-width: 200px;
  cursor: pointer;
  transition-property: opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
`;

const TeamPage = (location = { location: '/jim' }) => {
  let person;
  if (personMap[location.location.pathname.slice(location.path.length - 1)]) {
    person =
      personMap[location.location.pathname.slice(location.path.length - 1)];
  } else {
    person = personMap['jim-lynch'];
  }

  return (
    <Global pageTitle={'Terms'} path={'terms'} description={'terms'}>
      <Layout>
        <StyledTeamPage>
          <br />
          <br />
          <br />
          <br />

          <BackButtonContainer>
            <Link to="/about#our-team">
              <TeamMemberBackButton>Back</TeamMemberBackButton>
            </Link>
          </BackButtonContainer>
          <TeamMemberProfileContainer>
            <div className="img">{person.personImg}</div>

            <div className="text-container">
              <h1>{`${person.firstName} ${person.lastName}`}</h1>
              <p className="roleP">{person.role}</p>
              <p>
                <span className="boldP">Hometown:</span>&nbsp;{person.hometown}
              </p>
              <p>
                <span className="boldP">Current Location:</span>&nbsp;
                {person.currentLocation}
              </p>
              <p>
                <span className="boldP">Education:</span>&nbsp;
                {person.education}
              </p>

              <br />

              {person.githubProfile !== '' && (
                <p>
                  <a href={person.githubProfile}>Github Profile</a>
                </p>
              )}
              {person.linkedInProfile !== '' && (
                <p>
                  <a href={person.linkedInProfile}>LinkedIn Profile</a>
                </p>
              )}
              {person.twitterProfile !== '' && (
                <p>
                  <a href={person.twitterProfile}>Twitter Profile</a>
                </p>
              )}

              {person.moreStuff}
            </div>
          </TeamMemberProfileContainer>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <JoinOurTeamCornerBtn />
        </StyledTeamPage>
      </Layout>
    </Global>
  );
};

TeamPage.defaultProps = {
  counter: 0,
};

export default TeamPage;

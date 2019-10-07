import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Global from '../components/Global';
import PersonImage from '../components/img-components/person-img.img';
import JoinOurTeamCornerBtn from './../components/generic-reusable-components/join-our-team-corner-btn';
import JimLynchHeadshotImage from '../components/img-components/headshots/jim-lynch-headshot.img';
import LeeNguyenHeadshotImage from '../components/img-components/headshots/lee-nguyen-headshot.img';
import NinaYangHeadshotImage from '../components/img-components/headshots/nina-yang-headshot.img';

const personMap = {
    'jim-lynch': {
    firstName: 'Jim',
    lastName: 'Lynch',
    role: 'CEO, Principal Engineer',
    hometown: 'Egg Harbor Township, New Jersey',
    currentLocation: 'Manhattan, New York',
    education: 'Rutgers University - BA in Mathematics, minor in Economics.',
    githubProfile: 'https://github.com/jleo3',
    linkedInProfile: 'https://linkedin.com/jimtheman',
    twitterProfile: 'https://twitter.com/webWhizJim',
    personImg: <JimLynchHeadshotImage />,
    moreStuff: (
      <>
        <p>
          Joe brings his mix of engineering muscle, business acumen, enthusiasm
          for challenges, and technical leadership to the helm of Def Method.
          Before founding DM, Joe spent over a decade as a developer delivering
          high-quality software solutions spanning government, education,
          finance and e-commerce.
        </p>

        <p>
          As the CEO and Founder of Def Method he emulates the brand values of
          transparency in business operations, trust among the team and
          partners, and excellence in code.
        </p>

        <p>
          Joe is co-author of{' '}
          <a href="https://butkiss.com">
            The Well-Grounded Rubyist, Third Edition
          </a>
          . Outside of the office, he has helped to build the NYC developer
        </p>
      </>
    ),
  },
  'nina-yang': {
    firstName: 'Nina',
    lastName: 'Yang',
    role: 'CEO, Founder',
    hometown: 'New York',
    currentLocation: 'New York',
    education: 'BS, Engineering',
    githubProfile: 'https://github.com/jleo3',
    linkedInProfile: 'https://linkedin.com/jimtheman',
    twitterProfile: 'https://twitter.com/webWhizJim',
    personImg: <NinaYangHeadshotImage/>,
    moreStuff: (
      <>
        <p>
          Joe brings his mix of engineering muscle, business acumen, enthusiasm
          for challenges, and technical leadership to the helm of Def Method.
          Before founding DM, Joe spent over a decade as a developer delivering
          high-quality software solutions spanning government, education,
          finance and e-commerce.
        </p>

        <p>
          As the CEO and Founder of Def Method he emulates the brand values of
          transparency in business operations, trust among the team and
          partners, and excellence in code.
        </p>

        <p>
          Joe is co-author of{' '}
          <a href="https://butkiss.com">
            The Well-Grounded Rubyist, Third Edition
          </a>
          . Outside of the office, he has helped to build the NYC developer
        </p>
      </>
    ),
  },
  'lee-nguyen': {
    firstName: 'Lee',
    lastName: 'Nguyen',
    role: 'Sr. Software Engineer',
    hometown: 'Beijing, China',
    currentLocation: 'Beijing, China',
    education: 'BS, Engineering',
    githubProfile: 'https://github.com/jleo3',
    linkedInProfile: 'https://linkedin.com/jimtheman',
    twitterProfile: 'https://twitter.com/webWhizJim',
    personImg: <LeeNguyenHeadshotImage />,
    moreStuff: (
      <>
        <p>
          Joe brings his mix of engineering muscle, business acumen, enthusiasm
          for challenges, and technical leadership to the helm of Def Method.
          Before founding DM, Joe spent over a decade as a developer delivering
          high-quality software solutions spanning government, education,
          finance and e-commerce.
        </p>

        <p>
          As the CEO and Founder of Def Method he emulates the brand values of
          transparency in business operations, trust among the team and
          partners, and excellence in code.
        </p>

        <p>
          Joe is co-author of{' '}
          <a href="https://butkiss.com">
            The Well-Grounded Rubyist, Third Edition
          </a>
          . Outside of the office, he has helped to build the NYC developer
        </p>
      </>
    ),
  }
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

// const SectionHero = styled.div`
//   height: 800px;
//   min-height: 400px;
//   line-height: 85px;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-top: 60px;
//   h1 {
//   font-size: 100px;

//     @media only screen and (max-width: 990px) {
//       font-size: 80px;
//     }

//     @media only screen and (max-width: 660px) {
//       font-size: 60px;
//     }

//   }
//   p {
//     font-size: 38px;
//     opacity: 0.7;
//     margin: 7px;
//       opacity: 0.7;
//       width: 80vw;
//     min-width: 90%;
//     text-align: center;
//     line-height: 60px;

//     @media only screen and (max-width: 990px) {
//       font-size: 30px;
//     }

//     @media only screen and (max-width: 660px) {
//       font-size: 24px;
//     }

//   }
// `;

// const TermsTextSection = styled.div`
//   background-color: #000032;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 400px;
//   padding: 400px 100px 250px;

//   h1 {
//     line-height: 60px;
//     font-size: 50px;
//     text-align: left;
//     padding-bottom: 40px;
//   }
//   p {
//     color: #c3c3c3;
//     font-size: 20px;
//     line-height: 40px;
//     /* margin: 10px 50px; */
//     text-align: left;
//     width: 100%;
//   }
// `;

const TeamPage = location => {
  const person =
    personMap[location.location.pathname.slice(location.path.length - 1)];

  return (
    <Global pageTitle={'Terms'} path={'terms'} description={'terms'}>
      <Layout>
        <StyledTeamPage>
          <br />
          <br />
          <br />
          <br />

          <BackButtonContainer>
            <Link to="/about#OUR_TEAM">
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

export default TeamPage;

import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Global from "../components/Global";
import PersonImage from '../components/img-components/person-img.img';


const personMap = {
  'joe': {
    firstName: 'Joe',
    lastName: 'Leo',
    role: 'CEO, Founder',
    hometown: 'New York',
    currentLocation: 'New York',
    education: 'BS, Engineering',
    githubProfile: 'https://github.com/jleo3',
    linkedInProfile: 'https://linkedin.com/jimtheman',
    twitterProfile: 'https://twitter.com/webWhizJim',
    personImg: <PersonImage />,
    moreStuff: <>

      <p>
        Joe brings his mix of engineering muscle, business acumen, enthusiasm for challenges, and technical leadership to the helm of Def Method. Before founding DM, Joe spent over a decade as a developer delivering high-quality software solutions spanning government, education, finance and e-commerce.
      </p>

      <p>
        As the CEO and Founder of Def Method he emulates the brand values of transparency in business operations, trust among the team and partners, and excellence in code.
      </p>

      <p>
        Joe is co-author of <a href="https://butkiss.com">The Well-Grounded Rubyist, Third Edition</a>. Outside of the office, he has helped to build the NYC developer
      </p>

    </>
  }
}

const TeamMemberProfileContainer = styled.div`

  display: flex;
  flex: 1;
  /* width: 100%; */
  /* width: auto; */
  /* margin: 30px; */

  flex-direction: row;
  min-height: 500px;
  /* background-color: lightgrey; */
  margin-top: 90px;

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
      margin-bottom : 6px;

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

const StyledTeamPage = styled.div`

display: flex;
  flex: 1;
  /* width: 100%; */

  margin: 60px;


font-family: 'e2-Raleway-Black';
  background-color: white;
  color: #000011;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h1 {
    font-family: 'e2-Raleway-Black';
    font-size: 44px;
    max-width: 95vw;
    line-height: 140px;
    text-align: center;
    letter-spacing:2px;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.5px;
    font-family: 'e2-Raleway-Semi-Bold';
    color: #333333;
  }
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

const TeamPage = (location) => {

  const person = personMap[location.location.pathname.slice(location.path.length - 1)]

  return (
    <Global pageTitle={'Terms'} path={'terms'} description={'terms'}>
      <Layout>
        <StyledTeamPage>

          <TeamMemberProfileContainer>

            <div className="img">
              {person.personImg}
            </div>

            <div className="text-container">
              <h1>{`${person.firstName} ${person.lastName}`}</h1>
              <p className="roleP">{person.role}</p>
              <p>
                <span className="boldP">Hometown:</span>&nbsp;{person.hometown}
              </p>
              <p>
                <span className="boldP">Current Location:</span>&nbsp;{person.currentLocation}
              </p>
              <p>
                <span className="boldP">Education:</span>&nbsp;{person.education}
              </p>

              <br />

              {person.githubProfile !== '' &&
                <p>
                  <a href={person.githubProfile}>
                    Github Profile
                  </a>
                </p>
              }
              {person.linkedInProfile !== '' &&
                <p>
                  <a href={person.linkedInProfile}>
                    LinkedIn Profile
                  </a>
                </p>
              }
              {person.twitterProfile !== '' &&
                <p>
                  <a href={person.twitterProfile}>
                    Twitter Profile
                  </a>
                </p>
              }

              {person.moreStuff}
            </div>

          </TeamMemberProfileContainer>

          <br />
          <br />
          <br />
          {/* {JSON.stringify(location.path)}
          <br />
          {JSON.stringify(location.pageResources)}
          <br />
          <br />
          {JSON.stringify(location.location.pathname)}

          {`${person.firstName} ${person.lastName}`}
          <br />
          <br />



          <br />
          <br />
          <br />
          {JSON.stringify(location.pageResources['*'])} */}


          {/* <SectionHero>
          <h1>{location.location.pathname.slice(location.path.length - 1)}</h1>
          <p>transparent and straightforward.</p>
        </SectionHero> */}
          {/* <TermsTextSection>
          <h1>Evaluates2 Terms of Service</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </TermsTextSection> */}

        </StyledTeamPage>

      </Layout>
    </Global>
  )
};

export default TeamPage;
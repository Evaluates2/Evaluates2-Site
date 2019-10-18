import React from 'react';
import styled from '@emotion/styled';
import mediaQuery from '../../utils/mediaQuery';
import HomeEngineeringImage from '../img-components/rf/home-engineering-royalty-free.img';
import ProgressTrackingImage from '../img-components/progress-tracking.img';
import StaffAugmentationImage from '../img-components/staff-augmentation.img';
import ProjectKickoffImage from '../img-components/project-kickoff.img';
import TopEngineeringTalentImage from '../img-components/top-engineering-talent.img';
import TechnicalAuditsImage from '../img-components/technical-audits.img';
import ProductHomeImage from '../img-components/product_home.img';
import HomeProductManagementImage from '../img-components/rf/home-product-management.img';
import ResourceEfficiencyImage from '../img-components/resource-efficiency.img';
import ProgressImprovementImage from '../img-components/progress_improvement.img';
import ProjectManagementImage from '../img-components/project_management.img';
import DiscoverHomeImage from '../img-components/discover_home.img';
import HomeStartupImage from '../img-components/rf/home-startup-royalty-free.img';
import DesignSprintImage from '../img-components/design_sprint.img';
import MvpBuildImage from '../img-components/mvp_build.img';
import MaintenanceImage from '../img-components/maintenance.img';

import Link from 'gatsby-link';
import HomeAnalyticsImage from '../img-components/rf/home-analytics-royalty-free.img';
import PmDailyStandupsImage from '../img-components/rf/pm-daily-standups.img';
import PmIpmsRetrosImage from '../img-components/rf/pm-ipms-retros-img';
import PmUserStoriesImage from '../img-components/rf/pm-user-stories-img';
import PmLiveDemosImage from '../img-components/rf/pm-live-demos-img';
import PmPairProgrammingImage from '../img-components/rf/pm-pair-programming.img';
import StartupFlexibleStaffAugmentationImage from '../img-components/rf/startup-flexible-staff-aug.img';
import StartupWellWorkWithYourBudgetImage from '../img-components/rf/startup-well-work-with-your-budget.img';
import StartupShortOrLongContractsImage from '../img-components/rf/startup-short-or-long-contracts.img';
import AnalyticsIntelligentlyManageDataImage from '../img-components/rf/analytics-intelligently-manage-data-royalty-free.img';

const StyledStackableImageAndTextDuo = styled.div`
  background-color: #000032;
  margin: 50px 0;
  .text {
    margin-top: 10px;
  }
  .img_container {
    margin-top: 10vh;
    margin-bottom: 5vh;
  }
  .s_img {
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
  .img_container {
    display: flex;
  }
  .text {
    color: white;
  }
  .container {
    /* margin: 0px !important; */
    flex: 1;
    flex-direction: row-reverse;
    display: flex;
    justify-content: space-evenly;
    padding: 30px 0;
    /* width: 100%; */
    
 

    .gatsby-image-wrapper {
      /* max-width: 310px; */
      /* height: 100%; */
      height: 100%;

      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: center;
    }
    /* ${mediaQuery.maxNetbook} {
      width: 95%;
      margin: 0 auto;
      flex-direction: column !important;
     
    } */

   

    @media only screen and (max-width: 660px) {
      flex-direction: column;
      }
      
      
    }
    
    .reversed {
      flex-direction: row;
      flex: 1;
      
          @media only screen and (max-width: 660px) {
            flex-direction: column;
            }
    }

  ul {
    list-style: none;
    li {
      color: white;
    }
  }

  @media only screen and (max-width: 960px) {
    align-items: center;
    font-size: 18px;
    line-height: 31px;
    flex-direction: column;
  }

  p {
    font-size: 16px;
    line-height: 29px;
    letter-spacing: .75px;
    font-family: 'e2-Raleway';
    color: #DDDDDD;
    font-weight: 300;

    @media only screen and (max-width: 900px) {
      font-size: 19px;
      line-height: 32px;
    }
  }

  div {
    /* width: 100%; */
    width: 100%;
    align-content: center;
    text-align: center;
    margin: 0px;
      
    .img {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      /* align-items: center; */
      width: 100%;
      height: auto;
      /* max-width: 350px; */
    }

    .text-container {
      text-align: left;
      margin-right: 2vw;
      margin-left: 2vw;
      ${mediaQuery.maxNetbook} {
        margin-top: 20px;
        padding-right: 0px;
        padding-left: 0px;
      }
    }

    

  }

  h1 {
    color: white !important;
    font-size: 6vw;
    line-height: 6vw;
    letter-spacing: .5px;
    font-family: 'e2-Raleway-Extra-Bold';
  }

  h2 {
    color: white !important;
    letter-spacing: .25px;
    font-size: 22px;
    line-height: 32px;
    font-weight: 500;
    font-family: 'e2-Raleway';
  }

  .one {
    background-color: lightgreen;
    flex: 1;
  }

  .two {
    flex: 1;
    background-color: lightskyblue;
  }

  

  button {
    margin-top: 50px;
    background-image: linear-gradient(90deg,#ff7d00,#e0d950);
    transition: opacity 0.2s ease;
    color: #fff;
    font-size: 15px;
    line-height: 24px;
    font-family: 'e2-Raleway-Semi-Bold';
    padding: 10px 26px;
    border-radius: 4px;
    border: none;
    max-width: 200px;
    cursor: pointer;
    transition-property: opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }
`;

class StackableImageAndTextDuo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    const title = this.props.title;
    const header1 = this.props.header1;
    const paragraph1 = this.props.paragraph1;
    const header2 = this.props.header2;
    const paragraph2 = this.props.paragraph2;
    const imgName = this.props.imgName;
    const imgOnLeft = this.props.imgOnLeft;
    const buttonText = this.props.buttonText;
    const buttonLinkTo = this.props.buttonLinkTo;
    const images = this.props.images;
    const getImage = imgName => {
      switch (imgName) {
        case 'HOME_PRODUCT':
          return <HomeProductManagementImage />;
        case 'HOME_ENG':
          return <HomeEngineeringImage />;
        case 'DAILY_STANDUPS':
          // return <ProgressTrackingImage />;
          return <PmDailyStandupsImage />;
        case 'HOME_DISCOVERY':
          return <HomeStartupImage />;
        case 'HOME_ANALYTICS':
          return <HomeAnalyticsImage />;
        case 'IPMS/RETROS':
          return <PmIpmsRetrosImage />;
        case 'USER_STORIES':
          return <PmUserStoriesImage />;
        case 'PAIR_PROGRAMMING':
          return <PmPairProgrammingImage />;
        case 'LIVE_DEMOS':
          return <PmLiveDemosImage />;
        case 'FLEXIBLE_STAFF_AUGMENTATION':
          return <StartupFlexibleStaffAugmentationImage />;
        case 'WELL_WORK_WITH_YOUR_BUDGET':
          return <StartupWellWorkWithYourBudgetImage />;
        case 'SHORT_OR_LONG_CONTRACTS':
          return <StartupShortOrLongContractsImage />;
        case 'INTELLIGENTLY_MANAGE_DATA':
          return <AnalyticsIntelligentlyManageDataImage />;
        case 'LIVE_DEMOS':
          return <PmLiveDemosImage />;
        case 'staff':
          return <StaffAugmentationImage />;
        case 'top':
          return <TopEngineeringTalentImage />;
        case 'technical':
          return <TechnicalAuditsImage />;
        case 'resource':
          return <ResourceEfficiencyImage />;
        case 'process':
          return <ProgressImprovementImage />;
        case 'project':
          return <ProjectManagementImage />;
        case 'design':
          return <DesignSprintImage />;
        case 'mvp':
          return <MvpBuildImage />;
        case 'maintenance':
          return <MaintenanceImage />;
      }
    };
    return (
      <StyledStackableImageAndTextDuo>
        <div className={`container ${imgOnLeft ? 'reversed' : ''}`}>
          <div className="img">{getImage(imgName)}</div>
          <div className="text-container">
            <h1>{title}</h1>
            {images != undefined && images.length > 0 ? (
              <div className="img_container">
                {images.map(item => {
                  return (
                    <div className="small_image">
                      <div className="s_img">{getImage(item.img)}</div>
                      <div className="text">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div></div>
            )}
            <h2>{header1}</h2>
            <p>{paragraph1}</p>
            <h2>{header2}</h2>
            <p>{paragraph2}</p>
            {this.props.children}
            <Link to={buttonLinkTo}>
              <button>{buttonText}</button>
            </Link>
          </div>
        </div>
      </StyledStackableImageAndTextDuo>
    );
  }
}

export default StackableImageAndTextDuo;

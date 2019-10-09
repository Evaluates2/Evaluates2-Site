import styled from '@emotion/styled';
import ProgressTrackingImage from './img-components/progress-tracking.img';
import StaffAugmentationImage from './img-components/staff-augmentation.img';
import ProjectKickoffImage from './img-components/project-kickoff.img';
import Link from 'gatsby-link';
import KateFromHrScreenshotImage from './img-components/kate-from-hr-screenshot.img';
import JimTwitterScreenshotImage from './img-components/jim-twitter-screenshot.img';
// import WojBlogScreenshotImage from './img-components/woj-blog-screenshot.img';
import WojScreenshot from './img-components/woj-blog-screenshot.img';
import Evaluates2ScreenshotImage from './img-components/evaluates-2-screenshot.img';
import TitaniumLambdaImage from './img-components/titanium-lambda.img';

const StyledOurWorkPieceOfWork = styled.div`
  .container {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 50px;
    flex: 1;
    width: 100%;
    height: 100%;
    flex-direction: row-reverse;

    margin: 0;

    @media only screen and (max-width: 960px) {
      align-items: center;
      font-size: 18px;
      line-height: 31px;
      flex-direction: column;
    }
  }

  p {
    font-size: 16px;
    line-height: 29px;
    letter-spacing: 0.75px;
    font-family: 'e2-Raleway';
    color: #4a4a4a;

    @media only screen and (max-width: 900px) {
      font-size: 19px;
      line-height: 32px;
    }
  }

  div {
    align-content: center;
    text-align: center;
    flex: 1;

    .img {
      flex: 1;
      margin: 35px;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    a {
      font-size: 22px;
      margin: 10px 0 10px;
      display: block;
    }
    .text-container {
      flex: 1;
      text-align: left;
    }
  }

  h1 {
    font-size: 43px;
    letter-spacing: 0.5px;
    font-family: 'e2-Raleway-Extra-Bold';
  }

  h2 {
    font-size: 24px;
    letter-spacing: 0.25px;
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

  .reversed {
    flex-direction: row;

    @media only screen and (max-width: 960px) {
      flex-direction: column;
    }
  }

  button {
    background-image: linear-gradient(90deg, #ff7d00, #e0d950);
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

const OurWorkPieceOfWork = ({
  title,
  header1,
  header1link,
  paragraph1,
  header2,
  paragraph2,
  imgName,
  imgOnLeft,
  buttonText,
  buttonLinkTo,
  children,
}) => {
  const getImage = imgName => {
    switch (imgName) {
      case 'KATE_FROM_HR':
        return (
          <a href={header1link}>
            <KateFromHrScreenshotImage />
          </a>
        );
        
        case 'JIM_TWITTER':
          return (<a href={header1link}>
             <JimTwitterScreenshotImage />
          </a>);

      case 'WOJ_BLOG':
          return (<a href={header1link}>
            <WojScreenshot/>
         </a>);
      
      case 'E2_GITHUB':
          return (<a href={header1link}>
            <E2GithubScreenshotImage/>
         </a>);
      
      case 'E2_SCREENSHOT':
          return (<a href={header1link}>
            <Evaluates2ScreenshotImage/>
         </a>);
      
      case 'TITANIUM_LAMBDA':
          return (<a href={header1link}>
            <TitaniumLambdaImage/>
         </a>);
    }
  };

  return (
    <StyledOurWorkPieceOfWork>
      <div className={`container ${imgOnLeft ? 'reversed' : ''}`}>
        <div className="img">{getImage(imgName)}</div>
        <div className="text-container">
          <h1>{title}</h1>
          <a href={header1link}>{header1}</a>
          <p>{paragraph1}</p>
          <h2>{header2}</h2>
          <p>{paragraph2}</p>
          {children}
          <a href={buttonLinkTo}>
            <button>{buttonText}</button>
          </a>
        </div>
      </div>
    </StyledOurWorkPieceOfWork>
  );
};

export default OurWorkPieceOfWork;

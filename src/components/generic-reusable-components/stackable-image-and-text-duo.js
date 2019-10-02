import styled from '@emotion/styled';
import ProgressTrackingImage from '../img-components/progress-tracking.img';
import StaffAugmentationImage from '../img-components/staff-augmentation.img';
import ProjectKickoffImage from '../img-components/project-kickoff.img';
import Link from 'gatsby-link';

const StyledStackableImageAndTextDuo = styled.div`
  .container {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    padding: 30px 0;
    flex: 1;
    width: 90%;
    height: 100%;
    flex-direction: row-reverse;
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

    @media only screen and (max-width: 900px) {
      font-size: 19px;
      line-height: 32px;
    }
  }

  div {
    /* width: 100%; */
    padding: 30px;
    width: 80%;
    align-content: center;
    text-align: center;
    margin: 15px;
    .img {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: flex-start;
      /* align-items: center; */
    }

    .text-container {
      text-align: left;
    }

  }

  h1 {
    font-size: 43px;
    letter-spacing: .5px;
    font-family: 'e2-Raleway-Extra-Bold';
  }

  h2 {
    font-size: 24px;
    letter-spacing: .25px;
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
  }

  button {
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

const StackableImageAndTextDuo = ({
  title,
  header1,
  paragraph1,
  header2,
  paragraph2,
  imgName,
  imgOnLeft,
  buttonText,
  buttonLinkTo,
  children
}) => {
  const getImage = imgName => {
    switch (imgName) {
      case 'DAILY_STANDUPS':
        return <ProgressTrackingImage />;

      case 'IPMS/RETROS':
        return <ProjectKickoffImage />;

      case 'USER_STORIES':
        return <StaffAugmentationImage />;
    }
  };

  return (
    <StyledStackableImageAndTextDuo>
      <div className={`container ${imgOnLeft ? 'reversed' : ''}`}>
        <div className="img">{getImage(imgName)}</div>
        <div className="text-container">
          <h1>{title}</h1>
          <h2>{header1}</h2>
          <p>{paragraph1}</p>
          <h2>{header2}</h2>
          <p>{paragraph2}</p>
          {children}
          <Link to={buttonLinkTo}>
            <button>{buttonText}</button>
          </Link>
        </div>
      </div>
    </StyledStackableImageAndTextDuo>
  );
};

export default StackableImageAndTextDuo;

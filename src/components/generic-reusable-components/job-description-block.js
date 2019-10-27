import React from 'react';
import styled from '@emotion/styled';

const StyledJobDescription = styled.div`
  position: relative;
  background-color: yellowgreen;
  display: block;
  border-radius: 5px;
  
  margin: calc(5px + 2vw);
  overflow: hidden;

  .non-intern-block {
    min-height: 3000px;

    @media only screen and (max-width: 660px) {
    min-height: 5000px;

      }
    /* min-height: 100%; */
  }
  .intern-block {
    min-height: 500px;
    height: 600px;
  }

  h2 {
    font-size: calc(17px + 2vw);
    line-height: calc(30px + 2vw);
    margin-bottom: 0;
    font-weight: 700;
    letter-spacing: 0.25vw;
  }

  h3 {
    color: #bbb;
    line-height: 32px;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 1.2px;
  }

  h4 {
    font-family: 'e2-Raleway-Bold';
    color: #ddd;
    font-size: calc(10px + 2vw);
    line-height: calc(24px + 2vw);
    letter-spacing: 0.25vw;
    margin: 3vw 0;
  }

  li {
    font-size: 14px;
    font-family: 'e2-Raleway';
    color: #ddd;
  }

  p {
    font-size: calc(12px + 1vw);
    line-height: calc(18px + 2vw);
    letter-spacing: 0.25vw;
    font-family: 'e2-Raleway';
    color: #ddd;
  }

  a {
    width: 100%;
  }
  .movable-block {
    color: white;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background-color: #000032;
    padding: 40px;

    :hover {
      background-color: #153363;
      top: calc(-8px - 0.25vw);
      left: calc(-8px - 0.25vw);
    }
  }
`;

const JobDescriptionBlock = ({
  headerText,
  linkText,
  linkTo,
  children,
  isInternBlock,
}) => (
  // <div className="fuck">
  <a href={linkTo} style={{ width: '100%' }}>
    <StyledJobDescription>
      <div className={isInternBlock ? 'intern-block' : 'non-intern-block'}>
        <div className="movable-block">{children}</div>
      </div>
    </StyledJobDescription>
  </a>
  // </div>
);

export default JobDescriptionBlock;

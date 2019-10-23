import React from 'react';
import styled from '@emotion/styled';

const StyledJobDescription = styled.div`
  position: relative;
  background-color: yellowgreen;
  display: block;
  border-radius: 5px;
  margin: 40px;
  overflow: hidden;

  .non-intern-block {
    min-height: 3000px;

    @media only screen and (max-width: 660px) {
    min-height: 3600px;

      }
    /* min-height: 100%; */
  }
  .intern-block {
    min-height: 500px;
    height: 600px;
  }

  h2 {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 0;
    font-weight: 700;
    letter-spacing: 1.2px;
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
    font-size: 17px;
    letter-spacing: 1.2px;
  }

  li {
    font-size: 14px;
    font-family: 'e2-Raleway';
    color: #ddd;
  }

  p {
    font-size: 16px;
    letter-spacing: 1.2px;
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
      top: -8px;
      left: -8px;
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

import React from 'react';
import styled from '@emotion/styled';

const StyledJobDescription = styled.div`
  position: relative;
  background-color: yellowgreen;
  display: block;
  /* width: 100%; */
  border-radius: 5px;
  margin: 40px;
  /* cursor: pointer; */

  .non-intern-block {
    min-height: 1500px;
  }
  .intern-block {
    min-height: 500px;
    height: 600px;
  }

  /* .fuck {
    margin: 40px;
    background-color: orange;
  } */

  h2 {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 0;
    font-weight: 700;
  }

  h3 {
    color: #bbb;
    line-height: 32px;
    font-weight: 500;
    font-size: 18px;
  }

  h4 {
    font-family: 'e2-Raleway-Bold';
    color: #ddd;
    font-size: 14px;
  }

  li {
    font-size: 14px;
    font-family: 'e2-Raleway';
    color: #ddd;
  }

  p {
    font-size: 14px;
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

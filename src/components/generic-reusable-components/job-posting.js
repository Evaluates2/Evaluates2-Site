import React from 'react';
import styled from '@emotion/styled';
import Link from 'gatsby-link';

const PersonColorContainer = styled.div`
  background-color: rgba(0, 51, 204, 0.85);
  border-radius: 8px;
`;

const StyledPersonImage = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  color: #0033cc;

  .job-container {
    /* background-color: #000032; */
    background-color: pink;
    /* width: 100%; */
    /* height: 100%; */
    /* height: 200px; */
    border-radius: 8px;
    max-width: 310px;
    position: absolute;
    display: inline-block;
    /* top: 0px;
    left: 0px; */

    :hover {
      margin-right: 20px;
    }
  }

  /* h2 {
    font-size: 17px;
    margin: 6px auto 6px 5px;
    font-family: 'e2-Raleway-Semi-Bold';
    line-height: 17px;

    :hover {
      color: #678cff;
    }
  }

  p {
    font-size: 15px;
    margin: 2px auto 2px 5px;
    font-family: 'e2-Raleway';
    line-height: 18px;

    :hover {
      color: #678cff;
    }
  } */

  /* .bg-div {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: teal;
  } */
`;

const JobPosting = ({ children, itemId, name, linkTo, role, img }) => {
  return (
    <Link to={linkTo}>
      <StyledPersonImage>
        {/* <PersonColorContainer> */}
          <div className="job-container">
          {children}
          </div>
        {/* </PersonColorContainer> */}
        {/* <h2>
                {name}
            </h2>
            <p>
                {role}
            </p>
            <div className="bg-div">

            </div> */}
      </StyledPersonImage>
    </Link>
  );
};

export default JobPosting;

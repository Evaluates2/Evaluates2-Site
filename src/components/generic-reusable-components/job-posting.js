import React from 'react';
import styled from '@emotion/styled';

const StyledPersonImage = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  color: #0033cc;

  .career-block {
    text-align: left;
    display: block;
    background-color: darkgrey;
    width: 100%;
    padding: 30px;
    border-radius: 8px;
    display: inline-block;
    color: white;

    :hover {
      margin-right: 20px;
    }

  }

`;

const JobPosting = ({ children, itemId, name, linkTo, role, img }) => {
  return (
    <StyledPersonImage>
      <div className="career-block">{children}</div>
    </StyledPersonImage>
  );
};

export default JobPosting;

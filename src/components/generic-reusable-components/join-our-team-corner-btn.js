import React from 'react';
import styled from '@emotion/styled';

const StyledJoinOurTeamCornerBtn = styled.div`
  /* background-image: linear-gradient(90deg,#000032,#0ff); */
  min-height: 120px;
  display: flex;
  width: 100%;
  float: right;
  padding: 10vh 10vw;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 6vh 6vw;

  a {
    display: inline-block;
    transition: all 1s ease-out;

    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  a:hover {
    transform: translate3d(170%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
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

const JoinOurTeamCornerBtn = () => (
  <StyledJoinOurTeamCornerBtn>
    <a>
      <button>Join our team</button>
    </a>
  </StyledJoinOurTeamCornerBtn>
);

export default JoinOurTeamCornerBtn;

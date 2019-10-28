import React from 'react';
import styled from '@emotion/styled';
import Link from 'gatsby-link';

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
  background: transparent;

  a {
    /* display: inline-block; */
    /* transition: all 3s ease-out; */

    /* transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d; */
    outline: 0;
    /* position: absolute; */

    .off-right-position {
      transition: all 1s ease-out;
      transform: translate3d(170%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    .fly-in-from-right {
      transition: all 1s ease-out;
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
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
    outline: 0;
    max-width: 200px;
    cursor: pointer;
    transition-property: opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }
`;

class JoinOurTeamCornerBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showJointButton: false,
      window: undefined,
      document: undefined
    };

  }
  componentDidMount() {
    this.setState({ showJointButton: false, window, document });
    window.addEventListener('scroll', this.handleScroll.bind(this), true);

  }

  componentWillUnmount() {
    this.state.window.removeEventListener(
      'scroll',
      this.handleScroll.bind(this),
      true,
    );
  }

  isInViewport = elem => {
    if (elem) {
      const bounding = elem.getBoundingClientRect();
      const BUFFER = 100;

      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
        (this.state.window.innerHeight || this.state.document.documentElement.clientHeight) -
        BUFFER
      );
    }
    return false;
  };
  handleScroll = e => {
    const joinTeamBtnElement = this.state.document.getElementById('join-team-btn');
    if (this.isInViewport(joinTeamBtnElement)) {
      this.setState({
        showJointButton: true
      });
    }
  };

  render() {
    return (
      <StyledJoinOurTeamCornerBtn>
        <Link to="/careers">
          <div id="join-team-btn">
            <button
              className={`off-right-position ${
                this.state.showJointButton
                  ? 'fly-in-from-right'
                  : 'off-right-position'
                }`}
            >
              Join our team
            </button>
          </div>
        </Link>
      </StyledJoinOurTeamCornerBtn>
    );
  }
}

export default JoinOurTeamCornerBtn;

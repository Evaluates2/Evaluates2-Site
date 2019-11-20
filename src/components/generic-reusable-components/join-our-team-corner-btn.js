import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'gatsby-link';

const randomBetween = (min, max) => Math.random() * (max - min + 1) + min;

const generateParticleAnimation = () => {
  const opacityDelta = randomBetween(.2, 1);
  const xDelta0 = randomBetween(-75, 75);
  const yDelta0 = randomBetween(0, 40);
  const xDelta20 = randomBetween(-80, 80);
  const yDelta20 = randomBetween(-40, -20);

  return keyframes`
    0% {
      opacity: ${opacityDelta};
      transform: translate3d(${xDelta0}px, ${yDelta0}px, 0) scale(1);
    }

    30% {
      opacity: ${opacityDelta};
      transform: translate3d(${xDelta20}px, ${yDelta20 * 1.7}px, 0) scale(1);
    }

    100% {
      opacity: 0;
      transform: translate3d(${xDelta20 * 1.5}px, ${yDelta20 * -4}px, 0) scale(.5);
    }
  `
}

const Particle = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  left: 75px;
  z-index: 1;
  background: #fff;
  border-radius: 100%;
  animation-duration: ${props => randomBetween(0.7, 1)}s;
  animation-timing-function: ease-in-out;
  opacity: 0;
  /* animation-timing-function: cubic-bezier(0.22, 0.4, 0.12, 1.26); */
  animation-delay: 1s;
  animation-iteration-count: 1;

  &.particle {
    animation-name: ${props => generateParticleAnimation()};
  }
`

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
  padding: 7vh 6vw;
  background: transparent;
  overflow: hidden;

  #join-team-btn {
    position: relative;
  }

  a {
    /* display: inline-block; */
    /* transition: all 3s ease-out; */

    /* transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d; */
    outline: 0;
    /* position: absolute; */

    .off-right-position {
      /* transition: all 1s ease-out; */
      transform: translate3d(170%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transition: all 1s cubic-bezier(0.6, -0.28, 0.74, 0.05);
    }

    .fly-in-from-right {
      /* transition: all 1s ease-out; */
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transition: all 1s cubic-bezier(0.6, -0.28, 0.74, 0.05);
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
      document: undefined,
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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.window == this.state.window && nextState.document == this.state.document && nextState.showJointButton == this.state.showJointButton)
      return false
    return true
  }

  render() {
    return (
      <StyledJoinOurTeamCornerBtn>
        <Link to="/careers">
          <div id="join-team-btn">
            {this.state.showJointButton && <div className="particles" >
              {new Array(25).fill(null).map((_, i) => (
                <Particle key={i} className='particle' />
              ))}
            </div>}
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

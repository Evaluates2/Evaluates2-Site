import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const ImagesContainer = styled.div`
  position: relative;
  min-height: calc(430px + 40vw);
  background-image: radial-gradient(
    circle farthest-corner at 49% 83%,
    #fff,
    #00e7ff 15%,
    #2c0277 79%,
    #040438
  );
  ${mediaQuery.maxTablet} {
    height: 70vh;
  }
`;


export const Def1 = styled.div`
  img {
    will-change: transform;
    transform: translate3d(0px, 0vh, 0px) scale3d(-1.2, 1.1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    left: 0;
    top: calc(50px + 60vh);
    right: 0;
    z-index: 3;
    width: 100%;
    position: absolute;
    overflow: hidden;
    ${mediaQuery.maxTablet} {
      top: 54vh;
      height: 40%;
    }
    ${mediaQuery.maxPhablet} {
      top: 57vh;
    }
  }
`;

export const Def2 = styled.div`
  img {
    will-change: transform;
    transform: translate3d(0px, 0.45vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    top: calc(50px + 63vh);
    z-index: 1;
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
    ${mediaQuery.maxTablet} {
      top: 49vh;
      height: 40%;
    }
    ${mediaQuery.maxPhablet} {
      top: 53vh;
    }
  }
`;

export const Def3 = styled.div`
  img {
    will-change: transform;
    transform: translate3d(0px, 0.75vh, 0px) scale3d(-1.1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    top: calc(50px + 60vh);
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
    ${mediaQuery.maxTablet} {
      top: 48vh;
      height: 40%;
    }
    ${mediaQuery.maxPhablet} {
      top: 50vh;
    }
  }
`;

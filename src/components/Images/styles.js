import styled, { keyframes } from 'styled-components';
import cloud1 from "../../data/cloud1.png"
import cloud3 from "../../data/cloud3.png"
import bird from "../../data/bird-cells.svg"

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


export const BlackFrontCityOutline = styled.div`
  img {
    will-change: transform;
    transform: translate3d(-15vw, 0vh, 0px) scale3d(1.5, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
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



const cloudsFlying = keyframes`
  0% { transform: translateX(-50vw); }
  100% { transform: translateX(100vw); }
`

export const Clouds = styled.div`
  .cloud {
    position: absolute;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-timing-function: linear;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
  }

  .cloud1 {
    background-image: url(${cloud1});
    animation-name: ${cloudsFlying};
    animation-duration: 200s;
    animation-delay: -100s;
    z-index: 2;
    height: 273px;
    width: 550px;
    transform: scale(0.5);
    top: 500px;
    opacity: 40%;
  }

  .cloud3 {
    background-image: url(${cloud3});
    animation-name: ${cloudsFlying};
    animation-duration: 300s;
    animation-delay: -100s;
    opacity: .5;
    height: 400px;
    width: 750px;
    top: 400px;
  }

`


export const birdFlying = keyframes`
  0% { transform: translate(-50vw); }
  100% { transform: translate(105vw); }
`

const birdFlipbook = keyframes`
  100% {
    background-position: -300px 0;
  }
`

export const Birds = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 500px;
  top: 50vh;

  & > div {
    animation-name: ${birdFlying};
    position: absolute;
    animation-iteration-count: infinite; 
    animation-timing-function: linear;
    z-index: 2;

    figure {
      background-image: url(${bird});
      background-repeat: no-repeat;
      will-change: background-position;
      animation-name: ${birdFlipbook};
      animation-timing-function: steps(10);
      animation-duration: 1s;
      animation-iteration-count: infinite;
      height: 41.7px;
      width: 29.4px;
      background-size: auto 100%;
    }
  }
  
  & > div:nth-child(1) {
    top: 10%;
    z-index: 2;
    animation-duration: 28s;
    animation-delay: -28s;


    figure {
      transform: scale(.6);
      animation-delay: -2s;
    }
  }

  & > div:nth-child(2) {
    top: 20%;
    animation-duration: 25s;
    animation-delay: -30s;

    figure {
      animation-delay: -8s;
      transform: scale(.7);
    }
  }

  & > div:nth-child(3) {
    top: 30%;
    animation-duration: 27s;
    animation-delay: -37s;

    figure {
      animation-delay: -18s;
      transform: scale(.7);
    }
  }

  & > div:nth-child(4) {
    top: 22%;
    animation-duration: 27s;
    animation-delay: -36s;
    
    figure {
      transform: scale(.5);
      animation-delay: -15s;
    }
  }

  & > div:nth-child(5) {
    top: 20%;
    animation-duration: 48s;
    animation-delay: -36s;
    

    figure {
      transform: scale(.4);
      animation-delay: -13s;
    }
  }

  & > div:nth-child(6) {
    top: 25%;
    animation-duration: 47s;
    animation-delay: -38s;


    figure {
      transform: scale(.4);
      animation-delay: -12s;
    }
  }

  & > div:nth-child(7) {
    top: 27%;
    animation-duration: 48s;
    animation-delay: -58s;

    figure {
      transform: scale(.4);
      animation-delay: -9s;
    }
  }

  & > div:nth-child(8) {
    top: 28%;
    animation-duration: 47s;
    animation-delay: -56s;

    figure {
      transform: scale(.4);
      animation-delay: -11s;
    }
  }

  & > div:nth-child(9) {
    top: 29%;
    animation-duration: 49s;
    animation-delay: -59s;
    
    figure {
      transform: scale(.4);
      animation-delay: -17.5s;
    }
  }

  & > div:nth-child(10) {
    top: 39%;
    animation-duration: 36s;
    animation-delay: -45s;


    figure {
      transform: scale(.5);
      animation-delay: -13.9s;
    }
  }

  & > div:nth-child(11) {
    top: 39%;
    animation-duration: 35s;
    animation-delay: -45s;

    figure {
      transform: scale(.5);
      animation-delay: -10s;
    }
  }

  & > div:nth-child(12) {
    top: 50%;
    animation-duration: 25s;
    animation-delay: -45s;

    figure {
      transform: scale(.5);
      animation-delay: -10s;
    }
  }

  & > div:nth-child(13) {
    top: 50%;
    animation-duration: 21s;
    animation-delay: -45s;

    figure {
      transform: scale(.5);
      animation-delay: -10s;
    }
  }

  & > div:nth-child(14) {
    top: 50%;
    animation-duration: 23s;
    animation-delay: -45s;

    figure {
      transform: scale(.5);
      animation-delay: -30ms;
    }
  }
`


export const DarkMiddleCityOutline = styled.div`
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



export const LightLibertyCityOutline = styled.div`
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

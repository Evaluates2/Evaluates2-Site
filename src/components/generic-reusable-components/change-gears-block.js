import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const StyledChangeGearsBlock = styled.div`
  text-decoration: none;
  position: relative;
  z-index: 5;
  display: flex;
  padding: 15vh 100px 1vh;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding-right: 0;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;

  h2 {
    display: flex;
    width: 82vw;
    padding-right: 20px;
    padding-left: 7vw;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    margin-bottom: 0;
    font-size: 42px;
    line-height: 70px;
    font-family: 'e2-Raleway-Bold';
    letter-spacing: 1px;
    margin: 70px 0 2vw 20px;
  }

  a {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-start;
    margin: 0px 0 50px calc(14px + 9vw);
    min-height: 5vw;

    @keyframes rainbow_animation {
      0% {
        background-position: 0 0;
      }
      
      100% {
        background-position: 100% 0;
      }
     
    }

    h3.rainbow_text_animated {
      background: linear-gradient(
        to left,
        #66edff,
        #bf2bf0,
        #00ff00,
        #ff3399,
        #f02b52,
        #fff457,
        #12a8ff,
        #ffa012,
        #ff8cf5,
        #2fba5b
      );
      -webkit-background-clip: text;
      background-clip: text;
      background-size: 1500% 300%;
      color: #fff;
      transition: all 0.5s ease;
      font-size: 20px;
      padding-left: 0px;

      :hover {
        /* padding: 5px 5px 5px 20px; */
        font-size: 22px;
        padding-left: 20px;
        /* line-height: 28px; */
        color: rgba(0, 0, 0, 0);
        animation: rainbow_animation 2s cubic-bezier(0.25, 0.25, 0.25, .25) infinite;
      }
    }

    /* background-image: linear-gradient(90deg,#000032,#0ff);
  min-height: 425px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
  width: 100%;
  padding: 10vh 10vw;
  
  
  h1.header {
    font-size: 80px;
    line-height: 100px;
    font-family: 'e2-Raleway-Extra-Bold';
    letter-spacing: 1px;
    text-align: left;
  } */

    div {
      #shadowBox {
        background-color: rgb(0, 0, 0);
        /* Fallback color */
        background-color: rgba(0, 0, 0, 0);
        /* Black w/opacity/see-through */
        /* border: 3px solid; */
      }
    }
  }
`;

const RainbowBlock = styled.div`
  background-image: linear-gradient(238deg, #0ff, #f0f);
`;

const ChangeGearsBlock = ({ headerText, linkText, linkTo }) => (
  <StyledChangeGearsBlock>
    <RainbowBlock>
      <h2>{headerText}</h2>
      <Link to={linkTo}>
        <div id="shadowBox">
          <h3 className="rainbow rainbow_text_animated">
            {linkText}&nbsp;&nbsp;→
          </h3>
        </div>
      </Link>
    </RainbowBlock>
    {/* <h1 className='header'>{headerText}</h1> */}
  </StyledChangeGearsBlock>
);

export default ChangeGearsBlock;

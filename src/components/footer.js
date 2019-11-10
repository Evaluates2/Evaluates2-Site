import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.div`
  min-height: 90px;
  width: 100%;
  padding: 35px 13px 20px;
  display: grid;
  gap: calc(4px + 1vw);

  // desktop, 4 items in a row
  grid-template-columns: auto auto auto auto auto;

  // tablet, 2 x 2 square items in one column
  @media only screen and (max-width: 990px) {
    grid-template-columns: auto auto auto;
  }

  // phone, 4 items in one column
  @media only screen and (max-width: 660px) {
    grid-template-columns: auto;
  }

  background-color: #000011;
  color: white;

  a {
      color: #777777;
      cursor: pointer;

      :hover {
          color: #f9f9f9f9;
      }
      
      font-size: calc(14px + 0.5vw);
      line-height: calc(30px + 0.5vw);
      margin: 4px 0;

      @media only screen and (max-width: 660px) {
        font-size: 5vw;
      }
  }

  h1 {
    
    display: flex;
    color: white;
    font-family: 'e2-Raleway-Extra-Bold';
    font-size: 31px;
    letter-spacing:2px;
    display: flex;
    flex: 1;
    justify-content: center;
    height: 100%;
    margin: auto;
    align-items: left;
    flex-direction: column;
    padding: 15px;
    /* width: 300px; */
  }
  
  h2#e2-logo {
    
    /* display: flex;
    color: white; */
    font-family: 'e2-Raleway-Extra-Bold';
    font-size: 2.5vw;
    /* letter-spacing: 1.9px;
    display: flex;
    flex: 1;
    justify-content: center;
    height: 100%;
    margin: auto; */
    /* align-items: left; */
    text-align: left;
    /* flex-direction: column; */
    /* padding-bottom: 15px; */
    /* width: 300px; */
    padding: 0 0 0 4px;
    margin: 6px 0 0 0;

    @media only screen and (max-width: 660px) {
        font-size: 7vw;
      }
  }

  .img-container {

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    grid-row: 1 / 3;
    grid-column: 1;
    flex: 1;
    /* height: 100%; */
    /* max-width: 60px; */
    /* min-width: 400px; */
    padding-right: 20px;
    @media only screen and (max-width: 660px) {
    padding: 5px;
      /* display: none; */
      margin: 20px 20px 40px;
    }

}

.footer-img {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    max-width: 100px;
    
   
  }

  .footer-grid-block {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    margin: 1vw;
    font-size: calc(5px + 0.5vw);

    @media only screen and (max-width: 660px) {
      padding-left: 20px;
    }
  }
  

  .gatsby-image-wrapper {
    width: 80px;
    height: 80px;
  }
`;

export default Footer;

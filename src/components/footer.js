import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.div`
  min-height: 90px;
  width: 100%;
  padding: 35px 23px 20px;
  display: grid;

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

      font-size: 17px;
      line-height: 1.3em;

      :hover {
          color: #f9f9f9f9;
      }

      @media only screen and (max-width: 660px) {
        font-size: 35px;
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
  
  h2 {
    
    /* display: flex;
    color: white; */
    font-family: 'e2-Raleway-Extra-Bold';
    font-size: 31px;
    /* letter-spacing: 1.9px;
    display: flex;
    flex: 1;
    justify-content: center;
    height: 100%;
    margin: auto; */
    /* align-items: left; */
    text-align: left;
    /* flex-direction: column; */
    padding-bottom: 15px;
    /* width: 300px; */

    @media only screen and (max-width: 660px) {
        font-size: 50px;
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
    margin: 5px;

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

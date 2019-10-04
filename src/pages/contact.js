import React from 'react';
import { Link } from 'gatsby';
import Global from "../components/Global"
import Layout from '../components/layout';
import styled from '@emotion/styled';
import JoinOurTeamCornerBtn from './../components/generic-reusable-components/join-our-team-corner-btn';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';

const StyledContactPage = styled.div`
  font-family: 'e2-Raleway-Black';
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h2 {
    font-family: 'e2-Raleway-Bold';
    font-size: 44px;
    max-width: 95vw;
    line-height: 140px;
    text-align: center;
    letter-spacing: 4px;
  }
  .need-an-nda {
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 2px;
    font-family: 'e2-Raleway';
    text-align: left;
    margin-left: 5px;
    margin-bottom: 20px;
    
    a {
      color: #FF7D00;
    }
  }
  label {
    text-align: left;
  }
  button {
    background-image: linear-gradient(90deg,#ff7d00,#e0d950);
    transition: opacity 0.2s ease;
    color: #fff;
    font-size: 17px;
    line-height: 29px;
    font-family: 'e2-Raleway-Semi-Bold';
    letter-spacing: 0.5px;
    padding: 11px 25px;
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

const StyledContactForm = styled.div`
  font-family: "e2-Raleway-Black";
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h2 {
    font-family: "e2-Raleway-Bold";
    font-size: 44px;
    max-width: 95vw;
    line-height: 75px;
    text-align: center;
    letter-spacing: 4px;
  }

  .need-an-nda {
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 2px;
    font-family: "e2-Raleway";
    text-align: left;
    margin-left: 5px;
    margin-bottom: 20px;

    a {
      color: #ff7d00;
    }
  }

  label {
    text-align: left;
  }

  button {
    background-image: linear-gradient(90deg, #ff7d00, #e0d950);
    transition: opacity 0.2s ease;
    color: #fff;
    font-size: 17px;
    line-height: 29px;
    font-family: "e2-Raleway-Semi-Bold";
    letter-spacing: 0.5px;
    padding: 11px 25px;
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

const FlexRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 55vw;
  /* margin: 25px; */

  /* width: 100%; */
  flex: 1;
  /* min-width: 400px; */


  button {

    opacity: 1;
    
    :disabled {
      opacity: 0.6;
    }
  }

  // tablet, 2 x 2 square items in one column
    @media only screen and (max-width: 990px) {
      /* grid-template-columns: auto auto;
      grid-template-rows: auto auto; */

      width: 85vw;
    }

    // phone, 4 items in one column
    @media only screen and (max-width: 660px) {
      /* grid-template-columns: auto;
      grid-template-rows: auto auto auto auto; */
    }
`;



const InputAndLabel = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-family: "e2-Raleway-Semi-Bold";
  width: 100%;
  margin-bottom: 15px;

  label {
    margin: 5px 0px;
  }

  input {
    margin: 5px 0px;
    border-radius: 5px;
    font-family: "e2-Raleway-Semi-Bold";
    padding: 9px;
    letter-spacing: 1px;
    font-size: 25px;
    color: #000032;
  }
  
  textarea {
    margin: 3px 0px;
    letter-spacing: 1px;
    border-radius: 5px;
    font-family: "e2-Raleway-Semi-Bold";
    padding: 10px 15px;
    height: 130px;
    line-height: 32px;
    font-size: 25px;
    color: #000032;
  }
`;


const StyledFormWithTwoBoxes = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000032;
  color: white;
  flex: 1;

  .page-intro {
    text-align: left;
    margin: 10px 100px;
    
    @media only screen and (max-width: 660px) {
      margin: 10px 30px;
    }
  }

  .grid-container {
    margin: 5px;

    // the grid magic!!
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    align-items: center;
    justify-content: center;

    // desktop, 4 items in a row
    /* grid-template-columns: auto auto auto auto auto; */
    grid-template-columns: auto auto;

    justify-items: stretch;

    // tablet, 2 x 2 square items in one column
    @media only screen and (max-width: 990px) {
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
    }

    // phone, 4 items in one column
    @media only screen and (max-width: 660px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto auto;
    }
  }

  .box {
    min-width: 270px;
    height: 180px;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 30px;
    border-radius: 7px;
    border: 1px solid #000011;
    background-color: white;
    color: #000032;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 16px;
    
    // tablet, 2 x 2 square items in one column
    @media only screen and (max-width: 990px) {
      margin: 5px;
      min-width: 225px;
    }
    
  }

  hr {
    border-color: white;
    border-width: 0.5px;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border-style: inset;
  }

  h2 {
    margin-top: 5px;
    line-height: 55px;

    // tablet, 2 x 2 square items in one column
    @media only screen and (max-width: 990px) {
      margin-bottom: 5px;
    }
  }

  .location-box {
    /* background-color: lightcoral; */
    
    grid-row: 1;
    grid-column: 2;
    
    // tablet, 2 x 2 square items in one column
    @media only screen and (max-width: 990px) {
      grid-row: 3;
      grid-column: 1;
    }

    // one column on phone
    @media only screen and (max-width: 661px) {
      grid-row: 4;
      grid-column: 1 / span 2;
      margin: 15px 70px;
    }
  }
  
  .contact-us-box {
    grid-row: 2;
    grid-column: 2;

    // tablet, 2 x 2 square items in one column
    @media only screen and (max-width: 990px) {
      grid-row: 3;
      grid-column: 2;
    }

    // one column on phone
    @media only screen and (max-width: 661px) {
      grid-row: 3;
      grid-column: 1 / span 2;
      margin: 15px 70px;
    }
  }

  .form-container {

    grid-column: 1;
    grid-row: 1 / span 2;

    // tablet, 2 x 2 square items in one column
    @media only screen and (max-width: 990px) {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
    }

    margin-left: 20px;
    /* background-color: papayawhip; */

  }

  h1 {
    margin: 2px;
  }

  h3 {
    margin: 2px;
  }
`;


const changey = (e) => {
  console.log('e is: ', e);
}



const ContactPage = () => {


  const onChange = (e) => {
    console.log('e is: ', e);
    setHumanVerified(true)

  }

  // const [humanVerified, setHumanVerified] = useState(false)

  const [humanVerified, setHumanVerified] = useState(false);


  return (
    <Global pageTitle={'Contact Us'} path={'contact'} description={'contact'}>
      <Layout>

        <StyledContactPage>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <StyledFormWithTwoBoxes>
            <StyledContactForm>

              <br />
              <br />
              <h2>We look forward to speaking!</h2>
              <br />
              <br />

              <div className="grid-container">
                <div className="form-container">

                  <form action="javascript:alert(grecaptcha.getResponse(widgetId1));">
                    <br />
                    <FlexRow>
                      <InputAndLabel>
                        <label htmlFor="name">Name</label>
                        <input htmlFor="name"></input>
                      </InputAndLabel>
                    </FlexRow>

                    <FlexRow>
                      <InputAndLabel>
                        <label htmlFor="name">Email</label>
                        <input htmlFor="name"></input>
                      </InputAndLabel>
                    </FlexRow>

                    <FlexRow>
                      <InputAndLabel>
                        <label htmlFor="name">Message</label>
                        <textarea htmlFor="name" maxlength="10000"></textarea>
                      </InputAndLabel>
                    </FlexRow>

                    <br />

                    <FlexRow>
                      {/* <div class="g-recaptcha" data-sitekey="6LcVobsUAAAAALWas1f5PZf_XAAEz4spBp8NmHAQ" onChange={changey} ></div> */}

                      <ReCAPTCHA
                        sitekey="6LcVobsUAAAAALWas1f5PZf_XAAEz4spBp8NmHAQ"
                        onChange={onChange}
                      />
                    </FlexRow>
                    <br />
                    <br />
                    <FlexRow>
                      <a>
                        <button disabled={!humanVerified}>Submit</button>
                      </a>
                      {/* <input type="submit" value="getResponse" /> */}
                    </FlexRow>

                  </form>
                  <br />
                  <br />
                </div>

                <div className="box location-box">
                  <h1>Location</h1>
                  <h3>228 w 25th St.</h3>
                  <h3>NY NY 10001</h3>
                </div>
                <div className="box contact-us-box">
                  <h1>Contact</h1>
                  <h3>info@evaluates2.com</h3>
                  <h3>(917) 745-3133</h3>
                </div>
              </div>
              <br />
              <br />

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <JoinOurTeamCornerBtn />
            </StyledContactForm>
          </StyledFormWithTwoBoxes>
        </StyledContactPage>
      </Layout>
    </Global>
  );
}
export default ContactPage;
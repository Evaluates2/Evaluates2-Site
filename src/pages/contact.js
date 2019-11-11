import React from 'react';
import { Link } from 'gatsby';
import Global from '../components/Global';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import JoinOurTeamCornerBtn from './../components/generic-reusable-components/join-our-team-corner-btn';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ReactDOM from 'react-dom'

const BACKEND_URL = 'https://d30y56yd99.execute-api.us-east-1.amazonaws.com/dev';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Please enter your name!')
    .max(100, 'Please enter a shorter name!')
    .required('Required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Required'),
  message: Yup.string()
    .min(5, 'Please enter a message!')
    .max(1000, 'Sorry, please enter a shorter message!')
    .required('Required'),
});

const StyledContactPage = styled.div`
  font-family: 'e2-Raleway-Black';
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .need-an-nda {
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 2px;
    font-family: 'e2-Raleway';
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

  .clickable-submit {
    position: absolute;
    display: inline-block;
    cursor: pointer;
  }

  .submit-btn-container {
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledContactForm = styled.div`
  font-family: 'e2-Raleway-Black';
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: calc(10px + 1vw);

  h2#hero-h-contact {
    letter-spacing: 0.5vw;
    font-family: 'e2-Raleway-Bold';
    margin-top: calc(160px + 10vw);
    line-height: calc(21px + 9vw);
    font-size: calc(7px + 9vw);
    text-align: center;

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
      pointer-events: none;
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

  p.signup-error-text {
    padding-top: 10px;
    color: greenyellow;
    font-family: 'e2-Raleway-italic';
    font-size: 17px;
    letter-spacing: 1px;
  }

  .successful-contact-submission-text {
    font-family: 'e2-Raleway-Semi-Bold';
    font-size: 20px;
    line-height: 26px;
    margin: 10px 0;
  }

  .error-contact-submission-text {
    font-family: 'e2-Raleway-Semi-Bold';
    color: greenyellow;
    font-size: 20px;
    line-height: 26px;
    margin: 5px 0;
  }
`;

const InputAndLabel = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-family: 'e2-Raleway-Semi-Bold';
  width: 100%;
  margin-bottom: 15px;

  label {
    margin: 5px 0px;
  }

  input {
    margin: 5px 0px;
    border-radius: 5px;
    font-family: 'e2-Raleway-Semi-Bold';
    padding: 9px;
    letter-spacing: 1px;
    font-size: 25px;
    color: #000032;
  }

  textarea {
    margin: 3px 0px;
    letter-spacing: 1px;
    border-radius: 5px;
    font-family: 'e2-Raleway-Semi-Bold';
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
    grid-template-rows: auto auto auto;
    align-items: center;
    justify-content: center;

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
    margin: 32px;
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

    h1 {
      margin: 2px;
      font-size: 36px;
    }
    
    h3 {
      margin: 2px;
      font-size: 20px;
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
    margin: calc(5px + 5vw);
    font-size: calc(20px + 4vw);
    line-height: calc(35px + 5vw);
  }

  .location-box {

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
    margin-top: 6px;
    
    // tablet, 2 x 2 square items in one column
    @media only screen and (max-width: 990px) {
      grid-row: 3;
      grid-column: 2;
      margin-top: inherit;
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
    grid-row: 1 / span 3;

    // tablet, 2 x 2 square items in one column
    @media only screen and (max-width: 990px) {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
    }


    /* background-color: papayawhip; */
  }

 
`;

const ContactPage = () => {

  const earlySubmitClick = (
    validNameEntered,
    validEmailEntered,
    validMessageEntered,
    validhumanVerified,
    errors,
  ) => {
    let earlySubmitErrorMessage = 'Please ';

    if (
      !validNameEntered ||
      !validEmailEntered ||
      !validMessageEntered ||
      errors.name ||
      errors.email ||
      errors.message
    ) {
      const errorFields = [
        !validNameEntered || errors.name ? 'name' : '',
        !validEmailEntered || errors.email ? 'email' : '',
        !validMessageEntered || errors.message ? 'message' : '',
      ].filter(item => {
        return item !== '';
      });

      earlySubmitErrorMessage += 'enter a valid ';

      switch (errorFields.length) {
        case 3:
          earlySubmitErrorMessage += `${errorFields[0]}, ${
            errorFields[1]
          }, and ${errorFields[2]}`;
          break;

        case 2:
          earlySubmitErrorMessage += `${errorFields[0]} and ${errorFields[1]}`;
          break;

        case 1:
          earlySubmitErrorMessage += `${errorFields[0]}`;
          break;
      }

      earlySubmitErrorMessage += '.';

      if (!validhumanVerified) {
        earlySubmitErrorMessage += ' Also, please ';
      }
    }

    if (!validhumanVerified) {
      earlySubmitErrorMessage += 'click the captcha to verify you are a human!';
    }

    setFormErrorText(earlySubmitErrorMessage);
  };

  const onChange = e => {
    setHumanVerified(true);
  };

  const [humanVerified, setHumanVerified] = useState(false);
  const [formSuccessText, setFormSuccessText] = useState('');
  const [formErrorText, setFormErrorText] = useState('');

  return (
    <Global pageTitle={'Contact Us'} path={'contact'} description={'contact'}>
      <Layout>
        <StyledContactPage>
         
          <StyledFormWithTwoBoxes>
            <StyledContactForm>
              <div>
            
                <h2 id="hero-h-contact">We look forward to speaking!</h2>
                <br />
                <br />
                <div className="grid-container">
                  <div className="form-container">
                    <Formik
                      initialValues={{
                        name: '',
                        email: '',
                        message: '',
                      }}
                      validationSchema={SignupSchema}
                      onSubmit={(values, {resetForm, setFieldValue})=> {
                        setFormErrorText('');

                        axios
                          .post(`${BACKEND_URL}/contactSubmission`, {
                            name: values.name,
                            email: values.email,
                            message: values.message,
                            dateSubmitted: new Date(),
                            userAgent: {}
                          })
                          .then(res => {

                            resetForm({})

                            setFieldValue('name', '')
                            setFieldValue('email', '')
                            setFieldValue('message', '')

                            setFormSuccessText(
                              'Thanks! An Evaluates2 representative will reach out soon!',
                              );
                            })
                            .catch(err => {

                            setFormErrorText(
                              'Hmm, there was an error saving your contact submission: ' +
                                JSON.stringify(err),
                            );
                          });
                      }}
                    >
                      {({ errors, touched, values}) => (
                        <Form>
                          <FlexRow>
                            <InputAndLabel >
                              <label htmlFor="name">Name</label>
                              <Field name="name" value={values.name}/>
                              <p className="signup-error-text">
                                {errors.name && touched.name ? (
                                  <div>{errors.name}</div>
                                ) : null}
                              </p>
                            </InputAndLabel >
                          </FlexRow>
                          <FlexRow>
                            <InputAndLabel>
                              <label htmlFor="email">Email</label>
                              <Field name="email"/>
                              <p className="signup-error-text">
                                {errors.email && touched.email ? (
                                  <div>{errors.email}</div>
                                ) : null}
                              </p>
                            </InputAndLabel>
                          </FlexRow>
                          <FlexRow>
                            <InputAndLabel>
                              <label htmlFor="message">Message</label>
                              <Field
                                name="message"
                                type="message"
                                component="textarea"
                                // onMouseLeave={e => { if (formErrorText !== '') { e.target.blur(); setTimeout(() => {
                                //   earlySubmitClick(touched['name'], touched['email'], touched['message'], humanVerified, errors)}
                                // )}}}
                              />
                              <p className="signup-error-text">
                                {errors.message && touched.message ? (
                                  <div>{errors.message}</div>
                                ) : null}
                              </p>
                            </InputAndLabel>
                          </FlexRow>

                          <FlexRow>
                            <ReCAPTCHA
                              sitekey="6LcVobsUAAAAALWas1f5PZf_XAAEz4spBp8NmHAQ"
                              onChange={onChange}
                            />
                          </FlexRow>

                          <FlexRow>
                            {/* <h1>hi</h1> */}

                            <div className="submit-btn-container">
                              <div
                                className="clickable-submit"
                                onMouseDown={() => {
                                  earlySubmitClick(
                                    touched['name'],
                                    touched['email'],
                                    touched['message'],
                                    humanVerified,
                                    errors,
                                  );
                                }}
                              >
                                <button
                                  disabled={
                                    !humanVerified ||
                                    JSON.stringify(errors) !== '{}' ||
                                    !(
                                      touched['email'] === true &&
                                      touched['name'] === true &&
                                      touched['message'] === true
                                    )
                                  }
                                >
                                  Submit
                                </button>
                                {/* {JSON.stringify(touched)} */}
                                {/* {JSON.stringify(}))} */}
                                {/* {JSON.stringify(errors)} */}
                              </div>
                            </div>
                          </FlexRow>
                          <FlexRow>
                            <p className="successful-contact-submission-text">
                              {formSuccessText}
                            </p>
                          </FlexRow>
                          <FlexRow>
                            <p className="error-contact-submission-text">
                              {formErrorText}
                            </p>
                          </FlexRow>
                        </Form>
                      )}
                    </Formik>
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
              </div>
              <div className="grid-container">
                <div className="form-container">
                  <form action="javascript:alert(grecaptcha.getResponse(widgetId1));"></form>
                </div>
              </div>
              <JoinOurTeamCornerBtn />
            </StyledContactForm>
          </StyledFormWithTwoBoxes>
        </StyledContactPage>
      </Layout>
    </Global>
  );
};
export default ContactPage;

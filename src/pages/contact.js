import React from 'react';
import { Link } from 'gatsby';
import Global from "../components/Global"
import Layout from '../components/layout';
import styled from '@emotion/styled';

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

const FlexRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 700px;
  /* margin: 25px; */
`

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
    font-family: 'e2-Raleway-Bold';
    padding: 5px;
  }
  
  textarea {
    margin: 3px 0px;
    border-radius: 5px;
    font-family: 'e2-Raleway-Bold';
    padding: 5px 10px;
    height: 100px;
    line-height: 30px;
  }
`

const ContactPage = () => (
  <Global pageTitle={'Contact Us'} path={'contact'} description={'contact'}>
  <Layout>

    <StyledContactPage>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h2>We look forward to speaking!</h2>

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
          <textarea htmlFor="name"></textarea>
        </InputAndLabel>
      </FlexRow>

      <FlexRow>
        <p className="need-an-nda">Need an <a>NDA</a>?</p>
      </FlexRow>

      <FlexRow>
        <a>
          <button>Submit</button>
        </a>
      </FlexRow>
      <br />
      <br />
      <br />

      {/* <Link to="/">home</Link> */}
      <br />
      <br />
      <br />

      <h1>Location</h1>
      <h3>228 w 25th St, New York, NY 10001</h3>

      <br />
      <h1>Contact</h1>
      <h3>info@evaluates2.com</h3>
      <h3>(917) 745-3133</h3>
      <br />
      <br />
      <br />
      <br />

    </StyledContactPage>
    {/* <Link to="/page-p/">Page P</Link> */}
  </Layout>
  </Global>
);

export default ContactPage;
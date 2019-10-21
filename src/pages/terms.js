import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Global from "../components/Global";

const StyledTermsPage = styled.div`
font-family: 'e2-Raleway-Black';
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h1 {
    font-family: 'e2-Raleway-Black';
    font-size: 44px;
    max-width: 95vw;
    line-height: 140px;
    text-align: center;
    letter-spacing: 4px;
  }
  p {
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 2px;
    font-family: 'e2-Raleway';
  }
`;


const SectionHero = styled.div`
  height: 600px;
  min-height: 400px;
  line-height: 85px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  h1 {
  font-size: 100px;
 
    @media only screen and (max-width: 990px) {
      font-size: 80px;
    }

    @media only screen and (max-width: 660px) {
      font-size: 60px;
    }
  
  }
  p {
    font-size: 38px;
    opacity: 0.7;
    margin: 7px;
      opacity: 0.7;
      width: 80vw;
    min-width: 90%;
    text-align: center;
    line-height: 60px;

    @media only screen and (max-width: 990px) {
      font-size: 30px;
    }

    @media only screen and (max-width: 660px) {
      font-size: 24px;
    }

  }
`;

const TermsTextSection = styled.div`
  background-color: #000032;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 150px 100px 250px;

  h2 {
    text-align: left;
    width: 100%;
  }

  h1 {
    text-align: left;
    line-height: 60px;
    font-size: 50px;
    padding-bottom: 40px;
  }
  p {
    color: #c3c3c3;
    font-size: 20px;
    line-height: 40px;
    /* margin: 10px 50px; */
    text-align: left;
    width: 100%;
  }
`;

const TermsPage = () => (
  <Global pageTitle={'Terms'} path={'terms'} description={'terms'}>
    <Layout>
      <StyledTermsPage>

        <br />
        <br />
        <br />
        <br />


        <SectionHero>
          <h1>Our Terms</h1>
          <p>transparent and straightforward.</p>
        </SectionHero>
        <TermsTextSection>
          <h1>Evaluates2 Terms of Service</h1>
          <br />
          <p>
            Last updated: 10/20/2019
          </p>
          <br />

          <p>Evaluates2 ("us", "we", or "our") operates https://www.evaluates2.com (the
             "Site"). This page informs you of our policies regarding the collection, use and disclosure of
             Personal Information we receive from users of the Site.</p>

          <p>We use your Personal Information only for providing and improving the Site. By using the Site, you
             agree to the collection and use of information in accordance with this policy.</p>

          <h2>
            Information Collection And Use
          </h2>

          <p>

            While using our Site, we may ask you to provide us with certain personally identifiable information
            that can be used to contact or identify you. Personally identifiable information may include, but is not
            limited to your name ("Personal Information").
          </p>
          <h2>
            Log Data
          </h2>
          <p>

          Like many site operators, we collect information that your browser sends whenever you visit our Site
          ("Log Data").
          This Log Data may include information such as your computer's Internet Protocol ("IP") address,
          browser type, browser version, the pages of our Site that you visit, the time and date of your visit,
          the time spent on those pages and other statistics.
          In addition, we may use third party services such as Google Analytics that collect, monitor and
          analyze this …
  
          </p>
  
  <h2>
          Communications
  </h2>
  <p>
          We may use your Personal Information to contact you with newsletters, marketing or promotional
          materials.

  </p>
          <h2>
          Cookies
          </h2>
          <p>
          Cookies are files with small amount of data, which may include an anonymous unique identifier.
          Cookies are sent to your browser from a web site and stored on your computer's hard drive.
          Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all
          cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may
          not be able to use some portions of our Site.
          </p>
          <h2>
          Security
          </h2>
          <p>
          The security of your Personal Information is important to us, but remember that no method of
          transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to
          use commercially acceptable means to protect your Personal Information, we cannot guarantee its
          absolute security.
          </p>
          <h2>
          Changes To This Privacy Policy
          </h2>
          <p>
          This Privacy Policy is effective as of (add date) and will remain in effect except with respect to any
          changes in its provisions in the future, which will be in effect immediately after being posted on this
          page.
          We reserve the right to update or change our Privacy Policy at any time and you should check this
          Privacy Policy periodically. Your continued use of the Service after we post any modifications to the
          Privacy Policy on this page will constitute your acknowledgment of the modifications and your
          consent to abide and be bound by the modified Privacy Policy.
          If we make any material changes to this Privacy Policy, we will notify you either through the email
          address you have provided us, or by placing a prominent notice on our website.
          </p>
          <h2>
          Contact Us
          </h2>
          <p>
          If you have any questions about this Privacy Policy, please <Link to="/contact">contact us</Link>.
          </p>

        </TermsTextSection>

      </StyledTermsPage>

    </Layout>
  </Global>
);

export default TermsPage;
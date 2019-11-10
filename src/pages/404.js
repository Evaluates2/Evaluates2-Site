import React from 'react';
import Global from '../components/Global';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';

const Styled404Page = styled.div`

  background-color: #000032;
  width: 100%;
  min-height: 100vh;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(150px + 5vw) 0;

  h1#h404 {
    font-size: calc(35px + 4vw);
    line-height: calc(50px + 4vw);
    margin: calc(15px + 4vw);
  }

  p#p404 {
    font-size: calc(12px + 2.5vw);
    line-height: calc(40px + 2.5vw);
    margin: calc(15px + 4vw);
    opacity: 0.7;

  }

  /* margin: calc(100px + 40vw) 0; */
`;


const NotFoundPage = () => (
  <Global pageTitle={'404'} path={'/404'} description={'404 - Page Not Found'}>
    <Layout>
      <SEO title="404: Not found" />

      <Styled404Page>
        <h1 id="h404">Page Not Found!</h1>
        <p id="p404">Uh oh, there doesn't seem to be any page here!</p>
      </Styled404Page>
    </Layout>
  </Global>
);

export default NotFoundPage;

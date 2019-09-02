import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const StartupPage = () => (
  <Layout>
    <SEO title="Success Stories" />
    <h1>Success Stories</h1>
    <p>We have had many success stories here at Evaluates2. Here are just few...</p>

    <br/>
    <br/>
    <br/>

    <h1></h1>


    <Link to="/">home</Link>
    <br/>
    {/* <Link to="/page-p/">Page P</Link> */}
  </Layout>
);

export default StartupPage;

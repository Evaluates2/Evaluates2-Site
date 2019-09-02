import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const StartupPage = () => (
  <Layout>
    <SEO title="Our Values" />
    <h1>Our Values</h1>
    <p>We value things</p>

    
    <Link to="/">home</Link>
    <br/>
    {/* <Link to="/page-p/">Page P</Link> */}
  </Layout>
);

export default StartupPage;

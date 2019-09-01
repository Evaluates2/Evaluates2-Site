import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const StartupPage = () => (
  <Layout>
    <SEO title="Product Management" />
    <h1>Startup Page</h1>
    <p>startup page</p>
    <Link to="/">home</Link>
    <br/>
    <Link to="/page-p/">Page P</Link>
  </Layout>
);

export default StartupPage;

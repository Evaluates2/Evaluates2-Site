import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const EngineeringPage = () => (
  <Layout>
    <SEO title="Engineering" />
    <h1>Engineering</h1>
    <p>Welcome engineering</p>
    <Link to="/">home</Link>
    <br/>
    <Link to="/page-p/">Page P</Link>
  </Layout>
);

export default EngineeringPage;

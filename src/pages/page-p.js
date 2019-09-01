import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PPage = () => (
  <Layout>
    <SEO title="P Page" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-p/">Go back to the homepage</Link>
  </Layout>
);

export default PPage;

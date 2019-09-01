import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ProductManagementPage = () => (
  <Layout>
    <SEO title="Product Management" />
    <h1>Product Management</h1>
    <p>pm page</p>
    <Link to="/">home</Link>
    <br/>
    <Link to="/page-p/">Page P</Link>
  </Layout>
);

export default ProductManagementPage;

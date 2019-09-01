import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PPage = () => (
  <Layout>
    <SEO title="P Page" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">home</Link>
    <br/>
    <Link to="/page-p/">Page P</Link>
  </Layout>
);

// Def Method is a dedicated team of experienced web and mobile engineers with a focus on developing software solutions using Agile methodology, flexibility, and an open, transparent process. They are committed to hyperlocal development, supporting projects like High Line public park, NYC's Campaign Finance Board, the Museum of Modern Art, born-and-bred NYC like startups ArtsPool and PreeLine.

// Utilizing a talented team of both local and offshore engineers, Def Method is dedicated to keeping projects simple and efficient. Their engineers take the time to get to know the people involved in every step of the application development process and build strong lasting development partnerships with their customers.

export default PPage;

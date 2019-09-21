import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import 'semantic-ui-css/semantic.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <br />
    <br />
    <br />
    <h1>Together</h1>
    <h3>We will build something incredible.</h3>

    <Image>

    </Image>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <p>
      At Evaluates2 we offer strategic guidance in bringing new products to life
      that combines a unique and efficient approach to product management with
      software consulting service focused on excellence of code and product.
    </p>
    <br />
    <br />
    <br />
    <br />
    <h1>Engineering</h1>

    <h3>Staff Augmentation</h3>

    <h3>Top Engineering Talent</h3>

    <h3>Technical Audits</h3>

  <h2>

      Excellence of Code
  </h2>
      <br />
    <p>
      At Evaluates2, we focus on excellence in code. As such we emphasize the
      following values on all out projects:
    </p>
      <ul>
        <li>Test Driven Development</li>
        <li>Continuous Integration</li>
        <li>Staging and Production Environments</li>
        <li>Dependency Management and Upgrades.</li>
        <li>Readability and Clean Code</li>
      </ul>

    <br />
    <br />
    <br />
    <br />

    <h1>Product Management</h1>

    <h3>Resource Efficiency</h3>

    <h3>Process Improvements</h3>

    <h3>Project Management</h3>

      <h3>Workflows & Story Prioritization</h3>
    <p>
      Successful development starts with effective product management. Align
      your team and get successful project results with Evaluates2 Product
      Management. Our PMs will work with your team to find the process that
      works best for you. They will manage communication and make sure the team
      stays focused on delivering your goals.
    </p>

    <br />
    <br />
    <br />
    <br />

    <h1>Product Discovery</h1>

<h3>Design Sprint</h3>

<h3>MVP Build</h3>

<h3>Maintenance Mode</h3>

{/* <p> */}
  <h3>Workflows & Story Prioritization</h3>
  <p>

  Are you on the first stage of your project and are looking for a technical team to help bring your vision to life? Well, then, you've come to the right place! At Evaluates2 we have a process in place that makes building an MVP seamless, tested, and scalable. As founders, we know what it's like building a company and look forward to partnering with you to build yours! 
  </p>
{/* </p> */}


<br />
    <br />
    <br />
    <br />

    <Link to="/our-values/">Learn More about our core agile engineering values -></Link>

    <br />
    <br />

  </Layout>
);

export default IndexPage;

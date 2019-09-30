import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Img from 'gatsby-image';
import Global from "../components/Global"

const SuccessStoriesPage = () => (
  <Global pageTitle={'Success Stories'} path={'success-stories'} description={'success-stories'}>
    <h1>Success Stories</h1>
    <p>
      We have had many success stories here at Evaluates2. Here are just few of
      our happy clients...
    </p>
    <br />
    <h1>Kate From HR</h1>
    <h3>www.katefromhr.com</h3>
    <br />
    <br />
    <br />
    {'<Insert Kate From HR image here>'}
    <br />
    <br />
    <br />
    {/* <img src="./assets/images/gatsby-astronaut.png"></img> */}
    {/* <Img fluid="../../components/images/gatsby-astronaut.png"></Img> */}
    <h1>Wisdom of Jim Blog</h1>
    <h3>www.wisdomofjim.com</h3>
    <br />
    <br />
    <br />
    {'<Insert Wisdom of Jim image here>'}
    <br />
    <br />
    <br />
    <hr />
    ------------------
    <h1>Open Source Projects</h1>
    <h3>We love open source and contributing back to the coding community!</h3>
    <br />
    <br />
    <h1>Titanium Lambda</h1>
    <a href="">Check it out on Github</a>
    <br />
    <br />
    <p>
      Developed by Founder & Principle Architect Jim Lynch, Titanium Lambda is a
      guide for developing bulletproof enterprise-level serverless backend
      microservices on AWS Lambda (and can be applied to other serverless
      providers as well).
    </p>
    <br />
    <br />
    <br />
    <br />
    <br />

  </Global>
);

export default SuccessStoriesPage;

import React from 'react';
import { Link } from 'gatsby';
import Global from "../components/Global"
import Layout from '../components/layout';

const StartupPage = () => (
  <Global pageTitle={''} path={''} description={''}>
    <h1>We Look Forward To Speaking!</h1>
    {/* <p>You can contact us here:</p> */}

    <label for="name">Name</label>
    <input for="name"></input>

    <br/>
    <br/>
    <label for="email">Email</label>
    <input for="email"></input>
    <br/>
    <br/>
    <label for="message">Message</label>
    <textarea for="message"></textarea>
    <br/>
    <br/>
    <br/>

    <p>Need an <a>NDA</a>?</p>
    {/* <Link to="/">home</Link> */}
    <br/>
    <br/>
    <br/>

    <h1>Location</h1>
    <h3>228 w 25th St, New York, NY 10001</h3>
    
    <br/>
    <h1>Contact</h1>
    <h3>info@evaluates2.com</h3>
    <h3>(917) 745-3133</h3>
    <br/>
    <br/>
    <br/>
    <br/>

    {/* <Link to="/page-p/">Page P</Link> */}
  </Global>
);

export default StartupPage;

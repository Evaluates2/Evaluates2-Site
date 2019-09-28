import React from "react"
import { IntroContainer } from "./styles"

class Intro extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  componentDidMount() {
  }

  render() {
    return (
        <IntroContainer>
            <h1>Together</h1>
            <h3>We will build something incredible.</h3>

            <p>
            At Evaluates2 we offer strategic guidance in bringing new products to life
            that combines a unique and efficient approach to product management with
            software consulting service focused on excellence of code and product.
            </p>
            <h1>Engineering</h1>

            <h3>Staff Augmentation</h3>

            <h3>Top Engineering Talent</h3>

            <h3>Technical Audits</h3>

            <p>
            Excellence of Code
            <br />
            At Evaluates2, we focus on excellence in code. As such we emphasize the
            following values on all out projects:
            <ul>
                <li>Test Driven Development</li>
                <li>Continuous Integration</li>
                <li>Staging and Production Environments</li>
                <li>Dependency Management and Upgrades.</li>
                <li>Readability and Clean Code</li>
            </ul>
            </p>

            <h1>Product Management</h1>

            <h3>Resource Efficiency</h3>

            <h3>Process Improvements</h3>

            <h3>Project Management</h3>

            <p>
            <h3>Workflows & Story Prioritization</h3>
            Successful development starts with effective product management. Align
            your team and get successful project results with Evaluates2 Product
            Management. Our PMs will work with your team to find the process that
            works best for you. They will manage communication and make sure the team
            stays focused on delivering your goals.
            </p>

            <h1>Product Discovery</h1>

            <h3>Design Sprint</h3>

            <h3>MVP Build</h3>

            <h3>Maintenance Mode</h3>

            <p>
            <h3>Workflows & Story Prioritization</h3>
            Are you on the first stage of your project and are looking for a technical team to help bring your vision to life? Well, then, you've come to the right place! At Evaluates2 we have a process in place that makes building an MVP seamless, tested, and scalable. As founders, we know what it's like building a company and look forward to partnering with you to build yours! 
            </p>
        </IntroContainer>
    )
  }
}

export default Intro

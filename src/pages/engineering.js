import React, { useState } from 'react';
import { Link } from 'gatsby';
import Global from "../components/Global"
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import TechnicalAuditsImage from '../components/img-components/technical-audits.img.js';
import ResourceEfficiencyImage from '../components/img-components/resource-efficiency.img';
import StaffAugmentationImage from '../components/img-components/staff-augmentation.img';

const EngineeringPageContainer = styled.div`
  font-family: 'e2-Raleway-Black';
  background-color: #001a33;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'e2-Raleway-Black';
    font-size: 44px;
    max-width: 95vw;
    line-height: 140px;
    text-align: center;
    letter-spacing: 4px;
  }

  p {
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 2px;
    font-family: 'e2-Raleway';
  }
`;

const SectionHero = styled.div`
  height: 800px;
  min-height: 400px;
  line-height: 85px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    @media only screen and (min-width: 660px) {
      font-size: 95px;
      line-height: 150px;
    }
    
    @media only screen and (min-width: 990px) {
      font-size: 120px;
      line-height: 250px;
    }
  }

  p {
    @media only screen and (min-width: 660px) {
      font-size: 23px;
    }
    @media only screen and (min-width: 990px) {
      font-size: 30px;
    }
  }
`;

const StackableColumnsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const StackableColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  height: 100%;

  @media only screen and (max-width: 640px) {
    justify-content: flex-start;
  }

  h1 {
    font-family: 'e2-Raleway-Bold';
    font-size: 26px;
    max-width: 95vw;
    line-height: 60px;
    text-align: center;
    -webkit-letter-spacing: 4px;
    -moz-letter-spacing: 4px;
    -ms-letter-spacing: 4px;
    letter-spacing: 1.5px;
  }

  p {
    font-size: 15px;
    line-height: 22px;
    font-family: 'e2-Raleway-Light';
  }

  .gatsby-image-wrapper {
    height: auto;
    width: 40%;
  }
`;

const WorkTogetherSection = styled.div`
  padding: 5px;
  background-color: #001a33;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 60px 40px;

  h1 {
    line-height: 55px;
    text-align: left;
  }

  p {
    text-align: left;
    width: 100%;
  }
`;

const EngineeringPage = () => (
  <Layout>
    <SEO title="Engineering" />

    <EngineeringPageContainer>
      <SectionHero>
        <h1>Engineering</h1>
        <p>Code crafted with care.</p>
      </SectionHero>
      <WorkTogetherSection>
        <h1>Ways we can work together</h1>
        <p>...to get your products built.</p>
      </WorkTogetherSection>
      <StackableColumnsContainer>
        <StackableColumn>
          <TechnicalAuditsImage />
          <h1>Technical Audits</h1>
          <p>
            During the technical audit an Evaluates2 engineer will work with you
            to answer any technical questions you may have. For example they can
            focus on an assessment of the health of your current code base, work
            on estimating time & cost for new features you are looking to build,
            and they can offer general technical guidance for your technical
            decisions. Also, it's free! 😊
          </p>
        </StackableColumn>
        <StackableColumn>
          <StaffAugmentationImage />

          <h1>Staff Augmentation</h1>
          <p>
            Our NYC-based engineers will work on site with your team. By having
            our engineers in the office, you can experience information osmosis.
            In general working this way means that development can be more
            productive and the engineers can better understand the industry and
            overall company goals. Also, your team will benefit more from
            working with our engineers day-to-day, sharing knowledge with your
            team, build lasting relationships with junior and senior team
            members alike.
          </p>
        </StackableColumn>
        <StackableColumn>
          <ResourceEfficiencyImage />
          <h1>Resource Efficiency</h1>
          <p>
            We teach through example. When you work with Evaluates2 engineers
            they not only will move your product forward, but they will also
            work with your team to make strides with overall resource
            efficiency. This can be done through pair programming,
            implementation of agile process such as daily standups, or overall
            engineer management.
          </p>
        </StackableColumn>
      </StackableColumnsContainer>
      {/* <Link to="/">home</Link> */}
      {/* <br/> */}
      {/* <Link to="/page-p/">Page P</Link> */}
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <h1>Languages</h1>
      We're a test-obsessed team of polyglot engineers who strive to always use
      the best tools for the job. We specialize in functional programming, web
      development, and building out lean, lightning fast microservices.
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Clojure / ClojureScript</li>
        <li>Go</li>
        <li>Python</li>
        <li>Java</li>
        <li>C#</li>
      </ul>
      <h2>Choose Your Own Tech Stack Trio!</h2>
      The tech stack for any of our software projects generally includes a
      front-end, back-end, and a database. There are many options from which to
      choose, and if you are at all unsure we can help you decide which
      combination should fit best for your team and product. Of course these are
      not fully exhaustive lists of possible front-ends, backends, and
      databases, but these are the core competencies of the current Evaluates2
      team!
      <h2>Frontend Choices:</h2>
      <ul>
        <li>React (JavaScript or TypeScript)</li>
        <li>Angular (TypeScript)</li>
        <li>Reagent (ClojureScript)</li>
        <li>Vue (JavaScript)</li>
      </ul>
      <hr></hr>
      <h2>Backend Choices:</h2>
      <ul>
        <li>NodeJS (Express + JavaScript)</li>
        <li>NodeJS (Express + TypeScript)</li>
        <li>NodeJS (Serverless JavaScript)</li>
        <li>NodeJS (Serverless TypeScript)</li>

        <br />
        <li>NodeJS (Serverless ClojureScript)</li>
        <li>JVM CLojure (Pedastal or Ring)</li>

        <br />

        <li>Go (Revel)</li>

        <br />

        <li>Java (Spring / Spark)</li>
        <li>Java (Serverless Java)</li>

        <br />

        <li>Python (Python Flask / Django)</li>
        <li>Python (Serverless Python)</li>

        <br />

        <li>C# (C# with NancyFx)</li>
        <li>C# (Serverless C#)</li>
      </ul>
      <ul>
        <h2>Database Choices:</h2>

        <h4>NoSQL</h4>

        <li>MongoDB</li>
        <li>Datomic</li>
        <li>Redis</li>
        <li>Neo4J</li>
        <li>Cassandra</li>

        <h4>(Relational)</h4>

        <li>Postgres</li>
        <li>DynamoDB</li>
        <li>Google BigTable</li>
        <li>Amazon RDS</li>
        <li>MySQL</li>
      </ul>
      <Link to="/our-values/">
        Learn More about our core agile engineering values ->
      </Link>
      <br />
      <br />
    </EngineeringPageContainer>
  </Layout>
);

export default EngineeringPage;

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import theme from '../style/theme';
import { toggleDrawer as toggleDrawerAction } from '../state/app';
import Footer from './footer';
import TheDImage from './img-components/the-d.img';
import Link from 'gatsby-link';
import MobileHeader from './header';
import Drawer from './drawer';
import './layout.css';

const Container = styled.main`
  width: 100%;
  overflow-x: hidden;
`;

const Content = styled.section`
  transition: transform 0.3s ease-in-out;
  transform: perspective(200px)
    ${p =>
    p.isDrawerOpen
      ? `translateX(${p.theme.size(8)}) translateZ(-20px)`
      : 'none'};
  /* padding-top: ${p => p.theme.size(5)};
  padding-left: ${p => p.theme.size(1)};
  padding-right: ${p => p.theme.size(1)}; */
`;

const Overlay = styled.div`
  position: fixed;
  z-index: ${p => p.theme.zIndex.overlay};
  top: 0;
  left: 0;
  background: black;
  width: 100vw;
  height: 100vh;
  transition: opacity 0.3s ease-in-out;
  opacity: ${p => (p.isDrawerOpen ? 0.5 : 0)};
  pointer-events: ${p => (p.isDrawerOpen ? 'all' : 'none')};
`;

const StyledDImage = styled.div`
  transform: rotate(-90deg);
`

const VeryBottomFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  flex-direction: row;
  align-content: center;
  background-color: #000011;

  a {
      color: #777777;
      cursor: pointer;
      line-height: 1.3em;

      :hover {
          color: #f9f9f9f9;
      }

      @media only screen and (max-width: 660px) {
      font-size: 18px;
    }
  }
  
  p {
    color: #777777;
    font-family: 'e2-Raleway-Bold';

    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: calc(10px + 0.5vw);
    padding-right: 2vw;
    
  }
  
  .very-bottom-footer-item {
    display: flex;
    justify-content: center;
    /* padding: 0 1.5vw 10px; */
    font-size: calc(10px + 0.5vw);
    padding-right: 2vw;
    
    /* font-size: (10px + 0.5vw); */
  }
  
  a.orange-link {
    color: #FF7D00;

    :hover {
      color: #ffc892;
    }
  }

`;

const Layout = ({ children, isDrawerOpen, toggleDrawer }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Container>
          <Content isDrawerOpen={isDrawerOpen}>{children}</Content>
        </Container>
        <Overlay
          isDrawerOpen={isDrawerOpen}
          onClick={() => toggleDrawer(false)}
        />
        <Drawer />
        <div />
        <Footer>
          <div className="img-container">
            {/* <Link to='/'>
          <Link> */}
            <div className="footer-img">
              <StyledDImage>

                <TheDImage />
              </StyledDImage>
            </div>
            <h2>(evaluates2)</h2>
          </div>
          <div className="footer-grid-block footer-about">
            <h2>About</h2>
            <Link to='/about'>
              <a>About Us</a>
            </Link>
            <br />
            <Link to='/about#OUR_TEAM'>
              <a>Team</a>
            </Link>
            <br />
          </div>
          <div className="footer-grid-block footer-services">
            <h2>Services</h2>
            <Link to='/engineering'>
              <a>Engineering</a>
            </Link>
            <br />
            <Link to='/product-management'>
              <a>Product Management</a>
            </Link>
            <br />
            <Link to='/startup'>
              <a>Startup</a>
            </Link>
            <br />
            <Link to='/data-and-analytics'>
              <a>Data & Analytics</a>
            </Link>
            <br />
          </div>
          <div className="footer-grid-block footer-resources">
            <h2>Our Work</h2>
            <Link to='/our-work'>
              <a>Our Work</a>
            </Link>
            <br />
            <Link to='/our-work#OPEN_SOURCE'>
              Open Source
              <br />
            </Link>

          </div>
          <div className="footer-grid-block footer-contact">
            <h2>Contact</h2>
            <Link to='/contact'>
              Contact Us
            </Link>
            <br />
          </div>
        </Footer>

        <VeryBottomFooter>
          <Link to="/careers" className="very-bottom-footer-item orange-link">Careers</Link>
          <Link to="/terms" className="very-bottom-footer-item">Terms of Service</Link>

          <p>
            ©&nbsp;(Evaluates2)&nbsp;- {new Date().getFullYear()}
          </p>

        </VeryBottomFooter>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Layout);

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

import MobileHeader from './header';
import Drawer from './drawer';
import './layout.css';

const Container = styled.main`
  width: 100vw;
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

const VeryBottomFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  flex-direction: row;
  align-content: center;
  background-color: lightgoldenrodyellow;

  .very-bottom-footer-item {
    min-width: 170px;
    display: flex;
    justify-content: center;
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
        <MobileHeader siteTitle={data.site.siteMetadata.title} />

        <div />
        <Footer>
          <div className="img-container">
            <div className="footer-img">
              <TheDImage></TheDImage>
            </div>
            <h1>(evaluates2)</h1>
          </div>
          <div className="footer-about">
            <h1>About</h1>
            <a>Team</a>
          </div>
          <div className="footer-services">
            <h1>Services</h1>
            <a>Engineering</a>
            <br />
            <a>Product Management</a>
            <br />
            <a>MVP Development</a>
          </div>
          <div className="footer-resources">
            <h1>Resources</h1>
            <a>Articles</a>
            <br />
            <a>Blogs</a>
            <br />
            <a>MVP Development</a>
          </div>
          <div className="footer-contact">
            <h1>Contact</h1>
          </div>
        </Footer>

        <VeryBottomFooter>
          <div className="very-bottom-footer-item">Careers</div>
          <div className="very-bottom-footer-item">Terms of Service</div>
          <div className="very-bottom-footer-item">
            © <a href="https://www.evaluates2.io">Evaluates2</a>{' '}
            {new Date().getFullYear()}
          </div>
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

import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { toggleDrawer as toggleDrawerAction } from '../state/app';
import Hamburger from './hamburger';

const MenuIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${p => p.theme.size(1)};
  align-self: stretch;
  transition: right 0.3s ease-in-out;
  right: ${p => (p.isDrawerOpen ? p.theme.size(1) : `-${p.theme.size(4)}`)};

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const Navbar = styled.header`
  height: ${p => p.theme.size(4)};
  width: 100vw;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: ${p => p.theme.zIndex.header};
  top: 0;
  left: 0;
  /* padding-left: ${p => p.theme.size(0.5)}; */
  padding-left: 10px;
  background: ${p => p.theme.palette.primary.main};

  /* @media only screen and (min-width: 600px) {
    display: none;
  } */
`;

const DesktopNavbar = styled.header`
  height: ${p => p.theme.size(4)};
  width: 100vw;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: ${p => p.theme.zIndex.header};
  top: 0;
  left: 0;
  padding-left: ${p => p.theme.size(0.5)};
  background: ${p => p.theme.palette.primary.main};

  /* @media only screen and (max-width: 600px) {
    display: none;
  } */
`;

const DesktopLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  right: 0;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-start; */
  height: ${p => p.theme.size(4)};
  position: fixed;
  z-index: ${p => p.theme.zIndex.header + 25};
  top: 0;
  right: 0;
  flex: 1;
  width: 100%;

  /* @media only screen and (max-width: 600px) {
    display: none;
  } */

  .navbar-links {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
    margin: 20px;
  }

  .header-logo {
    flex: 1;
  }

`;

const Title = styled.h2`
  color: ${p => p.theme.palette.primary.contrast};
  padding-left: ${p => p.theme.size(4)};
  font-size: ${p => p.theme.size(1)};
  margin-bottom: 0;
  z-index: ${p => p.theme.zIndex.header + 10};
  white-space: nowrap;
  @media (min-width: 420px) {
    font-size: ${p => p.theme.size(2)};
  }
`;

import { Dropdown } from 'semantic-ui-react';

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
];

const DropdownExampleSelection = () => (
  <Dropdown
    placeholder="Select Friend"
    fluid
    selection
    options={friendOptions}
  />
);

// export default DropdownExampleSelection

const MobileHeader = ({ isDrawerOpen, toggleDrawer, siteTitle }) => (
  <div>
    <Top>
      {/* <Navbar isDrawerOpen={isDrawerOpen}> */}
      <div className="header-logo">
        <Link to="/" css={{ textDecoration: 'none' }}>
          <Title>{siteTitle}</Title>
        </Link>
        </div>
      {/* </Navbar> */}

      <DesktopLinks>
        {/* <div className="navbar-links"> */}
          <div>Hey</div>
          <div>Hi</div>

          <DropdownExampleSelection />
        {/* </div> */}
      </DesktopLinks>

      <MenuIcon
        isDrawerOpen={isDrawerOpen}
        href="#"
        onClick={() => toggleDrawer(!isDrawerOpen)}
      >
        <Hamburger />
      </MenuIcon>
    </Top>

    <DesktopNavbar />
  </div>
);

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(MobileHeader);

import React from "react";
import { DownArrow } from "styled-icons/boxicons-regular/DownArrow";
import styled from '@emotion/styled';

import { NavEntry, SubNav, NavLink, DesktopNavDiv, ParentNavLink } from "./styles"


const WrappedSubnav = styled.div`

  .blue-bg {
    background-color: #000032;
  }
  
`;

class Desktop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      divStyle: {}
    };

    this.window = window;
  
  }

  render() {

  return (
    <DesktopNavDiv>
       {this.props.nav.map(({node: { url, title, subNav }}) => (
      <NavEntry key={url}>
        {
          subNav.length ?
          <ParentNavLink to={url || subNav[0].url} title={title}>
            {title} {subNav.length ? <DownArrow size="0.5em" />:''}
          </ParentNavLink>:
          <NavLink to={url || subNav[0].url} title={title}>
            {title} {subNav.length ? <DownArrow size="0.5em" />:''}
          </NavLink> 
        }
        
        <WrappedSubnav>
        {subNav.length > 0 && (
          <SubNav className={this.window.location.pathname === '/about' || this.window.location.pathname === '/our-work' ? 'blue-bg' : ''}>
            {subNav.map(item => (
              <NavLink
              key={item.url}
              to={item.url}
              title={item.title}
              >
                {item.title}
              </NavLink>
            ))}
          </SubNav>
        )}
        </WrappedSubnav>
      </NavEntry>
      ))}
    </DesktopNavDiv>
    )
  }

}

export default Desktop;
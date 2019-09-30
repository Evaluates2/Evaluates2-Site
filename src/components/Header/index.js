import React from "react"
// import styled from "styled-components";
import styled from '@emotion/styled';
import Headroom from "react-headroom";

import { StaticQuery } from "gatsby";
import Nav from "../Nav";
import { HeaderContainer, Logo, SiteTitle, Img, Label } from "./styles"

const ColoredHeader = styled.div`
  .blue-header {
    background-color: #000032;
  }
`;

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      divStyle: {}
    };

    this.window = window;
  }

  componentDidMount() {
    var prevScrollpos = window.pageYOffset;
    var fromTopPx = 250;
    var _this = this
    window.onscroll = function () {
      var scrolledFromtop = window.scrollY;
      if (scrolledFromtop > fromTopPx) {
        _this.setState({
          divStyle: { backgroundColor: "rgb(0, 0, 50) !important" }
        })
      } else {
        _this.setState({
          divStyle: {}
        })
      }
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementsByTagName("header")[0].style.top = "0px"
      } else {
        document.getElementsByTagName("header")[0].style.top = "-300px"
      }
      prevScrollpos = currentScrollPos;
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query LOGO_IMAGE_QUERY {
            file(relativePath: { eq: "logo.png" }) {
              childImageSharp {
                fixed(width: 1000) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <Headroom css="z-index: 20;">
            <ColoredHeader >
              <HeaderContainer css={this.state.divStyle} className={this.window.location.pathname === '/about' ? 'blue-header' : ''}>
                <SiteTitle to="/" rel="home">
                  <Img fixed={data.file.childImageSharp.fixed} />
                  <Label>
                    (evaluates2)
                  </Label>
                </SiteTitle>
                <Nav />
              </HeaderContainer>
            </ ColoredHeader>
          </Headroom>
        )
        }
      />
    )
  }
}

export default Header;

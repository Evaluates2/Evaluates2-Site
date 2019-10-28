import React from "react";
import styled from '@emotion/styled';
import Headroom from "react-headroom";

import { StaticQuery } from "gatsby";
import Nav from "../Nav";
import { HeaderContainer, Logo, SiteTitle, Img, Label } from "./styles"
import TheDImage from '../img-components/the-d.img';

const ColoredHeader = styled.div`
  .blue-header {
    background-color: #000032;
  }
`;

const StyledDImage = styled.div`
  transform: rotate(-90deg);
  min-width: 50px;
  min-height: 50px;
`

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      divStyle: {},
      window: undefined
    };

  }
  
  componentWillMount() {

  }

  componentDidMount() {
    this.setState(window)
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
            file(relativePath: { eq: "the-d-rotated.png" }) {
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
              <HeaderContainer css={this.state.divStyle} className={this.state.window ? this.state.window.location.pathname === '/about' || this.state.window.location.pathname === '/our-work' || this.state.window.location.pathname.indexOf('/team') !== -1 ? 'blue-header' : '' : ''}>
                <SiteTitle to="/" rel="home">
                  <StyledDImage>
                    <TheDImage />
                  </StyledDImage>
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

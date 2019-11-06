import React from "react";
import styled from '@emotion/styled';
import Headroom from "react-headroom";

import { StaticQuery } from "gatsby";
import Nav from "../Nav";
import { Logo, SiteTitle, Img, Label } from "./styles"
import TheDImage from '../img-components/the-d.img';
import mediaQuery from "../../utils/mediaQuery"

export const HeaderContainer = styled.header` 

  background-color: ${props => (props.path === "/about/" || props.path === "/about" || props.path === "/our-work/" || props.path === "/our-work" || props.path.toString().indexOf("/team") !== -1) ? '#000032' : "rgba(0,0,0,0)"};

  transition: top 1s linear;
  transition: opacity 0 linear;
  padding: 20px;
  position: fixed;
  width: 100%;
  display: grid;
  grid-gap: calc(10px);
  align-items: center;
  justify-items: center;
  grid-template-areas: "nav title social search";
  grid-template-columns: auto 1fr auto auto;
  font-weight: bold;
  ${mediaQuery.minNetbook} {
    grid-template-areas: "title nav social search";
  };
  

`

const ColoredHeader = styled.div`

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
          divStyle: {}
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
              <HeaderContainer path={this.state.window ? this.state.window.location.pathname : {path: ''}}>
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

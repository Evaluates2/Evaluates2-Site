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

const StyledLabel = styled(Label)`
  font-family: 'e2-Raleway-Bold';
`

import { Link } from "gatsby"
import Image from 'gatsby-image'
import mediaQuery from "../../utils/mediaQuery"
import Owl from "../../assets/logo"


export const Img = styled(Image)`
  width: 70px;
  height: 70px;
  color: #0fdde8;
  transition: ease-in-out;
  margin-bottom: 0.3em;
  transform: rotate(-90deg);
  ${mediaQuery.maxNetbook} {
    width: 40px;
    height: 40px;
  }
`

export const Label = styled.div`
  color: white;

  line-height: 25px;
  ${mediaQuery.maxNetbook} {
    font-size: 20px;
  }
`

export const HeaderContainer = styled.header`  
  :not(.transparent) {
    background-color: ${props => props.theme.darkBlue};

  }
  .transparent {
    background-color: rgba(0,0,0,0);
  }
  
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

export const SiteTitle = styled(Link)`
  grid-area: title;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 19px;
  color: white;
  background-color: transparent;
  transition: ${props => props.theme.shortTrans};
  ${mediaQuery.minTablet} {
    grid-auto-flow: column;
  }
  div {
    font-size: 30px;
  }

  a {
    max-height: 250px;
  }
`

export const Logo = styled(Owl)`
  height: 3em;
  width: 3em;
  object-position: top;
  border-radius: 50%;
  background: white;
  padding: 0.1em;
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
                  <StyledLabel>
                    (evaluates2)
                  </StyledLabel>
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

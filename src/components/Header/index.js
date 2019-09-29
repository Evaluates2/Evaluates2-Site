import React from "react"
import Headroom from "react-headroom"
import {StaticQuery} from "gatsby"
import Nav from "../Nav"
import { HeaderContainer, Logo, SiteTitle, Img, Label } from "./styles"

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      divStyle: {}
    };
  }

  componentDidMount() {
    var prevScrollpos = window.pageYOffset;
    var fromTopPx = 250; 
    var _this = this
    window.onscroll = function() {
      var scrolledFromtop = window.scrollY;
      if(scrolledFromtop > fromTopPx){
        _this.setState({
          divStyle: {backgroundColor: "rgb(0, 0, 50) !important"}
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
            <HeaderContainer css={this.state.divStyle}>
              <SiteTitle to="/" rel="home">
                <Img fixed={data.file.childImageSharp.fixed} />
                <Label>
                  (evaluates2)
                </Label>
              </SiteTitle>
              <Nav />
            </HeaderContainer>
          </Headroom>
        )}
      />
    )
  }
}

export default Header

import React from "react"
import Headroom from "react-headroom"
import {StaticQuery} from "gatsby"
import Nav from "../Nav"
import { HeaderContainer, Logo, SiteTitle, Img } from "./styles"
const Header = ({ site }) => (
  <StaticQuery
        query={graphql`
          query LOGO_IMAGE_QUERY {
            file(relativePath: { eq: "logo.png" }) {
              childImageSharp {
                fixed(width: 400) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <Headroom css="z-index: 3;">
            {console.log(data)}
            <HeaderContainer>
              <SiteTitle to="/" title={site.title} rel="home">
                <Img fixed={data.file.childImageSharp.fixed} />
                  <div>
                    def<br/>method()
                  </div>
              </SiteTitle>
              <Nav />
            </HeaderContainer>
          </Headroom>
        )}
    />
)

export default Header

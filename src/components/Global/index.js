import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"

import SEO from "../seo"
import Header from "../Header"
import theme from "../../utils/theme"
import Scroll from "../Scroll"

import { GlobalStyle } from "./styles"

const Global = ({ children, site, path, ...rest }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO site={site.meta} {...rest} />
      <GlobalStyle />
        <Header site={site.meta} path={path} />
      {children}
      <Scroll showBelow={1500} css="position: fixed; right: 1em;" />
    </>
  </ThemeProvider>
)

Global.propTypes = {
  children: PropTypes.node.isRequired,
}

const query = graphql`
  {
    site {
      meta: siteMetadata {
        title
        url
        description
      }
    }
  }
`

export default props => (
  <StaticQuery query={query} render={data => <Global {...data} {...props} />} />
)

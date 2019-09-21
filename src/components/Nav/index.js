import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"

import mediaQuery from "../../utils/mediaQuery"

import MobileNav from "./Mobile"
import DesktopNav from "./Desktop"

export { navLinkStyle, NavLink } from "./styles"

const Nav = props => {
  if (typeof window !== `undefined`) {
    const query = window.matchMedia(mediaQuery.maxNetbookJs)
    const [mobile, setMobile] = useState(query.matches ? true : false)
    useEffect(() => {
      const handleMatch = mq => setMobile(mq.matches ? true : false)
      query.addListener(handleMatch)
      return () => query.removeListener(handleMatch)
    })
    return mobile ? <MobileNav {...props} /> : <DesktopNav {...props} />
  } else return null
}
const query = graphql`
  query SidebarItemsQuery {
    allNavbarItemsJson {
      edges {
        node {
          url
          title
          subNav {
            url
            title  
          }
        }
      }
    }
  }
`
export default props => (
  <StaticQuery
    query={query}
    render={ data  => {
      return <Nav nav={data.allNavbarItemsJson.edges} role="navigation" />
    }}
  />
)
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

export default function SEO({ site, pageTitle, path = ``, ...rest }) {
  const { description, children } = rest
  const title = pageTitle ? pageTitle : "Evaluates2"
  const pageUrl = "www.evaluates2.com" + path
  const desc = description
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:type" name="viewport" content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      <html lang="en" />
      {pageTitle && <meta property="og:title" content={pageTitle} />}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:description" content={desc} />
      <meta name="description" content={desc} />
      {children}
    </Helmet>
  )
}


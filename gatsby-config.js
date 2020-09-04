require('dotenv').config({
  path: `.env.development`,
});

module.exports = {
  pathPrefix: '/Evaluates2-Site',
  siteMetadata: {
    title: `Evaluates2`,
    description: `Official Site for the software consultancy, Evaluates2.`,
    author: `Jim Lynch (jim.lynch@evaluates2.com)`,
    url: `https://evaluates2.com`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/team/*`] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-emotion',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'aaa-evaluates2-site-production',
        protocol: "https",
        hostname: "www.evaluates2.com",
        generateRoutingRules: true,
        generateIndexPageForRedirect: true
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};

/* eslint quotes: [2, "backtick"] */
module.exports = {
  siteMetadata: {
    title: `Advice from an Unsuccessful`,
    description: `Static blog using React and Material-UI.`,
    author: `@nakolean@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `advice-from-an-unsuccessful`,
        short_name: `unsuccessful-advice`,
        start_url: `/`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@Theme": `src/theme`,
          "@Navigation": `src/components/Navigation`
        },
        extentions: [
          `js`
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // `gatsby-plugin-offline`,
  ],
}

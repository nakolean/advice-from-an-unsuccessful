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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
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
          "@Navigation": `src/components/Navigation`,
          "@Layout": `src/components/Layout`,
          "@Post": `src/components/Post`,
        },
        extentions: [
          `js`,
          `jsx`
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // `gatsby-plugin-offline`,
  ],
}

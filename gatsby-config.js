/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  //always make sure the properties you are adding match whatever you have in the list
  plugins: [`gatsby-plugin-styled-components`],
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'random description',
    author : '@kichwakubwa',
    data: ['item1', 'item 400'],
    person: {name : 'jonte', age : '45'}
  }
}

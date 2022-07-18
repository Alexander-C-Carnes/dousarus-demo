/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    // {
    //   type: 'link',
    //   href: '/latest/graphql/cloud/index',
    //   label: 'Hasura Cloud',
    // },
    {
      type: 'category',
      label: 'Firebolt Documentation',
      // link: {
      //   type: 'doc',
      //   id: 'graphql/core/index',
      // },
      items: [
        { type: 'autogenerated', dirName: 'firebolt' }
      ],
    },
    // { type: 'autogenerated', dirName: 'graphql/core' },
  ],
  cloudDocsSidebar: [
    // {
    //   type: 'link',
    //   href: '/latest/graphql/core/index',
    //   label: 'Hasura GraphQL Engine',
    // },
    {
      type: 'category',
      label: 'Firebolt API',
      // link: {
      //   type: 'doc',
      //   id: 'graphql/cloud/index',
      // },
      items: [
        { type: 'autogenerated', dirName: 'fireboltAPI' }
      ],
    },
    // { type: 'autogenerated', dirName: 'graphql/cloud' }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;

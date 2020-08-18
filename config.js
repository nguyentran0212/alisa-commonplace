const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://alisa.nk-tran.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://alisa.nk-tran.com',
    title:
      "Alisa's Notebook",
    githubUrl: 'https://github.com/nguyentran0212/alisa-commonplace',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: '', link: '' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "Alisa's Notebook",
  },
  siteMetadata: {
    title: 'Commonplace Book | Alisa',
    description: 'Commonplace Book of Alisa',
    ogImage: null,
    docsLocation: 'https://github.com/nguyentran0212/alisa-commonplace/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;

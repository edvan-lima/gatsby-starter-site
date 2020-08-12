const meta = {
  // Metadata
  siteTitle: 'ED. - Creative Web Designer',
  siteDescription:
    'ED. - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'ED.',
  siteShortName: 'ED.',
  siteUrl: 'http://localhost', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@ed',
};

const repo = {
  pathPrefix: '/gatsby-starter-site',
};

const website = {
  ...repo,
  ...meta,
  ...social,
  disqusShortName: 'ed',
  googleAnalyticsID: 'UA-99999999-1',
  // Manifest
  themeColor: '#383838',
  backgroundColor: '#383838',
};

module.exports = website;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.exploratours.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};

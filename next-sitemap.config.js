// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://streple.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/*?s='],  // ⬅️ block search query pages
      },
    ],
  },
};

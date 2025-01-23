const articles = require('./src/data/articles.tsx');
const frameworks = require('./src/data/frameworks.tsx');

async function getDynamicPaths() {
  let paths = [];

  frameworks.default.forEach(framework => {
    paths.push({
      loc: `/frameworks/${framework.link}`,
    });
  });
  
  articles.default.forEach(article => {
    paths.push({
      loc: `/articles/${article.link}`,
    });
  })

  return paths;
}

module.exports = {
    siteUrl: 'https://www.csseducteur.com',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    additionalPaths: async (config) => {
      return await getDynamicPaths();
    } 
  };  
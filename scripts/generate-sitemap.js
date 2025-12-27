const fs = require('fs');
const path = require('path');
const config = require('../config/siteConfig').default;

const DOMAIN = config.site.url;

function generateSitemap() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const postFiles = fs.readdirSync(postsDirectory);

  // Static pages
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/components', priority: '0.6', changefreq: 'monthly' }
  ];

  // Dynamic blog post pages
  const postPages = postFiles
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(postsDirectory, file);
      const stats = fs.statSync(filePath);
      const lastmod = stats.mtime.toISOString().split('T')[0];

      return {
        url: `/post/${slug}`,
        priority: '0.7',
        changefreq: 'monthly',
        lastmod
      };
    });

  const allPages = [...staticPages, ...postPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${DOMAIN}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

  console.log('✓ Sitemap generated successfully at public/sitemap.xml');
  console.log(`✓ Added ${allPages.length} URLs to sitemap`);
}

generateSitemap();

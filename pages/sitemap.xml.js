import { getUsers, getPosts } from "@/lib/wordpress";

const Sitemap = () => {};

const sitemapGenerator = (url, date) => {
  return `<url>
    <loc>https://aaiga.com.au${url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
</url>`;
};

export const getServerSideProps = async ({ res }) => {
  const articlesData = await getPosts();
  const authorsData = await getUsers();

  const articles = articlesData.posts.nodes;
  const authors = authorsData.nodes;

  const articlesSitemap = articles
    .map((article) =>
      sitemapGenerator(`/articles/${article.slug}`, article.date)
    )
    .join("");

  const authorsSitemap = authors
    .map((author) =>
      sitemapGenerator(`/authors/${author.slug}`, new Date().toISOString())
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://aaiga.com.au</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://aaiga.com.au/articles</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    ${articlesSitemap}
    <url>
        <loc>https://aaiga.com.au/authors</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    ${authorsSitemap}
    <url>
        <loc>https://aaiga.com.au/contact</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;

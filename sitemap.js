const fs = require("fs");
const pages = require("./pages.json");

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

pages.forEach(p => {
  xml += `
<url>
<loc>https://YOURUSERNAME.github.io/stormhammer-seo/${p}</loc>
</url>`;
});

xml += `</urlset>`;

fs.writeFileSync("sitemap.xml", xml);

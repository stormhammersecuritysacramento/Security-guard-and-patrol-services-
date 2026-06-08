const fs = require('fs');
const data = require('./data.json');
const template = fs.readFileSync('template.html', 'utf8');

// Ensure public folder is clean
if (fs.existsSync('./public')) fs.rmSync('./public', { recursive: true });
fs.mkdirSync('./public');

data.cities.forEach(city => {
  data.painPoints.forEach(pain => {
    data.industries.forEach(industry => {
      const slug = `${city}-security-guard-patrol-services-${pain}-at-${industry}`;
      const page = template
        .replace(/{{CITY}}/g, city.replace(/-/g, ' '))
        .replace(/{{PAIN_POINT}}/g, pain.replace(/-/g, ' '))
        .replace(/{{INDUSTRY}}/g, industry.replace(/-/g, ' '));

      const dir = `./public/${slug}`;
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(`${dir}/index.html`, page);
    });
  });
});
console.log("Successfully generated all pages!");

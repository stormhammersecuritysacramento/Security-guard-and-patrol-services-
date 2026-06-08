const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

if (!fs.existsSync('./public')) fs.mkdirSync('./public');

data.cities.forEach(city => {
  data.painPoints.forEach(pain => {
    data.industries.forEach(industry => {
      const slug = `${city}-${pain}-${industry}`;
      const page = template
        .replace(/{{CITY}}/g, city)
        .replace(/{{PAIN_POINT}}/g, pain)
        .replace(/{{INDUSTRY}}/g, industry);
      
      const dir = path.join('./public', slug);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), page);
    });
  });
});
console.log("Success!");

const fs = require('fs');
const path = require('path');

// THIS IS THE FIX: __dirname is the absolute path to the directory 
// where this script (generate.js) is running.
const dataPath = path.join(__dirname, 'data.json');
const templatePath = path.join(__dirname, 'template.html');

console.log("Looking for data.json at:", dataPath);

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const template = fs.readFileSync(templatePath, 'utf8');

// ... rest of your code ...

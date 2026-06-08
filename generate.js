const fs = require('fs');
const path = require('path');

// DEBUG: Print current directory and files
console.log("Current Directory:", __dirname);
console.log("Files in directory:", fs.readdirSync(__dirname));

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

// ... rest of your code ...

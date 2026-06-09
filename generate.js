const fs = require("fs");
const data = require("./data.json");

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function slug(text) {
  return text.toLowerCase().replace(/ /g, "-");
}

let pages = [];

for (let i = 0; i < 1000; i++) {

  const city = random(data.cities);
  const property = random(data.properties);
  const service = random(data.services);
  const problem = random(data.problems);
  const street = random(data.streets);

  const html = `
<!DOCTYPE html>
<html>
<head>
<title>${service} in ${city} | StormHammer Security</title>
<meta name="description" content="${service} for ${property} in ${city} near ${street}. Prevent ${problem}. Call StormHammer Security.">
</head>

<body style="font-family: Arial; max-width: 900px; margin: auto; padding: 40px;">

<h1>${service} in ${city}, CA</h1>

<p>
StormHammer Security provides ${service} for ${property} in ${city} near ${street}.
We reduce ${problem} through consistent patrol coverage.
</p>

<h2>Why Properties Choose Us</h2>
<ul>
<li>24/7 patrol presence</li>
<li>Crime deterrence for ${problem}</li>
<li>Local Sacramento security team</li>
</ul>

<a href="tel:5309029390">Call Dispatch</a><br>
<a href="mailto:stormhammer.security.sacramento@gmail.com">Request Service</a>

</body>
</html>
`;

  const fileName = `pages/page-${i}-${slug(city)}.html`;

  fs.writeFileSync(fileName, html);
  pages.push(fileName);
}

fs.writeFileSync("pages.json", JSON.stringify(pages, null, 2));

console.log("Done:", pages.length);

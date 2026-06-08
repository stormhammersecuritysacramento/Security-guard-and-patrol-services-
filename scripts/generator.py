import pandas as pd
import os, shutil

# 1. Setup folders
if os.path.exists('docs'): shutil.rmtree('docs')
os.makedirs('docs')

# 2. Read data
df = pd.read_csv('data/pages.csv')

# 3. Define the HTML structure directly here (No external files needed)
html_template = """
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <title>{{ title }} | StormHammer Security</title>
</head>
<body>
    <h1>{{ heading }} in {{ location }}</h1>
    <p>Professional {{ service }} for your property.</p>
    <p>Contact: 530-902-9390</p>
    <a href='index.html'>Back to Home</a>
</body>
</html>
"""

# 4. Generate Files
from jinja2 import Template
template = Template(html_template)

for _, row in df.iterrows():
    filename = f"docs/{row['filename']}.html"
    with open(filename, 'w') as f:
        f.write(template.render(row=row))

# 5. Generate index.html
with open('docs/index.html', 'w') as f:
    f.write("<h1>StormHammer Security Services</h1><ul>")
    for _, row in df.iterrows():
        f.write(f"<li><a href='{row['filename']}.html'>{row['title']}</a></li>")
    f.write("</ul>")

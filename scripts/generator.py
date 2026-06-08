import pandas as pd
from jinja2 import Template
import os, shutil

# Create docs folder
if os.path.exists('docs'): shutil.rmtree('docs')
os.makedirs('docs')

# Read data from the data folder
df = pd.read_csv('data/pages.csv')

# Load the template - we will look in the 'templates' folder specifically
template_path = os.path.join('templates', 'template.html')
with open(template_path, 'r') as f:
    template = Template(f.read())

# Generate files
for _, row in df.iterrows():
    filename = f"docs/{row['filename']}.html"
    with open(filename, 'w') as f:
        f.write(template.render(row=row))

# Generate simple index.html so you don't get 404s
with open('docs/index.html', 'w') as f:
    f.write("<h1>Service Pages</h1><ul>")
    for _, row in df.iterrows():
        f.write(f"<li><a href='{row['filename']}.html'>{row['title']}</a></li>")
    f.write("</ul>")

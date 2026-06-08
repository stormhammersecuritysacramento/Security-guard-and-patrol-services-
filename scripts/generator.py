import pandas as pd
from jinja2 import Template
import os, shutil

if os.path.exists('docs'): shutil.rmtree('docs')
os.makedirs('docs')

df = pd.read_csv('data/pages.csv')
with open('templates/template.html') as f:
    template = Template(f.read())

for _, row in df.iterrows():
    with open(f"docs/{row['filename']}.html", 'w') as f:
        f.write(template.render(row=row))

import os, shutil

# 1. Setup folders
if os.path.exists('docs'): shutil.rmtree('docs')
os.makedirs('docs')

# 2. Define your data manually inside the script (100% reliable, no CSV errors)
pages = [
    {"filename": "sacramento-firewatch-apartments", "title": "Firewatch in Sacramento", "heading": "Firewatch", "location": "Sacramento", "service": "Firewatch"},
    {"filename": "roseville-patrol-retail", "title": "Patrol in Roseville", "heading": "Patrol", "location": "Roseville", "service": "Patrol"}
]

# 3. HTML Structure
template = """
<!DOCTYPE html>
<html>
<head><title>{title} | StormHammer</title></head>
<body>
    <h1>{heading} in {location}</h1>
    <p>Professional {service} services.</p>
    <a href='index.html'>Back to Home</a>
</body>
</html>
"""

# 4. Generate Pages
for p in pages:
    with open(f"docs/{p['filename']}.html", 'w') as f:
        f.write(template.format(**p))

# 5. Generate index.html
with open('docs/index.html', 'w') as f:
    f.write("<h1>StormHammer Services</h1><ul>")
    for p in pages:
        f.write(f"<li><a href='{p['filename']}.html'>{p['title']}</a></li>")
    f.write("</ul>")


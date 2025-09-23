# import requests
# from bs4 import BeautifulSoup

# url = "https://www.codewithharry.com/blog?page=7"

# r = requests.get(url)
# # print(r.text)

# soup = BeautifulSoup(r.text, 'html.parser')

# for heading in soup.find_all("h2"):
#     print(heading.text)

# # print(soup.prettify())


# Save this as: blog_scraper.py

import requests
from bs4 import BeautifulSoup

url = "https://www.codewithharry.com/blog?page=7"

r = requests.get(url)

soup = BeautifulSoup(r.text, 'html.parser')

for heading in soup.find_all("h2"):
    print(heading.text.strip())

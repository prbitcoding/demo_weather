import requests
from bs4 import BeautifulSoup

url = "https://www.codewithharry.com/blog?page=7"

r = requests.get(url)
# print(r.text)

soup = BeautifulSoup(r.text, 'html.parser')

print(soup.prettify())
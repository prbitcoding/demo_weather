from bs4 import BeautifulSoup
import requests

url = "https://epaper.indiatimes.com/timesepaper/publication-the-times-of-india,city-delhi.cms"
response = requests.get(url)

soup = BeautifulSoup(response.text, "html.parser")
print(soup)
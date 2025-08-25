import re

pattern = r"[A-Z]ind"

text = '''
Please use the search box at the top of this page or the links to the right. Feel free to subscribe to our syndicated feeds.
Using?
To fulfill the free license requirements, please read our  Rind TindReuse guide. You can also request a file.
Identifying?
Have a browse through Category:Unidentified subjects. If you Find something you can identify, adjust the file's categories and depicts statements in structured data.
Creating?
Check out all you need to know at our Contributing your own work guide.
and more!
Discussion?
See the list of discussion pages.
To explore more ways you can contribute to this project, Cind Kind check out the Community Portal.'''

# match = re.search(pattern, text)
# print(match)

matches = re.finditer(pattern, text)
 
for match in matches:
    print(match.span())
    print(text[match.span()[0]: match.span()[1]])

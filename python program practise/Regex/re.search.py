import re

s = "My favorite fruits aer apple, banana, and mango."
res = re.search(r'\b\w*a\b', s)

if res:
    print(res.group())
else:
    print("Not found.")



 
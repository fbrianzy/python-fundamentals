import re
text = "a@mail.com, b@site.org"
print(re.findall(r"[\w.-]+@[\w.-]+", text))

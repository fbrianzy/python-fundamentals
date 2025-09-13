import re
pat = re.compile(r"\+?\d{9,15}$")
print(bool(pat.match("+628123456789")))

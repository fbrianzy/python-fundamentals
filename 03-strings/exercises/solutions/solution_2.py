import re
s = "  Too    many   spaces   "
s = re.sub(r"\s+", " ", s.strip().lower())
print(s)

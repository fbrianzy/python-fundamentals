from datetime import datetime
s = "2025-09-13"
d = datetime.strptime(s, "%Y-%m-%d")
print(d.strftime("%d %b %Y"))

import re
m = re.search(r"(\d+)", "Order #12345 confirmed")
print(m.group(1))

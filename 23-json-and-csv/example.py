import json, csv, io

data = {"name":"Alex","age":30}
s = json.dumps(data)
print(s)

rows = [["name","score"],["alex",95],["dana",90]]
buf = io.StringIO()
writer = csv.writer(buf)
writer.writerows(rows)
print(buf.getvalue())

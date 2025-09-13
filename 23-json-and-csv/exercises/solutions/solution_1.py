import json
obj = {"x":1}
with open("data.json","w") as f: json.dump(obj,f)
with open("data.json") as f: obj2=json.load(f)
obj2["x"] += 1
with open("data.json","w") as f: json.dump(obj2,f)

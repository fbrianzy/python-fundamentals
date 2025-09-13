# urllib example (no external dependency)
from urllib.request import urlopen
import json
try:
    with urlopen("https://api.github.com") as resp:
        data = json.loads(resp.read().decode())
        print(list(data.keys())[:5])
except Exception as e:
    print("Network issue or blocked:", e)

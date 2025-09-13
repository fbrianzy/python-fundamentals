from pathlib import Path
p = Path("log.txt")
with p.open("a", encoding="utf-8") as f:
    f.write("line\n")
print(p.read_text(encoding="utf-8"))

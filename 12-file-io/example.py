from pathlib import Path

p = Path("demo.txt")
p.write_text("Hello file\n", encoding="utf-8")
print(p.read_text(encoding="utf-8"))

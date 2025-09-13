from pathlib import Path
src, dst = Path("a.txt"), Path("b.txt")
dst.write_text(src.read_text(encoding="utf-8"), encoding="utf-8")

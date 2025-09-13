const courseData = {
    "01-getting-started": {
        title: "Getting Started",
        description: "Install Python, run a script, and use the interactive REPL. Confirm your environment and version.",
        objectives: [
            "Install Python and verify version",
            "Run a .py file",
            "Use the REPL",
            "Understand shebang and script entry points"
        ],
        example: `print("Hello, Python Fundamentals!")
import sys
print("Python version:", sys.version.split()[0])`,
        exercises: [
            "Print your Python version and platform.",
            "Create a script that reads your name with input() and prints a greeting."
        ],
        solutions: [
            `import sys, platform
print(sys.version)
print(platform.platform())`,
            `name = input("Your name: ")
print(f"Welcome, {name}!")`
        ]
    },
    "02-variables-and-data-types": {
        title: "Variables and Data Types",
        description: "Understand names, assignment, and built-in types such as int, float, bool, str, and None.",
        objectives: [
            "Immutable vs mutable",
            "Dynamic typing",
            "Type conversion",
            "id() and is vs ==",
            "Truthiness"
        ],
        example: `x = 42
y = 3.14
flag = True
text = "python"
n = None

print(type(x), x)
print(type(y), y)
print(type(flag), flag)
print(type(text), text)
print(type(n), n)

print(bool(0), bool(1), bool(""), bool("x"))`,
        exercises: [
            "Demonstrate converting between int, float, and str.",
            "Show examples of truthy and falsy values by filtering a list."
        ],
        solutions: [
            `a = 5
print(float(a), str(a), int("12"))`,
            `items = [0, 1, "", "text", [], [1], None, True]
filtered = [i for i in items if i]
print(filtered)`
        ]
    },
    "03-strings": {
        title: "Strings",
        description: "Work with strings: slicing, methods, formatting, and f-strings.",
        objectives: [
            "Indexing and slicing",
            "Common methods",
            "f-strings",
            "join/split",
            "immutability"
        ],
        example: `s = "Python Fundamentals"
print(s[:6], s[7:])

print(s.lower(), s.upper())
name = "Alex"
print(f"Hello, {name}! Length={len(name)}")

words = ["Python", "is", "fun"]
print(" ".join(words))`,
        exercises: [
            "Given a sentence, print the first and last word.",
            "Normalize a string: trim spaces, make lowercase, and replace internal multiple spaces with one."
        ],
        solutions: [
            `sent = "Learning Python is rewarding"
parts = sent.split()
print(parts[0], parts[-1])`,
            `import re
s = "  Too    many   spaces   "
s = re.sub(r"\s+", " ", s.strip().lower())
print(s)`
        ]
    },
    "04-numbers-and-math": {
        title: "Numbers and Math",
        description: "Integers, floats, operators, math module, and rounding.",
        objectives: [
            "Operators",
            "math module",
            "rounding and formatting",
            "divmod",
            "abs, pow"
        ],
        example: `import math
a, b = 7, 3
print(a + b, a - b, a * b, a / b, a // b, a % b)
print(divmod(a, b))
print(round(3.14159, 2))
print(math.sqrt(16), math.pi)`,
        exercises: [
            "Compute the hypotenuse given two legs (use math.hypot).",
            "Format a float to exactly 3 decimal places."
        ],
        solutions: [
            `import math
a, b = 3, 4
print(math.hypot(a, b))`,
            `x = 2/3
print(f"{x:.3f}")`
        ]
    },
    "05-collections-lists-and-tuples": {
        title: "Collections: Lists and Tuples",
        description: "Create, modify, and slice lists; understand tuples and packing/unpacking.",
        objectives: [
            "List operations",
            "Slicing and stepping",
            "Tuple immutability",
            "Unpacking",
            "Common pitfalls"
        ],
        example: `nums = [1, 2, 3, 4]
nums.append(5)
print(nums[::2])
a, b = (10, 20)
print(a, b)`,
        exercises: [
            "Reverse a list without using list.reverse().",
            "Unpack a tuple of three values into three variables and print them."
        ],
        solutions: [
            `nums = [1,2,3,4,5]
rev = nums[::-1]
print(rev)`,
            `t = ("alpha", "beta", "gamma")
a,b,c = t
print(a,b,c)`
        ]
    },
    "06-dictionaries-and-sets": {
        title: "Dictionaries and Sets",
        description: "Map keys to values with dict and handle unique collections with set.",
        objectives: [
            "Access and update",
            "Dictionary views",
            "Set operations",
            "Common use cases"
        ],
        example: `ages = {"alice": 30, "bob": 25}
ages["carol"] = 27
print(list(ages.keys()), list(ages.values()))

a = {1,2,3}
b = {3,4,5}
print(a | b, a & b, a - b, a ^ b)`,
        exercises: [
            "Count word frequencies in a given string.",
            "Find unique words in a sentence and print them sorted."
        ],
        solutions: [
            `text = "to be or not to be"
freq = {}
for w in text.split():
    freq[w] = freq.get(w, 0) + 1
print(freq)`,
            `sent = "banana apple banana orange apple"
unique = sorted(set(sent.split()))
print(unique)`
        ]
    },
    "07-conditional-logic": {
        title: "Conditional Logic",
        description: "Use `if`, `elif`, `else`, ternary expressions, and pattern matching (3.10+).",
        objectives: [
            "if/elif/else",
            "truthy checks",
            "ternary",
            "match-case (3.10+)"
        ],
        example: `x = 10
if x > 10:
    print("greater")
elif x == 10:
    print("equal")
else:
    print("less")

# Ternary
y = "even" if x % 2 == 0 else "odd"
print(y)`,
        exercises: [
            "Implement fizz-buzz from 1 to 20.",
            "Given a score 0-100, print letter grades A, B, C, D, F."
        ],
        solutions: [
            `for i in range(1,21):
    if i%15==0: print("fizzbuzz")
    elif i%3==0: print("fizz")
    elif i%5==0: print("buzz")
    else: print(i)`,
            `score = 83
if score>=90: g="A"
elif score>=80: g="B"
elif score>=70: g="C"
elif score>=60: g="D"
else: g="F"
print(g)`
        ]
    },
    "08-loops-and-iteration": {
        title: "Loops and Iteration",
        description: "For and while loops, break/continue, enumerate, zip, range.",
        objectives: [
            "for vs while",
            "break and continue",
            "enumerate",
            "zip"
        ],
        example: `names = ["a", "b", "c"]
for i, n in enumerate(names, start=1):
    print(i, n)

i = 0
while i < 3:
    print("loop", i)
    i += 1`,
        exercises: [
            "Loop through two lists in parallel using zip and print pairs.",
            "Use enumerate to prefix line numbers to items."
        ],
        solutions: [
            `a = [1,2,3]
b = ["x","y","z"]
for i,j in zip(a,b):
    print(i,j)`,
            `data = ["alpha", "beta", "gamma"]
for idx, item in enumerate(data, start=1):
    print(idx, item)`
        ]
    },
    "09-functions": {
        title: "Functions",
        description: "Define functions, parameters, defaults, *args/**kwargs, and scope.",
        objectives: [
            "Defining and returning values",
            "Default parameters",
            "*args and **kwargs",
            "Docstrings"
        ],
        example: `def greet(name, prefix="Hello"):
    return f"{prefix}, {name}"

print(greet("Alex"))
print(greet("Dana", prefix="Hi"))`,
        exercises: [
            "Write a function to compute factorial.",
            "Write a function that accepts any number of numeric args and returns their average."
        ],
        solutions: [
            `def fact(n):
    res = 1
    for i in range(2, n+1):
        res *= i
    return res
print(fact(5))`,
            `def avg(*nums):
    return sum(nums)/len(nums) if nums else 0.0
print(avg(1,2,3,4))`
        ]
    },
    "10-modules-and-packages": {
        title: "Modules and Packages",
        description: "Organize code into modules and packages; import patterns and __name__ guard.",
        objectives: [
            "import variants",
            "package structure",
            "__init__.py",
            "__name__ == '__main__'"
        ],
        example: `# Demonstrates main guard
def square(x): return x*x

if __name__ == "__main__":
    print(square(5))`,
        exercises: [
            "Split logic across two modules and import functions between them.",
            "Create a package folder with __init__.py and a submodule."
        ],
        solutions: [
            `# See the README for structure ideas.
print("Refer to README for a multi-file example.")`,
            `# Placeholder; create a package with __init__.py and try relative imports.
print("Create package demo as described in README.")`
        ]
    },
    "11-exceptions-and-errors": {
        title: "Exceptions and Errors",
        description: "Raise and handle exceptions, use try/except/else/finally, define custom exceptions.",
        objectives: [
            "try/except/else/finally",
            "raise",
            "custom exceptions",
            "with context"
        ],
        example: `class ValidationError(Exception):
    pass

def parse_int(s):
    try:
        return int(s)
    except ValueError as e:
        raise ValidationError(f"Invalid int: {s}") from e

try:
    print(parse_int("10"))
    print(parse_int("x"))
except ValidationError as e:
    print("Error:", e)`,
        exercises: [
            "Wrap file reading with proper exception handling.",
            "Create a custom exception and raise it on invalid input."
        ],
        solutions: [
            `try:
    with open("missing.txt", "r", encoding="utf-8") as f:
        print(f.read())
except FileNotFoundError:
    print("File not found")`,
            `class PositiveError(Exception): pass
def ensure_positive(x):
    if x <= 0: raise PositiveError("Not positive")
ensure_positive(1)
# ensure_positive(-1)`
        ]
    },
    "12-file-io": {
        title: "File I/O",
        description: "Read and write files safely with `with` statements and encodings.",
        objectives: [
            "Reading and writing text files",
            "Encodings",
            "Pathlib basics"
        ],
        example: `from pathlib import Path

p = Path("demo.txt")
p.write_text("Hello file\n", encoding="utf-8")
print(p.read_text(encoding="utf-8"))`,
        exercises: [
            "Write a script that copies a file to another path.",
            "Append lines to an existing file, then read all lines."
        ],
        solutions: [
            `from pathlib import Path
src, dst = Path("a.txt"), Path("b.txt")
dst.write_text(src.read_text(encoding="utf-8"), encoding="utf-8")`,
            `from pathlib import Path
p = Path("log.txt")
with p.open("a", encoding="utf-8") as f:
    f.write("line\n")
print(p.read_text(encoding="utf-8"))`
        ]
    },
    "13-comprehensions": {
        title: "Comprehensions",
        description: "List, set, and dict comprehensions for concise data transformations.",
        objectives: [
            "List/set/dict comprehensions",
            "Conditionals inside comprehensions"
        ],
        example: `squares = [x*x for x in range(6)]
evens = {x for x in range(10) if x%2==0}
mapping = {x: x*x for x in range(3)}
print(squares, evens, mapping)`,
        exercises: [
            "Create a dict of word lengths for each unique word in a sentence.",
            "Build a list of (n, n^2) pairs for 1..10 but keep only even n."
        ],
        solutions: [
            `sent = "one two two three three three"
result = {w: len(w) for w in set(sent.split())}
print(result)`,
            `pairs = [(n, n*n) for n in range(1,11) if n%2==0]
print(pairs)`
        ]
    },
    "14-iterators-and-generators": {
        title: "Iterators and Generators",
        description: "Build custom iterators and generators; use `yield`.",
        objectives: [
            "__iter__ and __next__",
            "Generator functions",
            "Generator expressions"
        ],
        example: `def countdown(n):
    while n>0:
        yield n
        n -= 1

for x in countdown(3):
    print(x)`,
        exercises: [
            "Write a generator that yields Fibonacci numbers up to a limit.",
            "Create a class-based iterator for a range-like sequence."
        ],
        solutions: [
            `def fib(limit):
    a,b = 0,1
    while a <= limit:
        yield a
        a,b = b, a+b
print(list(fib(50)))`,
            `class MyRange:
    def __init__(self, start, stop):
        self.cur = start
        self.stop = stop
    def __iter__(self): return self
    def __next__(self):
        if self.cur >= self.stop: raise StopIteration
        val = self.cur
        self.cur += 1
        return val
print(list(MyRange(2,6)))`
        ]
    },
    "15-decorators-and-context-managers": {
        title: "Decorators and Context Managers",
        description: "Understand function wrappers and `with` context managers.",
        objectives: [
            "Decorator syntax",
            "functools.wraps",
            "Context manager via class and contextlib"
        ],
        example: `import time, functools

def timed(fn):
    @functools.wraps(fn)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        try:
            return fn(*args, **kwargs)
        finally:
            elapsed = time.perf_counter() - start
            print(f"{fn.__name__} took {elapsed:.6f}s")
    return wrapper

@timed
def work(): 
    sum(range(100000))
work()`,
        exercises: [
            "Write a decorator that memoizes function results for simple args.",
            "Create a context manager that opens a file and logs entry/exit."
        ],
        solutions: [
            `def memoize(fn):
    cache = {}
    def wrapper(x):
        if x in cache: return cache[x]
        res = fn(x)
        cache[x] = res
        return res
    return wrapper`,
            `from contextlib import contextmanager
@contextmanager
def open_logged(path, mode="r"):
    print("enter")
    f = open(path, mode, encoding="utf-8")
    try:
        yield f
    finally:
        f.close()
        print("exit")`
        ]
    },
    "16-oop-basics": {
        title: "OOP Basics",
        description: "Classes, instances, attributes, methods, and __init__.",
        objectives: [
            "Defining classes",
            "Instance methods",
            "Dunder basics"
        ],
        example: `class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def move(self, dx, dy):
        self.x += dx; self.y += dy
    def __repr__(self):
        return f"Point({self.x}, {self.y})"

p = Point(1,2)
p.move(2,3)
print(p)`,
        exercises: [
            "Create a Rectangle class with area and perimeter methods.",
            "Add __str__ to a class for readable printing."
        ],
        solutions: [
            `class Rectangle:
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self): return self.w*self.h
    def perimeter(self): return 2*(self.w+self.h)
r = Rectangle(3,4)
print(r.area(), r.perimeter())`,
            `class Person:
    def __init__(self, name): self.name = name
    def __str__(self): return f"Person(name={self.name})"
print(str(Person("Alex")))`
        ]
    },
    "17-oop-advanced": {
        title: "OOP Advanced",
        description: "Inheritance, composition, classmethods, staticmethods, properties, dataclasses.",
        objectives: [
            "Inheritance",
            "super()",
            "classmethod vs staticmethod",
            "properties",
            "dataclasses"
        ],
        example: `from dataclasses import dataclass

@dataclass
class User:
    name: str
    active: bool = True

u = User("Dana")
print(u)`,
        exercises: [
            "Create a subclass that overrides a method and calls super().",
            "Use @property to compute a dynamic attribute."
        ],
        solutions: [
            `class Animal:
    def speak(self): return "generic"
class Dog(Animal):
    def speak(self):
        s = super().speak()
        return s + " woof"
print(Dog().speak())`,
            `class Circle:
    def __init__(self, r): self.r = r
    @property
    def area(self):
        from math import pi
        return pi*self.r*self.r
print(Circle(3).area)`
        ]
    },
    "18-testing-and-debugging": {
        title: "Testing and Debugging",
        description: "Use unittest and pytest basics; debug with print and pdb.",
        objectives: [
            "unittest structure",
            "pytest basics",
            "assertions",
            "pdb"
        ],
        example: `def add(a,b): return a+b

if __name__ == "__main__":
    assert add(2,3) == 5
    print("All good")`,
        exercises: [
            "Write unit tests for a small calculator module.",
            "Introduce a bug and catch it with assertions."
        ],
        solutions: [
            `import unittest
from math import sqrt

class TestMath(unittest.TestCase):
    def test_sqrt(self):
        self.assertEqual(sqrt(16), 4.0)

if __name__ == "__main__":
    unittest.main()`,
            `def safe_div(a,b):
    assert b != 0, "b must not be zero"
    return a/b`
        ]
    },
    "19-virtual-environments-and-dependencies": {
        title: "Virtual Environments and Dependencies",
        description: "Create and activate virtual environments; manage dependencies with pip.",
        objectives: [
            "venv creation",
            "pip install",
            "requirements.txt"
        ],
        example: `# This file only prints guidance. See README for commands.
print("Create a venv: python -m venv .venv")
print("Activate (Windows): .venv\\Scripts\\activate")
print("Activate (Unix): source .venv/bin/activate")`,
        exercises: [
            "Create a venv and install requests; freeze to requirements.txt.",
            "Upgrade pip and uninstall a package."
        ],
        solutions: [
            `# Commands (run in shell):
# python -m venv .venv
# .venv\Scripts\activate    # Windows
# source .venv/bin/activate   # Unix
# pip install requests
# pip freeze > requirements.txt`,
            `# pip install --upgrade pip
# pip uninstall requests`
        ]
    },
    "20-cli-with-argparse": {
        title: "CLI with argparse",
        description: "Build command-line interfaces with argparse.",
        objectives: [
            "Positional vs optional args",
            "Flags",
            "Help messages"
        ],
        example: `import argparse

def main():
    parser = argparse.ArgumentParser(description="Simple greeter")
    parser.add_argument("name", help="your name")
    parser.add_argument("-u", "--uppercase", action="store_true", help="uppercase the greeting")
    args = parser.parse_args()
    msg = f"Hello, {args.name}!"
    print(msg.upper() if args.uppercase else msg)

if __name__ == "__main__":
    main()`,
        exercises: [
            "Create a CLI that sums integers.",
            "Add a flag to print the result in hexadecimal."
        ],
        solutions: [
            `# Use argparse to parse integers and sum them.`,
            `# Extend previous solution with --hex flag.`
        ]
    },
    "21-date-and-time": {
        title: "Date and Time",
        description: "Work with datetime, date, time, timezones (zoneinfo).",
        objectives: [
            "datetime.now, utcnow",
            "timedelta arithmetic",
            "strftime/strptime",
            "zoneinfo"
        ],
        example: `from datetime import datetime, timedelta
now = datetime.now()
print("Now:", now)
print("In two days:", now + timedelta(days=2))`,
        exercises: [
            "Parse a date string and reformat it.",
            "Compute the number of days between two dates."
        ],
        solutions: [
            `from datetime import datetime
s = "2025-09-13"
d = datetime.strptime(s, "%Y-%m-%d")
print(d.strftime("%d %b %Y"))`,
            `from datetime import date
a = date(2025,1,1)
b = date(2025,9,13)
print((b-a).days)`
        ]
    },
    "22-regular-expressions": {
        title: "Regular Expressions",
        description: "Use `re` to search, match, extract, and validate text.",
        objectives: [
            "search vs match",
            "groups",
            "findall",
            "sub"
        ],
        example: `import re
m = re.search(r"(\d+)", "Order #12345 confirmed")
print(m.group(1))`,
        exercises: [
            "Extract all email addresses from a text block.",
            "Validate a simple phone number pattern."
        ],
        solutions: [
            `import re
text = "a@mail.com, b@site.org"
print(re.findall(r"[\w.-]+@[\w.-]+", text))`,
            `import re
pat = re.compile(r"\+?\d{9,15}$")
print(bool(pat.match("+628123456789")))`
        ]
    },
    "23-json-and-csv": {
        title: "JSON and CSV",
        description: "Work with JSON and CSV using the standard library.",
        objectives: [
            "json dump/load",
            "csv reader/writer",
            "newline and encoding tips"
        ],
        example: `import json, csv, io

data = {"name":"Alex","age":30}
s = json.dumps(data)
print(s)

rows = [["name","score"],["alex",95],["dana",90]]
buf = io.StringIO()
writer = csv.writer(buf)
writer.writerows(rows)
print(buf.getvalue())`,
        exercises: [
            "Read a JSON file, update a field, and write it back.",
            "Aggregate CSV rows by a key and compute averages."
        ],
        solutions: [
            `import json
obj = {"x":1}
with open("data.json","w") as f: json.dump(obj,f)
with open("data.json") as f: obj2=json.load(f)
obj2["x"] += 1
with open("data.json","w") as f: json.dump(obj2,f)`,
            `# Use csv module to read rows and aggregate by key.`
        ]
    },
    "24-networking-and-apis": {
        title: "Networking and APIs",
        description: "Basic HTTP with urllib and an optional example with requests.",
        objectives: [
            "urllib.request basics",
            "GET requests",
            "JSON parsing"
        ],
        example: `# urllib example (no external dependency)
from urllib.request import urlopen
import json
try:
    with urlopen("https://api.github.com") as resp:
        data = json.loads(resp.read().decode())
        print(list(data.keys())[:5])
except Exception as e:
    print("Network issue or blocked:", e)`,
        exercises: [
            "Fetch JSON from a public API and print selected fields.",
            "Handle network errors gracefully."
        ],
        solutions: [
            `# See example.py; adapt to a specific endpoint.`,
            `# Wrap in try/except and log the error.`
        ]
    },
    "25-concurrency-threads-processes-asyncio": {
        title: "Concurrency: Threads, Processes, asyncio",
        description: "Overview of threading, multiprocessing, and asyncio with simple demos.",
        objectives: [
            "threading basics",
            "multiprocessing basics",
            "asyncio coroutines and tasks"
        ],
        example: `import threading, time, asyncio

def worker(n):
    time.sleep(0.2)
    print(f"done {n}")

threads = [threading.Thread(target=worker, args=(i,)) for i in range(3)]
[t.start() for t in threads]; [t.join() for t in threads]

async def main():
    async def awork(n):
        await asyncio.sleep(0.2)
        print("a-done", n)
    await asyncio.gather(*(awork(i) for i in range(3)))

asyncio.run(main())`,
        exercises: [
            "Spin up multiple threads to process a list of tasks.",
            "Write a simple asyncio downloader (simulate with sleep)."
        ],
        solutions: [
            `# Use ThreadPoolExecutor or threading.Thread for parallel map.`,
            `# Use asyncio.gather with simulated tasks.`
        ]
    },
    "26-typing-and-docstrings": {
        title: "Typing and Docstrings",
        description: "Use type hints and write informative docstrings.",
        objectives: [
            "Typing primitives and generics",
            "mypy basics",
            "docstring formats"
        ],
        example: `from typing import List

def mean(xs: List[float]) -> float:
    """Return arithmetic mean of a list of floats."""
    return sum(xs)/len(xs)

print(mean([1.0, 2.0, 3.0]))`,
        exercises: [
            "Annotate functions in a small module and run a type checker.",
            "Write docstrings for a utility module."
        ],
        solutions: [
            `# Add type hints and run: mypy your_module.py`,
            `# Use Google or NumPy style docstrings.`
        ]
    },
    "27-best-practices-and-style": {
        title: "Best Practices and Style",
        description: "PEP 8 style, naming, imports, and common patterns.",
        objectives: [
            "PEP 8",
            "Linting overview",
            "Readable code structure"
        ],
        example: `# Follow snake_case for functions, UPPER_CASE for constants, CamelCase for classes.
X_FACTOR = 10

def compute_total(a, b):
    return a + b + X_FACTOR

class AppConfig:
    pass

print(compute_total(2, 3))`,
        exercises: [
            "Refactor a messy script to follow PEP 8 style rules.",
            "Split long functions into smaller, focused units."
        ],
        solutions: [
            `# Apply flake8/ruff recommendations.`,
            `# Identify logical chunks and extract functions.`
        ]
    },
    "28-project-structure": {
        title: "Project Structure",
        description: "A minimal, production-friendly layout for small to medium projects.",
        objectives: [
            "src layout",
            "tests folder",
            "pyproject.toml overview"
        ],
        example: `print("See README for recommended structures.")`,
        exercises: [
            "Create a new project with src/ and tests/ and wire basic tests.",
            "Add a pyproject.toml skeleton with metadata."
        ],
        solutions: [
            `# Create folders and minimal test file as instructed.`,
            `# Write pyproject.toml with [project] metadata.`
        ]
    },
    "29-notebook-and-data-basics": {
        title: "Notebook and Data Basics (Optional)",
        description: "A short note about Jupyter notebooks and minimal data handling with csv/json.",
        objectives: [
            "Jupyter quickstart",
            "When to use notebooks",
            "Reproducibility tips"
        ],
        example: `print("Launch: python -m pip install jupyter; then 'jupyter notebook' or 'jupyter lab'")`,
        exercises: [
            "Install Jupyter and create a simple notebook that loads a CSV.",
            "Plot a simple chart using matplotlib."
        ],
        solutions: [
            `# Use pandas or csv to load data; display head().`,
            `# Use matplotlib to plot a line chart.`
        ]
    },
    "30-practice-projects": {
        title: "Practice Projects",
        description: "Small, self-contained project ideas to consolidate learning.",
        objectives: [
            "CLI todo manager",
            "CSV data summarizer",
            "Log parser",
            "Simple HTTP client"
        ],
        example: `print("Pick a mini project from README and start building it incrementally.")`,
        exercises: [
            "Implement a CLI todo app with add/list/remove commands.",
            "Build a CSV summarizer that prints min/max/mean of a numeric column."
        ],
        solutions: [
            `# Combine argparse, file I/O, and JSON/CSV handling.`,
            `# Use csv module and basic statistics.`
        ]
    }
};

/* Utilities */
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function generateChapterList() {
  const chapterList = document.getElementById('chapterList');
  if (!chapterList) return;
  Object.entries(courseData).forEach(([key, chapter], index) => {
    const li = document.createElement('li');
    li.className = 'chapter-item';
    li.innerHTML = `
      <a href="#" class="chapter-link" data-section="${key}">
        <span class="chapter-number">${String(index + 1).padStart(2,'0')}</span>
        ${chapter.title}
      </a>`;
    chapterList.appendChild(li);
  });
}

function generateContentSections() {
  const mainContent = document.querySelector('.main-content');
  if (!mainContent) return;
  Object.entries(courseData).forEach(([key, chapter]) => {
    const section = document.createElement('section');
    section.className = 'content-section';
    section.id = key;

    const exampleCodeId = `code-${key}-example`;

    section.innerHTML = `
      <div class="section-header">
        <h1 class="section-title">${chapter.title}</h1>
        <p class="section-description">${chapter.description}</p>
        <div class="link-row">
          <a class="repo-link" href="https://github.com/fbrianzy/python-fundamentals/tree/main/${encodeURIComponent(key)}" target="_blank" rel="noopener">
            View this section on GitHub →
          </a>
        </div>
      </div>
      <div class="code-section">
        <div class="code-header">
          <span class="code-lang">python</span>
          <div class="code-actions">
            <button class="copy-button" data-copy-target="${exampleCodeId}">Copy</button>
            <button class="run-button" data-run-example="${key}">▶ Run Code</button>
          </div>
        </div>
        <div class="code-content">
          <pre><code id="${exampleCodeId}" class="language-python">${escapeHtml(chapter.example)}</code></pre>
        </div>
        <div class="output-section" id="output-${key}" style="display:none;">
          <div class="output-title">Output:</div>
          <pre id="output-content-${key}"></pre>
        </div>
      </div>
      <div class="exercises-section">
        <h2 class="exercises-title">Practice Exercises</h2>
        ${chapter.exercises.map((exercise, idx) => {
          const solId = `code-${key}-sol-${idx}`;
          return `
          <div class="exercise-item">
            <div class="exercise-number">Exercise ${idx+1}</div>
            <div class="exercise-description">${exercise}</div>
            <div class="code-section" style="margin-top:1rem;">
              <div class="code-header">
                <span class="code-lang">python</span>
                <div class="code-actions">
                  <button class="copy-button" data-copy-target="${solId}">Copy</button>
                  <button class="run-button" data-run-solution="${key}:${idx}">▶ Run Solution</button>
                </div>
              </div>
              <div class="code-content">
                <pre><code id="${solId}" class="language-python">${escapeHtml(chapter.solutions[idx])}</code></pre>
              </div>
              <div class="output-section" id="solution-output-${key}-${idx}" style="display:none;">
                <div class="output-title">Output:</div>
                <pre id="solution-output-content-${key}-${idx}"></pre>
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div class="navigation">
        <a href="#" class="nav-button" id="prev-${key}">← Previous</a>
        <a href="#" class="nav-button" id="next-${key}">Next →</a>
      </div>`;
    mainContent.appendChild(section);
  });
}

function showSection(id){
  document.querySelectorAll('.content-section').forEach(s=>s.classList.remove('active'));
  const target = document.getElementById(id);
  if(target){
    target.classList.add('active');
    if(window.Prism){ Prism.highlightAllUnder(target); }
    window.scrollTo(0,0);
  }
}

function updateActiveChapter(link){
  document.querySelectorAll('.chapter-link').forEach(l=>l.classList.remove('active'));
  link.classList.add('active');
}

function navigateToSection(direction,current){
  const sections = ['welcome', ...Object.keys(courseData)];
  const idx = sections.indexOf(current);
  let targetIdx = idx;
  if(direction==='prev' && idx>0) targetIdx = idx-1;
  if(direction==='next' && idx<sections.length-1) targetIdx = idx+1;
  if(targetIdx===idx) return;
  const target = sections[targetIdx];
  showSection(target);
  const targetLink = document.querySelector(`[data-section="${target}"]`);
  if(targetLink) updateActiveChapter(targetLink);
}

function updateAllNavigation(){
  const sections = ['welcome', ...Object.keys(courseData)];
  sections.forEach((section,i)=>{
    const prevBtn = document.getElementById(`prev-${section}`);
    const nextBtn = document.getElementById(`next-${section}`);
    if(prevBtn) (i===0?prevBtn.classList.add('disabled'):prevBtn.classList.remove('disabled'));
    if(nextBtn) (i===sections.length-1?nextBtn.classList.add('disabled'):nextBtn.classList.remove('disabled'));
  });
}

function setupPrismHighlighting(){ if(window.Prism){ Prism.highlightAll(); }}

function injectWelcomeRepoLink(){
  const welcome = document.getElementById('welcome');
  if(!welcome) return;
  const container = welcome.querySelector('.welcome-section') || welcome;
  if(container.querySelector('.welcome-repo-link')) return;
  const wrap = document.createElement('div');
  wrap.className = 'link-row';
  wrap.style.marginTop = '1rem';
  wrap.innerHTML = `<a class="repo-link welcome-repo-link" href="https://github.com/fbrianzy/python-fundamentals" target="_blank" rel="noopener">View repository on GitHub →</a>`;
  container.appendChild(wrap);
}

function injectReflinksForExistingSections(){
  document.querySelectorAll('.content-section').forEach(sec=>{
    const id = sec.id;
    if(!id || id==='welcome') return;
    const header = sec.querySelector('.section-header');
    if(!header || header.querySelector('.link-row')) return;
    const wrap = document.createElement('div');
    wrap.className = 'link-row';
    wrap.innerHTML = `<a class="repo-link" href="https://github.com/fbrianzy/python-fundamentals/tree/main/${encodeURIComponent(id)}" target="_blank" rel="noopener">View this section on GitHub →</a>`;
    header.appendChild(wrap);
  });
}

function runCode(sectionId){
  const outDiv = document.getElementById(`output-${sectionId}`);
  const out = document.getElementById(`output-content-${sectionId}`);
  if(out) out.textContent = "Code executed successfully! ✓\\n(Note: This is a simulation. In a real environment, you would run this Python code.)";
  if(outDiv) outDiv.style.display = 'block';
  const chapter = courseData[sectionId];
  if(chapter && out){
    if(chapter.title==="Getting Started"){
      out.textContent = `Hello, Python Fundamentals!\\nPython version: 3.11.0`;
    }else if(chapter.title==="Variables and Data Types"){
      out.textContent = `<class 'int'> 42\\n<class 'float'> 3.14\\n<class 'bool'> True\\n<class 'str'> python\\n<class 'NoneType'> None\\nFalse True False True`;
    }
  }
}

function runSolution(sectionId, idx){
  const outDiv = document.getElementById(`solution-output-${sectionId}-${idx}`);
  const out = document.getElementById(`solution-output-content-${sectionId}-${idx}`);
  if(out) out.textContent = "Solution executed successfully! ✓\\n(Note: This is a simulation. In a real environment, you would run this Python code.)";
  if(outDiv) outDiv.style.display = 'block';
}

function initializeApp(){
  generateChapterList();
  generateContentSections();
  setupPrismHighlighting();
  injectWelcomeRepoLink();
  injectReflinksForExistingSections();
  setTimeout(updateAllNavigation, 100);
}

// Robust delegation + COPY
document.addEventListener('click', (e)=>{
  const link = e.target.closest && e.target.closest('.chapter-link');
  if(link){
    e.preventDefault();
    const id = link.getAttribute('data-section');
    showSection(id);
    updateActiveChapter(link);
    return;
  }
  const prev = e.target.closest && e.target.closest('[id^="prev-"]');
  if(prev){
    e.preventDefault();
    navigateToSection('prev', prev.id.replace('prev-',''));
    return;
  }
  const next = e.target.closest && e.target.closest('[id^="next-"]');
  if(next){
    e.preventDefault();
    navigateToSection('next', next.id.replace('next-',''));
    return;
  }
  const runExampleBtn = e.target.closest && e.target.closest('[data-run-example]');
  if(runExampleBtn){
    e.preventDefault();
    runCode(runExampleBtn.getAttribute('data-run-example'));
    return;
  }
  const runSolBtn = e.target.closest && e.target.closest('[data-run-solution]');
  if(runSolBtn){
    e.preventDefault();
    const [sid, idx] = runSolBtn.getAttribute('data-run-solution').split(':');
    runSolution(sid, parseInt(idx,10));
    return;
  }

  // === COPY Button handler ===
  const copyBtn = e.target.closest && e.target.closest('[data-copy-target]');
  if(copyBtn){
    e.preventDefault();
    const targetId = copyBtn.getAttribute('data-copy-target');
    const codeEl = document.getElementById(targetId);
    const text = codeEl ? codeEl.textContent : '';
    if (!text) return;

    const done = () => {
      copyBtn.textContent = "Copied!";
      copyBtn.classList.add('copied');
      setTimeout(()=>{
        copyBtn.textContent = "Copy";
        copyBtn.classList.remove('copied');
      }, 1400);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(()=> legacyCopy(text, done));
    } else {
      legacyCopy(text, done);
    }
  }
});

function legacyCopy(text, onSuccess){
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand('copy'); } catch(e) {}
  document.body.removeChild(ta);
  if (onSuccess) onSuccess();
}

document.addEventListener('DOMContentLoaded', initializeApp);
window.runCode = runCode;
window.runSolution = runSolution;

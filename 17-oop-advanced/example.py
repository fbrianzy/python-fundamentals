from dataclasses import dataclass

@dataclass
class User:
    name: str
    active: bool = True

u = User("Dana")
print(u)

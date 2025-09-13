class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def move(self, dx, dy):
        self.x += dx; self.y += dy
    def __repr__(self):
        return f"Point({self.x}, {self.y})"

p = Point(1,2)
p.move(2,3)
print(p)

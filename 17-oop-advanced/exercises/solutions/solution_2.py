class Circle:
    def __init__(self, r): self.r = r
    @property
    def area(self):
        from math import pi
        return pi*self.r*self.r
print(Circle(3).area)

class Rectangle:
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self): return self.w*self.h
    def perimeter(self): return 2*(self.w+self.h)
r = Rectangle(3,4)
print(r.area(), r.perimeter())

class MyRange:
    def __init__(self, start, stop):
        self.cur = start
        self.stop = stop
    def __iter__(self): return self
    def __next__(self):
        if self.cur >= self.stop: raise StopIteration
        val = self.cur
        self.cur += 1
        return val
print(list(MyRange(2,6)))

def countdown(n):
    while n>0:
        yield n
        n -= 1

for x in countdown(3):
    print(x)

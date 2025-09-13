squares = [x*x for x in range(6)]
evens = {x for x in range(10) if x%2==0}
mapping = {x: x*x for x in range(3)}
print(squares, evens, mapping)

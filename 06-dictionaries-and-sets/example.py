ages = {"alice": 30, "bob": 25}
ages["carol"] = 27
print(list(ages.keys()), list(ages.values()))

a = {1,2,3}
b = {3,4,5}
print(a | b, a & b, a - b, a ^ b)

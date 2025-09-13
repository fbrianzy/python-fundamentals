sent = "one two two three three three"
result = {w: len(w) for w in set(sent.split())}
print(result)

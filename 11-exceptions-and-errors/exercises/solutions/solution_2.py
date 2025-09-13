class PositiveError(Exception): pass
def ensure_positive(x):
    if x <= 0: raise PositiveError("Not positive")
ensure_positive(1)
# ensure_positive(-1)

from typing import List

def mean(xs: List[float]) -> float:
    """Return arithmetic mean of a list of floats."""
    return sum(xs)/len(xs)

print(mean([1.0, 2.0, 3.0]))

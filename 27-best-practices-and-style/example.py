# Follow snake_case for functions, UPPER_CASE for constants, CamelCase for classes.
X_FACTOR = 10

def compute_total(a, b):
    return a + b + X_FACTOR

class AppConfig:
    pass

print(compute_total(2, 3))

class ValidationError(Exception):
    pass

def parse_int(s):
    try:
        return int(s)
    except ValueError as e:
        raise ValidationError(f"Invalid int: {s}") from e

try:
    print(parse_int("10"))
    print(parse_int("x"))
except ValidationError as e:
    print("Error:", e)

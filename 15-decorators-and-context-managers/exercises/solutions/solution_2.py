from contextlib import contextmanager
@contextmanager
def open_logged(path, mode="r"):
    print("enter")
    f = open(path, mode, encoding="utf-8")
    try:
        yield f
    finally:
        f.close()
        print("exit")

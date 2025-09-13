def memoize(fn):
    cache = {}
    def wrapper(x):
        if x in cache: return cache[x]
        res = fn(x)
        cache[x] = res
        return res
    return wrapper

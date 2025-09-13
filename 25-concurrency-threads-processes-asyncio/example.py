import threading, time, asyncio

def worker(n):
    time.sleep(0.2)
    print(f"done {n}")

threads = [threading.Thread(target=worker, args=(i,)) for i in range(3)]
[t.start() for t in threads]; [t.join() for t in threads]

async def main():
    async def awork(n):
        await asyncio.sleep(0.2)
        print("a-done", n)
    await asyncio.gather(*(awork(i) for i in range(3)))

asyncio.run(main())

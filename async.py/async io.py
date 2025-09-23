# import time
# import asyncio
# import requests


# async def function1():
#     url = 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg'
#     r = requests.get(url, allow_redirects=True)
#     open('google.jpg', 'wb').write(r.content)
#     print("func 1")
#     return "Harii"

# async def function2():
#     url = 'http://google.com/favicon.ico'
#     r = requests.get(url, allow_redirects=True)
#     open('google2.ico', 'wb').write(r.content)
#     print("func 2")
#     return "Harshil"

# async def function3():
#     url = 'http://google.com/favicon.ico'
#     r = requests.get(url, allow_redirects=True)
#     open('google3.ico', 'wb').write(r.content)
#     print("func 3")

# async def main():
#     await function1()
#     await function2()
#     await function3()
#     # L = await asyncio.gather(
#     #     function1(),
#     #     function2(),
#     #     function3(),
#     # )

#     # print(L)

# asyncio.run(main()) 

 

import asyncio

async def load_data():
    print("Loading...")
    await asyncio.sleep(5)
    print("Data loaded")

async def task():
    print("Another task...")
    await asyncio.sleep(1)
    print("Task executed")

async def main():
    await asyncio.gather(load_data(), task())

if __name__ == "__main__":
    import time 
    start = time.perf_counter()
    asyncio.run(main())
    elapsed = time.perf_counter() - start
    print(f"Tasks executed in {elapsed:0.1f} seconds.")
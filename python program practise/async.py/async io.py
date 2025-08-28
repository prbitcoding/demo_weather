import time
import asyncio
import requests


async def function1():
    url = 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg'
    r = requests.get(url, allow_redirects=True)
    open('google.jpg', 'wb').write(r.content)
    print("func 1")
    return "Harii"

async def function2():
    url = 'http://google.com/favicon.ico'
    r = requests.get(url, allow_redirects=True)
    open('google2.ico', 'wb').write(r.content)
    print("func 2")
    return "Harshil"

async def function3():
    url = 'http://google.com/favicon.ico'
    r = requests.get(url, allow_redirects=True)
    open('google3.ico', 'wb').write(r.content)
    print("func 3")

async def main():
    await function1()
    await function2()
    await function3()
    # L = await asyncio.gather(
    #     function1(),
    #     function2(),
    #     function3(),
    # )

    # print(L)

asyncio.run(main())

 
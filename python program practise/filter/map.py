# def cube(x):
#     return x*x*x

# print(cube(5))

l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

newl = list(map(lambda x: x*x*x , l))
print(newl)
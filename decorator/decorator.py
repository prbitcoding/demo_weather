def decorator(func):
    def wrapper():
        print("Transaction initiated")
        func()
        print("Transaction completed")
    return wrapper

# def hello():
#     print("Executing all steps of transaction")

# hello1 = decorator(hello)
# hello1()


@decorator
def hello():
    print("Executing all steps of transaction")

hello()









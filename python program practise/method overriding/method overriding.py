class shape:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def area(self):
        return self.x * self. y
    
class Circle(shape):
    def __init__(self, radius):
        self.radius = radius
        super().__init__(radius, radius)

    def area(self):
        return 3.14 * super().area()    
    
# rec = shape(5, 7)
# print(rec.area())

c = Circle(7)
print(c.area())
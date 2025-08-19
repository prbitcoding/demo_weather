class Employee:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def ShowDetails(Self):
        print(f"The name of employee is {Self.name} and his age is {Self.age}")
    
class Programmer(Employee):
        def ShowLanguage(self):
            print("The default language is python")

e1 = Employee("harii", 50)
e1.ShowDetails()    
e2 = Programmer("harru", 88)
e2.ShowDetails()
e2.ShowLanguage()
 
class Car:

    total_car = 0

    def __init__(self, brand , model):
        self.__brand = brand
        self.__model = model
        Car.total_car += 1

    def get_brand(self):
        return self.__brand + " ! "

    def full_name(self):
        return f"{self.__brand} {self.__model}"
    
    def fuel_type(self):
        return "Petrol or Diesel"
    
    @staticmethod
    def general_discription():
        return "Cars are means of transport"
    
    @property
    def model(self):
        return self.__model
    
class Electriccar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model)
        self.battery_size = battery_size

    def fuel_type(self):
        return "Electric charge"

# my_tesla = Electriccar("Tesla", "fortuner" , "9555kwh")

# print(isinstance(my_tesla, Car))
# print(isinstance(my_tesla, Electriccar))

# print(my_tesla.__brand)   
# print(my_tesla.fuel_type())

# safari = Car("Tata", "safari")
# safari.model = "City"
# Car("Tata", "harrior")
# print(safari.fuel_type())
# print(safari.general_discription())
# print(safari.model)   

# my_car = Car("toyota", "supra")
# print(my_car.brand)
# print(my_car.model)
# print(my_car.full_name())


# second_car = Car("ford", "mustang")
# print(second_car.brand)
# print(second_car.model)



class battery:
    def battery_info(self):
        return "This is battery"

class engine:
    def engine_info(self):
        return "This is engine"

class ElectriccarTwo(battery, engine, Car):
    pass     

my_new_tesla = ElectriccarTwo("Tesla", "Model S")
print(my_new_tesla.battery_info())
print(my_new_tesla.engine_info())



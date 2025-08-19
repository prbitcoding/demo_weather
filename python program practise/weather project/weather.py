from tkinter import *
from tkinter import ttk
import requests 

def data_get():
    city = city_name.get()
    data = requests.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=eb46ed0742f2fb830e4855614150c17f").json()
    w1_Label1.config(text=data['weather'][0]['main'])
    w2_Label2.config(text=data['weather'][0]['description'])
    tamp_Label1.config(text=str(int(data['main']['temp']-273.15)))
    pre_Label1.config(text=data['main']['pressure'])

win = Tk()
win.title("Weather App")
win.config(bg = "gray")
win.geometry("600x600")

name_Label = Label(win, text="My Weather App",
                    font=("Times New Roman",35, "bold"))
name_Label.place(x=40, y=30, height=60, width=500)

city_name = StringVar()
list_name = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "West Bengal", "Uttar Pradesh", "Chennai", "Chhattisgarh","Goa", "Gujarat", "Haryana", "Himachal", "Jharkhand", "Karnataka", "Kerala", "Maharashtra", "Manipur", "Meghalaya",	"Mizoram", "Nagaland", "Odisha", "Punjab", "Sikkim", "Telangana", "Tripura",	"Uttarakhand",	"Uttar Pradesh"]
com = ttk.Combobox(win, text="All Weather App", values = list_name,
                    font=("Times New Roman",30, "bold"), textvariable=city_name)
com.place(x=40, y=120, height=60, width=500)

w1_Label = Label(win, text="Weather Climate",
                    font=("Times New Roman",22, "bold"))
w1_Label.place(x=20, y=210, height=55, width=270)
w1_Label1 = Label(win, text="",
                    font=("Times New Roman",22, "bold"))
w1_Label1.place(x=310, y=210, height=55, width=270)   

w2_Label = Label(win, text="Weather Description",
                    font=("Times New Roman",22, "bold"))
w2_Label.place(x=20, y=280, height=55, width=270)
w2_Label2 = Label(win, text="",
                    font=("Times New Roman",22, "bold"))
w2_Label2.place(x=310, y=280, height=55, width=270)

tamp_Label = Label(win, text="Weather Tamprature",
                    font=("Times New Roman",22, "bold"))
tamp_Label.place(x=20, y=350, height=55, width=270)
tamp_Label1 = Label(win, text="",
                    font=("Times New Roman",22, "bold"))
tamp_Label1.place(x=310, y=350, height=55, width=270)

pre_Label = Label(win, text="Weather Pressure",
                    font=("Times New Roman",22, "bold"))
pre_Label.place(x=20, y=420, height=55, width=270)
pre_Label1 = Label(win, text="",
                    font=("Times New Roman",22, "bold"))
pre_Label1.place(x=310, y=420, height=55, width=270)

done_button = Button(win, text="Done",
                    font=("Times New Roman",30, "bold"), command=data_get)
done_button.place(x=225, y=500, height=50, width=150)

win.mainloop()
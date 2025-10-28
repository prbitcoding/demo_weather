// Explain how the switch statement works and what will be the output variable day is  set to different values 



var year = 2036;

if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)  ){
    console.log(year, "he is a leap year");
}else{
    console.log(year, "his not leap year");
}
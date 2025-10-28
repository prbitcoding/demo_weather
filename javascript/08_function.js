var a = 5, 
    b = 10;

var sum1 = a + b;
console.log(sum1)


// 2nd student

var a = 35, 
    b = 50;

var sum2 = a + b;
console.log(sum2)

// 3rd student

var a = 15, 
    b = 20;

var sum3 = a + b;
console.log(sum3)


// lets make a reusable code

function sum(a, b){
    return a + b;
}

console.log(sum(5, 5));
console.log(sum(15, 15));
console.log(sum(25, 25));
console.log(sum(35, 35));
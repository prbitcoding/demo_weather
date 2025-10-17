// 2.  Write a program to check if a number is pnme.



// num = "6";

// if(num % 2 == 0) {
//     console.log("num is even");
// }else{
//     console.log("num is odd");
// }


var num = 12;
var isPrime = true;

for (var i=2; i<num; i++){
    if(num % i == 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log("num is prime")
}else{
    console.log("num is not prime")
}

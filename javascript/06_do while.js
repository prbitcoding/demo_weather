let userInput;
let positiveNumber;
do{
    userInput = prompt("Enter any positibe number: ");
    positiveNumber = parseFloat(userInput);
}while(isNaN(positiveNumber) || positiveNumber < 0);    
console.log("You entered positive number:", positiveNumber);    




  
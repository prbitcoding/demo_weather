function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      return  num1 + num2;

    case "-":
      return  num1 - num2;

    case "*":
      return  num1 * num2;

    case "/":
        if (num2 == 0){
            return "0 is not allowed";
        }else{
            result = num1 / num2;
            return result;
        }

        default:
            return "no operator found";
  }
}

console.log(calculator(5, 10, "+"));
console.log(calculator(15, 10, "-"));
console.log(calculator(5, 10, "*"));
console.log(calculator(10, 10, "/"));

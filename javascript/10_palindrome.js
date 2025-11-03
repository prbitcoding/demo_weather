const ispalindrome = (str) => {
  let reverse = "";
  for (let char = 0; char < str.length; char++) {
    reverse = reverse + str[char];
  }
//   if (str == reverse) {
//     return true;
//   } else {
//     return false;
//   }
  return str == reverse ? true : false;
};

console.log(ispalindrome("level"));

// const isReverse = (str) => {
//     for (let char= str.length - 1; char >= 0; char--) {
//         console.log(str[char]);
//     }
// };

// isReverse("Vinod thapa")


const isReverse = (str) => {
    let reverse = " ";
    for (let char=0; char < str.length; char++) {
    reverse = reverse + (str[char]);
    }
    return reverse;
};

console.log(isReverse("Vinod thapa"));




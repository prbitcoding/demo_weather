//  1   using array constructor

// let fruits = new Array("apple", "banana", "orange");
// console.log(fruits);




// 2    using array literal

// let fruits = [ 'apple', 'banana', 'orange' ];
// console.log(fruits);




// 3    we can alos create an empty array

// let arr = [];
// console.log(typeof arr)





// 4    acessing elements

// let fruits = ["apple", "orange", "banana"];
// console.log(fruits[0]);
// console.log(fruits[1]);




// 5   modifying elements

// let fruits = ["apple", "orange", "Banana"];
// fruits[2] = "pineapple";
// console.log(fruits);



// arrays traverion / iterating over arrays



let fruits = ["apple", "Banana", "orange", "mango", "grapes"];



// 1.   for of loop , also known as Iterable  ( of means item name )

// for(let item of fruits){
//     console.log(item);
// }




// 2.    for in loop   ( in means index (arrays number))

for(let item in fruits){
    console.log(item);
}




// 3.   foreach method    ( aa function kyarey pan koi pan type ni value return nthi kartu)

// const myForeachArr = fruits.forEach((curElem, index, arr) => {
//     // console.log(`${curElem} ${index}`);
//     console.log(arr);
// }); 

// console.log(myForeachArr);





// 4.      map method

// const myMapArr = fruits.map((curElem, index, arr) => {
//     return ` My fav fruit is ${curElem}` ;
// });

// console.log(myMapArr);  
// console.log(fruits);




// 5.  todo practise time

// write a program to multiply each element with 2 


// const numbers = [1, 2, 3, 4, 5, 6];

// ( performs an action on each element)

// numbers.forEach((curElem) => {
//     console.log(curElem * 2);
// });



// ( creates a new array with transformed element)

// const doublevalue = numbers.map((curElem) => {
//     return (curElem * 2);
// });

// console.log(doublevalue);





// chaining 

// ForEach : It Doesn't return a value so it cannot to directly chained with other array methods






// let fruits = ["apple", "orange", "mango", "graps", "banana"];


// 1. push() : method that adds one or more elements to the end of an array 


// console.log(fruits.push("kiwi"));
// console.log(fruits);



// 2. pop() : Method that removes the last Element from an array

// console.log(fruits.pop());
// console.log(fruits);


// 3. unshift() : method that adds one or more elements to the beginning of an array

// console.log(fruits.unshift("avacado"));
// console.log(fruits);


// 4. shift() : methos that removes the first elemet form an array 

// console.log(fruits.shift());
// console.log(fruits);




// what if , we want to add  or removes anywhere in an element - p2



// the splice() : method of array instances changes the content of an array by removing or replacing existing Elements and / or adding new Elements in place

// syntax 


// splice(start, deleteCount, item1, item2, /* ..., */, itemN)
// let fruits = ["apple", "orange", "banana", "mango"];

// fruits.splice(1, 1);
// console.log(fruits);


// fruits.splice(2, 1, "graps");
// console.log(fruits);





// searching in an array

// searching and Filter in an Array

// Foe search we have - indexof , LastIndextof & includes

// const numbers = [1, 2, 3, 7, 4, 5, 6, 7, 8, 9, 7];



//1.  indexOf method :  the index of method return the first index at which a given element can be found in the array , or -1 if it is not present


// Syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex)


// persons.indexOf("Sita");
// console.log(numbers.indexOf(4));




// 2. lastindexof method : the lastindexOf() method of Array instane return the last index at which a given element can be found in the array , or -1 if it is not present the 
//                         array is searched backwards , starting at fromindex



// (indexOf e index number gote che)
// const result = numbers.indexOf(8);     
// console.log(result);


// (lastIndexOf  no meaning jo ek array ma ek value 2 ka to 3 vakhat hoi to lastIndexOf e last value no index numbers return karshe)
// const result1 = numbers.lastIndexOf(7);
// console.log(result1);



// (aano meaning em thai che ke last ma je 9 che tya sudhi array chalshe baki no data te ignore karshe aapde ena andar ni value enter karvi padse 7 che te 9 ni andar che etle
//  teno index number mali jashe)

// const result2 = numbers.lastIndexOf(6, 9);
// console.log(result2);




// const result3 = numbers.indexOf(7, 9);
// console.log(result3);






// include method  : the includes method checks wheather an array includes a certain element, returning true or false

// (aano use e karva mate thai che ike aapde aapeli value array ni andar che ke nyy jo hase to true return karshe jo nyy hoi to false return karshe)

// const numbers = [1, 2, 3, 7, 4, 5, 6, 7, 8, 9, 7];
// const result = numbers.includes(2);
// console.log(result);






//   TODO CHALLENGE TIME

//  1. ADD DEC AT THE END OF THE ARRAY?
//  2. WHAT IS THE RETURN VALUE OF SPLICE METHOD?
//  3. UPDATE march TO MARCH (UPDATE)?
//  4. DELETE JUNE FROM AN ARRAY?


// const months = ["Jan", "march", "April", "June", "July"];

// 1. 

// months.splice(months.length, 0, "Dec");
// console.log(months);


// 2.

// when used to add elements, the splice method  returns an empty array 


// 3.

// const indexToUpdate = months.indexOf("march")
// months.splice(indexToUpdate, 1, "March")
// console.log(indexToUpdate);
// console.log(months);


// 4.

// const indexToDelete = months.indexOf("June");
// months.splice(indexToDelete, 1);
// console.log(months);





                                                                            // Filter in an Array 



// search + Filter 

// const numbers = [1, 2, 3, 4, 5, 6, 4, 7, 8, 3, 9];

// 1.   find method : The find method is used to find the first element in an array the satisfies a provided testing function it returns the first matching 
//      element or undefined if no element is found

// (find method no use aapde aapeli value hoi jem ke aapde 5 aapi to aapda arraya ma 5 thi moto je number pela aave tene lai leshe ane print kari deshe)


// const result = numbers.find((curElem) => {
//     return curElem > 5;
// });

// console.log(result);




// 2.   findIndex method : The findIndex() method of typeArray instances returns the index of the first element in a typed array that satisfies the provided testing function if no elements satisfy the testing function  -1 is returned   

// syntax
//? filter(callbackfn)
//? filter(callbackfn, thisArg)



// const numbers = [1, 2, 3, 4, 5, 6, 4, 7, 8, 3, 9];


// const result = numbers.map((curElem) => curElem * 5);
// console.log(result);

// const result2 = result.findIndex((curElem) => {
//     return curElem > 20;
// });

// console.log(result2);






//3.  Filter method : The filter method creates a new array with all elements that pass the test implemented by the provided function

// syntax
// filter(callbackfn)
// filter(callbackfn, thisArg)


// filter function no use aapde arra ni andar je pann value aapiye te teni karta jetli pn moti value hoi tene array ni andar return karshe  
// const numbers = [1, 2, 3, 4, 5, 6, 4, 7, 8, 3, 9];

// const result = numbers.filter((curElem) => {
//     return curElem > 6;
// });

// console.log(result);




// usecase : IN E-commerce websites when we want to remove or delete any product from addtocart page


// EX.  let's say user wants to delete value 6.

// let value = 6;

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];

// let UpdatedCart = numbers.filter((curElem) => {
//     return curElem == value;
// });

// console.log(UpdatedCart);




// usecase : in E-commerce websites when we want to remove or delete any product from addToCart pageXOffset.

// EX.   let's say user wants to delete value 6.

// let value = 6;

// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// let DeleteCart = numbers.filter((curElem) => {
//     return curElem != value;
// });

// console.log(DeleteCart);





// Example 2 : Filtering products by price 

// const products = [
//     {name: "Laptop", price: 1200},
//     {name: "phone", price: 800},
//     {name: "Tablet", price: 300},
//     {name: "smartwatch", price: 150},
// ];

// filter products with a price less than or equal to 500 

//  const filterproducts = products.filter((curElem) => {
//     return curElem.price <= 500;
//  });

//  console.log(filterproducts);
 




                                                        //  filter unique values 

// ( ...   spread operator)                             

// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 4, 9];

// 1.

// console.log(... new Set(numbers));



// 2.

// let uniquevalues = numbers.filter((curElem, index, arr) => {
    // console.log(index);
    // console.log(arr.indexOf(curElem));
    // return arr.indexOf(curElem) === index;
// });

// console.log(uniquevalues);


                                                //  __________________________________________________ //
                                                //        HOW TO SORT AND COMPARE AN ARRAY
                                                //  __________________________________________________ //



// how to sort and compare an Array
// sorting an Array : The sort method sorts the Elements of an array in place and returns the sorted array by default it sorts elemets as strings   


// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 4, 9];

// numbers.sort();
// console.log(numbers);



// // compare method 

// compare method no use e rite thai che ke aapdi pase ek number ni array che ane ema number aada avla aapela che to pela condition check thase to a>b hase to switch the order 
// function chlase ane condition pachi aagal vadhase

// syntax
    // const sortedNumbers = numbers.sort((a, b) => a -b);
    // if(a>b) return 1 => switch the order
    // if(b>a) return -1 => keep the order


// const numbers = [1, 2, 4, 3, 5, 6, 7, 9, 8];

                                                    // for ascending order
// numbers.sort((a, b) => {
//     if(a>b) return 1;
//     if(b>a) return -1;
// });

// console.log(numbers);




                                                        // for decending order

// numbers.sort((a, b) => {
    // if(a>b) return 1;
    // if(b>a) return -1;
// });

// console.log(numbers);







// Map() , Reduce(), Filter()
// Map()  creates a new array from calling a function for every array elements.
// Map()  does not execute the function for empty elements 
// Map() does not change the original array 


// original array of a numbers
// const numbers = [1, 2, 3, 4, 5, 6];



// using map to square each number add create a new Array

// const numbers = [1, 2, 3, 4, 5, 6];

// let result = numbers.map((curElem) => curElem * curElem);
// console.log(result);



// 1. using the map method write a function that takes an array of strings and returns new array where each strings is capitalized 

// const  words = ["apple", "banana", "cherry", "data"];

// const result = words.map((curElem) => {
//     return curElem.toUpperCase();
// });

// console.log(result);



// 2. using the map method write a function that takes an array of numbers and returns new array where each numbers is squarred but only if it's  an even number

// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers.map((curElem) => {
//     if(curElem % 2 == 0){
//         return curElem * curElem
//     }
// }).filter((curElem) => curElem != undefined);

// console.log(result);



// 3. using the map method write a function that takes an array of names and returns a new array where each name is prefixed with 

// const names = ["Ram", "Raja", "Rajesh"]
// const prefixName = names.map((curName) => `Mr. ${curName}`);
// console.log(prefixName);




// Reduce method

// The reduce method in javascript is used to accumulate or reduce an array to a single value. It iterates over the Elements of an array and applies a callback function to each element 
// updating an accumalator value with the result the reduce method takes a callback functtion as its first argument and an optional intial value for the accumalator as the secong argument 



// write a java script function that calculates the total prices of items in a shopping cart the function should take an array of item prices as input and return the total prices 

//  const productPrice = [100, 500, 700, 1000, 1500 ]; 
 
//  const totalPrice = productPrice.reduce((accum, curElem) => {
//     return accum + curElem;
//  }, 0);

//  console.log(totalPrice);
 
//-----------------------------//
//  strings in javascript 
//----------------------------//


// strings in javascript are a fundamental data type that represents a sequence of characters.a


// Note:
// strings created with single or double quotes works the same.
// There is no differnce  between  the two.


//* string properties:
//? length: property that return the length of the string (number of characters).


//*  aapdi length count ma 1 thi start thai che index e 0 thi start thai che

// const str = "Hello, world!";
// console.log(str.length);
// including space n all



//*-------------------------//
//*   Escape character
//*------------------------//



//?  Escape character : in javascript , the backslash \  is used as an  escape character. It allows you to include special characters in a string.


// code         Result            Description
//  \'          '                single quote
//  \"          "                double quote
//  \\          \                Backslash


// let text = "My name is thapa technical & i am a full stack devloper. ";
// let text = "My name is 'thapa technical' & \\ i am a \"full stack\" devloper. ";
// console.log(text);



                                                                        //*-------------------------//
                                                                        //*  string search method
                                                                        //*-------------------------//


// 2. string search method                                                                        
//? a:   indexOf()  : The indexOf() method returns the index (position) of the first occurrence of a string in a string. or it returns -1 if the string is not found.

// Syntax
// indexOf(searchstring)
// indexOf(searchstring, position)


// let text = "Vinod Thapa";
// console.log(text.indexOf('thapa'));

// The indexOf() method is case sensitive.The

// console.log(text.indexOf("Thapa"));


// ( badha element ne alag kare alag alag Array ma)
// let strArr = Array.from(text);
// // console.log(strArr);
// let strMap = strArr.map((curElem, index) => `${curElem} = ${index} `);
// console.log(strMap);



//? b:  lastindexOf() : The lastindexOf() method returns the index of the last occurrence of a specified text in a string

// Syntax
lastindexOf(searchstring)
lastindexOf(searching, position)


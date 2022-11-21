 
//Arrow functions


//normal function

// console.log(add(4,5))

// function add(x,y){
//     return x+y
// }


//function expression


// const add = function(x,y){
//     return x+y
// }
// console.log(add(4,5))

//Arrow funtion... ES6 Syntax.. React, Node.js 
// Note: you MUST invoke the function after the function defination , AND SAME GOES for function expression

// const add = (x,y)=>{
//     return x+y
// }
// console.log(add(4,5))

//your arrow function  gives you implicit return using the arrow. This means that you may not need  the 'return' always
//IMPLICIT RETURN

// YOU CAN ONLY RETURN ONE THING AT A TIME IN FUNCTIONS
const add = (x,y)=> x+y


console.log(add(4,5))

const sqr = x => x*x

 
//when you are using one parameter













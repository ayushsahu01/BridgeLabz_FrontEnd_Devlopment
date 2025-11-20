// //JS Functions
// //1. Arrow Function
// const add = (a,b) => a+b

// //2. Anonymous Function
// setTimeout(function(){
//     console.log("2 Second",2000)
// })

// //3. IIFE Imme  = Immideatly Invoke Function expression
// (function(){
//     console.log("IIFE")
// })();

// //4. HOF = Higher Order Function
// function greetUser(greetFun, name){
//     return greetFun(name)
// }
// //Callback Function
// function greet(name){
//     return "Hello"+name;
// }
// console.log(greetUser(greet,"Ayush"))

// //Prototypes
// Object.prototype.print = function(){
//     console.log("Common Method")
// }
// let b = {
//     name:"Ayush",
//     age:20
// }
// b.print();
//Hoisting => It is behavior of java script where it moves the declaration of variable, functions ans class to the top of there scope during the compilation phase or before the code is executed.
//function stored in a complete memory.
//after memory phase 

//Type =>
//variable, function and class Hoisting


//function hoisting
add() //20
function add()
{
    console.log(10+10) //fully hoisted
}

// d() //Type Error
// d() //d = undefined
// var d = function sub()
// {
//     console.log(10-10)
// }

// b() //TReference Error
// const b = function sub()  //let const TDZ => Temporal dead zone
// {
//     console.log(10-10)
// }

// //variable hoisting
// console.log(f) //reference error same with const
// let f = 5

//class hoisting
// const std2 = new Student("Ayush",20) //Reference Error
// std2.show() //TDZ
class Student{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    show() {
        console.log(`Name:${this.name}, Age:${this.age}`)
    }
}
const std1 = new Student("Ayush",20) //Object first way
std1.show()

//Object second way
const student = {
    Name:"Ayush",
    Age:20,
    Id:1234,
    Department:"CSE"
}
console.log(student)
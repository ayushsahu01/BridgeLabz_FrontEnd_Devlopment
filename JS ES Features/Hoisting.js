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

//One way Empty object
const car = new Object();
car.brands = "KIA"
car.model = "Carnival"
car.price = 3000000

//Constructor Function
function bike(name, price){
    this.name = name
    this.price = price
    this.greet = function()  //Anonymous Function
    {
        return `Hii My Name is ${this.name} and Price is ${this.price}`
    }
}
const bike1 = new bike("KAWASAKI-Ninja H2R", 1800000)
console.log(bike1.greet())

//Using Create
const child = {
    greet()
    {
        console.log("Hii Ayush")
    }
}
const child1 = Object.create(child)
child1.greet()

//Using JSON
const person = `{"name":"Ayush", "age":20}`
const jsonObj = JSON.parse(person)  //Converted to Json object from string
console.log(jsonObj.name)
const stringObj = JSON.stringify(jsonObj)  //Converted to String from Json Object
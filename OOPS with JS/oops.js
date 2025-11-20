//Oops
//Inheritance
class Person1{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    showInfo(){
        console.log(`Name: ${this.name} \n Age: ${this.age}`)
    }
}
class Student1 extends Person1{
    constructor(name, age){
        super(name, age)
    }
}
const stud1 = new Student1("Ayush", 20)
stud1.showInfo()

//Polymorphism => The Ability and the smartness of the method to behave differently with differents objects...
class Person2{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    showInfo(){
        console.log(`Name: ${this.name} \n Age: ${this.age}`)
    }
}
class Student2 extends Person2{
    constructor(name, age){
        super(name, age)
    }
    showInfo(){
        console.log(`I am Child`)
    }
}
const stud2 = new Student2("Ayush", 20)
stud2.showInfo()

//Encapsulation
class Person3{
    constructor(name, age, rollNumber){
        this.name = name
        this.age = age
        this.rollNumber = number
    }
    showInfo(){
        console.log(`Name: ${this.name} \n Age: ${this.age}`)
    }
}
class Student3 extends Person3{
    constructor(name, age){
        super(name, age)
    }
}
const stud3 = new Student1("Ayush", 20)
stud1.showInfo()
//Abstraction => It is a coding contract between two entities.
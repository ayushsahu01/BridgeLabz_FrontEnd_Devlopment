//Callback Function
function a(fun){
    console.log("First")
    fun()
}
function b(fun){
    console.log("Second")
    fun()
}
function c(fun){
    console.log("Third")
    fun()
}
function d(){
    console.log("Fourth")
}

//Callback Hell
a(function(){
    b(function(){
        c(d)
    })
})

//Promises = > Resolve, Pending and Reject
function a1(){
    return new Promise((resolve)=>{
        console.log("First")
        resolve()
    })
}
function b1(){
    return new Promise((resolve)=>{
        console.log("Second")
        resolve()
    })
}
function c1(){
    return new Promise((resolve)=>{
        console.log("Third")
        resolve()
    })
}
a1()
.then(b1)
.then(c1)
.catch((err)=> console.log("Not executed"))

async function run() {
    await a()
    await b()
    await c()
}
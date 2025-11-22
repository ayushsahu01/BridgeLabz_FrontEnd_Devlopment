// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// async function getData() {
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const readData = await data.json()
//     console.log(readData)
// }
// getData()

async function getData(){
        const data = await fetch ('https://jsonplaceholder.typicode.com/todos')
        const readData = await data.json()
        console.log(readData)
        readData.forEach((x)=>{
        let li =$(`<li> ${x.title} </li>`);
        $("#list").append(li);
      })   
    }
getData()
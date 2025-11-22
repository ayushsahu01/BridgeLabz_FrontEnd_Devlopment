const boxEl = document.querySelector(".box")
console.log(boxEl)
boxEl.style.backgroundColor = 'red'

const paraEl = document.querySelector(".para")
console.log(paraEl)
paraEl.textContent = "Hii I am Ayush Sahu"

const btnEl = document.querySelector("#btn")
console.log(btnEl)

btnEl.addEventListener("click", ()=>{
    alert("Clicked")
})

const containerEl = document.querySelector(".container")
let pEl = document.createElement("p")
pEl.textContent = "Hello"
pEl.style.color = "black"
pEl.classList.add("bg-green")
containerEl.appendChild(pEl)
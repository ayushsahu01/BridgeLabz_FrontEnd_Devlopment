const bars = document.querySelector(".bars")
const list = document.querySelector(".list-items")
const close = document.querySelector(".close")

bars.addEventListener('click', () => {
    close.classList.remove("unactive")
    list.style.display = "flex"
    bars.style.display = "none"
})

close.addEventListener('click', () => {
    list.style.display= "none"
    bars.style.display = "block"
})
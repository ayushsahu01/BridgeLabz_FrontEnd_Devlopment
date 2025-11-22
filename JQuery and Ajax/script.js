$(".box").css({
    color:"red"
})


$(".para").text("My name is Para")


$("#btn").click(function (){
    alert("Clicked")
})


$("#btn").click(function (){
    // $(".box").hide()
    // $(".box").fadeOut()
    // $(".box").toggle()
})


$("#fadein").click(function (){
    $(".box").hide()
})


$("#fadeout").click(function (){
    // $(".box").fadeOut()
    $(".container").toggleClass("bg-green")
})


let count = 0
$(".box").mouseover(function (){
    count++
    console.log(count)
})
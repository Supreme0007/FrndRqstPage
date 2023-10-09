var istatus = document.querySelector("h5")
var addFrnd = document.querySelector(".add")
var removeFrnd = document.querySelector(".remove")

addFrnd.addEventListener("click",function(){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
})

removeFrnd.addEventListener("click",function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
})
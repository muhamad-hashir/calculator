let num1 = 9
let num2 = 12
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
function add(){
    console.log("Add Clicked!")
    sumEl.textContent = num1+num2
}

function subtract(){
    console.log("Subtract CLicked!")
    sumEl.textContent = num1-num2
}
function multiply(){
    console.log("Multiply Clicked!")
    sumEl.textContent = num1*num2
}
function div(){
    console.log("Division Clicked!")
    if(num2 == 0){
    sumEl.textContent = "Division not possible! Denominator is zero..."
}else{
    sumEl.textContent = num1/num2
}
}
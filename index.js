let sumEl = document.getElementById("sum-el")

function add(){
    let num1 = Number(document.getElementById("num1-el").value)
    let num2 = Number(document.getElementById("num2-el").value)
    console.log("Add Clicked!")
    sumEl.textContent = "Sum: " + (num1+num2)
}

function subtract(){
    let num1 = Number(document.getElementById("num1-el").value)
    let num2 = Number(document.getElementById("num2-el").value)
    console.log("Subtract CLicked!")
    sumEl.textContent = "Subtraction: " + (num1-num2)
}
function multiply(){
    let num1 = Number(document.getElementById("num1-el").value)
    let num2 = Number(document.getElementById("num2-el").value)
    console.log("Multiply Clicked!")
    sumEl.textContent = "Product: " + (num1*num2)
}
function div(){
    let num1 = Number(document.getElementById("num1-el").value)
    let num2 = Number(document.getElementById("num2-el").value)
    console.log("Division Clicked!")
    if(num2 == 0){
    sumEl.textContent = "Division not possible! Denominator is zero..."
}else{
    sumEl.textContent = "Division: " + (num1/num2)
}
}
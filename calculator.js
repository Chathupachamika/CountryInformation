//-------------- CALCULATOR CODES --------------------------------
function calc() {
    let number1 = Number(document.getElementById("number01").value);
    let number2 = Number(document.getElementById("number02").value);
    
    let op = document.getElementById("op").value;
    let lblOutput = document.getElementById("output");
    
    switch(op){
        case "+":
            lblOutput.innerHTML = number1 + number2;
            break;
        case "-":
            lblOutput.innerHTML = number1 - number2;
            break;
        case "*":
            lblOutput.innerHTML = number1 * number2;
            break;
        case "/":
            lblOutput.innerHTML = number1 / number2;
            break;
        default:
            lblOutput.innerHTML = "Invalid operator";
    }
}
//---------------------------------------------------------------------
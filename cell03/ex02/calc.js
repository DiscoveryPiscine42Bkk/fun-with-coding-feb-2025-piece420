function calculate() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operator = document.getElementById("operator").value;

    if (!Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2)) || num1 < 0 || num2 < 0) {
        alert("Error :(");
        return;
    }
    
    

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        alert("Error :(");
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = num1 / num2;
            break;
        case "%":
            if (num2 === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = num1 % num2;
            break;
        default:
            alert("Error :(");
            return;
    }

    alert("Result: " + result);
    console.log("Result:", result);
}


setInterval(() => {
    alert("Please, use me...");
}, 30000);

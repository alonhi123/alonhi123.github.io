document.getElementById("basic-calculator").addEventListener("submit", function(event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Делить на ноль незя >.<";
            }
            break;
        default:
            result = "Неверная операция";
    }
    document.getElementById("result").innerText = `Результат: ${result}`;
});

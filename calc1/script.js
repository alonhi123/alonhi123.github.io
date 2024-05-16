document.getElementById("calculator").addEventListener("submit", function(event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.querySelector(".operation-btn.selected")?.value;
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
          result = "Делить на ноль нельзя";
        }
        break;
      case 'sin':
        result = Math.sin(num1);
        break;
      case 'cos':
        result = Math.cos(num1);
        break;
      case 'tan':
        result = Math.tan(num1);
        break;
      default:
        result = "Неверная операция";
    }
  
    document.getElementById("result").innerText = `Результат: ${result}`;
  });
  
  const operationButtons = document.querySelectorAll(".operation-btn");
  operationButtons.forEach(button => {
    button.addEventListener("click", () => {
      operationButtons.forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
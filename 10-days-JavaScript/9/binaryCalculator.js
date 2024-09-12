// Get elements
let res = document.getElementById("res");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btnClr = document.getElementById("btnClr");
let btnEql = document.getElementById("btnEql");
let btnSum = document.getElementById("btnSum");
let btnSub = document.getElementById("btnSub");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");

// Add event listeners to buttons
btn0.addEventListener("click", () => (res.innerHTML += "0"));
btn1.addEventListener("click", () => (res.innerHTML += "1"));
btnClr.addEventListener("click", () => (res.innerHTML = ""));
btnSum.addEventListener("click", () => (res.innerHTML += "+"));
btnSub.addEventListener("click", () => (res.innerHTML += "-"));
btnMul.addEventListener("click", () => (res.innerHTML += "*"));
btnDiv.addEventListener("click", () => (res.innerHTML += "/"));
btnEql.addEventListener("click", () => {
  let expression = res.innerHTML;
  let operands = expression.split(/[\+\-\*\/]/);
  let operator = expression.match(/[\+\-\*\/]/);

  if (operands.length === 2 && operator !== null) {
    let num1 = parseInt(operands[0], 2);
    let num2 = parseInt(operands[1], 2);
    let result;

    switch (operator[0]) {
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
        result = Math.floor(num1 / num2);
        break;
    }

    res.innerHTML = result.toString(2);
  }
});

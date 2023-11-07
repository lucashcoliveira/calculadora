const display = document.getElementById("display");
const calcButtons = document.querySelectorAll(".numbers");
const deleteButton = document.getElementById("back");
const cleanButton = document.getElementById("clean");
const operations = document.querySelectorAll(".operations");

const selectButtons = calcButtons.forEach(function (element) {
  element.addEventListener("click", (event) => {
    const elementClick = event.currentTarget;
    if (display.innerText === "0") {
      display.innerHTML = elementClick.innerHTML;
    } else {
      display.innerHTML += elementClick.innerHTML;
    }
  });

  const cleanBtn = cleanButton.addEventListener("click", () => {
    display.innerHTML = "0";
  });
});

const backBtn = deleteButton.addEventListener("click", () => {
  const back = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = back.substring(
    0,
    back.length - 1
  );
  // console.log(back);
  if (display.innerHTML === "") {
    display.innerHTML = 0;
  }
});

let num1;
let num2;
let op;
let tot;

const operators = operations.forEach(operator => {
  operator.addEventListener("click", () => {
    num1 = parseInt(display.innerHTML);
    op = operator.value;
    display.innerHTML = 0;
    console.log(op)
  });
  
});

const result = document.getElementById("result");
result.addEventListener("click", () => {
  num2 = parseInt(display.innerHTML);
  let tot;

  switch (op) {
    case "+":
      tot = num1 + num2;
      break;
    case "-":
      tot = num1 - num2;
      break;
    case "*":
      tot = num1 * num2;
      break;
    case "/":
      tot = num1 / num2;
      break;
    default:
      tot = "Operação inválida";
  }

  display.innerHTML = tot;

});

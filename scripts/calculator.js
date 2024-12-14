let calculation = localStorage.getItem("calculation") || "0";
updateDisplayElement();

function calculate() {
  calculation = String(eval(calculation));
  updateDisplayElement();
  updateMemory();
}

function removeLast() {
  calculation = calculation.slice(0, -1);
  if (calculation === ''){
    calculation = '0';
  }
  updateDisplayElement();
  updateMemory();
}

function updateDisplayElement() {
  document.querySelector(".js-calc-display").innerHTML = calculation;
}

function updateCalculation(operand) {
  if (calculation[0] === "0") {
    calculation = calculation.slice(1);
    updateDisplayElement();
  }
  calculation += operand;
  updateDisplayElement();
  updateMemory();
}

function clearCalc() {
  calculation = "0";
  updateDisplayElement();
}

function updateMemory() {
  localStorage.setItem("calculation", calculation);
}

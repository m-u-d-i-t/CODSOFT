let screen = document.getElementById('screen');
let equation = '';

function appendToScreen(value) {
  equation += value;
  screen.value = equation;
}

function clearScreen() {
  equation = '';
  screen.value = '';
}

function calculate() {
  try {
    let result = eval(equation);
    screen.value = result;
    equation = result.toString();
  } catch (error) {
    screen.value = 'Error';
  }
}

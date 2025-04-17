document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById('display');
  const numbers = document.querySelectorAll('.number');
  const operators = document.querySelectorAll('.operator');
  const equals = document.querySelector('.equals');
  const clear = document.querySelector('.clear');

  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
      display.value += this.getAttribute('data-number');
    });
  }

  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
      display.value += ' ' + this.getAttribute('data-operator') + ' ';
    });
  }

  equals.addEventListener('click', function () {
    display.value = eval(display.value);
  });

  clear.addEventListener('click', function () {
    display.value = '';
  });
});

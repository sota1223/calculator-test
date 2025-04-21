/*
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
});*/


document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let value = btn.innerText;

      if (value === "=") {
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = "エラー";
        }
      } else if (value === "C") {
        display.value = "";
      } else {
        if (value === "×") value = "*";
        if (value === "÷") value = "/";
        display.value += value;
      }
    });
  });
});



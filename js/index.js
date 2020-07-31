const display = document.querySelector('.display');
const historyDisplay = document.querySelector('.historyDisplay');

document
  .querySelectorAll('.digits button')
  .forEach((button) => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
  const digit = ev.target.innerText;
  display.value += digit;
}

document.querySelector('.point').addEventListener('click', pointPressed);

function pointPressed() {
  if (display.value === '') {
    display.value += '0.';
  } else {
    display.value += '.';
  }
}

document
  .querySelectorAll('.opers button')
  .forEach((button) => button.addEventListener('click', operPressed));

function operPressed(ev) {
  const oper = ev.target.innerText;
  for (let i = 0; i < 1; i++) {
    if (display.value === '') {
      if (oper === '+' || oper === '/' || oper === '*') {
        display.value += '0' + oper;
      }
    }
    if (display.value.indexOf(oper) === display.value.length + 1) {
      eqPressed();
      display.value = display.value.split('+').join('');
      display.value = display.value.split('*').join('');
      display.value = display.value.split('-').join('');
      display.value = display.value.split('/').join('');
    }
  }
  display.value += oper;
  // }
}

document.querySelector('.percentage').addEventListener('click', percPressed);

function percPressed(ev) {
  digitPressed(ev);
}

document.querySelector('.erase').addEventListener('click', erasePressed);

function erasePressed() {
  display.value = '';
}

document
  .querySelector('.erase-last-element')
  .addEventListener('click', eraseLastPressed);

function eraseLastPressed() {
  display.value = display.value.substring(0, display.value.length - 1);
}

document.querySelector('.eq').addEventListener('click', eqPressed);

function eqPressed() {
  historyDisplay.value += display.value;
  let divisionZero = 'Division cannot be zero';
  if (display.value.indexOf('%') > -1) {
    let firstValue = display.value.substring(0, display.value.indexOf('%'));
    let secondValue = display.value.substring(display.value.indexOf('%') + 1);
    display.value = (firstValue * secondValue) / 100;
  }
  if (eval(display.value).toFixed(2) == Infinity) {
    display.value = divisionZero;
  } else {
    display.value = eval(display.value).toFixed(2);
  }
  historyDisplay.value += '=' + display.value + ' ';
}

document.querySelector('.history').addEventListener('click', historyPressed);

function historyPressed() {
  historyDisplay.value = '';
}

// changing all opers
// point

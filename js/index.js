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
  if (display.value.endsWith('.')) {
    display.value = display.value.substring(0, display.value.length - 1);
  }
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
  // for (let i = 0; i < 1; i++) {
  //   if (display.value === '') {
  //     if (oper === '+' || oper === '/' || oper === '*') {
  //       display.value += '0' + oper;
  //     }
  //   }
  if (
    display.value.endsWith('+') ||
    display.value.endsWith('-') ||
    display.value.endsWith('*') ||
    display.value.endsWith('/')
  ) {
    display.value =
      display.value.substring(0, display.value.length - 1) +
      ev.target.innerText;
  } else {
    display.value += ev.target.innerText;
  }
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
  let displayValue = display.value;
  // historyDisplay.value += display.value;
  let divisionZero = 'Division cannot be zero';
  let a = "";
  if (display.value.indexOf('%') > -1) {
    let firstValue = display.value.substring(0, display.value.indexOf('%'));
    let secondValue = display.value.substring(display.value.indexOf('%') + 1);
    display.value = (firstValue * secondValue) / 100;
  }
  if (
    eval(display.value).toFixed(2) == Infinity ||
    eval(display.value).toFixed(2) == -Infinity
  ) {
    display.value = divisionZero;
  } else {
    display.value = Math.round(eval(display.value) * 1000000000) / 1000000000; // to fixed is not the best method
  }
  // let b = historyDisplay.value + '=' + display.value + ' ';
  historyDisplay.value = displayValue + '=' + display.value + "\n" + historyDisplay.value;
}

document.querySelector('.historyBtn').addEventListener('click', historyPressed);

function historyPressed() {
  historyDisplay.value = '';
}

function changeCSS(cssFile, cssLinkIndex) {

  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

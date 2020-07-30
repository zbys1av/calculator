const display = document.querySelector('.display');


document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    const digit = ev.target.innerText;
    display.value += digit;
}


document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', operPressed));

function operPressed(ev) {
    const oper = ev.target.innerText;
    if (display.value.indexOf("+") > -1 || display.value.indexOf("-") > -1 || display.value.indexOf("*") > -1 || display.value.indexOf("/") > -1){
        display.value = display.value.substring(0, display.value.length - 1);
    }
    display.value += oper;
}


document.querySelector('.erase').addEventListener('click', erasePressed);
    
function erasePressed() {
    display.value = "";
}


document.querySelector('.eq').addEventListener('click', eqPressed);

function eqPressed() {
    display.value = eval(display.value);
}
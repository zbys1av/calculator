const display = document.querySelector('.display');


document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    const digit = ev.target.innerText;
    display.value += digit;
}

document.querySelector('.point').addEventListener('click', pointPressed);

function pointPressed(){
    //const point = ev.target.innerText;
    if (display.value == 0){
        display.value += "0.";
    } else {
        display.value += ".";
    }
}


document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', operPressed));

function operPressed(ev) {
    const oper = ev.target.innerText;
    if (display.value.indexOf("+") > -1 || display.value.indexOf("-") > -1 || display.value.indexOf("*") > -1 || display.value.indexOf("/") > -1){
        if (display.value.indexOf(oper) == (display.value.length)+1){
            display.value = display.value.substring(0, display.value.length - 1);
        }
        eqPressed();
    }
    display.value += oper;
}


document.querySelector('.erase').addEventListener('click', erasePressed);
    
function erasePressed() {
    display.value = "";
}

document.querySelector('.erase-last-element').addEventListener('click', eraseLastPressed);

function eraseLastPressed(){
    display.value = display.value.substring(0, display.value.length - 1);
}


document.querySelector('.eq').addEventListener('click', eqPressed);

function eqPressed() {
    //display.value = Math.round((eval(display.value) + Number.EPSILON) * 100) / 100;
    display.value = (eval(display.value)).toFixed(2);
}
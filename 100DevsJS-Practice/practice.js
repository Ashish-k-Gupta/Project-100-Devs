let total = 0;

document.querySelector('#zero').addEventListener('click', makeZero)
document.querySelector('#addThree').addEventListener('click', addThree)
document.querySelector('#addNine').addEventListener('click', addNine)
document.querySelector('#subFive').addEventListener('click', subFive)

function makeZero(){
    total = 0;
    document.querySelector('#resultHere').innerText = total;
}
function addThree(){
    total = total + 3;
    document.querySelector('#resultHere').innerText = total;
}
function addNine(){
    total = total + 9;
    document.querySelector('#resultHere').innerText = total;
}
function subFive(){
    total = total - 5;
    document.querySelector('#resultHere').innerText = total;
}
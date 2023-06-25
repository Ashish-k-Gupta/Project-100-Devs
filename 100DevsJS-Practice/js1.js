document.getElementById("red").onclick = colorRed
document.getElementById("orange").onclick = colorOrange
document.getElementById("green").onclick = colorGreen



function colorRed(){
    document.querySelector("#jcole").style.backgroundColor = "red"
    document.querySelector("body").style.backgroundColor = "pink"
    document.querySelector("body").style.color = "white"
}
function colorOrange(){
    document.querySelector("#jcole").style.backgroundColor = "blue"
    document.querySelector("body").style.backgroundColor = "orange"
    document.querySelector("body").style.color = "white"
}
function colorGreen(){
    document.querySelector("#jcole").style.backgroundColor = "yellow"
    document.querySelector("body").style.backgroundColor = "green"
    document.querySelector("body").style.color = "white"
}
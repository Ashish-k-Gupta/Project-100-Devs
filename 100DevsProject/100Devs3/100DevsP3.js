
<<<<<<< HEAD
const joker = document.querySelector('#joker')
const loki = document.querySelector('#liki')
const thanos = document.querySelector('#thanos')
const darth = document.querySelector('#darth')


document.querySelector('#theJoker').addEventListener('click', theJoker)
document.querySelector('#theLoki').addEventListener('click', theLoki)
document.querySelector('#theThanos').addEventListener('click', theThanos)
document.querySelector('#theDarth').addEventListener('click', theDarth)


function theJoker(){
    joker.classList.toggle('hidden')
    loki.classList.add('hidden')
    thanos.classList.add('hidden')
    darth.classList.add('hidden')
}
function theLoki(){
    joker.classList.add('hidden')
    loki.classList.toggle('hidden')
    thanos.classList.add('hidden')
    darth.classList.add('hidden')
}
function theThanos(){
    joker.classList.add('hidden')
    loki.classList.add('hidden')
    thanos.classList.toggle('hidden')
    darth.classList.add('hidden')
}
function theDarth(){
    joker.classList.add('hidden')
    loki.classList.add('hidden')
    thanos.classList.add('hidden')
    darth.classList.toggle('hidden')
}


=======
let joker  = document.querySelector('#joker')
let loki = document.querySelector('#loki')
let thanos = document.querySelector('#thanos')
let darth = document.querySelector('#darth')

 document.querySelector('#theJoker').addEventListener('click', theJoker)
 document.querySelector('#theLoki').addEventListener('click', theLoki)
 document.querySelector('#theThanos').addEventListener('click', theThanos)
 document.querySelector('#theDarth').addEventListener('click', theDarth)


function theJoker(){
     joker.classList.toggle('hidden')
     loki.classList.add('hidden')
     thanos.classList.add('hidden')
     darth.classList.add('hidden')
 }
 function theLoki(){
     joker.classList.add('hidden')
     loki.classList.toggle('hidden')
     thanos.classList.add('hidden')
     darth.classList.add('hidden')
 }
 function theThanos(){
     joker.classList.add('hidden')
     loki.classList.add('hidden')
     thanos.classList.toggle('hidden')
     darth.classList.add('hidden')
 }
 function theDarth(){
     joker.classList.add('hidden')
     loki.classList.add('hidden')
     thanos.classList.add('hidden')
     darth.classList.toggle('hidden')
  }



>>>>>>> 12f673e9b041818fe3d526e1d5dbd702c6184bfc

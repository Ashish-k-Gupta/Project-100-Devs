const contestants = document.querySelectorAll('.contestants')

Array.from(contestants).forEach(element => element.addEventListener('click', theAnswer))

function theAnswer(click){
    if(click.target.classList.contains('theBest')){
        document.querySelector('#loki').classList.toggle('hidden')
    }else{
        alert("Wrong Answer!")
    }
}
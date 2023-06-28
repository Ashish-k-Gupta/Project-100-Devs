const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', theBest))

function theBest(click) {
    if (click.target.classList.contains('best')) {
      document.querySelector('#joker').classList.toggle('hidden');
    } else {
      document.querySelector('#joker').classList.add('hidden');
      setTimeout(() => {
        alert('Wrong!!!');
      }, 0);
    }
  }
  

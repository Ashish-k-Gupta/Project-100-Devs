
const synth = window.speechSynthesis;

document.querySelector('#yell').addEventListener('click',updateText);
document.querySelector('#deleteText').addEventListener('click', deleteText);


                                                   
function updateText() {
      var firstName = document.getElementById("firstName").value;
      var middleName = document.getElementById("middleName").value;      

      const theText =`${firstName} ${middleName}`;
      document.querySelector("#placeToYell").innerText = theText

    
    speakText(theText);
}

function speakText(text) {
  var utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
  utterance.rate = 0.5;
}



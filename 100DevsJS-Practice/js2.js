document.querySelector('#check').addEventListener('click', check)

function check(){

    const day  = document.getElementById('day').value

    //Conditionals

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
            document.getElementById('placeholder').innerText = "It's a working Day"
        
    }else if(day ==="Saturday" || day === "Sunday"){
        document.getElementById('placeholder').innerText = "It's a Weekend"
    }else{
        document.getElementById('placeholder').innerText = "Error!!! Check you input"
}
}



function convertToTitleCase(inputString){
    let words = inputString.split(' ');
    let titleCaseWords = [];


    for(let i = 0; i < words.lenth; i++){
        let word = words[i].toLowerCase();
        word = word.charAt(0).toUpperCase() + word.slice(1);
        titleCaseWords.push(word);

    }

    let titleCaseString = titleCaseWords.join(' ');
    return titleCaseString;
}

let inputString = "hello world"
let titleCaseString = convertToTitleCase(inputString)
console.log(titleCaseString);









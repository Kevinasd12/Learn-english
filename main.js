
let words = [
    {"Hello" : ["Hola"] },
    {"Again" : "De nuevo" },
    {"Food" : ["Comida", "Alimento"]},
    {"Child" : "Niño"},
    {"Woman" : "Mujer"},
    {"Mother" : "Madre"},
    {"Father" : ["Padre", "Padres"] },
    {"People" : "Personas"},
    {"Son" : "Hijo"},
    {"Love" : "Amor"},
    {"Feel" : "Sentir" },
    {"Enginner" : "Ingeniero"},
    {"Run" : "Correr"},
];



let indexCorrect = 0
let indexIncorrect = 0
let wordKey = ""
let wordValues = ""
let contador = 0


// input word
const inputWord = document.getElementById('input-word')
//////////
const wordEnglish = document.querySelector('#word-english')
const buttons = document.querySelector('.buttons')
const nextWord = document.querySelector('#nextWord')
const botonStart = document.querySelector('#button-start')
const boxStart = document.querySelector('#start')
const remplaceInput = document.querySelector('.start')
// ouputs 
const correctFlex = document.querySelector('#correct')
const incorrectFlex = document.querySelector('#incorrect')
const goodLuck = document.querySelector('#good-luck')

// número aleatorio 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
// volver palabra Capitalize
function capitalize(texto) {
    if (texto.length === 0) return texto;
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}


//initialize buttons 
botonStart.addEventListener('click', starting)
nextWord.addEventListener('click', ouputNextWord)
document.getElementById('check').addEventListener('click', checking)



function locations(int) {
    //start
    if (int == 0) {
        remplaceInput.style.display = "none"
        inputWord.style.display = "flex"
        document.querySelector('.start')
        inputWord.value = '';
        boxStart.style.display = "none"
        buttons.style.display = "flex"
        goodLuck.style.display = "none"
        incorrectFlex.style.display = "none"
        correctFlex.style.display = "none"

    }
    // correct
    else if (int == 1){
        incorrectFlex.style.display = "none"
        goodLuck.style.display = "none"
        correctFlex.style.display = "flex"

        
    }
    // incorrect 
    else if (int == 2){
        goodLuck.style.display = "none"
        correctFlex.style.display = "none"
        incorrectFlex.style.display = "flex"

    }
}

// funcion start bottons
function starting() {
    locations(0)
    ouputNextWord()
}


/* funcion that start random words, and input words in two variables  
wordKey = palabra en ingles
wordValues = palabra en spanish 
*/
function ouputNextWord() {
    locations(0)
    let numberRandomWord = getRandomNumber(1,words.length)
    contador = 0 
    
    words.forEach(word => {
        let key = Object.keys(word)[0]
        let values = word[key]
        contador++
        if (contador === numberRandomWord){
            wordKey = key
            wordValues = values
            wordEnglish.innerText = wordKey
        }
        else {
        }
    })
}


// check if your spanish word is good write.
function checking() {
    const checkWord = inputWord.value.trim()
    
    // check if checkWord is includes in word
    if (wordValues.includes(capitalize(checkWord)) == true) { 
        indexCorrect++
        locations(1);
        inputWord.value = '';
    } 
    else {
        indexIncorrect++
        locations(2);
    }

}

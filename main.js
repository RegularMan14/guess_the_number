const form = document.querySelector('#input')
const button = form.querySelector('.btn')
const target = Math.round(Math.random()*100)
var guesses = []
let numGuesses = 10
let correctGuess = false
document.querySelector('.lastResult').innerText = numGuesses

form.addEventListener('submit', (e) => {
    e.preventDefault()
	const input = form.querySelector('#num')
	const inputVal = parseInt(input.value)
	const display = document.querySelector('.output').querySelector('.result')
	const prevGuesses = document.querySelector('.guesses')
	const lastResult = document.querySelector('.lastResult')
    
    if (numGuesses > 0 && correctGuess === false) {
        if (inputVal === target) {
            display.innerText = `You Guessed the correct number. It's ${inputVal}`
            numGuesses = numGuesses - 1
            lastResult.innerText = numGuesses
            correctGuess = true
        } else if (inputVal < target) {
            display.innerText = "Try guessing higher!"
            guesses.push(inputVal)
            numGuesses = numGuesses - 1
            lastResult.innerText = numGuesses
        } else if (inputVal > target) {
            display.innerText = "Try guessing lower!"
            guesses.push(inputVal)
            numGuesses = numGuesses - 1
            lastResult.innerText = numGuesses
        }
    }
    else {
        button.disabled = true
        button.style.display = 'none'

        guesses.forEach((it) => {
            prevGuesses.innerText = prevGuesses.innerText + ' ' + it 
        })
        if (numGuesses === 0) {
            display.innerText = "Sorry! No guesses left!"
        }
    }

})
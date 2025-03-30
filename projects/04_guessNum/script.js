let randomNum = parseInt(Math.random() * 10 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const low_high = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //it will check input , it proper or not
  if (isNaN(guess)) {
    alert('Plz enter valid number');
  } else if (guess < 1) {
    alert('Plz enter more than 1 ');
  } else if (guess > 10) {
    alert('Plz enter less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      display_msg(`game over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      chkGuess(guess);
    }
  }
}

function chkGuess(guess) {
  //given value is lower or higher or equal

  if (guess === randomNum) {
    display_msg(`you guessed it right`);
    endGame();
  } else if (guess < randomNum) {
    display_msg(`Number is too low`);
  } else if (guess > randomNum) {
    display_msg(`Number is too high`);
  }
}

function displayGuess(guess) {
  //clean the value move to next // cleanup method
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function display_msg(message) {
  // print the message
  low_high.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  //end the game
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button><h2 id = "newGame">new Game</h2></button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //new game
  const newGamebutton = document.querySelector('#newGame');
  newGamebutton.addEventListener('clicl', function (e) {
    randomNum = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

const submitBtn = document.querySelector('#submitBtn');
let scoreMode = 101;
let guessNum = randomNum();
let instDisplay = document.querySelector('#display');
let gameOver = false;
let upTo = scoreMode - 1;
let text = 'Guess a number, 1 to '+ upTo;
const resetBtn = document.querySelector('#reset');
const div = document.querySelector('#hideDiv');

function submit(){
  const input = Number(document.querySelector('#input').value);
  let texts = text
  if(!gameOver){
    if(guessNum === input){
      gameOver = true;
    texts = 'Congratulations, Your guess is correct!';
    resetBtn.textContent = 'Play Again';
    resetBtn.style.display = 'block';
    div.classList.add('hide')
    } else if(input > guessNum){
    texts = input + ' ' + 'is a bit higher'
    } else {
    texts = input + ' ' + 'is a bit lower'
    }
    instDisplay.textContent = texts;
    
  }
}

function reset(){
  gameOver = false;
  instDisplay.textContent = text;
  guessNum = randomNum();
  resetBtn.style.display = 'none';
  div.classList.remove('hide');
}

function randomNum(){
  let random = Math.floor(Math.random() * scoreMode);
  return random;
}
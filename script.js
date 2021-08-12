'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.again').addEventListener('click', () => {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  displayMessage('Start guessing...')
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('.check').style.display = 'block'
  document.querySelector('body').style.backgroundColor = '#222222'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.score').textContent = score
})

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    displayMessage('⚠️ No number to check!')
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber
    displayMessage('🎉 You are correct!')
    document.querySelector('.check').style.display = 'none'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('body').style.backgroundColor = '#60b347'

    if (highscore > score) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    } else {
      if (score > highscore) {
        highscore = score
        document.querySelector('.highscore').textContent = highscore
      } else {
        document.querySelector('.highscore').textContent = highscore
      }
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('🙃 Oops... you lose!')
      document.querySelector('.score').textContent = 0
      document.querySelector('.check').style.display = 'none'
      document.querySelector('body').style.backgroundColor = '#ff3c00'
    }
  }
})

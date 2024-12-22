// Initialize game variables
let randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
let lives = 3; // Total lives
const livesDisplay = document.getElementById('lives');
const messageDisplay = document.getElementById('message');
const guessInput = document.getElementById('guessInput');
const submitGuessButton = document.getElementById('submitGuess');
const restartGameButton = document.getElementById('restartGame');

// Display initial lives
updateLives();

// Function to update lives display
function updateLives() {
    livesDisplay.innerHTML = '❤️'.repeat(lives);
}

// Function to handle guesses
submitGuessButton.addEventListener('click', () => {
    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 10) {
        messageDisplay.textContent = 'Please enter a number between 1 and 10.';
        return;
    }

    if (guess === randomNumber) {
        messageDisplay.textContent = '🎉 Congratulations! You guessed the correct number!';
        endGame(true);
    } else {
        lives--;
        if (lives > 0) {
            messageDisplay.textContent = `Wrong guess! Try again.`;
            updateLives();
        } else {
            messageDisplay.textContent = `😞 Game Over! The correct number was ${randomNumber}.`;
            endGame(false);
        }
    }

    guessInput.value = ''; // Clear input field
});

// Function to handle end of the game
function endGame(win) {
    submitGuessButton.disabled = true;
    restartGameButton.classList.remove('hidden');
    guessInput.disabled = true;
}

// Restart game
restartGameButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    lives = 3;
    updateLives();
    messageDisplay.textContent = 'Guess a number between 1 and 10:';
    guessInput.disabled = false;
    submitGuessButton.disabled = false;
    restartGameButton.classList.add('hidden');
});

if(0.1 + 0.2 == 0.3){
    console.log(`true`);
}
else{console.log(`false`);

}
/* eslint-disable prefer-const */
/**
 * @The_Plan
 *
 * @initialize_game
 * pick a random letter
 * wait for the user to type a key on their keyboard
 * check that letter against the random letter the PC chose
 *
 * let the user know if they are right / wrong
 * -- if wrong: we deduct from # of guesses and show them the wrong guess, render that letter on the screen
 * -- if wrong AND they don't have any guesses left: show losing message & update the losses + reset/initialize the game again
 *
 *
 * If right: show a winning msg, pdate the wins and reset/initialize the game
 *
 *
 */

/**
 * @prop {Game Variables}
 */
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let userGuesses = []; // basically need to keep track of a list of letters the user has chosen
let randomLetter;
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

/**
 * @prop {UI Functions}
 *
 * use functions to store code that will manipulate the DOM for me
 * set the value of the span with id (win/losses ...) to the value of the Game variable at the time we call the function
 */
const winsElement = () => (document.getElementById('wins').innerHTML = wins);
const lossesElement = () => (document.getElementById('losses').innerHTML = losses);
const guessesLeftElement = () => (document.getElementById('guessesLeft').innerHTML = guessesLeft);
const userGuessesElement = () => (document.getElementById('userGuesses').innerHTML = userGuesses);

/**
 * @prop {Utility Functions}
 */

/**
 * @prop {Event Listeners}
 */

const initializeGame = () => {
  console.log('STARTED');
};

// Start Game
initializeGame();

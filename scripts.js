console.log('... loaded');

// Created the game object to OWN ALL the things
var guessNumberGame = {};


// Accept a guess and manage repsonse
guessNumberGame.makeGuess = function(guess){
  if(guess == this.answer){  // if the answer is correct
    this.winGame();  //  Prompt user they win
  } else {  // Otherwise
    this.promptUser(guess);  // Prompt the user larger or smaller
  }
};

//  Prompt the user if larger or smaller
guessNumberGame.promptUser = function(guess){
  if(guess > this.answer){  // If guess is too large
    var message = "The answer is in fact... smaller than " + guess;
    this.$promptArea.text(message);  // Change the DOM with message
  } else if ( guess < this.answer) {  // If the guess is too small
    var message = "The answer is in fact... larger than " + guess;
    this.$promptArea.text(message);  // Change the DOM with message
  }
};

// The user has won!  Tell em
guessNumberGame.winGame = function(){
  this.$promptArea.text('You win!!'); // Change the DOM with message
}

//  Handle a form.. that contains the guess
guessNumberGame.setGuessFormHandler = function(){
  var scope = this;  // Copy the guessNumberGame scope
  this.$guessForm.on('submit', function(e){  // set event handler for form submssion
    e.preventDefault();  // The form wants to send stuff... but NO  we don't want that... stay here
    var guessInput = $(this).find('input');  // Grab the input element
    var guess = guessInput.val(); // Grab the guessed number
    scope.makeGuess(guess);  // Make the guess
  });
};

// ALLL The things that need to be setup for game to start
guessNumberGame.init = function($guessForm, $promptArea){
  var maxAnswerValuePossible = 100;  // This game is number between 0 and 100
  this.answer = Math.floor(Math.random() * maxAnswerValuePossible);  // Create a random answer
  this.$guessForm = $guessForm;  // Store the guess form ON the object
  this.$promptArea = $promptArea; // Store the prompt area ON the object
  this.setGuessFormHandler();  // Set up the form handler
};




//     Defining Stuff
// **************************
//     Using Stuff

$(function(){  // When the document is ready

  var $guessForm = $('#guess-place');  // Go get the form from the DOM
  var $promptArea = $('#user-prompt');  // Go get the prompt area from the DOM
  guessNumberGame.init($guessForm, $promptArea);  // init the game...  game begins

});

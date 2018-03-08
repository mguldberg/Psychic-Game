        //Begin Psychic Game JS code - game.js

        // initialize game variables
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var pastUserGuesses = [];
        var computerChoices = [];

        //declare variables and initialize them
        // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
        var computerGuessesValidSet = genCharArray();


        //loop forever and forever
        // while (true) {

        // Initialize computerGuess 
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerGuessesValidSet[Math.floor(Math.random() * computerGuessesValidSet.length)];
        console.log(Math.random());
        console.log(Math.floor(Math.random() * computerGuessesValidSet.length));


        //Take in user guess
        //This function is run whenever the user presses a key.
        document.onkeyup = function (event) {

            // Determines which key was pressed.
            var userGuess = event.key;

            // Alerts the key the user pressed (userGuess).
            // alert("User guess: " + userGuess);
            console.log("user guess: " + userGuess + "computer Guess: " + computerGuess);


            //IF user guess is a lowercase character proceed
            if (validateUserData(userGuess) == true) {

                //Get Computer choice
                //Compare Computer choice to user choice to determineif there was a match
                //if match 
                //  increment wins
                //  reset guesses left
                //else !match
                //  decrement guesses left (update HTML guesses)
                //  append to guesses chosen (update HTML guesses)
                if (userGuess == computerGuess) {

                    wins++;
                    guessesLeft = 9;
                    pastUserGuesses.length = 0;


                    //Increment wins total in HTML
                    //Get HTML element for displaying wins
                    var winsHTML = document.getElementById("wins-total");
                    //set HTML to current wins total
                    winsHTML.innerHTML = ("<strong>" + wins + "</strong>");


                    //Reset guesses left total in HTML
                    //Get HTML element for displaying guesses left
                    var guessesLeftHtml = document.getElementById("guesses-left");
                    //set HTML to current wins total
                    guessesLeftHtml.innerHTML = ("<strong>" + guessesLeft + "</strong>");

                    //clear the user choices because it is the end of the game
                    //set HTML to display the user guesses
                    var userGuessesHTML = document.getElementById("user-guesses")
                    userGuessesHTML.innerHTML = (" ");

                    //ask user to try again
                    alert("You win!! The winning guess was: " + computerGuess +".");

                    // Initialize new computerGuess 
                    // Randomly chooses a choice from the options array. This is the Computer's guess.
                    computerGuess = computerGuessesValidSet[Math.floor(Math.random() * computerGuessesValidSet.length)];

                }
                else {
                    guessesLeft--;
                    //add user guess to the array of incorrect user guesses
                    pastUserGuesses.push(userGuess);

                    //Decrement guesses left total in HTML
                    //Get HTML element for displaying guesses left
                    var guessesLeftHtml = document.getElementById("guesses-left");
                    //set HTML to current wins total
                    guessesLeftHtml.innerHTML = ("<strong>" + guessesLeft + "</strong>");
                    console.log(guessesLeft + " ");

                    //createand then display HTML string from an array
                    //set HTML to display the user guesses
                    var userGuessesHTML = document.getElementById("user-guesses")
                    guessesHTMLString = createArrayString(pastUserGuesses);
                    userGuessesHTML.innerHTML = (" " + guessesHTMLString + " ");

                }

                //check if user ran out of guesses
                //if no guesses left 
                //  increment losses
                //  reset guesses for next 'game'
                //  reset guesses array
                //else 
                //  do nothing
                console.log("guessesLeft" + guessesLeft);
                if (guessesLeft == 0) {
                    losses++;

                    //reset for the next game
                    pastUserGuesses.length = 0;
                    guessesLeft = 9;

                    // Initialize new computerGuess 
                    // Randomly chooses a choice from the options array. This is the Computer's guess.
                    computerGuess = computerGuessesValidSet[Math.floor(Math.random() * computerGuessesValidSet.length)];

                    //Increment wins total in HTML
                    //Get HTML element for displaying wins
                    var lossesHTML = document.getElementById("losses-total");
                    //set HTML to current wins total
                    lossesHTML.innerHTML = ("<strong>" +losses + "</strong>");

                    //Reset guesses left total in HTML
                    //Get HTML element for displaying guesses left
                    var guessesLeftHtml = document.getElementById("guesses-left");
                    //set HTML to current wins total
                    guessesLeftHtml.innerHTML = ("<strong>" + guessesLeft + "</strong>");

                    console.log("final user guess" + userGuess);

                    // NOT USED - didn't match end squence of video
                    //if at the end of the game
                    //trim 0 chars off the front of the array string and trim 1 , off the end of the string
                    // console.log(guessesHTMLString + "1st check")
                    // if (guessesLeft == 0) {
                    //     guessesHTMLString = guessesHTMLString.slice(0, -2);
                    //     console.log(guessesHTMLString + "2nd check")

                    // }
                    // userGuessesHTML.innerHTML = (" " + guessesHTMLString + " ");

                    // console.log(guessesHTMLString + "3rd check")

                    //ask user to try again
                    // alert("Please try again!!");
                    alert("PLease try again.  The letter I was thinking of was: '" + computerGuess +"'.");

                    //Reset guesses left total in HTML
                    //Get HTML element for displaying guesses left
                    var guessesLeftHtml = document.getElementById("guesses-left");
                    //set HTML to current wins total
                    guessesLeftHtml.innerHTML = ("<strong>" + guessesLeft + "</strong>");

                    //clear the user choices because it is the end of the game
                    //set HTML to display the user guesses
                    var userGuessesHTML = document.getElementById("user-guesses")
                    userGuessesHTML.innerHTML = (" ");
                    
                }
            }
            //ELSE tell user to enter a letter a-z (lowercase)
            else {
                alert("Please enter a letter a-z (lowercase only)");
            }
        };

        //
        //JS function declarations
        //

        // generate array of alphabet a-z; lowercase letters only
        function genCharArray() {
            var alpha = "a".charCodeAt(0);
            var omega = "z".charCodeAt(0);
            var arrayName = [];  // emtpy array

            // set variable to increment with
            var alphaI = alpha;
            console.log(alphaI + "beginning of alphabet;" + omega + "end of alphabet");
            for (alphaI; alphaI <= omega; alphaI++) {
                arrayName.push(String.fromCharCode(alphaI));
                console.log(String.fromCharCode(alphaI));
            }
            return arrayName;
        }

        //checks if input is in the valid set - used in this case to validate user input as a lowercase letter or not
        function validateUserData(userData) {
            for (i = 0; i < computerGuessesValidSet.length; i++) {
                if (userData == computerGuessesValidSet[i]) {
                    return true;
                }
            }
            return false;
        }

        //create HTML string from an array
        function createArrayString(array) {
            var string = ""; //initialize string to a blank value
            var arrayLength = array.length;

            for (i = 0; i < arrayLength; i++) {
                string = (string + array[i] + ", ");
            }
            return string;
        }
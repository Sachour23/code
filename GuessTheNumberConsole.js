//we are greeting user
println("Welcome to guess the number");
var realNumber
var guess
var tries = 1;

//we are going to create the random number
//realNumber = Math.floor(Math.random() * 101);
realNumber = Randomizer.nextInt(1,100);
println("DEBUG: realNumber=" + realNumber)  //TESTING OFF

//we are going to ask the user to guess the random number
guess = readInt("I chose a number between 1-100, can you guess?\n\n");

//we are going to repeat it over and over till the user guesses the number
while(guess != realNumber) {
    //we are goin to tell him if he is high or low
    if(guess > realNumber) {
        guess = readInt("\nToo high, guess again\n\n");
    }
    else { 
        guess = readInt("\nToo low, guess again\n\n");
    }
    tries++;
}
println("\nGreat! You got it in " + tries + " tries");

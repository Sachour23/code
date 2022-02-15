//plays real rock paper scissors
function realRPS(){
   
    var userCounter = 0;
    var CPUCounter = 0;
    var result;
    var RSPC;
    var Choice;
    
    while(userCounter != 2 && CPUCounter != 2){
        println("\nRock=1 beats Scissors=3 who beats Paper=2 who beats Rock=1");
        RSPC = Randomizer.nextInt(1,3);
       // println("DEBUG:RSPC=" + RSPC + " - " + convertSignNumberToSignText(RSPC));
        Choice = readInt("3, 2, 1, GO!\n");
        result = determineMatchResult(Choice,RSPC);
        if(result == "CPUWin") {
            CPUCounter++;
        }
        else if(result == "UserWin"){
            userCounter++;
        }
    }
    
    if(userCounter == 2) {
        println("Congrats! You won the game!");
    }
    else {
        println("Well played! Try again another time.");
    }
}
// This function prints something like this: You said Rock. I said Paper. I win!
// This function also returns "UserWin" if the user won, "CPUWin" if the CPU won, "TieGame" if the game is tie. 
function determineMatchResult(userSignNumber, CPUSignNumber) {
    
    var matchResult;
     
    if(userSignNumber == CPUSignNumber){
        matchResult = "TieGame";
        println("\nYou said " + convertSignNumberToSignText(userSignNumber) + ". I said " + convertSignNumberToSignText(CPUSignNumber) + ". It's a tie!");
    }
    else if(userSignNumber - CPUSignNumber == 1 || userSignNumber - CPUSignNumber == -2){
        matchResult = "UserWin";
        println("\nYou said " + convertSignNumberToSignText(userSignNumber) + ". I said " + convertSignNumberToSignText(CPUSignNumber) + ". You win!");
    }
    else if(userSignNumber - CPUSignNumber == -1 || userSignNumber - CPUSignNumber == 2){
        matchResult = "CPUWin";
        println("\nYou said " + convertSignNumberToSignText(userSignNumber) + ". I said " + convertSignNumberToSignText(CPUSignNumber) + ". I win!");
    }
    else {
        println("\nYou said " + convertSignNumberToSignText(userSignNumber) + ". I said " + convertSignNumberToSignText(CPUSignNumber) + ". I cannot determine the winner.");
    }
    return matchResult
}
function convertSignNumberToSignText(signNumber){
    var signText;
    
    if(signNumber == 1){
        signText = "Rock";
    }
    else if(signNumber == 2){
        signText = "Paper";
    }
    else if(signNumber == 3){
        signText = "Scissors";
    }
    else{
        signText = "Unknown";
    }
    //69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69 69
    return signText;
}
//plays the quiz
function quiz(){
    var outOf;
    outOf = 0;
    println("\nWelcome to the Quiz");
//question 1
    println("Question 1.");
    var Q1 = readLine("What is the processor of a computer called?\n\nA: CPU\n\nB: GPU\n\nC: Ram\n\nD: Memory\n");
    var score = 0;
    if(Q1 == "A" || Q1 == "a"){
        println("\nCorrect!");
        outOf++;
    }
    else {
        println("\nThats incorrect the correct answer was A");
    }
//question 2    
    println("Question 2.");
    var Q2 = readLine("What is the unit of to measure a cars power?\n\nA: Joule\n\nB: Meter\n\nC: Horse-power\n\nD: bazuka\n");
    if(Q2 == "C" || Q2 == "c"){
        println("\nCorrect!");
        outOf++;
    }
    else {
        println("\nThats incorrect the correct answer was C");
    }
//question 3    
    println("Question 3");
    var Q3 = readLine("What is the tip of your pencil made of?\n\nA: Iron\n\nB: Lead\n\nC: Not here\n\nD: Graphite\n");
    if(Q3 == "D" || Q3 == "d"){
        println("\nCorrect!");
        outOf++;
    }
    else {
        println("\nThat is incorrect the answer was D");
    }
//question 4
    println("Question 4.");
    var Q4 = readLine("who created this game?\n\n A: Ian\n\n B: Zach\n\n C: Max\n\n D: Sacha\n");
    if(Q4 == "B" || Q4 == "b"){
        println("\nCorrect!");
        outOf++;
    }
    if(Q4 == "A" || Q4 == "a"){
        println("\nIan codes in python, it was Zach");
    }
    if(Q4 == "C" || Q4 == "c"){
        println("\nMax codes in HTML, it was Zach");
    }
    if(Q4 == "D" || Q4 == "d"){
        println("\nSacha Modified this but Zach made it.");
    }
//question 5
    println("Question 5.");
    var Q5 = readLine("What is the most popular video game in the world?\n\nA: Genshin Impact V\n\nB: League of Legends\n\nC: Valorant\n\nD: Minecraft\n");
    if(Q5 == "D" || Q5 == "d"){
        println("\nCorrect!");
        outOf++;
    }
    if(Q5 == "A" || Q5 == "a"){
        println("\nWhile Genshin Impact is a very popular game, Minecraft is more popular.");
    }
    if(Q5 == "B" || Q5 == "b"){
        println("\nLeague of Legends is Popular, not like Minecraft though.");
    }
    if(Q5 == "C" || Q5 == "c"){
        println("\nWhile Valorant is famous Minecraft is on top.");
    }
//question 6
    println("Question 6.");
    var Q6 = readLine("How many lines of code does google have?\n\nA: 2 Billion\n\nB: 900 million\n\nC: 10 billion\n\nD: 500 million\n");
    if(Q6 == "A" || Q6 == "a"){
        println("\nCorrect!");
        outOf++;
    }
    else {
        println("\nThat is incorrect the correct answer was A");
    }
//question 7
    println("Question 7.");
    var Q7 = readLine("Who is the richest person on earth?\n\nA: Bill Gates\n\nB: Elon Musk\n\nC: Jeff Bezos\n\nD: Mr.Beast\n");
    if(Q7 == "B" || Q7 == "b"){
        println("\nCorrect!");
        outOf++
    }
    if(Q7 == "C" || Q7 == "c"){
        println("\nNo it was Elon Musk");
    }
    if(Q7 == "D" || Q7 == "d"){
        println("\nMr. Beast isn't even a billionaire.");
    }
    if(Q7 == "A" || Q7 == "a"){
        println("\nNo it is Elon Musk");
    }
    println("Great job you have finished the Quiz!");
    println("You got a " + outOf + " out of 7.");
    }
//plays guess the number
function guessNumber(){
    //we are greeting user
println("\nWelcome to guess the number");
var realNumber
var guess
var tries = 1;

//we are going to create the random number
//realNumber = Math.floor(Math.random() * 101);
realNumber = Randomizer.nextInt(1,100);
//println("DEBUG: realNumber=" + realNumber)  //TESTING OFF

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
}
//this is the rigged rock paper scissors
function riggedRPS(){

    println("\nLets play some Rock Paper Scissors 2 out of 3")
    var RPS = readLine("Choose Rock Paper or Scissors\n\n");
    if(RPS == "Scissors" || RPS == "scissors"){
        println("Rock");
    }
    if(RPS == "Rock" || RPS == "rock"){
        println("Paper");
    }
    if(RPS == "Paper" || RPS == "paper"){
       println("Scissors");
    }
    println("\nLooks like you lost")
    println("Second Round.\n");
    var RPS = readLine("Choose Rock Paper or Scissors\n\n");
    if(RPS == "Scissors" || RPS == "scissors"){
        println("Rock");
    }
    if(RPS == "Rock" || RPS == "rock"){
        println("Paper");
    }
    if(RPS == "Paper" || RPS == "paper"){
        println("Scissors");
    }
println("\nLooks like you lost")
}
//is the Icount Bot
function Icount() {
        // The computer greets the user.
    println("\nHi!");

    // The computer ask the user's name.
    var userName = readLine("What is your name?\n\n");
    println("\nNice to meet you " + userName +".");

    // The computer ask the user's favorite number.
    var FN = readInt("What is your favorite number " + userName + "?\n\n");
    println("\nI can count to "+FN +"\n");

    // The computer counts from 1 to the favorite number(FN) (using a while).
    var numb = 1;
    while( numb <= FN) {
        println (numb +"\n");
        numb = numb + 1; // Other way of doing an increment: numb++;
    }

    // The computer counts from 1 to the favorite number(FN) (using a for).
    /*
    for(var numb = 1; numb <= FN; numb++) {
    println (numb +"\n"); 
    }
    */

    // The computer shares his thoughts about how big the number was.
    if(FN > 50) {
        println("WoW! " + FN + " is a big number."); 
    }
    else {
        println (FN + " is a cool number.\n");
    }
    // The computer will ask the user if they want the computer to count backwards from their favorite number.

    var YAN = readLine("Do You want me to count backwards from " + FN + "?\n\n");
    println("");
    if(YAN.toLowerCase() == "yes" || YAN.toLowerCase() == "y" || YAN.toLowerCase() == "yeah") {
        // The computer will count backward from the favorite number(FN) down to 1.
        /*
        numb = FN;
        while(numb >= 1) {
            println (numb + "\n")
            numb = numb - 1; //Other way of doing a decrement: numb--;   
        }
        */
    
        for(numb = FN; numb >= 1; numb--) {
             println (numb + "\n");
        }
        println("Okay, bye BESTIE!")
    }
    else {
        println("Awww... You're such a jerk!");
    }
}
//asks user if they want to play a game
var yesNo = readLine("Hello, Would You like to play a game?\n");

if(yesNo == "yes" || yesNo == "Yes" || yesNo == "y") {
    var Games
    //says what games are available
    Games = readInt("\nPress 1 for Rock Paper Scissiors,\nPress 2 for Guess The Number,\nPress 3 to meet IcountBot,\nPress 4 to take the Quiz.\n");
} 
else {
    println("\nTHEN WHY DID YOU COME HERE?");
}
println("DEBUG: Games = " + Games)
//if user wats to they play rock paper scissors

if(Games == 1) {
    var beat
    beat = readLine("Do you think you can beat me in Rock,Paper,Scissors?\n")
    if(beat == "Yes" || beat == "yes" || beat == "y"){
        riggedRPS();
    }
    else if(beat == "No" || beat == "no" || beat == "n"){
        realRPS();
    }
    else{
        println("whatever " + beat + " is ill take it for a no.")
    }
}
//if they want to the user plays guess the number
 if(Games == 2){
        guessNumber();
    }
//if they want to the user meets he IcountBot
if(Games == 3) {
    Icount();
}
//if they want to the user takes the quiz
if(Games == 4){
    quiz();
}

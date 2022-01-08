// The computer greets the user.
println("Hi!");

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

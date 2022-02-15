function start(){
    var passWord = "Insert"//change password here
    var passCodeOne = readLine("Please enter your passcode.\n");
    if(passCodeOne == passWord){
        println("\nCorrect\n");
        //what it will do if correct
    }else {
        var passCodeTwo = readLine("Wrong, please enter your passcode again.\n");
        if(passCodeTwo == passWord){
            println("\nCorrect\n");
            //what it will do if correct
        }else {
            var passCodeThree = readLine("Wrong, please enter your passcode again.\n");
            if(passCodeThree == passWord){
                println("\nCorrect\n");
                //what it will do if correct
            }else{
                println("\nYou messed up too many times\n")
            }
        }
    }
}

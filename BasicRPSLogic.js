/**
 * Gabby Belmarez
 * RPS Logic
**/

var rock = 0;
var paper = 1;
var scissors = 2;

/**
 * function for finding random num (chooses r,p, or s for computer)
**/
function randomRPS(){
    var num = Math.random()*4;
    return Math.floor(num);
}

/**
 * function for determining winner
**/
function whoWins(uChoice){
    var cChoice = randomRPS();
    if( cChoice == uChoice){
	document.getElementById("answer").innerHTML = ("Computer chose " + toString(cChoice) + " so you tied");
    }
    else if( cChoice == rock && uChoice == paper || cChoice == paper && uChoice == scissors || cChoice == scissors && uChoice == rock){
	document.getElementById("answer").innerHTML = ("Computer chose " + toString(cChoice) + " so you win");
    }
    else if(cChoice == rock && uChoice == scissors || cChoice == paper && uChoice == rock || cChoice == scissors && uChoice == paper){
	document.getElementById("answer").innerHTML = ("Computer chose " + toString(cChoice) + " so you lose");
    }
}

/**
 * Converts the integer to the corresponding string value
**/
function toString(num){
    if(num==rock){
	return "rock";
    }
    else if(num==paper){
	return "paper";
    }
    else{
	return "scissors";
    }
}


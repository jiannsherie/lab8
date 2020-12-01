var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice > 0 && computerChoice < 0.33) {
  computerChoice = "rock";
} else if (computerChoice > 0.34 && computerChoice < 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
//document.write(computerChoice);
var compare = function(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
      alert("The result is a tie!");
}
if(userChoice === "rock") {
    if(computerChoice === "scissors") {
        alert("rock wins");
    } else {
        alert("paper wins");
    }
}
if(userChoice === "paper") {
    if(computerChoice === "rock") {
        alert("paper wins");
    } else {
        alert("scissors wins");
}
if(userChoice === "scissors") {
    if(computerChoice === "rock"){
        alert("rock wins");
    } else {
        if(computerChoice === "paper") {
           alert("scissors wins");
        }
    }
}
}
};
document.write("User Choice: " + userChoice+" ");
document.write("Computer Choice: " + computerChoice+" ");
compare(userChoice, computerChoice);
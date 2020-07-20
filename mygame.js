const readlineSync = require(`readline-sync`);


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
pile = randomIntFromInterval(10, 100);


console.log("Hello player, in this game you are either going to go against"
    + " a computer. The rule of the game is simple, there are a "
    + "certain set of marbles in the bag ranging from 10-100, the first person to remove the "
    + "final marble loses. The player must remove one marble or no more than half the marbles left\n");

let userName = readlineSync.question("What is your name?");
let goFirst = readlineSync.keyInYN("Do you want to go first?");
let playerGoFirst;




let computerMove = Math.floor((Math.random() * pile) + 1);






console.log("There is " + pile + " marbles in the bag");
if (goFirst === true) {
    while (pile > 0) {
        let userMove = readlineSync.questionInt(userName + " how many marbles do you want to take out?");
        while (userMove > pile / 2 || userMove <= 0) {
            userMove = readlineSync.questionInt("You can't take away more than half of the remaining bag or less than 1, try again ");
        }
        console.log("You take away " + userMove + " marbles from the bag");
        pile = pile - userMove;
        console.log("There is " + pile + " left in the bag");
        if (pile == 1) {
            console.log("You Win!");
            break; s
        }
        while (computerMove > (pile / 2)) {
            computerMove = Math.floor((Math.random() * pile) + 1);
        }
        console.log("The computer takes away " + computerMove + " from the stack");
        pile = pile - computerMove;
        console.log("There is " + pile + " left in the bag");
        if (pile == 1) {
            console.log("Computer Win!");
            break; 
        }
    }


} else {
    while(pile > 0){
        while (computerMove > (pile / 2)) {
        computerMove = Math.floor((Math.random() * pile) + 1);
    }
    console.log("The computer takes away " + computerMove + " from the stack");
    pile = pile - computerMove;
    console.log("There is " + pile + " left in the bag");
    if (pile == 1) {
        console.log("Computer Win!");
        break; s
    }

    let userMove = readlineSync.questionInt(userName + " how many marbles do you want to take out?");
    while (userMove > pile / 2 || userMove <= 0) {
        userMove = readlineSync.questionInt("You can't take away more than half of the remaining bag or less than 1, try again ");
    }
    console.log("You take away " + userMove + " marbles from the bag");
    pile = pile - userMove;
    console.log("There are " + pile + " marbles left in the bag");
    if (pile == 1) {
        console.log("You Win!");
        break; s
    }
    }
    

}







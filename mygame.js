const readlineSync = require(`readline-sync`);



   function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
pile = randomIntFromInterval(10,100);


console.log("Hello player, in this game you are either going to go against"
+ " a computer. The rule of the game is simple, there are a "
+ "certain set of marbles in the bag ranging from 10-100, the first person to remove the "
+ "final marble loses. The player must remove one marble or no more than half the marbles left\n");

let goFirst = readlineSync.keyInYN("Do you want to go first?");
let playerGoFirst;


/*The smart computer is design to leave
a specfic amount of marbles in the bag (1,3,7,15,31,63) */

    let computerMove = Math.floor((Math.random() * pile) + 1);

    while(computerMove > (pile / 2)){
        computerMove = Math.floor((Math.random() * pile) + 1);
    }
    
    



if (goFirst === true){
    playerGoFirst = true;
}else{
    playerGoFirst = false;
}

if(playerGoFirst === true){
    console.log("There are " + pile + " marbles in the bag");
    console.log("The smart computer takes away " + computerMove + " from the stack");
    pile = pile - computerMove;
    console.log("There is " + pile + " left in the bag");
    
}



let playGame = confirm("Want to play rock, paper, scissors?");

if(playGame){
  while(playGame){
    const playerChoice = prompt("Choose rock, paper or scissor.");
    if(playerChoice || playerChoice === ""){
        const playerOne = playerChoice.trim().toLocaleLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissor"){
            const computerChoice = Math.floor(Math.random() * 3 + 1);
            const rpsArray = ["rock", "paper", "scissor"];
            const computer = rpsArray[computerChoice];

            
            const result = playerOne === computer ? "Tie game!"
            : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne} \nComputer: ${computer} \n Computer wins!`
            : playerOne === "rock" && computer === "scissor" ? `playerOne: ${playerOne} \nComputer: ${computer} \n playerOne wins!`
            : playerOne === "paper" && computer === "rock" ? `playerOne: ${playerOne} \nComputer: ${computer} \n playerOne wins!`
            : playerOne === "paper" && computer === "scissor" ? `playerOne: ${playerOne} \nComputer: ${computer} \n Computer wins!`
            : playerOne === "scissor" && computer === "paper" ? `playerOne: ${playerOne} \nComputer: ${computer} \n playerOne wins!`
            : `playerOne: ${playerOne} \nComputer: ${computer} \n Computer wins!`;

            alert(result);

            playGame = confirm("Wanna play another one?");
            if(!playGame) alert("Okey, thanks for playing!");
            continue;
         } else{
            alert("Invalid input,please enter a valid input");
            continue;
        }
      } else{
        alert("I guess you changed your mind...")
        break;
       }
      } 
     } else{
        alert("Ok, better luck next time :(");
    }
 

// a function to return random choices of computer
function getComputerChoice()
{
 let choosen;  
   let res = Math.floor((Math.random() * 3) + 1 );
   if (res===1)
   {
    choosen ='Rock'
   }
   if (res===2)
   {
    choosen = 'Scissors'
   }
   if (res===3){
    choosen = 'Paper'
   }

   return choosen.toLowerCase();
}
  function playRound(userChoice,computerSelection)
  {
    let userScore = 0;
    let computerScore=0;
     userChoice = userChoice.toLowerCase();
    

      if (userChoice===computerSelection)
    {
      let userScore = 0;
      let computerScore=0;
    }
    else if (userChoice==='rock' && computerSelection==='scissors')
    {
      userScore++;
    }
    else if (computerSelection==='rock' && userChoice==='scissors'){
      computerScore++;
    }
    else if( userChoice==='paper'&& computerSelection==='rock'){
      userScore++;
    }
    else if (computerSelection==='paper'&& userChoice==='rock')
    {
      computerScore++;
    }
    else if (userChoice==='scissors' && computerSelection==='paper')
    {
      userScore++;
    }
    else if (computerSelection==='scissors' && userChoice==='paper')
    {
      computerScore++;
    }
  return userScore, computerScore;
  }
  let userChoice= prompt("choose either rock, paper or scissors");

  let computerSelection = getComputerChoice();
  console.log(playRound(userChoice,computerSelection));
  
  
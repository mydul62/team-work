
let score = {
  win:0,
  lost:0,
  tie:0,
}

let computerChoice;
function genarateComputerChoice(){
  let randomNumber = Math.random()*3;
    if(randomNumber>0 && randomNumber<=1){
      computerChoice='bat';
    }else if(randomNumber>1 && randomNumber<=2){
      computerChoice='ball';
    }
    else{
      computerChoice='stamp';
    }
}

function result(userMoves,computerMoves){
  if(userMoves == 'bat'){
    if(computerMoves=='bat'){
      score.tie ++;
      return 'tie';
    }else if(computerMoves=='stamp'){
      score.lost ++;
      return 'computer won';
    }
    else if(computerMoves=='ball'){
      score.win ++;
      return 'user won';
    }
  }else if(userMoves== 'ball'){
    if(computerMoves=='bat'){
      score.lost ++;
      return 'computer won';
    }else if(computerMoves=='stamp'){
      score.win ++;
      return 'user won';
    }
    else if(computerMoves=='ball'){
      score.tie ++;
      return ' tie';
    }
  }else if(userMoves == 'stamp'){
    if(computerMoves=='bat'){
      score.win ++;
      return 'user won';
    }else if(computerMoves=='stamp'){
      score.tie ++;
      return 'tie';
    }
    else if(computerMoves=='ball'){
      score.lost ++;
      return 'computer won';
    }
  }
}

function showResult(userMoves,computerMoves,finalResult){
  document.querySelector('.usrchoice').innerHTML =`user choice is ${userMoves} `;
  document.querySelector('.compchoice').innerHTML =`computer is ${computerMoves} `;
  document.querySelector('.finalRslt').innerHTML =`final result is ${finalResult} `;
  
  
;
}


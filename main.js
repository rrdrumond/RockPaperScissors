
let playerScore = 0;
let computerScore = 0;
let round = 0;




const computerSelection = document.createElement("div"); 
const result = document.createElement("div");
const container = document.createElement("div");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document. createElement("button");
const finalResult = document.createElement("div");
const score = document.createElement("div");
const body= document.querySelector("body");
const cpuResult = document.createElement("div");
const divButton = document.createElement("div");
const Btn1 = document.createElement("div");
const Btn2 = document.createElement("div");
const Btn3 = document.createElement("div");
let playerResult = document.createElement("div");
const showMesage = document.createElement("div");
const title = document.createElement("div");
const nameGame = document.createElement("p")

    

container.classList= "container";
btn1.classList ="fa-solid fa-hand-back-fist";
btn2.classList = "fa-solid fa-hand";
btn3.classList = "fa-solid fa-hand-scissors" ;
finalResult.classList = "finalResult";
result.classList = "result";
score.classList = "score";
cpuResult.classList = "cpuResult";
divButton.classList = "divButton";
Btn1.classList ="fa-solid fa-question";
result.classList= "result";
playerResult.classList= "fa-solid fa-question";
showMesage.classList= "showMessage";
title.classList="title";
nameGame.classList="nameGame";
score.textContent = (`Player Score = ${playerScore} Computer Score ${computerScore}`);
nameGame.textContent= "Rock Paper Scissors";






body.appendChild(container);
body.appendChild(showMesage)
container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);
body.appendChild(cpuResult);
cpuResult.appendChild(divButton);
divButton.appendChild(playerResult);
divButton.appendChild(Btn1);
cpuResult.appendChild(score);
body.appendChild(title);
title.appendChild(nameGame);





function playComputer() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
        const piedra= Btn1.classList= "fa-solid fa-hand-back-fist";
        return piedra;
    }else if (number % 3 === 1) {
        
        const papel= Btn1.classList= "fa-solid fa-hand";
        return papel;
        
    }else{
        const tijera = Btn1.classList ="fa-solid fa-hand-scissors";
        return tijera;
    };
};










function playRound(playerSelection){
    
    const playerComputer = playComputer();
    score.textContent = (`Player Score = ${playerScore}   Computer Score ${computerScore}`);
    
    divButton.appendChild(computerSelection);
    computerSelection.classList= "computerSelection";
    playerComputer;
    
    divButton.appendChild(computerSelection);
    showMesage.appendChild(finalResult);
    showMesage.appendChild(result);
    
    playerResult.classList= playerSelection;
    
   

    
    if (playerSelection === playerComputer){
        result.style="color: Yellow";
        return result.textContent= "Tie";
        
        
        
    }else if ((playerSelection == "fa-solid fa-hand-back-fist" && playerComputer == "fa-solid fa-hand-scissors") || (playerSelection == "fa-solid fa-hand-scissors" && playerComputer == "fa-solid fa-hand") || (playerSelection == "fa-solid fa-hand" && playerComputer == "fa-solid fa-hand-back-fist")){
        
        playerScore++;
        result.style="color: Green";
        return result.textContent= "You Win!"
        
        
    }else {
        computerScore++;
        result.style="color: Red"
        return result.textContent= "You Lost!"
        
    };
    return;
};



const buttons = document.querySelectorAll("button");


buttons.forEach(button => {
    button.addEventListener("click", function(){
        round++;
        
        if(round < 5){
            playRound(button.classList["value"]);
        } else {
            if (playerScore > computerScore){
                score.textContent = (`Player Score = ${playerScore} Computer Score ${computerScore}`);
                finalResult.style="color: Darkgrey";
                finalResult.textContent= "Click here to reset the game!";
                result.style="font-size: 35px; color: Green";
                result.textContent = "You Won the game!";

            } else if( playerScore < computerScore){
                score.textContent = (`Player Score = ${playerScore} Computer Score = ${computerScore}`);
                finalResult.style="color: Darkgrey";
                finalResult.textContent= "Click here to reset the game!";
                result.style= " color: Red; font-size: 35px";
                result.textContent= " You lost, Game over!";
                
            } else{
                finalResult.style="color: Darkgrey"
                finalResult.textContent="Click here to reset the game!"
                result.style="color: Yellow; font-size: 35px";
                result.textContent= "Tie";
            }
        }
        
    });
});

function reset(){
    playerScore = 0;
    computerScore = 0;
    round = 0;
    Btn1.classList ="fa-solid fa-question";
    playerResult.classList= "fa-solid fa-question";
    score.textContent = (`Player Score = ${playerScore}   Computer Score ${computerScore}`);
    finalResult.textContent= "";
    result.textContent= " ";
    result.style="backgrond-color: black";

}

finalResult.addEventListener("click", function(){
    reset();
})


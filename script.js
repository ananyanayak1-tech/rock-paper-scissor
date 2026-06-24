let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScoreElement = document.querySelector('#user-score');
const compScoreElement = document.querySelector('#comp-score');

function genComputerChoice(){
    let options = ["rock", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

function drawGame(){
    msg.innerHTML = "game was draw";
    msg.style.backgroundColor = "#fbdc8d";
    msg.style.color = "#520101";
}

function showWinner(userWin, compChoice, userChoice){
    if(userWin){
        userScore++;
        userScoreElement.innerHTML = userScore;
        msg.innerHTML = `you win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }else{
        compScore++;
        compScoreElement.innerHTML = compScore;
        msg.innerHTML = `you lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

function playGame(userChoice){
    console.log("User choice = ", userChoice);
    const compChoice = genComputerChoice();

    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            if(compChoice =="paper"){
                userWin = false;
            }
        }else if(userChoice == "paper"){
            if(compChoice == "scissor"){
                userWin = false;
            }
        }else{
            if(compChoice == "rock"){
                userWin = false;
            }
        }
        showWinner(userWin, compChoice, userChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})
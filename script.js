let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');

let userScorePara = document.getElementById('user-score');
let compScorePara = document.getElementById('comp-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "#696D7D";
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        
    }else{
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === 'rock' ){
            userWin = compChoice === 'scissors' ? true : false;
        }else if (userChoice === 'paper'){
            userWin = compChoice === 'rock' ? true : false;
        }else{
            userWin = compChoice === 'paper' ? true : false;
        }
        showWinner(userWin);
    }

};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
});
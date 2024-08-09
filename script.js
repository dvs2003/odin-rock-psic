console.log("Program Started.")

function getComputerChoice(computerChoice = 0) {
    // Generate a number b/w 0 - 99
    let choiceSeed = Math.random() * 100; 
    // 0 - 33 => rock; 33 - 66 => paper; 33-99 => scissor
    if (choiceSeed < 33) {
        return 'rock';
    } else if (choiceSeed < 66) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

function getHumanChoice(humanChoice) {
    humanChoice = prompt('Please choose b/w rock, paper and scissor').toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    // Win and Loss are from computers perspective
    if (humanChoice == computerChoice) {
        return 'draw';
    } else if (humanChoice == 'rock') {
        return (computerChoice == 'paper') ? 'won' : 'lost';
    } else if (humanChoice == 'paper') {
        return (computerChoice == 'scissor') ? 'won' : 'lost';
    } else return (computerChoice =='rock') ? 'won' : 'lost'; //Player chose scissor
}

function playGame(gamesCount = 5, humanWinsCount = 0, computerWinsCount = 0) {
    for (let index = 0; index < gamesCount; index++){
        // Could have used a switch satement here
        gameOutcome = playRound(getHumanChoice(), getComputerChoice());
        if (gameOutcome == 'won') {
            computerWinsCount ++;
            console.log("Computer wins this round!");
        } else if (gameOutcome == 'lost') {
            humanWinsCount ++;
            console.log("Human wins this round!");
        } else {
            console.log('Draw!');
            humanWinsCount ++;
            computerWinsCount ++;
        }
    }
    console.log(`Computer Wins = ${computerWinsCount}`);
    console.log(`Human Wins = ${humanWinsCount}`);
    return 200
}
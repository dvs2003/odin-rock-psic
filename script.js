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

function playGame(humanChoice, gamesCount = 5, humanWinsCount = 0, computerWinsCount = 0) {
    let gamesCounter = document.querySelector("#gameCount");
    let currentGamesCount = parseInt(gamesCounter.textContent);

    
        // Could have used a switch satement here
    gameOutcome = playRound(humanChoice, getComputerChoice());
    if (gameOutcome == 'won') {
        computerWinsCount ++;
        console.log("Computer wins this round!");
        gamesCounter.textContent = currentGamesCount + 1;
        addOutcome("Computer wins this round!");
    } else if (gameOutcome == 'lost') {
        humanWinsCount ++;
        console.log("Human wins this round!");
        gamesCounter.textContent = currentGamesCount + 1;
        addOutcome("Human wins this round!");
    } else {
        console.log('Draw!');
        humanWinsCount ++;
        computerWinsCount ++;
        gamesCounter.textContent = currentGamesCount + 1;
        addOutcome("Draw!");
    }

    console.log(`Computer Wins = ${computerWinsCount}`);
    console.log(`Human Wins = ${humanWinsCount}`);
    return 200
}


function reset(count) {
    alert('resetting');
    allCounters = document.querySelectorAll(".stats span");
    allCounters.forEach((counter) => {
        counter.textContent = 0;
    });

    outcomeList = document.querySelector("ol");
    allListItems = document.querySelectorAll("ol li");
    allListItems.forEach((eachLi) => {
        outcomeList.removeChild(eachLi);
    });
}

function addOutcome(outcomeText) {
    let outcomeList = document.querySelector("ol");
    let outcomeLi = document.createElement("li");
    outcomeLi.textContent = outcomeText;
    outcomeList.appendChild(outcomeLi);
    
}

const buttons = document.querySelectorAll(".playerSelection button");

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        playGame(button.id);
    });
  });



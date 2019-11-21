const btnsOne = document.querySelectorAll(".btn-1");
const btnsTwo = document.querySelectorAll(".btn-2");

const playerOne = {
  wins: 0,
  losses: 0,
  choice: undefined
};
const playerTwo = {
  wins: 0,
  losses: 0,
  choice: undefined
};

const displayOneChoise = document.querySelector("#chose-1");
const displayTwoChoise = document.querySelector("#chose-2");
const displayWinner = document.querySelector("#winner");
const playerOneWins = document.querySelector("#wins-1");
const playerTwoWins = document.querySelector("#wins-2");
const playerOneLoses = document.querySelector("#loss-1");
const playerTwoLoses = document.querySelector("#loss-2");

function addListeners(elements, player) {
  const el = elements;
  if (player === 1) {
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener("click", () => {
        if (playerOne.choice === undefined) {
          playerOne.choice = el[i].value;
          checkForWinner();
        } else {
          console.log("Player One has already chosen: " + playerOne.choice);
        }
      });
    }
  } else if (player === 2) {
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener("click", () => {
        if (playerTwo.choice === undefined) {
          playerTwo.choice = el[i].value;
          checkForWinner();
        } else {
          console.log("Player Two has already chosen: " + playerTwo.choice);
        }
      });
    }
  }
}

function capitalFirstLetter(string) {
  let word = string.split("");
  word[0] = word[0].toUpperCase();
  word = word.join("");
  return word;
}

function checkForWinner() {
  const one = 1;
  const two = 2;
  const draw = 3;
  if (playerOne.choice !== undefined && playerTwo.choice !== undefined) {
    if (playerOne.choice === "rock") {
      if (playerTwo.choice === "scissors") {
        displayResults(one);
        playerOne.wins += 1;
        playerTwo.losses += 1;
        setTimeout(init, 2000);
      } else if (playerTwo.choice === "paper") {
        displayResults(two);
        playerOne.losses += 1;
        playerTwo.wins += 1;
        setTimeout(init, 2000);
      } else {
        displayResults(draw);
        setTimeout(init, 2000);
      }
    } else if (playerOne.choice === "paper") {
      if (playerTwo.choice === "scissors") {
        displayResults(two);
        playerOne.losses += 1;
        playerTwo.wins += 1;
        setTimeout(init, 2000);
      } else if (playerTwo.choice === "paper") {
        displayResults(draw);
        setTimeout(init, 2000);
      } else {
        displayResults(one);
        playerOne.wins += 1;
        playerTwo.losses += 1;
        setTimeout(init, 2000);
      }
    } else {
      if (playerTwo.choice === "scissors") {
        displayResults(draw);
        setTimeout(init, 2000);
      } else if (playerTwo.choice === "paper") {
        displayResults(one);
        playerOne.wins += 1;
        playerTwo.losses += 1;
        setTimeout(init, 2000);
      } else {
        displayResults(two);
        playerOne.losses += 1;
        playerTwo.wins += 1;
        setTimeout(init, 2000);
      }
    }
  } else if (playerOne.choice === undefined && playerTwo.choice !== undefined) {
    console.log("Waiting on Player One");
  } else if (playerOne.choice !== undefined && playerTwo.choice === undefined) {
    console.log("Waiting on Player Two");
  }
}

function displayResults(winner) {
  if (winner === 1) {
    displayWinner.textContent = "Player One";
  } else if (winner === 2) {
    displayWinner.textContent = "Player Two";
  } else {
    displayWinner.textContent = "No One, Its a Draw";
  }
  let displayTwo = capitalFirstLetter(playerTwo.choice);
  displayTwoChoise.textContent = displayTwo;
  let displayOne = capitalFirstLetter(playerOne.choice);
  displayOneChoise.textContent = displayOne;
}

function init() {
  displayOneChoise.textContent = " ";
  displayTwoChoise.textContent = " ";
  displayWinner.textContent = " ";

  playerOneWins.textContent = playerOne.wins;
  playerTwoWins.textContent = playerTwo.wins;
  playerOneLoses.textContent = playerOne.losses;
  playerTwoLoses.textContent = playerTwo.losses;

  playerOne.choice = undefined;
  playerTwo.choice = undefined;
}

init();

addListeners(btnsOne, 1);
addListeners(btnsTwo, 2);

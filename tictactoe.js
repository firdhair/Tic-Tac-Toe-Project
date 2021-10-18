const boxes = Array.from(document.querySelectorAll(".box"));
const box1 = document.querySelector(".box1");
const result = document.querySelector(".result");
const restartButton = document.querySelector(".restart-button");
const button = document.querySelector("button");

const playerFactory = (name, mark, turn) => {
  return { name, mark, turn };
};

const gamePlay = (() => {
  const player = playerFactory("player", "X", true);
  const computer = playerFactory("computer", "O", false);

  return {
    player,
    computer,
  };
})();

const gameBoard = (() => {
  let boardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let allBoard = [];
  let classNames = [];
  let valueCheck = 0;
  let computer_won = "false";
  let player_won = "false";

  boxes.forEach(function (box) {
    box.addEventListener("click", (e) => {
      let divClass = e.originalTarget.className; // get div class
      checkWinner();

      console.log(boardValue, allBoard, valueCheck, computer_won, player_won);

      if (
        gamePlay.player.turn == true &&
        gamePlay.computer.turn == false &&
        computer_won == "false" &&
        player_won == "false" &&
        allBoard.length < 9 &&
        divClass !== ""
      ) {
        let boardString = divClass.substr(length - 1);
        let boardNum = parseInt(boardString);
        let getClass = document.querySelector(`div[class="${divClass}"]`);
        classNames.push(getClass);
        console.log(getClass, classNames);

        newPic = document.createElement("img");
        newPic.setAttribute("src", "./icons/cross.svg");
        getClass.appendChild(newPic);
        getClass.classList.add("cross");

        gamePlay.player.turn = false;
        gamePlay.computer.turn = true;

        // replace boardValue with X
        for (let i = 1; i < 10; i++) {
          if (boardNum == i) {
            boardValue[i - 1] = "X";
            allBoard.push(typeof boardValue[i - 1]);
          }
        }

        if (player_won == "false" && computer_won == "false") {
          setTimeout(playerComputer, 500);
        }
        checkWinner();
      }
    });
  });

  // restartButton.addEventListener("click", restartGame);

  // function restartGame() {
  //   boardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   allBoard = [];
  //   valueCheck = 0;
  //   computer_won = "false";
  //   player_won = "false";
  //   gamePlay.player.turn = true;
  //   gamePlay.computer.turn = false;

  //   console.log(box1);
  //   console.log(boardValue, allBoard, valueCheck, computer_won, player_won);
  //   box1.classList.remove("cross");
  //   console.log(box1);
  // }

  function playerComputer() {
    const allStrings = allBoard.every((board) => typeof board == "string");

    if (gamePlay.computer.turn == true && gamePlay.player.turn == false) {
      randomComputer();
      console.log(boardValue);

      if (allBoard.length == 9 && allStrings == true) {
        checkWinner();
        console.log("computer won: ", computer_won);
        if (computer_won == "true") {
          computerHasWon();
        } else if (computer_won == "false" && player_won == "false") {
          gameTie();
        }
        console.log("probably a tie");
      }
    }
  }

  function randomComputer() {
    let random = Math.floor(Math.random() * 9);
    let boardRandom = boardValue[random];
    let getClass;

    // check if computer has chosen on a filled board
    if (
      boardRandom == "O" ||
      (boardRandom == "X" &&
        computer_won == "false" &&
        player_won == "false" &&
        allBoard.length < 9)
    ) {
      randomComputer();
      //randomComputer();
    }

    // fill board when the requirements are
    else if (
      boardRandom !== "O" &&
      boardRandom !== "X" &&
      computer_won == "false" &&
      player_won == "false"
    ) {
      for (let i = 1; i < 10; i++) {
        if (boardRandom == i) {
          getClass = document.querySelector(`.box${i}`);
          console.log(getClass);
          drawCircle(getClass);
        }
        boardValue[random] = "O";
      }
      allBoard.push(typeof boardValue[random]);
      console.log(allBoard);

      checkWinner();
      gamePlay.player.turn = true;
      gamePlay.computer.turn = false;
      console.log(gamePlay.computer.turn, gamePlay.player.turn);
    }
  }

  function drawCircle(getClass) {
    newPic = document.createElement("img");
    newPic.setAttribute("src", "./icons/circle.svg");
    getClass.appendChild(newPic); // add picture to the div class
    getClass.classList.add("circle");
  }

  function checkWinner() {
    if (
      (boardValue[0] == "X" && boardValue[1] == "X" && boardValue[2] == "X") ||
      (boardValue[3] == "X" && boardValue[4] == "X" && boardValue[5] == "X") ||
      (boardValue[6] == "X" && boardValue[7] == "X" && boardValue[8] == "X") ||
      (boardValue[0] == "X" && boardValue[3] == "X" && boardValue[6] == "X") ||
      (boardValue[1] == "X" && boardValue[4] == "X" && boardValue[7] == "X") ||
      (boardValue[2] == "X" && boardValue[5] == "X" && boardValue[8] == "X") ||
      (boardValue[0] == "X" && boardValue[4] == "X" && boardValue[8] == "X") ||
      (boardValue[6] == "X" && boardValue[4] == "X" && boardValue[2] == "X")
    ) {
      player_won = "true";
      console.log(player_won);
      valueCheck++;

      if (valueCheck <= 1) {
        console.log("You Won!");
        youWon();
      }
      return;
    } else if (
      (boardValue[0] == "O" && boardValue[1] == "O" && boardValue[2] == "O") ||
      (boardValue[3] == "O" && boardValue[4] == "O" && boardValue[5] == "O") ||
      (boardValue[6] == "O" && boardValue[7] == "O" && boardValue[8] == "O") ||
      (boardValue[0] == "O" && boardValue[3] == "O" && boardValue[6] == "O") ||
      (boardValue[1] == "O" && boardValue[4] == "O" && boardValue[7] == "O") ||
      (boardValue[2] == "O" && boardValue[5] == "O" && boardValue[8] == "O") ||
      (boardValue[0] == "O" && boardValue[4] == "O" && boardValue[8] == "O") ||
      (boardValue[6] == "O" && boardValue[4] == "O" && boardValue[2] == "O")
    ) {
      computer_won = "true";
      valueCheck++;
      console.log("computer won: ", computer_won);

      if (valueCheck <= 1) {
        console.log("You Lose!");
        computerHasWon();
      }
      return;
    }
  }

  function youWon() {
    let text = document.createElement("p");

    text.innerHTML = "Congrats! You've won!";
    result.appendChild(text);
  }

  function computerHasWon() {
    let text = document.createElement("p");

    text.innerHTML = "Sorry! But Computer has won!";
    result.appendChild(text);
  }

  function gameTie() {
    let text = document.createElement("p");

    text.innerHTML = "Woops! It's a tie!";
    result.appendChild(text);
  }
  return {
    boardValue,
    allBoard,
    valueCheck,
    computer_won,
    player_won,
  };
})();

const boxes = Array.from(document.querySelectorAll(".box"));
const button = document.querySelector("button");
let arrValue = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];
let game_won = false;
let choice;

boxes.forEach((box) =>
  box.addEventListener("click", () => {
    //playGame(event);
    if (game_won == true) {
      //playGame();
      return;
    }
    playGame(event);
  })
);

function playGame(event) {
  console.log("game won?: " + game_won);
  checkBoard();
  playerHuman(event);
  //playerComputer();
  checkBoard();
  if (game_won == false) {
    setTimeout(playerComputer, 500);
  }
}

function checkBoard() {
  if (arrValue[0][0] == "X" && arrValue[0][1] == "X" && arrValue[0][2] == "X") {
    console.log("You Won!");
    game_won = !game_won;
    console.log(game_won);
    return;
  } else if (
    arrValue[0][0] == "X" &&
    arrValue[1][1] == "X" &&
    arrValue[2][2] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[0][0] == "X" &&
    arrValue[1][0] == "X" &&
    arrValue[2][0] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[0][1] == "X" &&
    arrValue[1][1] == "X" &&
    arrValue[2][1] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[0][2] == "X" &&
    arrValue[0][1] == "X" &&
    arrValue[0][0] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[0][2] == "X" &&
    arrValue[1][2] == "X" &&
    arrValue[2][2] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[0][2] == "X" &&
    arrValue[1][1] == "X" &&
    arrValue[2][0] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[1][0] == "X" &&
    arrValue[1][1] == "X" &&
    arrValue[1][2] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[1][2] == "X" &&
    arrValue[1][1] == "X" &&
    arrValue[1][0] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][0] == "X" &&
    arrValue[2][1] == "X" &&
    arrValue[2][2] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][0] == "X" &&
    arrValue[1][0] == "X" &&
    arrValue[0][0] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][0] == "X" &&
    arrValue[1][1] == "X" &&
    arrValue[0][2] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][2] == "X" &&
    arrValue[1][1] == "X" &&
    arrValue[0][1] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][2] == "X" &&
    arrValue[1][2] == "X" &&
    arrValue[0][2] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][2] == "X" &&
    arrValue[2][1] == "X" &&
    arrValue[2][0] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][2] == "X" &&
    arrValue[1][1] == "X" &&
    arrValue[0][0] == "X"
  ) {
    console.log("You Won!");
    game_won = !game_won;
    return;
  } else if (
    arrValue[0][0] == "O" &&
    arrValue[0][1] == "O" &&
    arrValue[0][2] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    console.log(game_won);
    return;
  } else if (
    arrValue[0][0] == "O" &&
    arrValue[1][1] == "O" &&
    arrValue[2][2] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[0][0] == "O" &&
    arrValue[1][0] == "O" &&
    arrValue[2][0] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[0][1] == "O" &&
    arrValue[1][1] == "O" &&
    arrValue[2][1] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[0][2] == "O" &&
    arrValue[0][1] == "O" &&
    arrValue[0][0] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[0][2] == "O" &&
    arrValue[1][2] == "O" &&
    arrValue[2][2] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[0][2] == "O" &&
    arrValue[1][1] == "O" &&
    arrValue[2][0] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[1][0] == "O" &&
    arrValue[1][1] == "O" &&
    arrValue[1][2] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[1][2] == "O" &&
    arrValue[1][1] == "O" &&
    arrValue[1][0] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][0] == "O" &&
    arrValue[2][1] == "O" &&
    arrValue[2][2] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][0] == "O" &&
    arrValue[1][0] == "O" &&
    arrValue[0][0] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][0] == "O" &&
    arrValue[1][1] == "O" &&
    arrValue[0][2] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][2] == "O" &&
    arrValue[1][1] == "O" &&
    arrValue[0][1] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][2] == "O" &&
    arrValue[1][2] == "O" &&
    arrValue[0][2] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][2] == "O" &&
    arrValue[2][1] == "O" &&
    arrValue[2][0] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else if (
    arrValue[2][2] == "O" &&
    arrValue[1][1] == "O" &&
    arrValue[0][0] == "O"
  ) {
    console.log("You Lose :( !");
    game_won = !game_won;
    return;
  } else {
    return;
  }
}

function playerHuman(event) {
  // get box class
  checkBoard();
  let divClass = event.originalTarget.className;
  let whichArray = divClass.substr(length - 1);
  let getClass = document.querySelector(`div[class="${divClass}"]`);

  newPic = document.createElement("img");
  newPic.setAttribute("src", "./icons/cross.svg");
  getClass.appendChild(newPic);
  getClass.classList.add("cross");

  // console.log(divClass);
  // console.log(divClass.substr(length - 1));
  if (whichArray == "1") {
    arrValue[0][0] = "X";
  } else if (whichArray == "2") {
    arrValue[0][1] = "X";
  } else if (whichArray == "3") {
    arrValue[0][2] = "X";
  } else if (whichArray == "4") {
    arrValue[1][0] = "X";
  } else if (whichArray == "5") {
    arrValue[1][1] = "X";
  } else if (whichArray == "6") {
    arrValue[1][2] = "X";
  } else if (whichArray == "7") {
    arrValue[2][0] = "X";
  } else if (whichArray == "8") {
    arrValue[2][1] = "X";
  } else if (whichArray == "9") {
    arrValue[2][2] = "X";
  }
}

function playerComputer() {
  checkBoard();
  let random = Math.floor(Math.random() * 3);
  let random2 = Math.floor(Math.random() * 3);
  choice = arrValue[random][random2];

  if (choice == "O" || choice == "X") {
    while (choice == "O" || choice == "X") {
      console.log("before:" + choice);
      randomCircle();
      console.log("after: " + choice);
      playerComputer();
    }
  } else if (choice !== "O" || choice !== "X") {
    arrValue[random][random2] = "O";
    if (choice == 1) {
      let getClass = document.querySelector(".box1");
      createCircle(getClass);
    } else if (choice == 2) {
      let getClass = document.querySelector(".box2");
      createCircle(getClass);
    } else if (choice == 3) {
      let getClass = document.querySelector(".box3");
      createCircle(getClass);
    } else if (choice == 4) {
      let getClass = document.querySelector(".box4");
      createCircle(getClass);
    } else if (choice == 5) {
      let getClass = document.querySelector(".box5");
      createCircle(getClass);
    } else if (choice == 6) {
      let getClass = document.querySelector(".box6");
      createCircle(getClass);
    } else if (choice == 7) {
      let getClass = document.querySelector(".box7");
      createCircle(getClass);
    } else if (choice == 8) {
      let getClass = document.querySelector(".box8");
      createCircle(getClass);
    } else if (choice == 9) {
      let getClass = document.querySelector(".box9");
      createCircle(getClass);
    }
  }
  console.log(choice);
}

function randomCircle() {
  let random = Math.floor(Math.random() * 3);
  let random2 = Math.floor(Math.random() * 3);
  choice = arrValue[random][random2];
  console.log("randomCircle: " + choice);
  return choice;
}

function createCircle(getClass) {
  newPic = document.createElement("img");
  newPic.setAttribute("src", "./icons/circle.svg");
  getClass.appendChild(newPic);
  getClass.classList.add("circle");
}

let getValue = (function () {
  //let arrValue = [];

  function showValue(value) {
    arrValue.push(value);
    console.log(arrValue);
  }
  return {
    showValue,
  };
})();

let player = (choice) => {};

const boxes = Array.from(document.querySelectorAll(".box"));
const button = document.querySelector("button");
let arrValue = [];

boxes.forEach((box) =>
  box.addEventListener("click", () => {
    boardGame(event);
  })
);

function boardGame(event) {
  console.log(event.originalTarget.className);
  // get box class
  let divClass = event.originalTarget.className;
  let getClass = document.querySelector(`div[class="${divClass}"]`);

  newPic = document.createElement("img");
  newPic.setAttribute("src", "./icons/cross.svg");
  getClass.appendChild(newPic);
  getClass.classList.add("cross");
  console.log(newPic);
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

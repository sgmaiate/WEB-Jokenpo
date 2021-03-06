let possiblePlays = ["Pedra", "Papel", "Tesoura"];
let playerChoice = document.querySelectorAll(".choice");
const scoreboard = document.querySelector(".scoreboard");
const declaredChoices = document.querySelector(".declared-choices");
const resultValue = document.querySelector(".result");
const resultScreen = document.querySelector(".visibility");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function computerChoice() {
  return possiblePlays[getRandomInt(0, 3)];
}
function gameStart() {
  computer = computerChoice();
  if (playerChoice == "Pedra") {
    if (computer == "Pedra") {
      scoreboard.children[2].firstElementChild.innerHTML =
        Number(scoreboard.children[2].firstElementChild.innerHTML) + 1;
      declaredChoices.innerHTML = `Você jogou ${playerChoice} e o Maiate jogou ${computer}`;
      resultValue.innerHTML = "VOCÊS EMPATARAM";
      showResult();
      drawPage();
    } else if (computer == "Tesoura") {
      scoreboard.firstElementChild.firstElementChild.innerHTML =
        Number(scoreboard.firstElementChild.firstElementChild.innerHTML) + 1;
      declaredChoices.innerHTML = `Você jogou ${playerChoice} e o Maiate jogou ${computer}`;
      resultValue.innerHTML = "VOCÊ GANHOU";
      showResult();
      winPage();
    } else {
      scoreboard.children[1].firstElementChild.innerHTML =
        Number(scoreboard.children[1].firstElementChild.innerHTML) + 1;
      declaredChoices.innerHTML = `Você jogou ${playerChoice} e o Maiate jogou ${computer}`;
      resultValue.innerHTML = "VOCÊ PERDEU";
      showResult();
      losePage();
    }
  }
  if (playerChoice == "Papel") {
    if (computer == "Pedra") {
      scoreboard.firstElementChild.firstElementChild.innerHTML =
        Number(scoreboard.firstElementChild.firstElementChild.innerHTML) + 1;
      declaredChoices.innerHTML = `Você jogou ${playerChoice} e o Maiate jogou ${computer}`;
      resultValue.innerHTML = "VOCÊ GANHOU";
      showResult();
      winPage();
    } else if (computer == "Tesoura") {
      scoreboard.children[1].firstElementChild.innerHTML =
        Number(scoreboard.children[1].firstElementChild.innerHTML) + 1;
      declaredChoices.innerHTML = `Você jogou ${playerChoice} e o Maiate jogou ${computer}`;
      resultValue.innerHTML = "VOCÊ PERDEU";
      showResult();
      losePage();
    } else {
      scoreboard.children[2].firstElementChild.innerHTML =
        Number(scoreboard.children[2].firstElementChild.innerHTML) + 1;
      declaredChoices.innerHTML = `Você jogou ${playerChoice} e o Maiate jogou ${computer}`;
      resultValue.innerHTML = "VOCÊS EMPATARAM";
      showResult();
      drawPage();
    }
  }
  if (playerChoice == "Tesoura") {
    if (computer == "Pedra") {
      scoreboard.children[1].firstElementChild.innerHTML =
        Number(scoreboard.children[1].firstElementChild.innerHTML) + 1;
      declaredChoices.innerHTML = `Você jogou ${playerChoice} e o Maiate jogou ${computer}`;
      resultValue.innerHTML = "VOCÊ PERDEU";
      showResult();
      losePage();
    } else if (computer == "Tesoura") {
      scoreboard.children[2].firstElementChild.innerHTML =
        Number(scoreboard.children[2].firstElementChild.innerHTML) + 1;
      declaredChoices.innerHTML = `Você jogou ${playerChoice} e o Maiate jogou ${computer}`;
      resultValue.innerHTML = "VOCÊS EMPATARAM";
      showResult();
      drawPage();
    } else {
      scoreboard.firstElementChild.firstElementChild.innerHTML =
        Number(scoreboard.firstElementChild.firstElementChild.innerHTML) + 1;
      declaredChoices.innerHTML = `Você jogou ${playerChoice} e o Maiate jogou ${computer}`;
      resultValue.innerHTML = "VOCÊ GANHOU";
      showResult();
      winPage();
    }
  }
}
function showResult() {
  resultScreen.classList.remove("hidden");
  setTimeout(closeResult, 3000);
}
function getRock() {
  playerChoice = "Pedra";
  gameStart();
}
function getPaper() {
  playerChoice = "Papel";
  gameStart();
}
function getScissor() {
  playerChoice = "Tesoura";
  gameStart();
}
function closeResult() {
  resultScreen.classList.add("hidden");
}
function winPage() {
  resultScreen.firstElementChild.classList.remove("lose-result");
  resultScreen.firstElementChild.classList.remove("draw-result");
  resultScreen.firstElementChild.classList.add("win-result");
  resultValue.style.color = "blue";
}
function losePage() {
  resultScreen.firstElementChild.classList.remove("win-result");
  resultScreen.firstElementChild.classList.remove("draw-result");
  resultScreen.firstElementChild.classList.add("lose-result");
  resultValue.style.color = "red";
}
function drawPage() {
  resultScreen.firstElementChild.classList.remove("win-result");
  resultScreen.firstElementChild.classList.remove("lose-result");
  resultScreen.firstElementChild.classList.add("draw-result");
  resultValue.style.color = "yellow";
}
playerChoice[0].addEventListener("click", getRock);
playerChoice[1].addEventListener("click", getPaper);
playerChoice[2].addEventListener("click", getScissor);

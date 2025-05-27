function getHole(index) {
  return document.getElementById(`hole${index}`);
}

let wins = 0;
let losses = 0;

function setMole() {
  for (let i = 1; i <= 9; i++) {
    getHole(i).classList.remove('hole_has-mole');
  }

  const randomIndex = Math.floor(Math.random() * 9) + 1;
  getHole(randomIndex).classList.add('hole_has-mole');
}

function holeClickHandler(event) {
  const hole = event.currentTarget;
  if (hole.classList.contains('hole_has-mole')) {
    wins++;
  } else {
    losses++;
  }

  const winsCounter = document.getElementById('wins');
  const lossesCounter = document.getElementById('losses');
  if (winsCounter) winsCounter.textContent = wins;
  if (lossesCounter) lossesCounter.textContent = losses;


  if (wins >= 10) {
    alert('Вы выиграли! Поздравляем!');
    resetGame();
  } else if (losses >= 5) {
    alert('Вы проиграли. Попробуйте снова.');
    resetGame();
  } else {
    setMole();
  }
}


function resetGame() {
  wins = 0;
  losses = 0;
  const winsCounter = document.getElementById('wins');
  const lossesCounter = document.getElementById('losses');
  if (winsCounter) winsCounter.textContent = wins;
  if (lossesCounter) lossesCounter.textContent = losses;
  setMole();
}


for (let i = 1; i <= 9; i++) {
  getHole(i).addEventListener('click', holeClickHandler);
}

setMole();

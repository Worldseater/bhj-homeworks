function getHole(index) {
  return document.getElementById(`hole${index}`);
}

let dead = 0;
let lost = 0;

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
    dead++;
  } else {
    lost++;
  }

  const deadCounter = document.getElementById('dead');
  const lostCounter = document.getElementById('lost');
  if (deadCounter) deadCounter.textContent = dead;
  if (lostCounter) lostCounter.textContent = lost;


  if (dead >= 10) {
    alert('Вы выиграли! Поздравляем!');
    resetGame();
  } else if (lost >= 5) {
    alert('Вы проиграли. Попробуйте снова.');
    resetGame();
  } else {
    setMole();
  }
}


function resetGame() {
  dead = 0;
  lost = 0;
  const deadCounter = document.getElementById('dead');
  const lostCounter = document.getElementById('lost');
  if (deadCounter) deadCounter.textContent = dead;
  if (lostCounter) lostCounter.textContent = lost;
  setMole();
}


for (let i = 1; i <= 9; i++) {
  getHole(i).addEventListener('click', holeClickHandler);
}

setMole();

const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");

let lastClickTime = Date.now();

cookie.onclick = function () {
  // Увеличиваем счётчик
  counter.textContent = Number(counter.textContent) + 1;

  // Чередуем размер печеньки
  if (cookie.width === 200) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }

  // Расчёт скорости кликов
  const now = Date.now();
  const delta = (now - lastClickTime) / 1000; // в секундах
  const cps = (1 / delta).toFixed(2); // clicks per second
  speed.textContent = cps;

  lastClickTime = now;
};

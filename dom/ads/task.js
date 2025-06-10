const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let index = 0;

  function switchCase() {
    // Текущий элемент
    const current = cases[index];
    current.classList.remove('rotator__case_active');

    // Следующий индекс
    index = (index + 1) % cases.length;
    const next = cases[index];

    // Установка класса и цвета
    next.classList.add('rotator__case_active');
    next.style.color = next.dataset.color || 'black';

    // Скорость для следующего слайда
    const delay = parseInt(next.dataset.speed) || 1000;
    setTimeout(switchCase, delay);
  }

  // Инициализация: выставляем начальный стиль и запускаем цикл
  const active = rotator.querySelector('.rotator__case_active');
  if (active) {
    active.style.color = active.dataset.color || 'black';
    const initialDelay = parseInt(active.dataset.speed) || 1000;
    setTimeout(switchCase, initialDelay);
  }
});

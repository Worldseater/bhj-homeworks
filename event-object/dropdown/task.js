// Получаем все выпадающие блоки на странице
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const value = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');
  const items = dropdown.querySelectorAll('.dropdown__item');

  // Открытие/закрытие списка при клике на кнопку
  value.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
  });

  // Обработка клика по каждому пункту
  items.forEach(item => {
    const link = item.querySelector('.dropdown__link');
    link.addEventListener('click', event => {
      event.preventDefault(); // запрещаем переход по ссылке
      value.textContent = link.textContent; // устанавливаем выбранный текст
      list.classList.remove('dropdown__list_active'); // скрываем список
    });
  });
});

const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Удалить активные классы у всех вкладок и содержимого
    tabs.forEach(t => t.classList.remove('tab_active'));
    contents.forEach(c => c.classList.remove('tab__content_active'));

    // Добавить активный класс выбранной вкладке и соответствующему контенту
    tab.classList.add('tab_active');
    contents[index].classList.add('tab__content_active');
  });
});

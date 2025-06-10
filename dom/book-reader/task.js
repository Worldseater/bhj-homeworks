const book = document.getElementById('book');

const fontSizes = document.querySelectorAll('.book__control_font-size .font-size');
const textColors = document.querySelectorAll('.book__control_color .color');
const bgColors = document.querySelectorAll('.book__control_background .color');

function clearActive(elements, activeClass) {
  elements.forEach(el => el.classList.remove(activeClass));
}

function clearFontSizeClasses() {
  book.classList.remove('book_fs-small', 'book_fs-big');
}

function clearTextColorClasses() {
  book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
}

function clearBgColorClasses() {
  book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
}

fontSizes.forEach(size => {
  size.addEventListener('click', (event) => {
    event.preventDefault();

    clearActive(fontSizes, 'font-size_active');
    size.classList.add('font-size_active');

    clearFontSizeClasses();

    const sizeValue = size.dataset.size;

    if (sizeValue === 'small') {
      book.classList.add('book_fs-small');
    } else if (sizeValue === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});

textColors.forEach(color => {
  color.addEventListener('click', (event) => {
    event.preventDefault();

    clearActive(textColors, 'color_active');
    color.classList.add('color_active');

    clearTextColorClasses();

    const textColor = color.dataset.textColor;
    if (textColor) {
      book.classList.add(`book_color-${textColor}`);
    }
  });
});

bgColors.forEach(color => {
  color.addEventListener('click', (event) => {
    event.preventDefault();

    clearActive(bgColors, 'color_active');
    color.classList.add('color_active');

    clearBgColorClasses();

    const bgColor = color.dataset.bgColor;
    if (bgColor) {
      book.classList.add(`book_bg-${bgColor}`);
    }
  });
});

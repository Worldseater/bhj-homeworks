const reveals = document.querySelectorAll('.reveal');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function revealOnScroll() {
  reveals.forEach(reveal => {
    if (isInViewport(reveal)) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

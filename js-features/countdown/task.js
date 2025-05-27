const timer = document.getElementById('timer');

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

let timeLeft = 60;

timer.textContent = formatTime(timeLeft);

const countdown = setInterval(() => {
  timeLeft--;
  timer.textContent = formatTime(timeLeft);

  if (timeLeft <= 0) {
    clearInterval(countdown);
    alert('Вы победили в конкурсе!');

    const link = document.createElement('a');
    link.href = 'http://hello.kitty';
    link.download = 'http://hello.kitty';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}, 1000);

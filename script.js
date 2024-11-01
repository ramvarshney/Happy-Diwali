function showWish() {
  const wish = document.getElementById('wish');
  wish.classList.toggle('hidden');
  createFireworks();
}

// Fireworks Animation Function
function createFireworks() {
  const fireworkContainer = document.querySelector('.fireworks');

  for (let i = 0; i < 10; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.width = `${10 + Math.random() * 20}px`;
    firework.style.height = firework.style.width;
    firework.style.backgroundColor = getRandomColor();

    fireworkContainer.appendChild(firework);

    // Remove firework after animation
    setTimeout(() => {
      firework.remove();
    }, 500);
  }
}

function getRandomColor() {
  const colors = ['#ff0', '#ff5733', '#ff8a33', '#33ff57', '#33d9ff', '#8a33ff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

const canUseCursorHeart = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (canUseCursorHeart) {
  const heart = document.createElement('div');
  heart.className = 'cursor-heart';
  heart.setAttribute('aria-hidden', 'true');
  heart.innerHTML = `
    <svg viewBox="0 0 32 29" focusable="false">
      <path d="M16 27C9.1 20.7 2 15.2 2 8.6C2 4.7 5 2 8.8 2C11.1 2 13.6 3.2 16 6C18.4 3.2 20.9 2 23.2 2C27 2 30 4.7 30 8.6C30 15.2 22.9 20.7 16 27Z" />
    </svg>`;
  document.body.appendChild(heart);

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;

  window.addEventListener('pointermove', (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    heart.classList.add('is-visible');
  });

  window.addEventListener('pointerleave', () => {
    heart.classList.remove('is-visible');
  });

  function animateHeart() {
    currentX += (targetX - currentX) * 0.22;
    currentY += (targetY - currentY) * 0.22;
    heart.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateHeart);
  }

  animateHeart();
}

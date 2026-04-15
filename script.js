const features = [
  { icon: '💬', title: 'Daily Questions', description: 'Answer thoughtful prompts that help you understand yourself and your partner more deeply.' },
  { icon: '💌', title: 'Dear Future Partner', description: 'Write honest notes to the love you hope to meet, grow with, or become ready for.' },
  { icon: '🗓️', title: 'Relationship Journey', description: 'Save memories, important days, love language reflections, boundaries, future date ideas, and relationship visions in one place.' },
  { icon: '🤝', title: 'Couple Space', description: 'Pair with your partner using a private code and build a shared space for your relationship.' },
  { icon: '💝', title: 'Love Notes', description: 'Send meaningful notes that help you express care, gratitude, reassurance, and affection.' },
  { icon: '🕯️', title: 'Rituals and Plans', description: 'Create small rituals, shared plans, and intentional moments that help your connection stay alive.' }
];

const testimonials = [
  { quote: 'Khethiwe made us slow down and truly hear each other. It feels less like an app and more like a ritual for our relationship.', name: 'Nadia & Elias', role: 'Together 4 years' },
  { quote: 'I use solo mode every evening. The prompts helped me understand my emotional patterns before bringing them into my relationship.', name: 'Ayanda M.', role: 'Solo reflection user' },
  { quote: 'The design is beautiful, but what surprised us most is how intentional every question feels. We feel closer and calmer.', name: 'Leila & Mark', role: 'Newly engaged couple' }
];

const points = [
  {
    short: 'Most relationship apps focus on messaging.',
    full: 'Khethiwe is designed for meaningful moments that build emotional safety over time.'
  },
  {
    short: 'Grow as an individual and as a couple in one space.',
    full: 'You can reflect on your own needs while building a shared growth journey with your partner.'
  },
  {
    short: 'Every touchpoint is crafted to feel thoughtful and intimate.',
    full: 'From daily prompts to shared rituals, each moment is made to feel warm, intentional, and personal.'
  },
  {
    short: 'Khethiwe balances romance and structure.',
    full: 'Connection is supported through practical prompts, plans, notes, and rituals that help love stay present.'
  }
];

const stores = [
  { label: 'Get it on Google Play', image: './playstore-button.svg' }
];

function phoneCard(title, subtitle, lines) {
  return `
    <article class="phone-card">
      <div class="phone-inner">
        <div class="notch"></div>
        <p class="phone-subtitle">${subtitle}</p>
        <h4 class="phone-title">${title}</h4>
        <div class="phone-lines">${lines.map((line) => `<p>${line}</p>`).join('')}</div>
      </div>
    </article>`;
}

function screenshotPhone(src, alt, offsetClass = '') {
  return `
    <article class="screenshot-phone ${offsetClass}">
      <img src="${src}" alt="${alt}" />
    </article>`;
}

function render() {
  const storeMarkup = stores
    .map((s) => `<a class="store-btn" href="#" aria-label="${s.label}"><img src="${s.image}" alt="${s.label}" /></a>`)
    .join('');

  document.querySelector('#hero-store-buttons').innerHTML = storeMarkup;
  document.querySelector('#footer-store-buttons').innerHTML = storeMarkup;

  document.querySelector('#hero-phone-stack').innerHTML =
    screenshotPhone('./HOME SCREENSHOT.jpeg', 'Khethiwe home screen', 'is-lower') +
    screenshotPhone('./LOVENOTE SCREENSHOT.jpeg', 'Khethiwe love note screen');

  document.querySelector('#features-grid').innerHTML = features
    .map((f) => `<article class="card feature-card"><div class="feature-icon" aria-hidden="true">${f.icon}</div><h3>${f.title}</h3><p>${f.description}</p></article>`)
    .join('');

  document.querySelector('#difference-points').innerHTML = points
    .map(
      (p, index) => `
        <article class="point">
          <div>
            <p class="point-short">${p.short}</p>
            <p class="point-full" id="point-full-${index}">${p.full}</p>
          </div>
          <button class="point-plus" type="button" aria-expanded="false" aria-controls="point-full-${index}" aria-label="Show more">+</button>
        </article>`
    )
    .join('');

  document.querySelectorAll('.point-plus').forEach((button) => {
    button.addEventListener('click', () => {
      const point = button.closest('.point');
      const isOpen = point.classList.toggle('is-open');

      button.setAttribute('aria-expanded', String(isOpen));
      button.setAttribute('aria-label', isOpen ? 'Show less' : 'Show more');
      button.textContent = isOpen ? '-' : '+';
    });
  });

  document.querySelector('#reviews-grid').innerHTML = testimonials
    .map((t) => `<figure class="review"><blockquote>"${t.quote}"</blockquote><figcaption><strong>${t.name}</strong>${t.role}</figcaption></figure>`)
    .join('');

}

render();

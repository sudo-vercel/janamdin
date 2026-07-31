const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const glow = $('.cursor-glow');
document.addEventListener('mousemove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const musicBtn = $('#musicBtn');
musicBtn?.addEventListener('click', () => {
  musicBtn.classList.toggle('playing');
  musicBtn.textContent = musicBtn.classList.contains('playing') ? '♫' : '♪';
});

// Set to tomorrow (August 1, 2026)
const birthdayDate = new Date('2026-08-01T00:00:00').getTime();
function updateCountdown() {
  const countdown = $('#countdown');
  if (!countdown) return;

  const difference = Math.max(birthdayDate - Date.now(), 0);
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  $('#days').textContent = String(days).padStart(2, '0');
  $('#hours').textContent = String(hours).padStart(2, '0');
  $('#mins').textContent = String(minutes).padStart(2, '0');
  $('#secs').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const reasons = [
  'Your smile feels like sunshine.',
  'You make me feel safe.',
  'Your laugh is my favorite sound.',
  'You turn simple days into stories.',
  'You care so deeply.',
  'Your vibe is soft and magical.',
  'You are beautifully genuine.',
  'You make memories feel golden.',
  'Your heart is rare.',
  'You are my favorite person to tease.',
  'You glow without trying.',
  'You make everything better.',
  'You feel like home.',
  'You are effortlessly classy.',
  'You deserve the prettiest life.',
  'You are my ultimate comfort zone.',
  'Your presence feels peaceful.',
  'You are pure main character energy.',
  'Meeting you on Feb 26 was the best day.',
  'Saying yes on Aug 3 changed my world.',
  'You bring calm into my life.',
  'You have the cutest habits.',
  'You make boring days memorable.',
  'You are gentle but strong.',
  'Having you is my biggest blessing.',
  'You understand me without words.',
  'You make silence feel comfortable.',
  'You make me believe in magic.',
  'You are so easy to love.',
  'You make celebrations brighter.',
  'You carry warmth wherever you go.',
  'You make tiny moments feel cinematic.',
  'You have a beautiful soul.',
  'You make me laugh at random times.',
  'You are honest in the sweetest way.',
  'You are my favorite notification.',
  'You make the world less heavy.',
  'You deserve flowers every day.',
  'You make love feel effortless.',
  'You are soft, rare, and precious.',
  'You make every plan exciting.',
  'You are naturally elegant.',
  'You care even when nobody notices.',
  'You are full of pretty energy.',
  'You make life feel magical.',
  'You are the reason behind my smiles.',
  'You make ordinary chats memorable.',
  'You are my safe place.',
  'You look beautiful being yourself.',
  'You make every goodbye feel hard.',
  'You are thoughtful in little ways.',
  'You make life feel warmer.',
  'You are my favorite person.',
  'You make memories worth saving.',
  'You make birthdays meaningful.',
  'You are a beautiful chapter.',
  'You make every corner feel warm.',
  'You are cute without trying.',
  'You have the prettiest heart.',
  'You make me feel noticed.',
  'You bring sparkle into simple things.',
  'You are love in human form.',
  'You make every story better.',
  'You are someone I am forever grateful for.',
  'You make emotions feel safe.',
  'You have a rare kind of grace.',
  'You make my days softer.',
  'You are my forever choice.',
  'You make everyone around you happier.',
  'You are pure golden-hour energy.',
  'You make small surprises feel huge.',
  'You are beautifully dramatic.',
  'You make life feel like a cute movie.',
  'You are my favorite memory keeper.',
  'You make chaos look pretty.',
  'You are special in every season.',
  'You make me proud to be yours.',
  'You carry love in your details.',
  'You make every laugh louder.',
  'You are a universe of warmth.',
  'You make everything feel less lonely.',
  'You are rare, real, and radiant.',
  'You make wishes feel possible.',
  'You are my prettiest comfort zone.',
  'You make every message feel sweet.',
  'You turn moments into keepsakes.',
  'You are always worth celebrating.',
  'You make kindness look beautiful.',
  'You are a blessing in soft colors.',
  'You make every page of life prettier.',
  'You are deeply loved.',
  'You make my heart smile.',
  'You deserve all the magic.',
  'You make today feel golden.',
  'You are unforgettable.',
  'You are my favorite birthday girl.',
  'You are more loved than 100 reasons can say.'
];

const reasonGrid = $('#reasonGrid');
if (reasonGrid) {
  reasonGrid.innerHTML = reasons
    .map((reason, index) => {
      return `
      <article class="reason-card reveal" tabindex="0">
        <div class="reason-inner">
          <div class="reason-front">
            <h3>${index + 1}</h3>
            <p>tap love note</p>
          </div>
          <div class="reason-back" style="background: linear-gradient(135deg, #a36f5c, #3e3232);">
            <p>${reason}</p>
          </div>
        </div>
      </article>`;
    })
    .join('');
}

$('#randomReasonBtn')?.addEventListener('click', () => {
  $('#randomReason').textContent = reasons[Math.floor(Math.random() * reasons.length)];
});

const envelope = $('#envelope');
const letterText = `you are one of those rare people who make the world feel gentler just by being in it. Ever since we met on 26th February 2025, and officially started our journey on 3rd August 2025, my life has been so much brighter.
Your presence brings a kind of warmth, peace, and beauty that words can never fully explain. On your birthday, I want you to know how deeply you are loved—not just today, but every single day.
You deserve happiness that feels real, dreams that slowly turn into reality, and moments so beautiful that your heart wants to keep them forever.
I hope this year gives you soft mornings, peaceful nights, unexpected smiles, and every little thing your soul has been waiting for.
Happy Birthday Swara! You are special in ways you may never fully realize, and you deserve magic, love, and endless happiness in every chapter of your life. I Love You ❤️`;

let hasTypedLetter = false;

envelope?.addEventListener('click', () => {
  envelope.classList.add('open');
  if (hasTypedLetter) return;

  hasTypedLetter = true;
  let index = 0;
  const typedLetter = $('#typedLetter');
  const typing = setInterval(() => {
    typedLetter.textContent += letterText[index] || '';
    index += 1;
    if (index > letterText.length) clearInterval(typing);
  }, 35);
});

const cake = $('#birthdayCake') || $('.cake');
const cutCakeBtn = $('.cut-cake-btn');
const cakeStageText = $('#cakeStageText');
let cakeAnimationStarted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

cutCakeBtn?.addEventListener('click', async () => {
  if (!cake || cakeAnimationStarted) return;

  cakeAnimationStarted = true;
  cutCakeBtn.disabled = true;

  cakeStageText.textContent = 'blowing the candles... 🌬️';
  cutCakeBtn.textContent = 'Blowing Candles...';
  cake.classList.add('blow');
  await wait(1500);

  cakeStageText.textContent = ' cake is cutting 🔪';
  cutCakeBtn.textContent = '';
  cake.classList.add('knife-in');
  await wait(1200);

  cakeStageText.textContent = ' into a slice... 🍰';
  cutCakeBtn.textContent = 'Cutting Slice...';
  cake.classList.add('sliced');
  await wait(900);

  cakeStageText.textContent = 'first slice for Swara 🎉';
  cutCakeBtn.textContent = 'Cake Cut 🎉';

  if (typeof confetti === 'function') {
    confetti({ particleCount: 280, spread: 115, origin: { y: 0.62 } });
  }
});

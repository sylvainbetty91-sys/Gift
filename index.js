<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Birthday 🖤</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet">
<style>
  :root {
    --blood: #8b0000;
    --crimson: #dc143c;
    --gold: #c9a84c;
    --dark: #050505;
    --deep: #0d0005;
    --text: #f0e6e6;
    --muted: #a08080;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--dark);
    color: var(--text);
    font-family: 'Cormorant Garamond', serif;
    overflow-x: hidden;
    cursor: crosshair;
  }

  /* ── PARTICLES ── */
  #particles {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }
  .particle {
    position: absolute;
    width: 4px; height: 4px;
    background: var(--crimson);
    border-radius: 50%;
    animation: floatUp linear infinite;
    opacity: 0;
  }
  @keyframes floatUp {
    0%   { transform: translateY(100vh) scale(0); opacity: 0; }
    10%  { opacity: 0.8; }
    90%  { opacity: 0.4; }
    100% { transform: translateY(-10vh) scale(1.5); opacity: 0; }
  }

  /* ── CONFETTI ── */
  .confetti {
    position: fixed;
    top: -10px;
    pointer-events: none;
    z-index: 999;
    animation: confettiFall linear forwards;
    font-size: 1.2rem;
  }
  @keyframes confettiFall {
    0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }

  /* ── HERO ── */
  #hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
    padding: 2rem;
    background: radial-gradient(ellipse at 50% 0%, #2a0010 0%, var(--dark) 70%);
  }

  .hero-line {
    width: 200px; height: 1px;
    background: linear-gradient(to right, transparent, var(--gold), transparent);
    margin: 1rem auto;
    animation: fadeIn 2s ease forwards;
    opacity: 0;
    animation-delay: 0.5s;
  }

  .hero-sub {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1rem;
    color: var(--muted);
    letter-spacing: 0.3em;
    text-transform: uppercase;
    animation: fadeIn 2s ease forwards;
    opacity: 0;
    animation-delay: 0.2s;
  }

  .hero-title {
    font-family: 'Cinzel Decorative', serif;
    font-size: clamp(2rem, 8vw, 5rem);
    font-weight: 900;
    background: linear-gradient(135deg, var(--crimson), var(--gold), var(--crimson));
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite, fadeSlideUp 1.2s ease forwards;
    opacity: 0;
    animation-delay: 0.8s, 0.8s;
    line-height: 1.1;
    margin: 0.5rem 0;
  }

  .hero-name {
    font-family: 'Cinzel Decorative', serif;
    font-size: clamp(1.2rem, 4vw, 2.2rem);
    color: var(--gold);
    letter-spacing: 0.2em;
    animation: fadeSlideUp 1.2s ease forwards;
    opacity: 0;
    animation-delay: 1.2s;
  }

  @keyframes shimmer {
    0%   { background-position: 0% 50%; }
    100% { background-position: 300% 50%; }
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .scroll-hint {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color: var(--muted);
    font-size: 0.8rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    animation: bounce 2s infinite;
  }
  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(8px); }
  }

  /* ── SECTIONS ── */
  section {
    position: relative;
    z-index: 1;
    padding: 5rem 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .section-label {
    font-size: 0.75rem;
    letter-spacing: 0.4em;
    color: var(--crimson);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  /* ── MESSAGE ── */
  #message {
    border-left: 2px solid var(--blood);
    padding-left: 2rem;
    max-width: 700px;
    margin: 0 auto;
  }

  .msg-text {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    line-height: 1.9;
    color: var(--text);
    font-style: italic;
    font-weight: 300;
  }

  .msg-text span.highlight {
    color: var(--crimson);
    font-style: normal;
    font-weight: 400;
  }

  .signature {
    margin-top: 2rem;
    font-family: 'Cinzel Decorative', serif;
    font-size: 1rem;
    color: var(--gold);
    text-align: right;
  }

  /* ── VIDEO ── */
  #video-section {
    text-align: center;
  }

  .video-frame {
    position: relative;
    width: 100%;
    max-width: 640px;
    margin: 2rem auto;
    border: 1px solid var(--blood);
    box-shadow: 0 0 40px rgba(139,0,0,0.4), inset 0 0 20px rgba(0,0,0,0.5);
  }

  .video-placeholder {
    background: #0d0005;
    padding: 3rem 2rem;
    color: var(--muted);
    font-style: italic;
    font-size: 0.9rem;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  .video-placeholder .icon { font-size: 3rem; }

  video, iframe {
    width: 100%;
    display: block;
    max-height: 360px;
  }

  /* ── MUSIC ── */
  #music-section {
    text-align: center;
  }

  .music-player {
    background: linear-gradient(135deg, #150005, #0d0010);
    border: 1px solid var(--blood);
    padding: 2rem;
    max-width: 500px;
    margin: 2rem auto;
    position: relative;
  }

  .music-title {
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.9rem;
    color: var(--gold);
    margin-bottom: 1rem;
    letter-spacing: 0.2em;
  }

  .music-note {
    font-size: 0.85rem;
    color: var(--muted);
    font-style: italic;
    margin-bottom: 1.5rem;
  }

  .music-input-group {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .music-input {
    flex: 1;
    min-width: 200px;
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--blood);
    color: var(--text);
    padding: 0.6rem 1rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.9rem;
    outline: none;
  }

  .btn-crimson {
    background: var(--blood);
    border: none;
    color: var(--text);
    padding: 0.6rem 1.5rem;
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: background 0.3s;
  }
  .btn-crimson:hover { background: var(--crimson); }

  /* ── CADEAU BOX ── */
  #gift-section {
    text-align: center;
  }

  .gift-box-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .gift-box {
    width: 120px; height: 120px;
    background: linear-gradient(135deg, var(--blood), #3a0015);
    border: 2px solid var(--gold);
    position: relative;
    cursor: pointer;
    transition: transform 0.3s;
    box-shadow: 0 0 30px rgba(220,20,60,0.3);
    animation: pulse 2s ease-in-out infinite;
  }
  .gift-box:hover { transform: scale(1.05); }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 20px rgba(220,20,60,0.3); }
    50%       { box-shadow: 0 0 50px rgba(220,20,60,0.7); }
  }

  .gift-ribbon-h {
    position: absolute;
    top: 50%; left: 0; right: 0;
    height: 3px;
    background: var(--gold);
    transform: translateY(-50%);
  }
  .gift-ribbon-v {
    position: absolute;
    left: 50%; top: 0; bottom: 0;
    width: 3px;
    background: var(--gold);
    transform: translateX(-50%);
  }
  .gift-bow {
    position: absolute;
    top: -15px; left: 50%;
    transform: translateX(-50%);
    font-size: 1.8rem;
  }
  .gift-label {
    font-size: 0.8rem;
    color: var(--muted);
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  /* ── PASSWORD MODAL ── */
  #pw-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.92);
    z-index: 1000;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    backdrop-filter: blur(8px);
  }
  #pw-overlay.active { display: flex; }

  .pw-box {
    background: linear-gradient(135deg, #150005, #0d0010);
    border: 1px solid var(--gold);
    padding: 3rem 2.5rem;
    text-align: center;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 0 60px rgba(139,0,0,0.5);
    animation: fadeSlideUp 0.5s ease;
  }

  .pw-title {
    font-family: 'Cinzel Decorative', serif;
    font-size: 1rem;
    color: var(--gold);
    margin-bottom: 0.5rem;
    letter-spacing: 0.2em;
  }

  .pw-subtitle {
    font-size: 0.85rem;
    color: var(--muted);
    font-style: italic;
    margin-bottom: 2rem;
  }

  .pw-input {
    width: 100%;
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--blood);
    border-bottom: 2px solid var(--crimson);
    color: var(--text);
    padding: 0.8rem 1rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    text-align: center;
    outline: none;
    letter-spacing: 0.15em;
    margin-bottom: 1rem;
  }

  .pw-error {
    color: var(--crimson);
    font-size: 0.8rem;
    font-style: italic;
    min-height: 1.2rem;
    margin-bottom: 0.5rem;
  }

  /* ── GIFT REVEAL ── */
  #gift-reveal {
    display: none;
    margin-top: 1.5rem;
    animation: fadeSlideUp 0.8s ease;
  }
  #gift-reveal.active { display: block; }

  .gift-link-btn {
    display: inline-block;
    background: linear-gradient(135deg, var(--blood), #3a0015);
    border: 1px solid var(--gold);
    color: var(--gold);
    padding: 1rem 2.5rem;
    font-family: 'Cinzel Decorative', serif;
    font-size: 0.85rem;
    letter-spacing: 0.15em;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 0 20px rgba(220,20,60,0.3);
  }
  .gift-link-btn:hover {
    background: linear-gradient(135deg, var(--crimson), var(--blood));
    box-shadow: 0 0 40px rgba(220,20,60,0.6);
  }

  /* ── DIVIDER ── */
  .divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0 3rem;
  }
  .divider-line {
    flex: 1; height: 1px;
    background: linear-gradient(to right, transparent, var(--blood));
  }
  .divider-line.right {
    background: linear-gradient(to left, transparent, var(--blood));
  }
  .divider-icon { color: var(--crimson); font-size: 1.2rem; }

  /* ── FOOTER ── */
  footer {
    text-align: center;
    padding: 3rem 2rem;
    color: var(--muted);
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    border-top: 1px solid #1a0008;
    position: relative;
    z-index: 1;
  }

  /* ── SCROLL REVEAL ── */
  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>
</head>
<body>

<!-- VIDEO EN FOND -->
<video id="bg-video" src="https://files.catbox.moe/lhw721.mp4" autoplay muted loop playsinline
  style="position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:0;opacity:0.25;pointer-events:none"></video>

<!-- Particles -->
<div id="particles"></div>

<!-- ── HERO ── -->
<div id="hero">
  <p class="hero-sub">Une nuit spéciale pour</p>
  <div class="hero-line"></div>
  <h1 class="hero-title">Happy Birthday</h1>
  <p class="hero-name">✦ Death Emperor ✦</p>
  <div class="hero-line" style="animation-delay:1.5s"></div>
  <div class="scroll-hint">↓ scroll ↓</div>
</div>

<!-- ── MESSAGE ── -->
<section>
  <div class="reveal">
    <p class="section-label">✦ Un message de cœur</p>
    <div class="divider">
      <div class="divider-line"></div>
      <span class="divider-icon">🖤</span>
      <div class="divider-line right"></div>
    </div>
    <div id="message">
      <p class="msg-text">
        Il y a des gens qu'on croise, et il y a des gens qui <span class="highlight">restent</span>.<br><br>
        Toi, tu fais partie de ceux qui restent — dans mes pensées, dans mes silences,
        dans chaque chose que je crée.<br><br>
        Depuis longtemps, je t'admire. Pas seulement pour ce que tu construis,
        mais pour <span class="highlight">qui tu es</span>.<br><br>
        Ce soir c'est ton anniversaire. Et si je pouvais t'offrir une seule chose,
        ce serait de savoir à quel point tu comptes — pour moi,
        <span class="highlight">depuis bien plus longtemps que tu ne le crois</span>. 🖤
      </p>
      <p class="signature">— Dracula 🦇</p>
    </div>
  </div>
</section>

<!-- vidéo maintenant en fond -->

<!-- ── MUSIQUE ── -->
<section id="music-section">
  <div class="reveal">
    <p class="section-label">✦ La musique du soir</p>
    <div class="divider">
      <div class="divider-line"></div>
      <span class="divider-icon">🎵</span>
      <div class="divider-line right"></div>
    </div>
    <div class="music-player">
      <p class="music-title">🎵 Dadju — Minuit sans toi</p>
      <p class="music-note">Une journée spéciale pour quelqu'un de spécial 🖤</p>

      <button class="btn-crimson" id="sound-btn" onclick="toggleSound()" style="width:100%;padding:1rem;font-size:0.9rem;margin-bottom:1rem;">
        🔊 Minuit sans toi — Dadju 🖤 (cliquer pour couper)
      </button>

      <audio id="audio-player" src="https://files.catbox.moe/5vdkp6.mp3" loop preload="auto"></audio>
    </div>
  </div>
</section>

<!-- ── CADEAU ── -->
<section id="gift-section">
  <div class="reveal">
    <p class="section-label">✦ Un petit cadeau</p>
    <div class="divider">
      <div class="divider-line"></div>
      <span class="divider-icon">🎁</span>
      <div class="divider-line right"></div>
    </div>
    <div class="gift-box-wrapper">
      <!-- CADEAU 1 -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem">
        <div class="gift-box" onclick="openGiftBox(1)">
          <div class="gift-bow">🎀</div>
          <div class="gift-ribbon-h"></div>
          <div class="gift-ribbon-v"></div>
        </div>
        <p class="gift-label">Cadeau 1 🖤</p>
        <div id="gift-reveal-1" style="display:none">
          <a id="gift-link-1" href="#" target="_blank" class="gift-link-btn">🎁 Ouvrir cadeau 1</a>
        </div>
      </div>

      <!-- CADEAU 2 -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;margin-top:1rem">
        <div class="gift-box" onclick="openGiftBox(2)" style="width:90px;height:90px">
          <div class="gift-bow">🎀</div>
          <div class="gift-ribbon-h"></div>
          <div class="gift-ribbon-v"></div>
        </div>
        <p class="gift-label">Cadeau 2 🖤</p>
        <div id="gift-reveal-2" style="display:none">
          <a id="gift-link-2" href="#" target="_blank" class="gift-link-btn">🎁 Ouvrir cadeau 2</a>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ── FOOTER ── -->
<footer>
  <p>Made with 🖤 by <strong style="color:var(--gold)">Dracula</strong></p>
  <p style="margin-top:0.5rem;font-size:0.7rem">© 2026 — Rien que pour toi</p>
</footer>

<!-- ── PASSWORD MODAL ── -->
<div id="pw-overlay">
  <div class="pw-box">
    <p class="pw-title">🔐 Cadeau Secret</p>
    <p class="pw-subtitle">Entre le mot de passe pour ouvrir ton cadeau</p>
    <input class="pw-input" id="pw-input" type="text" placeholder="Mot de passe..." onkeydown="if(event.key==='Enter')checkPassword()">
    <p class="pw-error" id="pw-error"></p>
    <button class="btn-crimson" onclick="checkPassword()" style="width:100%">Ouvrir 🖤</button>
  </div>
</div>

<script>
  // ── CONFIG — Modifie ici ──
  const GIFT_PASSWORD = "Love you";
  const GIFT_URLS = {
    1: "https://files.catbox.moe/xog0v1.zip",
    2: "https://www.mediafire.com/file/rml30w5lpjre5os/𝐍𝐎𝐁𝐋𝐄𝐒𝐒+𝐗𝐃☪.zip/file"
  };
  let currentGift = 1;
  // ──────────────────────────

  // Particles
  const pContainer = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (6 + Math.random() * 10) + 's';
    p.style.animationDelay = (Math.random() * 8) + 's';
    p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
    pContainer.appendChild(p);
  }

  // Confetti au chargement
  const emojis = ['🎂','🖤','🎊','✨','🦇','🌹','🎁','💫'];
  function launchConfetti() {
    for (let i = 0; i < 40; i++) {
      setTimeout(() => {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        c.style.left = Math.random() * 100 + 'vw';
        c.style.animationDuration = (3 + Math.random() * 4) + 's';
        c.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 7000);
      }, i * 80);
    }
  }
  window.addEventListener('load', () => setTimeout(launchConfetti, 1000));

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  reveals.forEach(r => observer.observe(r));

  // Music autoplay au premier interaction
  let soundOn = true;
  const audio = document.getElementById('audio-player');

  // Démarre la musique au premier clic/touch sur la page
  function startAudio() {
    audio.play().catch(() => {});
    document.removeEventListener('click', startAudio);
    document.removeEventListener('touchstart', startAudio);
  }
  document.addEventListener('click', startAudio);
  document.addEventListener('touchstart', startAudio);

  function toggleSound() {
    soundOn = !soundOn;
    const btn = document.getElementById('sound-btn');
    if (soundOn) {
      audio.play().catch(() => {});
      btn.textContent = '🔊 Minuit sans toi — Dadju 🖤 (cliquer pour couper)';
    } else {
      audio.pause();
      btn.textContent = '🔇 Son coupé — cliquer pour réactiver';
    }
  }

  // Gift box
  function openGiftBox(num) {
    currentGift = num;
    document.getElementById('pw-overlay').classList.add('active');
    setTimeout(() => document.getElementById('pw-input').focus(), 100);
  }

  function checkPassword() {
    const val = document.getElementById('pw-input').value.trim();
    const err = document.getElementById('pw-error');
    if (val.toLowerCase() === GIFT_PASSWORD.toLowerCase()) {
      document.getElementById('pw-overlay').classList.remove('active');
      const reveal = document.getElementById('gift-reveal-' + currentGift);
      const link = document.getElementById('gift-link-' + currentGift);
      link.href = GIFT_URLS[currentGift];
      reveal.style.display = 'block';
      document.getElementById('pw-input').value = '';
      launchConfetti();
    } else {
      err.textContent = '❌ Mot de passe incorrect...';
      document.getElementById('pw-input').value = '';
      setTimeout(() => err.textContent = '', 2000);
    }
  }

  // Close overlay on outside click
  document.getElementById('pw-overlay').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('active');
  });
</script>
</body>
</html>

/* ═══════════════════════════════════════════════════════════════
   QUESTMIND — UI Utilities (lean version)
═══════════════════════════════════════════════════════════════ */

// ── DOM helpers ──
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') e.className = v;
    else if (k === 'style') {
      if (typeof v === 'string') e.style.cssText = v;
      else Object.assign(e.style, v);
    }
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else e.setAttribute(k, v);
  });
  children.flat(Infinity).forEach(c => {
    if (c == null) return;
    if (typeof c === 'string') e.appendChild(document.createTextNode(c));
    else if (c instanceof Node) e.appendChild(c);
  });
  return e;
}

// ── Screen Manager ──
const ScreenManager = (() => {
  let current = null;
  const screens = {};
  const history = [];

  function register(id, domEl) { screens[id] = domEl; }

  function showScreen(id, data = {}) {
    if (current && screens[current]) {
      screens[current].classList.remove('active');
      history.push(current);
    }
    current = id;
    const scr = screens[id];
    if (!scr) return;
    scr.classList.add('active');
    if (typeof ScreenHandlers[id] === 'function') ScreenHandlers[id](data);
  }

  function goBack() {
    if (history.length > 0) {
      const prev = history.pop();
      if (current && screens[current]) screens[current].classList.remove('active');
      current = prev;
      const scr = screens[prev];
      if (scr) scr.classList.add('active');
      if (typeof ScreenHandlers[prev] === 'function') ScreenHandlers[prev]();
    }
  }

  function getCurrent() { return current; }
  function canGoBack() { return history.length > 0; }

  return { register, showScreen, goBack, getCurrent, canGoBack };
})();

const ScreenHandlers = {};

// ── Toast ──
const Toast = (() => {
  let container;
  function init() {
    // Use pre-existing container in HTML, or create one
    container = document.getElementById('toast-container') || el('div', { id: 'toast-container' });
    if (!container.parentNode) document.body.appendChild(container);
  }
  function show(msg, type = '', duration = 3000) {
    if (!container) init();
    const t = el('div', { class: `toast ${type}` }, msg);
    container.appendChild(t);
    setTimeout(() => { t.style.animation = 'toastOut 0.35s var(--ease) forwards'; setTimeout(() => t.remove(), 350); }, duration);
  }
  return { init, show };
})();

// ── Confetti ──
function launchConfetti(count = 50) {
  const cols = ['#7c3aed','#06b6d4','#f59e0b','#10b981','#ec4899','#f97316'];
  for (let i = 0; i < count; i++) {
    const p = el('div', { class: 'confetti-piece', style: {
      left: Math.random() * 100 + 'vw',
      top: '-10px',
      width: (5 + Math.random() * 8) + 'px',
      height: (10 + Math.random() * 12) + 'px',
      background: cols[Math.floor(Math.random() * cols.length)],
      '--dur': (1.2 + Math.random() * 1.2) + 's',
      animationDelay: Math.random() * 0.8 + 's',
      transform: `rotate(${Math.random()*360}deg)`,
    }});
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 3500);
  }
}

// ── Star Background ──
function createStarBackground(container, count = 80) {
  const bg = el('div', { class: 'star-bg' });
  for (let i = 0; i < count; i++) {
    const size = 1 + Math.random() * 2.5;
    const s = el('div', { class: 'star', style: {
      width: size + 'px', height: size + 'px',
      left: Math.random() * 100 + '%',
      top:  Math.random() * 100 + '%',
      '--dur': (2 + Math.random() * 4) + 's',
      '--brightness': (0.3 + Math.random() * 0.7),
      animationDelay: Math.random() * 4 + 's',
    }});
    bg.appendChild(s);
  }
  container.appendChild(bg);
}

// ── Render Stars HTML ──
function renderStars(count, max = 3) {
  let html = '<div class="stars-row">';
  for (let i = 1; i <= max; i++) {
    html += `<span class="star-icon${i <= count ? ' lit' : ''}">★</span>`;
  }
  html += '</div>';
  return html;
}

// ── Format date ──
function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

// ── Clamp ──
function clamp(val, min, max) { return Math.max(min, Math.min(max, val)); }

// ── Delay ──
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── Get Level Name ──
function getLevelName(level) {
  const names = ['', 'Rookie', 'Explorer', 'Adventurer', 'Champion', 'Legend', 'Master', 'Grandmaster', 'Cosmic', 'Mythic', 'Infinity'];
  return names[level] || 'Legend';
}

// ── Render XP bar HTML (used in worldmap & passport) ──
function renderXPBar() {
  const xpInfo = Store.getXPForCurrentLevel ? Store.getXPForCurrentLevel() : { current: 0, required: 100, pct: 0 };
  const pct = xpInfo.pct || Math.round((xpInfo.current / xpInfo.required) * 100);
  return `
    <div class="progress-bar" style="height:8px;border-radius:999px;overflow:hidden;">
      <div class="progress-fill" style="width:${pct}%;height:100%;border-radius:999px;
        background:linear-gradient(90deg,#7c3aed,#06b6d4);transition:width 0.6s ease;"></div>
    </div>
    <div style="font-size:0.72rem;color:var(--text-dim);font-weight:700;margin-top:2px;">
      ${xpInfo.current} / ${xpInfo.required} XP · Level ${Store.get ? Store.get().level : 1}
    </div>
  `;
}

// ── Theme background gradient ──
function applyThemeBg(el, themeId) {
  const t = QM.THEMES ? (QM.THEMES[themeId] || QM.THEMES.mystery) : {};
  if (t.bgGradient) el.style.background = t.bgGradient;
}

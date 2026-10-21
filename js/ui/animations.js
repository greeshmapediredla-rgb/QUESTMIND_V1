/* ═══════════════════════════════════════
   QUESTMIND — Animations Module
═══════════════════════════════════════ */

const Animations = (() => {

  // Animate a number counting up
  function countUp(el, from, to, duration = 1000, suffix = '') {
    const start = performance.now();
    const range = to - from;
    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(from + range * ease) + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Animate element sliding in from direction
  function slideIn(el, direction = 'bottom', duration = 400) {
    const transforms = {
      bottom: ['translateY(40px)', 'translateY(0)'],
      top:    ['translateY(-40px)', 'translateY(0)'],
      left:   ['translateX(-40px)', 'translateX(0)'],
      right:  ['translateX(40px)', 'translateX(0)'],
    };
    const [from, to] = transforms[direction] || transforms.bottom;
    el.animate([
      { transform: from, opacity: 0 },
      { transform: to,   opacity: 1 },
    ], { duration, easing: 'cubic-bezier(0.34,1.56,0.64,1)', fill: 'forwards' });
  }

  // Shake animation (wrong answer)
  function shake(el) {
    el.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-8px)' },
      { transform: 'translateX(8px)' },
      { transform: 'translateX(-6px)' },
      { transform: 'translateX(6px)' },
      { transform: 'translateX(0)' },
    ], { duration: 500, easing: 'ease-in-out' });
  }

  // Pulse scale (correct answer)
  function pulse(el) {
    el.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.15)' },
      { transform: 'scale(1)' },
    ], { duration: 400, easing: 'cubic-bezier(0.34,1.56,0.64,1)' });
  }

  // Float particle burst from element
  function burstParticles(el, count = 12, colors = ['#7c3aed','#06b6d4','#f59e0b','#10b981']) {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const dist = 40 + Math.random() * 60;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist - 30;
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left:${cx}px; top:${cy}px;
        width:${4 + Math.random()*6}px; height:${4 + Math.random()*6}px;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        --dx:${dx}px; --dy:${dy}px;
        --dur:${0.6 + Math.random()*0.8}s;
        animation-delay:${Math.random()*0.2}s;
      `;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1500);
    }
  }

  // Stagger-animate a list of elements
  function staggerIn(elements, delay = 80) {
    elements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * delay);
    });
  }

  // Progress bar animated fill
  function fillBar(barEl, percent, duration = 800) {
    barEl.style.width = '0%';
    setTimeout(() => {
      barEl.style.transition = `width ${duration}ms cubic-bezier(0.4,0,0.2,1)`;
      barEl.style.width = percent + '%';
    }, 50);
  }

  // XP gain flash
  function xpFlash(amount) {
    const div = document.createElement('div');
    div.textContent = '+' + amount + ' XP';
    div.style.cssText = `
      position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
      font-family:'Orbitron',monospace; font-size:2rem; font-weight:900;
      color:#f59e0b; text-shadow:0 0 20px #f59e0b;
      pointer-events:none; z-index:9999;
    `;
    document.body.appendChild(div);
    div.animate([
      { transform: 'translate(-50%,-50%) scale(0.5)', opacity: 0 },
      { transform: 'translate(-50%,-80%) scale(1.2)', opacity: 1 },
      { transform: 'translate(-50%,-120%) scale(1)',  opacity: 0 },
    ], { duration: 1500, easing: 'ease-out', fill: 'forwards' });
    setTimeout(() => div.remove(), 1600);
  }

  // Level up celebration
  function levelUp(level) {
    const div = document.createElement('div');
    div.innerHTML = `
      <div style="font-family:'Orbitron',monospace;font-size:1.4rem;color:#f59e0b;font-weight:900;text-align:center;">
        ⬆️ LEVEL UP!<br>
        <span style="font-size:0.9rem;color:#e0e0ff;">You are now Level ${level} — ${getLevelName(level)}!</span>
      </div>
    `;
    div.style.cssText = `
      position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
      background:rgba(10,10,26,0.95); border:2px solid #f59e0b;
      border-radius:20px; padding:24px 40px;
      box-shadow:0 0 60px rgba(245,158,11,0.6);
      pointer-events:none; z-index:9999;
    `;
    document.body.appendChild(div);
    div.animate([
      { transform: 'translate(-50%,-50%) scale(0)', opacity: 0 },
      { transform: 'translate(-50%,-50%) scale(1.1)', opacity: 1 },
      { transform: 'translate(-50%,-50%) scale(1)',   opacity: 1, offset: 0.4 },
      { transform: 'translate(-50%,-50%) scale(1)',   opacity: 1, offset: 0.7 },
      { transform: 'translate(-50%,-50%) scale(0.8)', opacity: 0 },
    ], { duration: 2500, easing: 'ease', fill: 'forwards' });
    setTimeout(() => div.remove(), 2600);
    launchConfetti(40);
  }

  // Badge earned popup
  function badgeEarned(badge) {
    const div = document.createElement('div');
    div.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="font-size:2rem;">${badge.emoji}</span>
        <div>
          <div style="font-weight:900;color:#f59e0b;">🏅 Badge Earned!</div>
          <div style="font-size:0.9rem;font-weight:700;">${badge.name}</div>
          <div style="font-size:0.75rem;color:var(--qm-text-dim);">${badge.description}</div>
        </div>
      </div>
    `;
    div.style.cssText = `
      position:fixed; bottom:100px; right:20px;
      background:rgba(10,10,26,0.95); border:2px solid #f59e0b;
      border-radius:16px; padding:16px 20px;
      box-shadow:0 0 40px rgba(245,158,11,0.4);
      z-index:9000; color:white;
      font-family:'Nunito',sans-serif;
    `;
    document.body.appendChild(div);
    div.animate([
      { transform: 'translateX(120%)', opacity: 0 },
      { transform: 'translateX(0)',     opacity: 1, offset: 0.2 },
      { transform: 'translateX(0)',     opacity: 1, offset: 0.7 },
      { transform: 'translateX(120%)', opacity: 0 },
    ], { duration: 3500, easing: 'cubic-bezier(0.34,1.56,0.64,1)', fill: 'forwards' });
    setTimeout(() => div.remove(), 3600);
  }

  return { countUp, slideIn, shake, pulse, burstParticles, staggerIn, fillBar, xpFlash, levelUp, badgeEarned };
})();

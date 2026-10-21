/**
 * Onboarding / Login Portal Screen
 * Clean, uncluttered pastel aesthetic with QuestMind animated logo
 */
function renderLoginPortal() {
  const root = $('#app-root');
  root.innerHTML = '';

  const wrap = el('div', { class: 'screen-content screen-active', id: 'screen-onboarding' });
  const card = el('div', { class: 'qm-login-card' });

  card.innerHTML = `
    <div class="login-logo-container">
      <img src="assets/logo.svg" alt="QuestMind: Gaming & Strategy" class="questmind-login-logo-img" />
    </div>

    <h2 class="login-headline">Welcome Back, Cadet! 🚀</h2>
    <p class="login-subtext">Level up your science, math, and coding skills through gamified missions.</p>

    <div style="margin-bottom:18px;">
      <label style="display:block;font-weight:700;color:var(--text);font-size:0.9rem;margin-bottom:6px;">👤 Student Name</label>
      <input
        type="text"
        id="login-name"
        class="qm-input"
        placeholder="Enter your hero name…"
        value="${Store.getProfile()?.name || ''}"
        autocomplete="name"
      />
    </div>

    <div style="margin-bottom:18px;">
      <label style="display:block;font-weight:700;color:var(--text);font-size:0.9rem;margin-bottom:6px;">🎓 Grade / Class</label>
      <select
        id="login-grade"
        class="qm-select"
      >
        <option value="4">Grade 4 · Elementary Explorer</option>
        <option value="5">Grade 5 · Discovery Cadet</option>
        <option value="6" selected>Grade 6 · Junior Adventurer</option>
        <option value="7">Grade 7 · Quest Master</option>
        <option value="8">Grade 8 · Horizon Champion</option>
        <option value="9">Grade 9 · Senior Strategist</option>
        <option value="10">Grade 10 · Apex Scholar</option>
      </select>
    </div>

    <div style="margin-bottom:24px;">
      <label style="display:block;font-weight:700;color:var(--text);font-size:0.9rem;margin-bottom:6px;">📚 Curriculum Board</label>
      <select
        id="login-curriculum"
        class="qm-select"
      >
        ${QM.CURRICULUMS.map(c => `<option value="${c.id}">${c.name} (${c.region})</option>`).join('')}
      </select>
    </div>

    <button
      id="login-enter-btn"
      class="btn btn-primary btn-lg"
      style="width:100%;padding:14px;font-size:1.05rem;"
    >
      🚀 Enter Learning Dashboard
    </button>
  `;

  wrap.appendChild(card);
  root.appendChild(wrap);

  const btn = card.querySelector('#login-enter-btn');
  btn.addEventListener('click', () => {
    const name = card.querySelector('#login-name').value.trim();
    if (!name) {
      card.querySelector('#login-name').placeholder = 'Please enter your name!';
      card.querySelector('#login-name').focus();
      return;
    }
    const grade = parseInt(card.querySelector('#login-grade').value) || 6;
    const curriculum = card.querySelector('#login-curriculum').value || 'cbse';

    // Single fixed pastel theme
    Store.login(name, grade, curriculum, 'pastel');
    ScreenManager.showScreen(QM.SCREENS.DASHBOARD);
  });
}

function renderOnboarding() {
  renderLoginPortal();
}

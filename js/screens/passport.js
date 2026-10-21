/* ═══════════════════════════════════════
   QUESTMIND — Skill Passport Screen
═══════════════════════════════════════ */

ScreenHandlers['passport'] = function(data) {
  renderPassport(data);
};

function renderPassport(data = {}) {
  const root = $('#screen-passport');
  root.innerHTML = '';
  createStarBackground(root, 40);

  const profile = Store.getProfile() || { name: 'Adventurer', level: 1, xp: 0, theme: 'cosmic', badges: [] };
  const xpInfo  = Store.getXPForCurrentLevel();

  const wrap = el('div', { class: 'passport-container scrollable' });
  root.appendChild(wrap);

  // ── Header ────────────────────────────────
  const headerCard = el('div', { class: 'passport-header' });
  headerCard.innerHTML = `
    <div class="passport-player-info">
      <span class="passport-avatar" style="font-size:2.8rem;">🎓</span>
      <div>
        <div class="passport-name font-game">${profile.name}</div>
        <div class="passport-subtitle">Grade ${profile.grade || 8} • Level ${profile.level || 1} Explorer</div>
        <div style="margin-top:8px;width:200px;">
          <div class="progress-bar"><div class="progress-fill" style="width:${xpInfo.pct || 40}%;"></div></div>
        </div>
        <div style="margin-top:4px;font-size:0.75rem;color:var(--qm-text-dim);">
          ${xpInfo.current} / ${xpInfo.required} XP to next level
        </div>
      </div>
    </div>
    <div class="passport-xp-section">
      <div class="passport-xp">⭐ ${profile.xp || 0} XP</div>
      <div class="passport-level">Total XP Earned</div>
      <div style="margin-top:8px;font-size:0.85rem;color:var(--qm-text-dim);">Theme: ${profile.theme || 'cosmic'}</div>
      <div style="font-size:0.85rem;color:var(--qm-text-dim);">${(profile.badges || []).length} badges unlocked</div>
    </div>
  `;
  wrap.appendChild(headerCard);

  // ── Competency Crystals ───────────────────
  const compSection = el('div');
  compSection.innerHTML = '<div class="section-title">🔮 Competency Crystals</div>';
  const compGrid = el('div', { class: 'competency-grid' });

  Object.values(COMPETENCIES).forEach(comp => {
    const userComp = s.competencyScores[comp.id];
    const score    = userComp?.score || 0;
    const level    = userComp?.level || 'Novice';
    const history  = userComp?.history || [];

    const crystal = el('div', {
      class: 'competency-crystal',
      style: { '--comp-color': comp.color },
      onClick: () => showCompetencyDetail(comp, userComp),
    });
    crystal.innerHTML = `
      <span class="crystal-icon">${comp.icon}</span>
      <span class="crystal-name">${comp.name}</span>
      <span class="crystal-score">${score}</span>
      <span class="crystal-level" style="color:${comp.color};">${level}</span>
      <div class="progress-bar" style="width:100%;margin-top:4px;">
        <div class="progress-fill" id="comp-fill-${comp.id}" style="width:0%;background:${comp.color};"></div>
      </div>
      <span style="font-size:0.65rem;color:var(--qm-text-dim);">${history.length} attempt${history.length !== 1 ? 's' : ''}</span>
    `;
    compGrid.appendChild(crystal);
  });
  compSection.appendChild(compGrid);
  wrap.appendChild(compSection);

  // Animate bars after render
  setTimeout(() => {
    Object.values(COMPETENCIES).forEach(comp => {
      const userComp = s.competencyScores[comp.id];
      const score = userComp?.score || 0;
      const bar = $(`#comp-fill-${comp.id}`);
      if (bar) Animations.fillBar(bar, score, 1000);
    });
  }, 200);

  // ── Assessment History ────────────────────
  const histSection = el('div');
  histSection.innerHTML = '<div class="section-title">📋 Assessment History</div>';

  if (s.assessmentAttempts.length === 0) {
    histSection.innerHTML += `
      <div style="text-align:center;padding:32px;color:var(--qm-text-dim);font-size:0.9rem;">
        No assessments yet — complete a mission to see your history! 🎮
      </div>
    `;
  } else {
    const tableWrap = el('div', { style: 'overflow-x:auto;' });
    const table = el('table', { class: 'history-table' });
    table.innerHTML = `
      <thead>
        <tr>
          <th>Mission</th>
          <th>World</th>
          <th>Competency</th>
          <th>Score</th>
          <th>Stars</th>
          <th>Attempt</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
    `;
    const tbody = el('tbody');
    [...s.assessmentAttempts].reverse().slice(0, 30).forEach(att => {
      const comp = COMPETENCIES[att.competencyId];
      const world = WORLDS[att.worldId];
      const scoreClass = att.score >= 70 ? 'high' : att.score >= 50 ? 'medium' : 'low';
      const row = el('tr');
      row.innerHTML = `
        <td style="font-weight:700;">${att.taskTitle || att.taskId}</td>
        <td>${world ? world.emoji + ' ' + world.name : att.worldId}</td>
        <td>${comp ? comp.icon + ' ' + comp.name : att.competencyId}</td>
        <td><span class="attempt-score ${scoreClass}">${att.score}/${att.maxScore}</span></td>
        <td>${renderStars(att.stars)}</td>
        <td style="text-align:center;">#${att.attemptNumber}</td>
        <td>${formatDate(att.submittedAt)}</td>
        <td><span style="color:${att.passed ? 'var(--qm-success)' : 'var(--qm-danger)'};font-weight:700;">
          ${att.passed ? '✅ Pass' : '❌ Retry'}
        </span></td>
      `;
      row.style.cursor = 'pointer';
      row.addEventListener('click', () => showAttemptDetail(att));
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    tableWrap.appendChild(table);
    histSection.appendChild(tableWrap);
  }
  wrap.appendChild(histSection);

  // ── Badges Section ────────────────────────
  const badgeSection = el('div');
  badgeSection.innerHTML = '<div class="section-title">🏅 Badges & Achievements</div>';
  const badgeGrid = el('div', { class: 'badges-grid' });

  Object.values(ACHIEVEMENTS).forEach(ach => {
    const isEarned = s.achievements.includes(ach.id);
    const card = el('div', {
      class: `badge-card ${isEarned ? 'earned' : 'locked'}`,
      title: isEarned ? ach.description : 'Keep playing to unlock!',
    });
    card.innerHTML = `
      <span class="badge-icon">${ach.emoji}</span>
      <span class="badge-name">${ach.name}</span>
      ${isEarned ? `<span style="font-size:0.65rem;color:var(--qm-success);font-weight:700;">+${ach.xpBonus} XP</span>` : `<span style="font-size:0.65rem;color:var(--qm-text-dim);">Locked</span>`}
    `;
    badgeGrid.appendChild(card);
  });
  badgeSection.appendChild(badgeGrid);
  wrap.appendChild(badgeSection);

  // ── Download Report ───────────────────────
  const downloadSection = el('div', { style: 'padding:16px 0;display:flex;gap:12px;flex-wrap:wrap;' });
  const btnReport = el('button', { class: 'btn btn-ghost', onClick: downloadReport }, '📄 Download Report');
  const btnReset  = el('button', { class: 'btn btn-ghost btn-sm', style: 'color:var(--qm-danger);', onClick: confirmReset }, '🗑️ Reset Progress');
  downloadSection.append(btnReport, btnReset);
  wrap.appendChild(downloadSection);

  // ── Stagger animate ───────────────────────
  Animations.staggerIn([...compGrid.children], 50);

  // ── Detail Modal ─────────────────────────
  function showCompetencyDetail(comp, userComp) {
    const history = userComp?.history || [];
    const evidence = userComp?.evidence || [];

    const modal = el('div', {
      style: `
        position:fixed;inset:0;background:rgba(0,0,0,0.8);
        display:flex;align-items:center;justify-content:center;
        z-index:999;padding:20px;
      `,
      onClick: (e) => { if (e.target === modal) modal.remove(); },
    });
    const inner = el('div', {
      class: 'glass-strong',
      style: 'width:min(560px,95vw);max-height:80vh;overflow-y:auto;padding:28px;display:flex;flex-direction:column;gap:16px;',
    });
    inner.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="font-size:3rem;">${comp.icon}</span>
        <div>
          <div style="font-family:'Orbitron',monospace;font-size:1.2rem;font-weight:700;color:${comp.color};">${comp.name}</div>
          <div style="font-size:0.85rem;color:var(--qm-text-dim);">${comp.description}</div>
        </div>
      </div>
      <div style="font-weight:700;">Level: <span style="color:${comp.color};">${userComp?.level || 'Novice'}</span> • Score: <span style="color:${comp.color};">${userComp?.score || 0}/100</span></div>
      <div class="progress-bar" style="height:12px;">
        <div class="progress-fill" style="width:${userComp?.score || 0}%;background:${comp.color};"></div>
      </div>
      <div class="section-title">Level Descriptions</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${Object.entries(comp.levels).map(([lvl, desc]) => `
          <div style="padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);font-size:0.82rem;">
            <strong style="color:${comp.color};">${lvl}:</strong> ${desc}
          </div>
        `).join('')}
      </div>
      <div class="section-title">Assessment Evidence (${evidence.length} records)</div>
      ${evidence.length === 0
        ? '<div style="color:var(--qm-text-dim);font-size:0.85rem;">No evidence yet — complete missions to build your profile!</div>'
        : evidence.slice(-5).map(ev => `
          <div style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);font-size:0.82rem;">
            <div style="font-weight:700;">${ev.taskTitle || ev.taskId}</div>
            <div style="color:var(--qm-text-dim);">${formatDate(ev.date)} • Score: <strong>${ev.score}/100</strong></div>
          </div>
        `).join('')
      }
      <div class="section-title">Score History</div>
      ${history.length > 0 ? `
        <div style="display:flex;gap:6px;align-items:flex-end;height:60px;">
          ${history.slice(-10).map(h => `
            <div style="flex:1;background:${comp.color};border-radius:4px 4px 0 0;height:${h.score}%;min-height:4px;"
                 title="Score: ${h.score}"></div>
          `).join('')}
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.7rem;color:var(--qm-text-dim);">
          <span>Oldest</span><span>Most Recent</span>
        </div>
      ` : '<div style="color:var(--qm-text-dim);font-size:0.82rem;">No history yet.</div>'}
      <div style="display:flex;justify-content:center;">
        <button class="btn btn-ghost" onclick="this.closest('.glass-strong').parentElement.remove()">✕ Close</button>
      </div>
    `;
    modal.appendChild(inner);
    document.body.appendChild(modal);
    Animations.slideIn(inner, 'bottom');
  }

  function showAttemptDetail(att) {
    const comp  = COMPETENCIES[att.competencyId];
    const world = WORLDS[att.worldId];
    const modal = el('div', {
      style: 'position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:999;padding:20px;',
      onClick: e => { if (e.target === modal) modal.remove(); },
    });
    const inner = el('div', {
      class: 'glass-strong',
      style: 'width:min(520px,95vw);max-height:80vh;overflow-y:auto;padding:28px;display:flex;flex-direction:column;gap:14px;',
    });
    inner.innerHTML = `
      <div style="font-family:'Orbitron',monospace;font-size:1.1rem;font-weight:700;">Assessment Record</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.85rem;">
        <div><span style="color:var(--qm-text-dim);">Mission:</span> <strong>${att.taskTitle || att.taskId}</strong></div>
        <div><span style="color:var(--qm-text-dim);">World:</span> ${world ? world.emoji + ' ' + world.name : att.worldId}</div>
        <div><span style="color:var(--qm-text-dim);">Competency:</span> ${comp ? comp.icon + ' ' + comp.name : att.competencyId}</div>
        <div><span style="color:var(--qm-text-dim);">Date:</span> ${formatDate(att.submittedAt)}</div>
        <div><span style="color:var(--qm-text-dim);">Score:</span> <strong style="color:${att.score>=70?'var(--qm-success)':att.score>=50?'var(--qm-accent)':'var(--qm-danger)'};">${att.score}/${att.maxScore}</strong></div>
        <div><span style="color:var(--qm-text-dim);">Attempt:</span> #${att.attemptNumber}</div>
        <div><span style="color:var(--qm-text-dim);">Stars:</span> ${renderStars(att.stars)}</div>
        <div><span style="color:var(--qm-text-dim);">Status:</span> <strong style="color:${att.passed?'var(--qm-success)':'var(--qm-danger)'};">${att.passed ? '✅ Passed' : '❌ Not yet'}</strong></div>
      </div>
      ${att.feedback ? `<div style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.3);border-radius:10px;padding:12px;font-size:0.85rem;">${att.feedback}</div>` : ''}
      ${att.rubricResults?.length ? `
        <div class="section-title">Rubric Results</div>
        ${att.rubricResults.map(r => `
          <div style="display:flex;justify-content:space-between;font-size:0.82rem;padding:6px 10px;border-radius:8px;background:rgba(255,255,255,0.04);">
            <span>${r.criterion}</span>
            <span style="font-weight:700;color:${r.earned>0?'var(--qm-success)':'var(--qm-danger)'};">${r.earned}/${r.max}</span>
          </div>
        `).join('')}
      ` : ''}
      <button class="btn btn-ghost" onclick="this.closest('.glass-strong').parentElement.remove()">✕ Close</button>
    `;
    modal.appendChild(inner);
    document.body.appendChild(modal);
    Animations.slideIn(inner, 'bottom');
  }

  function downloadReport() {
    const s = Store.get();
    const profile = s.profile || { nickname: 'Explorer' };
    const lines = [
      `QUESTMIND — Skill Passport Report`,
      `Explorer: ${profile.nickname}`,
      `Level: ${s.level} (${getLevelName(s.level)})`,
      `Total XP: ${s.xp}`,
      `Missions Completed: ${s.totalMissionsCompleted}`,
      `Badges Earned: ${s.achievements.length}`,
      `Generated: ${new Date().toLocaleString()}`,
      ``,
      `COMPETENCY SCORES`,
      `─────────────────────────────────`,
      ...Object.values(COMPETENCIES).map(c => {
        const uc = s.competencyScores[c.id];
        return `${c.name}: ${uc?.score || 0}/100 (${uc?.level || 'Novice'})`;
      }),
      ``,
      `ASSESSMENT HISTORY`,
      `─────────────────────────────────`,
      ...s.assessmentAttempts.map(a =>
        `[${formatDate(a.submittedAt)}] ${a.taskTitle || a.taskId} — ${a.score}/${a.maxScore} (${a.passed ? 'PASS' : 'RETRY'}) Attempt #${a.attemptNumber}`
      ),
      ``,
      `BADGES`,
      `─────────────────────────────────`,
      ...s.achievements.map(id => ACHIEVEMENTS[id] ? `✅ ${ACHIEVEMENTS[id].name}: ${ACHIEVEMENTS[id].description}` : id),
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = `QuestMind_Passport_${profile.nickname}_${new Date().toISOString().slice(0,10)}.txt`;
    a.click(); URL.revokeObjectURL(url);
    Toast.show('📄 Report downloaded!', 'success');
  }

  function confirmReset() {
    if (confirm('⚠️ This will erase ALL your progress. Are you sure?')) {
      Store.reset();
      Toast.show('Progress reset. Starting fresh!', 'warning');
      setTimeout(() => ScreenManager.showScreen(QM.SCREENS.ONBOARDING), 800);
    }
  }
}

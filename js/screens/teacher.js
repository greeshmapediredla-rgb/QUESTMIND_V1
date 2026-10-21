/* ═══════════════════════════════════════
   QUESTMIND — Teacher Dashboard
═══════════════════════════════════════ */

ScreenHandlers['teacher'] = function(data) {
  renderTeacher(data);
};

function renderTeacher(data = {}) {
  const root = $('#screen-teacher');
  root.innerHTML = '';
  createStarBackground(root, 30);

  const s = Store.get();
  const profile = s.profile || { nickname: 'Explorer', avatarEmoji: '🚀' };

  const wrap = el('div', { class: 'teacher-container scrollable', style: 'padding-bottom:80px;' });
  root.appendChild(wrap);

  // ── Header ────────────────────────────────
  const header = el('div', { class: 'teacher-header' });
  header.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <div>
        <div style="font-family:'Orbitron',monospace;font-size:1.4rem;font-weight:700;color:var(--qm-success);">👩‍🏫 Teacher Dashboard</div>
        <div style="color:var(--qm-text-dim);font-size:0.85rem;margin-top:4px;">
          Reviewing progress for: <strong>${profile.avatarEmoji} ${profile.nickname}</strong> • Level ${s.level} ${getLevelName(s.level)}
        </div>
      </div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-ghost btn-sm" onclick="ScreenManager.showScreen('worldmap')">← Back to Map</button>
      </div>
    </div>
  `;
  wrap.appendChild(header);

  // ── Stats Overview ────────────────────────
  const statsSection = el('div');
  statsSection.innerHTML = '<div class="section-title">📊 Overview</div>';
  const stats = el('div', { class: 'stat-cards' });

  const totalAttempts = s.assessmentAttempts.length;
  const passedAttempts = s.assessmentAttempts.filter(a => a.passed).length;
  const avgScore = totalAttempts > 0
    ? Math.round(s.assessmentAttempts.reduce((acc, a) => acc + a.score, 0) / totalAttempts)
    : 0;
  const worlds = new Set(s.assessmentAttempts.map(a => a.worldId));

  [
    { n: s.totalMissionsCompleted, l: 'Missions Passed', icon: '✅' },
    { n: totalAttempts, l: 'Total Attempts', icon: '🎯' },
    { n: `${avgScore}%`, l: 'Average Score', icon: '📈' },
    { n: s.level, l: 'Level', icon: '⭐' },
    { n: s.xp, l: 'Total XP', icon: '💎' },
    { n: worlds.size, l: 'Worlds Explored', icon: '🌍' },
    { n: s.achievements.length, l: 'Badges Earned', icon: '🏅' },
    { n: totalAttempts > 0 ? `${Math.round((passedAttempts/totalAttempts)*100)}%` : '—', l: 'Pass Rate', icon: '🎓' },
  ].forEach(({ n, l, icon }) => {
    const card = el('div', { class: 'stat-card' });
    card.innerHTML = `<div class="stat-number">${icon} ${n}</div><div class="stat-label">${l}</div>`;
    stats.appendChild(card);
  });
  statsSection.appendChild(stats);
  wrap.appendChild(statsSection);

  // ── Competency Breakdown ──────────────────
  const compSection = el('div');
  compSection.innerHTML = '<div class="section-title">🔮 Competency Profile</div>';
  const compGrid = el('div', { style: 'display:flex;flex-direction:column;gap:12px;' });

  Object.values(COMPETENCIES).forEach(comp => {
    const uc = s.competencyScores[comp.id];
    const score = uc?.score || 0;
    const level = uc?.level || 'Novice';
    const history = uc?.history || [];
    const attempts = history.length;
    const improving = attempts >= 2 && history[history.length-1]?.score > history[0]?.score;

    const row = el('div', {
      style: `
        display:flex;align-items:center;gap:16px;padding:14px 18px;
        background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
        border-radius:12px;flex-wrap:wrap;
      `,
    });
    row.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;min-width:160px;">
        <span style="font-size:1.4rem;">${comp.icon}</span>
        <div>
          <div style="font-weight:700;font-size:0.9rem;">${comp.name}</div>
          <div style="font-size:0.75rem;color:${comp.color};">${level}</div>
        </div>
      </div>
      <div style="flex:1;min-width:120px;">
        <div class="progress-bar" style="height:10px;">
          <div class="progress-fill" style="width:${score}%;background:${comp.color};"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:3px;font-size:0.72rem;color:var(--qm-text-dim);">
          <span>${attempts} attempt${attempts !== 1 ? 's' : ''}</span>
          <span>${score}/100</span>
        </div>
      </div>
      <div style="min-width:80px;text-align:right;">
        ${improving ? '<span style="color:var(--qm-success);font-size:0.8rem;font-weight:700;">📈 Improving</span>' : ''}
        ${score >= 85 ? '<span style="color:var(--qm-accent);font-size:0.8rem;font-weight:700;">⭐ Expert</span>' : ''}
        ${attempts === 0 ? '<span style="color:var(--qm-text-dim);font-size:0.8rem;">Not started</span>' : ''}
      </div>
    `;
    // Rubric detail button
    if (attempts > 0) {
      const detBtn = el('button', {
        class: 'btn btn-ghost btn-sm',
        onClick: () => showRubricDetail(comp, uc),
      }, '🔍 Rubric');
      row.appendChild(detBtn);
    }
    compGrid.appendChild(row);
  });
  compSection.appendChild(compGrid);
  wrap.appendChild(compSection);

  // ── Attempt Timeline ──────────────────────
  const timeSection = el('div');
  timeSection.innerHTML = '<div class="section-title">📅 Assessment Timeline</div>';

  if (s.assessmentAttempts.length === 0) {
    timeSection.innerHTML += `<div style="text-align:center;padding:24px;color:var(--qm-text-dim);">No assessments recorded yet.</div>`;
  } else {
    const timeline = el('div', { style: 'display:flex;flex-direction:column;gap:8px;max-height:400px;overflow-y:auto;' });
    [...s.assessmentAttempts].reverse().slice(0, 20).forEach(att => {
      const comp  = COMPETENCIES[att.competencyId];
      const world = WORLDS[att.worldId];
      const item  = el('div', {
        style: `
          display:flex;align-items:center;gap:12px;padding:12px 16px;
          background:rgba(255,255,255,0.04);border-radius:10px;
          border-left:3px solid ${att.passed ? 'var(--qm-success)' : 'var(--qm-danger)'};
          flex-wrap:wrap;font-size:0.82rem;
        `,
      });
      item.innerHTML = `
        <div style="flex:1;min-width:200px;">
          <div style="font-weight:700;">${att.taskTitle || att.taskId}</div>
          <div style="color:var(--qm-text-dim);margin-top:2px;">
            ${world?.emoji || ''} ${world?.name || att.worldId} •
            ${comp?.icon || ''} ${comp?.name || att.competencyId}
          </div>
        </div>
        <div style="text-align:center;min-width:80px;">
          <div style="font-family:'Orbitron',monospace;font-weight:700;color:${att.score>=70?'var(--qm-success)':att.score>=50?'var(--qm-accent)':'var(--qm-danger)'};">${att.score}/100</div>
          <div style="font-size:0.7rem;color:var(--qm-text-dim);">#${att.attemptNumber} attempt</div>
        </div>
        <div style="text-align:right;min-width:80px;">
          ${renderStars(att.stars)}
          <div style="font-size:0.7rem;color:var(--qm-text-dim);">${formatDate(att.submittedAt)}</div>
        </div>
        <div>
          <span style="color:${att.passed?'var(--qm-success)':'var(--qm-danger)'};font-weight:700;font-size:0.8rem;">${att.passed ? '✅' : '❌'}</span>
        </div>
      `;
      timeline.appendChild(item);
    });
    timeSection.appendChild(timeline);
  }
  wrap.appendChild(timeSection);

  // ── Recommendations ───────────────────────
  const recSection = el('div');
  recSection.innerHTML = '<div class="section-title">💡 Teacher Recommendations</div>';
  const recGrid = el('div', { style: 'display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;' });

  // Auto-generate recommendations based on scores
  const recs = [];
  Object.values(COMPETENCIES).forEach(comp => {
    const uc = s.competencyScores[comp.id];
    const score = uc?.score || 0;
    if (score < 50 && (uc?.history?.length || 0) > 0) {
      recs.push({ type: 'practice', comp, score });
    } else if (score >= 70 && (uc?.history?.length || 0) >= 2) {
      recs.push({ type: 'advance', comp, score });
    }
  });

  if (s.totalMissionsCompleted === 0) {
    recs.push({ type: 'start', comp: null, score: 0 });
  }

  if (recs.length === 0) {
    recSection.innerHTML += '<div style="color:var(--qm-text-dim);font-size:0.85rem;padding:12px 0;">Complete more missions to generate personalised recommendations.</div>';
  } else {
    recs.slice(0, 6).forEach(rec => {
      const card = el('div', {
        style: `
          padding:14px;background:rgba(255,255,255,0.04);border-radius:12px;
          border:1px solid rgba(255,255,255,0.08);
        `,
      });
      if (rec.type === 'practice') {
        card.innerHTML = `
          <div style="font-weight:700;margin-bottom:4px;">📝 More Practice Recommended</div>
          <div style="font-size:0.82rem;color:var(--qm-text-dim);">
            ${rec.comp.icon} ${rec.comp.name} — current score: ${rec.score}/100.
            Complete more ${rec.comp.name.toLowerCase()} missions to strengthen this competency.
          </div>
          <div style="margin-top:6px;font-size:0.75rem;color:${rec.comp.color};">${rec.comp.levels.Developing}</div>
        `;
      } else if (rec.type === 'advance') {
        card.innerHTML = `
          <div style="font-weight:700;margin-bottom:4px;">⭐ Ready to Advance!</div>
          <div style="font-size:0.82rem;color:var(--qm-text-dim);">
            ${rec.comp.icon} ${rec.comp.name} — score: ${rec.score}/100.
            This learner is showing strong performance. Try harder challenges!
          </div>
          <div style="margin-top:6px;font-size:0.75rem;color:var(--qm-success);">Proficient level — consider stretch tasks.</div>
        `;
      } else {
        card.innerHTML = `
          <div style="font-weight:700;margin-bottom:4px;">🚀 Getting Started</div>
          <div style="font-size:0.82rem;color:var(--qm-text-dim);">
            No missions completed yet. Encourage the student to start with their chosen world!
          </div>
        `;
      }
      recGrid.appendChild(card);
    });
  }
  recSection.appendChild(recGrid);
  wrap.appendChild(recSection);

  // ── Appeal panel (demo) ───────────────────
  const appealSection = el('div');
  appealSection.innerHTML = `
    <div class="section-title">📣 Assessment Appeals</div>
    <div style="padding:14px;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.2);border-radius:12px;font-size:0.85rem;color:var(--qm-text-dim);">
      No pending appeals. Students can challenge their assessment scores from within the game — appeals will appear here for teacher review.
      <br><br>
      <strong style="color:var(--qm-text);">How it works:</strong> When a student disputes a result, they provide their reasoning. The teacher reviews the original task, submitted response, and rubric results, then records a final decision.
    </div>
  `;
  wrap.appendChild(appealSection);

  // ── Rubric detail modal ───────────────────
  function showRubricDetail(comp, uc) {
    const modal = el('div', {
      style: 'position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:999;padding:20px;',
      onClick: e => { if (e.target === modal) modal.remove(); },
    });
    const inner = el('div', {
      class: 'glass-strong',
      style: 'width:min(520px,95vw);max-height:80vh;overflow-y:auto;padding:28px;display:flex;flex-direction:column;gap:14px;',
    });
    const evidence = uc?.evidence || [];
    inner.innerHTML = `
      <div style="font-family:'Orbitron',monospace;font-size:1.1rem;font-weight:700;color:${comp.color};">${comp.icon} ${comp.name} — Rubric</div>
      <div style="font-size:0.85rem;color:var(--qm-text-dim);">${comp.description}</div>
      <div class="section-title">Rubric Criteria</div>
      ${comp.rubricCriteria.map((c, i) => `
        <div style="padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);font-size:0.82rem;">
          ${i+1}. ${c}
        </div>
      `).join('')}
      <div class="section-title">Evidence Records (${evidence.length})</div>
      ${evidence.length === 0
        ? '<div style="color:var(--qm-text-dim);font-size:0.82rem;">No evidence yet.</div>'
        : evidence.slice(-5).map(ev => `
          <div style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);font-size:0.82rem;">
            <div style="font-weight:700;">${ev.taskTitle || ev.taskId}</div>
            <div style="color:var(--qm-text-dim);">${formatDate(ev.date)} • <strong>${ev.score}/100</strong></div>
            ${ev.rubricResults?.length ? `<div>${ev.rubricResults.map(r => `<span style="font-size:0.72rem;margin-right:6px;">${r.criterion}: ${r.earned}/${r.max}</span>`).join('')}</div>` : ''}
          </div>
        `).join('')
      }
      <button class="btn btn-ghost" onclick="this.closest('.glass-strong').parentElement.remove()">✕ Close</button>
    `;
    modal.appendChild(inner);
    document.body.appendChild(modal);
    Animations.slideIn(inner, 'bottom');
  }
}

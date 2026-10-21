/* ═══════════════════════════════════════
   QUESTMIND — World Map & Stage Select
═══════════════════════════════════════ */

ScreenHandlers['worldmap'] = function(data) {
  ScreenManager.showScreen(QM.SCREENS.SUBJECTS, data);
};

function renderWorldMap(data = {}) {
  const root = $('#screen-worldmap');
  root.innerHTML = '';
  createStarBackground(root, 60);

  const s = Store.get();
  const currentWorldId = data.worldId || s.currentWorld || 'space';
  let activeWorldId = currentWorldId;

  const world = WORLDS[activeWorldId] || WORLDS['space'];

  // ── Layout ────────────────────────────────
  const wrap = el('div', { style: 'width:min(1100px,98vw);margin:0 auto;padding-bottom:80px;' });
  root.appendChild(wrap);

  // ── Header ────────────────────────────────
  const header = el('div', { class: 'worldmap-header' });
  header.innerHTML = `
    <div>
      <div class="worldmap-title">🗺️ QUESTMIND</div>
      <div style="font-size:0.8rem;color:var(--qm-text-dim);">Choose your world and stage</div>
    </div>
    <div class="player-hud">
      ${renderXPBar()}
      <div class="player-avatar-chip">
        <span class="player-avatar-emoji">${s.profile?.avatarEmoji || '🚀'}</span>
        <div>
          <div class="player-name">${s.profile?.nickname || 'Explorer'}</div>
          <div class="player-level">${getLevelName(s.level)} • ${s.xp} XP</div>
        </div>
      </div>
    </div>
  `;
  wrap.appendChild(header);

  // ── World Switcher ───────────────────────
  const switcher = el('div', { class: 'world-switcher', id: 'world-switcher' });
  Object.values(WORLDS).forEach(w => {
    const pill = el('div', {
      class: `world-pill ${w.id === activeWorldId ? 'active' : ''}`,
      style: { '--world-color': w.color },
      onClick: () => switchWorld(w.id),
    }, `${w.emoji} ${w.name}`);
    switcher.appendChild(pill);
  });
  wrap.appendChild(switcher);

  // ── World Banner ─────────────────────────
  const banner = el('div', {
    id: 'world-banner',
    style: `
      background: linear-gradient(135deg, ${world.color}30, transparent);
      border: 1px solid ${world.color}50;
      border-radius: 20px; padding: 20px 28px; margin-bottom: 20px;
      display:flex; align-items:center; gap:20px;
    `,
  });
  renderBanner(banner, WORLDS[activeWorldId]);
  wrap.appendChild(banner);

  // ── Tab bar ───────────────────────────────
  const tabs = el('div', { class: 'tab-bar' });
  const tabMap   = el('button', { class: 'tab-btn active', id: 'tab-stages', onClick: () => switchTab('stages') }, '🗺️ Stages');
  const tabBadges= el('button', { class: 'tab-btn', id: 'tab-badges', onClick: () => switchTab('badges') }, '🏅 Badges');
  const tabOpp   = el('button', { class: 'tab-btn', id: 'tab-opp',    onClick: () => switchTab('opp')    }, '🎓 Opportunities');
  tabs.append(tabMap, tabBadges, tabOpp);
  wrap.appendChild(tabs);

  // ── Content area ─────────────────────────
  const content = el('div', { id: 'worldmap-content' });
  wrap.appendChild(content);

  // Initialize with stages tab
  renderStagesTab(activeWorldId);

  // ── Functions ─────────────────────────────
  function switchWorld(wid) {
    activeWorldId = wid;
    Store.set({ currentWorld: wid });

    // Update switcher
    $$('.world-pill').forEach(p => p.classList.remove('active'));
    switcher.children[Object.keys(WORLDS).indexOf(wid)]?.classList.add('active');

    // Update banner
    renderBanner(banner, WORLDS[wid]);

    // Re-render current tab
    const activeTab = $$('.tab-btn').find(t => t.classList.contains('active'))?.id?.replace('tab-','');
    if (activeTab === 'stages') renderStagesTab(wid);
  }

  function switchTab(tab) {
    $$('.tab-btn').forEach(t => t.classList.remove('active'));
    $(`#tab-${tab}`)?.classList.add('active');
    if (tab === 'stages') renderStagesTab(activeWorldId);
    else if (tab === 'badges') renderBadgesTab();
    else if (tab === 'opp') renderOpportunitiesTab();
  }

  function renderBanner(el, w) {
    el.innerHTML = `
      <div style="font-size:3.5rem;">${w.emoji}</div>
      <div style="flex:1;">
        <div style="font-family:'Orbitron',monospace;font-size:1.4rem;font-weight:700;color:${w.color};">${w.name}</div>
        <div style="font-size:0.85rem;color:var(--qm-text-dim);margin-top:4px;">${w.description}</div>
        <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;">
          ${w.subjects.map(s => `<span class="tag" style="background:${w.color}20;color:${w.color};">${s}</span>`).join('')}
        </div>
      </div>
      <button class="btn btn-primary" onclick="launchGameWorld('${w.id}',0)" style="white-space:nowrap;background:linear-gradient(135deg,${w.color},${w.accentColor||w.color});">
        ▶️ Play!
      </button>
    `;
  }

  function renderStagesTab(wid) {
    const world = WORLDS[wid];
    if (!world) return;
    content.innerHTML = '';
    const list = el('div', { class: 'stage-list' });

    world.stages.forEach((stage, idx) => {
      const prog  = Store.getStageProgress(wid, idx);
      const locked= !Store.isStageUnlocked(wid, idx);
      const stars = prog?.stars || 0;
      const missions = getMissionsForStage(wid, idx);

      const card = el('div', {
        class: `stage-card ${locked ? 'locked' : ''} ${prog?.completed ? 'completed' : ''}`,
        style: { '--world-color': world.color },
        onClick: locked ? null : () => launchGameWorld(wid, idx),
      });

      card.innerHTML = `
        <div class="stage-number">${locked ? '🔒' : (idx + 1)}</div>
        <div class="stage-info">
          <div class="stage-name">${stage.emoji} ${stage.name}</div>
          <div class="stage-description">${stage.description}</div>
          <div class="stage-meta">
            ${renderStars(stars)}
            <span class="stage-missions" style="font-size:0.75rem;color:var(--qm-text-dim);">
              ${missions.length} challenge${missions.length !== 1 ? 's' : ''} •
              ${prog?.attempts || 0} attempt${(prog?.attempts || 0) !== 1 ? 's' : ''}
            </span>
            ${prog?.completed ? '<span style="color:var(--qm-success);font-size:0.75rem;font-weight:700;">✅ COMPLETED</span>' : ''}
          </div>
        </div>
        <div>${locked ? '<span class="stage-lock-icon">🔒</span>' : `<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();launchGameWorld('${wid}',${idx})">▶️ Play</button>`}</div>
      `;
      list.appendChild(card);
    });

    content.appendChild(list);
    Animations.staggerIn([...list.children], 60);
  }

  function renderBadgesTab() {
    content.innerHTML = '';
    const earned = Store.get().achievements;
    const section = el('div', { style: 'display:flex;flex-direction:column;gap:16px;' });

    const title = el('div', { class: 'section-title' }, '🏅 Your Badges');
    section.appendChild(title);

    const grid = el('div', { class: 'badges-grid' });
    Object.values(ACHIEVEMENTS).forEach(ach => {
      const isEarned = earned.includes(ach.id);
      const card = el('div', { class: `badge-card ${isEarned ? 'earned' : 'locked'}` });
      card.innerHTML = `
        <span class="badge-icon">${ach.emoji}</span>
        <span class="badge-name">${ach.name}</span>
        <span style="font-size:0.65rem;color:${isEarned ? 'var(--qm-accent)' : 'var(--qm-text-dim)'};text-align:center;line-height:1.3;">
          ${isEarned ? ach.description : '???'}
        </span>
        ${isEarned ? `<span style="font-size:0.65rem;color:var(--qm-success);font-weight:700;">+${ach.xpBonus} XP</span>` : ''}
      `;
      grid.appendChild(card);
    });
    section.appendChild(grid);

    // Stats
    const stats = el('div', { style: 'display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:12px;margin-top:8px;' });
    const statData = [
      { n: Store.get().totalMissionsCompleted, l: 'Missions Done', icon: '✅' },
      { n: Store.get().xp, l: 'Total XP', icon: '⭐' },
      { n: Store.get().level, l: 'Level', icon: '🏆' },
      { n: earned.length, l: 'Badges', icon: '🏅' },
    ];
    statData.forEach(({ n, l, icon }) => {
      const card = el('div', { class: 'stat-card' });
      card.innerHTML = `<div class="stat-number">${icon} ${n}</div><div class="stat-label">${l}</div>`;
      stats.appendChild(card);
    });
    section.appendChild(stats);

    content.appendChild(section);
    Animations.staggerIn([...grid.children], 40);
  }

  function renderOpportunitiesTab() {
    content.innerHTML = '';
    const OPPS = [
      { title: '🏆 Young Coding Challenge', desc: 'Demonstrate debugging and computational thinking skills in this annual online competition.', tags: ['Debugging','Computational Thinking'], comp: [QM.COMP.DEBUGGING, QM.COMP.COMPUTATIONAL] },
      { title: '🤖 Junior Robotics League', desc: 'Design and programme fictional robots to complete obstacle courses using logic and algorithms.', tags: ['Logic','Computational Thinking'], comp: [QM.COMP.LOGIC, QM.COMP.COMPUTATIONAL] },
      { title: '🎨 Creative Innovation Showcase', desc: 'Present an original invention or solution to a real-world problem using creativity and communication.', tags: ['Creativity','Communication'], comp: [QM.COMP.CREATIVITY, QM.COMP.COMMUNICATION] },
      { title: '📊 Young Data Explorer', desc: 'Analyse datasets and present findings clearly in this data science adventure for young learners.', tags: ['Data Analysis','Logic'], comp: [QM.COMP.DATA, QM.COMP.LOGIC] },
      { title: '🔬 Science Discovery Club', desc: 'Explore science topics through hands-on experiments and structured problem solving.', tags: ['Problem-Solving','Data Analysis'], comp: [QM.COMP.PROBLEM, QM.COMP.DATA] },
      { title: '💼 Young Business Minds', desc: 'Plan a fictional business, manage a budget, and pitch your idea to a panel of mentors.', tags: ['Business Reasoning','Communication'], comp: [QM.COMP.BUSINESS, QM.COMP.COMMUNICATION] },
    ];

    const scores = Store.get().competencyScores;
    const title = el('div', { class: 'section-title' }, '🎓 Educational Opportunities (Fictional Demo)');
    const note = el('div', {
      style: 'font-size:0.8rem;color:var(--qm-text-dim);padding:10px 14px;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:10px;margin-bottom:12px;',
    }, '⚠️ These are fictional opportunities for demonstration purposes. Real sharing requires guardian consent. Profiles are private by default.');

    const grid = el('div', { class: 'opportunity-grid' });
    OPPS.forEach(opp => {
      const relevantScore = opp.comp.map(c => scores[c]?.score || 0);
      const avgScore = relevantScore.reduce((a,b) => a+b, 0) / relevantScore.length;
      const match = avgScore >= 50;
      const card = el('div', { class: 'opportunity-card' });
      card.innerHTML = `
        <div class="opp-title">${opp.title}</div>
        <div class="opp-desc">${opp.desc}</div>
        <div class="opp-tags">${opp.tags.map(t => `<span class="opp-tag">${t}</span>`).join('')}</div>
        <div style="margin-top:8px;display:flex;align-items:center;gap:8px;">
          <div class="progress-bar" style="flex:1;height:6px;">
            <div class="progress-fill" style="width:${Math.min(100,avgScore)}%;"></div>
          </div>
          <span style="font-size:0.75rem;font-weight:700;color:${match ? 'var(--qm-success)' : 'var(--qm-text-dim)'};">
            ${match ? '✅ Match' : '📈 Keep learning'}
          </span>
        </div>
      `;
      grid.appendChild(card);
    });

    content.append(title, note, grid);
    Animations.staggerIn([...grid.children], 60);
  }
}

// Global: launch game for a world + stage
window.launchGameWorld = function(worldId, stageIdx) {
  Store.set({ currentWorld: worldId, currentStage: stageIdx });
  GameManager.launch(worldId, stageIdx);
  ScreenManager.showScreen(QM.SCREENS.GAME);
};

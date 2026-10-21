/* ═══════════════════════════════════════
   QUESTMIND — UI Overlay Scene (Phaser)
   Handles pause, game-over, mission popups
═══════════════════════════════════════ */
class UIScene extends Phaser.Scene {
  constructor() { super({ key: 'UIScene' }); }

  init(data) {
    this.worldId  = data.worldId;
    this.stageIdx = data.stageIdx;
    this.gameScene = null;
    this.activeMission = null;
  }

  create() {
    this.gameScene = this.scene.get('GameScene');

    // Listen to GameScene events
    this.gameScene.events.on('missionTriggered', this.showMissionPopup, this);
    this.gameScene.events.on('gameOver',         this.showGameOver,    this);
    this.gameScene.events.on('stageComplete',    this.showStageComplete, this);
    this.gameScene.events.on('togglePause',      this.togglePause,     this);

    // Pause overlay (DOM-based)
    this.setupPauseOverlay();
  }

  setupPauseOverlay() {
    const overlay = $('#pause-overlay');
    if (!overlay) return;
    const btnResume  = overlay.querySelector('#pause-resume');
    const btnRestart = overlay.querySelector('#pause-restart');
    const btnExit    = overlay.querySelector('#pause-exit');
    if (btnResume)  btnResume.addEventListener('click', () => this.togglePause());
    if (btnRestart) btnRestart.addEventListener('click', () => { overlay.classList.remove('visible'); this.gameScene.restartGame(); });
    if (btnExit)    btnExit.addEventListener('click', () => { overlay.classList.remove('visible'); GameManager.exitToMap(); });
  }

  togglePause() {
    const gs = this.gameScene;
    if (!gs) return;
    gs.isPaused = !gs.isPaused;
    const overlay = $('#pause-overlay');
    if (overlay) overlay.classList.toggle('visible', gs.isPaused);
    if (gs.isPaused) {
      gs.obstacles.setVelocityX(0);
      gs.gems.setVelocityX(0);
      gs.powerups.setVelocityX(0);
    } else {
      gs.resumeObjects();
    }
  }

  showMissionPopup(mission) {
    this.activeMission = mission;
    const popup = $('#mission-popup');
    if (!popup) return;

    popup.innerHTML = '';
    const world = WORLDS[mission.worldId];

    // Header
    popup.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <span style="font-size:2rem;">${world?.emoji || '⚡'}</span>
        <div>
          <div style="font-family:'Orbitron',monospace;font-size:0.85rem;color:var(--qm-secondary);">MISSION CHALLENGE</div>
          <div style="font-size:1.1rem;font-weight:800;">${mission.title}</div>
        </div>
        <div style="margin-left:auto;font-size:0.75rem;color:var(--qm-text-dim);">
          ${COMPETENCIES[mission.competencyId]?.icon || ''} ${COMPETENCIES[mission.competencyId]?.name || ''}
        </div>
      </div>
      <div id="mission-content"></div>
    `;

    const content = popup.querySelector('#mission-content');
    this.renderMissionContent(mission, content);
    popup.classList.add('visible');
  }

  renderMissionContent(mission, container) {
    switch (mission.type) {
      case QM.MISSION_TYPE.QUIZ:
        this.renderQuiz(mission, container); break;
      case QM.MISSION_TYPE.DEBUG:
        this.renderDebug(mission, container); break;
      case QM.MISSION_TYPE.LOGIC:
        this.renderQuiz(mission, container); break; // logic uses quiz format
      case QM.MISSION_TYPE.MATCH:
        this.renderMatch(mission, container); break;
      case QM.MISSION_TYPE.MEMORY:
        this.renderMemory(mission, container); break;
      case QM.MISSION_TYPE.RESOURCE:
        this.renderQuiz(mission, container); break;
      case QM.MISSION_TYPE.DATA:
        this.renderQuiz(mission, container); break;
      case QM.MISSION_TYPE.CREATIVE:
        this.renderCreative(mission, container); break;
      default:
        this.renderQuiz(mission, container);
    }
  }

  // ── QUIZ ─────────────────────────────────
  renderQuiz(mission, container) {
    container.innerHTML = `
      <div style="font-size:0.95rem;font-weight:700;margin-bottom:14px;line-height:1.4;">${mission.question}</div>
      <div id="quiz-options" style="display:flex;flex-direction:column;gap:8px;"></div>
      <div id="quiz-feedback" style="margin-top:12px;display:none;"></div>
    `;
    const optsEl = container.querySelector('#quiz-options');
    mission.options.forEach((opt, i) => {
      const btn = el('button', {
        class: 'btn btn-ghost w-full',
        style: { textAlign: 'left', justifyContent: 'flex-start', padding: '12px 16px' },
        onClick: () => this.submitQuizAnswer(mission, i, btn, optsEl),
      }, `${['A','B','C','D'][i]}. ${opt}`);
      optsEl.appendChild(btn);
    });
  }

  submitQuizAnswer(mission, idx, clickedBtn, optsEl) {
    const correct = idx === mission.correctIndex;

    // Disable all options
    $$('button', optsEl).forEach(b => b.style.pointerEvents = 'none');

    if (correct) {
      clickedBtn.style.background = 'rgba(16,185,129,0.2)';
      clickedBtn.style.borderColor = 'var(--qm-success)';
      this.onCorrect(mission, idx);
    } else {
      clickedBtn.style.background = 'rgba(239,68,68,0.2)';
      clickedBtn.style.borderColor = 'var(--qm-danger)';
      // Highlight correct
      $$('button', optsEl)[mission.correctIndex].style.background = 'rgba(16,185,129,0.15)';
      this.onWrong(mission, idx);
    }
  }

  // ── DEBUG ─────────────────────────────────
  renderDebug(mission, container) {
    container.innerHTML = `
      <div style="font-size:0.9rem;font-weight:700;margin-bottom:12px;">${mission.question}</div>
      <div style="font-size:0.82rem;color:var(--qm-text-dim);margin-bottom:10px;">Click the step that contains the bug:</div>
      <div id="debug-steps" style="display:flex;flex-direction:column;gap:6px;"></div>
    `;
    const stepsEl = container.querySelector('#debug-steps');
    mission.steps.forEach((step, i) => {
      const btn = el('button', {
        class: 'btn btn-ghost',
        style: { textAlign: 'left', justifyContent: 'flex-start', padding: '10px 14px', fontSize: '0.85rem' },
        onClick: () => this.submitDebugAnswer(mission, i, btn, stepsEl),
      }, `Step ${i+1}: ${step}`);
      stepsEl.appendChild(btn);
    });
  }

  submitDebugAnswer(mission, idx, clickedBtn, stepsEl) {
    $$('button', stepsEl).forEach(b => b.style.pointerEvents = 'none');
    const correct = idx === mission.bugIndex;
    clickedBtn.innerHTML = (correct ? '✅ ' : '❌ ') + clickedBtn.innerHTML;
    if (correct) {
      clickedBtn.style.background = 'rgba(16,185,129,0.2)';
      this.onCorrect(mission, idx);
    } else {
      clickedBtn.style.background = 'rgba(239,68,68,0.15)';
      $$('button', stepsEl)[mission.bugIndex].style.background = 'rgba(16,185,129,0.15)';
      this.onWrong(mission, idx);
    }
  }

  // ── MATCH ────────────────────────────────
  renderMatch(mission, container) {
    let selectedLeft = null;
    const matched = new Set();
    container.innerHTML = `
      <div style="font-size:0.9rem;font-weight:700;margin-bottom:12px;">${mission.question}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;" id="match-grid"></div>
      <div id="match-progress" style="text-align:center;margin-top:10px;font-size:0.82rem;color:var(--qm-text-dim);">
        Match: 0 / ${mission.pairs.length}
      </div>
    `;
    const grid = container.querySelector('#match-grid');

    const lefts  = mission.pairs.map(p => ({ label: p.left,  id: p.id, side: 'left'  }));
    const rights = shuffle(mission.pairs.map(p => ({ label: p.right, id: p.id, side: 'right' })));

    const leftCol  = el('div', { style: 'display:flex;flex-direction:column;gap:6px;' });
    const rightCol = el('div', { style: 'display:flex;flex-direction:column;gap:6px;' });

    function makeMatchBtn(item) {
      return el('button', {
        class: 'btn btn-ghost',
        style: { padding: '10px 12px', fontSize: '0.8rem', textAlign: 'center' },
        'data-id': item.id, 'data-side': item.side,
        onClick: function() { handleMatchClick(this, item); },
      }, item.label);
    }

    lefts.forEach(item => leftCol.appendChild(makeMatchBtn(item)));
    rights.forEach(item => rightCol.appendChild(makeMatchBtn(item)));
    grid.append(leftCol, rightCol);

    function handleMatchClick(btn, item) {
      if (matched.has(item.id)) return;

      if (item.side === 'left') {
        $$('button', leftCol).forEach(b => b.style.boxShadow = '');
        selectedLeft = item.id;
        btn.style.boxShadow = '0 0 0 2px var(--qm-secondary)';
      } else {
        if (selectedLeft == null) return;
        const correct = selectedLeft === item.id;
        if (correct) {
          matched.add(item.id);
          // Find and mark left button
          $$('button', leftCol).forEach(b => {
            if (b.dataset.id === item.id) {
              b.style.background = 'rgba(16,185,129,0.2)';
              b.style.borderColor = 'var(--qm-success)';
              b.style.boxShadow = '';
            }
          });
          btn.style.background = 'rgba(16,185,129,0.2)';
          btn.style.borderColor = 'var(--qm-success)';
          container.querySelector('#match-progress').textContent =
            `Match: ${matched.size} / ${mission.pairs.length}`;

          if (matched.size === mission.pairs.length) {
            setTimeout(() => instance.onCorrect(mission, [...matched]), 500);
          }
        } else {
          btn.style.background = 'rgba(239,68,68,0.15)';
          setTimeout(() => { btn.style.background = ''; }, 600);
        }
        selectedLeft = null;
        $$('button', leftCol).forEach(b => b.style.boxShadow = '');
      }
    }

    const instance = this;
  }

  // ── MEMORY ────────────────────────────────
  renderMemory(mission, container) {
    container.innerHTML = `
      <div style="font-size:0.9rem;font-weight:700;margin-bottom:12px;">${mission.question}</div>
      <div id="memory-display" style="text-align:center;font-size:2rem;letter-spacing:8px;margin:12px 0;min-height:48px;"></div>
      <div id="memory-input" style="display:none;flex-wrap:wrap;gap:8px;justify-content:center;"></div>
      <div id="memory-status" style="text-align:center;font-size:0.82rem;color:var(--qm-text-dim);margin-top:6px;"></div>
    `;

    const seq    = mission.sequence;
    const dispEl = container.querySelector('#memory-display');
    const inpEl  = container.querySelector('#memory-input');
    const statEl = container.querySelector('#memory-status');
    const allSymbols = [...new Set(seq)];
    let playerSeq = [];

    // Show sequence
    statEl.textContent = 'Watch the sequence…';
    dispEl.textContent = seq.join(' ');
    setTimeout(() => {
      dispEl.textContent = '❓❓❓❓❓❓'.slice(0, seq.length * 2);
      inpEl.style.display = 'flex';
      statEl.textContent = 'Now repeat it!';

      allSymbols.forEach(sym => {
        const btn = el('button', {
          class: 'btn btn-ghost',
          style: { fontSize: '1.8rem', padding: '8px 14px' },
          onClick: () => {
            playerSeq.push(sym);
            dispEl.textContent = playerSeq.join(' ');
            if (playerSeq.length === seq.length) {
              const correct = playerSeq.every((s, i) => s === seq[i]);
              setTimeout(() => {
                if (correct) this.onCorrect(mission, playerSeq);
                else this.onWrong(mission, playerSeq);
              }, 400);
            }
          },
        }, sym);
        inpEl.appendChild(btn);
      });

      // Clear button
      const clrBtn = el('button', {
        class: 'btn btn-ghost btn-sm',
        style: { fontSize: '0.8rem' },
        onClick: () => { playerSeq = []; dispEl.textContent = ''; },
      }, '🗑️ Clear');
      inpEl.appendChild(clrBtn);
    }, mission.displayTime || 3000);
  }

  // ── CREATIVE ─────────────────────────────
  renderCreative(mission, container) {
    let placed = [];
    container.innerHTML = `
      <div style="font-size:0.9rem;font-weight:700;margin-bottom:12px;">${mission.question}</div>
      <div style="font-size:0.8rem;color:var(--qm-text-dim);margin-bottom:10px;">Click components to add them to your design:</div>
      <div id="creative-components" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;"></div>
      <div id="creative-build" style="min-height:80px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:12px;padding:12px;display:flex;flex-wrap:wrap;gap:6px;align-items:flex-start;background:rgba(255,255,255,0.02);">
        <span style="color:var(--qm-text-dim);font-size:0.8rem;">Your design area…</span>
      </div>
      <div id="creative-status" style="margin-top:10px;font-size:0.82rem;color:var(--qm-text-dim);"></div>
      <button class="btn btn-primary" id="creative-submit" style="margin-top:10px;width:100%;">✅ Submit Design</button>
    `;
    const compEl   = container.querySelector('#creative-components');
    const buildEl  = container.querySelector('#creative-build');
    const statusEl = container.querySelector('#creative-status');
    const submitBtn= container.querySelector('#creative-submit');

    mission.components.forEach(comp => {
      const btn = el('button', {
        class: 'btn btn-ghost btn-sm',
        onClick: () => {
          placed.push(comp);
          const tag = el('span', {
            class: 'chip selected',
            style: { fontSize: '0.78rem', cursor: 'pointer' },
            onClick: () => { placed = placed.filter(p => p !== comp); tag.remove(); updateStatus(); },
          }, comp + ' ✕');
          if (buildEl.firstChild?.tagName !== 'SPAN' || buildEl.firstChild.textContent !== 'Your design area…') {
            // already has items
          } else {
            buildEl.innerHTML = '';
          }
          buildEl.appendChild(tag);
          updateStatus();
        },
      }, '+ ' + comp);
      compEl.appendChild(btn);
    });

    function updateStatus() {
      const required = mission.requiredComponents || [];
      const missing  = required.filter(r => !placed.includes(r));
      if (missing.length === 0) {
        statusEl.textContent = '✅ All required components placed!';
        statusEl.style.color = 'var(--qm-success)';
      } else {
        statusEl.textContent = `Still need: ${missing.join(', ')}`;
        statusEl.style.color = 'var(--qm-text-dim)';
      }
    }

    submitBtn.addEventListener('click', () => {
      const required = mission.requiredComponents || [];
      const hasAll   = required.every(r => placed.includes(r));
      const hasBonus = (mission.bonusComponents || []).every(b => placed.includes(b));
      if (hasAll) {
        this.onCorrect(mission, placed, hasBonus);
      } else {
        this.onWrong(mission, placed);
      }
    });
  }

  // ── RESULT HANDLERS ───────────────────────
  onCorrect(mission, answer, bonus = false) {
    if (window.Sound) Sound.play('correct');
    const popup = $('#mission-popup');
    if (popup) popup.classList.remove('visible');
    const attempt = this.gameScene.completeMission(mission, true, answer);
    Nova.showCorrect(mission, {
      onClose: () => { /* game already resumed */ },
    });
    launchConfetti(40);
    Animations.xpFlash(mission.xpReward || 30);

    // Change world: spawn celebration gate
    this.spawnGateEffect();
  }

  onWrong(mission, answer) {
    if (window.Sound) Sound.play('wrong');
    const popup = $('#mission-popup');
    if (popup) popup.classList.remove('visible');
    this.gameScene.completeMission(mission, false, answer);
    Nova.showWrong(mission, answer, {
      onRetry: () => {
        Nova.hide();
        this.showMissionPopup(mission);
        // Re-add to queue front for retry
        this.gameScene.missionQueue.unshift(mission);
        this.gameScene.missionsDone = Math.max(0, this.gameScene.missionsDone - 1);
        this.gameScene.isInMission = false;
        this.gameScene.isPaused    = false;
        this.gameScene.resumeObjects();
        this.gameScene.isInMission = true;
        this.gameScene.isPaused    = true;
      },
      onHint: () => {},
      onPractice: () => {
        Nova.hide();
        Toast.show('Practice mode: try answering in a relaxed setting!', '', 3000);
      },
      onClose: () => { Nova.hide(); },
    });
  }

  spawnGateEffect() {
    // Phaser particles for correct answer
    const gs = this.gameScene;
    if (!gs) return;
    for (let i = 0; i < 20; i++) {
      gs.sparkAt(
        gs.player.x + (Math.random()-0.5) * 60,
        gs.player.y - Math.random() * 60,
        [0xf59e0b, 0x10b981, 0x06b6d4, 0x7c3aed][Math.floor(Math.random()*4)],
        1
      );
    }
  }

  // ── GAME OVER OVERLAY ─────────────────────
  showGameOver(data) {
    const overlay = $('#gameover-overlay');
    if (!overlay) return;
    overlay.innerHTML = `
      <div style="font-family:'Orbitron',monospace;font-size:2.5rem;font-weight:900;color:#ef4444;">GAME OVER</div>
      <div style="font-size:1.1rem;color:var(--qm-text-dim);">Your journey ends here… for now.</div>
      <div style="font-family:'Orbitron',monospace;font-size:2rem;font-weight:700;color:var(--qm-accent);">
        Score: ${data.score}
      </div>
      <div style="font-size:0.85rem;color:var(--qm-text-dim);">Gems collected: ${data.gems} 💎</div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
        <button class="btn btn-primary btn-lg" id="go-restart">🔄 Try Again</button>
        <button class="btn btn-ghost btn-lg" id="go-exit">🗺️ World Map</button>
      </div>
    `;
    overlay.classList.add('visible');

    $('#go-restart')?.addEventListener('click', () => {
      overlay.classList.remove('visible');
      this.gameScene.restartGame();
    });
    $('#go-exit')?.addEventListener('click', () => {
      overlay.classList.remove('visible');
      GameManager.exitToMap();
    });
  }

  showStageComplete(data) {
    const s = Store.get();
    const world = WORLDS[data.worldId];
    const stageInfo = world?.stages[data.stageIdx];
    const prog = Store.getStageProgress(data.worldId, data.stageIdx);
    const stars = prog?.stars || 2;

    const overlay = $('#gameover-overlay');
    if (!overlay) return;
    overlay.innerHTML = `
      <div style="font-size:3rem;">🏆</div>
      <div style="font-family:'Orbitron',monospace;font-size:1.8rem;font-weight:900;color:var(--qm-success);">STAGE COMPLETE!</div>
      <div style="font-size:1.1rem;color:var(--qm-text);">${world?.emoji} ${stageInfo?.name || 'Stage ' + (data.stageIdx+1)}</div>
      ${renderStars(stars)}
      <div style="font-family:'Orbitron',monospace;font-size:1.6rem;color:var(--qm-accent);">Score: ${data.score}</div>
      <div style="font-size:0.85rem;color:var(--qm-text-dim);">Gems: ${data.gems} 💎 • XP earned this session</div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
        <button class="btn btn-primary btn-lg" id="sc-next">▶️ Next Stage</button>
        <button class="btn btn-ghost btn-lg" id="sc-replay">🔄 Replay</button>
        <button class="btn btn-ghost btn-lg" id="sc-map">🗺️ World Map</button>
      </div>
    `;
    overlay.classList.add('visible');
    if (window.Sound) Sound.play('stageComplete');
    launchConfetti(80);

    const nextIdx = data.stageIdx + 1;
    const hasNext = world && nextIdx < world.stages.length;

    $('#sc-next')?.addEventListener('click', () => {
      overlay.classList.remove('visible');
      if (hasNext) {
        GameManager.launch(data.worldId, nextIdx);
      } else {
        Toast.show('🎉 You completed all stages in this world!', 'success', 4000);
        GameManager.exitToMap();
      }
    });
    $('#sc-replay')?.addEventListener('click', () => {
      overlay.classList.remove('visible');
      this.gameScene.restartGame();
    });
    $('#sc-map')?.addEventListener('click', () => {
      overlay.classList.remove('visible');
      GameManager.exitToMap();
    });
  }
}

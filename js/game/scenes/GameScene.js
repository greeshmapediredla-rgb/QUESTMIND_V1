/* ═══════════════════════════════════════════════════════════════
   QUESTMIND / SKILLVERSE — Main 3-Lane Endless Runner Scene
   Real-Time Physics • 3-Lane Educational Choice Gates • In-World Learning
═══════════════════════════════════════════════════════════════ */
class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init(data) {
    const profile = Store.getProfile();
    this.worldId = data?.worldId || profile?.theme || 'space';
    this.stageIdx = data?.stageIdx || 1;
    this.theme = QM.THEMES[this.worldId] || QM.THEMES.space;
    this.world = WORLDS[this.worldId] || WORLDS.space;
    this.stage = this.world.stages[this.stageIdx - 1] || this.world.stages[0];

    // State
    this.score = 0;
    this.lives = QM.GAME.LIVES;
    this.speed = QM.GAME.SPEED_BASE;
    this.distance = 0;
    this.targetDistance = 2400 + (this.stageIdx - 1) * 600; // Stage length
    this.comboCount = 0;
    this.scoreMulti = 1;

    this.isPaused = false;
    this.isGameOver = false;
    this.isStageComplete = false;

    // Powerups
    this.shieldActive = false;
    this.magnetActive = false;

    // 3 Lanes (0 = top, 1 = center, 2 = bottom)
    this.currentLane = 1;
    this.laneY = QM.GAME.LANE_Y;
    this.playerTargetY = this.laneY[1];

    // Player action states
    this.playerState = 'running'; // running, jumping, sliding
    this.isJumping = false;
    this.isSliding = false;
    this.slideTimer = 0;
    this.jumpBaseY = this.laneY[1];
    this.invincible = false;
    this.invincibleTimer = 0;

    // Educational Gateway System
    this.questionQueue = getQuestionsForStage(this.worldId, this.stageIdx, profile?.grade || 4, profile?.subject || 'math');
    this.currentQuestion = null;
    this.gatesActive = false;
    this.gateGroup = null;
    this.nextGateDistance = 500; // First gate occurs soon after starting
    this.gatesPassed = 0;
    this.targetGates = 3; // 3 educational gates per stage
    this.questionsCorrect = 0;
  }

  create() {
    const W = this.scale.width;
    const H = this.scale.height;

    // ── 1. Camera & Background ──────────────────────────────────
    this.cameras.main.setBackgroundColor(this.theme.skyColor || 0x030318);

    // Parallax background graphics
    this.bgStars = this.add.graphics().setDepth(-10);
    this.drawParallaxStars();

    // ── 2. 3-Lane Track Surface ─────────────────────────────────
    this.trackGraphics = this.add.graphics().setDepth(-5);
    this.drawTrack();

    // ── 3. Player ───────────────────────────────────────────────
    this.player = this.physics.add.sprite(
      QM.GAME.PLAYER_X,
      this.laneY[this.currentLane],
      'player'
    ).setDepth(10).setOrigin(0.5, 0.85);

    this.player.body.setAllowGravity(false);
    this.player.body.setSize(28, 44);
    this.player.setTint(this.theme.playerTint || 0x06b6d4);

    // Trail emitter particles
    this.trailEmitter = this.add.particles(0, 0, 'particle_blue', {
      speed: { min: -100, max: -40 },
      scale: { start: 0.6, end: 0 },
      alpha: { start: 0.7, end: 0 },
      lifespan: 300,
      frequency: 60,
    }).setDepth(9);
    this.trailEmitter.startFollow(this.player, -12, 12);

    // ── 4. Physics Groups ───────────────────────────────────────
    this.obstacles = this.physics.add.group();
    this.gems = this.physics.add.group();
    this.powerups = this.physics.add.group();
    this.choiceGates = this.physics.add.group();

    // Collisions
    this.physics.add.overlap(this.player, this.obstacles, this.hitObstacle, null, this);
    this.physics.add.overlap(this.player, this.gems, this.collectGem, null, this);
    this.physics.add.overlap(this.player, this.powerups, this.collectPowerup, null, this);
    this.physics.add.overlap(this.player, this.choiceGates, this.hitChoiceGate, null, this);

    // ── 5. Input Controls ───────────────────────────────────────
    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,
      esc: Phaser.Input.Keyboard.KeyCodes.ESC,
      one: Phaser.Input.Keyboard.KeyCodes.ONE,
      two: Phaser.Input.Keyboard.KeyCodes.TWO,
      three: Phaser.Input.Keyboard.KeyCodes.THREE,
    });

    this.setupTouchControls();

    // ── 6. In-Game In-World Question Billboard HUD ──────────────
    this.billboardContainer = this.add.container(W / 2, 80).setDepth(20).setVisible(false);
    this.createQuestionBillboard();

    // Initial spawning schedule
    this.nextObstacleDistance = 250;
    this.nextGemDistance = 150;
    this.nextPowerupDistance = 900;

    // Broadcast ready event
    this.events.emit('gameReady');
  }

  // ═════════════════════════════════════════════════════════════
  // UPDATE LOOP (60 FPS)
  // ═════════════════════════════════════════════════════════════
  update(time, delta) {
    if (this.isPaused || this.isGameOver || this.isStageComplete) return;

    const dt = delta / 1000;
    const stepDist = this.speed * dt;
    this.distance += stepDist;
    this.score = Math.floor(this.distance / 4);

    // Gradually ramp speed smoothly
    this.speed = Math.min(580, QM.GAME.SPEED_BASE + Math.floor(this.distance / 600) * QM.GAME.SPEED_INCREMENT);

    // Redraw track markers scrolling with speed
    this.drawTrack(this.distance);

    // Handle Player Controls
    this.handleInput();

    // Smooth lane vertical snapping
    this.updatePlayerPosition(dt);

    // Slide timer
    if (this.isSliding) {
      this.slideTimer -= delta;
      if (this.slideTimer <= 0) this.endSlide();
    }

    // Invincibility flashing
    if (this.invincible) {
      this.invincibleTimer -= delta;
      this.player.setAlpha(Math.floor(this.invincibleTimer / 120) % 2 === 0 ? 0.3 : 1);
      if (this.invincibleTimer <= 0) {
        this.invincible = false;
        this.player.setAlpha(1);
      }
    }

    // Magnet attraction effect
    if (this.magnetActive) {
      this.gems.getChildren().forEach(gem => {
        const dx = this.player.x - gem.x;
        const dy = this.player.y - gem.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 260) {
          gem.x += (dx / dist) * 360 * dt;
          gem.y += (dy / dist) * 360 * dt;
        }
      });
    }

    // Spawning Logic
    if (!this.gatesActive) {
      if (this.distance >= this.nextObstacleDistance) {
        this.spawnObstacle();
        this.nextObstacleDistance = this.distance + (320 + Math.random() * 260);
      }
      if (this.distance >= this.nextGemDistance) {
        this.spawnGem();
        this.nextGemDistance = this.distance + (200 + Math.random() * 180);
      }
      if (this.distance >= this.nextPowerupDistance) {
        this.spawnPowerup();
        this.nextPowerupDistance = this.distance + (1200 + Math.random() * 800);
      }
    }

    // Educational Choice Gate Spawner
    if (!this.gatesActive && this.distance >= this.nextGateDistance && this.gatesPassed < this.targetGates) {
      this.spawnEducationalChoiceGate();
    }

    // Clean offscreen items
    this.cleanupOffscreen();

    // Check Stage Clear Goal
    if (this.gatesPassed >= this.targetGates && this.distance >= this.targetDistance && !this.gatesActive) {
      this.triggerStageComplete();
    }

    // Update DOM HUD if present
    this.updateDOMHUD();
  }

  // ═════════════════════════════════════════════════════════════
  // PLAYER MOVEMENT & CONTROLS
  // ═════════════════════════════════════════════════════════════
  handleInput() {
    const just = key => Phaser.Input.Keyboard.JustDown(key);
    const { cursors, wasd } = this;

    // Switch Lane Up (Lane 0)
    if (just(cursors.left) || just(wasd.left) || just(cursors.up) && !just(wasd.space)) {
      if (this.currentLane > 0) this.switchLane(-1);
    }
    // Switch Lane Down (Lane 2)
    if (just(cursors.right) || just(wasd.right)) {
      if (this.currentLane < 2) this.switchLane(1);
    }

    // Jump (W or Space)
    if ((just(wasd.up) || just(wasd.space)) && !this.isJumping && !this.isSliding) {
      this.jump();
    }

    // Slide (S or Down Arrow)
    if ((just(cursors.down) || just(wasd.down)) && !this.isJumping && !this.isSliding) {
      this.startSlide();
    }

    // Pause (ESC)
    if (just(wasd.esc)) {
      this.togglePause();
    }

    // Quick selection keys for choice gates (1, 2, 3)
    if (this.gatesActive) {
      if (just(wasd.one)) this.setLane(0);
      if (just(wasd.two)) this.setLane(1);
      if (just(wasd.three)) this.setLane(2);
    }
  }

  switchLane(delta) {
    this.currentLane = Phaser.Math.Clamp(this.currentLane + delta, 0, 2);
    this.playerTargetY = this.laneY[this.currentLane];
    this.sparkAt(this.player.x, this.player.y, 0x38bdf8, 6);
  }

  setLane(target) {
    this.currentLane = target;
    this.playerTargetY = this.laneY[this.currentLane];
    this.sparkAt(this.player.x, this.player.y, 0x38bdf8, 8);
  }

  updatePlayerPosition(dt) {
    // Smooth lane vertical transition
    if (!this.isJumping) {
      const diff = this.playerTargetY - this.player.y;
      if (Math.abs(diff) > 2) {
        this.player.y += diff * 12 * dt;
      } else {
        this.player.y = this.playerTargetY;
      }
    } else {
      // In air jump parabolic trajectory
      this.jumpProgress += dt * 3.6;
      if (this.jumpProgress >= Math.PI) {
        // Landed
        this.isJumping = false;
        this.player.y = this.playerTargetY;
        this.player.setTexture('player');
        this.sparkAt(this.player.x, this.player.y, 0x06b6d4, 10);
      } else {
        const heightArc = Math.sin(this.jumpProgress) * 75;
        this.player.y = this.playerTargetY - heightArc;
      }
    }
  }

  jump() {
    this.isJumping = true;
    this.jumpProgress = 0;
    this.player.setTexture('player_jump');
    this.sparkAt(this.player.x, this.player.y, 0xf59e0b, 12);
  }

  startSlide() {
    this.isSliding = true;
    this.slideTimer = QM.GAME.SLIDE_DURATION;
    this.player.setTexture('player_slide');
    this.player.body.setSize(44, 22);
    this.player.body.setOffset(0, 14);
    this.sparkAt(this.player.x, this.player.y, 0x10b981, 8);
  }

  endSlide() {
    this.isSliding = false;
    this.player.setTexture('player');
    this.player.body.setSize(28, 44);
    this.player.body.setOffset(0, 0);
  }

  // ═════════════════════════════════════════════════════════════
  // IN-WORLD EDUCATIONAL 3-LANE CHOICE GATES
  // ═════════════════════════════════════════════════════════════
  spawnEducationalChoiceGate() {
    if (!this.questionQueue || this.questionQueue.length === 0) {
      // Re-populate if queue runs out
      const prof = Store.getProfile();
      this.questionQueue = getQuestionsForStage(this.worldId, this.stageIdx, prof?.grade || 8, prof?.subject || 'science');
    }
    if (!this.questionQueue || this.questionQueue.length === 0) return;

    this.currentQuestion = this.questionQueue.shift();
    this.showCleanGameplayQuestion(this.currentQuestion);
  }

  showCleanGameplayQuestion(q) {
    this.isPaused = true;
    const modal = $('#question-popup');
    if (!modal) return;

    // Ensure exactly 4 options for clean child-friendly quiz
    let opts = [...(q.opts || [])];
    if (opts.length === 3) {
      opts.push('None of the above');
    } else if (opts.length === 2) {
      opts.push('Both A and B', 'Neither of these');
    }
    opts = opts.slice(0, 4);

    const progressPct = Math.round(((this.gatesPassed) / Math.max(1, this.targetGates)) * 100);
    const subObj = QM.SUBJECTS.find(s => s.themeId === this.worldId) || QM.SUBJECTS[0];
    const subjectName = `${subObj.emoji} ${subObj.name} — Level ${this.stageIdx}`;

    modal.innerHTML = `
      <div class="clean-quiz-overlay">
        <div class="clean-quiz-card">
          <!-- 1. Selected Subject & Rewards -->
          <div class="clean-quiz-header">
            <div class="clean-quiz-subject font-game">
              ${subjectName}
            </div>
            <div class="clean-quiz-reward">
              ⭐ +${QM.XP_CORRECT_GATE} XP · ${this.score} pts
            </div>
          </div>

          <!-- 2. Progress -->
          <div style="display:flex;justify-content:space-between;font-size:0.85rem;font-weight:800;color:var(--text-dim);margin-bottom:6px;">
            <span>Challenge Progress</span>
            <span>Question ${this.gatesPassed + 1} of ${this.targetGates}</span>
          </div>
          <div class="clean-quiz-progress-bar">
            <div class="clean-quiz-progress-fill" style="width:${progressPct}%;"></div>
          </div>

          <!-- 3. Question -->
          <div class="clean-quiz-question">
            ${q.q || q.prompt}
          </div>

          <!-- 4. Four Answer Options -->
          <div class="clean-quiz-options">
            ${opts.map((opt, i) => `
              <button class="clean-quiz-btn" data-clean-opt="${i}">
                <span class="clean-quiz-opt-tag">${['A','B','C','D'][i]}</span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>

          <div id="clean-quiz-feedback" style="margin-top:16px;display:none;"></div>
        </div>
      </div>
    `;
    modal.classList.add('visible');

    // Click handler for 4 options
    modal.querySelectorAll('[data-clean-opt]').forEach(btn => {
      btn.onclick = () => {
        const chosen = parseInt(btn.getAttribute('data-clean-opt'));
        const isCorrect = chosen === q.ans;
        const fb = modal.querySelector('#clean-quiz-feedback');

        modal.querySelectorAll('.clean-quiz-btn').forEach((b, idx) => {
          b.disabled = true;
          if (idx === q.ans) b.classList.add('correct');
          else if (idx === chosen) b.classList.add('wrong');
        });

        fb.style.display = 'block';
        if (isCorrect) {
          this.questionsCorrect++;
          this.comboCount++;
          this.scoreMulti = Math.min(5, 1 + Math.floor(this.comboCount / 2));
          const awardXP = QM.XP_CORRECT_GATE;
          this.score += 200 * this.scoreMulti;
          Store.addXP(awardXP);
          Store.recordQuestionAnswered(q.id, true, q.competency);

          fb.innerHTML = `
            <div style="padding:14px;background:rgba(16,185,129,0.15);border:1px solid #10b981;border-radius:12px;color:#6ee7b7;font-weight:800;margin-bottom:12px;">
              🎉 Excellent! That is correct! +${awardXP} XP ⭐
            </div>
            <button class="btn btn-primary btn-lg" style="width:100%;padding:14px;" id="clean-resume-btn">
              ▶️ Continue Adventure!
            </button>
          `;
          if (window.Toast) Toast.show(`🌟 Correct! +${awardXP} XP`, 'success');
        } else {
          this.comboCount = 0;
          this.scoreMulti = 1;
          Store.recordQuestionAnswered(q.id, false, q.competency);

          fb.innerHTML = `
            <div style="padding:14px;background:rgba(239,68,68,0.15);border:1px solid #ef4444;border-radius:12px;color:#fca5a5;font-weight:700;margin-bottom:12px;">
              💡 <strong>Nova's Tip:</strong> ${q.explain || q.hint || 'Review the concept to master it next time!'}
            </div>
            <button class="btn btn-secondary btn-lg" style="width:100%;padding:14px;" id="clean-resume-btn">
              ▶️ Continue Adventure
            </button>
          `;
        }

        const resBtn = fb.querySelector('#clean-resume-btn');
        if (resBtn) {
          resBtn.onclick = () => {
            modal.classList.remove('visible');
            modal.innerHTML = '';
            this.isPaused = false;
            this.gatesPassed++;
            this.nextGateDistance = this.distance + (QM.GAME.GATE_INTERVAL + 700);

            if (this.gatesPassed >= this.targetGates) {
              this.triggerStageComplete();
            }
          };
        }
      };
    });
  }

  hitChoiceGate(player, gate) {
    if (gate.hitProcessed) return;
    gate.hitProcessed = true;

    const isCorrect = gate.isCorrect;
    const q = gate.questionData;

    // Remove all gates from group
    this.choiceGates.getChildren().forEach(g => {
      this.tweens.add({ targets: g, alpha: 0, duration: 250, onComplete: () => g.destroy() });
    });
    this.choiceGates.clear(true);
    this.gatesActive = false;
    this.billboardContainer.setVisible(false);

    this.gatesPassed++;
    this.nextGateDistance = this.distance + (QM.GAME.GATE_INTERVAL + Math.random() * 800);

    // Record question in store
    Store.recordQuestionAnswered(q.id, isCorrect, q.competency);

    if (isCorrect) {
      // ── CORRECT ANSWER ───────────────────────────────────────
      this.questionsCorrect++;
      this.comboCount++;
      this.scoreMulti = Math.min(5, 1 + Math.floor(this.comboCount / 2));
      const awardXP = QM.XP_CORRECT_GATE;
      const awardScore = 200 * this.scoreMulti;
      this.score += awardScore;
      Store.addXP(awardXP);

      this.sparkAt(player.x, player.y, 0x10b981, 24);
      this.showFloatingText(player.x, player.y - 50, `✨ CORRECT! +${awardXP} XP ×${this.scoreMulti}`, '#10b981');

      if (window.Toast) Toast.show(`🌟 Brilliant! Mastered: ${q.explain}`, 'success', 3200);
    } else {
      // ── INCORRECT / LEARNING OPPORTUNITY ─────────────────────
      this.comboCount = 0;
      this.scoreMulti = 1;
      this.sparkAt(player.x, player.y, 0xef4444, 16);
      this.cameras.main.shake(180, 0.008);

      // Display in-world helpful explanation modal
      this.showInWorldExplanation(q);
    }
  }

  showInWorldExplanation(q) {
    this.isPaused = true;
    const modal = $('#question-popup');
    if (!modal) return;

    modal.innerHTML = `
      <div class="learning-modal glass-strong">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <span style="font-size:2rem;">💡</span>
          <div>
            <div style="font-family:'Orbitron',monospace;font-size:0.8rem;color:var(--accent);font-weight:700;">LEARNING MOMENT</div>
            <div style="font-size:1.1rem;font-weight:800;">Let's Learn From This!</div>
          </div>
        </div>
        <div style="font-size:0.95rem;color:var(--text);margin-bottom:10px;">
          <strong>Challenge:</strong> ${q.q}
        </div>
        <div style="padding:12px 14px;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.4);border-radius:10px;margin-bottom:14px;">
          <div style="color:var(--success);font-weight:800;font-size:0.9rem;margin-bottom:4px;">
            ✅ Correct Answer: Lane ${['A','B','C'][q.ans]} (${q.opts[q.ans]})
          </div>
          <div style="font-size:0.85rem;color:var(--text);line-height:1.4;">
            ${q.explain}
          </div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-secondary" id="btn-goto-revision">📖 Review Targeted Revision</button>
          <button class="btn btn-primary" id="btn-continue-run">▶️ Continue Adventure</button>
        </div>
      </div>
    `;
    modal.classList.add('visible');

    const btnRevision = modal.querySelector('#btn-goto-revision');
    if (btnRevision) {
      btnRevision.onclick = () => {
        modal.classList.remove('visible');
        this.isPaused = false;
        if (typeof GameManager !== 'undefined') GameManager.exitToMap();
        if (typeof ScreenManager !== 'undefined') {
          ScreenManager.showScreen(QM.SCREENS.ADAPTIVE_REVISION, {
            topicId: q.topicId || Store.getActiveTopicId(),
            subtopicId: q.subtopicId,
          });
        }
      };
    }

    const btn = modal.querySelector('#btn-continue-run');
    if (btn) {
      btn.onclick = () => {
        modal.classList.remove('visible');
        this.isPaused = false;
        // Re-queue question variation later so student achieves success!
        this.nextGateDistance = this.distance + 700;
      };
    }
  }

  showQuestionBillboard(q) {
    const W = this.scale.width;
    this.billboardContainer.removeAll(true);

    // Background pill
    const bg = this.add.graphics();
    bg.fillStyle(0x0a0f1d, 0.92);
    bg.fillRoundedRect(-W * 0.38, -32, W * 0.76, 64, 16);
    bg.lineStyle(2, 0x06b6d4, 0.9);
    bg.strokeRoundedRect(-W * 0.38, -32, W * 0.76, 64, 16);
    this.billboardContainer.add(bg);

    // Icon & Question text
    const txt = this.add.text(0, 0, `🎯 ${q.q}`, {
      fontFamily: 'Nunito, sans-serif',
      fontSize: '18px',
      fontStyle: '800',
      color: '#ffffff',
      align: 'center',
      wordWrap: { width: W * 0.7 },
    }).setOrigin(0.5);
    this.billboardContainer.add(txt);

    this.billboardContainer.setVisible(true).setAlpha(0);
    this.tweens.add({ targets: this.billboardContainer, alpha: 1, duration: 300 });

    // Show in HTML HUD hint button
    const hintBtn = $('#btn-hint');
    if (hintBtn) {
      hintBtn.style.display = 'inline-flex';
      hintBtn.onclick = () => {
        if (window.Toast) Toast.show(`💡 Hint: ${q.hint}`, 'warning', 4000);
      };
    }
  }

  createQuestionBillboard() {
    // Container ready
  }

  // ═════════════════════════════════════════════════════════════
  // SPAWNING: OBSTACLES & GEMS
  // ═════════════════════════════════════════════════════════════
  spawnObstacle() {
    const types = ['obstacle_crate', 'obstacle_laser', 'obstacle_rock', 'obstacle_spike'];
    const type = types[Math.floor(Math.random() * types.length)];
    const lane = Math.floor(Math.random() * 3);
    const W = this.scale.width;

    const obs = this.obstacles.create(W + 50, this.laneY[lane], type);
    obs.setVelocityX(-this.speed);
    obs.body.setAllowGravity(false);
    obs.setDepth(6);
    obs.setTint(this.theme.obstacleColor || 0xef4444);

    if (type === 'obstacle_laser') {
      obs.obstacleType = 'high'; // slide under
    } else {
      obs.obstacleType = 'low';  // jump over
    }
  }

  spawnGem() {
    const keys = ['gem_blue', 'gem_gold', 'gem_purple', 'gem_green'];
    const key = keys[Math.floor(Math.random() * keys.length)];
    const lane = Math.floor(Math.random() * 3);
    const W = this.scale.width;

    const gem = this.gems.create(W + 40, this.laneY[lane] - 14, key);
    gem.setVelocityX(-this.speed);
    gem.body.setAllowGravity(false);
    gem.setDepth(5);
    gem.gemValue = key === 'gem_gold' ? 20 : 10;

    // Bobbing tween
    this.tweens.add({
      targets: gem,
      y: gem.y - 12,
      duration: 600,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });
  }

  spawnPowerup() {
    const types = ['powerup_shield', 'powerup_magnet', 'powerup_boost'];
    const key = types[Math.floor(Math.random() * types.length)];
    const lane = Math.floor(Math.random() * 3);
    const W = this.scale.width;

    const pu = this.powerups.create(W + 40, this.laneY[lane] - 16, key);
    pu.setVelocityX(-this.speed);
    pu.body.setAllowGravity(false);
    pu.setDepth(6);
    pu.powerupKey = key;

    this.tweens.add({ targets: pu, angle: 360, duration: 1800, repeat: -1 });
  }

  // ═════════════════════════════════════════════════════════════
  // COLLISIONS
  // ═════════════════════════════════════════════════════════════
  hitObstacle(player, obs) {
    if (this.invincible) return;

    // Slide bypass check for high obstacle (laser)
    if (obs.obstacleType === 'high' && this.isSliding) return;

    // Jump bypass check for low obstacle
    if (obs.obstacleType === 'low' && this.isJumping) return;

    obs.destroy();

    // Shield protection
    if (this.shieldActive) {
      this.shieldActive = false;
      this.sparkAt(player.x, player.y, 0x06b6d4, 16);
      this.showFloatingText(player.x, player.y - 40, '🛡️ SHIELD BROKEN', '#06b6d4');
      return;
    }

    this.lives--;
    this.comboCount = 0;
    this.scoreMulti = 1;

    if (this.lives <= 0) {
      this.triggerGameOver();
      return;
    }

    // Hurt feedback
    this.invincible = true;
    this.invincibleTimer = 1800;
    this.cameras.main.shake(250, 0.012);
    this.cameras.main.flash(180, 239, 68, 68, true);
    this.sparkAt(player.x, player.y, 0xef4444, 18);
  }

  collectGem(player, gem) {
    const val = (gem.gemValue || 10) * this.scoreMulti;
    this.score += val;
    this.sparkAt(gem.x, gem.y, 0xf59e0b, 10);
    this.showFloatingText(gem.x, gem.y - 20, `+${val}`, '#fbbf24');
    gem.destroy();
  }

  collectPowerup(player, pu) {
    const key = pu.powerupKey;
    pu.destroy();
    this.sparkAt(player.x, player.y, 0xffffff, 16);

    if (key === 'powerup_shield') {
      this.shieldActive = true;
      this.showFloatingText(player.x, player.y - 40, '🛡️ SHIELD ACTIVE!', '#06b6d4');
    } else if (key === 'powerup_magnet') {
      this.magnetActive = true;
      this.showFloatingText(player.x, player.y - 40, '⚡ MAGNET ON!', '#f59e0b');
      this.time.delayedCall(6000, () => { this.magnetActive = false; });
    } else if (key === 'powerup_boost') {
      this.speed *= 1.35;
      this.showFloatingText(player.x, player.y - 40, '🔥 SPEED BOOST!', '#10b981');
      this.time.delayedCall(3500, () => { this.speed = Math.max(QM.GAME.SPEED_BASE, this.speed / 1.35); });
    }
  }

  // ═════════════════════════════════════════════════════════════
  // STAGE COMPLETE & GAME OVER
  // ═════════════════════════════════════════════════════════════
  triggerStageComplete() {
    this.isStageComplete = true;

    // Calculate Stars
    const accuracy = this.targetGates > 0 ? (this.questionsCorrect / this.targetGates) * 100 : 100;
    let earnedStars = 1;
    if (accuracy >= 80 && this.lives >= 2) earnedStars = 3;
    else if (accuracy >= 50) earnedStars = 2;

    const stageXP = QM.XP_STAGE_CLEAR + (earnedStars === 3 ? QM.XP_PERFECT_BONUS : 0);
    Store.addXP(stageXP);
    Store.addStars(earnedStars);

    // Save stage record
    Store.recordStageResult({
      themeId: this.worldId,
      stageId: this.stageIdx,
      score: Math.round(accuracy),
      stars: earnedStars,
      qCorrect: this.questionsCorrect,
      qTotal: this.targetGates,
    });

    if (window.launchConfetti) launchConfetti(60);

    const overlay = $('#end-overlay');
    if (overlay) {
      let starsHtml = '';
      for (let s = 1; s <= 3; s++) starsHtml += `<span class="end-star">${s <= earnedStars ? '⭐' : '☆'}</span>`;

      overlay.innerHTML = `
        <div class="end-card glass-strong">
          <div style="font-size:3rem;margin-bottom:4px;">🏆</div>
          <div class="end-title font-game" style="color:var(--accent);">STAGE CLEARED!</div>
          <div style="font-size:1.1rem;font-weight:800;color:var(--text);margin-bottom:8px;">${this.stage.name}</div>
          <div class="end-stars">${starsHtml}</div>
          <div class="end-stats">
            <div class="end-stat-box">
              <div class="end-stat-num">${this.score}</div>
              <div class="end-stat-lbl">FINAL SCORE</div>
            </div>
            <div class="end-stat-box">
              <div class="end-stat-num">+${stageXP}</div>
              <div class="end-stat-lbl">XP EARNED</div>
            </div>
            <div class="end-stat-box">
              <div class="end-stat-num">${this.questionsCorrect}/${this.targetGates}</div>
              <div class="end-stat-lbl">LEARNING GATES</div>
            </div>
          </div>
          <div style="display:flex;gap:10px;margin-top:16px;justify-content:center;flex-wrap:wrap;">
            <button class="btn btn-primary btn-lg" id="end-btn-exam">📝 Final Assessment</button>
            <button class="btn btn-secondary btn-lg" id="end-btn-room">🏫 Learning Room</button>
            <button class="btn btn-ghost btn-lg" id="end-btn-replay">🔄 Replay</button>
            <button class="btn btn-ghost btn-lg" id="end-btn-map">🗺️ Level Map</button>
          </div>
        </div>
      `;
      overlay.classList.add('visible');

      const btnExam = overlay.querySelector('#end-btn-exam');
      if (btnExam) {
        btnExam.onclick = () => {
          overlay.classList.remove('visible');
          GameManager.exitToMap();
          ScreenManager.showScreen(QM.SCREENS.FINAL_ASSESSMENT, { topicId: Store.getActiveTopicId() });
        };
      }

      const btnRoom = overlay.querySelector('#end-btn-room');
      if (btnRoom) {
        btnRoom.onclick = () => {
          overlay.classList.remove('visible');
          GameManager.exitToMap();
          ScreenManager.showScreen(QM.SCREENS.CONCEPT_ROOM, { topicId: Store.getActiveTopicId() });
        };
      }

      const btnReplay = overlay.querySelector('#end-btn-replay');
      if (btnReplay) btnReplay.onclick = () => GameManager.launch(this.worldId, this.stageIdx);

      const btnMap = overlay.querySelector('#end-btn-map');
      if (btnMap) btnMap.onclick = () => { overlay.classList.remove('visible'); GameManager.exitToMap(); };

    }
  }

  triggerGameOver() {
    this.isGameOver = true;
    const overlay = $('#end-overlay');
    if (!overlay) return;

    overlay.innerHTML = `
      <div class="end-card glass-strong">
        <div style="font-size:3rem;margin-bottom:4px;">⚡</div>
        <div class="end-title font-game" style="color:var(--danger);">MISSION INCOMPLETE</div>
        <div style="font-size:0.95rem;color:var(--text-dim);margin-bottom:12px;">You learned a lot on this run! Keep trying, champ!</div>
        <div class="end-stats">
          <div class="end-stat-box">
            <div class="end-stat-num">${this.score}</div>
            <div class="end-stat-lbl">DISTANCE SCORE</div>
          </div>
          <div class="end-stat-box">
            <div class="end-stat-num">${this.questionsCorrect}</div>
            <div class="end-stat-lbl">GATES SOLVED</div>
          </div>
        </div>
        <div style="display:flex;gap:12px;margin-top:16px;justify-content:center;">
          <button class="btn btn-primary btn-lg" id="go-btn-restart">🔄 Try Again</button>
          <button class="btn btn-ghost btn-lg" id="go-btn-map">🗺️ Level Map</button>
        </div>
      </div>
    `;
    overlay.classList.add('visible');

    overlay.querySelector('#go-btn-restart').onclick = () => GameManager.launch(this.worldId, this.stageIdx);
    overlay.querySelector('#go-btn-map').onclick = () => { overlay.classList.remove('visible'); GameManager.exitToMap(); };
  }

  // ═════════════════════════════════════════════════════════════
  // GRAPHICS & RENDERING HELPERS
  // ═════════════════════════════════════════════════════════════
  drawTrack(scrollOffset = 0) {
    const W = this.scale.width;
    const H = this.scale.height;
    const g = this.trackGraphics;
    g.clear();

    const topY = this.laneY[0] - 65;
    const botY = this.laneY[2] + 65;
    const trackH = botY - topY;

    // Track surface
    g.fillStyle(this.theme.groundColor || 0x0f172a, 0.95);
    g.fillRect(0, topY, W, trackH);

    // Glowing track top and bottom edge rails
    g.lineStyle(4, this.theme.laneLineColor || 0x06b6d4, 1);
    g.beginPath();
    g.moveTo(0, topY); g.lineTo(W, topY);
    g.moveTo(0, botY); g.lineTo(W, botY);
    g.strokePath();

    // Dotted Lane divider lines (between lane 0-1 and 1-2)
    const lineY1 = (this.laneY[0] + this.laneY[1]) / 2;
    const lineY2 = (this.laneY[1] + this.laneY[2]) / 2;
    const offset = -(scrollOffset % 60);

    g.lineStyle(2, 0xffffff, 0.25);
    for (let x = offset; x < W + 60; x += 60) {
      g.beginPath();
      g.moveTo(x, lineY1); g.lineTo(x + 35, lineY1);
      g.moveTo(x, lineY2); g.lineTo(x + 35, lineY2);
      g.strokePath();
    }
  }

  drawParallaxStars() {
    const g = this.bgStars;
    g.clear();
    const W = this.scale.width;
    const H = this.scale.height;

    for (let i = 0; i < 90; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const r = Math.random() * 2 + 0.5;
      const alpha = Math.random() * 0.7 + 0.3;
      g.fillStyle(0xffffff, alpha);
      g.fillCircle(x, y, r);
    }
  }

  setupTouchControls() {
    let startX = 0;
    let startY = 0;

    this.input.on('pointerdown', ptr => {
      startX = ptr.x;
      startY = ptr.y;
    });

    this.input.on('pointerup', ptr => {
      const dx = ptr.x - startX;
      const dy = ptr.y - startY;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      if (Math.max(absDx, absDy) < 25) return; // Tap threshold

      if (absDx > absDy) {
        // Horizontal swipe
        if (dx < -30 && this.currentLane > 0) this.switchLane(-1);
        else if (dx > 30 && this.currentLane < 2) this.switchLane(1);
      } else {
        // Vertical swipe
        if (dy < -30 && !this.isJumping) this.jump();
        else if (dy > 30 && !this.isSliding) this.startSlide();
      }
    });
  }

  updateDOMHUD() {
    const scoreEl = $('#hud-score');
    if (scoreEl) scoreEl.textContent = `SCORE: ${this.score}`;

    const distEl = $('#hud-distance');
    if (distEl) distEl.textContent = `${Math.floor(this.distance / 10)}m / ${Math.floor(this.targetDistance / 10)}m`;

    const livesEl = $('#hud-lives');
    if (livesEl) {
      let hearts = '';
      for (let i = 0; i < 3; i++) hearts += i < this.lives ? '❤️' : '🖤';
      livesEl.textContent = hearts;
    }
  }

  sparkAt(x, y, tint = 0xffffff, count = 12) {
    for (let i = 0; i < count; i++) {
      const p = this.add.circle(x, y, Phaser.Math.Between(3, 6), tint).setDepth(15);
      const angle = Math.random() * Math.PI * 2;
      const speed = Phaser.Math.Between(40, 160);
      this.tweens.add({
        targets: p,
        x: x + Math.cos(angle) * speed,
        y: y + Math.sin(angle) * speed,
        alpha: 0,
        scale: 0.1,
        duration: 400,
        onComplete: () => p.destroy(),
      });
    }
  }

  showFloatingText(x, y, msg, color = '#ffffff') {
    const txt = this.add.text(x, y, msg, {
      fontFamily: 'Orbitron, sans-serif',
      fontSize: '20px',
      fontStyle: 'bold',
      color: color,
      stroke: '#000000',
      strokeThickness: 3,
    }).setOrigin(0.5).setDepth(25);

    this.tweens.add({
      targets: txt,
      y: y - 45,
      alpha: 0,
      duration: 900,
      ease: 'Power1',
      onComplete: () => txt.destroy(),
    });
  }

  cleanupOffscreen() {
    this.obstacles.getChildren().forEach(o => { if (o.x < -80) o.destroy(); });
    this.gems.getChildren().forEach(g => { if (g.x < -80) g.destroy(); });
    this.powerups.getChildren().forEach(p => { if (p.x < -80) p.destroy(); });
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    const overlay = $('#pause-overlay');
    if (overlay) overlay.classList.toggle('visible', this.isPaused);
  }
}

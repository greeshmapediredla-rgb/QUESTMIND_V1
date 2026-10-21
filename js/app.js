/* ═══════════════════════════════════════════════════════════════
   QUESTMIND / SKILLVERSE — Main Application Orchestrator
   Complete 15-Screen Pedagogical Learning Adventure Architecture
   AI-Assisted Concept Learning Room • Visual Simulations • Video Lessons
   Interleaved Runner Game • Adaptive Revision • Final Assessments
═══════════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  /* ── 1. Initialize DOM Skeleton with all 15 Screen Containers ── */
  function initDOM() {
    const root = $('#app-root');
    root.innerHTML = `
      <div id="screen-landing"          class="screen"></div>
      <div id="screen-login"            class="screen"></div>
      <div id="screen-onboarding"       class="screen"></div>
      <div id="screen-dashboard"        class="screen"></div>
      <div id="screen-subjects"         class="screen"></div>
      <div id="screen-concept-map"      class="screen"></div>
      <div id="screen-search"           class="screen"></div>
      <div id="screen-concept-room"     class="screen"></div>
      <div id="screen-animated-video"   class="screen"></div>
      <div id="screen-worldmap"         class="screen"></div>
      <div id="screen-passport"         class="screen"></div>
      <div id="screen-teacher"          class="screen"></div>
      <div id="screen-game"             class="screen" style="padding:0;overflow:hidden;">
        <div id="game-container"></div>
        <div id="game-hud">
          <div class="hud-btns">
            <button class="btn btn-ghost btn-sm" id="btn-pause">⏸️ Pause</button>
            <button class="btn btn-ghost btn-sm" id="btn-map">🗺️ Level Map</button>
            <button class="btn btn-accent btn-sm" id="btn-hint" style="display:none;">💡 Hint</button>
          </div>
          <div class="hud-score" id="hud-score">SCORE: 0</div>
          <div class="hud-dist" id="hud-distance" style="font-family:'Orbitron',monospace;font-size:0.85rem;color:var(--text-dim);margin:0 12px;">0m</div>
          <div class="hud-lives" id="hud-lives">❤️❤️❤️</div>
        </div>

        <!-- On-Screen Accessible Mobile / Touch Controls -->
        <div id="game-touch-controls">
          <button class="touch-btn" id="touch-left" title="Move Left / Up Lane">◀</button>
          <div class="touch-col">
            <button class="touch-btn" id="touch-jump" title="Jump">▲ JUMP</button>
            <button class="touch-btn" id="touch-slide" title="Slide">▼ SLIDE</button>
          </div>
          <button class="touch-btn" id="touch-right" title="Move Right / Down Lane">▶</button>
        </div>

        <!-- In-Game Pause Overlay -->
        <div id="pause-overlay">
          <div class="pause-title font-game">PAUSED</div>
          <div style="font-size:0.95rem;color:var(--text-dim);margin-bottom:14px;">Take a breather, champ! Ready when you are.</div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
            <button class="btn btn-primary btn-lg" id="pause-resume">▶️ Resume</button>
            <button class="btn btn-ghost btn-lg" id="pause-restart">🔄 Restart</button>
            <button class="btn btn-ghost btn-lg" id="pause-exit-map">🗺️ Exit to Map</button>
          </div>
        </div>

        <!-- In-Game End of Stage Overlay -->
        <div id="end-overlay"></div>

        <!-- In-Game Learning & Checkpoint Explanation Modal -->
        <div id="question-popup"></div>
      </div>
      <div id="screen-quiz-checkpoint"  class="screen"></div>
      <div id="screen-adaptive-revision"class="screen"></div>
      <div id="screen-final-assessment" class="screen"></div>
      <div id="screen-achievements"     class="screen"></div>
      <div id="screen-progress"         class="screen"></div>
      <div id="screen-settings"         class="screen"></div>
      <!-- Legacy portal & map support -->
      <div id="screen-portal"           class="screen"></div>
      <div id="screen-map"              class="screen"></div>
    `;

    // Inject confetti launcher if not already defined
    if (!window.launchConfetti) {
      window.launchConfetti = function(count = 80) {
        const canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;
        canvas.style.display = 'block';
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const pieces = Array.from({ length: count }, () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          r: Math.random() * 6 + 4,
          d: Math.random() * count,
          color: `hsl(${Math.random()*360},80%,60%)`,
          tilt: Math.random() * 10 - 10,
          tiltAngle: 0,
          tiltAngleInc: (Math.random() * 0.07 + 0.05),
        }));
        let angle = 0;
        let frame;
        function draw() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          angle += 0.01;
          pieces.forEach(p => {
            p.tiltAngle += p.tiltAngleInc;
            p.y += (Math.cos(angle + p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(angle);
            p.tilt = Math.sin(p.tiltAngle) * 15;
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
            ctx.stroke();
          });
          if (pieces.some(p => p.y < canvas.height + 20)) {
            frame = requestAnimationFrame(draw);
          } else {
            canvas.style.display = 'none';
          }
        }
        draw();
        setTimeout(() => { cancelAnimationFrame(frame); canvas.style.display='none'; }, 4000);
      };
    }
  }

  /* ── 2. Register Screens with ScreenManager ── */
  function registerScreens() {
    ScreenManager.register(QM.SCREENS.LANDING,           $('#screen-landing'));
    ScreenManager.register(QM.SCREENS.LOGIN,             $('#screen-login'));
    ScreenManager.register('onboarding',                 $('#screen-onboarding'));
    ScreenManager.register(QM.SCREENS.DASHBOARD,         $('#screen-dashboard'));
    ScreenManager.register(QM.SCREENS.SUBJECTS,          $('#screen-subjects'));
    ScreenManager.register(QM.SCREENS.CONCEPT_MAP,       $('#screen-concept-map'));
    ScreenManager.register(QM.SCREENS.SEARCH,            $('#screen-search'));
    ScreenManager.register(QM.SCREENS.CONCEPT_ROOM,      $('#screen-concept-room'));
    ScreenManager.register(QM.SCREENS.ANIMATED_VIDEO,    $('#screen-animated-video'));
    ScreenManager.register('worldmap',                   $('#screen-worldmap'));
    ScreenManager.register('passport',                   $('#screen-passport'));
    ScreenManager.register('teacher',                    $('#screen-teacher'));
    ScreenManager.register(QM.SCREENS.GAME,              $('#screen-game'));
    ScreenManager.register(QM.SCREENS.QUIZ_CHECKPOINT,   $('#screen-quiz-checkpoint'));
    ScreenManager.register(QM.SCREENS.ADAPTIVE_REVISION, $('#screen-adaptive-revision'));
    ScreenManager.register(QM.SCREENS.FINAL_ASSESSMENT,  $('#screen-final-assessment'));
    ScreenManager.register(QM.SCREENS.ACHIEVEMENTS,      $('#screen-achievements'));
    ScreenManager.register(QM.SCREENS.PROGRESS,          $('#screen-progress'));
    ScreenManager.register(QM.SCREENS.SETTINGS,          $('#screen-settings'));
    // Map & Portal legacy
    ScreenManager.register('portal',                     $('#screen-portal'));
    ScreenManager.register('map',                        $('#screen-map'));
  }

  /* ── 3. Persistent Header Navigation Setup ── */
  function setupHeaderNav() {
    const header = $('#app-header');
    if (!header) return;

    // Brand logo returns to Dashboard if logged in, else Landing
    $('#nav-brand-btn').onclick = () => {
      ScreenManager.showScreen(Store.isLoggedIn() ? QM.SCREENS.DASHBOARD : QM.SCREENS.LANDING);
    };

    // Nav links
    $$('.nav-link').forEach(link => {
      link.onclick = () => {
        const target = link.getAttribute('data-screen');
        if (target) ScreenManager.showScreen(target);
      };
    });

    // Profile & Settings -> passport/settings
    $('#header-profile-btn').onclick = () => {
      ScreenManager.showScreen('passport');
    };
  }

  function updateHeaderState(currentScreen) {
    const header = $('#app-header');
    if (!header) return;

    // Hide header during fullscreen gameplay
    if (currentScreen === QM.SCREENS.GAME) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }

    // Update active nav link
    $$('.nav-link').forEach(link => {
      if (link.getAttribute('data-screen') === currentScreen) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update user XP only — no streak/demo mode
    const p = Store.getProfile();
    if (p) {
      const xpPill = $('#header-xp-pill');
      if (xpPill) xpPill.textContent = `⭐ ${p.xp} XP · Lvl ${p.level}`;

      // Hide streak and demo pills always
      const streakPill = $('#header-streak-pill');
      if (streakPill) streakPill.style.display = 'none';

      const demoPill = $('#header-demo-pill');
      if (demoPill) demoPill.style.display = 'none';
    }
  }

  /* ══════════════════════════════════════════════════════════════
     SCREEN 1: LANDING PAGE — simple clean portal entry
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.LANDING] = function() {
    ScreenManager.showScreen(QM.SCREENS.LOGIN);
  };

  /* ══════════════════════════════════════════════════════════════
     SCREEN 2: CLEAN & SIMPLE LOGIN PORTAL
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.LOGIN] = function() {
    const root = $('#screen-login');
    root.innerHTML = '';

    const prof = Store.getProfile();

    const card = el('div', { class: 'qm-login-card' });
    card.innerHTML = `
      <div class="login-logo-container" style="text-align:center;margin-bottom:20px;">
        <img src="assets/logo.svg" alt="QuestMind: Gaming & Strategy" class="questmind-login-logo-img" />
      </div>

      <h2 class="login-headline">Welcome Back, Cadet! 🚀</h2>
      <p class="login-subtext">Level up your science, math, and coding skills through gamified missions.</p>

      <div style="display:flex;flex-direction:column;gap:18px;text-align:left;">
        <!-- 1. Name Entry -->
        <div class="form-group">
          <label style="display:block;font-weight:800;font-size:0.92rem;margin-bottom:8px;color:var(--text);">
            👤 Your Name
          </label>
          <input type="text" class="qm-input" id="inp-student-name" placeholder="Enter your hero name…" maxlength="24" value="${prof?.name && prof.name !== 'Adventurer' ? prof.name : 'Maya'}" />
        </div>

        <!-- 2. Select Grade -->
        <div class="form-group">
          <label style="display:block;font-weight:800;font-size:0.92rem;margin-bottom:8px;color:var(--text);">
            🎓 Select Grade
          </label>
          <select class="qm-select" id="inp-student-grade">
            ${QM.GRADES.map(g => `<option value="${g.grade}" ${g.grade === (prof?.grade || 6) ? 'selected' : ''}>${g.label}</option>`).join('')}
          </select>
        </div>

        <!-- 3. Select Curriculum -->
        <div class="form-group">
          <label style="display:block;font-weight:800;font-size:0.92rem;margin-bottom:8px;color:var(--text);">
            📚 Select Curriculum
          </label>
          <select class="qm-select" id="inp-student-curriculum">
            ${QM.CURRICULUMS.map(c => `<option value="${c.id}" ${c.id === (prof?.curriculum || 'cbse') ? 'selected' : ''}>${c.name}</option>`).join('')}
          </select>
        </div>

        <!-- Submit Button -->
        <div style="margin-top:12px;">
          <button class="btn btn-primary btn-lg" id="btn-login-submit" style="width:100%;font-size:1.1rem;padding:15px;">
            🚀 Enter Learning Dashboard
          </button>
        </div>
      </div>
    `;

    root.appendChild(card);

    $('#btn-login-submit').onclick = () => {
      const name = $('#inp-student-name').value.trim() || 'Cadet';
      const grade = parseInt($('#inp-student-grade').value) || 6;
      const curriculum = $('#inp-student-curriculum').value || 'cbse';

      Store.login(name, grade, curriculum, 'cosmic');
      ScreenManager.showScreen(QM.SCREENS.DASHBOARD);
    };
  };

  /* ══════════════════════════════════════════════════════════════
     SCREEN 3: CLEAN & SIMPLE STUDENT DASHBOARD
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.DASHBOARD] = function() {
    const root = $('#screen-dashboard');
    root.innerHTML = '';
    createStarBackground(root, 25);

    const stats = Store.getDashboardStats();
    if (!stats) { ScreenManager.showScreen(QM.SCREENS.LOGIN); return; }

    const activeTopic = CURRICULUM[Store.getActiveTopicId()] || CURRICULUM.sci_photosynthesis;

    const wrap = el('div', { class: 'screen-content', style: 'max-width:980px;margin:0 auto;padding:24px 20px;' });
    wrap.innerHTML = `
      <!-- Simple Clean Welcome Header -->
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;margin-bottom:24px;">
        <div>
          <div style="font-size:0.9rem;font-weight:800;color:var(--secondary);text-transform:uppercase;letter-spacing:0.5px;">
            Grade ${stats.grade} · ${QM.CURRICULUMS.find(c => c.id === stats.curriculum)?.name || 'General'}
          </div>
          <h1 class="font-game" style="font-size:clamp(1.8rem,4vw,2.4rem);margin-top:4px;">
            Hello, <span style="color:var(--accent);">${stats.name}</span>! 👋
          </h1>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="level-badge-pill" style="font-size:0.95rem;padding:8px 16px;">
            ⭐ Level ${stats.level} · ${stats.xp} XP
          </div>
          <button class="btn btn-ghost btn-sm" id="dash-btn-logout">Switch Profile</button>
        </div>
      </div>

      <!-- SKILLVERSE Featured Game Banner -->
      <div id="skillverse-dashboard-banner" class="skillverse-banner-card">
        <span class="skillverse-badge">✨ Featured Game</span>
        <div class="skillverse-banner-info">
          <h2>🎮 SKILLVERSE</h2>
          <p>Learn it. Then run it! Pick any topic, master the concept with animated lessons, then jump into the runner adventure game to test your skills!</p>
        </div>
        <a id="btn-play-skillverse-dashboard" href="https://fancy-caramel-6fde06.netlify.app" target="_blank" rel="noopener noreferrer" class="skillverse-play-btn">
          ▶ Play SKILLVERSE
        </a>
      </div>

      <!-- Quick Search Bar -->
      <div style="margin-bottom:28px;">
        <div class="dash-search-container" style="max-width:100%;">
          <span class="dash-search-icon">🔍</span>
          <input type="text" class="dash-search-input" id="dash-search-input" placeholder="Search concepts (e.g. Photosynthesis, Perimeter, Newton, Gravity…)" />
        </div>
      </div>

      <!-- Subjects & Levels Section -->
      <div style="margin-bottom:18px;">
        <h2 class="font-game" style="font-size:1.5rem;margin-bottom:6px;">📚 Choose Subject & Level</h2>
        <p style="color:var(--text-dim);font-weight:700;font-size:0.95rem;margin-bottom:16px;">
          Select a subject to play exciting levels and master new concepts:
        </p>
      </div>

      <div class="subjects-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">
        ${QM.SUBJECTS.map(s => {
          const currentLevel = Store.getSubjectLevel(s.id);
          const levelName = currentLevel === 1 ? 'Beginner' : (currentLevel === 2 ? 'Explorer' : (currentLevel === 3 ? 'Master' : 'Grandmaster'));
          return `
            <div class="subject-card glass" style="padding:22px;border-radius:20px;border:1.5px solid rgba(255,255,255,0.12);transition:transform 0.2s;" data-subject="${s.id}">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
                <span style="font-size:2.4rem;">${s.emoji}</span>
                <span class="level-badge-pill">Level ${currentLevel}: ${levelName}</span>
              </div>
              <h3 class="font-game" style="font-size:1.3rem;margin-bottom:6px;color:var(--text);">${s.name}</h3>
              <p style="font-size:0.88rem;color:var(--text-dim);line-height:1.45;margin-bottom:18px;">${s.desc}</p>
              
              <div style="margin-top:14px;">
                <button class="btn btn-primary btn-sm" style="width:100%;padding:10px 16px;font-size:0.92rem;" data-action="learn" data-subject="${s.id}">
                  📖 Study (12 Topics)
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    root.appendChild(wrap);

    // Search event
    const searchInput = wrap.querySelector('#dash-search-input');
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const val = searchInput.value.trim();
        if (val) ScreenManager.showScreen(QM.SCREENS.SEARCH, { query: val });
      }
    });

    // Subject buttons
    wrap.querySelectorAll('[data-action]').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const action = btn.getAttribute('data-action');
        const subId = btn.getAttribute('data-subject');
        const subObj = QM.SUBJECTS.find(s => s.id === subId) || QM.SUBJECTS[0];

        if (action === 'play') {
          const level = Store.getSubjectLevel(subId);
          GameManager.launch(subObj.themeId || 'space', level);
          ScreenManager.showScreen(QM.SCREENS.GAME);
        } else if (action === 'learn') {
          Store.setActiveTopicId(subObj.featuredTopicId || 'sci_photosynthesis');
          ScreenManager.showScreen(QM.SCREENS.CONCEPT_ROOM, { topicId: subObj.featuredTopicId || 'sci_photosynthesis' });
        }
      };
    });

    $('#dash-btn-logout').onclick = () => {
      ScreenManager.showScreen(QM.SCREENS.LOGIN);
    };
  };

  /* ══════════════════════════════════════════════════════════════
     SCREEN 4: SUBJECT SELECTION
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.SUBJECTS] = function() {
    const root = $('#screen-subjects');
    root.innerHTML = '';
    createStarBackground(root, 25);

    const wrap = el('div', { class: 'screen-content', style: 'max-width:1080px;margin:0 auto;padding:24px 20px;' });
    wrap.innerHTML = `
      <div style="margin-bottom:24px;">
        <button class="btn btn-ghost btn-sm" id="subjects-back">Back to Dashboard</button>
        <h1 class="font-game" style="font-size:2.2rem;margin-top:10px;">📚 Subjects & Curriculum</h1>
        <div style="color:var(--text-dim);font-weight:700;font-size:0.95rem;">
          Select any subject below to study visual concepts, explore curriculum topics, and challenge yourself with game quizzes:
        </div>
      </div>

      <div class="subjects-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:22px;">
        ${QM.SUBJECTS.map(s => {
          const topics = (typeof CurriculumEngine !== 'undefined') ? CurriculumEngine.getTopicsBySubject(s.id) : [];
          return `
            <div class="subject-card glass" style="padding:24px;border-radius:20px;border:1.5px solid rgba(255,255,255,0.12);display:flex;flex-direction:column;justify-content:space-between;transition:transform 0.2s;" data-subject="${s.id}">
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                  <span style="font-size:2.8rem;">${s.emoji}</span>
                  <span class="level-badge-pill" style="font-size:0.75rem;padding:5px 12px;background:rgba(56,189,248,0.15);color:#38bdf8;border:1px solid rgba(56,189,248,0.3);">
                    ${topics.length || 12} Subtopics
                  </span>
                </div>
                <h2 class="font-game" style="font-size:1.45rem;margin-bottom:4px;color:#fff;">${s.name}</h2>
                <div style="font-size:0.78rem;font-weight:800;color:var(--secondary);margin-bottom:10px;text-transform:uppercase;letter-spacing:0.5px;">
                  ${s.badge} • NCERT / CBSE / SSC
                </div>
                <p style="font-size:0.88rem;color:var(--text-dim);line-height:1.45;margin-bottom:20px;">${s.desc}</p>
              </div>

              <div>
                <button class="btn btn-primary" style="width:100%;font-size:1rem;padding:12px 18px;letter-spacing:0.5px;" data-study-subject="${s.id}">
                  📖 Study Subject
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    root.appendChild(wrap);

    $('#subjects-back').onclick = () => ScreenManager.showScreen(QM.SCREENS.DASHBOARD);

    wrap.querySelectorAll('[data-study-subject]').forEach(btn => {
      btn.onclick = () => {
        const subId = btn.getAttribute('data-study-subject');
        ScreenManager.showScreen(QM.SCREENS.CONCEPT_MAP, { subjectId: subId });
      };
    });
  };

  /* ═══════════════════════════════════════════════════════════════
     SCREEN 5: CONCEPT MAP & SUBTOPIC BROWSER
  ═══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.CONCEPT_MAP] = function(data) {
    const root = $('#screen-concept-map');
    root.innerHTML = '';
    createStarBackground(root, 30);

    const subId = data?.subjectId || 'science';
    const subject = QM.SUBJECTS.find(s => s.id === subId) || QM.SUBJECTS[0];
    const topics = (typeof CurriculumEngine !== 'undefined') ? CurriculumEngine.getTopicsBySubject(subId) : [];

    const profile = Store.getProfile();
    const studentGrade = profile?.grade || 6;

    const wrap = el('div', { class: 'screen-content', style: 'max-width:1120px;margin:0 auto;padding:24px 20px;' });
    wrap.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px;margin-bottom:24px;">
        <div>
          <button class="btn btn-ghost btn-sm" id="map-back">Back to Subjects</button>
          <h1 class="font-game" style="font-size:2.2rem;margin-top:8px;">${subject.emoji} ${subject.name} Subtopics</h1>
          <div style="color:var(--text-dim);font-weight:700;font-size:0.95rem;">
            ${topics.length} NCERT / CBSE / SSC Curriculum Concepts • Adapted for Class ${studentGrade}
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${QM.SUBJECTS.map(s => `
            <button class="btn btn-ghost btn-sm ${s.id === subId ? 'active' : ''}" style="${s.id === subId ? 'border-color:#38bdf8;background:rgba(56,189,248,0.2);' : ''}" data-sub-switch="${s.id}">
              ${s.emoji} ${s.name}
            </button>
          `).join('')}
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:20px;">
        ${topics.map((t, index) => {
          const mastery = Store.getTopicMastery ? Store.getTopicMastery(t.id) : null;
          const pct = mastery?.overallMastery || 0;
          return `
            <div class="glass concept-step-item" style="padding:22px;border-radius:18px;border:1.5px solid rgba(255,255,255,0.1);cursor:pointer;" data-topic-card="${t.id}">
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                  <span style="font-size:2.4rem;">${t.icon || '📖'}</span>
                  <span class="badge" style="background:rgba(16,185,129,0.15);color:#6ee7b7;padding:4px 10px;border-radius:999px;font-weight:800;font-size:0.75rem;">
                    Topic ${index + 1}
                  </span>
                </div>
                <h3 class="font-game" style="font-size:1.25rem;margin-bottom:6px;color:#fff;">${t.title}</h3>
                <div style="font-size:0.75rem;font-weight:800;color:var(--secondary);margin-bottom:8px;">
                  ${t.curriculumBoard || 'NCERT / CBSE Aligned'}
                </div>
                <p style="font-size:0.86rem;color:var(--text-dim);line-height:1.45;margin-bottom:16px;">
                  ${(t.introduction?.definition || '').slice(0, 115)}...
                </p>
              </div>

              <div>
                <div style="display:flex;justify-content:space-between;font-size:0.75rem;font-weight:800;margin-bottom:4px;">
                  <span>Mastery Progress</span>
                  <span style="color:var(--secondary);">${pct}%</span>
                </div>
                <div class="progress-bar" style="margin-bottom:14px;"><div class="progress-fill" style="width:${pct}%;"></div></div>
                <button class="btn btn-primary btn-sm" style="width:100%;padding:10px;" data-topic-btn="${t.id}">
                  📖 Study Concept
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    root.appendChild(wrap);

    $('#map-back').onclick = () => ScreenManager.showScreen(QM.SCREENS.SUBJECTS);
    wrap.querySelectorAll('[data-sub-switch]').forEach(btn => {
      btn.onclick = () => {
        const nextSub = btn.getAttribute('data-sub-switch');
        ScreenManager.showScreen(QM.SCREENS.CONCEPT_MAP, { subjectId: nextSub });
      };
    });

    wrap.querySelectorAll('[data-topic-card], [data-topic-btn]').forEach(elem => {
      elem.onclick = (e) => {
        e.stopPropagation();
        const tid = elem.getAttribute('data-topic-card') || elem.getAttribute('data-topic-btn');
        Store.setActiveTopicId(tid);
        ScreenManager.showScreen(QM.SCREENS.CONCEPT_ROOM, { topicId: tid });
      };
    });
  };

  /* ═══════════════════════════════════════════════════════════════
     SCREEN 6: SEARCH
  ═══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.SEARCH] = function(data) {
    const root = $('#screen-search');
    root.innerHTML = '';
    createStarBackground(root, 30);

    const query = data?.query || '';
    const results = CurriculumEngine.search(query);

    const wrap = el('div', { class: 'screen-content' });
    wrap.innerHTML = `
      <div style="margin-bottom:24px;">
        <button class="btn btn-ghost btn-sm" id="search-back">← Back to Dashboard</button>
        <h1 class="font-game" style="font-size:2rem;margin-top:8px;">
          Search Results: <span style="color:var(--secondary);">"${query}"</span>
        </h1>
        <div style="color:var(--text-dim);font-weight:700;">
          Found ${results.length} concept${results.length === 1 ? '' : 's'} matching your query in the curriculum library
        </div>
      </div>

      <div class="dash-search-container" style="max-width:680px;">
        <span class="dash-search-icon">🔍</span>
        <input type="text" class="dash-search-input" id="search-page-input" value="${query}" placeholder="Search topics (e.g. Photosynthesis, Perimeter, Water Cycle…)" />
      </div>

      ${results.length > 0 ? `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px;margin-top:20px;">
          ${results.map(t => `
            <div class="glass" style="padding:24px;border-radius:var(--radius-lg);cursor:pointer;" data-search-card="${t.id}">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-size:2.2rem;">${t.icon}</span>
                <span style="font-size:0.75rem;padding:3px 10px;border-radius:999px;background:rgba(255,255,255,0.06);font-weight:800;">
                  ${t.subjectName}
                </span>
              </div>
              <h3 class="font-game" style="font-size:1.2rem;margin-bottom:6px;">${t.title}</h3>
              <p style="font-size:0.85rem;color:var(--text-dim);line-height:1.45;margin-bottom:16px;">
                ${t.introduction?.definition?.slice(0, 130)}…
              </p>
              <button class="btn btn-primary btn-sm" style="width:100%;">Open Concept Learning Room →</button>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="glass" style="padding:40px;text-align:center;border-radius:var(--radius-lg);margin-top:20px;">
          <div style="font-size:3rem;margin-bottom:12px;">🤖</div>
          <h3 class="font-game" style="font-size:1.4rem;margin-bottom:8px;">Custom Topic: "${query}"</h3>
          <p style="color:var(--text-dim);max-width:520px;margin:0 auto 20px;">
            This specific topic is not currently bundled in the pre-cached core library.
            Would you like Nova AI to generate a custom visual lesson and question set?
          </p>
          <button class="btn btn-primary btn-lg" id="btn-generate-ai">✨ Generate with AI Tutor</button>
        </div>
      `}
    `;

    root.appendChild(wrap);

    $('#search-back').onclick = () => ScreenManager.showScreen(QM.SCREENS.DASHBOARD);

    const sInp = wrap.querySelector('#search-page-input');
    sInp.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        ScreenManager.showScreen(QM.SCREENS.SEARCH, { query: sInp.value.trim() });
      }
    });

    wrap.querySelectorAll('[data-search-card]').forEach(c => {
      c.onclick = () => {
        const tid = c.getAttribute('data-search-card');
        Store.setActiveTopicId(tid);
        ScreenManager.showScreen(QM.SCREENS.CONCEPT_ROOM, { topicId: tid });
      };
    });

    const genBtn = wrap.querySelector('#btn-generate-ai');
    if (genBtn) {
      genBtn.onclick = async () => {
        genBtn.textContent = 'Generating Lesson… ⏳';
        genBtn.disabled = true;
        try {
          const res = await fetch('/api/generate-lesson', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic: query, grade: Store.getProfile()?.grade || 8 }),
          });
          const data = await res.json();
          if (data && data.success) {
            Toast.show(`✨ AI Lesson generated for "${query}"!`, 'success');
            // Route to Photosynthesis as reference template with custom AI title
            Store.setActiveTopicId('sci_photosynthesis');
            ScreenManager.showScreen(QM.SCREENS.CONCEPT_ROOM, { topicId: 'sci_photosynthesis' });
          } else {
            Toast.show('AI service busy; loaded best-matching curriculum lesson instead.', 'warning');
            ScreenManager.showScreen(QM.SCREENS.CONCEPT_ROOM, { topicId: 'sci_photosynthesis' });
          }
        } catch (e) {
          Toast.show('Loaded matching curriculum topic.', 'warning');
          ScreenManager.showScreen(QM.SCREENS.CONCEPT_ROOM, { topicId: 'sci_photosynthesis' });
        }
      };
    }
  };

  /* ══════════════════════════════════════════════════════════════
     SCREEN 7: AI-POWERED CONCEPT LEARNING ROOM (CORE HUB)
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.CONCEPT_ROOM] = function(data) {
    const root = $('#screen-concept-room');
    root.innerHTML = '';
    createStarBackground(root, 30);

    const topicId = data?.topicId || Store.getActiveTopicId() || 'sci_photosynthesis';
    Store.setActiveTopicId(topicId);
    const topic = CURRICULUM[topicId] || CURRICULUM.sci_photosynthesis;

    const profile = Store.getProfile();
    const studentGrade = profile?.grade || 6;

    // Determine Grade-Depth Profile
    let depthKey = 'middle';
    let depthLabel = `Class ${studentGrade} Mode (Middle School Depth)`;
    let depthClass = 'middle';

    if (studentGrade <= 5) {
      depthKey = 'primary';
      depthLabel = `Class ${studentGrade} Mode (Easy, Child-Friendly & Visual)`;
      depthClass = 'primary';
    } else if (studentGrade >= 9) {
      depthKey = 'secondary';
      depthLabel = `Class ${studentGrade} Mode (Advanced & Analytical)`;
      depthClass = 'secondary';
    }

    const depthData = (topic.gradeDepths && topic.gradeDepths[depthKey]) || topic.gradeDepths?.middle || {};

    const wrap = el('div', { class: 'screen-content', style: 'max-width:1040px;margin:0 auto;padding:24px 20px;' });
    wrap.innerHTML = `
      <!-- Top Navigation & Grade Depth Pill -->
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <button class="btn btn-ghost btn-sm" id="room-back-btn">⬅ Back to Subtopics</button>
          <span class="badge" style="background:rgba(124,58,237,0.25);color:#c4b5fd;font-weight:800;padding:6px 14px;border-radius:999px;">
            ${topic.subjectName}
          </span>
          <span class="badge" style="background:rgba(245,158,11,0.2);color:#fbbf24;font-weight:800;padding:6px 14px;border-radius:999px;">
            ${topic.curriculumBoard || 'NCERT / CBSE / SSC'}
          </span>
        </div>

        <div>
          <span class="grade-depth-pill ${depthClass}">
            🎓 ${depthLabel}
          </span>
        </div>
      </div>

      <!-- Main Topic Header Card -->
      <div class="concept-visual-card">
        <h1 class="concept-title-main font-game" style="font-size:clamp(1.8rem, 4vw, 2.5rem);margin-bottom:12px;color:#fff;">
          ${topic.icon || '📖'} ${topic.title}
        </h1>

        <!-- Hook & Analogy in clean, precise child-friendly cards -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin-top:16px;">
          <div style="background:rgba(255,255,255,0.04);border-radius:14px;padding:16px;border-left:4px solid var(--secondary);">
            <div style="font-size:0.8rem;font-weight:800;color:var(--secondary);text-transform:uppercase;margin-bottom:4px;">
              🌟 Real-World Hook
            </div>
            <div style="font-size:0.95rem;color:var(--text);line-height:1.45;">
              ${topic.introduction?.hook || 'Discover how this concept powers the world!'}
            </div>
          </div>

          <div style="background:rgba(255,255,255,0.04);border-radius:14px;padding:16px;border-left:4px solid var(--accent);">
            <div style="font-size:0.8rem;font-weight:800;color:var(--accent);text-transform:uppercase;margin-bottom:4px;">
              🎨 Easy Visual Analogy
            </div>
            <div style="font-size:0.95rem;color:var(--text);line-height:1.45;">
              ${depthData.analogy || topic.introduction?.realLifeAnalogy || 'Think of it as a helpful everyday pattern!'}
            </div>
          </div>
        </div>

        <!-- Grade-Adapted Explanation & Rule -->
        <div style="margin-top:18px;padding:18px;border-radius:14px;background:rgba(124,58,237,0.12);border:1.5px solid rgba(124,58,237,0.3);">
          <div style="font-size:0.82rem;font-weight:800;color:#c4b5fd;text-transform:uppercase;margin-bottom:6px;">
            💡 Concept Explanation (Adapted for Class ${studentGrade})
          </div>
          <div style="font-size:1.02rem;color:#fff;line-height:1.55;margin-bottom:10px;">
            ${depthData.explanation || topic.introduction?.definition || ''}
          </div>
          <div style="display:inline-block;padding:6px 14px;border-radius:8px;background:rgba(52,211,153,0.15);border:1px solid #10b981;font-size:0.9rem;font-weight:800;color:#6ee7b7;">
            ⚡ Key Rule: ${depthData.keyRule || topic.introduction?.formula || 'Core Principle'}
          </div>
        </div>
      </div>

      <!-- Visual Interactive Model or Simulation Section -->
      <div id="concept-visual-mount" style="margin-bottom:24px;"></div>

      <!-- 3 Bite-Sized Visual Step Cards -->
      <div style="margin-bottom:12px;">
        <h2 class="font-game" style="font-size:1.4rem;color:#fff;margin-bottom:6px;">⚡ Step-by-Step Learning Guide</h2>
        <div style="font-size:0.9rem;color:var(--text-dim);font-weight:600;">Three clear visual steps to master this topic:</div>
      </div>

      <div class="concept-steps-container">
        ${(topic.stepLessons || []).map(step => `
          <div class="concept-step-item">
            <div>
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
                <div class="step-num-badge" style="width:32px;height:32px;border-radius:999px;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:0.9rem;">
                  ${step.step}
                </div>
                <div>
                  <div style="font-weight:900;font-size:1.05rem;color:#fff;">${step.title}</div>
                  <div style="font-size:0.75rem;color:var(--text-dim);">${step.subtitle}</div>
                </div>
              </div>
              <div style="font-size:0.92rem;color:var(--text);line-height:1.5;margin-bottom:14px;">
                ${step.content}
              </div>
            </div>
            <div style="padding:8px 12px;border-radius:10px;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.25);font-size:0.82rem;color:#6ee7b7;font-weight:700;">
              ✨ Takeaway: ${step.takeaway}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- ═══════════════════════════════════════════════════════════
           END OF CONCEPT: "PLAY LEVEL" CTA BUTTON CARD
      ═══════════════════════════════════════════════════════════ -->
      <div class="play-level-cta-card" id="concept-play-level-card">
        <div style="font-size:3.2rem;margin-bottom:8px;">🏆</div>
        <h2 class="font-game" style="font-size:2rem;color:#fff;margin-bottom:8px;">Concept Completed!</h2>
        <p style="color:rgba(255,255,255,0.75);font-size:1rem;max-width:540px;margin:0 auto 24px;line-height:1.5;">
          You\'ve finished learning <strong>${topic.shortTitle}</strong>! Ready to jump into the quiz game arena, challenge yourself, and earn your score?
        </p>
        <button class="btn-play-level-cta" id="btn-trigger-play-level">
          🎮 PLAY LEVEL
        </button>
      </div>

      <!-- ═══════════════════════════════════════════════════════════
           INTERACTIVE GAME QUIZ PORTAL (MOUNTS ON SAME PAGE)
      ═══════════════════════════════════════════════════════════ -->
      <div id="concept-game-portal" style="display:none;"></div>
    `;

    root.appendChild(wrap);

    // Back button
    $('#room-back-btn').onclick = () => {
      ScreenManager.showScreen(QM.SCREENS.CONCEPT_MAP, { subjectId: topic.subjectId });
    };

    // Mount simulation if available
    const visMount = wrap.querySelector('#concept-visual-mount');
    if (topic.id === 'sci_photosynthesis' && typeof Simulations !== 'undefined' && Simulations.renderPhotosynthesis) {
      Simulations.renderPhotosynthesis(visMount);
    } else if (topic.id === 'math_perimeter' && typeof Simulations !== 'undefined' && Simulations.renderPerimeter) {
      Simulations.renderPerimeter(visMount);
    }

    // ═════════════════════════════════════════════════════════════
    // "PLAY LEVEL" BUTTON HANDLER -> OPENS GAME QUIZ PORTAL
    // ═════════════════════════════════════════════════════════════
    const playLevelBtn = wrap.querySelector('#btn-trigger-play-level');
    const playCard = wrap.querySelector('#concept-play-level-card');
    const gamePortal = wrap.querySelector('#concept-game-portal');

    playLevelBtn.onclick = () => {
      playCard.style.display = 'none';
      gamePortal.style.display = 'block';
      gamePortal.scrollIntoView({ behavior: 'smooth', block: 'start' });
      launchGameQuizPortal(gamePortal, topic);
    };
  };

  // ═══════════════════════════════════════════════════════════════
  // GAME QUIZ PORTAL & MARKS METRICS ENGINE
  // ═══════════════════════════════════════════════════════════════
  function launchGameQuizPortal(container, topic) {
    const questions = topic.finalAssessment || topic.checkpointQuestions || [];
    let currentIdx = 0;
    let score = 0;
    const totalMarks = questions.length;
    const history = [];

    function renderQuestion() {
      if (currentIdx >= questions.length) {
        renderMetricsReport();
        return;
      }

      const q = questions[currentIdx];
      const progressPct = ((currentIdx) / totalMarks) * 100;

      container.innerHTML = `
        <div class="game-quiz-portal">
          <div class="game-quiz-topbar">
            <div>
              <div style="font-family:'Chakra Petch',sans-serif;font-size:0.8rem;color:var(--secondary);font-weight:800;letter-spacing:1px;">
                🎮 GAME LEVEL QUIZ • ${topic.shortTitle.toUpperCase()}
              </div>
              <h2 class="font-game" style="font-size:1.6rem;color:#fff;margin-top:2px;">
                Question ${currentIdx + 1} of ${totalMarks}
              </h2>
            </div>
            <div style="display:flex;align-items:center;gap:12px;">
              <span class="level-badge-pill" style="font-size:0.95rem;padding:6px 14px;">
                ⭐ Marks: ${score} / ${totalMarks}
              </span>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="progress-bar" style="height:10px;margin-bottom:24px;">
            <div class="progress-fill" style="width:${progressPct}%;background:linear-gradient(90deg, #f59e0b, #10b981);"></div>
          </div>

          <!-- Question Prompt -->
          <div style="background:rgba(255,255,255,0.03);border:1.5px solid rgba(255,255,255,0.08);border-radius:18px;padding:24px;margin-bottom:20px;">
            <div style="font-size:1.2rem;font-weight:800;color:#fff;line-height:1.45;">
              ${q.q || q.prompt}
            </div>
          </div>

          <!-- Options Grid -->
          <div class="game-quiz-options-grid">
            ${(q.opts || []).map((opt, i) => `
              <button class="game-quiz-opt-btn" data-opt-idx="${i}">
                <span style="width:28px;height:28px;border-radius:8px;background:rgba(255,255,255,0.08);display:inline-flex;align-items:center;justify-content:center;font-weight:900;color:var(--secondary);">
                  ${['A','B','C','D'][i]}
                </span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>

          <!-- Feedback Banner -->
          <div id="game-quiz-feedback" style="display:none;margin-top:16px;"></div>

          <!-- Next Button -->
          <div style="display:flex;justify-content:flex-end;margin-top:20px;">
            <button class="btn btn-primary btn-lg" id="game-quiz-next-btn" style="display:none;padding:12px 28px;">
              ${currentIdx === totalMarks - 1 ? 'View Marks Metrics 🏆' : 'Next Question ➔'}
            </button>
          </div>
        </div>
      `;

      const fb = container.querySelector('#game-quiz-feedback');
      const nextBtn = container.querySelector('#game-quiz-next-btn');

      container.querySelectorAll('.game-quiz-opt-btn').forEach(btn => {
        btn.onclick = () => {
          const chosen = parseInt(btn.getAttribute('data-opt-idx'));
          const isCorrect = chosen === q.ans;

          if (isCorrect) {
            score++;
            if (typeof Sound !== 'undefined' && Sound.play) Sound.play('success');
          } else {
            if (typeof Sound !== 'undefined' && Sound.play) Sound.play('error');
          }

          history.push({ q, chosen, isCorrect });

          // Disable buttons & show classes
          container.querySelectorAll('.game-quiz-opt-btn').forEach((b, idx) => {
            b.disabled = true;
            if (idx === q.ans) b.classList.add('correct');
            else if (idx === chosen) b.classList.add('incorrect');
          });

          fb.style.display = 'block';
          fb.innerHTML = `
            <div style="padding:14px 18px;border-radius:12px;background:${isCorrect ? 'rgba(16,185,129,0.18)' : 'rgba(239,68,68,0.18)'};border:1.5px solid ${isCorrect ? '#10b981' : '#ef4444'};color:${isCorrect ? '#6ee7b7' : '#fca5a5'};font-weight:700;font-size:0.95rem;">
              ${isCorrect ? '🎉 Correct Answer!' : '❌ Not quite right.'} ${q.explain || ''}
            </div>
          `;

          nextBtn.style.display = 'inline-flex';
          nextBtn.focus();
        };
      });

      nextBtn.onclick = () => {
        currentIdx++;
        renderQuestion();
      };
    }

    // ═════════════════════════════════════════════════════════════
    // MARKS METRICS DASHBOARD EVALUATION
    // ═════════════════════════════════════════════════════════════
    function renderMetricsReport() {
      const accuracyPct = Math.round((score / totalMarks) * 100);
      const earnedXP = score * 30 + 30;

      // Add XP to store
      if (typeof Store !== 'undefined' && Store.addXP) {
        Store.addXP(earnedXP, `Level Quiz Mastered: ${topic.shortTitle}`);
      }

      // Record final assessment
      if (typeof Store !== 'undefined' && Store.recordFinalAssessment) {
        Store.recordFinalAssessment(topic.id, score, totalMarks);
      }

      if (accuracyPct >= 70 && window.launchConfetti) {
        launchConfetti(60);
      }

      let starGrade = '⭐⭐⭐ Concept Mastered!';
      let starColor = '#10b981';
      let starIcon = '🏆';

      if (accuracyPct < 50) {
        starGrade = '⭐ Keep Practicing!';
        starColor = '#f59e0b';
        starIcon = '💪';
      } else if (accuracyPct < 80) {
        starGrade = '⭐⭐ Great Effort!';
        starColor = '#38bdf8';
        starIcon = '🌟';
      }

      container.innerHTML = `
        <div class="game-metrics-dashboard">
          <div style="font-size:3.8rem;margin-bottom:8px;">${starIcon}</div>
          <h1 class="font-game" style="font-size:2.4rem;color:${starColor};margin-bottom:6px;">
            ${starGrade}
          </h1>
          <div style="font-size:1.05rem;color:var(--text-dim);font-weight:700;margin-bottom:24px;">
            ${topic.title} • Performance Evaluation
          </div>

          <!-- Metrics Cards Grid -->
          <div class="metrics-grid">
            <div class="metric-card">
              <div class="metric-value" style="color:var(--secondary);">${score} / ${totalMarks}</div>
              <div class="metric-label">Marks Scored</div>
            </div>
            <div class="metric-card">
              <div class="metric-value" style="color:var(--accent);">${accuracyPct}%</div>
              <div class="metric-label">Accuracy</div>
            </div>
            <div class="metric-card">
              <div class="metric-value" style="color:#10b981;">+${earnedXP}</div>
              <div class="metric-label">XP Gained</div>
            </div>
          </div>

          <!-- Review breakdown -->
          <div style="text-align:left;max-width:720px;margin:0 auto 28px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:20px;">
            <div style="font-family:'Chakra Petch',sans-serif;font-weight:800;font-size:0.9rem;color:var(--secondary);margin-bottom:12px;text-transform:uppercase;">
              📝 Question Review Breakdown:
            </div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              ${history.map((h, i) => `
                <div style="padding:10px 14px;border-radius:10px;background:${h.isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'};border:1px solid ${h.isCorrect ? '#10b981' : '#ef4444'};font-size:0.88rem;">
                  <div style="font-weight:800;color:#fff;">${i + 1}. ${h.q.q || h.q.prompt}</div>
                  <div style="color:${h.isCorrect ? '#6ee7b7' : '#fca5a5'};margin-top:2px;">
                    ${h.isCorrect ? '✅ Answered Correctly' : `❌ Your answer: ${h.q.opts[h.chosen]} | Correct: ${h.q.opts[h.q.ans]}`}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Navigation CTAs -->
          <div style="display:flex;justify-content:center;gap:14px;flex-wrap:wrap;">
            <button class="btn btn-secondary btn-lg" id="btn-replay-quiz">
              🔄 Replay Level Quiz
            </button>
            <button class="btn btn-primary btn-lg" id="btn-next-subtopic">
              📖 Study Another Subtopic
            </button>
            <button class="btn btn-ghost btn-lg" id="btn-return-dashboard">
              🏠 Dashboard
            </button>
          </div>
        </div>
      `;

      container.querySelector('#btn-replay-quiz').onclick = () => {
        launchGameQuizPortal(container, topic);
      };

      container.querySelector('#btn-next-subtopic').onclick = () => {
        ScreenManager.showScreen(QM.SCREENS.CONCEPT_MAP, { subjectId: topic.subjectId });
      };

      container.querySelector('#btn-return-dashboard').onclick = () => {
        ScreenManager.showScreen(QM.SCREENS.DASHBOARD);
      };
    }

    renderQuestion();
  }

  /* ═══════════════════════════════════════════════════════════════
     SCREEN 8: ANIMATED LESSON / VIDEO CINEMA VIEW
  ═══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.ANIMATED_VIDEO] = function(data) {
    const root = $('#screen-animated-video');
    root.innerHTML = '';
    createStarBackground(root, 30);

    const topicId = data?.topicId || Store.getActiveTopicId();
    const topic = CURRICULUM[topicId] || CURRICULUM.sci_photosynthesis;

    const wrap = el('div', { class: 'screen-content' });
    wrap.innerHTML = `
      <div style="margin-bottom:16px;">
        <button class="btn btn-ghost btn-sm" id="video-cinema-back">← Back to Learning Room</button>
      </div>
      <div id="cinema-video-mount"></div>
    `;

    root.appendChild(wrap);
    $('#video-cinema-back').onclick = () => ScreenManager.showScreen(QM.SCREENS.CONCEPT_ROOM, { topicId });

    VideoLessonPlayer.render(wrap.querySelector('#cinema-video-mount'), topic);
  };

  /* ══════════════════════════════════════════════════════════════
     SCREEN 9: RUNNER ADVENTURE GAME SCREEN
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.GAME] = function() {
    // HUD Actions
    const pauseBtn = $('#btn-pause');
    if (pauseBtn) pauseBtn.onclick = () => GameManager.togglePause();

    const mapBtn = $('#btn-map');
    if (mapBtn) mapBtn.onclick = () => {
      GameManager.exitToMap();
      ScreenManager.showScreen(QM.SCREENS.DASHBOARD);
    };

    const resumeBtn = $('#pause-resume');
    if (resumeBtn) resumeBtn.onclick = () => GameManager.togglePause();

    const restartBtn = $('#pause-restart');
    if (restartBtn) restartBtn.onclick = () => GameManager.restart();

    const exitBtn = $('#pause-exit-map');
    if (exitBtn) exitBtn.onclick = () => {
      GameManager.exitToMap();
      ScreenManager.showScreen(QM.SCREENS.DASHBOARD);
    };

    // Touch controls
    const btnLeft = $('#touch-left');
    const btnRight = $('#touch-right');
    const btnJump = $('#touch-jump');
    const btnSlide = $('#touch-slide');

    if (btnLeft) {
      btnLeft.onclick = () => {
        const game = window.Phaser?.GAMES?.[0];
        const scene = game?.scene?.getScene('GameScene');
        if (scene && scene.currentLane > 0) scene.switchLane(-1);
      };
    }
    if (btnRight) {
      btnRight.onclick = () => {
        const game = window.Phaser?.GAMES?.[0];
        const scene = game?.scene?.getScene('GameScene');
        if (scene && scene.currentLane < 2) scene.switchLane(1);
      };
    }
    if (btnJump) {
      btnJump.onclick = () => {
        const game = window.Phaser?.GAMES?.[0];
        const scene = game?.scene?.getScene('GameScene');
        if (scene && !scene.isJumping) scene.jump();
      };
    }
    if (btnSlide) {
      btnSlide.onclick = () => {
        const game = window.Phaser?.GAMES?.[0];
        const scene = game?.scene?.getScene('GameScene');
        if (scene && !scene.isSliding) scene.startSlide();
      };
    }
  };

  /* ══════════════════════════════════════════════════════════════
     SCREEN 10: QUIZ CHECKPOINTS (IN-ADVENTURE MODAL)
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.QUIZ_CHECKPOINT] = function(data) {
    // Handled in-game via #question-popup
  };

  /* ══════════════════════════════════════════════════════════════
     SCREEN 11: ADAPTIVE REVISION SCREEN
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.ADAPTIVE_REVISION] = function(data) {
    const root = $('#screen-adaptive-revision');
    root.innerHTML = '';
    createStarBackground(root, 30);

    const topicId = data?.topicId || Store.getActiveTopicId();
    const topic = CURRICULUM[topicId] || CURRICULUM.sci_photosynthesis;
    const subtopicId = data?.subtopicId || Object.keys(topic.adaptiveRevision || {})[0];
    const revData = topic.adaptiveRevision?.[subtopicId] || Object.values(topic.adaptiveRevision || {})[0] || {
      title: 'Reviewing Core Principles',
      friendlyAnalogy: topic.introduction?.realLifeAnalogy,
      diagramReminder: 'Remember: Inputs ➔ Transformation ➔ Outputs.',
      targetedPractice: topic.checkpointQuestions?.[0],
    };

    const wrap = el('div', { class: 'screen-content' });
    wrap.innerHTML = `
      <div style="margin-bottom:20px;">
        <button class="btn btn-ghost btn-sm" id="rev-back">← Back to Learning Room</button>
      </div>

      <div class="assessment-card">
        <div class="revision-banner">
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:2.4rem;">💡</span>
            <div>
              <div style="font-family:'Orbitron',monospace;font-size:0.8rem;color:var(--accent);font-weight:800;">
                ADAPTIVE REVISION CLINIC
              </div>
              <h2 class="font-game" style="font-size:1.6rem;margin-top:2px;">${revData.title}</h2>
              <div style="font-size:0.85rem;color:var(--text-dim);">
                Topic: ${topic.title}
              </div>
            </div>
          </div>
        </div>

        <!-- 1. Radically Simpler Analogy -->
        <div class="lesson-card" style="border-left:4px solid var(--accent);">
          <div style="font-weight:800;color:var(--accent);margin-bottom:6px;">🍕 Everyday Relatable Analogy:</div>
          <div style="font-size:0.95rem;line-height:1.55;">${revData.friendlyAnalogy}</div>
        </div>

        <!-- 2. Visual Reminder Rule -->
        <div class="lesson-callout formula" style="margin:20px 0;">
          <strong>🎯 Mental Formula / Rule:</strong><br>
          ${revData.diagramReminder}
        </div>

        <!-- 3. Targeted Practice Question -->
        ${revData.targetedPractice ? `
          <div class="assessment-question-box">
            <div style="font-family:'Orbitron',monospace;font-size:0.8rem;color:var(--secondary);font-weight:800;margin-bottom:8px;">
              TARGETED DIAGNOSTIC CHECK
            </div>
            <div style="font-size:1.05rem;font-weight:800;margin-bottom:14px;">
              ${revData.targetedPractice.q || revData.targetedPractice.prompt}
            </div>
            <div class="assessment-opts" id="rev-opts-container">
              ${(revData.targetedPractice.opts || []).map((opt, i) => `
                <button class="assessment-opt-btn" data-opt="${i}">
                  <span style="color:var(--secondary);font-weight:800;margin-right:8px;">Option ${['A','B','C'][i]}:</span> ${opt}
                </button>
              `).join('')}
            </div>
            <div id="rev-feedback-box" style="margin-top:14px;display:none;"></div>
          </div>
        ` : ''}

        <div style="display:flex;justify-content:flex-end;gap:12px;margin-top:24px;">
          <button class="btn btn-ghost" id="rev-btn-room">Back to Room</button>
          <button class="btn btn-primary btn-lg" id="rev-btn-resume-run">🏃 Resume Adventure Run</button>
        </div>
      </div>
    `;

    root.appendChild(wrap);

    $('#rev-back').onclick = () => ScreenManager.showScreen(QM.SCREENS.CONCEPT_ROOM, { topicId });
    $('#rev-btn-room').onclick = () => ScreenManager.showScreen(QM.SCREENS.CONCEPT_ROOM, { topicId });
    $('#rev-btn-resume-run').onclick = () => {
      GameManager.launch(topic.themeId || 'jungle', 1);
      ScreenManager.showScreen(QM.SCREENS.GAME);
    };

    // Practice options interaction
    if (revData.targetedPractice) {
      const fbBox = wrap.querySelector('#rev-feedback-box');
      wrap.querySelectorAll('.assessment-opt-btn').forEach(btn => {
        btn.onclick = () => {
          const chosen = parseInt(btn.getAttribute('data-opt'));
          const isCorrect = chosen === revData.targetedPractice.ans;

          wrap.querySelectorAll('.assessment-opt-btn').forEach((b, idx) => {
            b.disabled = true;
            if (idx === revData.targetedPractice.ans) b.classList.add('correct');
            else if (idx === chosen) b.classList.add('incorrect');
          });

          fbBox.style.display = 'block';
          if (isCorrect) {
            fbBox.innerHTML = `
              <div style="padding:12px;border-radius:10px;background:rgba(16,185,129,0.15);border:1px solid #10b981;color:#6ee7b7;font-weight:700;">
                🎉 Excellent! You cracked it: ${revData.targetedPractice.explain}
              </div>
            `;
            Store.recordQuestionAttempt(topicId, subtopicId, true);
            Store.addXP(40, 'Revision Mastered');
            Toast.show('🌟 Concept Revision Mastered! +40 XP', 'success');
          } else {
            fbBox.innerHTML = `
              <div style="padding:12px;border-radius:10px;background:rgba(239,68,68,0.15);border:1px solid #ef4444;color:#fca5a5;font-weight:700;">
                Not quite! Remember: ${revData.targetedPractice.explain}
              </div>
            `;
            Store.recordQuestionAttempt(topicId, subtopicId, false);
          }
        };
      });
    }
  };

  /* ══════════════════════════════════════════════════════════════
     SCREEN 12: FINAL ASSESSMENT EXAM & COMPLETION REPORT
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.FINAL_ASSESSMENT] = function(data) {
    const root = $('#screen-final-assessment');
    root.innerHTML = '';
    createStarBackground(root, 30);

    const topicId = data?.topicId || Store.getActiveTopicId();
    const topic = CURRICULUM[topicId] || CURRICULUM.sci_photosynthesis;
    const questions = topic.finalAssessment || [];

    let currentQIdx = 0;
    let score = 0;
    const answersRecord = [];

    const wrap = el('div', { class: 'screen-content' });
    root.appendChild(wrap);

    function renderQuestion() {
      if (currentQIdx >= questions.length) {
        renderCompletionReport();
        return;
      }

      const q = questions[currentQIdx];
      wrap.innerHTML = `
        <div class="assessment-card">
          <div class="assessment-topbar">
            <div>
              <div style="font-family:'Orbitron',monospace;font-size:0.8rem;color:var(--secondary);font-weight:800;">
                COMPREHENSIVE FINAL ASSESSMENT
              </div>
              <h2 class="font-game" style="font-size:1.6rem;margin-top:2px;">${topic.title}</h2>
            </div>
            <div style="display:flex;align-items:center;gap:12px;">
              <span class="header-pill font-game">Question ${currentQIdx + 1} of ${questions.length}</span>
            </div>
          </div>

          <div class="progress-bar" style="margin-bottom:24px;">
            <div class="progress-fill" style="width:${((currentQIdx) / questions.length) * 100}%;"></div>
          </div>

          <div class="assessment-question-box">
            <div style="font-size:1.15rem;font-weight:800;line-height:1.45;margin-bottom:16px;">
              ${q.q}
            </div>
            <div class="assessment-opts" id="exam-opts-container">
              ${q.opts.map((opt, i) => `
                <button class="assessment-opt-btn" data-opt="${i}">
                  <span style="color:var(--secondary);font-weight:800;margin-right:8px;">${['A','B','C','D'][i]}.</span> ${opt}
                </button>
              `).join('')}
            </div>
            <div id="exam-fb" style="margin-top:16px;display:none;"></div>
          </div>

          <div style="display:flex;justify-content:flex-end;">
            <button class="btn btn-primary" id="exam-next-btn" style="display:none;">Next Question →</button>
          </div>
        </div>
      `;

      const nextBtn = wrap.querySelector('#exam-next-btn');
      const fbEl = wrap.querySelector('#exam-fb');

      wrap.querySelectorAll('.assessment-opt-btn').forEach(btn => {
        btn.onclick = () => {
          const chosen = parseInt(btn.getAttribute('data-opt'));
          const isCorrect = chosen === q.ans;
          if (isCorrect) score++;

          answersRecord.push({ q, chosen, isCorrect });

          wrap.querySelectorAll('.assessment-opt-btn').forEach((b, idx) => {
            b.disabled = true;
            if (idx === q.ans) b.classList.add('correct');
            else if (idx === chosen) b.classList.add('incorrect');
          });

          fbEl.style.display = 'block';
          fbEl.innerHTML = `
            <div style="padding:12px;border-radius:10px;background:${isCorrect ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'};border:1px solid ${isCorrect ? '#10b981' : '#ef4444'};color:${isCorrect ? '#6ee7b7' : '#fca5a5'};font-weight:700;">
              ${isCorrect ? '✅ Correct!' : '❌ Incorrect.'} ${q.explain}
            </div>
          `;

          nextBtn.style.display = 'inline-flex';
          nextBtn.focus();
        };
      });

      nextBtn.onclick = () => {
        currentQIdx++;
        renderQuestion();
      };
    }

    function renderCompletionReport() {
      const total = questions.length;
      const pct = Math.round((score / total) * 100);
      const res = Store.recordFinalAssessment(topic.id, score, total);

      if (pct >= 70 && window.launchConfetti) launchConfetti(70);

      const nextRecommended = topic.id === 'sci_photosynthesis' ? CURRICULUM.math_perimeter : CURRICULUM.sci_water_cycle;

      wrap.innerHTML = `
        <div class="assessment-card" style="text-align:center;padding:48px 32px;">
          <div style="font-size:4rem;margin-bottom:8px;">${pct >= 80 ? '👑' : (pct >= 50 ? '🏅' : '🌱')}</div>
          <h1 class="font-game" style="font-size:2.4rem;color:${pct >= 80 ? 'var(--accent)' : '#fff'};margin-bottom:6px;">
            ${pct >= 80 ? 'CONCEPT MASTERED!' : 'ASSESSMENT COMPLETE!'}
          </h1>
          <div style="font-size:1.1rem;color:var(--text-dim);font-weight:700;margin-bottom:24px;">
            ${topic.title} · Final Diagnostic Evaluation
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;max-width:720px;margin:0 auto 28px;">
            <div class="stat-card">
              <div class="stat-number font-game" style="color:var(--secondary);font-size:2rem;">${pct}%</div>
              <div class="stat-label">Final Score (${score}/${total})</div>
            </div>
            <div class="stat-card">
              <div class="stat-number font-game" style="color:var(--accent);font-size:2rem;">+${res?.earnedXP || 150}</div>
              <div class="stat-label">XP Earned</div>
            </div>
            <div class="stat-card">
              <div class="stat-number font-game" style="color:var(--success);font-size:2rem;">${pct >= 75 ? 'Mastered' : 'Needs Practice'}</div>
              <div class="stat-label">Concept Status</div>
            </div>
          </div>

          <!-- Recommended Next Topic Card -->
          <div class="glass" style="max-width:640px;margin:0 auto 28px;padding:20px;text-align:left;border:1px solid rgba(56,189,248,0.3);border-radius:16px;">
            <div style="font-family:'Orbitron',monospace;font-size:0.75rem;color:var(--secondary);font-weight:800;margin-bottom:4px;">
              RECOMMENDED NEXT ADVENTURE
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
              <div>
                <h4 style="font-size:1.2rem;font-weight:900;">${nextRecommended.icon} ${nextRecommended.title}</h4>
                <div style="font-size:0.85rem;color:var(--text-dim);">${nextRecommended.subjectName} · ${nextRecommended.gradeRange}</div>
              </div>
              <button class="btn btn-primary" id="report-btn-next-topic">Learn Next Topic →</button>
            </div>
          </div>

          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
            <button class="btn btn-primary btn-lg" id="report-btn-dash">🏠 Student Dashboard</button>
            <button class="btn btn-secondary btn-lg" id="report-btn-retry">🔄 Replay Assessment</button>
            <button class="btn btn-ghost btn-lg" id="report-btn-badges">🏅 View Badges</button>
          </div>
        </div>
      `;

      $('#report-btn-dash').onclick = () => ScreenManager.showScreen(QM.SCREENS.DASHBOARD);
      $('#report-btn-retry').onclick = () => ScreenManager.showScreen(QM.SCREENS.FINAL_ASSESSMENT, { topicId: topic.id });
      $('#report-btn-badges').onclick = () => ScreenManager.showScreen(QM.SCREENS.ACHIEVEMENTS);
      $('#report-btn-next-topic').onclick = () => {
        Store.setActiveTopicId(nextRecommended.id);
        ScreenManager.showScreen(QM.SCREENS.CONCEPT_ROOM, { topicId: nextRecommended.id });
      };
    }

    renderQuestion();
  };

  /* ══════════════════════════════════════════════════════════════
     SCREEN 13: ACHIEVEMENTS & BADGES
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.ACHIEVEMENTS] = function() {
    const root = $('#screen-achievements');
    root.innerHTML = '';
    createStarBackground(root, 30);

    const profile = Store.getProfile();
    const unlockedBadges = profile?.badges || [];

    const wrap = el('div', { class: 'screen-content' });
    wrap.innerHTML = `
      <div style="margin-bottom:24px;">
        <button class="btn btn-ghost btn-sm" id="badge-back">← Back to Dashboard</button>
        <h1 class="font-game" style="font-size:2rem;margin-top:8px;">🏅 Badges & Honors</h1>
        <div style="color:var(--text-dim);font-weight:700;">
          Earn authentic achievements by understanding concepts, conquering game tracks, and persevering through revision!
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">
        ${QM.BADGES.map(b => {
          const isUnlocked = unlockedBadges.includes(b.id);
          return `
            <div class="glass" style="padding:24px;border-radius:var(--radius-lg);opacity:${isUnlocked ? '1' : '0.55'};border:1px solid ${isUnlocked ? 'var(--accent)' : 'rgba(255,255,255,0.08)'};">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <span style="font-size:2.6rem;">${b.icon}</span>
                <span style="font-family:'Orbitron',monospace;font-size:0.75rem;padding:4px 10px;border-radius:999px;background:${isUnlocked ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.06)'};color:${isUnlocked ? 'var(--accent)' : 'var(--text-dim)'};font-weight:800;">
                  ${isUnlocked ? '✅ UNLOCKED' : '🔒 LOCKED'}
                </span>
              </div>
              <h3 class="font-game" style="font-size:1.15rem;margin-bottom:6px;">${b.name}</h3>
              <p style="font-size:0.85rem;color:var(--text-dim);line-height:1.45;margin-bottom:14px;">${b.desc}</p>
              <div style="font-family:'Orbitron',monospace;font-size:0.85rem;font-weight:800;color:var(--secondary);">
                ⭐ +${b.xp} XP Reward
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    root.appendChild(wrap);
    $('#badge-back').onclick = () => ScreenManager.showScreen(QM.SCREENS.DASHBOARD);
  };

  /* ══════════════════════════════════════════════════════════════
     SCREEN 14: DETAILED STUDENT PROGRESS ANALYTICS
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.PROGRESS] = function() {
    const root = $('#screen-progress');
    root.innerHTML = '';
    createStarBackground(root, 30);

    const stats = Store.getDashboardStats();
    if (!stats) { ScreenManager.showScreen(QM.SCREENS.LOGIN); return; }

    const wrap = el('div', { class: 'screen-content' });
    wrap.innerHTML = `
      <div style="margin-bottom:24px;">
        <button class="btn btn-ghost btn-sm" id="prog-back">← Back to Dashboard</button>
        <h1 class="font-game" style="font-size:2rem;margin-top:8px;">📊 Learning Progress & Mastery Analytics</h1>
        <div style="color:var(--text-dim);font-weight:700;">Concept-by-concept diagnostic performance tracking:</div>
      </div>

      <!-- Overview Cards -->
      <div class="dash-stats-row">
        <div class="stat-card">
          <div class="stat-number font-game" style="color:var(--accent);">${stats.level}</div>
          <div class="stat-label">Player Level</div>
        </div>
        <div class="stat-card">
          <div class="stat-number font-game" style="color:var(--secondary);">${stats.xp}</div>
          <div class="stat-label">Total XP Points</div>
        </div>
        <div class="stat-card">
          <div class="stat-number font-game" style="color:var(--success);">${stats.streakDays} Days</div>
          <div class="stat-label">Active Streak</div>
        </div>
        <div class="stat-card">
          <div class="stat-number font-game" style="color:#c4b5fd;">~${stats.minutesSpent}m</div>
          <div class="stat-label">Time Engaged</div>
        </div>
      </div>

      <!-- Concept Mastery Matrix -->
      <div class="glass" style="padding:28px;border-radius:var(--radius-lg);margin-top:24px;">
        <h3 class="font-game" style="font-size:1.3rem;margin-bottom:16px;">🌱 Concept Subtopic Mastery Matrix</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;">
          ${Object.entries(stats.conceptMastery || {}).map(([topId, subMap]) => {
            const topObj = CURRICULUM[topId];
            return `
              <div style="padding:16px;border-radius:12px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);">
                <div style="font-weight:900;font-size:1.05rem;margin-bottom:12px;">
                  ${topObj?.icon || '📚'} ${topObj?.shortTitle || topId}
                </div>
                ${Object.entries(subMap).map(([sKey, sData]) => `
                  <div style="margin-bottom:10px;">
                    <div style="display:flex;justify-content:space-between;font-size:0.82rem;font-weight:800;margin-bottom:4px;">
                      <span>${sKey.replace(/_/g, ' ')}</span>
                      <span style="color:var(--secondary);">${sData.masteryPct}%</span>
                    </div>
                    <div class="progress-bar"><div class="progress-fill" style="width:${sData.masteryPct}%;"></div></div>
                  </div>
                `).join('')}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    root.appendChild(wrap);
    $('#prog-back').onclick = () => ScreenManager.showScreen(QM.SCREENS.DASHBOARD);
  };

  /* ══════════════════════════════════════════════════════════════
     SCREEN 15: SETTINGS & PROFILE MANAGEMENT
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers[QM.SCREENS.SETTINGS] = function() {
    const root = $('#screen-settings');
    root.innerHTML = '';
    createStarBackground(root, 30);

    const profile = Store.getProfile();

    const wrap = el('div', { class: 'screen-content', style: 'max-width:760px;' });
    wrap.innerHTML = `
      <div style="margin-bottom:24px;">
        <button class="btn btn-ghost btn-sm" id="sett-back">← Back to Dashboard</button>
        <h1 class="font-game" style="font-size:2rem;margin-top:8px;">⚙️ Profile & System Settings</h1>
      </div>

      <div class="glass" style="padding:28px;border-radius:var(--radius-lg);margin-bottom:24px;">
        <h3 style="font-size:1.2rem;font-weight:900;margin-bottom:16px;">Student Information</h3>
        <div class="form-group" style="margin-bottom:14px;">
          <label class="login-label">Student Name</label>
          <input type="text" class="qm-input" id="sett-name" value="${profile?.name || ''}" />
        </div>
        <div class="form-group" style="margin-bottom:14px;">
          <label class="login-label">Grade</label>
          <select class="qm-select" id="sett-grade">
            ${QM.GRADES.map(g => `<option value="${g.grade}" ${g.grade === profile?.grade ? 'selected' : ''}>${g.label}</option>`).join('')}
          </select>
        </div>
        <div class="form-group" style="margin-bottom:20px;">
          <label class="login-label">Curriculum</label>
          <select class="qm-select" id="sett-curriculum">
            ${QM.CURRICULUMS.map(c => `<option value="${c.id}" ${c.id === profile?.curriculum ? 'selected' : ''}>${c.name}</option>`).join('')}
          </select>
        </div>
        <button class="btn btn-primary" id="sett-save-btn">💾 Save Changes</button>
      </div>

      <div class="glass" style="padding:28px;border-radius:var(--radius-lg);margin-bottom:24px;">
        <h3 style="font-size:1.2rem;font-weight:900;margin-bottom:8px;">AI & Content Engine Status</h3>
        <p style="font-size:0.85rem;color:var(--text-dim);margin-bottom:14px;">
          Active Provider: <strong>Curriculum Library Engine & REST Socratic Server</strong>
        </p>
        <div style="padding:12px;border-radius:10px;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.3);font-size:0.85rem;color:#6ee7b7;">
          ✅ Verified offline curriculum packs are loaded for Science, Maths, CS, English, and History. Real-time Gemini/OpenAI API calls automatically connect when API keys are configured on the server.
        </div>
      </div>

      <div class="glass" style="padding:28px;border-radius:var(--radius-lg);">
        <h3 style="font-size:1.2rem;font-weight:900;margin-bottom:12px;">Data Management</h3>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn btn-ghost" id="sett-export-btn">📥 Export Progress JSON</button>
          <button class="btn btn-danger" id="sett-reset-btn">🗑️ Reset Progress Data</button>
        </div>
      </div>
    `;

    root.appendChild(wrap);

    $('#sett-back').onclick = () => ScreenManager.showScreen(QM.SCREENS.DASHBOARD);
    $('#sett-save-btn').onclick = () => {
      const name = $('#sett-name').value.trim();
      const grade = parseInt($('#sett-grade').value);
      const curriculum = $('#sett-curriculum').value;
      Store.updateProfile({ name, grade, curriculum });
      Toast.show('Profile updated successfully!', 'success');
    };
    $('#sett-export-btn').onclick = () => {
      const json = Store.exportJSON();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `questmind_progress_${Date.now()}.json`;
      a.click();
    };
    $('#sett-reset-btn').onclick = () => {
      if (confirm('Are you sure you want to reset your local learning progress?')) {
        Store.resetAllData();
        ScreenManager.showScreen(QM.SCREENS.LANDING);
        Toast.show('Progress reset.', 'warning');
      }
    };
  };

  /* ══════════════════════════════════════════════════════════════
     LEGACY MAP → redirect to worldmap
  ══════════════════════════════════════════════════════════════ */
  ScreenHandlers['map'] = function() {
    ScreenManager.showScreen(QM.SCREENS.SUBJECTS);
  };

  /* ── 4. Global Hook: Screen Transition Interceptor ── */
  const originalShowScreen = ScreenManager.showScreen;
  ScreenManager.showScreen = function(id, data = {}) {
    updateHeaderState(id);
    originalShowScreen(id, data);
    // Scroll window/screen to top
    const scr = $(`#screen-${id}`);
    if (scr) scr.scrollTop = 0;
  };

  /* ── 5. Application Startup Lifecycle ── */
  window.addEventListener('DOMContentLoaded', () => {
    initDOM();
    registerScreens();
    setupHeaderNav();
    TutorChat.init();
    if (typeof Nova !== 'undefined' && Nova.init) Nova.init();
    if (typeof Sound !== 'undefined' && Sound.init) Sound.init();

    // Nova close button
    const novaCloseBtn = document.getElementById('nova-close-btn');
    if (novaCloseBtn && typeof Nova !== 'undefined') {
      novaCloseBtn.onclick = () => Nova.hide ? Nova.hide() : document.getElementById('nova-overlay')?.classList.remove('visible');
    }

    // Initialize GamePortal and Floating Background
    if (typeof GamePortal !== 'undefined' && GamePortal.init) GamePortal.init();
    if (typeof initFloatingBackground === 'function') initFloatingBackground();

    // Default route: Show login portal as the first interface
    ScreenManager.showScreen(QM.SCREENS.LOGIN);

    // Award first-visit achievements
    if (typeof checkAchievements === 'function') checkAchievements();

    console.log('QUESTMIND AI Learning Adventure v3.5 — All systems initialized.');
  });
})();


/* ═══════════════════════════════════════════════════════════════
   EMBEDDED GAME PORTAL CONTROLLER (Same Website, Netlify Iframe)
═══════════════════════════════════════════════════════════════ */
const GamePortal = (() => {
  const NETLIFY_BASE = 'https://fancy-caramel-6fde06.netlify.app';
  let timeoutTimer = null;
  let returnScreen = QM.SCREENS.DASHBOARD;

  function init() {
    const backBtn = $('#btn-back-from-game');
    if (backBtn) {
      backBtn.onclick = () => closePortal();
    }
    const fallbackBack = $('#btn-fallback-back');
    if (fallbackBack) {
      fallbackBack.onclick = () => closePortal();
    }

    // Listen for postMessage from the game iframe if supported
    window.addEventListener('message', (event) => {
      if (event.origin && event.origin.includes('netlify.app')) {
        if (event.data && (event.data.type === 'game_complete' || event.data.score)) {
          Store.addXP(event.data.score || 50);
          Toast.show('🎉 Game Mission Completed! +50 XP', 'success');
        }
      }
    });
  }

  function open(fromScreen = QM.SCREENS.LESSON) {
    returnScreen = fromScreen;
    const portalEl = $('#screen-game-portal');
    const iframe = $('#game-portal-iframe');
    const spinner = $('#game-portal-loading');
    const fallback = $('#game-portal-fallback');
    const titleEl = $('#game-portal-topic-title');

    if (!portalEl || !iframe) return;

    // Hide app-root screens and show portal
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    portalEl.style.display = 'flex';

    spinner.style.display = 'flex';
    fallback.style.display = 'none';
    iframe.style.display = 'none';

    // Build context query params
    const profile = Store.getProfile() || { grade: 6 };
    const topic = (typeof CURRICULUM !== 'undefined' && CURRICULUM[Store.getActiveTopicId()]) || { title: 'Adventure Quest' };
    if (titleEl) titleEl.textContent = topic.title || 'SKILLVERSE Mission';

    const targetUrl = `${NETLIFY_BASE}?grade=${encodeURIComponent(profile.grade)}&topic=${encodeURIComponent(topic.title || '')}`;

    // 8-second fallback timeout
    clearTimeout(timeoutTimer);
    timeoutTimer = setTimeout(() => {
      if (iframe.style.display === 'none') {
        spinner.style.display = 'none';
        fallback.style.display = 'flex';
      }
    }, 8000);

    iframe.onload = () => {
      clearTimeout(timeoutTimer);
      spinner.style.display = 'none';
      fallback.style.display = 'none';
      iframe.style.display = 'block';
    };

    iframe.onerror = () => {
      clearTimeout(timeoutTimer);
      spinner.style.display = 'none';
      fallback.style.display = 'flex';
    };

    iframe.src = targetUrl;
  }

  function closePortal() {
    const portalEl = $('#screen-game-portal');
    const iframe = $('#game-portal-iframe');
    if (portalEl) portalEl.style.display = 'none';
    if (iframe) iframe.src = 'about:blank';
    clearTimeout(timeoutTimer);

    // Return to dashboard or lesson
    ScreenManager.showScreen(returnScreen || QM.SCREENS.DASHBOARD);
  }

  return { init, open, close: closePortal };
})();

/* ═══════════════════════════════════════════════════════════════
   LIGHT FLOATING GAMING ICONS BACKGROUND
═══════════════════════════════════════════════════════════════ */
function initFloatingBackground() {
  const container = $('#questmind-floating-bg');
  if (!container) return;

  const icons = ['🎮', '🕹️', '🎲', '🧩', '🛡️', '⚔️', '⭐', '🏆', '💖', '🪙', '🎯', '🚀'];
  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 6 : 12;

  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const iconEl = document.createElement('div');
    iconEl.className = 'qm-floating-icon';
    iconEl.textContent = icons[i % icons.length];
    iconEl.style.left = `${(i * (100 / count)) + (Math.random() * 4)}%`;
    iconEl.style.animationDuration = `${18 + Math.random() * 14}s`;
    iconEl.style.animationDelay = `${Math.random() * 10}s`;
    iconEl.style.fontSize = `${1.2 + Math.random() * 0.8}rem`;
    container.appendChild(iconEl);
  }

  // Pause when tab is hidden
  document.addEventListener('visibilitychange', () => {
    container.style.animationPlayState = document.hidden ? 'paused' : 'running';
  });
}

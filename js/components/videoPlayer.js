/* ═══════════════════════════════════════════════════════════════
   QUESTMIND / SKILLVERSE — Interactive Animated Lesson Player
   Scene Sequencer • Synchronized Captions • Play/Pause/Replay Controls
   Full Transcript • Audio Effects Integration
═══════════════════════════════════════════════════════════════ */

const VideoLessonPlayer = {
  render(container, topic) {
    if (!topic || !topic.videoLesson) {
      container.innerHTML = '<div class="glass" style="padding:24px;text-align:center;">No video lesson scenes found for this topic.</div>';
      return;
    }

    const videoData = topic.videoLesson;
    const totalDuration = videoData.durationSec || 120;
    const scenes = videoData.scenes || [];

    container.innerHTML = `
      <div class="video-player-card glass-strong">
        <!-- Top Title & Badge Bar -->
        <div class="video-topbar">
          <div>
            <div class="video-badge">🎬 INTERACTIVE VISUAL LESSON</div>
            <h3 class="video-title font-game">${videoData.title}</h3>
          </div>
          <div class="video-mode-indicator">
            <span class="pulse-indicator"></span>
            <span>Synchronized Visual Stream</span>
          </div>
        </div>

        <!-- Video Stage Viewport -->
        <div class="video-viewport" id="video-stage">
          <canvas id="video-canvas" width="800" height="420"></canvas>

          <!-- Floating Watermark / Topic Badge -->
          <div class="video-watermark font-game">${topic.shortTitle} · ${topic.subjectName}</div>

          <!-- Synchronized Live Captions Bar -->
          <div class="video-caption-bar" id="video-caption-text">
            Press Play to begin the visual lesson! 🌟
          </div>

          <!-- Large Play / Pause Center Overlay Button (when paused) -->
          <button class="video-center-btn" id="video-center-play">▶</button>
        </div>

        <!-- Timeline & Scrub Bar -->
        <div class="video-scrubber-wrap">
          <input type="range" class="video-scrubber" id="video-scrubber" min="0" max="${totalDuration}" value="0" step="0.5" />
          <div class="video-scene-markers" id="video-scene-markers"></div>
        </div>

        <!-- Controls Toolbar -->
        <div class="video-controls-toolbar">
          <div class="video-ctrl-left">
            <button class="btn btn-ghost btn-sm" id="video-btn-play">▶ Play</button>
            <button class="btn btn-ghost btn-sm" id="video-btn-replay">🔄 Replay</button>
            <div class="video-time-display font-game" id="video-timecode">0:00 / ${formatTime(totalDuration)}</div>
          </div>

          <div class="video-ctrl-right">
            <select class="qm-select" id="video-speed-select" style="padding:4px 10px;font-size:0.8rem;width:auto;">
              <option value="1" selected>1.0x Speed</option>
              <option value="1.25">1.25x Speed</option>
              <option value="1.5">1.5x Speed</option>
            </select>
            <button class="btn btn-ghost btn-sm" id="video-toggle-transcript">📜 Transcript</button>
          </div>
        </div>

        <!-- Scene Navigation Pills -->
        <div class="video-scene-pills">
          ${scenes.map((sc, idx) => `
            <button class="scene-pill ${idx === 0 ? 'active' : ''}" data-scene="${idx}" data-time="${sc.timeStart}">
              <span>Scene ${sc.id}:</span> ${sc.title.replace(/^Scene \d+: /, '')}
            </button>
          `).join('')}
        </div>

        <!-- Collapsible Full Narration Transcript -->
        <div class="video-transcript-box hidden" id="video-transcript-panel">
          <div class="transcript-header">
            <strong>Full Educational Narration Transcript</strong>
            <span style="font-size:0.75rem;color:var(--text-dim);">Click any line to jump to that timestamp</span>
          </div>
          <div class="transcript-body">
            ${scenes.map(sc => `
              <div class="transcript-row" data-time="${sc.timeStart}">
                <span class="transcript-time font-game">${formatTime(sc.timeStart)}</span>
                <div class="transcript-text">
                  <div style="font-weight:800;color:var(--secondary);font-size:0.85rem;">${sc.title}</div>
                  <div>${sc.narration}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    function formatTime(sec) {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    // Canvas & State
    const canvas = container.querySelector('#video-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let isPlaying = false;
    let currentTime = 0;
    let playbackSpeed = 1.0;
    let currentSceneIdx = 0;
    let lastTimestamp = performance.now();
    let animId;

    const btnPlay = container.querySelector('#video-btn-play');
    const btnCenter = container.querySelector('#video-center-play');
    const btnReplay = container.querySelector('#video-btn-replay');
    const scrubber = container.querySelector('#video-scrubber');
    const timecode = container.querySelector('#video-timecode');
    const captionEl = container.querySelector('#video-caption-text');
    const speedSelect = container.querySelector('#video-speed-select');
    const transcriptBtn = container.querySelector('#video-toggle-transcript');
    const transcriptPanel = container.querySelector('#video-transcript-panel');
    const scenePills = container.querySelectorAll('.scene-pill');

    function togglePlay() {
      isPlaying = !isPlaying;
      btnPlay.innerHTML = isPlaying ? '⏸️ Pause' : '▶ Play';
      btnCenter.style.display = isPlaying ? 'none' : 'flex';
      lastTimestamp = performance.now();
    }

    btnPlay.addEventListener('click', togglePlay);
    btnCenter.addEventListener('click', togglePlay);

    btnReplay.addEventListener('click', () => {
      currentTime = 0;
      scrubber.value = 0;
      if (!isPlaying) togglePlay();
    });

    speedSelect.addEventListener('change', e => {
      playbackSpeed = parseFloat(e.target.value) || 1.0;
    });

    scrubber.addEventListener('input', e => {
      currentTime = parseFloat(e.target.value);
      updateScene();
    });

    transcriptBtn.addEventListener('click', () => {
      transcriptPanel.classList.toggle('hidden');
    });

    scenePills.forEach(pill => {
      pill.addEventListener('click', () => {
        currentTime = parseFloat(pill.getAttribute('data-time'));
        scrubber.value = currentTime;
        updateScene();
        if (!isPlaying) togglePlay();
      });
    });

    container.querySelectorAll('.transcript-row').forEach(row => {
      row.addEventListener('click', () => {
        currentTime = parseFloat(row.getAttribute('data-time'));
        scrubber.value = currentTime;
        updateScene();
        if (!isPlaying) togglePlay();
      });
    });

    function updateScene() {
      const idx = scenes.findIndex(sc => currentTime >= sc.timeStart && currentTime < sc.timeEnd);
      currentSceneIdx = idx !== -1 ? idx : (currentTime >= totalDuration ? scenes.length - 1 : 0);

      scenePills.forEach((p, i) => {
        if (i === currentSceneIdx) p.classList.add('active');
        else p.classList.remove('active');
      });

      const sc = scenes[currentSceneIdx];
      if (sc && captionEl) {
        captionEl.textContent = sc.narration;
      }
    }

    // ── Animation Loop ──
    function renderVideo(now) {
      const delta = (now - lastTimestamp) / 1000;
      lastTimestamp = now;

      if (isPlaying) {
        currentTime += delta * playbackSpeed;
        if (currentTime >= totalDuration) {
          currentTime = totalDuration;
          isPlaying = false;
          btnPlay.innerHTML = '▶ Play';
          btnCenter.style.display = 'flex';
        }
        scrubber.value = currentTime;
        timecode.textContent = `${formatTime(currentTime)} / ${formatTime(totalDuration)}`;
        updateScene();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const sc = scenes[currentSceneIdx] || scenes[0];
      const progressInScene = sc ? (currentTime - sc.timeStart) / (sc.timeEnd - sc.timeStart || 1) : 0;

      // ── Render Scene Art based on Topic ──
      if (topic.id === 'sci_photosynthesis') {
        drawPhotosynthesisScene(ctx, sc?.id || 1, progressInScene, currentTime);
      } else if (topic.id === 'math_perimeter') {
        drawPerimeterScene(ctx, sc?.id || 1, progressInScene, currentTime);
      } else {
        drawGenericEducationalScene(ctx, sc, progressInScene, currentTime);
      }

      animId = requestAnimationFrame(renderVideo);
    }

    // Scene Artists
    function drawPhotosynthesisScene(c, sceneId, progress, t) {
      // Dynamic Background
      const bgGrad = c.createLinearGradient(0, 0, 0, 420);
      bgGrad.addColorStop(0, '#022c22');
      bgGrad.addColorStop(1, '#064e3b');
      c.fillStyle = bgGrad;
      c.fillRect(0, 0, 800, 420);

      if (sceneId === 1) {
        // Scene 1: Sun & Leaf Canopy
        const sunPulse = 30 + Math.sin(t * 3) * 6;
        c.fillStyle = '#fbbf24';
        c.beginPath();
        c.arc(140, 100, sunPulse, 0, Math.PI * 2);
        c.fill();

        // Rays
        c.strokeStyle = 'rgba(251, 191, 36, 0.4)';
        c.lineWidth = 4;
        for (let i = 0; i < 8; i++) {
          const ang = (i * Math.PI) / 4 + t * 0.2;
          c.beginPath();
          c.moveTo(140 + Math.cos(ang) * 45, 100 + Math.sin(ang) * 45);
          c.lineTo(140 + Math.cos(ang) * (80 + progress * 40), 100 + Math.sin(ang) * (80 + progress * 40));
          c.stroke();
        }

        // Giant Green Leaf
        c.fillStyle = '#10b981';
        c.beginPath();
        c.ellipse(500, 240, 200, 90, -0.2, 0, Math.PI * 2);
        c.fill();
        c.strokeStyle = '#34d399';
        c.lineWidth = 4;
        c.stroke();

        c.font = '800 22px Orbitron, sans-serif';
        c.fillStyle = '#ffffff';
        c.fillText('SCENE 1: THE SOLAR COLLECTOR', 360, 60);
      } else if (sceneId === 2) {
        // Scene 2: Photolysis of Water
        c.fillStyle = '#065f46';
        c.fillRect(60, 80, 680, 260);
        c.strokeStyle = '#34d399';
        c.strokeRect(60, 80, 680, 260);

        // Water droplet
        c.fillStyle = '#38bdf8';
        c.beginPath();
        c.arc(260, 210, 36, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = '#ffffff';
        c.font = '800 18px Nunito, sans-serif';
        c.fillText('H₂O', 244, 216);

        // Lightning / Photon bolt splitting water
        c.strokeStyle = '#fbbf24';
        c.lineWidth = 4;
        c.beginPath();
        c.moveTo(340, 120);
        c.lineTo(320, 180);
        c.lineTo(360, 200);
        c.lineTo(330, 260);
        c.stroke();

        // Produced Oxygen Bubbles
        c.fillStyle = '#34d399';
        c.beginPath();
        c.arc(540, 180 - progress * 40, 28, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = '#ffffff';
        c.fillText('O₂ ↑', 526, 186 - progress * 40);

        c.font = '800 22px Orbitron, sans-serif';
        c.fillText('SCENE 2: WATER SPLITTING (PHOTOLYSIS)', 160, 50);
      } else if (sceneId === 3) {
        // Scene 3: The Calvin Cycle
        c.font = '800 22px Orbitron, sans-serif';
        c.fillStyle = '#ffffff';
        c.fillText('SCENE 3: CARBON FIXATION (GLUCOSE)', 170, 50);

        // Spinning enzymatic circle
        c.strokeStyle = '#a78bfa';
        c.lineWidth = 6;
        c.setLineDash([12, 8]);
        c.beginPath();
        c.arc(400, 220, 80, 0, Math.PI * 2);
        c.stroke();
        c.setLineDash([]);

        // Hexagon Glucose
        c.fillStyle = '#f59e0b';
        c.beginPath();
        for (let i = 0; i < 6; i++) {
          const ang = (i * Math.PI) / 3;
          const hx = 620 + 35 * Math.cos(ang);
          const hy = 220 + 35 * Math.sin(ang);
          if (i === 0) c.moveTo(hx, hy);
          else c.lineTo(hx, hy);
        }
        c.closePath();
        c.fill();
        c.fillStyle = '#ffffff';
        c.font = '800 13px Nunito, sans-serif';
        c.fillText('C₆H₁₂O₆', 596, 225);
      } else {
        // Scene 4: Earth & Biosphere
        c.font = '800 22px Orbitron, sans-serif';
        c.fillStyle = '#ffffff';
        c.fillText('SCENE 4: GLOBAL OXYGEN CURRENT', 200, 50);

        c.fillStyle = '#0284c7';
        c.beginPath();
        c.arc(400, 240, 110, 0, Math.PI * 2);
        c.fill();

        // Green continents
        c.fillStyle = '#10b981';
        c.beginPath();
        c.ellipse(380, 220, 50, 70, 0.3, 0, Math.PI * 2);
        c.fill();

        // Orbiting glowing ring
        c.strokeStyle = 'rgba(52, 211, 153, 0.8)';
        c.lineWidth = 3;
        c.beginPath();
        c.ellipse(400, 240, 160, 40, -0.2, 0, Math.PI * 2);
        c.stroke();
      }
    }

    function drawPerimeterScene(c, sceneId, progress, t) {
      c.fillStyle = '#1e1035';
      c.fillRect(0, 0, 800, 420);

      c.font = '800 22px Orbitron, sans-serif';
      c.fillStyle = '#fbbf24';

      if (sceneId === 1) {
        c.fillText('SCENE 1: THE OUTER BOUNDARY', 230, 50);
        c.strokeStyle = '#f59e0b';
        c.lineWidth = 4;
        c.strokeRect(200, 120, 400, 200);

        // Walking boundary path
        c.strokeStyle = '#38bdf8';
        c.lineWidth = 6;
        const d = (progress * 1200) % 1200;
        // Draw partial border
        c.beginPath();
        c.moveTo(200, 120);
        if (d < 400) c.lineTo(200 + d, 120);
        else {
          c.lineTo(600, 120);
          if (d < 600) c.lineTo(600, 120 + (d - 400));
          else {
            c.lineTo(600, 320);
            if (d < 1000) c.lineTo(600 - (d - 600), 320);
            else {
              c.lineTo(200, 320);
              c.lineTo(200, 320 - (d - 1000));
            }
          }
        }
        c.stroke();
      } else if (sceneId === 2) {
        c.fillText('SCENE 2: THE RECTANGLE FORMULA: 2(L + W)', 120, 50);
        c.fillStyle = 'rgba(245, 158, 11, 0.15)';
        c.strokeStyle = '#f59e0b';
        c.lineWidth = 3;
        c.fillRect(220, 140, 360, 180);
        c.strokeRect(220, 140, 360, 180);

        c.font = '700 16px Nunito, sans-serif';
        c.fillStyle = '#38bdf8';
        c.fillText('Length (L) = 14m', 350, 125);
        c.fillText('Width (W) = 8m', 590, 235);
        c.fillText('P = 2 × (14 + 8) = 44m', 340, 235);
      } else {
        c.fillText('SCENE 3: CRACKING COMPOUND L-SHAPES', 150, 50);
        c.strokeStyle = '#38bdf8';
        c.lineWidth = 4;
        c.beginPath();
        c.moveTo(250, 120);
        c.lineTo(420, 120);
        c.lineTo(420, 200);
        c.lineTo(550, 200);
        c.lineTo(550, 320);
        c.lineTo(250, 320);
        c.closePath();
        c.stroke();
      }
    }

    function drawGenericEducationalScene(c, sc, progress, t) {
      c.fillStyle = '#0f172a';
      c.fillRect(0, 0, 800, 420);

      c.font = '800 22px Orbitron, sans-serif';
      c.fillStyle = '#38bdf8';
      c.fillText(sc.title, 140, 60);

      c.font = '600 16px Nunito, sans-serif';
      c.fillStyle = '#e2e8f0';
      const words = sc.narration.split(' ');
      let line = '';
      let ly = 160;
      words.forEach(w => {
        if ((line + w).length > 60) {
          c.fillText(line, 140, ly);
          line = w + ' ';
          ly += 30;
        } else {
          line += w + ' ';
        }
      });
      c.fillText(line, 140, ly);
    }

    animId = requestAnimationFrame(renderVideo);

    return () => cancelAnimationFrame(animId);
  },
};

/* ═══════════════════════════════════════════════════════════════
   QUESTMIND / SKILLVERSE — Interactive Visual Simulations
   Photosynthesis Chloroplast Engine • Perimeter Dynamic Geometry Sandbox
═══════════════════════════════════════════════════════════════ */

const Simulations = {
  // ─────────────────────────────────────────────────────────────
  // 1. PHOTOSYNTHESIS INTERACTIVE SIMULATOR
  // ─────────────────────────────────────────────────────────────
  renderPhotosynthesis(container) {
    container.innerHTML = `
      <div class="sim-wrapper">
        <div class="sim-header">
          <div>
            <h3 class="sim-title font-game">🌿 Photosynthesis Molecular Factory</h3>
            <div class="sim-subtitle">Watch solar photons, water, and CO₂ transform into glucose and oxygen in real-time!</div>
          </div>
          <div class="sim-status-chip" id="photo-reaction-rate">Reaction Rate: 78%</div>
        </div>

        <div class="sim-canvas-wrap">
          <canvas id="photo-canvas" width="800" height="400"></canvas>
          <div class="sim-overlay-legend">
            <span class="legend-dot" style="background:#fbbf24;"></span> Photons (Light)
            <span class="legend-dot" style="background:#38bdf8;"></span> Water (H₂O)
            <span class="legend-dot" style="background:#a78bfa;"></span> Carbon Dioxide (CO₂)
            <span class="legend-dot" style="background:#34d399;"></span> Oxygen (O₂)
            <span class="legend-dot" style="background:#f59e0b;"></span> Glucose (C₆H₁₂O₆)
          </div>
        </div>

        <div class="sim-controls-grid">
          <div class="sim-control-card">
            <label class="sim-ctrl-label">☀️ Sunlight Intensity: <span id="val-sun">80%</span></label>
            <input type="range" class="qm-slider" id="slider-sun" min="10" max="100" value="80" />
            <div class="sim-ctrl-hint">More light excites chlorophyll thylakoids</div>
          </div>

          <div class="sim-control-card">
            <label class="sim-ctrl-label">💧 Root Water Supply (H₂O): <span id="val-water">75%</span></label>
            <input type="range" class="qm-slider" id="slider-water" min="10" max="100" value="75" />
            <div class="sim-ctrl-hint">Splits to release oxygen & electrons</div>
          </div>

          <div class="sim-control-card">
            <label class="sim-ctrl-label">💨 Stomatal CO₂ Level: <span id="val-co2">65%</span></label>
            <input type="range" class="qm-slider" id="slider-co2" min="10" max="100" value="65" />
            <div class="sim-ctrl-hint">Enters leaves for Calvin Cycle glucose synthesis</div>
          </div>
        </div>

        <div class="sim-formula-box">
          <div class="sim-formula-title">Live Chemical Balance:</div>
          <div class="sim-formula-equation font-game">
            <span class="co2-tag">6 CO₂</span> + <span class="h2o-tag">6 H₂O</span> + <span class="sun-tag">Light Energy</span> ➔ <span class="gluc-tag">C₆H₁₂O₆ (Glucose)</span> + <span class="o2-tag">6 O₂ (Oxygen)</span>
          </div>
          <div class="sim-limiting-alert" id="photo-limiting">✅ Optimal Conditions: Reaction running at peak efficiency!</div>
        </div>
      </div>
    `;

    const canvas = container.querySelector('#photo-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let sunVal = 80;
    let waterVal = 75;
    let co2Val = 65;

    // Sliders
    const sSun = container.querySelector('#slider-sun');
    const sWater = container.querySelector('#slider-water');
    const sCo2 = container.querySelector('#slider-co2');

    sSun.addEventListener('input', e => {
      sunVal = parseInt(e.target.value);
      container.querySelector('#val-sun').textContent = sunVal + '%';
      updateReactionRate();
    });
    sWater.addEventListener('input', e => {
      waterVal = parseInt(e.target.value);
      container.querySelector('#val-water').textContent = waterVal + '%';
      updateReactionRate();
    });
    sCo2.addEventListener('input', e => {
      co2Val = parseInt(e.target.value);
      container.querySelector('#val-co2').textContent = co2Val + '%';
      updateReactionRate();
    });

    function updateReactionRate() {
      // Limiting factor principle
      const minFactor = Math.min(sunVal, waterVal, co2Val);
      const rate = Math.round((minFactor * 0.7) + ((sunVal + waterVal + co2Val) / 3 * 0.3));
      const rateEl = container.querySelector('#photo-reaction-rate');
      const limitEl = container.querySelector('#photo-limiting');

      if (rateEl) rateEl.textContent = `Reaction Rate: ${rate}%`;

      if (limitEl) {
        if (minFactor === sunVal && sunVal < 50) {
          limitEl.innerHTML = '⚠️ <strong>Limiting Factor:</strong> Low Sunlight! The light-dependent reactions are throttled.';
          limitEl.style.color = '#fbbf24';
        } else if (minFactor === waterVal && waterVal < 50) {
          limitEl.innerHTML = '⚠️ <strong>Limiting Factor:</strong> Low Water! Photolysis slows down, reducing oxygen release.';
          limitEl.style.color = '#38bdf8';
        } else if (minFactor === co2Val && co2Val < 50) {
          limitEl.innerHTML = '⚠️ <strong>Limiting Factor:</strong> Low CO₂! Calvin Cycle cannot assemble glucose.';
          limitEl.style.color = '#a78bfa';
        } else {
          limitEl.innerHTML = '✅ <strong>Optimal Conditions:</strong> All inputs balanced! High glucose yield.';
          limitEl.style.color = '#34d399';
        }
      }
    }

    // Particle simulation
    const particles = [];
    class Particle {
      constructor(type) {
        this.reset(type);
      }
      reset(type) {
        this.type = type;
        if (type === 'sun') {
          this.x = 40 + Math.random() * 320;
          this.y = -10;
          this.vx = 0.5;
          this.vy = 2 + Math.random() * 2 * (sunVal / 60);
          this.color = '#fbbf24';
          this.size = 3;
        } else if (type === 'water') {
          this.x = 200 + Math.random() * 80;
          this.y = 390;
          this.vx = (Math.random() - 0.5) * 1.5;
          this.vy = -(2 + Math.random() * 2 * (waterVal / 60));
          this.color = '#38bdf8';
          this.size = 3.5;
        } else if (type === 'co2') {
          this.x = 550 + Math.random() * 200;
          this.y = 390;
          this.vx = -(1.5 + Math.random() * 1.5);
          this.vy = -(1 + Math.random() * 1.5);
          this.color = '#a78bfa';
          this.size = 3;
        } else if (type === 'o2') {
          this.x = 320 + (Math.random() - 0.5) * 60;
          this.y = 200 + (Math.random() - 0.5) * 40;
          this.vx = (Math.random() - 0.5) * 1.5;
          this.vy = -(1.5 + Math.random() * 2);
          this.color = '#34d399';
          this.size = 4;
        } else if (type === 'glucose') {
          this.x = 520 + (Math.random() - 0.5) * 60;
          this.y = 210 + (Math.random() - 0.5) * 40;
          this.vx = 1.2 + Math.random() * 1.2;
          this.vy = (Math.random() - 0.5) * 0.8;
          this.color = '#f59e0b';
          this.size = 5;
        }
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Transformation triggers at chloroplast
        if (this.type === 'sun' && this.y > 170) {
          if (Math.random() < 0.25) this.reset('o2');
          else this.reset('sun');
        } else if (this.type === 'water' && this.y < 230) {
          if (Math.random() < 0.3) this.reset('o2');
          else this.reset('water');
        } else if (this.type === 'co2' && this.x < 500) {
          if (Math.random() < 0.3) this.reset('glucose');
          else this.reset('co2');
        } else if ((this.type === 'o2' && this.y < -10) || (this.type === 'glucose' && this.x > 810)) {
          // Re-spawn based on input rates
          const roll = Math.random();
          if (roll < 0.35) this.reset('sun');
          else if (roll < 0.7) this.reset('water');
          else this.reset('co2');
        }
      }
      draw(c) {
        c.fillStyle = this.color;
        c.beginPath();
        if (this.type === 'glucose') {
          // Hexagon for glucose
          const r = this.size;
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const hx = this.x + r * Math.cos(angle);
            const hy = this.y + r * Math.sin(angle);
            if (i === 0) c.moveTo(hx, hy);
            else c.lineTo(hx, hy);
          }
          c.closePath();
          c.fill();
        } else {
          c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          c.fill();
        }
      }
    }

    // Seed 40 particles
    for (let i = 0; i < 15; i++) particles.push(new Particle('sun'));
    for (let i = 0; i < 12; i++) particles.push(new Particle('water'));
    for (let i = 0; i < 12; i++) particles.push(new Particle('co2'));

    let animId;
    function renderLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── Draw Leaf Anatomy Background ──
      // Sky / Sun zone (Top Left)
      const sunGrad = ctx.createRadialGradient(80, 50, 10, 80, 50, 120);
      sunGrad.addColorStop(0, 'rgba(251, 191, 36, 0.4)');
      sunGrad.addColorStop(1, 'rgba(251, 191, 36, 0)');
      ctx.fillStyle = sunGrad;
      ctx.fillRect(0, 0, 300, 200);

      // Sun icon
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(80, 50, 24, 0, Math.PI * 2);
      ctx.fill();

      // Leaf Cross Section (Cutaway)
      ctx.fillStyle = 'rgba(6, 78, 59, 0.65)';
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(140, 120, 580, 200, 24);
      ctx.fill();
      ctx.stroke();

      // Chloroplast Organelle Boundary
      ctx.fillStyle = 'rgba(4, 120, 87, 0.85)';
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(430, 220, 240, 80, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Thylakoid Grana Stacks (Green disc stacks)
      ctx.fillStyle = '#059669';
      for (let stack = 0; stack < 4; stack++) {
        const sx = 270 + stack * 48;
        for (let disc = 0; disc < 5; disc++) {
          const sy = 195 + disc * 10;
          ctx.beginPath();
          ctx.ellipse(sx, sy, 18, 5, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#34d399';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Calvin Cycle Wheel in Stroma (Right side of chloroplast)
      ctx.strokeStyle = 'rgba(167, 139, 250, 0.5)';
      ctx.lineWidth = 3;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(550, 220, 42, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Stomata Pore (Bottom Right)
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(630, 316, 28, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Labels
      ctx.font = '700 13px Nunito, sans-serif';
      ctx.fillStyle = '#fef08a';
      ctx.fillText('☀️ Solar Photons', 60, 95);

      ctx.fillStyle = '#6ee7b7';
      ctx.fillText('Thylakoids (Light Reactions ➔ O₂ Released)', 220, 155);

      ctx.fillStyle = '#c4b5fd';
      ctx.fillText('Stroma (Calvin Cycle ➔ Glucose)', 480, 155);

      ctx.fillStyle = '#93c5fd';
      ctx.fillText('Root Xylem (H₂O Intake) ▲', 160, 375);

      ctx.fillStyle = '#c4b5fd';
      ctx.fillText('Stomata (CO₂ Inhale) ▲', 580, 375);

      ctx.fillStyle = '#fde68a';
      ctx.fillText('▶ Glucose (C₆H₁₂O₆) Export', 670, 215);

      // Animate and draw particles
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      animId = requestAnimationFrame(renderLoop);
    }

    renderLoop();

    // Clean up on screen departure
    return () => cancelAnimationFrame(animId);
  },

  // ─────────────────────────────────────────────────────────────
  // 2. PERIMETER & AREA DYNAMIC GEOMETRY SANDBOX
  // ─────────────────────────────────────────────────────────────
  renderPerimeter(container) {
    container.innerHTML = `
      <div class="sim-wrapper">
        <div class="sim-header">
          <div>
            <h3 class="sim-title font-game">📐 Dynamic Perimeter Boundary Tracer</h3>
            <div class="sim-subtitle">Watch the boundary walker trace every side and calculate the exact perimeter step-by-step!</div>
          </div>
          <div class="sim-status-chip" id="perim-total-chip">Perimeter P = 44 m</div>
        </div>

        <div class="sim-canvas-wrap">
          <canvas id="perim-canvas" width="800" height="400"></canvas>
          <div class="sim-trace-banner" id="trace-step-banner">
            🚶 <strong>Walking Boundary:</strong> Click "Trace Perimeter Path" below to watch step-by-step!
          </div>
        </div>

        <div class="sim-controls-grid">
          <div class="sim-control-card">
            <label class="sim-ctrl-label">Shape Template:</label>
            <select class="qm-select" id="perim-shape-select">
              <option value="rect" selected>Rectangle (Park / Soccer Pitch)</option>
              <option value="square">Square (Playground)</option>
              <option value="triangle">Equilateral Triangle</option>
              <option value="l_shape">L-Shaped Compound Courtyard</option>
            </select>
          </div>

          <div class="sim-control-card" id="ctrl-length-wrap">
            <label class="sim-ctrl-label">Length / Base: <span id="val-perim-len">14 m</span></label>
            <input type="range" class="qm-slider" id="slider-perim-len" min="6" max="24" value="14" />
          </div>

          <div class="sim-control-card" id="ctrl-width-wrap">
            <label class="sim-ctrl-label">Width / Height: <span id="val-perim-wid">8 m</span></label>
            <input type="range" class="qm-slider" id="slider-perim-wid" min="4" max="18" value="8" />
          </div>
        </div>

        <div class="sim-formula-box">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
            <div>
              <div class="sim-formula-title">Live Step-by-Step Calculation:</div>
              <div class="sim-formula-equation font-game" id="perim-calc-equation" style="font-size:1.15rem;color:var(--accent);">
                P = 2 × (14 + 8) = 2 × 22 = 44 metres
              </div>
              <div style="font-size:0.85rem;color:var(--text-dim);margin-top:4px;" id="perim-cost-calc">
                💰 Fencing Cost (@ $15 / metre) = <strong>$660</strong> | Carpet Area = <strong>112 m²</strong>
              </div>
            </div>
            <button class="btn btn-primary" id="btn-trace-perim">▶ Trace Perimeter Path</button>
          </div>
        </div>
      </div>
    `;

    const canvas = container.querySelector('#perim-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let currentShape = 'rect';
    let len = 14;
    let wid = 8;
    let traceProgress = 0; // 0 to 1
    let isTracing = false;
    let traceSpeed = 0.008;

    const shapeSelect = container.querySelector('#perim-shape-select');
    const sLen = container.querySelector('#slider-perim-len');
    const sWid = container.querySelector('#slider-perim-wid');
    const traceBtn = container.querySelector('#btn-trace-perim');

    shapeSelect.addEventListener('change', e => {
      currentShape = e.target.value;
      traceProgress = 0;
      isTracing = false;
      updateCalculations();
    });

    sLen.addEventListener('input', e => {
      len = parseInt(e.target.value);
      container.querySelector('#val-perim-len').textContent = len + ' m';
      updateCalculations();
    });

    sWid.addEventListener('input', e => {
      wid = parseInt(e.target.value);
      container.querySelector('#val-perim-wid').textContent = wid + ' m';
      updateCalculations();
    });

    traceBtn.addEventListener('click', () => {
      traceProgress = 0;
      isTracing = true;
    });

    function updateCalculations() {
      const chip = container.querySelector('#perim-total-chip');
      const eq = container.querySelector('#perim-calc-equation');
      const cost = container.querySelector('#perim-cost-calc');

      let P = 0;
      let area = 0;
      let formulaText = '';

      if (currentShape === 'rect') {
        P = 2 * (len + wid);
        area = len * wid;
        formulaText = `P = 2 × (Length + Width) = 2 × (${len} + ${wid}) = ${P} metres`;
      } else if (currentShape === 'square') {
        P = 4 * len;
        area = len * len;
        formulaText = `P = 4 × Side = 4 × ${len} = ${P} metres`;
      } else if (currentShape === 'triangle') {
        P = 3 * len;
        area = Math.round((Math.sqrt(3) / 4) * len * len);
        formulaText = `P = 3 × Side = 3 × ${len} = ${P} metres`;
      } else if (currentShape === 'l_shape') {
        P = 2 * (len + wid); // circumscribed perimeter
        area = Math.round((len * wid) - (len * 0.4 * wid * 0.5));
        formulaText = `P = Top + Right + Step + Step + Bottom + Left = ${P} metres`;
      }

      if (chip) chip.textContent = `Perimeter P = ${P} m`;
      if (eq) eq.textContent = formulaText;
      if (cost) cost.innerHTML = `💰 Fencing Cost (@ $15 / metre) = <strong>$${P * 15}</strong> | Surface Area = <strong>${area} m²</strong>`;
    }

    updateCalculations();

    let animId;
    function renderLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid background
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.lineWidth = 1;
      const gridSize = 25;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Center shape coordinates
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const scale = 14;

      const pxW = len * scale;
      const pxH = (currentShape === 'square' ? len : wid) * scale;

      let points = [];

      if (currentShape === 'rect' || currentShape === 'square') {
        points = [
          { x: cx - pxW / 2, y: cy - pxH / 2 }, // Top-Left
          { x: cx + pxW / 2, y: cy - pxH / 2 }, // Top-Right
          { x: cx + pxW / 2, y: cy + pxH / 2 }, // Bottom-Right
          { x: cx - pxW / 2, y: cy + pxH / 2 }, // Bottom-Left
        ];
      } else if (currentShape === 'triangle') {
        const h = (Math.sqrt(3) / 2) * pxW;
        points = [
          { x: cx, y: cy - (h * 2) / 3 },
          { x: cx + pxW / 2, y: cy + h / 3 },
          { x: cx - pxW / 2, y: cy + h / 3 },
        ];
      } else if (currentShape === 'l_shape') {
        const stepX = pxW * 0.45;
        const stepY = pxH * 0.55;
        points = [
          { x: cx - pxW / 2, y: cy - pxH / 2 },
          { x: cx - pxW / 2 + stepX, y: cy - pxH / 2 },
          { x: cx - pxW / 2 + stepX, y: cy - pxH / 2 + stepY },
          { x: cx + pxW / 2, y: cy - pxH / 2 + stepY },
          { x: cx + pxW / 2, y: cy + pxH / 2 },
          { x: cx - pxW / 2, y: cy + pxH / 2 },
        ];
      }

      // ── Fill Shape ──
      ctx.fillStyle = 'rgba(245, 158, 11, 0.12)';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      points.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // ── Draw Dimension Labels on Sides ──
      ctx.font = '800 13px Nunito, sans-serif';
      ctx.fillStyle = '#fbbf24';

      if (currentShape === 'rect') {
        ctx.fillText(`Length = ${len} m`, cx - 35, cy - pxH / 2 - 12);
        ctx.fillText(`Width = ${wid} m`, cx + pxW / 2 + 10, cy + 4);
        ctx.fillText(`Length = ${len} m`, cx - 35, cy + pxH / 2 + 20);
        ctx.fillText(`Width = ${wid} m`, cx - pxW / 2 - 80, cy + 4);
      } else if (currentShape === 'square') {
        ctx.fillText(`Side = ${len} m`, cx - 30, cy - pxH / 2 - 12);
        ctx.fillText(`Side = ${len} m`, cx + pxW / 2 + 10, cy + 4);
      } else if (currentShape === 'triangle') {
        ctx.fillText(`${len} m`, cx + pxW / 4 + 10, cy - 20);
        ctx.fillText(`${len} m`, cx - 20, cy + pxH / 2 + 20);
        ctx.fillText(`${len} m`, cx - pxW / 4 - 40, cy - 20);
      } else if (currentShape === 'l_shape') {
        ctx.fillText(`Total W = ${len} m`, cx - 40, cy + pxH / 2 + 20);
        ctx.fillText(`Total H = ${wid} m`, cx - pxW / 2 - 80, cy);
      }

      // ── Trace Boundary Animation ──
      if (isTracing) {
        traceProgress += traceSpeed;
        if (traceProgress >= 1) {
          traceProgress = 1;
          isTracing = false;
        }

        // Calculate walker position along polygon perimeter
        const numSegments = points.length;
        const totalDist = points.reduce((acc, pt, i) => {
          const next = points[(i + 1) % numSegments];
          return acc + Math.hypot(next.x - pt.x, next.y - pt.y);
        }, 0);

        let targetDist = traceProgress * totalDist;
        let walkX = points[0].x;
        let walkY = points[0].y;
        let currentSegIdx = 0;

        for (let i = 0; i < numSegments; i++) {
          const p1 = points[i];
          const p2 = points[(i + 1) % numSegments];
          const segDist = Math.hypot(p2.x - p1.x, p2.y - p1.y);

          if (targetDist <= segDist) {
            const frac = targetDist / segDist;
            walkX = p1.x + (p2.x - p1.x) * frac;
            walkY = p1.y + (p2.y - p1.y) * frac;
            currentSegIdx = i;
            break;
          } else {
            targetDist -= segDist;
          }
        }

        // Draw Traced Highlight Path
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 0; i < currentSegIdx; i++) {
          ctx.lineTo(points[(i + 1) % numSegments].x, points[(i + 1) % numSegments].y);
        }
        ctx.lineTo(walkX, walkY);
        ctx.stroke();

        // Walker Character Token
        ctx.fillStyle = '#06b6d4';
        ctx.beginPath();
        ctx.arc(walkX, walkY, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Walker Pulsing Ring
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(walkX, walkY, 15, 0, Math.PI * 2);
        ctx.stroke();

        // Banner update
        const banner = container.querySelector('#trace-step-banner');
        if (banner) {
          banner.innerHTML = `🚶 <strong>Walking Boundary:</strong> Tracing Side ${currentSegIdx + 1} of ${numSegments} (${Math.round(traceProgress * 100)}% complete)`;
        }
      }

      animId = requestAnimationFrame(renderLoop);
    }

    renderLoop();

    return () => cancelAnimationFrame(animId);
  },
};

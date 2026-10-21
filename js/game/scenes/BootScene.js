/* ═══════════════════════════════════════════════════════════════
   QUESTMIND / SKILLVERSE — Phaser Boot Scene
   Generates rich procedural assets & sprites for all 6 worlds
═══════════════════════════════════════════════════════════════ */
class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  create() {
    this.generateTextures();
    this.scene.start('GameScene');
  }

  generateTextures() {
    const g = this.make.graphics({ add: false });

    // ── 1. Player Sprites ───────────────────────────────────────
    // Running player (36 × 52)
    g.clear();
    // Shadow
    g.fillStyle(0x000000, 0.4);
    g.fillEllipse(18, 50, 24, 6);
    // Legs
    g.fillStyle(0x1e293b);
    g.fillRect(10, 36, 6, 12);
    g.fillRect(20, 36, 6, 12);
    // Boots
    g.fillStyle(0x06b6d4);
    g.fillRect(8, 44, 9, 7);
    g.fillRect(19, 44, 9, 7);
    // Torso / Suit
    g.fillStyle(0x3b82f6);
    g.fillRoundedRect(8, 16, 20, 22, 4);
    // Chest Reactor / Emblem
    g.fillStyle(0x38bdf8);
    g.fillCircle(18, 26, 4);
    g.fillStyle(0xffffff);
    g.fillCircle(18, 26, 1.5);
    // Jetpack
    g.fillStyle(0x64748b);
    g.fillRoundedRect(3, 18, 5, 16, 2);
    g.fillStyle(0xf59e0b);
    g.fillRect(4, 34, 3, 5);
    // Arms
    g.fillStyle(0x2563eb);
    g.fillRect(6, 20, 4, 14);
    g.fillRect(26, 20, 4, 14);
    // Head / Helmet
    g.fillStyle(0x0f172a);
    g.fillCircle(18, 11, 9);
    // Glowing Visor
    g.fillStyle(0x00f0ff);
    g.fillRoundedRect(14, 8, 10, 6, 2);
    g.fillStyle(0xffffff);
    g.fillRect(19, 9, 4, 2);
    g.generateTexture('player', 36, 54);
    g.clear();

    // Player Slide (52 × 32)
    g.fillStyle(0x000000, 0.4);
    g.fillEllipse(26, 30, 38, 5);
    // Tilted body
    g.fillStyle(0x3b82f6);
    g.fillRoundedRect(14, 14, 28, 14, 3);
    // Head down
    g.fillStyle(0x0f172a);
    g.fillCircle(40, 18, 8);
    g.fillStyle(0x00f0ff);
    g.fillRect(40, 16, 6, 5);
    // Legs forward
    g.fillStyle(0x1e293b);
    g.fillRect(2, 20, 16, 7);
    g.fillStyle(0x06b6d4);
    g.fillRect(0, 18, 6, 9);
    // Jetpack sparks
    g.fillStyle(0xf59e0b);
    g.fillRect(16, 8, 10, 5);
    g.generateTexture('player_slide', 52, 34);
    g.clear();

    // Player Jump (36 × 54)
    g.fillStyle(0x1e293b);
    g.fillRect(9, 36, 6, 10);
    g.fillRect(21, 36, 6, 10);
    g.fillStyle(0x06b6d4);
    g.fillRect(8, 42, 8, 7);
    g.fillRect(20, 42, 8, 7);
    g.fillStyle(0x3b82f6);
    g.fillRoundedRect(8, 14, 20, 22, 4);
    g.fillStyle(0x38bdf8);
    g.fillCircle(18, 24, 4);
    // Raised arms
    g.fillStyle(0x2563eb);
    g.fillRect(5, 12, 4, 12);
    g.fillRect(27, 12, 4, 12);
    // Helmet
    g.fillStyle(0x0f172a);
    g.fillCircle(18, 9, 9);
    g.fillStyle(0x00f0ff);
    g.fillRoundedRect(14, 6, 10, 6, 2);
    // Thruster flame
    g.fillStyle(0xf59e0b);
    g.fillTriangle(14, 48, 22, 48, 18, 54);
    g.generateTexture('player_jump', 36, 56);
    g.clear();

    // ── 2. Obstacles ───────────────────────────────────────────
    // Low Hurdle Crate (Jump over) - 38 × 34
    g.fillStyle(0xb45309);
    g.fillRoundedRect(2, 2, 34, 30, 4);
    g.lineStyle(2, 0xf59e0b, 0.9);
    g.strokeRoundedRect(2, 2, 34, 30, 4);
    g.lineStyle(2, 0x78350f, 0.7);
    g.beginPath();
    g.moveTo(4, 4); g.lineTo(34, 30);
    g.moveTo(34, 4); g.lineTo(4, 30);
    g.strokePath();
    g.generateTexture('obstacle_crate', 38, 34);
    g.clear();

    // Laser Beam (Slide under) - 20 × 58
    g.fillStyle(0xef4444, 0.9);
    g.fillRoundedRect(4, 2, 12, 54, 3);
    g.lineStyle(2, 0xff8888, 1);
    g.strokeRoundedRect(4, 2, 12, 54, 3);
    g.fillStyle(0xffffff, 0.8);
    g.fillRect(8, 6, 4, 46);
    g.generateTexture('obstacle_laser', 20, 58);
    g.clear();

    // Hazard Spikes - 36 × 32
    g.fillStyle(0xd97706);
    g.fillTriangle(4, 30, 12, 6, 20, 30);
    g.fillTriangle(16, 30, 24, 4, 32, 30);
    g.lineStyle(1.5, 0xfef08a, 0.9);
    g.strokeTriangle(4, 30, 12, 6, 20, 30);
    g.strokeTriangle(16, 30, 24, 4, 32, 30);
    g.generateTexture('obstacle_spike', 36, 32);
    g.clear();

    // Asteroid / Boulder - 38 × 38
    g.fillStyle(0x475569);
    g.fillCircle(19, 19, 16);
    g.fillStyle(0x334155);
    g.fillCircle(14, 14, 5);
    g.fillCircle(24, 22, 4);
    g.lineStyle(2, 0x94a3b8, 0.8);
    g.strokeCircle(19, 19, 16);
    g.generateTexture('obstacle_rock', 38, 38);
    g.clear();

    // ── 3. Collectibles ────────────────────────────────────────
    // Star (26 × 26)
    g.fillStyle(0xfbbf24);
    this.drawStar(g, 13, 13, 5, 12, 6);
    g.lineStyle(1.5, 0xfffbeb, 0.9);
    this.strokeStar(g, 13, 13, 5, 12, 6);
    g.generateTexture('collect_star', 26, 26);
    g.clear();

    // Gems
    this.makeGem(g, 'gem_blue',   0x06b6d4, 0x38bdf8);
    this.makeGem(g, 'gem_gold',   0xf59e0b, 0xfde047);
    this.makeGem(g, 'gem_purple', 0x8b5cf6, 0xc084fc);
    this.makeGem(g, 'gem_green',  0x10b981, 0x6ee7b7);

    // ── 4. Powerups ────────────────────────────────────────────
    this.makePowerupIcon(g, 'powerup_shield', 0x06b6d4, '🛡');
    this.makePowerupIcon(g, 'powerup_magnet', 0xf59e0b, '⚡');
    this.makePowerupIcon(g, 'powerup_boost',  0x10b981, '🔥');

    // ── 5. In-World 3-Lane Educational Choice Gates ────────────
    // Lane Gate Arch (80 × 120)
    g.fillStyle(0x0f172a, 0.85);
    g.fillRoundedRect(4, 4, 72, 112, 8);
    g.lineStyle(3, 0x38bdf8, 1);
    g.strokeRoundedRect(4, 4, 72, 112, 8);
    // Inner pulse
    g.lineStyle(1.5, 0xffffff, 0.5);
    g.strokeRoundedRect(8, 8, 64, 104, 6);
    g.generateTexture('lane_gate_arch', 80, 120);
    g.clear();

    // ── 6. Particles & Effects ─────────────────────────────────
    g.fillStyle(0x38bdf8, 1);
    g.fillCircle(8, 8, 6);
    g.generateTexture('particle_blue', 16, 16);
    g.clear();

    g.fillStyle(0xf59e0b, 1);
    g.fillCircle(8, 8, 6);
    g.generateTexture('particle_gold', 16, 16);
    g.clear();

    g.fillStyle(0x10b981, 1);
    g.fillCircle(8, 8, 6);
    g.generateTexture('particle_green', 16, 16);
    g.clear();

    g.destroy();
  }

  makeGem(g, key, color, highlight) {
    const s = 24;
    g.clear();
    g.fillStyle(color, 0.95);
    g.fillTriangle(s / 2, 2, 2, s * 0.6, s - 2, s * 0.6);
    g.fillRect(2, s * 0.6, s - 4, s * 0.36);
    g.fillStyle(highlight, 0.8);
    g.fillTriangle(s / 2, 4, 5, s * 0.38, s / 2 - 2, s * 0.38);
    g.lineStyle(1.5, 0xffffff, 0.6);
    g.strokeTriangle(s / 2, 2, 2, s * 0.6, s - 2, s * 0.6);
    g.generateTexture(key, s, s);
    g.clear();
  }

  makePowerupIcon(g, key, color) {
    const s = 34;
    g.clear();
    g.fillStyle(color, 0.9);
    g.fillCircle(s / 2, s / 2, 15);
    g.lineStyle(2, 0xffffff, 0.8);
    g.strokeCircle(s / 2, s / 2, 15);
    g.fillStyle(0xffffff, 0.7);
    g.fillCircle(s / 2 - 4, s / 2 - 4, 4);
    g.generateTexture(key, s, s);
    g.clear();
  }

  drawStar(g, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    g.beginPath();
    g.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      g.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      g.lineTo(x, y);
      rot += step;
    }
    g.lineTo(cx, cy - outerRadius);
    g.closePath();
    g.fillPath();
  }

  strokeStar(g, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    g.beginPath();
    g.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      g.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      g.lineTo(x, y);
      rot += step;
    }
    g.lineTo(cx, cy - outerRadius);
    g.closePath();
    g.strokePath();
  }
}

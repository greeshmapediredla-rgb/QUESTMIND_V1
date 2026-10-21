/* ═══════════════════════════════════════
   QUESTMIND — Sound & Synthesizer Engine
   Web Audio API Procedural SFX & Ambient Music
═══════════════════════════════════════ */
const Sound = (() => {
  let ctx = null;
  let muted = false;
  let musicInterval = null;

  function init() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        ctx = new AudioCtx();
      }
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
  }

  function isMuted() {
    return muted;
  }

  function toggleMute() {
    muted = !muted;
    if (muted && musicInterval) {
      clearInterval(musicInterval);
      musicInterval = null;
    }
    return muted;
  }

  function setMuted(val) {
    muted = !!val;
    if (muted && musicInterval) {
      clearInterval(musicInterval);
      musicInterval = null;
    }
  }

  // ── Tone Generator ────────────────────────
  function playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.2, freqEnd = null) {
    if (muted) return;
    try {
      init();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      if (freqEnd !== null) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(10, freqEnd), ctx.currentTime + duration);
      }

      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // ── Sound Presets ─────────────────────────
  const SFX = {
    jump() {
      playTone(260, 'sine', 0.18, 0.25, 620);
    },
    slide() {
      playTone(180, 'triangle', 0.22, 0.2, 80);
    },
    gem(combo = 1) {
      const baseFreq = 650 + Math.min(combo * 60, 400);
      playTone(baseFreq, 'sine', 0.14, 0.22, baseFreq * 1.5);
    },
    powerup() {
      if (muted) return;
      const notes = [440, 554, 659, 880];
      notes.forEach((f, i) => {
        setTimeout(() => playTone(f, 'square', 0.12, 0.15), i * 70);
      });
    },
    hit() {
      playTone(160, 'sawtooth', 0.25, 0.3, 40);
    },
    correct() {
      if (muted) return;
      const chord = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      chord.forEach((f, i) => {
        setTimeout(() => playTone(f, 'sine', 0.25, 0.22), i * 80);
      });
    },
    wrong() {
      if (muted) return;
      playTone(240, 'sawtooth', 0.2, 0.25, 140);
      setTimeout(() => playTone(180, 'sawtooth', 0.25, 0.2, 100), 120);
    },
    stageComplete() {
      if (muted) return;
      const notes = [440, 554, 659, 880, 1108];
      notes.forEach((f, i) => {
        setTimeout(() => playTone(f, 'triangle', 0.3, 0.25), i * 90);
      });
    },
    gameOver() {
      if (muted) return;
      const notes = [392, 349, 311, 261];
      notes.forEach((f, i) => {
        setTimeout(() => playTone(f, 'sawtooth', 0.25, 0.2), i * 110);
      });
    },
    click() {
      playTone(800, 'sine', 0.05, 0.1, 400);
    },
    hint() {
      playTone(587, 'sine', 0.15, 0.18, 880);
    },
  };

  function play(name, ...args) {
    if (SFX[name]) {
      SFX[name](...args);
    }
  }

  return { init, play, toggleMute, setMuted, isMuted };
})();

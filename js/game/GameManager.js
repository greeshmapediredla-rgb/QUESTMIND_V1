/* ═══════════════════════════════════════════════════════════════
   QUESTMIND / SKILLVERSE — Game Manager
   Phaser 3 Game Lifecycle & Responsive Canvas Management
═══════════════════════════════════════════════════════════════ */
const GameManager = (() => {
  let phaserGame = null;
  let currentWorld = 'space';
  let currentStage = 1;

  function launch(worldId, stageIdx = 1) {
    currentWorld = worldId;
    currentStage = stageIdx;
    const theme = QM.THEMES[worldId] || QM.THEMES.space;

    // Destroy existing Phaser instance if present
    if (phaserGame) {
      try {
        phaserGame.destroy(true);
      } catch (e) {
        console.warn('Phaser destroy warn:', e);
      }
      phaserGame = null;
    }

    // Reset container and overlays
    const container = $('#game-container');
    if (container) container.innerHTML = '';

    ['#pause-overlay', '#end-overlay', '#question-popup'].forEach(sel => {
      const el = $(sel);
      if (el) {
        el.classList.remove('visible');
        el.innerHTML = '';
      }
    });

    const W = QM.GAME.WIDTH;
    const H = QM.GAME.HEIGHT;

    phaserGame = new Phaser.Game({
      type: Phaser.AUTO,
      width: W,
      height: H,
      parent: 'game-container',
      backgroundColor: theme.skyColor || '#030318',
      physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 }, debug: false },
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: W,
        height: H,
      },
      input: {
        keyboard: true,
        mouse: true,
        touch: true,
      },
      scene: [BootScene, GameScene],
    });

    // Pass stage and world parameters via registry
    phaserGame.registry.set('worldId', worldId);
    phaserGame.registry.set('stageIdx', stageIdx);

    phaserGame.events.once('ready', () => {
      phaserGame.scene.start('BootScene');
    });

    console.log(`GameManager: Started World=${worldId}, Stage=${stageIdx}`);
  }

  function togglePause() {
    if (!phaserGame) return;
    const scene = phaserGame.scene.getScene('GameScene');
    if (scene) scene.togglePause();
  }

  function restart() {
    launch(currentWorld, currentStage);
  }

  function exitToMap() {
    if (phaserGame) {
      try {
        phaserGame.destroy(true);
      } catch (e) {}
      phaserGame = null;
    }
    ScreenManager.showScreen(QM.SCREENS.DASHBOARD);
  }

  function isRunning() {
    return phaserGame !== null;
  }

  return {
    launch,
    togglePause,
    restart,
    exit: exitToMap,
    exitToMap,
    isRunning,
  };
})();

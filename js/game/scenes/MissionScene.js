/* ═══════════════════════════════════════
   QUESTMIND — Mission Scene (standalone)
   For future extension — currently missions
   are handled inline by UIScene
═══════════════════════════════════════ */
class MissionScene extends Phaser.Scene {
  constructor() { super({ key: 'MissionScene' }); }

  init(data) {
    this.mission   = data.mission;
    this.onResult  = data.onResult || (() => {});
  }

  create() {
    // This scene is a placeholder for future
    // standalone mission mini-games (e.g. a
    // full debug puzzle scene, memory scene, etc.)
    // Currently missions are rendered as DOM overlays in UIScene.
    this.scene.sleep('MissionScene');
  }
}

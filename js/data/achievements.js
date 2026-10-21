/* ═══════════════════════════════════════
   QUESTMIND — Achievements & Badges
═══════════════════════════════════════ */
const ACHIEVEMENTS = {
  first_adventure: {
    id: 'first_adventure', emoji: '🌟', name: 'First Adventure',
    description: 'Complete your very first mission!',
    xpBonus: 50, condition: s => s.totalMissionsCompleted >= 1,
  },
  logic_legend: {
    id: 'logic_legend', emoji: '🧠', name: 'Logic Legend',
    description: 'Score 80+ on three logical reasoning missions.',
    xpBonus: 150, condition: s => {
      const lrAttempts = s.assessmentAttempts.filter(a => a.competencyId === QM.COMP.LOGIC && a.score >= 80);
      return lrAttempts.length >= 3;
    },
  },
  debugging_hero: {
    id: 'debugging_hero', emoji: '🔧', name: 'Debugging Hero',
    description: 'Fix 3 debugging missions successfully.',
    xpBonus: 120, condition: s => {
      const dbAttempts = s.assessmentAttempts.filter(a => a.competencyId === QM.COMP.DEBUGGING && a.passed);
      return dbAttempts.length >= 3;
    },
  },
  data_detective: {
    id: 'data_detective', emoji: '📊', name: 'Data Detective',
    description: 'Complete 2 data analysis missions.',
    xpBonus: 100, condition: s => {
      const da = s.assessmentAttempts.filter(a => a.competencyId === QM.COMP.DATA && a.passed);
      return da.length >= 2;
    },
  },
  creative_genius: {
    id: 'creative_genius', emoji: '🎨', name: 'Creative Genius',
    description: 'Complete a creative challenge.',
    xpBonus: 100, condition: s => {
      return s.assessmentAttempts.some(a => a.competencyId === QM.COMP.CREATIVITY && a.passed);
    },
  },
  master_explorer: {
    id: 'master_explorer', emoji: '🗺️', name: 'Master Explorer',
    description: 'Play in 4 different worlds.',
    xpBonus: 200, condition: s => {
      const worlds = new Set(s.assessmentAttempts.map(a => a.worldId));
      return worlds.size >= 4;
    },
  },
  puzzle_champion: {
    id: 'puzzle_champion', emoji: '🧩', name: 'Puzzle Champion',
    description: 'Complete 5 logic puzzles.',
    xpBonus: 150, condition: s => {
      const lp = s.assessmentAttempts.filter(a => a.passed && (a.competencyId === QM.COMP.LOGIC || a.competencyId === QM.COMP.PROBLEM));
      return lp.length >= 5;
    },
  },
  persistence_pro: {
    id: 'persistence_pro', emoji: '💪', name: 'Persistence Pro',
    description: 'Retry a mission and improve your score.',
    xpBonus: 80, condition: s => {
      const taskGroups = {};
      s.assessmentAttempts.forEach(a => {
        if (!taskGroups[a.taskId]) taskGroups[a.taskId] = [];
        taskGroups[a.taskId].push(a.score);
      });
      return Object.values(taskGroups).some(scores => scores.length >= 2 && scores[scores.length-1] > scores[0]);
    },
  },
  scientific_thinker: {
    id: 'scientific_thinker', emoji: '🔬', name: 'Scientific Thinker',
    description: 'Complete missions in Space Explorer or Ocean Explorer.',
    xpBonus: 120, condition: s => {
      const sci = s.assessmentAttempts.filter(a => (a.worldId === 'space' || a.worldId === 'ocean') && a.passed);
      return sci.length >= 2;
    },
  },
  communication_star: {
    id: 'communication_star', emoji: '💬', name: 'Communication Star',
    description: 'Complete a communication-focused mission.',
    xpBonus: 80, condition: s => {
      const atts = s?.assessmentAttempts || [];
      return atts.some(a => a.competencyId === QM.COMP.COMMUNICATION && a.passed);
    },
  },
  world_champion: {
    id: 'world_champion', emoji: '🏆', name: 'World Champion',
    description: 'Complete all stages in any one world!',
    xpBonus: 500, condition: s => {
      const progMap = s?.stageProgress || s?.stages || {};
      const worlds = (typeof WORLDS !== 'undefined' && WORLDS) ? Object.keys(WORLDS) : [];
      return worlds.some(wid => {
        const world = WORLDS[wid];
        if (!world || !world.stages) return false;
        return world.stages.every((_, idx) => {
          const prog = progMap[`${wid}_${idx}`] || progMap[`${wid}_${idx + 1}`];
          return prog && prog.completed;
        });
      });
    },
  },
  speed_runner: {
    id: 'speed_runner', emoji: '⚡', name: 'Speed Runner',
    description: 'Score 1000+ points in one game session.',
    xpBonus: 100, condition: s => {
      const sess = s?.gameSession;
      return sess && sess.highScore >= 1000;
    },
  },
  three_star_ace: {
    id: 'three_star_ace', emoji: '⭐', name: 'Three-Star Ace',
    description: 'Earn 3 stars on any mission.',
    xpBonus: 80, condition: s => {
      const atts = s?.assessmentAttempts || [];
      return atts.some(a => a.stars === 3);
    },
  },
};

// Check and award all applicable achievements
function checkAchievements() {
  try {
    const state = Store.get() || {};
    const awarded = [];
    Object.values(ACHIEVEMENTS).forEach(ach => {
      try {
        if (!Store.hasBadge(ach.id) && ach.condition(state)) {
          Store.awardBadge(ach.id);
          if (ach.xpBonus) Store.addXP(ach.xpBonus);
          awarded.push(ach);
        }
      } catch (err) {
        console.warn('Achievement check error for ' + ach.id, err);
      }
    });
    return awarded;
  } catch (e) {
    console.warn('checkAchievements failed:', e);
    return [];
  }
}

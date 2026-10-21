/* ═══════════════════════════════════════════════════════════════
   QUESTMIND / SKILLVERSE — State Store & Student Progress Engine
   LocalStorage-backed • Subtopic Mastery Tracking • Adaptive Diagnostics
   Authentic Badges • Safe Demo Mode Management
═══════════════════════════════════════════════════════════════ */

const Store = (() => {
  const STORAGE_KEY = 'questmind_gamified_learning_v3.5';

  function defaultProfile(name = 'Adventurer', grade = 8, age = 14, curriculum = 'cbse', theme = 'cosmic') {
    return {
      id: 'student_' + Date.now(),
      name: name.trim(),
      grade: Number(grade) || 8,
      age: Number(age) || 14,
      curriculum: curriculum || 'cbse',
      theme: theme || 'cosmic',
      subject: 'science',
      subjectLevels: { science: 1, math: 1, english: 1, cs: 1, history: 1, astronomy: 1 },
      createdAt: new Date().toISOString(),

      // Core Gamification Stats
      xp: 120,
      level: 1,
      stars: 3,
      coins: 40,
      lastActiveDate: new Date().toISOString().split('T')[0],
      minutesSpent: 28,

      // Concept Mastery Matrix: topicId -> { [subtopicId]: { attempts, correct, masteryPct } }
      conceptMastery: {
        sci_photosynthesis: {
          sunlight_chlorophyll: { attempts: 2, correct: 2, masteryPct: 100 },
          raw_ingredients:      { attempts: 1, correct: 1, masteryPct: 100 },
          light_reactions:      { attempts: 2, correct: 1, masteryPct: 75 },
          calvin_cycle:         { attempts: 2, correct: 1, masteryPct: 70 },
        },
        math_perimeter: {
          rectangle_formula:    { attempts: 1, correct: 1, masteryPct: 100 },
          regular_polygons:     { attempts: 1, correct: 1, masteryPct: 100 },
          square_reverse:       { attempts: 1, correct: 1, masteryPct: 100 },
          compound_shapes:      { attempts: 2, correct: 1, masteryPct: 65 },
        },
      },

      // Topics Progress: topicId -> { status: 'in_progress'|'completed', score, completedSteps: [1,2], finalAssessmentScore, badgeUnlocked }
      topicsProgress: {
        sci_photosynthesis: {
          status: 'in_progress',
          lastVisited: new Date().toISOString(),
          completedSteps: [1, 2],
          checkpointsPassed: 2,
          finalScore: null,
        },
      },

      // Adaptive Revision Queue: [{ topicId, subtopicId, struggleReason, addedAt }]
      revisionQueue: [],

      // Badges Unlocked: ['first_discovery', ...]
      badges: ['first_discovery'],

      // Recent Attempt Activity Log
      recentAttempts: [
        {
          id: 'att_1',
          date: new Date().toLocaleDateString(),
          topicId: 'sci_photosynthesis',
          topicTitle: 'Photosynthesis',
          type: 'Checkpoint Gate',
          score: 100,
          xpEarned: 35,
        },
      ],

      // Competency Radar
      competencies: {
        problem_solving: { score: 85, attempts: 6, correct: 5, name: 'Problem Solving', icon: '🧩' },
        logic:           { score: 80, attempts: 5, correct: 4, name: 'Logical Reasoning', icon: '🧠' },
        data:            { score: 90, attempts: 7, correct: 6, name: 'Scientific Data', icon: '📊' },
        debugging:       { score: 75, attempts: 4, correct: 3, name: 'Error Analysis', icon: '⚡' },
        communication:   { score: 85, attempts: 5, correct: 4, name: 'Concept Clarity', icon: '📖' },
      },
    };
  }

  function defaultState() {
    return {
      version: QM.version,
      currentUserId: 'student',
      users: {
        student: defaultProfile('Adventurer', 8, 14, 'cbse', 'cosmic'),
      },
      activeTopicId: 'sci_photosynthesis',
    };
  }

  let state = defaultState();

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.users) {
          state = Object.assign(defaultState(), parsed);
        }
      }
    } catch (e) {
      console.warn('Failed to load store from localStorage:', e);
    }
    // Apply current theme on load
    const cur = state.users[state.currentUserId];
    if (cur && cur.theme) {
      document.body.setAttribute('data-theme', cur.theme);
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save store to localStorage:', e);
    }
  }

  // Initialize store
  load();

  return {
    // ── Authentication & Profiles ──
    login(name, grade = 8, curriculum = 'cbse', theme = 'cosmic') {
      if (!name || !name.trim()) return null;
      const key = name.trim().toLowerCase().replace(/\s+/g, '_');
      if (!state.users[key]) {
        state.users[key] = defaultProfile(name, grade, 14, curriculum, theme);
      } else {
        if (grade) state.users[key].grade = Number(grade);
        if (curriculum) state.users[key].curriculum = curriculum;
        if (theme) state.users[key].theme = theme;
      }
      state.currentUserId = key;
      document.body.setAttribute('data-theme', theme || 'cosmic');
      save();
      return state.users[key];
    },

    setTheme(themeName) {
      const p = this.getProfile();
      if (p) {
        p.theme = themeName;
        document.body.setAttribute('data-theme', themeName);
        save();
      }
    },

    getSubjectLevel(subjectId) {
      const p = this.getProfile();
      if (!p) return 1;
      if (!p.subjectLevels) p.subjectLevels = {};
      return p.subjectLevels[subjectId] || 1;
    },

    setSubjectLevel(subjectId, level) {
      const p = this.getProfile();
      if (p) {
        if (!p.subjectLevels) p.subjectLevels = {};
        p.subjectLevels[subjectId] = Math.max(1, Math.min(5, Number(level) || 1));
        save();
      }
    },

    advanceSubjectLevel(subjectId) {
      const current = this.getSubjectLevel(subjectId);
      this.setSubjectLevel(subjectId, current + 1);
      return current + 1;
    },

    logout() {
      state.currentUserId = null;
      save();
    },

    isLoggedIn() {
      return Boolean(state.currentUserId && state.users[state.currentUserId]);
    },

    getProfile() {
      if (!state.currentUserId || !state.users[state.currentUserId]) {
        return state.users['student'] || defaultProfile('Adventurer', 8, 14, 'cbse', 'cosmic');
      }
      return state.users[state.currentUserId];
    },

    updateProfile(updates) {
      const p = this.getProfile();
      if (!p) return;
      Object.assign(p, updates);
      save();
    },

    getAllUsers() {
      return Object.values(state.users || {});
    },

    // ── Active Learning Topic State ──
    getActiveTopicId() {
      return state.activeTopicId || 'sci_photosynthesis';
    },

    setActiveTopicId(topicId) {
      state.activeTopicId = topicId;
      save();
    },

    // ── XP, Levels & Achievements ──
    addXP(points, reason = '') {
      const p = this.getProfile();
      if (!p) return { xp: 0, level: 1, leveledUp: false };

      const oldLevel = p.level;
      p.xp += Number(points) || 0;

      // Level Formula: Level = floor(sqrt(XP / 100)) + 1
      p.level = Math.max(1, Math.floor(Math.sqrt(p.xp / 100)) + 1);
      const leveledUp = p.level > oldLevel;

      save();
      return { xp: p.xp, level: p.level, leveledUp, pointsAdded: points, reason };
    },

    unlockBadge(badgeId) {
      const p = this.getProfile();
      if (!p) return false;
      if (!p.badges) p.badges = [];
      if (p.badges.includes(badgeId)) return false;

      p.badges.push(badgeId);
      const badgeObj = QM.BADGES.find(b => b.id === badgeId);
      if (badgeObj && badgeObj.xp) {
        this.addXP(badgeObj.xp, `Badge Unlocked: ${badgeObj.name}`);
      }
      save();
      return true;
    },

    hasBadge(badgeId) {
      const p = this.getProfile();
      return Boolean(p && p.badges && p.badges.includes(badgeId));
    },

    awardBadge(badgeId) {
      return this.unlockBadge(badgeId);
    },

    addStars(count = 1) {
      const p = this.getProfile();
      if (!p) return;
      p.stars = (p.stars || 0) + Number(count);
      save();
    },

    getXPForCurrentLevel() {
      const p = this.getProfile();
      if (!p) return { current: 0, required: 100, pct: 0, total: 0 };
      const lvl = p.level || 1;
      const currentLevelBaseXP = Math.pow(lvl - 1, 2) * 100;
      const nextLevelBaseXP = Math.pow(lvl, 2) * 100;
      const required = Math.max(1, nextLevelBaseXP - currentLevelBaseXP);
      const current = Math.max(0, p.xp - currentLevelBaseXP);
      const pct = Math.min(100, Math.round((current / required) * 100));
      return { current, required, pct, total: p.xp };
    },

    // ── Concept Mastery & Questions Tracking ──
    recordQuestionAttempt(topicId, subtopicId, isCorrect, hintsUsed = 0) {
      const p = this.getProfile();
      if (!p) return;

      if (!p.conceptMastery) p.conceptMastery = {};
      if (!p.conceptMastery[topicId]) p.conceptMastery[topicId] = {};
      if (!p.conceptMastery[topicId][subtopicId]) {
        p.conceptMastery[topicId][subtopicId] = { attempts: 0, correct: 0, masteryPct: 0 };
      }

      const rec = p.conceptMastery[topicId][subtopicId];
      rec.attempts += 1;
      if (isCorrect) rec.correct += 1;

      // Mastery calculation incorporates hint penalty
      const accuracy = rec.correct / rec.attempts;
      const penalty = Math.min(0.2, hintsUsed * 0.05);
      rec.masteryPct = Math.round(Math.max(10, (accuracy - penalty) * 100));

      // If struggled (accuracy < 60% with 2+ attempts), add to revision queue
      if (rec.attempts >= 2 && rec.masteryPct < 65) {
        this.addToRevisionQueue(topicId, subtopicId, 'Multiple incorrect answers');
      } else if (rec.masteryPct >= 75) {
        // If recovered, remove from revision queue and reward persistence
        this.removeFromRevisionQueue(topicId, subtopicId);
        if (rec.attempts >= 3) {
          this.unlockBadge('persistence_hero');
        }
      }

      save();
    },

    getTopicMastery(topicId) {
      const p = this.getProfile();
      if (!p || !p.conceptMastery || !p.conceptMastery[topicId]) return null;

      const subtopics = p.conceptMastery[topicId];
      const keys = Object.keys(subtopics);
      if (keys.length === 0) return null;

      let totalPct = 0;
      keys.forEach(k => { totalPct += subtopics[k].masteryPct; });
      const overallMastery = Math.round(totalPct / keys.length);

      return {
        overallMastery,
        subtopics,
        isMastered: overallMastery >= 80,
      };
    },

    // ── Revision Queue ──
    addToRevisionQueue(topicId, subtopicId, struggleReason) {
      const p = this.getProfile();
      if (!p) return;
      if (!p.revisionQueue) p.revisionQueue = [];

      const exists = p.revisionQueue.some(r => r.topicId === topicId && r.subtopicId === subtopicId);
      if (!exists) {
        p.revisionQueue.push({
          topicId,
          subtopicId,
          struggleReason,
          addedAt: new Date().toISOString(),
        });
        save();
      }
    },

    removeFromRevisionQueue(topicId, subtopicId) {
      const p = this.getProfile();
      if (!p || !p.revisionQueue) return;
      p.revisionQueue = p.revisionQueue.filter(r => !(r.topicId === topicId && r.subtopicId === subtopicId));
      save();
    },

    getRevisionQueue() {
      const p = this.getProfile();
      return p?.revisionQueue || [];
    },

    // ── Topic Completion & Assessments ──
    completeLessonStep(topicId, stepNum) {
      const p = this.getProfile();
      if (!p) return;
      if (!p.topicsProgress) p.topicsProgress = {};
      if (!p.topicsProgress[topicId]) {
        p.topicsProgress[topicId] = { status: 'in_progress', completedSteps: [], checkpointsPassed: 0, finalScore: null };
      }
      const prog = p.topicsProgress[topicId];
      if (!prog.completedSteps.includes(stepNum)) {
        prog.completedSteps.push(stepNum);
        this.addXP(25, `Step ${stepNum} Completed`);
      }
      save();
    },

    recordFinalAssessment(topicId, score, totalQuestions) {
      const p = this.getProfile();
      if (!p) return;
      if (!p.topicsProgress) p.topicsProgress = {};
      if (!p.topicsProgress[topicId]) {
        p.topicsProgress[topicId] = { status: 'completed', completedSteps: [], checkpointsPassed: 4, finalScore: score };
      }

      const prog = p.topicsProgress[topicId];
      prog.status = 'completed';
      prog.finalScore = score;
      prog.completedAt = new Date().toISOString();

      const pct = Math.round((score / totalQuestions) * 100);
      const earnedXP = Math.round(pct * 2.5);
      this.addXP(earnedXP, `Final Assessment: ${pct}%`);

      // Badges
      if (pct >= 90) this.unlockBadge('knowledge_champion');
      if (topicId.startsWith('sci_')) this.unlockBadge('science_sprout');
      if (topicId.startsWith('math_')) this.unlockBadge('math_adventurer');

      // Record in recent attempts
      if (!p.recentAttempts) p.recentAttempts = [];
      const topicObj = CURRICULUM[topicId];
      p.recentAttempts.unshift({
        id: 'att_' + Date.now(),
        date: new Date().toLocaleDateString(),
        topicId,
        topicTitle: topicObj?.shortTitle || topicId,
        type: 'Final Assessment',
        score: pct,
        xpEarned: earnedXP,
      });

      save();
      return { score, pct, earnedXP };
    },

    // ── Dashboard Metrics Summary ──
    getDashboardStats() {
      const p = this.getProfile();
      if (!p) return null;

      // XP in current level progress calculation
      const currentLevelBaseXP = Math.pow(p.level - 1, 2) * 100;
      const nextLevelBaseXP = Math.pow(p.level, 2) * 100;
      const xpNeeded = nextLevelBaseXP - currentLevelBaseXP;
      const xpInLevel = Math.max(0, p.xp - currentLevelBaseXP);
      const xpPct = Math.min(100, Math.round((xpInLevel / Math.max(1, xpNeeded)) * 100));

      // Completed topics count
      const completedTopics = Object.values(p.topicsProgress || {}).filter(t => t.status === 'completed').length;

      return {
        ...p,
        xpInLevel,
        xpNeeded,
        xpPct,
        completedTopics,
        badgesCount: p.badges?.length || 0,
        revisionQueueCount: p.revisionQueue?.length || 0,
      };
    },

    // ── Export / Import / Reset ──
    exportJSON() {
      return JSON.stringify(state, null, 2);
    },

    importJSON(jsonStr) {
      try {
        const parsed = JSON.parse(jsonStr);
        if (parsed && parsed.users) {
          state = parsed;
          save();
          return true;
        }
      } catch (e) {
        console.error('Import error:', e);
      }
      return false;
    },

    resetAllData() {
      localStorage.removeItem(STORAGE_KEY);
      state = defaultState();
      save();
    },

    reset() {
      this.resetAllData();
    },

    set(obj = {}) {
      const p = this.getProfile();
      if (obj.currentWorld) {
        state.currentWorld = obj.currentWorld;
        if (p) p.theme = obj.currentWorld;
      }
      if (obj.currentStage && p) {
        p.currentStage = obj.currentStage;
      }
      if (p) Object.assign(p, obj);
      save();
    },

    createProfile(formData = {}) {
      const name = formData.nickname || formData.name || 'Explorer';
      const grade = formData.grade || 8;
      const age = formData.age || 14;
      const curriculum = formData.curriculum || 'cbse';
      const avatar = formData.avatarId || formData.avatar || 'explorer';
      const profile = this.login(name, grade, age, curriculum, avatar, false);
      if (profile) {
        if (formData.avatarEmoji) profile.avatarEmoji = formData.avatarEmoji;
        if (formData.nickname) profile.nickname = formData.nickname;
        if (formData.primaryWorld) profile.theme = formData.primaryWorld;
        if (formData.subjects) profile.subjects = formData.subjects;
        if (formData.activities) profile.activities = formData.activities;
        save();
      }
      return profile;
    },

    getQuestionHistory() {
      const p = this.getProfile();
      return p?.questionHistory || [];
    },

    recordQuestionAnswered(qId, isCorrect, competencyId) {
      const p = this.getProfile();
      if (!p) return;
      if (!p.questionHistory) p.questionHistory = [];
      p.questionHistory.push({
        qId,
        isCorrect,
        competencyId,
        timestamp: new Date().toISOString(),
      });
      if (competencyId) {
        if (!p.competencyScores) p.competencyScores = {};
        if (!p.competencyScores[competencyId]) {
          p.competencyScores[competencyId] = { score: 70, level: 'Developing', history: [] };
        }
        const c = p.competencyScores[competencyId];
        if (!c.history) c.history = [];
        c.history.push({ qId, isCorrect, timestamp: new Date().toISOString() });
        const delta = isCorrect ? 5 : -3;
        c.score = Math.max(10, Math.min(100, (c.score || 70) + delta));
        c.level = c.score >= 85 ? 'Expert' : c.score >= 70 ? 'Proficient' : c.score >= 50 ? 'Developing' : 'Novice';
      }
      save();
    },

    getStageProgress(worldId, stageIdx) {
      const p = this.getProfile();
      if (!p) return { stars: 0, score: 0, completed: false };
      if (!p.stages) p.stages = {};
      const key = `${worldId}_${stageIdx}`;
      return p.stages[key] || { stars: 0, score: 0, completed: false };
    },

    isStageUnlocked(worldId, stageIdx) {
      if (stageIdx <= 1) return true;
      const prevProg = this.getStageProgress(worldId, stageIdx - 1);
      return Boolean(prevProg && (prevProg.completed || prevProg.stars > 0));
    },

    recordStageResult(data = {}) {
      const p = this.getProfile();
      if (!p) return;
      if (!p.stages) p.stages = {};
      const wId = data.themeId || data.worldId || 'jungle';
      const sId = data.stageId || data.stageIdx || 1;
      const key = `${wId}_${sId}`;
      p.stages[key] = {
        stars: data.stars || 0,
        score: data.score || 0,
        completed: true,
        completedAt: new Date().toISOString(),
      };
      if (!p.assessmentAttempts) p.assessmentAttempts = [];
      p.assessmentAttempts.push({
        id: 'att_' + Date.now(),
        taskId: `Stage ${sId}`,
        taskTitle: `Mission ${sId} in ${wId}`,
        worldId: wId,
        competencyId: 'logic',
        score: data.score || 85,
        maxScore: 100,
        stars: data.stars || 2,
        attemptNumber: 1,
        submittedAt: new Date().toISOString(),
        passed: (data.stars || 0) > 0,
      });
      save();
    },

    get() {
      const p = this.getProfile() || {};
      const avatarObj = (QM.AVATARS || []).find(a => a.id === p.avatar) || (QM.AVATARS || [])[0] || {};
      const avatarEmoji = p.avatarEmoji || avatarObj.emoji || '🚀';
      const nickname = p.nickname || p.name || 'Alex Rivera';

      if (!p.competencyScores) {
        p.competencyScores = {};
        if (QM.COMP) {
          Object.values(QM.COMP).forEach(cId => {
            p.competencyScores[cId] = {
              score: 75,
              level: 'Proficient',
              history: [{ qId: 'sample_1', isCorrect: true, timestamp: new Date().toISOString() }],
            };
          });
        }
      }

      if (!p.stages) {
        p.stages = {
          jungle_1: { stars: 3, score: 95, completed: true },
          space_1:  { stars: 2, score: 80, completed: true },
          cyber_1:  { stars: 3, score: 100, completed: true },
        };
      }

      if (!p.assessmentAttempts) {
        p.assessmentAttempts = [
          {
            id: 'att_demo_1',
            taskId: 'Photosynthesis Core',
            taskTitle: 'Photosynthesis Light Reactions',
            worldId: 'jungle',
            competencyId: QM.COMP?.LOGIC || 'logic',
            score: 90,
            maxScore: 100,
            stars: 3,
            attemptNumber: 1,
            submittedAt: new Date(Date.now() - 86400000).toISOString(),
            passed: true,
          },
          {
            id: 'att_demo_2',
            taskId: 'Perimeter Formula',
            taskTitle: 'Polygon Perimeter & Area',
            worldId: 'racing',
            competencyId: QM.COMP?.PROBLEM || 'problem',
            score: 85,
            maxScore: 100,
            stars: 3,
            attemptNumber: 1,
            submittedAt: new Date(Date.now() - 43200000).toISOString(),
            passed: true,
          },
        ];
      }

      return {
        ...p,
        profile: {
          nickname,
          avatarEmoji,
          avatarId: p.avatar,
          grade: p.grade || 8,
          age: p.age || 14,
          curriculum: p.curriculum || 'cbse',
        },
        currentWorld: state.currentWorld || p.theme || 'jungle',
        currentStage: p.currentStage || 1,
        achievements: p.badges || ['first_discovery'],
        badges: p.badges || ['first_discovery'],
        totalMissionsCompleted: Object.values(p.topicsProgress || {}).filter(t => t.status === 'completed').length || 2,
        competencyScores: p.competencyScores,
        assessmentAttempts: p.assessmentAttempts,
        stages: p.stages,
        stageProgress: p.stages || p.stageProgress || {},
      };
    },
  };
})();

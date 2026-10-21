/* ═══════════════════════════════════════
   QUESTMIND — NOVA: The In-Game Guide
═══════════════════════════════════════ */

const Nova = (() => {
  let overlay, bubble, novaMsg, novaVisual, novaActions;
  let onRetry, onHint, onPractice, onClose;
  let pendingMission = null;

  function init() {
    overlay = $('#nova-overlay');
    if (!overlay) return;
    bubble      = overlay.querySelector('.nova-bubble');
    novaMsg     = overlay.querySelector('.nova-message');
    novaVisual  = overlay.querySelector('.nova-visual');
    novaActions = overlay.querySelector('.nova-actions');
  }

  function showWrong(mission, selectedAnswer, callbacks = {}) {
    if (!overlay) init();
    if (!overlay) return;

    pendingMission = mission;
    onRetry    = callbacks.onRetry;
    onHint     = callbacks.onHint;
    onPractice = callbacks.onPractice;
    onClose    = callbacks.onClose;

    // Build NOVA message
    const wrongLabel = mission.options
      ? mission.options[selectedAnswer]
      : String(selectedAnswer);

    novaMsg.innerHTML = `
      <span style="color:var(--qm-secondary);font-size:1.1rem;">🤖 NOVA says:</span><br>
      <strong>Hmm, not quite!</strong> You selected "<em>${wrongLabel}</em>" — let me explain what this challenge is testing and how to tackle it! 💡
    `;

    // Visual explanation
    novaVisual.innerHTML = buildVisualExplanation(mission, selectedAnswer);

    // Render action buttons
    novaActions.innerHTML = '';

    const btnShowWhy = el('button', { class: 'btn btn-secondary btn-sm', onClick: () => showFullExplanation(mission) }, '🔍 SHOW ME WHY');
    const btnHint    = el('button', { class: 'btn btn-ghost btn-sm', onClick: () => giveHint(mission) }, '💡 GIVE ME A HINT');
    const btnPractice= el('button', { class: 'btn btn-ghost btn-sm', onClick: () => { if (onPractice) onPractice(); } }, '📝 PRACTICE EXAMPLE');
    const btnRetry   = el('button', { class: 'btn btn-accent btn-sm', onClick: () => { hide(); if (onRetry) onRetry(); } }, '🔄 RETRY MISSION');

    novaActions.append(btnShowWhy, btnHint, btnPractice, btnRetry);

    overlay.classList.add('visible');
    Animations.slideIn(bubble, 'bottom');
  }

  function showFullExplanation(mission) {
    novaMsg.innerHTML = `
      <span style="color:var(--qm-secondary);">🤖 NOVA explains:</span><br>
      ${mission.explanation}
    `;
    novaVisual.innerHTML = buildDetailedVisual(mission);
    // Remove show-why button, keep others
  }

  function giveHint(mission) {
    if (!mission.hint) return;
    const hintDiv = document.createElement('div');
    hintDiv.style.cssText = `
      background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);
      border-radius:12px;padding:12px;margin-top:8px;
      font-size:0.9rem;font-weight:700;color:#fcd34d;
    `;
    hintDiv.textContent = '💡 Hint: ' + mission.hint;
    novaVisual.appendChild(hintDiv);
    Animations.slideIn(hintDiv, 'bottom', 300);
    if (onHint) onHint();
  }

  function showCorrect(mission, callbacks = {}) {
    if (!overlay) init();
    if (!overlay) return;

    onClose = callbacks.onClose;

    const messages = [
      '🎉 AMAZING! You cracked the code!',
      '⚡ SUPER MOVE! Your reasoning saved the mission!',
      '🌟 BRILLIANT! The portal is opening!',
      '🏆 YOU DID IT! Another mystery solved!',
      '💫 INCREDIBLE! Your skills are growing!',
      '🚀 OUT OF THIS WORLD! Perfect answer!',
    ];

    novaMsg.innerHTML = `
      <span style="color:var(--qm-success);font-size:1.2rem;">🤖 NOVA celebrates:</span><br>
      <strong style="font-size:1.1rem;color:#6ee7b7;">${messages[Math.floor(Math.random() * messages.length)]}</strong>
    `;

    novaVisual.innerHTML = `
      <div style="text-align:center;width:100%;">
        <div style="font-size:3rem;margin-bottom:8px;">✅</div>
        <div style="font-weight:700;color:var(--qm-success);">${mission.explanation}</div>
      </div>
    `;

    novaActions.innerHTML = '';
    const btnContinue = el('button', {
      class: 'btn btn-success',
      onClick: () => { hide(); if (onClose) onClose(); }
    }, '▶️ Continue Adventure!');
    novaActions.appendChild(btnContinue);

    overlay.classList.add('visible');
    launchConfetti(30);
    Animations.slideIn(bubble, 'bottom');
  }

  function hide() {
    if (overlay) overlay.classList.remove('visible');
  }

  // ── Visual Explanation Builders ──────────
  function buildVisualExplanation(mission, selectedAnswer) {
    if (mission.type === QM.MISSION_TYPE.QUIZ && mission.options) {
      const correct = mission.options[mission.correctIndex];
      const wrong   = mission.options[selectedAnswer];
      return `
        <div style="display:flex;gap:12px;flex-wrap:wrap;width:100%;justify-content:center;">
          <div style="padding:10px 16px;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.4);border-radius:10px;font-size:0.85rem;">
            ❌ Your answer: <strong>${wrong}</strong>
          </div>
          <div style="padding:10px 16px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.4);border-radius:10px;font-size:0.85rem;">
            ✅ Correct: <strong>${correct}</strong>
          </div>
        </div>
        <div style="margin-top:8px;font-size:0.85rem;color:var(--qm-text-dim);text-align:center;">
          Click <strong>SHOW ME WHY</strong> for a step-by-step explanation →
        </div>
      `;
    }
    if (mission.type === QM.MISSION_TYPE.DEBUG) {
      return `
        <div style="font-size:0.85rem;">
          <div style="margin-bottom:6px;color:var(--qm-text-dim);">🔍 Let me show you the broken instruction:</div>
          ${mission.steps.map((s, i) => `
            <div style="padding:6px 10px;margin:3px 0;border-radius:8px;
              background:${i === mission.bugIndex ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.04)'};
              border:1px solid ${i === mission.bugIndex ? 'rgba(239,68,68,0.5)' : 'transparent'};
              font-size:0.8rem;">
              ${i === mission.bugIndex ? '🐛' : '✔️'} Step ${i+1}: ${s}
            </div>
          `).join('')}
        </div>
      `;
    }
    if (mission.type === QM.MISSION_TYPE.MEMORY) {
      return `
        <div style="text-align:center;font-size:0.85rem;color:var(--qm-text-dim);">
          Try breaking the sequence into pairs to remember it more easily!<br>
          <div style="margin-top:8px;font-size:1.4rem;">
            ${mission.sequence.join(' ')}
          </div>
        </div>
      `;
    }
    return `<div style="text-align:center;font-size:0.85rem;color:var(--qm-text-dim);">Click "SHOW ME WHY" for a detailed explanation.</div>`;
  }

  function buildDetailedVisual(mission) {
    if (mission.type === QM.MISSION_TYPE.QUIZ && mission.options) {
      const correct = mission.options[mission.correctIndex];
      return `
        <div style="width:100%;">
          <div style="font-size:0.85rem;margin-bottom:8px;color:var(--qm-text-dim);">Step-by-step breakdown:</div>
          <div style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.3);border-radius:10px;padding:12px;font-size:0.85rem;line-height:1.6;">
            ${mission.explanation.replace(/\n/g, '<br>')}
          </div>
          <div style="margin-top:8px;padding:10px 16px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.4);border-radius:10px;font-size:0.85rem;font-weight:700;">
            ✅ Correct answer: ${correct}
          </div>
          ${mission.rubric ? `
            <div style="margin-top:8px;font-size:0.8rem;color:var(--qm-text-dim);">
              <strong>What this tests:</strong><br>
              ${mission.rubric.map(r => `• ${r.criterion} (${r.maxPoints} pts)`).join('<br>')}
            </div>
          ` : ''}
        </div>
      `;
    }
    if (mission.type === QM.MISSION_TYPE.DEBUG) {
      return `
        <div style="width:100%;">
          <div style="margin-bottom:8px;font-size:0.85rem;color:var(--qm-text-dim);">The bug is in step ${mission.bugIndex + 1}:</div>
          <div style="padding:10px;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.4);border-radius:10px;margin-bottom:8px;font-size:0.85rem;">
            ❌ Wrong: <strong>${mission.steps[mission.bugIndex]}</strong>
          </div>
          <div style="padding:10px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.4);border-radius:10px;font-size:0.85rem;">
            ✅ Fix: <strong>${mission.correctStep}</strong>
          </div>
          <div style="margin-top:8px;background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.3);border-radius:10px;padding:12px;font-size:0.85rem;line-height:1.6;">
            ${mission.explanation}
          </div>
        </div>
      `;
    }
    return `
      <div style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.3);border-radius:10px;padding:12px;font-size:0.85rem;line-height:1.6;width:100%;">
        ${mission.explanation.replace(/\n/g, '<br>')}
      </div>
    `;
  }

  return { init, showWrong, showCorrect, hide };
})();

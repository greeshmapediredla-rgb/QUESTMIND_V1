/* ═══════════════════════════════════════════════════════════════
   QUESTMIND / SKILLVERSE — Nova Socratic AI Tutor Drawer
   Interactive Floating AI Assistant • Context-Aware Guidance
   NCERT / CBSE / SSC Curriculum Aligned • Grade-Adaptive Depth
   Primary (Grades 1–5), Middle (Grades 6–8), Secondary (Grades 9–12)
═══════════════════════════════════════════════════════════════ */

const TutorChat = (() => {
  let drawerEl = null;
  let isOpen = false;
  let chatHistory = [];

  function init() {
    if ($('#tutor-drawer')) return;

    drawerEl = el('div', { id: 'tutor-drawer', class: 'tutor-drawer' });
    drawerEl.innerHTML = `
      <div class="tutor-header">
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="tutor-avatar">🤖</div>
          <div>
            <div class="tutor-name font-game">Nova AI Tutor</div>
            <div class="tutor-status" id="tutor-ai-status">NCERT & CBSE Study Companion 💡</div>
          </div>
        </div>
        <button class="btn btn-ghost btn-sm" id="tutor-close-btn" style="padding:6px 12px;">✕</button>
      </div>

      <div class="tutor-messages" id="tutor-messages">
        <!-- Messages stream here -->
      </div>

      <!-- Quick Suggestion Prompt Chips -->
      <div class="tutor-chips" id="tutor-chips">
        <!-- Injected dynamically based on topic & grade -->
      </div>

      <!-- Input Bar -->
      <div class="tutor-input-bar">
        <input type="text" class="qm-input" id="tutor-input" placeholder="Ask Nova anything about this concept…" autocomplete="off" />
        <button class="btn btn-primary" id="tutor-send-btn" style="padding:10px 18px;">Send 🚀</button>
      </div>
    `;

    document.body.appendChild(drawerEl);

    // Floating Launch Button
    const floatBtn = el('button', { id: 'tutor-float-btn', class: 'tutor-float-btn', title: 'Ask Nova AI Tutor' });
    floatBtn.innerHTML = `
      <span class="tutor-float-icon">🤖</span>
      <span class="tutor-float-label">Ask Nova</span>
      <span class="tutor-float-badge">AI</span>
    `;
    floatBtn.addEventListener('click', toggle);
    document.body.appendChild(floatBtn);

    // Event listeners
    $('#tutor-close-btn').addEventListener('click', close);
    $('#tutor-send-btn').addEventListener('click', handleSend);
    $('#tutor-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') handleSend();
    });

    // Initial greeting
    resetChatForTopic(Store.getActiveTopicId());
  }

  function toggle() {
    isOpen ? close() : open();
  }

  function open() {
    if (!drawerEl) init();
    drawerEl.classList.add('open');
    isOpen = true;
    $('#tutor-input').focus();
    updateChips();
  }

  function close() {
    if (!drawerEl) return;
    drawerEl.classList.remove('open');
    isOpen = false;
  }

  function resetChatForTopic(topicId) {
    const topic = (typeof CURRICULUM !== 'undefined' && CURRICULUM[topicId]) || { title: 'General Science & Math', shortTitle: 'Concepts' };
    const profile = Store.getProfile();
    const grade = profile?.grade || 6;

    let greetingMsg = `Hey **${profile?.name || 'Champ'}**! 👋 I'm **Nova**, your personal AI study tutor for **Class ${grade}**.\n\nWe are exploring **${topic.shortTitle || topic.title}** (${topic.curriculumBoard || 'NCERT / CBSE Aligned'}).\n\nAsk me for a simple analogy, how a formula works, or help with any problem!`;

    if (grade <= 5) {
      greetingMsg = `Hi **${profile?.name || 'Explorer'}**! 🌟 I'm **Nova**, your AI buddy! We're learning **${topic.shortTitle || topic.title}** today.\n\nNeed an easy cartoon analogy or a quick tip? Ask me anything!`;
    }

    chatHistory = [
      {
        sender: 'nova',
        text: greetingMsg,
      },
    ];
    renderMessages();
    updateChips();
  }

  function updateChips() {
    const chipsEl = $('#tutor-chips');
    if (!chipsEl) return;

    const profile = Store.getProfile();
    const grade = profile?.grade || 6;
    const topicId = Store.getActiveTopicId();
    const topic = (typeof CURRICULUM !== 'undefined' && CURRICULUM[topicId]) || {};

    let prompts = [
      `🌟 Explain this for Class ${grade}`,
      `🎨 Give me a fun visual analogy`,
      `💡 What is the main formula or rule?`,
      `🎯 Give me a quick practice challenge!`
    ];

    if (topic.id === 'sci_photosynthesis') {
      prompts = [
        '🌿 Why do leaves need sunlight?',
        '🍪 Explain photosynthesis like a bakery',
        '💡 What is the chemical equation?',
        '🎯 Test me with a challenge question!'
      ];
    } else if (topic.id === 'math_perimeter') {
      prompts = [
        '📐 How do I calculate rectangle perimeter?',
        '🐕 Explain perimeter using a dog walk',
        '⚠️ What is the difference from area?',
        '🎯 Give me a practice problem!'
      ];
    }

    chipsEl.innerHTML = '';
    prompts.forEach(p => {
      const chip = el('button', { class: 'tutor-chip', onClick: () => sendCustomPrompt(p) }, p);
      chipsEl.appendChild(chip);
    });
  }

  function sendCustomPrompt(text) {
    $('#tutor-input').value = text;
    handleSend();
  }

  async function handleSend() {
    const input = $('#tutor-input');
    const query = input.value.trim();
    if (!query) return;

    input.value = '';

    // Append user message
    chatHistory.push({ sender: 'user', text: query });
    renderMessages();

    // Show typing indicator
    const typingMsg = { sender: 'nova', text: 'Thinking… 🤔', isTyping: true };
    chatHistory.push(typingMsg);
    renderMessages();

    const topic = (typeof CURRICULUM !== 'undefined' && CURRICULUM[Store.getActiveTopicId()]) || { title: 'General Studies', shortTitle: 'Concepts' };
    const profile = Store.getProfile();
    const grade = profile?.grade || 6;

    // Determine API URL: Works over http/https and gracefully falls back on file://
    const apiUrl = (window.location.protocol === 'http:' || window.location.protocol === 'https:')
      ? '/api/ask-tutor'
      : 'http://localhost:3000/api/ask-tutor';

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          topic: topic.title,
          grade: grade,
        }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      const data = await res.json();
      chatHistory.pop(); // Remove typing indicator

      if (data && data.success && data.answer) {
        chatHistory.push({ sender: 'nova', text: data.answer });
      } else {
        chatHistory.push({ sender: 'nova', text: getPedagogicalFallback(query, topic, grade) });
      }
    } catch (e) {
      chatHistory.pop(); // Remove typing indicator
      chatHistory.push({ sender: 'nova', text: getPedagogicalFallback(query, topic, grade) });
    }

    renderMessages();
  }

  // ═════════════════════════════════════════════════════════════
  // GRADE-ADAPTIVE PEDAGOGICAL INTELLIGENCE ENGINE
  // ═════════════════════════════════════════════════════════════
  function getPedagogicalFallback(q, topic, grade = 6) {
    const qLower = q.toLowerCase();

    // 1. Check if asking about current topic's explanation/analogy/rule
    let depthKey = 'middle';
    if (grade <= 5) depthKey = 'primary';
    else if (grade >= 9) depthKey = 'secondary';

    const currentDepth = (topic.gradeDepths && topic.gradeDepths[depthKey]) || topic.gradeDepths?.middle || {};

    if (qLower.includes('analogy') || qLower.includes('bakery') || qLower.includes('dog walk') || qLower.includes('like a')) {
      return `🎨 **Visual Analogy for Class ${grade}:**\n\n${currentDepth.analogy || topic.introduction?.realLifeAnalogy || 'Think of this concept like an everyday game with clear rules!'}`;
    }

    if (qLower.includes('formula') || qLower.includes('rule') || qLower.includes('equation')) {
      return `⚡ **Core Rule for Class ${grade}:**\n\n**${currentDepth.keyRule || topic.introduction?.formula || 'Inputs ➔ Transformation ➔ Predictable Output'}**\n\n*Tip:* In exams, always write down the unit (like cm, m², or Newtons)!`;
    }

    if (qLower.includes('explain') && (qLower.includes('class') || qLower.includes('grade') || qLower.includes('simple'))) {
      if (grade <= 5) {
        return `🌟 **Class ${grade} Easy Explanation:**\n\n${currentDepth.explanation || topic.introduction?.definition}\n\n🎨 **Analogy:** ${currentDepth.analogy || topic.introduction?.realLifeAnalogy}\n\n⚡ **Quick Rule:** ${currentDepth.keyRule}`;
      } else if (grade >= 9) {
        return `🎓 **Class ${grade} In-Depth Explanation (NCERT / CBSE):**\n\n${currentDepth.explanation || topic.introduction?.definition}\n\n📐 **Scientific Law:** ${currentDepth.keyRule}\n\n💡 **Exam Focus:** Be sure to show the step-by-step derivation in your answers!`;
      } else {
        return `📘 **Class ${grade} Curriculum Explanation:**\n\n${currentDepth.explanation || topic.introduction?.definition}\n\n💡 **Key Formula:** ${currentDepth.keyRule}\n\n🎨 **Everyday Analogy:** ${currentDepth.analogy}`;
      }
    }

    // 2. Math Calculations
    const sqrtMatch = qLower.match(/(?:sqrt|square root of)\s*\(?(\d+(?:\.\d+)?)\)?/i);
    if (sqrtMatch) {
      const val = parseFloat(sqrtMatch[1]);
      const res = Math.sqrt(val);
      return `Square root solved! 🔢\n\n**√${val} = ${Number.isInteger(res) ? res : res.toFixed(3)}**\n\nBecause ${Number.isInteger(res) ? res : res.toFixed(3)} × ${Number.isInteger(res) ? res : res.toFixed(3)} = ${val}. What other problem can I help you calculate?`;
    }

    const powMatch = qLower.match(/(\d+(?:\.\d+)?)\s*(?:\^|\*\*|to the power of)\s*(\d+(?:\.\d+)?)/i);
    if (powMatch) {
      const base = parseFloat(powMatch[1]);
      const exp = parseFloat(powMatch[2]);
      const res = Math.pow(base, exp);
      return `Power calculation! ⚡\n\n**${base}^${exp} = ${res}**\n\nThis means multiplying ${base} by itself ${exp} times!`;
    }

    const pctMatch = qLower.match(/(\d+(?:\.\d+)?)\s*%\s*(?:of)\s*(\d+(?:\.\d+)?)/i);
    if (pctMatch) {
      const pct = parseFloat(pctMatch[1]);
      const total = parseFloat(pctMatch[2]);
      const res = (pct / 100) * total;
      return `Percentage calculation! 📊\n\n**${pct}% of ${total} = ${res}**\n\n*Step:* (${pct} ÷ 100) × ${total} = ${res}.`;
    }

    const mathMatch = qLower.match(/(?:what is|calculate|solve|evaluate)?\s*(-?\d+(?:\.\d+)?)\s*([\+\-\*\/xX]|times|plus|minus|divided by)\s*(-?\d+(?:\.\d+)?)/i);
    if (mathMatch) {
      const num1 = parseFloat(mathMatch[1]);
      const op = mathMatch[2].toLowerCase();
      const num2 = parseFloat(mathMatch[3]);
      let result = null;
      let opWord = '';
      if (op === '+' || op === 'plus') { result = num1 + num2; opWord = 'addition'; }
      else if (op === '-' || op === 'minus') { result = num1 - num2; opWord = 'subtraction'; }
      else if (op === '*' || op === 'x' || op === 'times') { result = num1 * num2; opWord = 'multiplication'; }
      else if (op === '/' || op === 'divided by') {
        result = num2 !== 0 ? (num1 / num2) : 'undefined (cannot divide by zero)';
        opWord = 'division';
      }
      if (result !== null) {
        return `Step-by-step math! 🔢\n\n**${num1} ${op} ${num2} = ${result}**\n\nUsing ${opWord}, we combine the two numbers. Would you like another challenge?`;
      }
    }

    // 3. Greetings
    if (qLower.match(/^(hi|hello|hey|greetings|hola|howdy|yo)\b/)) {
      return `Hey there! 👋 I'm **Nova**, your personal AI study tutor for **Class ${grade}**!\n\nWhether you need help with formulas, science concepts, exam tricks, or practice problems, I'm right here. What are you curious about today?`;
    }

    // 4. Topic Matches across Curriculum
    if (qLower.includes('photosynthesis') || qLower.includes('plant')) {
      if (grade <= 5) {
        return `**Photosynthesis (Class ${grade})** 🌱☀️\n\nPlants make their own sweet snacks using sunshine! They catch sunlight with green leaves, drink water from the soil, and breathe in fresh air.\n\n**Equation:** Sunlight + Water + Air ➔ Sugar + Clean Oxygen!`;
      }
      return `**Photosynthesis (NCERT Class 7 & 10)** 🌿\n\nPlants use chlorophyll inside chloroplasts to convert sunlight, carbon dioxide ($CO_2$), and water ($H_2O$) into glucose sugar ($C_6H_{12}O_6$) and release oxygen ($O_2$).\n\n**Chemical Equation:** $6CO_2 + 6H_2O + \\text{Light} \\rightarrow C_6H_{12}O_6 + 6O_2$.`;
    }

    if (qLower.includes('perimeter')) {
      return `**Perimeter (Class ${grade})** 📐\n\nPerimeter is the total boundary distance around the outside of a shape!\n\n- **Rectangle:** $P = 2 \\times (\\text{Length} + \\text{Width})$\n- **Square:** $P = 4 \\times \\text{Side}$\n\n*Analogy:* Think of the fencing wire needed around a playground.`;
    }

    if (qLower.includes('area')) {
      return `**Area (Class ${grade})** 📏\n\nArea is the flat 2D space inside a shape!\n\n- **Rectangle:** $\\text{Length} \\times \\text{Width}$\n- **Square:** $\\text{Side} \\times \\text{Side}$\n- **Triangle:** $\\frac{1}{2} \\times \\text{Base} \\times \\text{Height}$\n- **Circle:** $\\pi \\times r^2$.`;
    }

    if (qLower.includes('newton') || qLower.includes('law of motion')) {
      return `**Newton's 3 Laws of Motion (Class ${grade})** 🚀\n\n1. **1st Law (Inertia):** Objects keep doing what they are doing unless pushed or pulled.\n2. **2nd Law ($F = m \\times a$):** Force equals Mass × Acceleration.\n3. **3rd Law:** For every action, there is an equal and opposite reaction!`;
    }

    if (qLower.includes('gravity')) {
      return `**Gravity (Class ${grade})** 🌌\n\nGravity is the invisible attractive force that pulls objects toward Earth's center at an acceleration of roughly **$9.8 \\text{ m/s}^2$**! It keeps our feet on the ground and planets in orbit around the Sun.`;
    }

    if (qLower.includes('atom')) {
      return `**Structure of the Atom (Class ${grade})** ⚛️\n\nAtoms are the tiny building blocks of everything! The central nucleus holds positive **Protons (+)** and neutral **Neutrons (0)**, surrounded by buzzing negative **Electrons (-)** in outer shells.`;
    }

    if (qLower.includes('cell')) {
      return `**The Cell (Class ${grade})** 🔬\n\nCells are the basic units of life! Key parts: **Nucleus** (stores DNA instructions), **Mitochondria** (powerhouse generating ATP energy), and **Cell Membrane** (protects the cell). Plant cells also have green **chloroplasts** and tough **cell walls**!`;
    }

    // 5. Intelligent dynamic response based on question type
    const cleanQ = q.replace(/^(what is|what are|why is|why are|how does|how do|explain|tell me about|can you explain|define)\s+/i, '').replace(/[\?!.]+$/, '').trim();
    const subjectTitle = cleanQ || topic.shortTitle || 'this concept';

    if (qLower.startsWith('why')) {
      return `Here is why **${subjectTitle}** works that way in Class ${grade}! 💡\n\nIn science and math, systems always follow balance and natural laws. When one element changes, the rest of the system adjusts to maintain equilibrium.\n\n*Key takeaway:* Look for what causes the trigger and what receives the effect! Would you like a real-world example?`;
    }

    if (qLower.startsWith('how')) {
      return `Here is how **${subjectTitle}** works step-by-step: 🔍\n\n1. **Initial Setup:** Look at the starting values, inputs, or conditions.\n2. **Transformation:** The core rule or force takes effect.\n3. **Final Result:** The outcome changes in direct proportion to your inputs.\n\nTry testing this out in the simulation or let me know a specific scenario you'd like to calculate!`;
    }

    // General response tailored to grade
    return `Great question about **${subjectTitle}**! 🎯\n\nIn Class ${grade} (${topic.curriculumBoard || 'NCERT / CBSE Aligned'}):\n- **Core Rule:** Every concept connects an input with a predictable, observable result.\n- **Exam Tip:** Connect the definition to an everyday example you can see or feel.\n\nWhat specific part of **${subjectTitle}** would you like to explore next?`;
  }

  function renderMessages() {
    const container = $('#tutor-messages');
    if (!container) return;

    container.innerHTML = '';
    chatHistory.forEach(msg => {
      const msgEl = el('div', { class: `tutor-bubble ${msg.sender} ${msg.isTyping ? 'typing' : ''}` });
      // Format simple bold markdown
      const formatted = msg.text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>');
      msgEl.innerHTML = formatted;
      container.appendChild(msgEl);
    });

    container.scrollTop = container.scrollHeight;
  }

  return { init, open, close, toggle, resetChatForTopic };
})();
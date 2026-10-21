const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Read optional .env if present
try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let val = match[2] || '';
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
        process.env[key] = val.trim();
      }
    });
  }
} catch (e) {
  console.warn('Note: .env reading skipped:', e.message);
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.mp3':  'audio/mpeg',
  '.wav':  'audio/wav',
};

// Helper: parse JSON body
function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 1e6) { // 1MB limit
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(new Error('Invalid JSON'));
      }
    });
  });
}

// AI Integration: Call Gemini if key available
async function callGemini(prompt, systemInstruction = '') {
  if (!GEMINI_API_KEY) return null;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  const payload = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 2000,
      responseMimeType: 'application/json'
    }
  };
  if (systemInstruction) {
    payload.systemInstruction = { parts: [{ text: systemInstruction }] };
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const errText = await res.text();
    console.error('Gemini API Error:', res.status, errText);
    return null;
  }
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (e) {
    return { rawText: text };
  }
}

// AI Integration: Call OpenAI if key available
async function callOpenAI(messages, responseFormat = null) {
  if (!OPENAI_API_KEY) return null;
  const payload = {
    model: 'gpt-4o-mini',
    messages,
    temperature: 0.7
  };
  if (responseFormat) {
    payload.response_format = responseFormat;
  }
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify(payload)
  });
  if (!res.ok) return null;
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) return null;
  try {
    return JSON.parse(content);
  } catch (e) {
    return { rawText: content };
  }
}

// Dynamic Educational Intelligence Engine for Nova Tutor
function generateDynamicTutorAnswer(question = '', topic = 'General', grade = 8) {
  const q = question.trim();
  const qLower = q.toLowerCase();

  // 1. Math calculation questions (e.g. "what is 25 * 4", "12 + 45", "100 / 5", "7 x 8")
  const mathMatch = qLower.match(/(?:what is|calculate|solve|evaluate)?\s*(-?\d+(?:\.\d+)?)\s*([\+\-\*\/xX]|times|plus|minus|divided by)\s*(-?\d+(?:\.\d+)?)/i);
  if (mathMatch) {
    const num1 = parseFloat(mathMatch[1]);
    const op = mathMatch[2].toLowerCase();
    const num2 = parseFloat(mathMatch[3]);
    let result = null;
    let opName = '';
    if (op === '+' || op === 'plus') { result = num1 + num2; opName = 'addition'; }
    else if (op === '-' || op === 'minus') { result = num1 - num2; opName = 'subtraction'; }
    else if (op === '*' || op === 'x' || op === 'times') { result = num1 * num2; opName = 'multiplication'; }
    else if (op === '/' || op === 'divided by') {
      result = num2 !== 0 ? (num1 / num2) : 'undefined (cannot divide by zero)';
      opName = 'division';
    }
    if (result !== null) {
      return `Let's solve that step-by-step! 🔢\n\n**Calculation:** ${num1} ${op} ${num2} = **${result}**\n\nHere is how it works: Using ${opName}, we combine the two quantities. Would you like to try another practice problem together?`;
    }
  }

  // 2. Greetings and self-identity
  if (qLower.match(/^(hi|hello|hey|greetings|hola|howdy|yo)\b/)) {
    return `Hey there! 👋 I'm **Nova**, your AI study coach in QuestMind!\n\nWhether you're curious about science, untangling math formulas, exploring coding, or reviewing for a quiz, I'm here to help you understand every step. What are you working on today?`;
  }
  if (qLower.includes('who are you') || qLower.includes('what is your name')) {
    return `I am **Nova**, your personal AI tutor inside QuestMind! 🤖✨\n\nMy superpower is taking tricky concepts in Science, Math, English, and Tech and breaking them down with clear everyday analogies, visual steps, and exam tips. Ask me any question, formula, or problem you want to explore!`;
  }

  // 3. Photosynthesis & Botany
  if (qLower.includes('photosynthesis') || (qLower.includes('plant') && (qLower.includes('food') || qLower.includes('sun') || qLower.includes('light')))) {
    return `Here is how **Photosynthesis** works in simple terms! 🌱\n\nPlants act like solar-powered kitchens. They take in **sunlight** (energy), absorb **water ($H_2O$)** through their roots, and inhale **carbon dioxide ($CO_2$)** through microscopic leaf pores called stomata.\n\nInside their green **chloroplasts**, they bake high-energy **glucose sugar ($C_6H_{12}O_6$)** to grow, and release fresh **oxygen ($O_2$)** for us to breathe!\n\n**The Equation:** $6CO_2 + 6H_2O + \\text{Light} \\rightarrow C_6H_{12}O_6 + 6O_2$.\n\nDid you know? The oxygen you're breathing right now came from split water molecules!`;
  }
  if (qLower.includes('chlorophyll') || qLower.includes('chloroplast')) {
    return `**Chlorophyll & Chloroplasts** are the secret to green leaves! 🍃\n\n- **Chloroplast:** The cellular organelle where photosynthesis takes place.\n- **Chlorophyll:** The green pigment packed inside thylakoid discs.\n\nChlorophyll absorbs red and blue wavelengths of sunlight but **reflects green light**, which is why leaves appear vibrant green to our eyes!`;
  }

  // 4. Perimeter, Area, Volume & Geometry
  if (qLower.includes('perimeter') || qLower.includes('area') || qLower.includes('rectangle') || qLower.includes('square')) {
    if (qLower.includes('perimeter')) {
      return `**Perimeter** is the total distance around the outside boundary of any 2D shape! 📐\n\n- **Rectangle:** $P = 2 \\times (\\text{Length} + \\text{Width})$\n- **Square:** $P = 4 \\times \\text{Side}$\n- **Triangle:** $P = a + b + c$\n\nThink of walking a dog along the outer fence of a park. The total steps you walk around the fence is the **Perimeter**!`;
    }
    return `**Area** measures the flat space inside a shape in square units ($m^2$, $cm^2$)! 📏\n\n- **Rectangle Area:** $\\text{Length} \\times \\text{Width}$\n- **Square Area:** $\\text{Side} \\times \\text{Side}$\n- **Triangle Area:** $\\frac{1}{2} \\times \\text{Base} \\times \\text{Height}$\n- **Circle Area:** $\\pi \\times r^2$\n\nAnalogy: Perimeter is the fence, while Area is the grass inside the yard!`;
  }

  // 5. Physics: Gravity, Friction, Newton's Laws
  if (qLower.includes('newton') || qLower.includes('law of motion')) {
    return `Here is **Sir Isaac Newton's Three Laws of Motion** in a nutshell! 🚀\n\n1. **1st Law (Inertia):** Objects keep doing what they're doing unless a net force stops or moves them (like wearing a seatbelt when a car brakes).\n2. **2nd Law ($F = m \\times a$):** Force equals mass times acceleration. A heavier bowling ball takes more force to accelerate than a tennis ball!\n3. **3rd Law (Action-Reaction):** For every action, there is an equal and opposite reaction! When a skateboarder jumps forward, the skateboard shoots backward.`;
  }
  if (qLower.includes('gravity')) {
    return `**Gravity** is the invisible attractive force that pulls any two objects with mass toward each other! 🌌\n\nOn Earth, gravity pulls everything down toward the planet's core at an acceleration of roughly **$9.8 \\text{ m/s}^2$**.\n\nThe greater an object's mass, the stronger its gravitational pull—which is why the gigantic Sun keeps all 8 planets locked in orbit!`;
  }
  if (qLower.includes('friction')) {
    return `**Friction** is the resisting force that occurs whenever two surfaces slide or roll across each other! ⛸️\n\n- **Without friction:** You couldn't walk, cars couldn't brake, and your shoes would slide forever like on slick ice!\n- **With friction:** Microscopic bumps on surfaces lock together, transforming kinetic energy into heat (like rubbing your hands together on a cold day).`;
  }

  // 6. Atoms, Chemistry, Periodic Table
  if (qLower.includes('atom') || qLower.includes('molecule') || qLower.includes('electron') || qLower.includes('proton')) {
    return `**Atoms** are the fundamental building blocks of everything in the universe! ⚛️\n\nEach atom has two main zones:\n1. **The Nucleus (Center):** Houses **Protons** (positive charge $+1$) and **Neutrons** (neutral $0$).\n2. **Electron Cloud (Outside):** Tiny **Electrons** (negative charge $-1$) buzzing in orbits around the nucleus.\n\nWhen atoms bond and share electrons, they form **molecules** (like two Hydrogen atoms and one Oxygen atom joining to make $H_2O$ water)!`;
  }
  if (qLower.includes('acid') || qLower.includes('base') || qLower.includes('ph')) {
    return `The **pH Scale** measures how acidic or basic a water solution is from 0 to 14! 🧪\n\n- **Acids (pH 0–6):** Taste sour, release $H^+$ hydrogen ions (e.g., lemon juice, vinegar, stomach acid).\n- **Neutral (pH 7):** Pure distilled water.\n- **Bases (pH 8–14):** Feel slippery, taste bitter, release $OH^-$ ions (e.g., baking soda, soap, bleach).`;
  }

  // 7. Cells & Genetics
  if (qLower.includes('cell') || qLower.includes('dna') || qLower.includes('mitochondria')) {
    return `**Cells** are the microscopic building blocks of all living organisms! 🔬\n\n- **Mitochondria:** The 'Powerhouse of the Cell' that burns glucose with oxygen to produce ATP cellular energy.\n- **Nucleus:** The command center that stores **DNA**—the genetic instruction manual for your traits.\n- **Plant vs Animal Cells:** Plant cells have a rigid cellulose **cell wall** and green **chloroplasts**, while animal cells have flexible membranes!`;
  }

  // 8. Water Cycle
  if (qLower.includes('water cycle') || qLower.includes('evaporation') || qLower.includes('condensation') || qLower.includes('precipitation')) {
    return `The **Water Cycle** is Earth's continuous natural recycling system! 💧\n\n1. **Evaporation:** Sunlight warms oceans and lakes, turning liquid water into invisible water vapor gas.\n2. **Condensation:** As vapor rises into the cool sky, it condenses into microscopic droplets forming clouds.\n3. **Precipitation:** When droplets grow heavy, gravity pulls them down as rain, snow, or hail!\n4. **Collection:** Rainwater flows into rivers and groundwater, and the cycle repeats forever.`;
  }

  // 9. Coding & Computer Science
  if (qLower.includes('binary') || qLower.includes('code') || qLower.includes('algorithm') || qLower.includes('variable')) {
    return `Here is how computers think! 💻\n\n- **Binary:** Computers are made of millions of tiny microscopic transistors that are either OFF ($0$) or ON ($1$). All text, photos, and games are stored as combinations of 0s and 1s!\n- **Algorithm:** A clear step-by-step recipe to solve a problem (e.g. sorting a list of numbers).\n- **Variables:** Labeled storage boxes in code that hold values (like \`score = 100\`).\n- **Loops:** Instructions that repeat an action until a condition is satisfied.`;
  }

  // 10. Fractions, Algebra & Formulas
  if (qLower.includes('fraction') || qLower.includes('algebra') || qLower.includes('equation')) {
    return `**Fractions & Algebra Essentials** 🧩\n\n- **Fractions:** Represents a piece of a whole ($\\frac{\\text{Numerator}}{\\text{Denominator}}$). To add fractions, make sure they share a common denominator first!\n- **Algebra:** The letter $x$ is just an unknown puzzle piece. If $2x + 4 = 10$, subtract 4 from both sides ($2x = 6$), then divide by 2 ($x = 3$)! Whatever you do to one side of the equals sign, you must do to the other side.`;
  }

  // 11. Astronomy & Solar System
  if (qLower.includes('planet') || qLower.includes('sun') || qLower.includes('moon') || qLower.includes('solar system') || qLower.includes('star')) {
    return `**Our Amazing Solar System** 🪐✨\n\nAt the center sits our Sun—a giant yellow dwarf star holding 99.8% of the system's mass! Orbiting around it in order:\n1. Mercury\n2. Venus\n3. Earth (our home!)\n4. Mars\n5. Jupiter (largest gas giant)\n6. Saturn (magnificent icy rings)\n7. Uranus\n8. Neptune (windy ice giant)\n\nFun fact: Light from the Sun takes roughly **8 minutes and 20 seconds** to reach your eyes on Earth!`;
  }

  // 12. Smart Contextual Synthesis based on user's exact query
  // Extract key concept from user question
  let cleanSubject = q.replace(/^(what is|what are|explain|tell me about|how does|why does|can you explain|help me with|define)\s+/i, '').replace(/[\?!.]+$/, '').trim();
  if (!cleanSubject) cleanSubject = topic;

  return `Great question about **${cleanSubject}**! 💡\n\nWhen we break down **${cleanSubject}**:\n1. **Core Idea:** It represents a fundamental principle where specific conditions produce predictable, observable results.\n2. **Everyday Analogy:** Think of it like a chain reaction in daily life—when one piece shifts, the whole system adapts to keep balance.\n3. **Practical Application:** In Grade ${grade} studies, the key to mastering this is noticing *how* changing one factor influences the outcome.\n\nWould you like me to give you a quick practice challenge or break down a specific formula for this?`;
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // CORS headers for local dev flexibility
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // ── API Routes ──

  // 1. Status & Health
  if (pathname === '/api/status' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'online',
      version: '3.5.0',
      aiConfigured: Boolean(GEMINI_API_KEY || OPENAI_API_KEY),
      aiProvider: GEMINI_API_KEY ? 'Google Gemini' : (OPENAI_API_KEY ? 'OpenAI GPT' : 'Bundled Curriculum Engine'),
      mode: (GEMINI_API_KEY || OPENAI_API_KEY) ? 'Live AI Generation' : 'Curriculum Library & Smart Generator',
      features: ['Concept Learning Room', 'Visual Simulation', 'Video Lessons', 'Phaser Runner Game', 'Adaptive Checkpoints', 'Socratic AI Tutor']
    }));
    return;
  }

  // 2. Generate or Enrich Lesson
  if (pathname === '/api/generate-lesson' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const { topic, subject = 'Science', grade = 8 } = body;
      
      let aiResult = null;
      const prompt = `You are an expert educational curriculum architect for students aged 13-18 (Grade ${grade}).
Create a comprehensive, engaging lesson for the topic "${topic}" in subject "${subject}".
Return a JSON object with:
- title: string
- subject: string
- grade: number
- hook: engaging real-world intro hook
- definition: clear grade-appropriate definition
- realLifeAnalogy: vivid everyday analogy
- coreMechanism: detailed explanation of how it works step-by-step
- keyTerms: array of { term: string, definition: string }
- commonMistakes: array of string
- checkQuestions: array of 3 questions each with { q: string, opts: [string, string, string], ans: 0|1|2, hint: string, explain: string }
- videoScenes: array of 4 scenes { title: string, narration: string, visualCue: string }`;

      if (GEMINI_API_KEY) {
        aiResult = await callGemini(prompt, 'You are an educational AI assistant for high school students. Always output valid JSON.');
      } else if (OPENAI_API_KEY) {
        aiResult = await callOpenAI([
          { role: 'system', content: 'You are an educational AI assistant. Always output valid JSON.' },
          { role: 'user', content: prompt }
        ], { type: 'json_object' });
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: true,
        isAiGenerated: Boolean(aiResult),
        provider: (GEMINI_API_KEY || OPENAI_API_KEY) ? 'AI Cloud' : 'Curriculum Generator',
        data: aiResult || {
          title: topic,
          subject,
          grade,
          hook: `Discover how ${topic} powers our understanding of ${subject}!`,
          definition: `${topic} is a fundamental concept in ${subject} that describes key principles and real-world mechanisms.`,
          realLifeAnalogy: `Think of ${topic} like an everyday system where inputs transform into outputs through clear scientific/mathematical rules.`,
          coreMechanism: `1. Initial setup and conditions\n2. Key interaction and transformation\n3. Resulting equilibrium or calculation`,
          keyTerms: [
            { term: 'Principle 1', definition: `Core foundation of ${topic}` },
            { term: 'Factor 2', definition: `Variable affecting outcome` },
            { term: 'Conservation / Balance', definition: `The invariant law governing the process` }
          ],
          commonMistakes: [
            `Confusing the cause with the effect in ${topic}`,
            `Applying 2D rules to 3D situations or forgetting units`
          ],
          checkQuestions: [
            {
              q: `What is the central principle of ${topic}?`,
              opts: [`It follows conserved physical/logical laws`, `It occurs at random`, `It only works in laboratories`],
              ans: 0,
              hint: `Think about predictability and natural order.`,
              explain: `Concepts in ${subject} are governed by consistent, observable rules.`
            }
          ],
          videoScenes: [
            { title: 'The Big Picture', narration: `Why ${topic} matters in our universe today.`, visualCue: 'Pan across vibrant real-life examples.' },
            { title: 'Under the Microscope', narration: `Breaking down the step-by-step mechanism.`, visualCue: 'Detailed animated breakdown.' },
            { title: 'Applying the Knowledge', narration: `Solving challenges using this concept.`, visualCue: 'Interactive formula and graph.' },
            { title: 'Mastery & Beyond', narration: `How this connects to future adventure levels.`, visualCue: 'Character celebrating checkpoint clearance.' }
          ]
        }
      }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: err.message }));
    }
    return;
  }

  // 3. Ask Socratic AI Tutor
  if (pathname === '/api/ask-tutor' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const { question, topic = 'General', grade = 8 } = body;

      let tutorReply = null;
      const prompt = `You are "Nova", an enthusiastic, encouraging, and friendly AI Learning Tutor for high school students aged 13-18 (Grade ${grade}).
The student is currently learning about "${topic}" and asks:
"${question}"

Respond in a warm, clear, structured manner (2-3 short paragraphs).
Use an intuitive analogy, explain the "why", and finish with a brief check-for-understanding question. Do NOT sound robotic. Keep markdown clean.`;

      if (GEMINI_API_KEY) {
        const result = await callGemini(prompt);
        tutorReply = result?.rawText || result?.text || (typeof result === 'string' ? result : JSON.stringify(result));
      } else if (OPENAI_API_KEY) {
        const result = await callOpenAI([
          { role: 'system', content: 'You are Nova, an inspiring AI learning tutor.' },
          { role: 'user', content: prompt }
        ]);
        tutorReply = result?.rawText || (typeof result === 'string' ? result : JSON.stringify(result));
      }

      if (!tutorReply) {
        tutorReply = generateDynamicTutorAnswer(question, topic, grade);
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: true,
        answer: tutorReply,
        isAiGenerated: Boolean(GEMINI_API_KEY || OPENAI_API_KEY)
      }));
    } catch (err) {
      console.error('Ask-tutor error:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: err.message }));
    }
    return;
  }

  // 4. Simplify Explanation
  if (pathname === '/api/simplify-explanation' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const { topic, strugglePoint = '' } = body;

      let simplified = null;
      if (GEMINI_API_KEY || OPENAI_API_KEY) {
        const prompt = `A 14-year-old student is having trouble understanding "${topic}", specifically struggling with: "${strugglePoint}".
Explain it using a radically simple, highly relatable analogy from sports, cooking, video games, or daily life. Keep it under 150 words.`;
        if (GEMINI_API_KEY) {
          const r = await callGemini(prompt);
          simplified = r?.rawText || (typeof r === 'string' ? r : JSON.stringify(r));
        } else {
          const r = await callOpenAI([{ role: 'user', content: prompt }]);
          simplified = r?.rawText || (typeof r === 'string' ? r : JSON.stringify(r));
        }
      }

      if (!simplified) {
        if (topic.toLowerCase().includes('photosynthesis')) {
          simplified = `Imagine a magical kitchen where the chef (chloroplast) uses free sunlight electricity, catches carbon dioxide from the air like baking flour, adds water from the sink, and bakes sweet energy cookies (glucose)! The sweet smell wafting out the kitchen window is pure fresh Oxygen! 🍪🌿`;
        } else if (topic.toLowerCase().includes('perimeter')) {
          simplified = `Imagine you are walking a friendly dog with a leash around the very outer fence of a park. You start at one corner, walk along the top edge, turn down the right edge, walk across the bottom edge, and back up the left edge. The total distance your pedometer counts is the **Perimeter**! Just sum all the edges together! 🐕🚶‍♂️`;
        } else {
          simplified = `Break it down into 3 simple pieces: What goes in (Inputs), what happens in the middle (Action), and what comes out (Result). Don't worry about memorizing heavy terms yet—focus on the flow! 💡`;
        }
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, simplified }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: err.message }));
    }
    return;
  }

  // ── Static File Serving ──
  let reqPath = parsedUrl.pathname;
  if (reqPath === '/') reqPath = '/index.html';

  const filePath = path.join(__dirname, reqPath);
  const ext = path.extname(filePath).toLowerCase();

  // Prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If client-side route fallback to index.html for SPA if not an asset
      if (!ext || ext === '.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err2, indexData) => {
          if (err2) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(indexData);
          }
        });
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      }
    } else {
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 SKILLVERSE / GAMEX Server listening on port ${PORT}`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`🤖 AI Status: ${GEMINI_API_KEY ? 'Gemini API Active' : (OPENAI_API_KEY ? 'OpenAI API Active' : 'Curriculum Engine Mode (Offline/Bundled)')}`);
  console.log(`=======================================================`);
});

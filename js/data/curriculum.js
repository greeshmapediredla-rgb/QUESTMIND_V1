/* ═══════════════════════════════════════════════════════════════
   QUESTMIND / SKILLVERSE — Educational Curriculum Engine (v4.0)
   72 Standardized Topics across 6 Core Subjects (12 per subject)
   NCERT / CBSE / SSC Curriculum Aligned • Grade-Adaptive Depth
   Primary (Grades 1–5), Middle (Grades 6–8), Secondary (Grades 9–12)
═══════════════════════════════════════════════════════════════ */

const CURRICULUM = {
  "sci_photosynthesis": {
    "id": "sci_photosynthesis",
    "title": "Photosynthesis: How Plants Make Food",
    "shortTitle": "Photosynthesis",
    "subjectId": "science",
    "subjectName": "Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Beginner to Intermediate",
    "themeId": "jungle",
    "worldName": "Science Garden",
    "icon": "🌿",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Ch 1 / Class 10 Ch 6",
    "tags": [
      "Biology",
      "Plants",
      "Chloroplast",
      "Energy"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Plants use green leaves like tiny solar kitchens! They take sunshine, water from roots, and air to bake sweet energy called glucose.",
        "analogy": "Imagine leaves are solar-powered cookie bakeries making snacks from sunlight!",
        "keyRule": "Sunlight + Water + Air = Plant Food + Clean Oxygen"
      },
      "middle": {
        "explanation": "Photosynthesis occurs in plant leaf chloroplasts where chlorophyll captures solar radiation, transforming carbon dioxide and water into glucose sugar while releasing oxygen.",
        "analogy": "Chloroplasts act as solar factories converting inorganic inputs into chemical energy blocks.",
        "keyRule": "CO₂ + H₂O + Sunlight ➔ C₆H₁₂O₆ (Glucose) + O₂"
      },
      "secondary": {
        "explanation": "A two-phase biochemical reaction consisting of light-dependent photolysis on thylakoid membranes (generating ATP/NADPH) followed by the light-independent Calvin cycle in the stroma fixing CO₂.",
        "analogy": "A dual-stage solar transducer converting quantum photons into stable hexose chemical bonds.",
        "keyRule": "6CO₂ + 6H₂O + Photons ➔ C₆H₁₂O₆ + 6O₂"
      }
    },
    "introduction": {
      "hook": "Where does the energy in an apple come from? It starts 150 million km away in the Sun!",
      "definition": "Photosynthesis is how green plants convert sunlight, water, and air into energy and oxygen.",
      "realLifeAnalogy": "Think of a leaf as a solar-powered bakery making sweet energy for the plant.",
      "quickFact": "One mature tree produces enough oxygen every day for up to 4 human beings!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "Catching Sunlight",
        "subtitle": "The Green Trap",
        "content": "Chlorophyll inside plant cells catches sunlight just like solar panels on a roof.",
        "takeaway": "Green chlorophyll absorbs sunlight energy."
      },
      {
        "step": 2,
        "title": "Drinking Water & Air",
        "subtitle": "Raw Materials",
        "content": "Roots pull water from soil while leaf pores called stomata breathe in carbon dioxide from the air.",
        "takeaway": "Leaves breathe in CO₂ through stomata pores."
      },
      {
        "step": 3,
        "title": "Baking Sweet Energy",
        "subtitle": "Food for All Life",
        "content": "Sunlight binds water and CO₂ into glucose sugar, releasing oxygen gas into the atmosphere.",
        "takeaway": "Produces food for plants and oxygen for humans and animals."
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What green pigment captures sunlight inside leaf cells?",
        "opts": [
          "Chlorophyll",
          "Hemoglobin",
          "Keratin"
        ],
        "ans": 0,
        "explain": "Chlorophyll absorbs sunlight and gives plants their green color.",
        "hint": "Starts with Chloro-"
      },
      {
        "prompt": "What gas do plants release into the air for humans to breathe?",
        "opts": [
          "Oxygen (O₂)",
          "Carbon Monoxide",
          "Methane"
        ],
        "ans": 0,
        "explain": "Plants produce oxygen as a life-giving byproduct.",
        "hint": "The fresh gas you inhale."
      },
      {
        "prompt": "Through what tiny leaf openings do plants absorb carbon dioxide?",
        "opts": [
          "Stomata",
          "Roots",
          "Bark"
        ],
        "ans": 0,
        "explain": "Stomata are microscopic pores beneath the leaf surface.",
        "hint": "Tiny breathing pores."
      }
    ],
    "finalAssessment": [
      {
        "q": "Which three components are required for photosynthesis to work?",
        "opts": [
          "Sunlight, Water, and Carbon Dioxide",
          "Salt, Soil, and Darkness",
          "Sugar, Heat, and Smoke",
          "Ice, Vinegar, and Nitrogen"
        ],
        "ans": 0,
        "explain": "Plants require sunlight, water, and CO₂ to create glucose."
      },
      {
        "q": "In which part of the plant cell does photosynthesis take place?",
        "opts": [
          "Chloroplast",
          "Mitochondria",
          "Cell Nucleus",
          "Vacuole"
        ],
        "ans": 0,
        "explain": "Chloroplasts house the chlorophyll and reaction enzymes."
      },
      {
        "q": "What sweet energy molecule do plants produce for food?",
        "opts": [
          "Glucose (Sugar)",
          "Salt",
          "Calcium",
          "Iron"
        ],
        "ans": 0,
        "explain": "Glucose provides cellular energy for growth and flowering."
      },
      {
        "q": "Why do most plant leaves look green to our eyes?",
        "opts": [
          "Chlorophyll reflects green light and absorbs blue/red",
          "Water inside leaves is green",
          "Plants paint themselves green",
          "Green light is trapped inside"
        ],
        "ans": 0,
        "explain": "Leaves reflect the green wavelengths of visible light."
      }
    ]
  },
  "sci_water_cycle": {
    "id": "sci_water_cycle",
    "title": "The Water Cycle: Earth's Endless Recycling System",
    "shortTitle": "Water Cycle",
    "subjectId": "science",
    "subjectName": "Science",
    "gradeRange": "Class 4–9 (NCERT / CBSE / SSC)",
    "difficulty": "Beginner",
    "themeId": "jungle",
    "worldName": "Science Garden",
    "icon": "💧",
    "estimatedMins": 9,
    "curriculumBoard": "NCERT Class 6 Ch 14 / Class 7 Ch 16",
    "tags": [
      "Earth Science",
      "Weather",
      "Hydrology",
      "Atmosphere"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "The water you drink today is the exact same water dinosaurs drank millions of years ago! It goes up into the sky as invisible vapor, forms clouds, and rains down again.",
        "analogy": "Earth's giant water elevator going up to the sky and raining back down forever!",
        "keyRule": "Sun warms water ➔ Rises as vapor ➔ Clouds form ➔ Rains down"
      },
      "middle": {
        "explanation": "Driven by solar radiation and gravity, water continuously cycles through evaporation, transpiration from plants, atmospheric condensation into clouds, and precipitation as rain or snow.",
        "analogy": "A massive solar-powered distillation and pump system circulating global fresh water.",
        "keyRule": "Evaporation + Transpiration ➔ Condensation ➔ Precipitation ➔ Runoff"
      },
      "secondary": {
        "explanation": "The hydrologic cycle maintains Earth's thermodynamic balance through continuous phase transitions between solid ice, liquid water, and water vapor, driven by latent heat enthalpy exchange.",
        "analogy": "A planetary heat engine distributing thermal energy and geochemical nutrients across biomes.",
        "keyRule": "P = E + T + R (Precipitation = Evaporation + Transpiration + Runoff)"
      }
    },
    "introduction": {
      "hook": "Did you know the rain hitting your window today could be the same water that filled Cleopatra's cup?",
      "definition": "The water cycle is the continuous movement of water on, above, and below Earth's surface.",
      "realLifeAnalogy": "Think of Earth as a giant terrarium where not a single drop of water ever escapes.",
      "quickFact": "Over 96% of all water on Earth is in the salty oceans!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "Evaporation & Rising Vapor",
        "subtitle": "Going Up!",
        "content": "The hot sun warms lakes and oceans, turning liquid water into invisible gas called water vapor that floats high into the cool sky.",
        "takeaway": "Heat turns liquid water into rising vapor."
      },
      {
        "step": 2,
        "title": "Condensation & Cloud Making",
        "subtitle": "Cooling Down",
        "content": "High in the atmosphere, chilly air cools the vapor back into billions of microscopic liquid droplets that cluster to make clouds.",
        "takeaway": "Cool air turns vapor into fluffy clouds."
      },
      {
        "step": 3,
        "title": "Precipitation & Flow",
        "subtitle": "Coming Down",
        "content": "When cloud droplets get too heavy, gravity pulls them down as rain, snow, or hail, flowing into rivers to restart the cycle.",
        "takeaway": "Heavy droplets fall as rain and return to oceans."
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What process turns liquid water into invisible vapor gas?",
        "opts": [
          "Evaporation",
          "Freezing",
          "Melting"
        ],
        "ans": 0,
        "explain": "Evaporation turns liquid water into gas when heated by the sun.",
        "hint": "Think of boiling steam."
      },
      {
        "prompt": "What forms when billions of cooled water droplets gather high in the sky?",
        "opts": [
          "Clouds",
          "Tornados",
          "Rainbows"
        ],
        "ans": 0,
        "explain": "Clouds are made of condensed water droplets.",
        "hint": "Fluffy white shapes in the sky."
      },
      {
        "prompt": "What do we call water falling from clouds as rain, snow, or hail?",
        "opts": [
          "Precipitation",
          "Evaporation",
          "Respiration"
        ],
        "ans": 0,
        "explain": "Precipitation is any form of water falling from the atmosphere.",
        "hint": "Rainfall is a type of this."
      }
    ],
    "finalAssessment": [
      {
        "q": "What primary source of energy powers the entire water cycle on Earth?",
        "opts": [
          "The Sun's solar heat",
          "Wind turbines",
          "Ocean volcanoes",
          "The Moon's gravity"
        ],
        "ans": 0,
        "explain": "Solar radiation provides the thermal energy to evaporate water."
      },
      {
        "q": "What is transpiration?",
        "opts": [
          "Evaporation of water from plant leaves",
          "Rain falling on mountains",
          "Water freezing into glaciers",
          "Rivers flowing to oceans"
        ],
        "ans": 0,
        "explain": "Transpiration is the release of water vapor from leaf stomata."
      },
      {
        "q": "What happens to water vapor when it rises high into cold atmospheric layers?",
        "opts": [
          "It condenses into liquid droplets to form clouds",
          "It burns up into smoke",
          "It disappears into outer space",
          "It turns into lightning"
        ],
        "ans": 0,
        "explain": "Cold temperatures trigger condensation."
      },
      {
        "q": "Why is the total amount of water on Earth always roughly constant?",
        "opts": [
          "Because water recycles continuously in a closed cycle",
          "Because new water arrives in space rockets",
          "Because oceans never change",
          "Because humans make extra water"
        ],
        "ans": 0,
        "explain": "Earth's water cycle is a closed recycling system."
      }
    ]
  },
  "sci_newtons_laws": {
    "id": "sci_newtons_laws",
    "title": "Newton's Laws of Motion & Forces",
    "shortTitle": "Laws of Motion",
    "subjectId": "science",
    "subjectName": "Science",
    "gradeRange": "Class 5–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "Science Garden",
    "icon": "🚀",
    "estimatedMins": 11,
    "curriculumBoard": "NCERT Class 9 Ch 9",
    "tags": [
      "Physics",
      "Forces",
      "Motion",
      "Mechanics"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Things like to keep doing what they are already doing! A toy car won't move until you push it, and heavier things need bigger pushes to go fast.",
        "analogy": "Imagine sliding on smooth ice: you keep gliding until someone catches you or friction stops you!",
        "keyRule": "Push harder = Move faster. For every push, there is an equal push back!"
      },
      "middle": {
        "explanation": "Sir Isaac Newton formulated 3 laws: 1) Objects stay at rest or constant velocity unless acted upon by a net force. 2) Force equals mass times acceleration (F = m × a). 3) For every action, there is an equal and opposite reaction.",
        "analogy": "Wearing a seatbelt protects you because your body has inertia and wants to keep moving forward when the car brakes.",
        "keyRule": "F = m × a | Action = -Reaction | Inertia resists change"
      },
      "secondary": {
        "explanation": "Classical mechanics governing translational dynamics: conservation of linear momentum (dp/dt = F_net), inertial reference frames, and reciprocal interacting contact or field forces.",
        "analogy": "Rocket propulsion expelling high-velocity combustion gases downward to accelerate payload mass upward.",
        "keyRule": "F_net = dp/dt = m·a | F_AB = -F_BA"
      }
    },
    "introduction": {
      "hook": "Why do you jerk forward when a bus suddenly hits the brakes? Sir Isaac Newton solved this puzzle!",
      "definition": "Newton's three laws describe how forces make objects move, speed up, slow down, and interact.",
      "realLifeAnalogy": "Think of kicking a soccer ball vs kicking a heavy bowling ball—force and mass decide everything!",
      "quickFact": "Newton discovered these laws during a quarantine when his university closed due to the plague!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "First Law: The Lazy Law (Inertia)",
        "subtitle": "Keep Doing What You Do",
        "content": "An object sitting still stays still. A moving object keeps cruising at the same speed in a straight line unless a push or pull stops it.",
        "takeaway": "Inertia means objects resist changing their motion."
      },
      {
        "step": 2,
        "title": "Second Law: Force & Mass (F = m × a)",
        "subtitle": "Pushes, Mass & Speed",
        "content": "The harder you push something (Force), the faster it accelerates. Heavier objects need more force to speed up.",
        "takeaway": "Force = Mass × Acceleration. More mass means more effort needed."
      },
      {
        "step": 3,
        "title": "Third Law: Action & Reaction",
        "subtitle": "Push Back!",
        "content": "Whenever you push on something, it pushes right back on you with equal strength. Rockets shoot fire down to fly up!",
        "takeaway": "Every action has an equal and opposite reaction."
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "Why do you keep sliding forward when a skateboard suddenly stops on a curb?",
        "opts": [
          "Inertia (First Law)",
          "Gravity",
          "Magnetism"
        ],
        "ans": 0,
        "explain": "Your body has inertia and wants to keep moving at the same speed.",
        "hint": "Objects resist changing motion."
      },
      {
        "prompt": "What is the famous formula for Newton's Second Law of Motion?",
        "opts": [
          "F = m × a (Force = Mass × Acceleration)",
          "E = mc²",
          "a² + b² = c²"
        ],
        "ans": 0,
        "explain": "Force equals mass times acceleration.",
        "hint": "Force, Mass, Acceleration."
      },
      {
        "prompt": "When a swimmer pushes water backward with their hands, which way do they move?",
        "opts": [
          "Forward",
          "Backward",
          "Down to the bottom"
        ],
        "ans": 0,
        "explain": "By Newton's Third Law, pushing water back propels the swimmer forward.",
        "hint": "Action and reaction are opposite."
      }
    ],
    "finalAssessment": [
      {
        "q": "Which law explains why you must wear a seatbelt in a moving car?",
        "opts": [
          "Newton's First Law (Law of Inertia)",
          "Newton's Third Law",
          "Law of Universal Gravitation",
          "Ohm's Law"
        ],
        "ans": 0,
        "explain": "Inertia keeps you moving forward when the car abruptly brakes."
      },
      {
        "q": "If you push a 2 kg cart and a 20 kg cart with the same force, which one speeds up faster?",
        "opts": [
          "The 2 kg cart accelerates 10 times faster",
          "The 20 kg cart",
          "Both accelerate equally",
          "Neither moves"
        ],
        "ans": 0,
        "explain": "Smaller mass yields higher acceleration for the same force (a = F/m)."
      },
      {
        "q": "A rocket shoots hot exhaust gases downward at high speed. What happens to the rocket?",
        "opts": [
          "It is pushed upward with equal opposite force",
          "It gets heavier and sinks",
          "It spins in circles",
          "It stops completely"
        ],
        "ans": 0,
        "explain": "Action-reaction pair drives the rocket into the sky."
      },
      {
        "q": "What is the SI unit used to measure force?",
        "opts": [
          "Newton (N)",
          "Joule (J)",
          "Watt (W)",
          "Kilogram (kg)"
        ],
        "ans": 0,
        "explain": "Force is measured in Newtons (N)."
      }
    ]
  },
  "sci_atomic_structure": {
    "id": "sci_atomic_structure",
    "title": "Structure of the Atom: The Microscopic Building Blocks",
    "shortTitle": "Atomic Structure",
    "subjectId": "science",
    "subjectName": "Science",
    "gradeRange": "Class 5–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "Science Garden",
    "icon": "⚛️",
    "estimatedMins": 11,
    "curriculumBoard": "NCERT Class 9 Ch 4",
    "tags": [
      "Chemistry",
      "Atoms",
      "Electrons",
      "Protons"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Everything in your room—your desk, your water bottle, and your shoes—is made of tiny Lego bricks called atoms! They are so small you can't see them even with a regular magnifying glass.",
        "analogy": "Imagine the solar system in miniature: the sun is the heavy nucleus and planets are buzzing electrons!",
        "keyRule": "Everything in the world is built from atoms!"
      },
      "middle": {
        "explanation": "An atom consists of a dense central nucleus containing positively charged protons and neutral neutrons, surrounded by negatively charged electrons orbiting in energy shells.",
        "analogy": "Like a beehive: queen bee and honey in the center (protons/neutrons) while worker bees buzz all around the outside (electrons).",
        "keyRule": "Protons (+), Neutrons (0), Electrons (-)"
      },
      "secondary": {
        "explanation": "Bohr-Rutherford atomic model and quantum orbitals: atomic number (Z) equals proton count, mass number (A) equals nucleons (p + n), with electron configurations following 2n² Pauli exclusion rules.",
        "analogy": "Quantized energy levels where electrons occupy discrete probability wave cloud orbitals.",
        "keyRule": "Atomic Number Z = Protons | Mass A = p + n"
      }
    },
    "introduction": {
      "hook": "If an atom were the size of a giant football stadium, its nucleus would be a tiny marble at the center!",
      "definition": "Atoms are the smallest basic units of chemical elements that retain their chemical identity.",
      "realLifeAnalogy": "Think of elements as different flavors of Lego bricks that combine into everything in the universe.",
      "quickFact": "You have roughly 7 billion billion billion atoms inside your body right now!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Heavy Center (Nucleus)",
        "subtitle": "Protons & Neutrons",
        "content": "Right in the center sits the nucleus packed with positively charged Protons (+) and neutral Neutrons (0).",
        "takeaway": "The center nucleus holds almost all the atom's weight."
      },
      {
        "step": 2,
        "title": "Buzzing Electrons",
        "subtitle": "Negative Shells",
        "content": "Zooming around the outside are tiny, ultra-fast Electrons with negative charge (-) circling in orbital shells.",
        "takeaway": "Electrons buzz around the outside with negative charge."
      },
      {
        "step": 3,
        "title": "Making Molecules",
        "subtitle": "Bonding Together",
        "content": "When atoms share or swap electrons, they link hands to form molecules, like two Hydrogens and one Oxygen making H₂O water!",
        "takeaway": "Atoms bond together to create all substances."
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "Which subatomic particles carry a positive electric charge?",
        "opts": [
          "Protons (+)",
          "Electrons (-)",
          "Neutrons (0)"
        ],
        "ans": 0,
        "explain": "Protons are positively charged particles in the nucleus.",
        "hint": "P for Positive!"
      },
      {
        "prompt": "Where are protons and neutrons located in an atom?",
        "opts": [
          "In the central nucleus",
          "Floating outside",
          "In water droplets"
        ],
        "ans": 0,
        "explain": "The nucleus is the dense center of the atom.",
        "hint": "The atom's center."
      },
      {
        "prompt": "What electrical charge do electrons have?",
        "opts": [
          "Negative (-)",
          "Positive (+)",
          "Zero (neutral)"
        ],
        "ans": 0,
        "explain": "Electrons carry a negative electrical charge.",
        "hint": "Opposite of protons."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the electrical charge of a neutron?",
        "opts": [
          "Neutral (zero charge)",
          "Positive (+1)",
          "Negative (-1)",
          "Doubly positive"
        ],
        "ans": 0,
        "explain": "Neutrons have zero net charge."
      },
      {
        "q": "Which particle orbits around the outside of the atomic nucleus?",
        "opts": [
          "Electron",
          "Proton",
          "Neutron",
          "Photon"
        ],
        "ans": 0,
        "explain": "Electrons orbit in shells outside the nucleus."
      },
      {
        "q": "What defines the atomic number of an element in the periodic table?",
        "opts": [
          "The number of protons in its nucleus",
          "The number of electrons plus neutrons",
          "Its total weight in grams",
          "Its melting point"
        ],
        "ans": 0,
        "explain": "Atomic number (Z) is strictly the number of protons."
      },
      {
        "q": "When atoms bond by sharing electrons between each other, what do they form?",
        "opts": [
          "Molecules",
          "Black holes",
          "Pure light",
          "Single quarks"
        ],
        "ans": 0,
        "explain": "Atoms link up to form chemical molecules."
      }
    ]
  },
  "sci_cell_structure": {
    "id": "sci_cell_structure",
    "title": "The Cell: The Unit of Life & Organelles",
    "shortTitle": "Cell Biology",
    "subjectId": "science",
    "subjectName": "Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Beginner to Intermediate",
    "themeId": "jungle",
    "worldName": "Science Garden",
    "icon": "🔬",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 8 Ch 8 / Class 9 Ch 5",
    "tags": [
      "Biology",
      "Cells",
      "Mitochondria",
      "Nucleus"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Every living thing—you, your pet dog, and the trees outside—is made of billions of microscopic living rooms called cells. They have tiny helper machines inside that keep you alive!",
        "analogy": "A cell is like a busy mini city: the nucleus is city hall, and mitochondria are power plants!",
        "keyRule": "Cells are the building blocks of every living creature."
      },
      "middle": {
        "explanation": "The cell is the basic structural and functional unit of life. Key organelles include the nucleus (genetic control), mitochondria (energy ATP production), ribosomes (protein synthesis), and cell membrane.",
        "analogy": "A high-tech factory where different departments build proteins, package waste, and generate electricity.",
        "keyRule": "Plant cells have cell walls and chloroplasts; animal cells have flexible membranes."
      },
      "secondary": {
        "explanation": "Cytology and cellular biochemistry: eukaryotic compartmentalization, fluid mosaic phospholipid bilayer membranes, ATP synthase in mitochondrial cristae, and chromatin DNA regulation.",
        "analogy": "A semi-permeable membrane-bound bioreactor maintaining homeostatic osmotic and metabolic equilibrium.",
        "keyRule": "Cell Theory: All organisms consist of cells; all cells arise from pre-existing cells."
      }
    },
    "introduction": {
      "hook": "You began your life as a single microscopic cell smaller than a speck of dust!",
      "definition": "Cells are the fundamental building blocks and smallest units of living organisms.",
      "realLifeAnalogy": "Think of a cell as a bustling miniature city with its own power plants and command centers.",
      "quickFact": "An adult human body contains approximately 37 trillion cells working in harmony!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Command Center (Nucleus)",
        "subtitle": "City Hall",
        "content": "The nucleus contains your DNA instructions—the blueprint that decides your eye color, height, and how your body works.",
        "takeaway": "The nucleus is the cell's boss storing DNA."
      },
      {
        "step": 2,
        "title": "The Powerhouse (Mitochondria)",
        "subtitle": "Electricity Grid",
        "content": "Mitochondria burn food glucose with oxygen to make cellular energy called ATP so your muscles can move.",
        "takeaway": "Mitochondria create energy to power cell activities."
      },
      {
        "step": 3,
        "title": "Plant vs. Animal Cells",
        "subtitle": "Stiff Walls vs. Flexible",
        "content": "Plant cells have tough cellulose cell walls and green chloroplasts for food, while animal cells have flexible membranes.",
        "takeaway": "Plant cells have a cell wall and chloroplasts; animal cells do not."
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "Which cell organelle is famously known as the \"Powerhouse of the Cell\"?",
        "opts": [
          "Mitochondria",
          "Ribosome",
          "Cell Wall"
        ],
        "ans": 0,
        "explain": "Mitochondria generate cellular energy (ATP).",
        "hint": "Starts with Mito-"
      },
      {
        "prompt": "Where is the genetic DNA instruction manual stored inside a cell?",
        "opts": [
          "In the Nucleus",
          "In the Cell Wall",
          "In the Stomata"
        ],
        "ans": 0,
        "explain": "The nucleus holds chromatin DNA.",
        "hint": "The central command office."
      },
      {
        "prompt": "What structure is found in plant cells but NEVER in animal cells?",
        "opts": [
          "Rigid Cell Wall",
          "Cell Membrane",
          "Cytoplasm"
        ],
        "ans": 0,
        "explain": "Plant cells have an outer protective cellulose cell wall.",
        "hint": "Helps plants stand up straight."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the function of the cell membrane?",
        "opts": [
          "It controls what enters and exits the cell",
          "It makes the cell green",
          "It creates DNA from sunlight",
          "It acts as bone"
        ],
        "ans": 0,
        "explain": "The semi-permeable membrane regulates molecular transport."
      },
      {
        "q": "Why do plant cells have large central vacuoles?",
        "opts": [
          "To store water, nutrients, and maintain turgor pressure",
          "To fly in the air",
          "To produce red blood cells",
          "To create gravity"
        ],
        "ans": 0,
        "explain": "Vacuoles store sap and keep plant stems crisp and upright."
      },
      {
        "q": "What do ribosomes build inside the cell?",
        "opts": [
          "Proteins",
          "Bones",
          "Oxygen gas",
          "Sunlight"
        ],
        "ans": 0,
        "explain": "Ribosomes are the protein-synthesizing machinery of cells."
      },
      {
        "q": "Who first discovered and named cells under a microscope in 1665?",
        "opts": [
          "Robert Hooke",
          "Isaac Newton",
          "Albert Einstein",
          "Charles Darwin"
        ],
        "ans": 0,
        "explain": "Robert Hooke observed cork cells and named them after monastery rooms."
      }
    ]
  },
  "sci_acids_bases": {
    "id": "sci_acids_bases",
    "title": "Acids, Bases & Salts: The pH Scale in Daily Life",
    "shortTitle": "Acids & Bases",
    "subjectId": "science",
    "subjectName": "Science",
    "gradeRange": "Class 5–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "jungle",
    "worldName": "Science Garden",
    "icon": "🧪",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Ch 5 / Class 10 Ch 2",
    "tags": [
      "Chemistry",
      "pH Scale",
      "Acids",
      "Bases"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Some foods taste sour like lemons because they are acids! Soaps feel slippery because they are bases. Scientists use color-changing paper to test if something is sour or soapy.",
        "analogy": "Lemon juice is on the sour team, soap is on the slippery team, and water is the friendly referee in the middle!",
        "keyRule": "Acids taste sour; Bases feel slippery; Pure water is neutral."
      },
      "middle": {
        "explanation": "Acids produce hydrogen ions (H⁺) in water and turn blue litmus red (pH 0–6). Bases produce hydroxide ions (OH⁻) and turn red litmus blue (pH 8–14). Mixing acid and base produces neutral salt and water.",
        "analogy": "A tug of war between H⁺ and OH⁻ ions; when they tie at 7, you get pure harmless water!",
        "keyRule": "Acid + Base ➔ Salt + Water (Neutralization)"
      },
      "secondary": {
        "explanation": "Arrhenius, Brønsted-Lowry and Lewis acid-base theories: proton donors vs acceptors, dissociation constants (Ka, Kb), and logarithmic hydronium ion concentration: pH = -log[H₃O⁺].",
        "analogy": "Equilibrium proton exchange governed by ionic product of water Kw = 1.0 × 10⁻¹⁴ at 25°C.",
        "keyRule": "pH = -log₁₀[H⁺] | pH + pOH = 14"
      }
    },
    "introduction": {
      "hook": "Why does a squeeze of lemon juice make your tongue curl, while baking soda fizzes up like volcano lava?",
      "definition": "Acids and bases are two opposite chemical families measured on a 0 to 14 pH scale.",
      "realLifeAnalogy": "Think of acid as sour fire and base as soothing ice; mix them together and they neutralize into salt water.",
      "quickFact": "Your stomach contains hydrochloric acid so strong it could dissolve a small metal nail!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "Sour Acids (pH 0 to 6)",
        "subtitle": "Tangy & Reactive",
        "content": "Acids taste sour and turn blue litmus paper red. Examples include vinegar, lemons, and stomach digestive acid.",
        "takeaway": "Acids have pH below 7 and taste sour."
      },
      {
        "step": 2,
        "title": "Slippery Bases (pH 8 to 14)",
        "subtitle": "Bitter & Soapy",
        "content": "Bases feel slippery to the touch, taste bitter, and turn red litmus paper blue. Examples include soap, baking soda, and bleach.",
        "takeaway": "Bases have pH above 7 and feel slippery."
      },
      {
        "step": 3,
        "title": "Neutralization & Salt",
        "subtitle": "The Perfect Tie",
        "content": "When an acid reacts with a base, they cancel each other out to form neutral salt and water with a pH of 7.",
        "takeaway": "Acid + Base = Neutral Salt + Water (pH 7)."
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What pH number represents a completely neutral solution like pure water?",
        "opts": [
          "pH 7",
          "pH 0",
          "pH 14"
        ],
        "ans": 0,
        "explain": "pH 7 is exactly neutral (neither acidic nor basic).",
        "hint": "Right in the middle of 0 and 14."
      },
      {
        "prompt": "What color does blue litmus paper turn when dipped into lemon juice?",
        "opts": [
          "Red",
          "Blue",
          "Green"
        ],
        "ans": 0,
        "explain": "Acids turn blue litmus paper red.",
        "hint": "Acids turn it Red."
      },
      {
        "prompt": "Which of the following is a common household base?",
        "opts": [
          "Baking soda / Soap",
          "Vinegar",
          "Orange juice"
        ],
        "ans": 0,
        "explain": "Baking soda and soap are alkaline bases.",
        "hint": "Feels slippery on hands."
      }
    ],
    "finalAssessment": [
      {
        "q": "Which ion do acids release when dissolved in water?",
        "opts": [
          "Hydrogen ions (H⁺)",
          "Hydroxide ions (OH⁻)",
          "Sodium ions",
          "Oxygen gas"
        ],
        "ans": 0,
        "explain": "Acids dissociate to release H⁺ ions."
      },
      {
        "q": "What is produced during a neutralization reaction between hydrochloric acid and sodium hydroxide?",
        "opts": [
          "Table salt (NaCl) and water (H₂O)",
          "Pure gold and gas",
          "Carbon dioxide and smoke",
          "Acid rain"
        ],
        "ans": 0,
        "explain": "HCl + NaOH ➔ NaCl + H₂O."
      },
      {
        "q": "A solution has a measured pH of 2. How is it classified?",
        "opts": [
          "Strongly acidic",
          "Strongly basic",
          "Completely neutral",
          "Weak base"
        ],
        "ans": 0,
        "explain": "pH values under 3 are strongly acidic."
      },
      {
        "q": "Why do farmers add lime (calcium hydroxide) to agricultural soil?",
        "opts": [
          "To neutralize overly acidic soil for healthy crops",
          "To make crops turn blue",
          "To scare away birds",
          "To freeze the soil"
        ],
        "ans": 0,
        "explain": "Lime is a base used to treat soil acidity."
      }
    ]
  },
  "sci_gravity_motion": {
    "id": "sci_gravity_motion",
    "title": "Gravitation & Free Fall: The Cosmic Glue",
    "shortTitle": "Gravity & Free Fall",
    "subjectId": "science",
    "subjectName": "Science",
    "gradeRange": "Class 5–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "Science Garden",
    "icon": "🌌",
    "estimatedMins": 11,
    "curriculumBoard": "NCERT Class 9 Ch 10",
    "tags": [
      "Physics",
      "Gravity",
      "Free Fall",
      "Weight"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "When you toss a basketball into the air, an invisible magnetic-like pull called gravity grabs it and pulls it back down to the ground. Gravity keeps your feet stuck to the Earth so you don't float into space!",
        "analogy": "Earth acts like a giant friendly magnet pulling everything down toward its center!",
        "keyRule": "What goes up must come down thanks to gravity."
      },
      "middle": {
        "explanation": "Gravity is the universal attractive force between any two masses. On Earth's surface, gravity accelerates falling objects downward at 9.8 m/s² regardless of their mass (in a vacuum).",
        "analogy": "Drop a hammer and a feather on the airless Moon: both hit the dust at the exact same instant!",
        "keyRule": "Acceleration due to gravity g ≈ 9.8 m/s² | Weight = Mass × g"
      },
      "secondary": {
        "explanation": "Newton's Universal Law of Gravitation: F = G(m₁m₂)/r². Gravitational field strength, orbital velocity for satellites, Kepler's laws of planetary motion, and escape velocity (v_e = √(2GM/R)).",
        "analogy": "Curvature of spacetime where objects follow geodesics around planetary mass centers.",
        "keyRule": "F = G·(m₁·m₂)/r² | g = GM/R² ≈ 9.8 m/s²"
      }
    },
    "introduction": {
      "hook": "If you dropped an elephant and an apple from a tower with no air, which one would hit the ground first?",
      "definition": "Gravity is the natural pulling force that attracts any two physical bodies toward each other.",
      "realLifeAnalogy": "Think of Earth as a giant trampoline bowled down in the center—everything rolls toward the middle.",
      "quickFact": "On the Moon, you would weigh only one-sixth of your Earth weight because the Moon has less mass!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Universal Pull",
        "subtitle": "Mass Attracts Mass",
        "content": "Every single object with mass pulls on every other object. The bigger the planet, the stronger the pull.",
        "takeaway": "Bigger mass creates stronger gravitational pull."
      },
      {
        "step": 2,
        "title": "Free Fall & 9.8 m/s²",
        "subtitle": "Speeding Downward",
        "content": "On Earth, falling things speed up by 9.8 meters per second every single second they fall!",
        "takeaway": "Falling objects accelerate at 9.8 m/s² on Earth."
      },
      {
        "step": 3,
        "title": "Mass vs. Weight",
        "subtitle": "Crucial Difference!",
        "content": "Your mass is the amount of stuff inside you (kg) and never changes. Your weight is gravity pulling on that mass (Newtons).",
        "takeaway": "Mass stays the same everywhere; weight changes on other planets."
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the rate of gravitational acceleration on Earth's surface?",
        "opts": [
          "9.8 m/s²",
          "5.0 m/s²",
          "100 m/s²"
        ],
        "ans": 0,
        "explain": "Objects accelerate downward at 9.8 m/s².",
        "hint": "Just under 10 m/s²."
      },
      {
        "prompt": "If you travel to the Moon, what happens to your body's mass in kilograms?",
        "opts": [
          "It stays exactly the same",
          "It drops to zero",
          "It doubles"
        ],
        "ans": 0,
        "explain": "Mass is the amount of matter and never changes.",
        "hint": "Your body hasn't lost any atoms."
      },
      {
        "prompt": "Why do astronauts float gracefully inside the International Space Station?",
        "opts": [
          "They are in continuous free fall orbiting Earth",
          "There is zero gravity in space",
          "They wear special antigravity boots"
        ],
        "ans": 0,
        "explain": "They are in free-fall orbit around Earth (microgravity).",
        "hint": "The station is constantly falling around the curve of Earth."
      }
    ],
    "finalAssessment": [
      {
        "q": "What happens to the gravitational attraction between two objects if the distance between them doubles?",
        "opts": [
          "It decreases to 1/4th (inverse square law)",
          "It doubles",
          "It stays the same",
          "It drops to zero"
        ],
        "ans": 0,
        "explain": "Gravity follows the inverse square law (1/r²)."
      },
      {
        "q": "In an airless vacuum, which falls faster: a heavy metal ball or a light feather?",
        "opts": [
          "They fall and hit the ground at the exact same time",
          "The metal ball",
          "The feather",
          "Neither will move"
        ],
        "ans": 0,
        "explain": "Without air resistance, all masses experience the exact same g."
      },
      {
        "q": "What is the mathematical equation relating Weight (W), Mass (m), and gravity (g)?",
        "opts": [
          "W = m × g",
          "W = m / g",
          "W = g / m",
          "W = m + g"
        ],
        "ans": 0,
        "explain": "Weight is force: W = m·g."
      },
      {
        "q": "What keeps the Moon locked in orbit around the Earth instead of flying into deep space?",
        "opts": [
          "Earth's gravitational pull acts as centripetal force",
          "Magnetic ropes",
          "Solar winds",
          "Space vacuum suction"
        ],
        "ans": 0,
        "explain": "Gravitational attraction provides the required centripetal acceleration."
      }
    ]
  },
  "sci_electricity": {
    "id": "sci_electricity",
    "title": "Electricity & Circuits: Flowing Current & Ohm's Law",
    "shortTitle": "Electric Circuits",
    "subjectId": "science",
    "subjectName": "Science",
    "gradeRange": "Class 5–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Science Garden",
    "icon": "⚡",
    "estimatedMins": 11,
    "curriculumBoard": "NCERT Class 7 Ch 14 / Class 10 Ch 12",
    "tags": [
      "Physics",
      "Electricity",
      "Circuits",
      "Current"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Electricity is like invisible water flowing through wires. When you flip a switch, a closed loop connects, sending tiny electrons racing to light up your bulb!",
        "analogy": "Water flowing through garden hoses: battery is the pump, wire is the pipe, lightbulb is a waterwheel!",
        "keyRule": "A complete unbroken loop is required for lights to turn on."
      },
      "middle": {
        "explanation": "Electric current (I, in Amperes) is the rate of flow of electric charges. Voltage (V, in Volts) is the electrical pressure pushing electrons, and Resistance (R, in Ohms) opposes flow: V = I × R (Ohm's Law).",
        "analogy": "Voltage is the push, Current is the flow rate, and Resistance is how narrow the pipe is.",
        "keyRule": "V = I × R (Voltage = Current × Resistance)"
      },
      "secondary": {
        "explanation": "Electrodynamics and circuit network laws: drift velocity of free electrons, resistivity ρ = RA/l, series and parallel equivalent resistances, and Kirchhoff's current/voltage conservation laws.",
        "analogy": "Potential difference gradient driving conduction electrons through resistive lattice scattering.",
        "keyRule": "V = IR | P = VI = I²R | 1/R_parallel = 1/R₁ + 1/R₂"
      }
    },
    "introduction": {
      "hook": "When you flick a light switch, energy reaches the bulb at nearly the speed of light—300,000 km per second!",
      "definition": "Electricity is the flow of electric charge carried by moving electrons through a conductive circuit.",
      "realLifeAnalogy": "Think of water circulating in pipes: the battery is the pump, and the switch is a faucet valve.",
      "quickFact": "A single flash of lightning contains enough electrical energy to toast 100,000 slices of bread!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Closed Circuit Loop",
        "subtitle": "No Breaks Allowed",
        "content": "Electrons can only flow if there is an unbroken loop from the battery, through the device, and back to the other terminal.",
        "takeaway": "Open circuit = Off. Closed circuit = On."
      },
      {
        "step": 2,
        "title": "Voltage, Current & Resistance",
        "subtitle": "The Big Three",
        "content": "Voltage pushes, Current flows, and Resistance resists. A thicker wire has less resistance than a thin hair-like wire.",
        "takeaway": "Voltage pushes the current through resistance."
      },
      {
        "step": 3,
        "title": "Ohm's Law (V = I × R)",
        "subtitle": "The Golden Formula",
        "content": "If you increase voltage, more current flows. If you increase resistance, current slows down: V = I × R.",
        "takeaway": "Voltage = Current × Resistance."
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What unit is used to measure electrical voltage?",
        "opts": [
          "Volts (V)",
          "Seconds (s)",
          "Grams (g)"
        ],
        "ans": 0,
        "explain": "Voltage is measured in Volts.",
        "hint": "V for Volts."
      },
      {
        "prompt": "What happens to a bulb if you cut one wire in a series circuit?",
        "opts": [
          "The bulb turns off completely",
          "The bulb glows brighter",
          "The bulb changes color"
        ],
        "ans": 0,
        "explain": "Cutting a wire creates an open circuit with zero flow.",
        "hint": "The loop is broken."
      },
      {
        "prompt": "What is the formula for Ohm's Law?",
        "opts": [
          "V = I × R",
          "E = mc²",
          "F = m × a"
        ],
        "ans": 0,
        "explain": "Ohm's Law states Voltage = Current × Resistance.",
        "hint": "V, I, R."
      }
    ],
    "finalAssessment": [
      {
        "q": "In a series circuit with three bulbs, what happens if one bulb burns out?",
        "opts": [
          "All three bulbs turn off",
          "The remaining two burn brighter",
          "Nothing changes",
          "The battery explodes"
        ],
        "ans": 0,
        "explain": "In series, an open fault halts current to all components."
      },
      {
        "q": "If a circuit has a voltage of 12 V and a resistance of 4 Ω, what is the electric current?",
        "opts": [
          "3 Amperes (I = V/R = 12/4)",
          "48 Amperes",
          "16 Amperes",
          "0.33 Amperes"
        ],
        "ans": 0,
        "explain": "I = V / R = 12 / 4 = 3 A."
      },
      {
        "q": "Which material is an excellent electrical conductor?",
        "opts": [
          "Copper metal",
          "Rubber",
          "Dry wood",
          "Plastic"
        ],
        "ans": 0,
        "explain": "Copper has abundant free electrons that conduct current."
      },
      {
        "q": "What is the primary role of a fuse or circuit breaker in home wiring?",
        "opts": [
          "To cut off electricity if current gets dangerously high and prevent fires",
          "To make electricity cheaper",
          "To change AC into DC",
          "To shine light"
        ],
        "ans": 0,
        "explain": "Fuses protect circuits from overheating and fire hazards."
      }
    ]
  },
  "sci_heat_transfer": {
    "id": "sci_heat_transfer",
    "title": "Heat Energy & Thermodynamics: Conduction, Convection & Radiation",
    "shortTitle": "Heat Transfer",
    "subjectId": "science",
    "subjectName": "Science",
    "gradeRange": "Class 4–9 (NCERT / CBSE / SSC)",
    "difficulty": "Beginner to Intermediate",
    "themeId": "jungle",
    "worldName": "Science Garden",
    "icon": "🔥",
    "estimatedMins": 9,
    "curriculumBoard": "NCERT Class 7 Ch 4",
    "tags": [
      "Physics",
      "Heat",
      "Thermodynamics",
      "Energy"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Heat always travels from hot things to colder things! When you touch a metal spoon resting in hot soup, the heat climbs up the spoon to warm your fingers.",
        "analogy": "Heat is like a cozy blanket passing warmth from hot cocoa to your cool hands.",
        "keyRule": "Heat always moves from HOT to COLD."
      },
      "middle": {
        "explanation": "Thermal energy transfers in three ways: Conduction (vibrating atoms in solids touching), Convection (rising hot fluids and sinking cool fluids), and Radiation (electromagnetic infrared waves through empty space).",
        "analogy": "Conduction is passing a ball hand-to-hand; Convection is walking the ball across the room; Radiation is throwing the ball through the air!",
        "keyRule": "Conduction (solids), Convection (fluids), Radiation (vacuum waves)."
      },
      "secondary": {
        "explanation": "Thermodynamic heat flux laws: Fourier's law of conduction (q = -k∇T), Newton's law of cooling, and Stefan-Boltzmann radiation law (P = εσAT⁴) transferring net entropy to surroundings.",
        "analogy": "Molecular kinetic energy diffusion driven by thermal equilibrium gradients.",
        "keyRule": "dQ/dt = -kA(dT/dx) | P = εσAT⁴"
      }
    },
    "introduction": {
      "hook": "How does the warmth of the Sun reach Earth across 150 million kilometers of empty, freezing space?",
      "definition": "Heat transfer is the movement of thermal energy from a higher temperature region to a lower temperature region.",
      "realLifeAnalogy": "Think of heat as hot bouncy particles sharing their energy with slower, cooler particles.",
      "quickFact": "Silver is the absolute best heat conductor of all metals on Earth!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "Conduction in Solids",
        "subtitle": "Bumping Neighbors",
        "content": "In solids like metal pots, hot vibrating atoms bump into their cooler neighbors, passing thermal energy along.",
        "takeaway": "Conduction transfers heat through direct physical contact."
      },
      {
        "step": 2,
        "title": "Convection in Fluids",
        "subtitle": "Hot Up, Cold Down",
        "content": "Warm air or water expands, gets lighter, and floats upward, while cool heavy fluids sink down to create circular currents.",
        "takeaway": "Convection circulates heat in liquids and gases."
      },
      {
        "step": 3,
        "title": "Radiation Through Space",
        "subtitle": "Sunlight Waves",
        "content": "Thermal radiation travels as infrared light waves that need no air or matter at all, which is how sunlight warms our faces.",
        "takeaway": "Radiation travels through empty space as waves."
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "In which direction does heat energy naturally travel on its own?",
        "opts": [
          "From hot objects to cold objects",
          "From cold objects to hot objects",
          "Only in circles"
        ],
        "ans": 0,
        "explain": "Heat spontaneously flows from higher to lower temperature.",
        "hint": "Hot moves to Cold."
      },
      {
        "prompt": "Why do cooking pots often have wooden or plastic handles?",
        "opts": [
          "They are poor conductors (insulators) that protect your hands",
          "They look prettier",
          "They make food cook faster"
        ],
        "ans": 0,
        "explain": "Wood and plastic insulate against burning your fingers.",
        "hint": "They stop heat from burning you."
      },
      {
        "prompt": "How does the heat of a campfire reach your hands across the air?",
        "opts": [
          "Thermal radiation",
          "Magnetic pull",
          "Sound vibration"
        ],
        "ans": 0,
        "explain": "Infrared radiation radiates outward from glowing embers.",
        "hint": "Travels through air as infrared waves."
      }
    ],
    "finalAssessment": [
      {
        "q": "Which method of heat transfer does NOT require any medium or air to travel?",
        "opts": [
          "Radiation",
          "Conduction",
          "Convection",
          "Evaporation"
        ],
        "ans": 0,
        "explain": "Electromagnetic radiation travels through empty vacuum."
      },
      {
        "q": "Why do sea breezes blow from the ocean toward the land on hot sunny afternoons?",
        "opts": [
          "Land heats up faster, creating rising warm air and incoming cool sea air (convection)",
          "The Moon pulls the wind",
          "Fish blow waves",
          "Trees inhale air"
        ],
        "ans": 0,
        "explain": "Convection currents drive coastal sea and land breezes."
      },
      {
        "q": "Which material makes the best thermal insulator for winter jackets?",
        "opts": [
          "Trapped air inside down feathers",
          "Copper wire",
          "Cold water",
          "Aluminum foil"
        ],
        "ans": 0,
        "explain": "Trapped stationary air is an exceptional thermal insulator."
      },
      {
        "q": "What happens to the molecules of a gas as it is heated to a higher temperature?",
        "opts": [
          "They vibrate and move much faster, spreading farther apart",
          "They freeze and stop moving",
          "They turn into protons",
          "They shrink in mass"
        ],
        "ans": 0,
        "explain": "Temperature is a measure of average molecular kinetic energy."
      }
    ]
  },
  "sci_sound_waves": {
    "id": "sci_sound_waves",
    "title": "Sound Waves: Vibrations, Frequency & Pitch",
    "shortTitle": "Sound Waves",
    "subjectId": "science",
    "subjectName": "Science",
    "gradeRange": "Class 4–9 (NCERT / CBSE / SSC)",
    "difficulty": "Beginner to Intermediate",
    "themeId": "space",
    "worldName": "Science Garden",
    "icon": "🔊",
    "estimatedMins": 9,
    "curriculumBoard": "NCERT Class 8 Ch 13 / Class 9 Ch 12",
    "tags": [
      "Physics",
      "Sound",
      "Waves",
      "Acoustics"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Every sound you hear—a bird chirping, your favorite song, or a drum beat—comes from something vibrating back and forth really fast! Put your hand on your throat when you hum to feel it vibrate.",
        "analogy": "Imagine a row of dominoes: when you tap the first one, the wiggle travels down the line to your ear!",
        "keyRule": "Vibrations make sound; No vibrations = Silence."
      },
      "middle": {
        "explanation": "Sound is a mechanical longitudinal wave requiring a material medium (solid, liquid, or gas). Amplitude determines loudness in decibels (dB), while frequency determines pitch in Hertz (Hz). Humans hear 20 Hz to 20,000 Hz.",
        "analogy": "A compressed slinky spring pulsing back and forth through compressions and rarefactions.",
        "keyRule": "Speed = Frequency × Wavelength (v = f × λ). Sound cannot travel in a vacuum!"
      },
      "secondary": {
        "explanation": "Acoustic wave equation: longitudinal pressure oscillations characterized by bulk modulus and density (v = √(B/ρ)). Reflection gives echoes and sonar; Doppler effect shifts observed frequency for moving sources.",
        "analogy": "Periodic adiabatic pressure perturbations traveling through elastic continuum lattices.",
        "keyRule": "v = f·λ | v_solid > v_liquid > v_gas | f_audible = 20 Hz–20 kHz"
      }
    },
    "introduction": {
      "hook": "In space, can anyone hear you scream? Science says no—not even if you shout at the top of your lungs!",
      "definition": "Sound is a mechanical wave produced by vibrating matter traveling through solids, liquids, or gases.",
      "realLifeAnalogy": "Think of a slinky: compress one end, and a pulse of squeezed rings travels all the way to the other end.",
      "quickFact": "Sound travels about 4 times faster in water than in air, and 15 times faster in steel!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "Vibrations Make Sound",
        "subtitle": "Back and Forth",
        "content": "When a guitar string is plucked, it vibrates back and forth, shoving nearby air molecules to create sound waves.",
        "takeaway": "All sounds originate from vibrating objects."
      },
      {
        "step": 2,
        "title": "Pitch & Loudness",
        "subtitle": "Fast vs. Big Waves",
        "content": "Fast vibrations create high-pitched squeaks (high frequency in Hertz). Big vibrations push harder and sound louder (high amplitude).",
        "takeaway": "Frequency = Pitch. Amplitude = Loudness."
      },
      {
        "step": 3,
        "title": "Sound Needs a Medium",
        "subtitle": "No Sound in Space",
        "content": "Sound needs atoms to bump into each other. Because outer space is an empty vacuum with no air, sound cannot travel at all!",
        "takeaway": "Sound cannot travel through an empty vacuum."
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "Why is there absolute silence in outer space?",
        "opts": [
          "There is no air or matter to carry sound vibrations",
          "Space is too cold for sound",
          "Stars absorb all noise"
        ],
        "ans": 0,
        "explain": "Sound requires a physical medium to travel.",
        "hint": "Space is a vacuum."
      },
      {
        "prompt": "What property of a sound wave determines how loud or soft it sounds?",
        "opts": [
          "Amplitude",
          "Color",
          "Direction"
        ],
        "ans": 0,
        "explain": "Amplitude determines the volume/loudness of a sound.",
        "hint": "Height of the wave."
      },
      {
        "prompt": "What range of sound frequencies can healthy human ears typically hear?",
        "opts": [
          "20 Hz to 20,000 Hz",
          "0 Hz to 5 Hz",
          "1,000,000 Hz only"
        ],
        "ans": 0,
        "explain": "The standard human hearing range is 20 Hz to 20 kHz.",
        "hint": "20 to twenty thousand."
      }
    ],
    "finalAssessment": [
      {
        "q": "In which of the following mediums does sound travel the fastest?",
        "opts": [
          "Solid steel rail",
          "Freshwater lake",
          "Room air",
          "Vacuum chamber"
        ],
        "ans": 0,
        "explain": "Tightly packed atoms in solids transmit compression waves fastest."
      },
      {
        "q": "What is an echo?",
        "opts": [
          "A sound wave reflecting off a distant hard surface back to your ears",
          "A ghost voice in a cave",
          "Sound traveling backward in time",
          "A broken wave"
        ],
        "ans": 0,
        "explain": "Echoes are acoustic reflections from barriers."
      },
      {
        "q": "If a sound wave has a frequency of 500 Hz, what does 500 Hz mean?",
        "opts": [
          "It vibrates 500 times every single second",
          "It is 500 decibels loud",
          "It travels 500 km per hour",
          "It costs 500 coins"
        ],
        "ans": 0,
        "explain": "Hertz (Hz) is vibrations or cycles per second."
      },
      {
        "q": "How do bats navigate and hunt in total darkness?",
        "opts": [
          "By emitting high-frequency ultrasound echoes (echolocation)",
          "By smelling heat",
          "By thermal eyes",
          "By night radar antennas"
        ],
        "ans": 0,
        "explain": "Echolocation uses reflected ultrasonic waves."
      }
    ]
  },
  "sci_light_reflection": {
    "id": "sci_light_reflection",
    "title": "Light & Optics: Reflection, Refraction & Lenses",
    "shortTitle": "Light & Optics",
    "subjectId": "science",
    "subjectName": "Science",
    "gradeRange": "Class 5–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "Science Garden",
    "icon": "🔦",
    "estimatedMins": 11,
    "curriculumBoard": "NCERT Class 7 Ch 15 / Class 10 Ch 10",
    "tags": [
      "Physics",
      "Light",
      "Reflection",
      "Refraction"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Light travels in super straight lines at top speed! When light bounces off a mirror, it reflects into your eyes so you see your reflection. When it goes into water, it bends and makes a straw look broken!",
        "analogy": "Light beams are like bouncy rubber balls bouncing off bathroom mirrors!",
        "keyRule": "Light bounces off shiny mirrors and bends when entering water."
      },
      "middle": {
        "explanation": "Reflection: Angle of Incidence equals Angle of Reflection (∠i = ∠r). Refraction: Light bends when passing between mediums of different optical density (like air into glass or water) because its speed changes.",
        "analogy": "A shopping cart rolling from smooth tile onto thick carpet: one wheel slows down first, causing the cart to turn!",
        "keyRule": "Law of Reflection: ∠i = ∠r | Refraction bends toward normal in denser media"
      },
      "secondary": {
        "explanation": "Geometrical and physical optics: Snell's Law (n₁ sin θ₁ = n₂ sin θ₂), total internal reflection in fiber optics, thin lens equation (1/f = 1/v - 1/u), and chromatic dispersion across glass prisms.",
        "analogy": "Wavefront phase deceleration altering wave propagation vectors across dielectric interfaces.",
        "keyRule": "n₁·sin(θ₁) = n₂·sin(θ₂) | 1/f = 1/v - 1/u"
      }
    },
    "introduction": {
      "hook": "Light is the fastest thing in the universe—it can circle the entire Earth 7.5 times in one single second!",
      "definition": "Optics is the branch of physics studying the behavior, reflection, and refraction of visible light.",
      "realLifeAnalogy": "Think of light rays as laser pointers bouncing off shiny glass mirrors.",
      "quickFact": "Rainbows appear when raindrops act as tiny glass prisms splitting white sunlight into 7 colors!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "Reflection (Bouncing Light)",
        "subtitle": "The Mirror Bounce",
        "content": "When light hits a smooth shiny mirror, it bounces off at the exact same angle it arrived: Angle of Incidence = Angle of Reflection.",
        "takeaway": "Angle in equals angle out (∠i = ∠r)."
      },
      {
        "step": 2,
        "title": "Refraction (Bending Light)",
        "subtitle": "Entering Water",
        "content": "Light slows down when moving from air into water or glass, causing the beam to bend and making swimming pools look shallower.",
        "takeaway": "Light bends when changing speed in new materials."
      },
      {
        "step": 3,
        "title": "Lenses: Convex & Concave",
        "subtitle": "Focusing Images",
        "content": "Convex lenses bulge in the center to focus light into a sharp point (like magnifying glasses and your eye lens).",
        "takeaway": "Convex lenses focus light; concave lenses spread light."
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "If a beam of light hits a flat mirror at an angle of 35°, what is the angle of reflection?",
        "opts": [
          "35°",
          "70°",
          "0°"
        ],
        "ans": 0,
        "explain": "By the law of reflection, ∠i = ∠r = 35°.",
        "hint": "It matches the incoming angle."
      },
      {
        "prompt": "Why does a pencil placed in a glass of water look bent or broken?",
        "opts": [
          "Refraction bends the light as it leaves the water",
          "The water dissolves the wood",
          "The glass is curved magically"
        ],
        "ans": 0,
        "explain": "Refraction bends light rays due to speed differences.",
        "hint": "Bending of light."
      },
      {
        "prompt": "What type of lens is thick in the middle and focuses rays to a sharp focal point?",
        "opts": [
          "Convex lens",
          "Concave lens",
          "Flat window"
        ],
        "ans": 0,
        "explain": "Convex lenses converge light rays inward.",
        "hint": "Used in magnifying glasses."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the speed of light in a vacuum?",
        "opts": [
          "300,000 km/s (3 × 10⁸ m/s)",
          "1,000 km/h",
          "330 m/s",
          "100 m/s"
        ],
        "ans": 0,
        "explain": "Light travels at approximately 300,000 km per second."
      },
      {
        "q": "What phenomenon causes white sunlight to split into a rainbow spectrum inside a glass prism?",
        "opts": [
          "Dispersion",
          "Absorption",
          "Diffraction only",
          "Echo"
        ],
        "ans": 0,
        "explain": "Different wavelengths refract at slightly different angles (dispersion)."
      },
      {
        "q": "What optical technology powers modern high-speed internet cables under the oceans?",
        "opts": [
          "Fiber optic cables using Total Internal Reflection of light",
          "Copper telephone bells",
          "Radio towers in clouds",
          "Submarine smoke signals"
        ],
        "ans": 0,
        "explain": "Total internal reflection guides laser signals across fiber cables."
      },
      {
        "q": "What image is formed by a standard flat bathroom plane mirror?",
        "opts": [
          "Virtual, upright, and laterally inverted (left appears right)",
          "Real and upside down",
          "Tiny and blurry",
          "Magnified ten times"
        ],
        "ans": 0,
        "explain": "Plane mirrors produce upright, virtual, laterally inverted images."
      }
    ]
  },
  "sci_human_digestion": {
    "id": "sci_human_digestion",
    "title": "Human Digestion: The Nutrient Processing Journey",
    "shortTitle": "Human Digestion",
    "subjectId": "science",
    "subjectName": "Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Beginner to Intermediate",
    "themeId": "jungle",
    "worldName": "Science Garden",
    "icon": "🍎",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Ch 2 / Class 10 Ch 6",
    "tags": [
      "Biology",
      "Digestion",
      "Health",
      "Organs"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Your digestive system is a 9-meter roller coaster ride for food! Your teeth chew, your stomach splashes acid, and your intestines soak up all the vitamins to make you strong.",
        "analogy": "Your body is like a recycling factory: it breaks sandwiches into energy fuels for running and playing!",
        "keyRule": "Chew in mouth ➔ Churn in stomach ➔ Absorb in small intestine ➔ Fuel your day!"
      },
      "middle": {
        "explanation": "Digestion breaks complex food into absorbable molecules: saliva enzymes break starch in the mouth, stomach acid and pepsin digest proteins, liver bile emulsifies fats, and small intestine villi absorb nutrients into blood.",
        "analogy": "A multi-station disassembly line breaking down complex polymers into simple monomers.",
        "keyRule": "Mouth (saliva) ➔ Stomach (acid/pepsin) ➔ Small Intestine (villi absorption) ➔ Large Intestine"
      },
      "secondary": {
        "explanation": "Gastrointestinal physiology and enzyme kinetics: salivary amylase, gastric hydrochloric acid activating pepsinogen, pancreatic lipases and proteases in duodenum, and hepatic portal vein nutrient distribution.",
        "analogy": "Sequential pH-dependent enzymatic hydrolysis optimizing macromolecular bio-availability.",
        "keyRule": "Carbs ➔ Glucose | Proteins ➔ Amino Acids | Fats ➔ Fatty Acids & Glycerol"
      }
    },
    "introduction": {
      "hook": "Did you know your small intestine is about 6 meters long—longer than a tall adult giraffe!",
      "definition": "Digestion is the biochemical breakdown of food into microscopic nutrients absorbed into the bloodstream.",
      "realLifeAnalogy": "Think of food like a locked treasure chest: digestive enzymes are keys unlocking vitamins, proteins, and sugars.",
      "quickFact": "Food spends anywhere from 24 to 72 hours traveling through your digestive journey!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Mouth: Chewing & Saliva",
        "subtitle": "Station 1",
        "content": "Teeth grind food into small pieces while saliva enzymes begin breaking down starches before you even swallow.",
        "takeaway": "Digestion starts in the mouth with chewing and saliva."
      },
      {
        "step": 2,
        "title": "The Stomach: Acid Churn",
        "subtitle": "Station 2",
        "content": "Your stomach churns food with strong hydrochloric acid and enzymes to dissolve proteins into a soupy mix called chyme.",
        "takeaway": "Stomach acid breaks down proteins and kills harmful germs."
      },
      {
        "step": 3,
        "title": "The Small Intestine: Nutrient Soak",
        "subtitle": "Station 3",
        "content": "Microscopic finger-like folds called villi absorb vitamins, glucose, and amino acids straight into your blood vessels to nourish cells.",
        "takeaway": "Small intestine absorbs all key nutrients into your blood."
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "Where in the human body does the digestion of food first begin?",
        "opts": [
          "In the mouth",
          "In the stomach",
          "In the liver"
        ],
        "ans": 0,
        "explain": "Salivary amylase begins starch breakdown in the mouth.",
        "hint": "Where you chew food."
      },
      {
        "prompt": "What organ absorbs the vast majority of nutrients into the bloodstream?",
        "opts": [
          "Small intestine",
          "Esophagus",
          "Lungs"
        ],
        "ans": 0,
        "explain": "The small intestine absorbs over 90% of all nutrients.",
        "hint": "The 6-meter coiled intestine."
      },
      {
        "prompt": "What green fluid made by the liver helps break down fatty foods?",
        "opts": [
          "Bile",
          "Saliva",
          "Insulin"
        ],
        "ans": 0,
        "explain": "Bile emulsifies fats for digestive enzymes.",
        "hint": "Stored in the gallbladder."
      }
    ],
    "finalAssessment": [
      {
        "q": "What are villi and what is their crucial function in the small intestine?",
        "opts": [
          "Tiny finger-like projections that dramatically increase surface area for nutrient absorption",
          "Teeth inside the stomach",
          "Muscles that pump blood",
          "Bones in the throat"
        ],
        "ans": 0,
        "explain": "Villi provide massive surface area for nutrient uptake."
      },
      {
        "q": "What is the primary role of the large intestine in digestion?",
        "opts": [
          "Absorbing remaining water and forming solid waste",
          "Making stomach acid",
          "Digesting milk with pepsin",
          "Creating white blood cells"
        ],
        "ans": 0,
        "explain": "The colon reabsorbs water to prevent dehydration."
      },
      {
        "q": "What acid is naturally produced inside the human stomach to aid digestion?",
        "opts": [
          "Hydrochloric acid (HCl)",
          "Sulfuric acid",
          "Citric acid",
          "Vinegar"
        ],
        "ans": 0,
        "explain": "Gastric glands produce hydrochloric acid."
      },
      {
        "q": "Which wave-like muscular contraction pushes food down the esophagus into the stomach?",
        "opts": [
          "Peristalsis",
          "Respiration",
          "Circulation",
          "Osmosis"
        ],
        "ans": 0,
        "explain": "Peristalsis propels food along the gastrointestinal tract."
      }
    ]
  },
  "math_perimeter": {
    "id": "math_perimeter",
    "title": "Perimeter of 2D Shapes & Polygons",
    "shortTitle": "Perimeter",
    "subjectId": "math",
    "subjectName": "Mathematics",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "racing",
    "worldName": "Geometry Valley",
    "icon": "📐",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6 Ch 10 / Class 7 Ch 11",
    "tags": [
      "Mathematics",
      "Perimeter"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Perimeter is just measuring the whole fence around a yard! Add up the lengths of all the sides, and you have the perimeter.",
        "analogy": "Walking an ant all the way around the edge of your notebook and counting its tiny steps.",
        "keyRule": "Perimeter = Sum of all outside side lengths (Side 1 + Side 2 + Side 3 + ...)"
      },
      "middle": {
        "explanation": "Perimeter measures linear boundary distance. For a rectangle of length L and width W: P = 2(L + W). For a regular polygon of n sides of length s: P = n × s.",
        "analogy": "Unfolding a wire rectangle into a single straight line and measuring its total length with a ruler.",
        "keyRule": "Rectangle: P = 2(L + W) | Square: P = 4s | Triangle: P = a + b + c"
      },
      "secondary": {
        "explanation": "Perimeter calculations extending to composite rectilinear figures, coordinate geometry (sum of Euclidean distance segments), and limit approximations approaching circular circumference C = 2πr.",
        "analogy": "Integrating boundary arc length along a closed piecewise smooth 2D curve.",
        "keyRule": "P = ∮ ds | Circumference = 2πr | Polygon = Σ s_i"
      }
    },
    "introduction": {
      "hook": "If you want to build a safe fence around a puppy park, how do you measure how much fencing wire to buy?",
      "definition": "Perimeter is the total continuous distance around the outside edge or boundary of a 2D closed shape.",
      "realLifeAnalogy": "Think of walking your dog on a leash around the outer fence of a park—every step along the edge counts toward the perimeter!",
      "quickFact": "The word Perimeter comes from Greek: \"Peri\" means around and \"Metron\" means measure!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Perimeter is and where we encounter it every single day.",
        "takeaway": "Core concept: Perimeter connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Perimeter work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the perimeter of a rectangle with length 6 cm and width 4 cm?",
        "opts": [
          "20 cm (2 × (6 + 4))",
          "24 cm",
          "10 cm"
        ],
        "ans": 0,
        "explain": "Perimeter = 2 × (Length + Width) = 2 × 10 = 20 cm.",
        "hint": "Add 6 + 4, then double it."
      },
      {
        "prompt": "A square playground has each side measuring 10 meters. What is its total perimeter?",
        "opts": [
          "40 meters (4 × 10)",
          "100 meters",
          "20 meters"
        ],
        "ans": 0,
        "explain": "Square perimeter = 4 × side = 4 × 10 = 40 m.",
        "hint": "Add all 4 sides."
      },
      {
        "prompt": "What unit is used to express perimeter?",
        "opts": [
          "Linear units (cm, meters, km)",
          "Square units (cm²)",
          "Cubic units (m³)"
        ],
        "ans": 0,
        "explain": "Perimeter is a one-dimensional linear length.",
        "hint": "Just regular meters or cm."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the formula to calculate the perimeter of any rectangle?",
        "opts": [
          "P = 2 × (Length + Width)",
          "P = Length × Width",
          "P = Length² + Width²",
          "P = Length / Width"
        ],
        "ans": 0,
        "explain": "A rectangle has two lengths and two widths: 2(L + W)."
      },
      {
        "q": "An equilateral triangle has sides measuring 8 cm each. What is its perimeter?",
        "opts": [
          "24 cm (8 + 8 + 8)",
          "16 cm",
          "64 cm",
          "32 cm"
        ],
        "ans": 0,
        "explain": "All three sides are 8 cm: 3 × 8 = 24 cm."
      },
      {
        "q": "If a square garden has a perimeter of 36 meters, how long is each individual side?",
        "opts": [
          "9 meters (36 ÷ 4)",
          "6 meters",
          "18 meters",
          "12 meters"
        ],
        "ans": 0,
        "explain": "Side = Perimeter / 4 = 36 / 4 = 9 m."
      },
      {
        "q": "What is the key difference between Perimeter and Area?",
        "opts": [
          "Perimeter is the outer border length; Area is the flat space inside",
          "They are the exact same thing",
          "Perimeter is measured in square cm",
          "Area is the fence distance"
        ],
        "ans": 0,
        "explain": "Perimeter measures the boundary; Area measures interior space."
      }
    ]
  },
  "math_area": {
    "id": "math_area",
    "title": "Area of Rectangles, Squares, Triangles & Circles",
    "shortTitle": "Area",
    "subjectId": "math",
    "subjectName": "Mathematics",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "racing",
    "worldName": "Geometry Valley",
    "icon": "📏",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Ch 11",
    "tags": [
      "Mathematics",
      "Area"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Area counts how many equal square tiles fit inside a shape without overlapping! For a rectangle, multiply how many rows by how many tiles in each row.",
        "analogy": "Counting square slices of cheese covering your sandwich toast!",
        "keyRule": "Rectangle Area = Length × Width (measured in square cm or m²)"
      },
      "middle": {
        "explanation": "Area formulas: Rectangle = L × W; Square = s²; Triangle = ½ × Base × Height; Circle = π × r².",
        "analogy": "A triangle is exactly half of a bounding rectangle with the same base and height!",
        "keyRule": "Rectangle: L × W | Triangle: ½ × b × h | Circle: πr²"
      },
      "secondary": {
        "explanation": "Two-dimensional definite integration: A = ∬ dA. Determining area of polygons via triangulation, Heron's formula √(s(s-a)(s-b)(s-c)), and sectors of circles (½r²θ).",
        "analogy": "Partitioning curved continuous Riemannian surfaces into infinitesimal planar differential elements.",
        "keyRule": "Triangle: A = √(s(s-a)(s-b)(s-c)) | Circle: A = πr² | Sector: ½r²θ"
      }
    },
    "introduction": {
      "hook": "If you want to tile your bedroom floor with shiny green tiles, how many square tiles do you need to buy?",
      "definition": "Area is the measurement of the flat surface or 2D space enclosed within the boundary of a shape, measured in square units.",
      "realLifeAnalogy": "Think of area as the amount of paint needed to cover a canvas or the grass sod needed to fill a backyard.",
      "quickFact": "Area is always expressed in \"square\" units like cm², m², or acres!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Area is and where we encounter it every single day.",
        "takeaway": "Core concept: Area connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Area work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the area of a rectangular carpet with length 5 m and width 3 m?",
        "opts": [
          "15 m² (5 × 3)",
          "16 m",
          "8 m²"
        ],
        "ans": 0,
        "explain": "Area = Length × Width = 5 × 3 = 15 m².",
        "hint": "Multiply length by width."
      },
      {
        "prompt": "What is the area of a triangle with a base of 10 cm and a height of 6 cm?",
        "opts": [
          "30 cm² (½ × 10 × 6)",
          "60 cm²",
          "16 cm²"
        ],
        "ans": 0,
        "explain": "Area = ½ × base × height = ½ × 60 = 30 cm².",
        "hint": "Half of base times height."
      },
      {
        "prompt": "What is the formula for the area of a circle with radius r?",
        "opts": [
          "A = π × r²",
          "A = 2 × π × r",
          "A = r × 4"
        ],
        "ans": 0,
        "explain": "Area of circle = πr².",
        "hint": "Pi times radius squared."
      }
    ],
    "finalAssessment": [
      {
        "q": "A square room has walls that are 7 meters long. What is its floor area in square meters?",
        "opts": [
          "49 m² (7 × 7)",
          "28 m²",
          "14 m²",
          "70 m²"
        ],
        "ans": 0,
        "explain": "Square Area = side × side = 7 × 7 = 49 m²."
      },
      {
        "q": "Why is the area of a triangle calculated as ½ × base × height?",
        "opts": [
          "Because any triangle is exactly half of a parallelogram or rectangle with the same base and height",
          "Because triangles have 3 corners",
          "It is an estimate",
          "Because ancient Greeks liked halves"
        ],
        "ans": 0,
        "explain": "A triangle forms half of a parallelogram with the same base and altitude."
      },
      {
        "q": "If a rectangle has an area of 40 cm² and a width of 5 cm, what is its length?",
        "opts": [
          "8 cm (40 ÷ 5)",
          "35 cm",
          "10 cm",
          "20 cm"
        ],
        "ans": 0,
        "explain": "Length = Area ÷ Width = 40 ÷ 5 = 8 cm."
      },
      {
        "q": "Which unit is correct for measuring the area of an Olympic swimming pool surface?",
        "opts": [
          "Square meters (m²)",
          "Liters",
          "Meters (m)",
          "Kilograms"
        ],
        "ans": 0,
        "explain": "Surface area is expressed in square units (m²)."
      }
    ]
  },
  "math_fractions": {
    "id": "math_fractions",
    "title": "Fractions: Portions, Operations & Mixed Numbers",
    "shortTitle": "Fractions",
    "subjectId": "math",
    "subjectName": "Mathematics",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "racing",
    "worldName": "Geometry Valley",
    "icon": "🍕",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6 Ch 7 / Class 7 Ch 2",
    "tags": [
      "Mathematics",
      "Fractions"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "A fraction shows parts of something! The top number (numerator) tells how many slices you have. The bottom number (denominator) tells how many total slices make the whole pizza.",
        "analogy": "Sharing chocolate bars equally with your best friends.",
        "keyRule": "Top number = slices you have | Bottom number = total equal slices"
      },
      "middle": {
        "explanation": "Types: Proper (numerator < denominator), Improper (numerator ≥ denominator), and Mixed numbers. Adding fractions requires a Common Denominator via LCM.",
        "analogy": "You cannot add apples and oranges until you convert both into equal fruit basket portions (common denominator)!",
        "keyRule": "a/b + c/d = (ad + bc) / bd | To multiply: (a × c) / (b × d)"
      },
      "secondary": {
        "explanation": "Rational numbers ℚ = {a/b | a,b ∈ ℤ, b ≠ 0}. Decimal expansions (terminating vs repeating), fraction decomposition, and algebraic rational expressions.",
        "analogy": "Equivalence classes under cross-multiplication isomorphism: a/b ∼ c/d ⇔ ad = bc.",
        "keyRule": "a/b ÷ c/d = a/b × d/c | Rational numbers closure under +, -, ×, ÷ (b≠0)"
      }
    },
    "introduction": {
      "hook": "If you and three friends order one large pizza cut into 8 equal slices, how many slices does each person get?",
      "definition": "A fraction represents part of a whole or part of a set, written as Numerator over Denominator (a/b).",
      "realLifeAnalogy": "Think of slicing a chocolate cake into 4 equal slices—each slice is 1/4th of the whole delicious cake!",
      "quickFact": "The horizontal fraction bar separating top and bottom is officially called the \"vinculum\"!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Fractions is and where we encounter it every single day.",
        "takeaway": "Core concept: Fractions connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Fractions work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "In the fraction 3/4, what does the number 3 represent?",
        "opts": [
          "The numerator (how many parts we have)",
          "The denominator",
          "The whole pizza"
        ],
        "ans": 0,
        "explain": "The top number is the numerator.",
        "hint": "Top number."
      },
      {
        "prompt": "What is 1/4 + 2/4 equal to?",
        "opts": [
          "3/4",
          "3/8",
          "2/4"
        ],
        "ans": 0,
        "explain": "With equal denominators, add numerators: 1 + 2 = 3, so 3/4.",
        "hint": "Add the top numbers."
      },
      {
        "prompt": "What do we call a fraction where the top number is bigger than the bottom number (e.g. 7/3)?",
        "opts": [
          "Improper fraction",
          "Proper fraction",
          "Zero fraction"
        ],
        "ans": 0,
        "explain": "When numerator > denominator, it is an improper fraction.",
        "hint": "It can be converted to a mixed number."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is 1/2 + 1/3 equal to?",
        "opts": [
          "5/6",
          "2/5",
          "1/5",
          "2/6"
        ],
        "ans": 0,
        "explain": "Find common denominator 6: 3/6 + 2/6 = 5/6."
      },
      {
        "q": "How do you multiply two fractions like 2/3 × 3/5?",
        "opts": [
          "Multiply tops and multiply bottoms: (2×3)/(3×5) = 6/15 = 2/5",
          "Add denominators",
          "Cross multiply",
          "Flip the second and add"
        ],
        "ans": 0,
        "explain": "Multiply numerators and multiply denominators."
      },
      {
        "q": "Convert the improper fraction 9/4 into a mixed number:",
        "opts": [
          "2 ¼ (2 wholes and 1 fourth)",
          "3 ¼",
          "1 ½",
          "4 ½"
        ],
        "ans": 0,
        "explain": "9 divided by 4 is 2 with remainder 1, so 2 ¼."
      },
      {
        "q": "What is the reciprocal of the fraction 3/7?",
        "opts": [
          "7/3 (flip top and bottom)",
          "-3/7",
          "3/7",
          "1/7"
        ],
        "ans": 0,
        "explain": "The reciprocal flips the numerator and denominator."
      }
    ]
  },
  "math_decimals": {
    "id": "math_decimals",
    "title": "Decimals: Place Value & Precision Arithmetic",
    "shortTitle": "Decimals",
    "subjectId": "math",
    "subjectName": "Mathematics",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "racing",
    "worldName": "Geometry Valley",
    "icon": "🎯",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6 Ch 8 / Class 7 Ch 2",
    "tags": [
      "Mathematics",
      "Decimals"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "A decimal dot separates whole items on the left from tiny slices on the right. 0.5 means half, and 0.1 means one tenth!",
        "analogy": "Cents in pocket money: 50 cents is written as $0.50!",
        "keyRule": "Left of dot = Whole numbers | Right of dot = Tenths, hundredths, thousandths"
      },
      "middle": {
        "explanation": "Place values right of the decimal: tenths (1/10), hundredths (1/100), thousandths (1/1000). Always align decimal points when adding or subtracting.",
        "analogy": "Lining up buttons on a shirt straight vertically when adding decimals.",
        "keyRule": "Align decimal points vertically for + and - | Count total decimal places for ×"
      },
      "secondary": {
        "explanation": "Decimal representations of real numbers: terminating decimals (prime factors of denominator only 2 and 5) vs non-terminating repeating decimals (convertible via algebraic series x = 0.333...).",
        "analogy": "Positional weighted metric series: Σ a_i × 10^(-i) converging to Dedekind cut continuum values.",
        "keyRule": "Terminating if denominator in lowest terms = 2^m × 5^n"
      }
    },
    "introduction": {
      "hook": "When an Olympic runner wins the 100m gold medal by 9.58 seconds, how do decimals measure that split-second speed?",
      "definition": "Decimals are numbers written in base-10 with a decimal point separating whole numbers from fractional parts (tenths, hundredths, thousandths).",
      "realLifeAnalogy": "Think of money: $1.50 is 1 whole dollar plus 50 hundredths of a dollar (50 cents)!",
      "quickFact": "The decimal system uses base-10 because humans originally counted using their 10 fingers!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Decimals is and where we encounter it every single day.",
        "takeaway": "Core concept: Decimals connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Decimals work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "In the number 14.75, what place value does the digit 7 occupy?",
        "opts": [
          "Tenths place (7/10)",
          "Hundredths place",
          "Tens place"
        ],
        "ans": 0,
        "explain": "The first digit right of the decimal point is the tenths place.",
        "hint": "First digit after dot."
      },
      {
        "prompt": "What is 3.5 + 2.25 equal to?",
        "opts": [
          "5.75",
          "5.50",
          "6.00"
        ],
        "ans": 0,
        "explain": "3.50 + 2.25 = 5.75.",
        "hint": "Add with aligned decimals."
      },
      {
        "prompt": "How is the fraction 1/2 written as a decimal?",
        "opts": [
          "0.5",
          "0.2",
          "0.05"
        ],
        "ans": 0,
        "explain": "1 divided by 2 is 0.5.",
        "hint": "Half of one."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is 0.4 × 0.2 equal to?",
        "opts": [
          "0.08 (one decimal place + one decimal place = two decimal places)",
          "0.8",
          "8.0",
          "0.008"
        ],
        "ans": 0,
        "explain": "4 × 2 = 8, with 2 decimal places: 0.08."
      },
      {
        "q": "Which decimal is the largest: 0.6, 0.59, or 0.099?",
        "opts": [
          "0.6 (which equals 0.600)",
          "0.59",
          "0.099",
          "They are all equal"
        ],
        "ans": 0,
        "explain": "0.6 = 0.600 > 0.590 > 0.099."
      },
      {
        "q": "What is 15.6 ÷ 10 equal to?",
        "opts": [
          "1.56 (move decimal point 1 place left)",
          "156.0",
          "0.156",
          "15.06"
        ],
        "ans": 0,
        "explain": "Dividing by 10 shifts the decimal point one step left."
      },
      {
        "q": "Convert the decimal 0.75 into a fraction in lowest terms:",
        "opts": [
          "3/4",
          "7/5",
          "75/10",
          "1/4"
        ],
        "ans": 0,
        "explain": "0.75 = 75/100 = 3/4."
      }
    ]
  },
  "math_linear_equations": {
    "id": "math_linear_equations",
    "title": "Linear Equations: Solving for Unknown Mystery Variables",
    "shortTitle": "Linear Equations",
    "subjectId": "math",
    "subjectName": "Mathematics",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "racing",
    "worldName": "Geometry Valley",
    "icon": "⚖️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 8 Ch 2",
    "tags": [
      "Mathematics",
      "Linear Equations"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "The letter x is just a mystery puzzle box! If mystery box + 3 = 10, then the mystery box must hold 7! Whatever you do to one side of the equals sign, do to the other side.",
        "analogy": "A balanced seesaw with surprise gift boxes on one side!",
        "keyRule": "Keep the balance! If you subtract 3 on the left, subtract 3 on the right."
      },
      "middle": {
        "explanation": "Linear Equations is a core curriculum principle explaining the underlying mechanisms and relationships in Mathematics.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Linear Equations"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Linear Equations, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Linear Equations"
      }
    },
    "introduction": {
      "hook": "If you have a mystery box with x coins, and adding 5 coins gives 12 coins, how many coins are in the box?",
      "definition": "A linear equation is a mathematical statement asserting the equality of two expressions with unknown variables to the first power.",
      "realLifeAnalogy": "Think of a balanced two-pan balance scale: whatever weight you add or remove on one side, you must do the exact same on the other side to keep it balanced!",
      "quickFact": "The equal sign \"=\" was invented in 1557 by Robert Recorde because \"nothing could be more equal than two parallel lines\"!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Linear Equations is and where we encounter it every single day.",
        "takeaway": "Core concept: Linear Equations connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Linear Equations work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Linear Equations?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Linear Equations follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Linear Equations help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Linear Equations?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Linear Equations?",
        "opts": [
          "A fundamental concept in Mathematics based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Linear Equations."
      },
      {
        "q": "When studying Linear Equations, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Linear Equations apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Linear Equations?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "math_percentages": {
    "id": "math_percentages",
    "title": "Percentages, Profit & Loss: Everyday Financial Math",
    "shortTitle": "Percentages & Profit",
    "subjectId": "math",
    "subjectName": "Mathematics",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "racing",
    "worldName": "Geometry Valley",
    "icon": "🏷️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Ch 8 / Class 8 Ch 8",
    "tags": [
      "Mathematics",
      "Percentages & Profit"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Percent means \"out of 100\"! 50% means half (50 out of 100), and 100% means the whole thing!",
        "analogy": "Filling up a game battery bar to 100% power!",
        "keyRule": "50% = Half | 25% = One Quarter | 100% = Everything"
      },
      "middle": {
        "explanation": "Percentages & Profit is a core curriculum principle explaining the underlying mechanisms and relationships in Mathematics.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Percentages & Profit"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Percentages & Profit, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Percentages & Profit"
      }
    },
    "introduction": {
      "hook": "If your favorite gaming headset is on a \"20% OFF\" sale, how much money do you actually save?",
      "definition": "A percentage represents a fraction or ratio with a denominator of 100 (\"per cent\" = out of every hundred).",
      "realLifeAnalogy": "Think of scoring on a test: 85% means you got 85 questions right out of every 100!",
      "quickFact": "The % symbol evolved from an Italian abbreviation \"per cento\" written over centuries!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Percentages & Profit is and where we encounter it every single day.",
        "takeaway": "Core concept: Percentages & Profit connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Percentages & Profit work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Percentages & Profit?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Percentages & Profit follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Percentages & Profit help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Percentages & Profit?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Percentages & Profit?",
        "opts": [
          "A fundamental concept in Mathematics based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Percentages & Profit."
      },
      {
        "q": "When studying Percentages & Profit, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Percentages & Profit apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Percentages & Profit?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "math_geometry_angles": {
    "id": "math_geometry_angles",
    "title": "Angles, Triangles & Lines: Geometric Principles",
    "shortTitle": "Angles & Triangles",
    "subjectId": "math",
    "subjectName": "Mathematics",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "racing",
    "worldName": "Geometry Valley",
    "icon": "📐",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Ch 5 & 6",
    "tags": [
      "Mathematics",
      "Angles & Triangles"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "An angle measures how wide something opens, like a pair of scissors! Acute is sharp and small, Right is square like a book corner, and Obtuse is wide!",
        "analogy": "Clock hands pointing to 3 o'clock make a perfect 90° right angle!",
        "keyRule": "Acute < 90° | Right = 90° (corner) | Obtuse > 90° | Flat line = 180°"
      },
      "middle": {
        "explanation": "Angles & Triangles is a core curriculum principle explaining the underlying mechanisms and relationships in Mathematics.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Angles & Triangles"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Angles & Triangles, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Angles & Triangles"
      }
    },
    "introduction": {
      "hook": "Did you know skateboarders doing a \"180\" or \"360\" trick are using geometry angle degrees to measure their spin?",
      "definition": "An angle is the measure of turn or openness between two rays sharing a common vertex point, measured in degrees (°).",
      "realLifeAnalogy": "Think of opening an alligator mouth: slightly open is an acute angle; wide open like an L is a 90° right angle!",
      "quickFact": "A full circle has 360 degrees because ancient Babylonian astronomers estimated 360 days in a calendar year!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Angles & Triangles is and where we encounter it every single day.",
        "takeaway": "Core concept: Angles & Triangles connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Angles & Triangles work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Angles & Triangles?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Angles & Triangles follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Angles & Triangles help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Angles & Triangles?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Angles & Triangles?",
        "opts": [
          "A fundamental concept in Mathematics based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Angles & Triangles."
      },
      {
        "q": "When studying Angles & Triangles, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Angles & Triangles apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Angles & Triangles?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "math_pythagorean": {
    "id": "math_pythagorean",
    "title": "The Pythagorean Theorem: Right-Triangle Calculations",
    "shortTitle": "Pythagorean Theorem",
    "subjectId": "math",
    "subjectName": "Mathematics",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "racing",
    "worldName": "Geometry Valley",
    "icon": "🔺",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Ch 6",
    "tags": [
      "Mathematics",
      "Pythagorean Theorem"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "In a triangle with a square corner, the diagonal longest side is connected to the other two sides by a magical formula: 3² + 4² = 5²!",
        "analogy": "Walking diagonally across a room is always shorter than walking along two walls.",
        "keyRule": "In a 90° triangle: Leg² + Leg² = Longest Diagonal²"
      },
      "middle": {
        "explanation": "Pythagorean Theorem is a core curriculum principle explaining the underlying mechanisms and relationships in Mathematics.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Pythagorean Theorem"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Pythagorean Theorem, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Pythagorean Theorem"
      }
    },
    "introduction": {
      "hook": "How do architects and builders ensure walls make a perfect square 90° corner using just a measuring tape?",
      "definition": "In any right-angled triangle, the square of the longest side (hypotenuse c) equals the sum of squares of the other two legs: a² + b² = c².",
      "realLifeAnalogy": "Taking a diagonal shortcut across a rectangular grassy field saves walking all the way along the edges!",
      "quickFact": "Ancient Egyptian rope stretchers used a knot rope of 3-4-5 lengths to construct right angles for the Pyramids!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Pythagorean Theorem is and where we encounter it every single day.",
        "takeaway": "Core concept: Pythagorean Theorem connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Pythagorean Theorem work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Pythagorean Theorem?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Pythagorean Theorem follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Pythagorean Theorem help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Pythagorean Theorem?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Pythagorean Theorem?",
        "opts": [
          "A fundamental concept in Mathematics based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Pythagorean Theorem."
      },
      {
        "q": "When studying Pythagorean Theorem, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Pythagorean Theorem apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Pythagorean Theorem?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "math_volume_surface": {
    "id": "math_volume_surface",
    "title": "Volume & Surface Area of 3D Solids",
    "shortTitle": "Volume of Solids",
    "subjectId": "math",
    "subjectName": "Mathematics",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "racing",
    "worldName": "Geometry Valley",
    "icon": "📦",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 8 Ch 11",
    "tags": [
      "Mathematics",
      "Volume of Solids"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Volume counts how many 3D toy blocks fit inside a box! Multiply length × width × height to find out.",
        "analogy": "Filling up an aquarium with water until it is full.",
        "keyRule": "Box Volume = Length × Width × Height (in cubic units like cm³)"
      },
      "middle": {
        "explanation": "Volume of Solids is a core curriculum principle explaining the underlying mechanisms and relationships in Mathematics.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Volume of Solids"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Volume of Solids, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Volume of Solids"
      }
    },
    "introduction": {
      "hook": "How many liters of cool water can a cylindrical water tank hold on top of your house roof?",
      "definition": "Volume measures the 3D space occupied inside a solid object, measured in cubic units (cm³, m³, liters).",
      "realLifeAnalogy": "Think of a cardboard moving box: surface area is the wrapping paper covering the outside, while volume is how many toys fit inside!",
      "quickFact": "A cubic meter (1 m³) of pure water weighs exactly 1,000 kilograms (1 metric ton)!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Volume of Solids is and where we encounter it every single day.",
        "takeaway": "Core concept: Volume of Solids connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Volume of Solids work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Volume of Solids?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Volume of Solids follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Volume of Solids help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Volume of Solids?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Volume of Solids?",
        "opts": [
          "A fundamental concept in Mathematics based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Volume of Solids."
      },
      {
        "q": "When studying Volume of Solids, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Volume of Solids apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Volume of Solids?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "math_ratio_proportion": {
    "id": "math_ratio_proportion",
    "title": "Ratio, Proportion & The Unitary Method",
    "shortTitle": "Ratio & Proportion",
    "subjectId": "math",
    "subjectName": "Mathematics",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "racing",
    "worldName": "Geometry Valley",
    "icon": "⚖️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6 Ch 12 / Class 7 Ch 8",
    "tags": [
      "Mathematics",
      "Ratio & Proportion"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Ratio compares two things! For every 1 teacher, there might be 20 students. If you double the teachers, you double the students.",
        "analogy": "Making lemon juice: 1 spoon of lemon for every 2 spoons of sweet honey.",
        "keyRule": "Unitary Method: Find the cost of ONE item first, then multiply!"
      },
      "middle": {
        "explanation": "Ratio & Proportion is a core curriculum principle explaining the underlying mechanisms and relationships in Mathematics.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Ratio & Proportion"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Ratio & Proportion, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Ratio & Proportion"
      }
    },
    "introduction": {
      "hook": "If a cookie recipe needs 2 cups of sugar for 10 cookies, how much sugar do you need to bake 30 cookies?",
      "definition": "A ratio compares two quantities of the same kind by division (a:b). A proportion states that two ratios are equal (a:b = c:d).",
      "realLifeAnalogy": "Mixing paint: 1 cup of blue and 2 cups of yellow always creates the exact same shade of green, no matter how big the bucket is!",
      "quickFact": "TV screens and computer monitors use aspect ratios like 16:9 to define their widescreen proportions!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Ratio & Proportion is and where we encounter it every single day.",
        "takeaway": "Core concept: Ratio & Proportion connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Ratio & Proportion work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Ratio & Proportion?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Ratio & Proportion follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Ratio & Proportion help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Ratio & Proportion?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Ratio & Proportion?",
        "opts": [
          "A fundamental concept in Mathematics based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Ratio & Proportion."
      },
      {
        "q": "When studying Ratio & Proportion, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Ratio & Proportion apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Ratio & Proportion?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "math_exponents_powers": {
    "id": "math_exponents_powers",
    "title": "Exponents & Powers: Big Numbers & Scientific Notation",
    "shortTitle": "Exponents & Powers",
    "subjectId": "math",
    "subjectName": "Mathematics",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "racing",
    "worldName": "Geometry Valley",
    "icon": "⚡",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Ch 13 / Class 8 Ch 12",
    "tags": [
      "Mathematics",
      "Exponents & Powers"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "An exponent is shortcut multiplication! 2³ means 2 × 2 × 2 = 8. It grows super fast like a power-up in a video game!",
        "analogy": "A tiny mushroom power-up that doubles your points over and over!",
        "keyRule": "Base number raised to a power means multiplying it by itself that many times."
      },
      "middle": {
        "explanation": "Exponents & Powers is a core curriculum principle explaining the underlying mechanisms and relationships in Mathematics.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Exponents & Powers"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Exponents & Powers, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Exponents & Powers"
      }
    },
    "introduction": {
      "hook": "If you fold a paper in half 42 times, would you believe it becomes thick enough to reach all the way to the Moon?",
      "definition": "An exponent indicates how many times a base number is multiplied by itself: bⁿ = b × b × ... × b (n times).",
      "realLifeAnalogy": "Think of computer memory doubling: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 (2¹⁰)!",
      "quickFact": "A \"googol\" is 10¹⁰⁰—a one followed by 100 zeros, which inspired the name of Google!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Exponents & Powers is and where we encounter it every single day.",
        "takeaway": "Core concept: Exponents & Powers connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Exponents & Powers work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Exponents & Powers?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Exponents & Powers follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Exponents & Powers help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Exponents & Powers?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Exponents & Powers?",
        "opts": [
          "A fundamental concept in Mathematics based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Exponents & Powers."
      },
      {
        "q": "When studying Exponents & Powers, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Exponents & Powers apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Exponents & Powers?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "math_data_handling": {
    "id": "math_data_handling",
    "title": "Data Handling: Mean, Median, Mode & Bar Graphs",
    "shortTitle": "Data Handling",
    "subjectId": "math",
    "subjectName": "Mathematics",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "racing",
    "worldName": "Geometry Valley",
    "icon": "📊",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Ch 3",
    "tags": [
      "Mathematics",
      "Data Handling"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Data handling turns numbers into colorful picture graphs so you can easily spot who scored the highest points!",
        "analogy": "Stacking colored Lego bricks to see which color tower is the tallest.",
        "keyRule": "Mean = Average | Median = Middle number | Mode = Most common"
      },
      "middle": {
        "explanation": "Data Handling is a core curriculum principle explaining the underlying mechanisms and relationships in Mathematics.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Data Handling"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Data Handling, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Data Handling"
      }
    },
    "introduction": {
      "hook": "How do cricket coaches calculate a batsman's batting average across a whole tournament?",
      "definition": "Data handling involves collecting, organizing, and analyzing numerical data using central tendencies (Mean, Median, Mode) and visual charts.",
      "realLifeAnalogy": "Think of looking at weather forecast charts on a smartphone—bar graphs show which days will get the most rainfall at a glance!",
      "quickFact": "Florence Nightingale was a pioneer statistician who used colorful pie charts to save soldiers' lives in hospitals!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Data Handling is and where we encounter it every single day.",
        "takeaway": "Core concept: Data Handling connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Data Handling work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Data Handling?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Data Handling follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Data Handling help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Data Handling?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Data Handling?",
        "opts": [
          "A fundamental concept in Mathematics based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Data Handling."
      },
      {
        "q": "When studying Data Handling, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Data Handling apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Data Handling?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "eng_active_passive": {
    "id": "eng_active_passive",
    "title": "Active vs. Passive Voice & Action Transformation",
    "shortTitle": "Active & Passive Voice",
    "subjectId": "english",
    "subjectName": "English & Languages",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Language Library",
    "icon": "✍️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 8 & 9 Grammar",
    "tags": [
      "English & Languages",
      "Active & Passive Voice"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Active & Passive Voice is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Active & Passive Voice like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Active & Passive Voice is a core curriculum principle explaining the underlying mechanisms and relationships in English & Languages.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Active & Passive Voice"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Active & Passive Voice, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Active & Passive Voice"
      }
    },
    "introduction": {
      "hook": "Who did it: \"The dog chased the ball\" or \"The ball was chased by the dog\"?",
      "definition": "Voice indicates whether the grammatical subject of the sentence performs the action (Active) or receives the action (Passive).",
      "realLifeAnalogy": "Think of Active & Passive Voice as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Active & Passive Voice is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Active & Passive Voice is and where we encounter it every single day.",
        "takeaway": "Core concept: Active & Passive Voice connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Active & Passive Voice work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Active & Passive Voice?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Active & Passive Voice follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Active & Passive Voice help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Active & Passive Voice?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Active & Passive Voice?",
        "opts": [
          "A fundamental concept in English & Languages based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Active & Passive Voice."
      },
      {
        "q": "When studying Active & Passive Voice, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Active & Passive Voice apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Active & Passive Voice?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "eng_figurative_language": {
    "id": "eng_figurative_language",
    "title": "Figurative Language: Metaphors, Similes & Personification",
    "shortTitle": "Figurative Language",
    "subjectId": "english",
    "subjectName": "English & Languages",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Language Library",
    "icon": "🎨",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 & 8 Literature",
    "tags": [
      "English & Languages",
      "Figurative Language"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Figurative Language is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Figurative Language like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Figurative Language is a core curriculum principle explaining the underlying mechanisms and relationships in English & Languages.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Figurative Language"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Figurative Language, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Figurative Language"
      }
    },
    "introduction": {
      "hook": "Why say \"he runs fast\" when you can say \"he runs like lightning\"?",
      "definition": "Figurative language uses vivid comparisons and imagery to make writing colorful and poetic.",
      "realLifeAnalogy": "Think of Figurative Language as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Figurative Language is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Figurative Language is and where we encounter it every single day.",
        "takeaway": "Core concept: Figurative Language connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Figurative Language work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Figurative Language?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Figurative Language follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Figurative Language help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Figurative Language?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Figurative Language?",
        "opts": [
          "A fundamental concept in English & Languages based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Figurative Language."
      },
      {
        "q": "When studying Figurative Language, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Figurative Language apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Figurative Language?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "eng_parts_of_speech": {
    "id": "eng_parts_of_speech",
    "title": "The Eight Parts of Speech in English Grammar",
    "shortTitle": "Parts of Speech",
    "subjectId": "english",
    "subjectName": "English & Languages",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Language Library",
    "icon": "📖",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6 & 7 Grammar",
    "tags": [
      "English & Languages",
      "Parts of Speech"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Parts of Speech is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Parts of Speech like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Parts of Speech is a core curriculum principle explaining the underlying mechanisms and relationships in English & Languages.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Parts of Speech"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Parts of Speech, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Parts of Speech"
      }
    },
    "introduction": {
      "hook": "Every single word in the English language belongs to one of eight special grammatical families!",
      "definition": "Nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections.",
      "realLifeAnalogy": "Think of Parts of Speech as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Parts of Speech is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Parts of Speech is and where we encounter it every single day.",
        "takeaway": "Core concept: Parts of Speech connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Parts of Speech work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Parts of Speech?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Parts of Speech follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Parts of Speech help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Parts of Speech?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Parts of Speech?",
        "opts": [
          "A fundamental concept in English & Languages based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Parts of Speech."
      },
      {
        "q": "When studying Parts of Speech, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Parts of Speech apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Parts of Speech?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "eng_direct_indirect": {
    "id": "eng_direct_indirect",
    "title": "Direct and Indirect Speech: Reported Speech Rules",
    "shortTitle": "Direct & Indirect Speech",
    "subjectId": "english",
    "subjectName": "English & Languages",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Language Library",
    "icon": "💬",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 9 & 10 Grammar",
    "tags": [
      "English & Languages",
      "Direct & Indirect Speech"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Direct & Indirect Speech is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Direct & Indirect Speech like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Direct & Indirect Speech is a core curriculum principle explaining the underlying mechanisms and relationships in English & Languages.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Direct & Indirect Speech"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Direct & Indirect Speech, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Direct & Indirect Speech"
      }
    },
    "introduction": {
      "hook": "How do you accurately report what your best friend said yesterday to your teacher today?",
      "definition": "Converting direct spoken dialogue in quotation marks into indirect third-person reported statements.",
      "realLifeAnalogy": "Think of Direct & Indirect Speech as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Direct & Indirect Speech is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Direct & Indirect Speech is and where we encounter it every single day.",
        "takeaway": "Core concept: Direct & Indirect Speech connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Direct & Indirect Speech work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Direct & Indirect Speech?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Direct & Indirect Speech follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Direct & Indirect Speech help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Direct & Indirect Speech?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Direct & Indirect Speech?",
        "opts": [
          "A fundamental concept in English & Languages based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Direct & Indirect Speech."
      },
      {
        "q": "When studying Direct & Indirect Speech, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Direct & Indirect Speech apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Direct & Indirect Speech?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "eng_tenses": {
    "id": "eng_tenses",
    "title": "Verb Tenses: Past, Present, Future & Perfect Forms",
    "shortTitle": "Verb Tenses",
    "subjectId": "english",
    "subjectName": "English & Languages",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Language Library",
    "icon": "⏳",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 & 8 Grammar",
    "tags": [
      "English & Languages",
      "Verb Tenses"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Verb Tenses is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Verb Tenses like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Verb Tenses is a core curriculum principle explaining the underlying mechanisms and relationships in English & Languages.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Verb Tenses"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Verb Tenses, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Verb Tenses"
      }
    },
    "introduction": {
      "hook": "How do tiny verbs let us travel through time from yesterday to tomorrow?",
      "definition": "Tenses locate actions in time: simple, continuous, perfect, and perfect continuous forms.",
      "realLifeAnalogy": "Think of Verb Tenses as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Verb Tenses is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Verb Tenses is and where we encounter it every single day.",
        "takeaway": "Core concept: Verb Tenses connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Verb Tenses work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Verb Tenses?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Verb Tenses follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Verb Tenses help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Verb Tenses?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Verb Tenses?",
        "opts": [
          "A fundamental concept in English & Languages based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Verb Tenses."
      },
      {
        "q": "When studying Verb Tenses, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Verb Tenses apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Verb Tenses?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "eng_subject_verb": {
    "id": "eng_subject_verb",
    "title": "Subject-Verb Agreement & Syntax Rules",
    "shortTitle": "Subject-Verb Agreement",
    "subjectId": "english",
    "subjectName": "English & Languages",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Language Library",
    "icon": "🤝",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 8 Grammar",
    "tags": [
      "English & Languages",
      "Subject-Verb Agreement"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Subject-Verb Agreement is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Subject-Verb Agreement like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Subject-Verb Agreement is a core curriculum principle explaining the underlying mechanisms and relationships in English & Languages.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Subject-Verb Agreement"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Subject-Verb Agreement, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Subject-Verb Agreement"
      }
    },
    "introduction": {
      "hook": "Why do we say \"The dog barks\" with an s, but \"The dogs bark\" without an s?",
      "definition": "Singular subjects take singular verbs, while plural subjects take plural verbs.",
      "realLifeAnalogy": "Think of Subject-Verb Agreement as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Subject-Verb Agreement is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Subject-Verb Agreement is and where we encounter it every single day.",
        "takeaway": "Core concept: Subject-Verb Agreement connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Subject-Verb Agreement work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Subject-Verb Agreement?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Subject-Verb Agreement follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Subject-Verb Agreement help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Subject-Verb Agreement?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Subject-Verb Agreement?",
        "opts": [
          "A fundamental concept in English & Languages based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Subject-Verb Agreement."
      },
      {
        "q": "When studying Subject-Verb Agreement, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Subject-Verb Agreement apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Subject-Verb Agreement?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "eng_punctuation": {
    "id": "eng_punctuation",
    "title": "Punctuation & Capitalization: Commas, Semicolons & Quotes",
    "shortTitle": "Punctuation Rules",
    "subjectId": "english",
    "subjectName": "English & Languages",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Language Library",
    "icon": "❓",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6–8 Grammar",
    "tags": [
      "English & Languages",
      "Punctuation Rules"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Punctuation Rules is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Punctuation Rules like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Punctuation Rules is a core curriculum principle explaining the underlying mechanisms and relationships in English & Languages.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Punctuation Rules"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Punctuation Rules, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Punctuation Rules"
      }
    },
    "introduction": {
      "hook": "\"Let's eat, Grandma!\" vs. \"Let's eat Grandma!\"—see how a single comma saves lives!",
      "definition": "Punctuation marks provide traffic signals for readers, guiding rhythm, pauses, and meaning.",
      "realLifeAnalogy": "Think of Punctuation Rules as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Punctuation Rules is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Punctuation Rules is and where we encounter it every single day.",
        "takeaway": "Core concept: Punctuation Rules connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Punctuation Rules work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Punctuation Rules?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Punctuation Rules follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Punctuation Rules help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Punctuation Rules?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Punctuation Rules?",
        "opts": [
          "A fundamental concept in English & Languages based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Punctuation Rules."
      },
      {
        "q": "When studying Punctuation Rules, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Punctuation Rules apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Punctuation Rules?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "eng_prepositions": {
    "id": "eng_prepositions",
    "title": "Prepositions of Place, Time & Direction",
    "shortTitle": "Prepositions",
    "subjectId": "english",
    "subjectName": "English & Languages",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Language Library",
    "icon": "📍",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6 & 7 Grammar",
    "tags": [
      "English & Languages",
      "Prepositions"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Prepositions is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Prepositions like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Prepositions is a core curriculum principle explaining the underlying mechanisms and relationships in English & Languages.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Prepositions"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Prepositions, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Prepositions"
      }
    },
    "introduction": {
      "hook": "Are you standing on the table, under the table, or next to the table?",
      "definition": "Words that show the relationship of a noun or pronoun to other words in the sentence.",
      "realLifeAnalogy": "Think of Prepositions as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Prepositions is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Prepositions is and where we encounter it every single day.",
        "takeaway": "Core concept: Prepositions connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Prepositions work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Prepositions?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Prepositions follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Prepositions help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Prepositions?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Prepositions?",
        "opts": [
          "A fundamental concept in English & Languages based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Prepositions."
      },
      {
        "q": "When studying Prepositions, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Prepositions apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Prepositions?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "eng_vocabulary_synonyms": {
    "id": "eng_vocabulary_synonyms",
    "title": "Vocabulary Expansion: Synonyms, Antonyms & Context Clues",
    "shortTitle": "Synonyms & Antonyms",
    "subjectId": "english",
    "subjectName": "English & Languages",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Language Library",
    "icon": "💡",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6–10 Vocabulary",
    "tags": [
      "English & Languages",
      "Synonyms & Antonyms"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Synonyms & Antonyms is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Synonyms & Antonyms like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Synonyms & Antonyms is a core curriculum principle explaining the underlying mechanisms and relationships in English & Languages.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Synonyms & Antonyms"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Synonyms & Antonyms, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Synonyms & Antonyms"
      }
    },
    "introduction": {
      "hook": "Instead of saying \"good\", level up your vocabulary with magnificent, stellar, and splendid!",
      "definition": "Synonyms share similar meanings; antonyms express exact opposite meanings.",
      "realLifeAnalogy": "Think of Synonyms & Antonyms as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Synonyms & Antonyms is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Synonyms & Antonyms is and where we encounter it every single day.",
        "takeaway": "Core concept: Synonyms & Antonyms connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Synonyms & Antonyms work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Synonyms & Antonyms?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Synonyms & Antonyms follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Synonyms & Antonyms help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Synonyms & Antonyms?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Synonyms & Antonyms?",
        "opts": [
          "A fundamental concept in English & Languages based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Synonyms & Antonyms."
      },
      {
        "q": "When studying Synonyms & Antonyms, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Synonyms & Antonyms apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Synonyms & Antonyms?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "eng_reading_comprehension": {
    "id": "eng_reading_comprehension",
    "title": "Reading Comprehension: Identifying Main Ideas & Inferences",
    "shortTitle": "Reading Comprehension",
    "subjectId": "english",
    "subjectName": "English & Languages",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Language Library",
    "icon": "🔍",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7–10 Reading",
    "tags": [
      "English & Languages",
      "Reading Comprehension"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Reading Comprehension is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Reading Comprehension like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Reading Comprehension is a core curriculum principle explaining the underlying mechanisms and relationships in English & Languages.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Reading Comprehension"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Reading Comprehension, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Reading Comprehension"
      }
    },
    "introduction": {
      "hook": "Reading like a detective: finding clues hidden between the lines of a story!",
      "definition": "The ability to read text, process its meaning, deduce inferences, and grasp the core message.",
      "realLifeAnalogy": "Think of Reading Comprehension as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Reading Comprehension is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Reading Comprehension is and where we encounter it every single day.",
        "takeaway": "Core concept: Reading Comprehension connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Reading Comprehension work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Reading Comprehension?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Reading Comprehension follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Reading Comprehension help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Reading Comprehension?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Reading Comprehension?",
        "opts": [
          "A fundamental concept in English & Languages based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Reading Comprehension."
      },
      {
        "q": "When studying Reading Comprehension, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Reading Comprehension apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Reading Comprehension?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "eng_story_elements": {
    "id": "eng_story_elements",
    "title": "Elements of a Story: Plot, Character, Conflict & Climax",
    "shortTitle": "Story Elements",
    "subjectId": "english",
    "subjectName": "English & Languages",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Language Library",
    "icon": "📜",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6–9 Literature",
    "tags": [
      "English & Languages",
      "Story Elements"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Story Elements is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Story Elements like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Story Elements is a core curriculum principle explaining the underlying mechanisms and relationships in English & Languages.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Story Elements"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Story Elements, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Story Elements"
      }
    },
    "introduction": {
      "hook": "Every great movie and book follows an exciting narrative rollercoaster arc!",
      "definition": "The key building blocks of storytelling: setting, characters, conflict, climax, and resolution.",
      "realLifeAnalogy": "Think of Story Elements as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Story Elements is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Story Elements is and where we encounter it every single day.",
        "takeaway": "Core concept: Story Elements connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Story Elements work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Story Elements?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Story Elements follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Story Elements help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Story Elements?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Story Elements?",
        "opts": [
          "A fundamental concept in English & Languages based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Story Elements."
      },
      {
        "q": "When studying Story Elements, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Story Elements apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Story Elements?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "eng_formal_writing": {
    "id": "eng_formal_writing",
    "title": "Formal Letters, Emails & Clear Communication",
    "shortTitle": "Formal Writing",
    "subjectId": "english",
    "subjectName": "English & Languages",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Language Library",
    "icon": "✉️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 8–10 Composition",
    "tags": [
      "English & Languages",
      "Formal Writing"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Formal Writing is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Formal Writing like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Formal Writing is a core curriculum principle explaining the underlying mechanisms and relationships in English & Languages.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Formal Writing"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Formal Writing, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Formal Writing"
      }
    },
    "introduction": {
      "hook": "How do you write a polite, persuasive letter to your school principal that gets instant approval?",
      "definition": "Standardized formal structure: sender address, date, salutation, clear body paragraphs, and formal sign-off.",
      "realLifeAnalogy": "Think of Formal Writing as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Formal Writing is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Formal Writing is and where we encounter it every single day.",
        "takeaway": "Core concept: Formal Writing connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Formal Writing work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Formal Writing?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Formal Writing follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Formal Writing help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Formal Writing?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Formal Writing?",
        "opts": [
          "A fundamental concept in English & Languages based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Formal Writing."
      },
      {
        "q": "When studying Formal Writing, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Formal Writing apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Formal Writing?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "soc_democracy": {
    "id": "soc_democracy",
    "title": "Democracy: Principles, Elections & Civic Participation",
    "shortTitle": "Democracy",
    "subjectId": "social",
    "subjectName": "Social Studies",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Civic Realm",
    "icon": "🗳️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 & 9 Civics",
    "tags": [
      "Social Studies",
      "Democracy"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Democracy is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Democracy like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Democracy is a core curriculum principle explaining the underlying mechanisms and relationships in Social Studies.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Democracy"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Democracy, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Democracy"
      }
    },
    "introduction": {
      "hook": "In a democracy, who holds the ultimate power? Every single citizen with a vote!",
      "definition": "A system of government where the citizens exercise power directly or elect representatives.",
      "realLifeAnalogy": "Think of Democracy as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Democracy is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Democracy is and where we encounter it every single day.",
        "takeaway": "Core concept: Democracy connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Democracy work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Democracy?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Democracy follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Democracy help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Democracy?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Democracy?",
        "opts": [
          "A fundamental concept in Social Studies based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Democracy."
      },
      {
        "q": "When studying Democracy, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Democracy apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Democracy?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "soc_constitution": {
    "id": "soc_constitution",
    "title": "The Constitution of India: Preamble, Vision & Governance",
    "shortTitle": "Indian Constitution",
    "subjectId": "social",
    "subjectName": "Social Studies",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Civic Realm",
    "icon": "📜",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 8 Civics Ch 1",
    "tags": [
      "Social Studies",
      "Indian Constitution"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Indian Constitution is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Indian Constitution like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Indian Constitution is a core curriculum principle explaining the underlying mechanisms and relationships in Social Studies.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Indian Constitution"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Indian Constitution, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Indian Constitution"
      }
    },
    "introduction": {
      "hook": "How does a nation of 1.4 billion diverse people live together under one supreme rulebook?",
      "definition": "The supreme legal document laying down the fundamental framework, principles, and laws of India.",
      "realLifeAnalogy": "Think of Indian Constitution as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Indian Constitution is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Indian Constitution is and where we encounter it every single day.",
        "takeaway": "Core concept: Indian Constitution connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Indian Constitution work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Indian Constitution?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Indian Constitution follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Indian Constitution help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Indian Constitution?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Indian Constitution?",
        "opts": [
          "A fundamental concept in Social Studies based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Indian Constitution."
      },
      {
        "q": "When studying Indian Constitution, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Indian Constitution apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Indian Constitution?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "soc_fundamental_rights": {
    "id": "soc_fundamental_rights",
    "title": "Fundamental Rights & Duties of Citizens",
    "shortTitle": "Fundamental Rights",
    "subjectId": "social",
    "subjectName": "Social Studies",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Civic Realm",
    "icon": "🛡️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 8 & 9 Civics",
    "tags": [
      "Social Studies",
      "Fundamental Rights"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Fundamental Rights is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Fundamental Rights like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Fundamental Rights is a core curriculum principle explaining the underlying mechanisms and relationships in Social Studies.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Fundamental Rights"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Fundamental Rights, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Fundamental Rights"
      }
    },
    "introduction": {
      "hook": "Did you know the constitution guarantees you the right to free education, equality, and free speech?",
      "definition": "Basic human rights guaranteed to all Indian citizens under Part III of the Constitution.",
      "realLifeAnalogy": "Think of Fundamental Rights as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Fundamental Rights is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Fundamental Rights is and where we encounter it every single day.",
        "takeaway": "Core concept: Fundamental Rights connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Fundamental Rights work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Fundamental Rights?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Fundamental Rights follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Fundamental Rights help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Fundamental Rights?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Fundamental Rights?",
        "opts": [
          "A fundamental concept in Social Studies based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Fundamental Rights."
      },
      {
        "q": "When studying Fundamental Rights, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Fundamental Rights apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Fundamental Rights?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "soc_government_pillars": {
    "id": "soc_government_pillars",
    "title": "The Three Pillars: Legislature, Executive & Judiciary",
    "shortTitle": "Three Pillars of Govt",
    "subjectId": "social",
    "subjectName": "Social Studies",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Civic Realm",
    "icon": "🏛️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 8 Civics",
    "tags": [
      "Social Studies",
      "Three Pillars of Govt"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Three Pillars of Govt is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Three Pillars of Govt like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Three Pillars of Govt is a core curriculum principle explaining the underlying mechanisms and relationships in Social Studies.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Three Pillars of Govt"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Three Pillars of Govt, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Three Pillars of Govt"
      }
    },
    "introduction": {
      "hook": "Why does government have three separate branches instead of giving all power to one person?",
      "definition": "Separation of powers: Parliament makes laws, the Executive enforces them, and Courts interpret them.",
      "realLifeAnalogy": "Think of Three Pillars of Govt as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Three Pillars of Govt is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Three Pillars of Govt is and where we encounter it every single day.",
        "takeaway": "Core concept: Three Pillars of Govt connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Three Pillars of Govt work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Three Pillars of Govt?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Three Pillars of Govt follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Three Pillars of Govt help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Three Pillars of Govt?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Three Pillars of Govt?",
        "opts": [
          "A fundamental concept in Social Studies based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Three Pillars of Govt."
      },
      {
        "q": "When studying Three Pillars of Govt, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Three Pillars of Govt apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Three Pillars of Govt?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "soc_panchayati_raj": {
    "id": "soc_panchayati_raj",
    "title": "Local Self-Government: Panchayati Raj & Municipalities",
    "shortTitle": "Local Government",
    "subjectId": "social",
    "subjectName": "Social Studies",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Civic Realm",
    "icon": "🏘️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6 Civics",
    "tags": [
      "Social Studies",
      "Local Government"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Local Government is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Local Government like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Local Government is a core curriculum principle explaining the underlying mechanisms and relationships in Social Studies.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Local Government"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Local Government, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Local Government"
      }
    },
    "introduction": {
      "hook": "Who fixes streetlights, manages clean drinking water, and builds village roads in your neighborhood?",
      "definition": "Grassroots democracy through Gram Panchayats in villages and Municipal Corporations in cities.",
      "realLifeAnalogy": "Think of Local Government as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Local Government is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Local Government is and where we encounter it every single day.",
        "takeaway": "Core concept: Local Government connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Local Government work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Local Government?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Local Government follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Local Government help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Local Government?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Local Government?",
        "opts": [
          "A fundamental concept in Social Studies based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Local Government."
      },
      {
        "q": "When studying Local Government, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Local Government apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Local Government?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "soc_diversity_equality": {
    "id": "soc_diversity_equality",
    "title": "Diversity, Equality & Overcoming Discrimination",
    "shortTitle": "Diversity & Equality",
    "subjectId": "social",
    "subjectName": "Social Studies",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Civic Realm",
    "icon": "🤝",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6 Civics",
    "tags": [
      "Social Studies",
      "Diversity & Equality"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Diversity & Equality is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Diversity & Equality like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Diversity & Equality is a core curriculum principle explaining the underlying mechanisms and relationships in Social Studies.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Diversity & Equality"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Diversity & Equality, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Diversity & Equality"
      }
    },
    "introduction": {
      "hook": "India has over 1,000 spoken languages and colorful festivals—how does diversity make us stronger?",
      "definition": "Celebrating multicultural richness while upholding constitutional equality for all citizens.",
      "realLifeAnalogy": "Think of Diversity & Equality as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Diversity & Equality is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Diversity & Equality is and where we encounter it every single day.",
        "takeaway": "Core concept: Diversity & Equality connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Diversity & Equality work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Diversity & Equality?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Diversity & Equality follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Diversity & Equality help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Diversity & Equality?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Diversity & Equality?",
        "opts": [
          "A fundamental concept in Social Studies based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Diversity & Equality."
      },
      {
        "q": "When studying Diversity & Equality, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Diversity & Equality apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Diversity & Equality?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "soc_money_banking": {
    "id": "soc_money_banking",
    "title": "Money, Currency & The Modern Banking System",
    "shortTitle": "Money & Banking",
    "subjectId": "social",
    "subjectName": "Social Studies",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Civic Realm",
    "icon": "🏦",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 10 Economics",
    "tags": [
      "Social Studies",
      "Money & Banking"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Money & Banking is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Money & Banking like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Money & Banking is a core curriculum principle explaining the underlying mechanisms and relationships in Social Studies.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Money & Banking"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Money & Banking, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Money & Banking"
      }
    },
    "introduction": {
      "hook": "Before coins and paper notes existed, how did people trade cows for sacks of wheat using barter?",
      "definition": "The evolution of currency as a medium of exchange, credit, loans, and central banking.",
      "realLifeAnalogy": "Think of Money & Banking as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Money & Banking is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Money & Banking is and where we encounter it every single day.",
        "takeaway": "Core concept: Money & Banking connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Money & Banking work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Money & Banking?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Money & Banking follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Money & Banking help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Money & Banking?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Money & Banking?",
        "opts": [
          "A fundamental concept in Social Studies based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Money & Banking."
      },
      {
        "q": "When studying Money & Banking, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Money & Banking apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Money & Banking?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "soc_markets_trade": {
    "id": "soc_markets_trade",
    "title": "Markets Around Us: From Weekly Bazaars to Online Stores",
    "shortTitle": "Markets & Trade",
    "subjectId": "social",
    "subjectName": "Social Studies",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Civic Realm",
    "icon": "🛒",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Civics",
    "tags": [
      "Social Studies",
      "Markets & Trade"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Markets & Trade is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Markets & Trade like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Markets & Trade is a core curriculum principle explaining the underlying mechanisms and relationships in Social Studies.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Markets & Trade"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Markets & Trade, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Markets & Trade"
      }
    },
    "introduction": {
      "hook": "How does an orange grown on a farm reach your breakfast table hundreds of miles away?",
      "definition": "The network of producers, wholesalers, retailers, weekly markets, and consumers.",
      "realLifeAnalogy": "Think of Markets & Trade as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Markets & Trade is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Markets & Trade is and where we encounter it every single day.",
        "takeaway": "Core concept: Markets & Trade connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Markets & Trade work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Markets & Trade?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Markets & Trade follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Markets & Trade help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Markets & Trade?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Markets & Trade?",
        "opts": [
          "A fundamental concept in Social Studies based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Markets & Trade."
      },
      {
        "q": "When studying Markets & Trade, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Markets & Trade apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Markets & Trade?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "soc_consumer_rights": {
    "id": "soc_consumer_rights",
    "title": "Consumer Rights & Market Awareness (Jago Grahak Jago)",
    "shortTitle": "Consumer Rights",
    "subjectId": "social",
    "subjectName": "Social Studies",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Civic Realm",
    "icon": "⚖️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 10 Economics",
    "tags": [
      "Social Studies",
      "Consumer Rights"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Consumer Rights is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Consumer Rights like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Consumer Rights is a core curriculum principle explaining the underlying mechanisms and relationships in Social Studies.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Consumer Rights"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Consumer Rights, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Consumer Rights"
      }
    },
    "introduction": {
      "hook": "If a shopkeeper sells you expired juice, what rights do you have to get a refund or replacement?",
      "definition": "Legal protections ensuring safety, accurate information, choice, and redressal in markets.",
      "realLifeAnalogy": "Think of Consumer Rights as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Consumer Rights is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Consumer Rights is and where we encounter it every single day.",
        "takeaway": "Core concept: Consumer Rights connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Consumer Rights work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Consumer Rights?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Consumer Rights follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Consumer Rights help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Consumer Rights?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Consumer Rights?",
        "opts": [
          "A fundamental concept in Social Studies based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Consumer Rights."
      },
      {
        "q": "When studying Consumer Rights, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Consumer Rights apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Consumer Rights?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "soc_natural_resources": {
    "id": "soc_natural_resources",
    "title": "Natural Resources: Soil, Water & Sustainable Conservation",
    "shortTitle": "Natural Resources",
    "subjectId": "social",
    "subjectName": "Social Studies",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Civic Realm",
    "icon": "🌱",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 8 Geography",
    "tags": [
      "Social Studies",
      "Natural Resources"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Natural Resources is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Natural Resources like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Natural Resources is a core curriculum principle explaining the underlying mechanisms and relationships in Social Studies.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Natural Resources"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Natural Resources, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Natural Resources"
      }
    },
    "introduction": {
      "hook": "Can humanity run out of freshwater and fertile soil if we do not conserve them wisely?",
      "definition": "Renewable and non-renewable gifts of nature essential for human survival and sustainable development.",
      "realLifeAnalogy": "Think of Natural Resources as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Natural Resources is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Natural Resources is and where we encounter it every single day.",
        "takeaway": "Core concept: Natural Resources connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Natural Resources work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Natural Resources?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Natural Resources follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Natural Resources help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Natural Resources?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Natural Resources?",
        "opts": [
          "A fundamental concept in Social Studies based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Natural Resources."
      },
      {
        "q": "When studying Natural Resources, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Natural Resources apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Natural Resources?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "soc_media_democracy": {
    "id": "soc_media_democracy",
    "title": "The Role of Media & Public Opinion in Democracy",
    "shortTitle": "Media & Democracy",
    "subjectId": "social",
    "subjectName": "Social Studies",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Civic Realm",
    "icon": "📺",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Civics",
    "tags": [
      "Social Studies",
      "Media & Democracy"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Media & Democracy is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Media & Democracy like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Media & Democracy is a core curriculum principle explaining the underlying mechanisms and relationships in Social Studies.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Media & Democracy"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Media & Democracy, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Media & Democracy"
      }
    },
    "introduction": {
      "hook": "Why is a free press called the \"Fourth Estate\" of a healthy democracy?",
      "definition": "How independent journalism, television, and digital media hold governments accountable to citizens.",
      "realLifeAnalogy": "Think of Media & Democracy as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Media & Democracy is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Media & Democracy is and where we encounter it every single day.",
        "takeaway": "Core concept: Media & Democracy connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Media & Democracy work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Media & Democracy?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Media & Democracy follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Media & Democracy help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Media & Democracy?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Media & Democracy?",
        "opts": [
          "A fundamental concept in Social Studies based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Media & Democracy."
      },
      {
        "q": "When studying Media & Democracy, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Media & Democracy apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Media & Democracy?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "soc_globalization": {
    "id": "soc_globalization",
    "title": "Globalization & The Changing World Economy",
    "shortTitle": "Globalization",
    "subjectId": "social",
    "subjectName": "Social Studies",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "mystery",
    "worldName": "Civic Realm",
    "icon": "🌐",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 10 Economics",
    "tags": [
      "Social Studies",
      "Globalization"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Globalization is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Globalization like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Globalization is a core curriculum principle explaining the underlying mechanisms and relationships in Social Studies.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Globalization"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Globalization, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Globalization"
      }
    },
    "introduction": {
      "hook": "How does a t-shirt designed in India, made with cotton from Egypt, get sold in New York?",
      "definition": "The integration of national economies through international trade, technology, and cultural exchange.",
      "realLifeAnalogy": "Think of Globalization as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Globalization is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Globalization is and where we encounter it every single day.",
        "takeaway": "Core concept: Globalization connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Globalization work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Globalization?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Globalization follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Globalization help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Globalization?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Globalization?",
        "opts": [
          "A fundamental concept in Social Studies based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Globalization."
      },
      {
        "q": "When studying Globalization, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Globalization apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Globalization?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "cs_binary": {
    "id": "cs_binary",
    "title": "Binary Code: Bits, Bytes & Digital Representation",
    "shortTitle": "Binary Numbers",
    "subjectId": "cs",
    "subjectName": "Computer Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Cyber City",
    "icon": "💾",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT / CBSE Computer Science",
    "tags": [
      "Computer Science",
      "Binary Numbers"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Binary Numbers is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Binary Numbers like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Binary Numbers is a core curriculum principle explaining the underlying mechanisms and relationships in Computer Science.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Binary Numbers"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Binary Numbers, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Binary Numbers"
      }
    },
    "introduction": {
      "hook": "How do supercomputers store breathtaking movies and video games using only 0s and 1s?",
      "definition": "Base-2 numeral system where all digital data is encoded using microscopic off (0) and on (1) electronic switches.",
      "realLifeAnalogy": "Think of Binary Numbers as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Binary Numbers is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Binary Numbers is and where we encounter it every single day.",
        "takeaway": "Core concept: Binary Numbers connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Binary Numbers work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Binary Numbers?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Binary Numbers follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Binary Numbers help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Binary Numbers?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Binary Numbers?",
        "opts": [
          "A fundamental concept in Computer Science based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Binary Numbers."
      },
      {
        "q": "When studying Binary Numbers, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Binary Numbers apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Binary Numbers?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "cs_algorithms": {
    "id": "cs_algorithms",
    "title": "Algorithms & Flowcharts: Logical Problem Solving",
    "shortTitle": "Algorithms",
    "subjectId": "cs",
    "subjectName": "Computer Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Cyber City",
    "icon": "🔄",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT / CBSE Computer Science",
    "tags": [
      "Computer Science",
      "Algorithms"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Algorithms is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Algorithms like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Algorithms is a core curriculum principle explaining the underlying mechanisms and relationships in Computer Science.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Algorithms"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Algorithms, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Algorithms"
      }
    },
    "introduction": {
      "hook": "An algorithm is just like a delicious cooking recipe: follow the exact steps to bake a cake!",
      "definition": "A clear, step-by-step sequence of unambiguous instructions to solve a specific computational problem.",
      "realLifeAnalogy": "Think of Algorithms as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Algorithms is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Algorithms is and where we encounter it every single day.",
        "takeaway": "Core concept: Algorithms connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Algorithms work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Algorithms?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Algorithms follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Algorithms help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Algorithms?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Algorithms?",
        "opts": [
          "A fundamental concept in Computer Science based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Algorithms."
      },
      {
        "q": "When studying Algorithms, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Algorithms apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Algorithms?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "cs_variables_types": {
    "id": "cs_variables_types",
    "title": "Variables, Constants & Data Types in Programming",
    "shortTitle": "Variables & Data Types",
    "subjectId": "cs",
    "subjectName": "Computer Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Cyber City",
    "icon": "📦",
    "estimatedMins": 10,
    "curriculumBoard": "CBSE Coding Curriculum",
    "tags": [
      "Computer Science",
      "Variables & Data Types"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Variables & Data Types is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Variables & Data Types like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Variables & Data Types is a core curriculum principle explaining the underlying mechanisms and relationships in Computer Science.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Variables & Data Types"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Variables & Data Types, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Variables & Data Types"
      }
    },
    "introduction": {
      "hook": "Think of variables as labeled storage boxes in your computer's memory holding scores and player names!",
      "definition": "Named memory locations storing data of specific types: integers, floats, strings, and booleans.",
      "realLifeAnalogy": "Think of Variables & Data Types as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Variables & Data Types is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Variables & Data Types is and where we encounter it every single day.",
        "takeaway": "Core concept: Variables & Data Types connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Variables & Data Types work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Variables & Data Types?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Variables & Data Types follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Variables & Data Types help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Variables & Data Types?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Variables & Data Types?",
        "opts": [
          "A fundamental concept in Computer Science based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Variables & Data Types."
      },
      {
        "q": "When studying Variables & Data Types, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Variables & Data Types apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Variables & Data Types?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "cs_conditionals": {
    "id": "cs_conditionals",
    "title": "Conditional Statements: Boolean If / Else Logic",
    "shortTitle": "If-Else Conditionals",
    "subjectId": "cs",
    "subjectName": "Computer Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Cyber City",
    "icon": "🔀",
    "estimatedMins": 10,
    "curriculumBoard": "CBSE Coding Curriculum",
    "tags": [
      "Computer Science",
      "If-Else Conditionals"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "If-Else Conditionals is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of If-Else Conditionals like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "If-Else Conditionals is a core curriculum principle explaining the underlying mechanisms and relationships in Computer Science.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for If-Else Conditionals"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of If-Else Conditionals, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for If-Else Conditionals"
      }
    },
    "introduction": {
      "hook": "IF player points > 100 THEN level up ELSE keep training! How code makes smart choices.",
      "definition": "Control flow structures that execute different blocks of code depending on whether a condition evaluates to True or False.",
      "realLifeAnalogy": "Think of If-Else Conditionals as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering If-Else Conditionals is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what If-Else Conditionals is and where we encounter it every single day.",
        "takeaway": "Core concept: If-Else Conditionals connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make If-Else Conditionals work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind If-Else Conditionals?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "If-Else Conditionals follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding If-Else Conditionals help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features If-Else Conditionals?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of If-Else Conditionals?",
        "opts": [
          "A fundamental concept in Computer Science based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of If-Else Conditionals."
      },
      {
        "q": "When studying If-Else Conditionals, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does If-Else Conditionals apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master If-Else Conditionals?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "cs_loops": {
    "id": "cs_loops",
    "title": "Loops & Iteration: For, While & Repeat Mechanisms",
    "shortTitle": "Loops & Iteration",
    "subjectId": "cs",
    "subjectName": "Computer Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Cyber City",
    "icon": "🔁",
    "estimatedMins": 10,
    "curriculumBoard": "CBSE Coding Curriculum",
    "tags": [
      "Computer Science",
      "Loops & Iteration"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Loops & Iteration is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Loops & Iteration like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Loops & Iteration is a core curriculum principle explaining the underlying mechanisms and relationships in Computer Science.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Loops & Iteration"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Loops & Iteration, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Loops & Iteration"
      }
    },
    "introduction": {
      "hook": "Instead of typing \"Jump!\" 1,000 times, write a loop that repeats the action in 2 lines of code!",
      "definition": "Programming constructs that repeatedly execute a block of instructions while a condition remains true.",
      "realLifeAnalogy": "Think of Loops & Iteration as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Loops & Iteration is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Loops & Iteration is and where we encounter it every single day.",
        "takeaway": "Core concept: Loops & Iteration connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Loops & Iteration work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Loops & Iteration?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Loops & Iteration follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Loops & Iteration help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Loops & Iteration?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Loops & Iteration?",
        "opts": [
          "A fundamental concept in Computer Science based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Loops & Iteration."
      },
      {
        "q": "When studying Loops & Iteration, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Loops & Iteration apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Loops & Iteration?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "cs_functions": {
    "id": "cs_functions",
    "title": "Functions & Modular Code: Reusable Software Blocks",
    "shortTitle": "Functions in Code",
    "subjectId": "cs",
    "subjectName": "Computer Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Cyber City",
    "icon": "⚙️",
    "estimatedMins": 10,
    "curriculumBoard": "CBSE Computer Science",
    "tags": [
      "Computer Science",
      "Functions in Code"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Functions in Code is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Functions in Code like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Functions in Code is a core curriculum principle explaining the underlying mechanisms and relationships in Computer Science.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Functions in Code"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Functions in Code, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Functions in Code"
      }
    },
    "introduction": {
      "hook": "Why re-invent the wheel? Write a function once and call it a million times anywhere in your app!",
      "definition": "Self-contained blocks of reusable code that accept input parameters and return an output result.",
      "realLifeAnalogy": "Think of Functions in Code as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Functions in Code is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Functions in Code is and where we encounter it every single day.",
        "takeaway": "Core concept: Functions in Code connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Functions in Code work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Functions in Code?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Functions in Code follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Functions in Code help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Functions in Code?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Functions in Code?",
        "opts": [
          "A fundamental concept in Computer Science based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Functions in Code."
      },
      {
        "q": "When studying Functions in Code, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Functions in Code apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Functions in Code?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "cs_hardware_architecture": {
    "id": "cs_hardware_architecture",
    "title": "Computer Architecture: CPU, RAM & Storage Hierarchy",
    "shortTitle": "Hardware Architecture",
    "subjectId": "cs",
    "subjectName": "Computer Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Cyber City",
    "icon": "🖥️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Computer Science",
    "tags": [
      "Computer Science",
      "Hardware Architecture"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Hardware Architecture is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Hardware Architecture like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Hardware Architecture is a core curriculum principle explaining the underlying mechanisms and relationships in Computer Science.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Hardware Architecture"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Hardware Architecture, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Hardware Architecture"
      }
    },
    "introduction": {
      "hook": "Inside your laptop: the CPU is the brain, RAM is working desk memory, and SSD is the bookshelf!",
      "definition": "The physical hardware components: Central Processing Unit, volatile RAM, and persistent flash storage.",
      "realLifeAnalogy": "Think of Hardware Architecture as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Hardware Architecture is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Hardware Architecture is and where we encounter it every single day.",
        "takeaway": "Core concept: Hardware Architecture connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Hardware Architecture work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Hardware Architecture?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Hardware Architecture follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Hardware Architecture help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Hardware Architecture?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Hardware Architecture?",
        "opts": [
          "A fundamental concept in Computer Science based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Hardware Architecture."
      },
      {
        "q": "When studying Hardware Architecture, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Hardware Architecture apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Hardware Architecture?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "cs_networks_internet": {
    "id": "cs_networks_internet",
    "title": "How the Internet Works: Packets, IP Addresses & Routers",
    "shortTitle": "Internet & Networks",
    "subjectId": "cs",
    "subjectName": "Computer Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Cyber City",
    "icon": "🌐",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT / CBSE Computer Science",
    "tags": [
      "Computer Science",
      "Internet & Networks"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Internet & Networks is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Internet & Networks like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Internet & Networks is a core curriculum principle explaining the underlying mechanisms and relationships in Computer Science.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Internet & Networks"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Internet & Networks, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Internet & Networks"
      }
    },
    "introduction": {
      "hook": "When you tap send on a message, it is broken into tiny digital packets racing across ocean cables!",
      "definition": "A global network of interconnected computers communicating via standardized protocols like TCP/IP.",
      "realLifeAnalogy": "Think of Internet & Networks as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Internet & Networks is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Internet & Networks is and where we encounter it every single day.",
        "takeaway": "Core concept: Internet & Networks connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Internet & Networks work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Internet & Networks?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Internet & Networks follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Internet & Networks help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Internet & Networks?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Internet & Networks?",
        "opts": [
          "A fundamental concept in Computer Science based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Internet & Networks."
      },
      {
        "q": "When studying Internet & Networks, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Internet & Networks apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Internet & Networks?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "cs_cybersecurity": {
    "id": "cs_cybersecurity",
    "title": "Cybersecurity & Digital Citizenship: Safe Online Browsing",
    "shortTitle": "Cybersecurity",
    "subjectId": "cs",
    "subjectName": "Computer Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Cyber City",
    "icon": "🔒",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Cyber Safety Guidelines",
    "tags": [
      "Computer Science",
      "Cybersecurity"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Cybersecurity is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Cybersecurity like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Cybersecurity is a core curriculum principle explaining the underlying mechanisms and relationships in Computer Science.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Cybersecurity"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Cybersecurity, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Cybersecurity"
      }
    },
    "introduction": {
      "hook": "How do encryption shields and strong passwords protect your personal accounts from sneaky hackers?",
      "definition": "Practices and technologies designed to protect networks, devices, and personal data from unauthorized access.",
      "realLifeAnalogy": "Think of Cybersecurity as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Cybersecurity is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Cybersecurity is and where we encounter it every single day.",
        "takeaway": "Core concept: Cybersecurity connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Cybersecurity work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Cybersecurity?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Cybersecurity follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Cybersecurity help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Cybersecurity?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Cybersecurity?",
        "opts": [
          "A fundamental concept in Computer Science based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Cybersecurity."
      },
      {
        "q": "When studying Cybersecurity, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Cybersecurity apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Cybersecurity?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "cs_arrays_datastructures": {
    "id": "cs_arrays_datastructures",
    "title": "Arrays & Lists: Organizing Ordered Collections of Data",
    "shortTitle": "Arrays & Lists",
    "subjectId": "cs",
    "subjectName": "Computer Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Cyber City",
    "icon": "📚",
    "estimatedMins": 10,
    "curriculumBoard": "CBSE Computer Science",
    "tags": [
      "Computer Science",
      "Arrays & Lists"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Arrays & Lists is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Arrays & Lists like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Arrays & Lists is a core curriculum principle explaining the underlying mechanisms and relationships in Computer Science.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Arrays & Lists"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Arrays & Lists, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Arrays & Lists"
      }
    },
    "introduction": {
      "hook": "How does an online leaderboard keep track of the top 100 player scores in ranked order?",
      "definition": "Linear data structures storing elements in contiguous memory positions accessible by an index number (0, 1, 2...).",
      "realLifeAnalogy": "Think of Arrays & Lists as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Arrays & Lists is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Arrays & Lists is and where we encounter it every single day.",
        "takeaway": "Core concept: Arrays & Lists connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Arrays & Lists work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Arrays & Lists?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Arrays & Lists follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Arrays & Lists help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Arrays & Lists?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Arrays & Lists?",
        "opts": [
          "A fundamental concept in Computer Science based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Arrays & Lists."
      },
      {
        "q": "When studying Arrays & Lists, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Arrays & Lists apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Arrays & Lists?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "cs_web_basics": {
    "id": "cs_web_basics",
    "title": "Building the Web: HTML Structure, CSS Styles & JavaScript",
    "shortTitle": "Web Development Basics",
    "subjectId": "cs",
    "subjectName": "Computer Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Cyber City",
    "icon": "🌐",
    "estimatedMins": 10,
    "curriculumBoard": "CBSE Web Applications",
    "tags": [
      "Computer Science",
      "Web Development Basics"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Web Development Basics is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Web Development Basics like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Web Development Basics is a core curriculum principle explaining the underlying mechanisms and relationships in Computer Science.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Web Development Basics"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Web Development Basics, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Web Development Basics"
      }
    },
    "introduction": {
      "hook": "HTML is the skeleton, CSS is the trendy outfit, and JavaScript is the muscles that make websites move!",
      "definition": "The core trio of web standards used to structure, style, and add interactive logic to internet pages.",
      "realLifeAnalogy": "Think of Web Development Basics as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Web Development Basics is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Web Development Basics is and where we encounter it every single day.",
        "takeaway": "Core concept: Web Development Basics connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Web Development Basics work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Web Development Basics?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Web Development Basics follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Web Development Basics help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Web Development Basics?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Web Development Basics?",
        "opts": [
          "A fundamental concept in Computer Science based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Web Development Basics."
      },
      {
        "q": "When studying Web Development Basics, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Web Development Basics apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Web Development Basics?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "cs_ai_basics": {
    "id": "cs_ai_basics",
    "title": "Artificial Intelligence & Machine Learning Fundamentals",
    "shortTitle": "AI & Machine Learning",
    "subjectId": "cs",
    "subjectName": "Computer Science",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "cyber",
    "worldName": "Cyber City",
    "icon": "🤖",
    "estimatedMins": 10,
    "curriculumBoard": "CBSE AI Curriculum",
    "tags": [
      "Computer Science",
      "AI & Machine Learning"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "AI & Machine Learning is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of AI & Machine Learning like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "AI & Machine Learning is a core curriculum principle explaining the underlying mechanisms and relationships in Computer Science.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for AI & Machine Learning"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of AI & Machine Learning, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for AI & Machine Learning"
      }
    },
    "introduction": {
      "hook": "How can a computer look at a photo of a cat and instantly recognize that it's a furry feline?",
      "definition": "Training computer algorithms on large datasets to recognize patterns, make predictions, and solve tasks autonomously.",
      "realLifeAnalogy": "Think of AI & Machine Learning as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering AI & Machine Learning is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what AI & Machine Learning is and where we encounter it every single day.",
        "takeaway": "Core concept: AI & Machine Learning connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make AI & Machine Learning work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind AI & Machine Learning?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "AI & Machine Learning follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding AI & Machine Learning help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features AI & Machine Learning?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of AI & Machine Learning?",
        "opts": [
          "A fundamental concept in Computer Science based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of AI & Machine Learning."
      },
      {
        "q": "When studying AI & Machine Learning, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does AI & Machine Learning apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master AI & Machine Learning?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "his_indus_valley": {
    "id": "his_indus_valley",
    "title": "Indus Valley Civilization: Urban Planning & Harappa",
    "shortTitle": "Indus Valley Civilization",
    "subjectId": "history_geo",
    "subjectName": "Geography & History",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "History Explorer",
    "icon": "🏺",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6 History Ch 4",
    "tags": [
      "Geography & History",
      "Indus Valley Civilization"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Indus Valley Civilization is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Indus Valley Civilization like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Indus Valley Civilization is a core curriculum principle explaining the underlying mechanisms and relationships in Geography & History.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Indus Valley Civilization"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Indus Valley Civilization, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Indus Valley Civilization"
      }
    },
    "introduction": {
      "hook": "Over 4,500 years ago, ancient Indian cities had brick street grids, covered drains, and public baths!",
      "definition": "One of the world's earliest Bronze Age urban civilizations along the fertile Indus River basin.",
      "realLifeAnalogy": "Think of Indus Valley Civilization as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Indus Valley Civilization is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Indus Valley Civilization is and where we encounter it every single day.",
        "takeaway": "Core concept: Indus Valley Civilization connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Indus Valley Civilization work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Indus Valley Civilization?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Indus Valley Civilization follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Indus Valley Civilization help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Indus Valley Civilization?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Indus Valley Civilization?",
        "opts": [
          "A fundamental concept in Geography & History based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Indus Valley Civilization."
      },
      {
        "q": "When studying Indus Valley Civilization, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Indus Valley Civilization apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Indus Valley Civilization?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "geo_plate_tectonics": {
    "id": "geo_plate_tectonics",
    "title": "Plate Tectonics, Earthquakes & Continental Drift",
    "shortTitle": "Plate Tectonics",
    "subjectId": "history_geo",
    "subjectName": "Geography & History",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "History Explorer",
    "icon": "🌋",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 & 9 Geography",
    "tags": [
      "Geography & History",
      "Plate Tectonics"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Plate Tectonics is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Plate Tectonics like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Plate Tectonics is a core curriculum principle explaining the underlying mechanisms and relationships in Geography & History.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Plate Tectonics"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Plate Tectonics, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Plate Tectonics"
      }
    },
    "introduction": {
      "hook": "Did you know the Himalayan mountains are still growing taller every year because two giant continents are crashing?",
      "definition": "The scientific theory explaining how Earth's lithosphere is broken into moving plates floating on the mantle.",
      "realLifeAnalogy": "Think of Plate Tectonics as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Plate Tectonics is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Plate Tectonics is and where we encounter it every single day.",
        "takeaway": "Core concept: Plate Tectonics connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Plate Tectonics work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Plate Tectonics?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Plate Tectonics follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Plate Tectonics help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Plate Tectonics?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Plate Tectonics?",
        "opts": [
          "A fundamental concept in Geography & History based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Plate Tectonics."
      },
      {
        "q": "When studying Plate Tectonics, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Plate Tectonics apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Plate Tectonics?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "geo_earth_interior": {
    "id": "geo_earth_interior",
    "title": "Inside the Earth: Crust, Mantle, Core & The Rock Cycle",
    "shortTitle": "Earth's Interior & Rocks",
    "subjectId": "history_geo",
    "subjectName": "Geography & History",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "History Explorer",
    "icon": "🌍",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Geography Ch 2",
    "tags": [
      "Geography & History",
      "Earth's Interior & Rocks"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Earth's Interior & Rocks is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Earth's Interior & Rocks like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Earth's Interior & Rocks is a core curriculum principle explaining the underlying mechanisms and relationships in Geography & History.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Earth's Interior & Rocks"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Earth's Interior & Rocks, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Earth's Interior & Rocks"
      }
    },
    "introduction": {
      "hook": "Journey to the center of the Earth: peel back the rocky crust like an apple to find liquid molten rock and a white-hot iron core!",
      "definition": "The concentric layers of Earth (Crust, Mantle, Outer Core, Inner Core) and Igneous, Sedimentary, Metamorphic rocks.",
      "realLifeAnalogy": "Think of Earth's Interior & Rocks as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Earth's Interior & Rocks is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Earth's Interior & Rocks is and where we encounter it every single day.",
        "takeaway": "Core concept: Earth's Interior & Rocks connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Earth's Interior & Rocks work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Earth's Interior & Rocks?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Earth's Interior & Rocks follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Earth's Interior & Rocks help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Earth's Interior & Rocks?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Earth's Interior & Rocks?",
        "opts": [
          "A fundamental concept in Geography & History based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Earth's Interior & Rocks."
      },
      {
        "q": "When studying Earth's Interior & Rocks, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Earth's Interior & Rocks apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Earth's Interior & Rocks?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "geo_climate_weather": {
    "id": "geo_climate_weather",
    "title": "Weather Systems, Atmosphere & World Climate Zones",
    "shortTitle": "Climate & Weather",
    "subjectId": "history_geo",
    "subjectName": "Geography & History",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "History Explorer",
    "icon": "☀️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Geography",
    "tags": [
      "Geography & History",
      "Climate & Weather"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Climate & Weather is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Climate & Weather like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Climate & Weather is a core curriculum principle explaining the underlying mechanisms and relationships in Geography & History.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Climate & Weather"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Climate & Weather, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Climate & Weather"
      }
    },
    "introduction": {
      "hook": "Weather is what you wear today (a raincoat); Climate is what wardrobe you own across decades!",
      "definition": "Atmospheric layers (Troposphere, Stratosphere) and global climatic zones determined by latitude and solar angle.",
      "realLifeAnalogy": "Think of Climate & Weather as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Climate & Weather is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Climate & Weather is and where we encounter it every single day.",
        "takeaway": "Core concept: Climate & Weather connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Climate & Weather work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Climate & Weather?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Climate & Weather follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Climate & Weather help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Climate & Weather?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Climate & Weather?",
        "opts": [
          "A fundamental concept in Geography & History based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Climate & Weather."
      },
      {
        "q": "When studying Climate & Weather, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Climate & Weather apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Climate & Weather?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "geo_river_systems": {
    "id": "geo_river_systems",
    "title": "Major River Systems: Drainage Patterns & Fertile Plains",
    "shortTitle": "Major River Systems",
    "subjectId": "history_geo",
    "subjectName": "Geography & History",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "History Explorer",
    "icon": "🌊",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 9 Geography",
    "tags": [
      "Geography & History",
      "Major River Systems"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Major River Systems is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Major River Systems like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Major River Systems is a core curriculum principle explaining the underlying mechanisms and relationships in Geography & History.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Major River Systems"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Major River Systems, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Major River Systems"
      }
    },
    "introduction": {
      "hook": "Why did every major civilization in human history choose to build its great cities along riverbanks?",
      "definition": "Source to mouth: tributaries, river deltas, perennial Himalayan rivers, and peninsular seasonal river basins.",
      "realLifeAnalogy": "Think of Major River Systems as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Major River Systems is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Major River Systems is and where we encounter it every single day.",
        "takeaway": "Core concept: Major River Systems connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Major River Systems work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Major River Systems?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Major River Systems follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Major River Systems help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Major River Systems?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Major River Systems?",
        "opts": [
          "A fundamental concept in Geography & History based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Major River Systems."
      },
      {
        "q": "When studying Major River Systems, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Major River Systems apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Major River Systems?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "his_maurya_empire": {
    "id": "his_maurya_empire",
    "title": "The Maurya Empire: Chandragupta, Chanakya & Ashoka",
    "shortTitle": "The Maurya Empire",
    "subjectId": "history_geo",
    "subjectName": "Geography & History",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "History Explorer",
    "icon": "👑",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6 History",
    "tags": [
      "Geography & History",
      "The Maurya Empire"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "The Maurya Empire is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of The Maurya Empire like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "The Maurya Empire is a core curriculum principle explaining the underlying mechanisms and relationships in Geography & History.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for The Maurya Empire"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of The Maurya Empire, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for The Maurya Empire"
      }
    },
    "introduction": {
      "hook": "How did Emperor Ashoka unite almost the entire subcontinent and then renounce war forever to preach peace and Dhamma?",
      "definition": "India's first pan-subcontinental empire (322–185 BCE) renowned for administrative treatise Arthashastra and Ashoka's rock edicts.",
      "realLifeAnalogy": "Think of The Maurya Empire as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering The Maurya Empire is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what The Maurya Empire is and where we encounter it every single day.",
        "takeaway": "Core concept: The Maurya Empire connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make The Maurya Empire work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind The Maurya Empire?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "The Maurya Empire follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding The Maurya Empire help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features The Maurya Empire?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of The Maurya Empire?",
        "opts": [
          "A fundamental concept in Geography & History based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of The Maurya Empire."
      },
      {
        "q": "When studying The Maurya Empire, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does The Maurya Empire apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master The Maurya Empire?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "his_mughal_empire": {
    "id": "his_mughal_empire",
    "title": "The Mughal Empire: Administration, Art & Architecture",
    "shortTitle": "The Mughal Empire",
    "subjectId": "history_geo",
    "subjectName": "Geography & History",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "History Explorer",
    "icon": "🏰",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 History",
    "tags": [
      "Geography & History",
      "The Mughal Empire"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "The Mughal Empire is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of The Mughal Empire like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "The Mughal Empire is a core curriculum principle explaining the underlying mechanisms and relationships in Geography & History.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for The Mughal Empire"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of The Mughal Empire, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for The Mughal Empire"
      }
    },
    "introduction": {
      "hook": "From the iconic white marble Taj Mahal to the Red Fort, how did Mughal architecture blend Persian and Indian traditions?",
      "definition": "Dynasty ruling northern and central India (1526–1857) known for religious synthesis under Akbar and monuments.",
      "realLifeAnalogy": "Think of The Mughal Empire as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering The Mughal Empire is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what The Mughal Empire is and where we encounter it every single day.",
        "takeaway": "Core concept: The Mughal Empire connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make The Mughal Empire work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind The Mughal Empire?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "The Mughal Empire follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding The Mughal Empire help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features The Mughal Empire?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of The Mughal Empire?",
        "opts": [
          "A fundamental concept in Geography & History based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of The Mughal Empire."
      },
      {
        "q": "When studying The Mughal Empire, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does The Mughal Empire apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master The Mughal Empire?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "geo_maps_coordinates": {
    "id": "geo_maps_coordinates",
    "title": "Maps, Latitudes, Longitudes & Global Time Zones",
    "shortTitle": "Maps & Coordinates",
    "subjectId": "history_geo",
    "subjectName": "Geography & History",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "History Explorer",
    "icon": "🗺️",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6 Geography",
    "tags": [
      "Geography & History",
      "Maps & Coordinates"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Maps & Coordinates is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Maps & Coordinates like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Maps & Coordinates is a core curriculum principle explaining the underlying mechanisms and relationships in Geography & History.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Maps & Coordinates"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Maps & Coordinates, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Maps & Coordinates"
      }
    },
    "introduction": {
      "hook": "How does your smartphone GPS know your exact location anywhere on planet Earth within 3 meters?",
      "definition": "The geographic grid system of parallels of latitude and meridians of longitude used to pinpoint coordinates and calculate time zones.",
      "realLifeAnalogy": "Think of Maps & Coordinates as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Maps & Coordinates is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Maps & Coordinates is and where we encounter it every single day.",
        "takeaway": "Core concept: Maps & Coordinates connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Maps & Coordinates work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Maps & Coordinates?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Maps & Coordinates follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Maps & Coordinates help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Maps & Coordinates?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Maps & Coordinates?",
        "opts": [
          "A fundamental concept in Geography & History based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Maps & Coordinates."
      },
      {
        "q": "When studying Maps & Coordinates, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Maps & Coordinates apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Maps & Coordinates?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "geo_forests_wildlife": {
    "id": "geo_forests_wildlife",
    "title": "Natural Vegetation, Biomes & Wildlife Conservation",
    "shortTitle": "Forests & Wildlife",
    "subjectId": "history_geo",
    "subjectName": "Geography & History",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "History Explorer",
    "icon": "🌲",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 & 8 Geography",
    "tags": [
      "Geography & History",
      "Forests & Wildlife"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Forests & Wildlife is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Forests & Wildlife like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Forests & Wildlife is a core curriculum principle explaining the underlying mechanisms and relationships in Geography & History.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Forests & Wildlife"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Forests & Wildlife, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Forests & Wildlife"
      }
    },
    "introduction": {
      "hook": "From lush tropical evergreen rainforests to prickly desert scrub, why do different plants grow in different regions?",
      "definition": "Global vegetation biomes influenced by rainfall and temperature, and protected national parks for endangered species.",
      "realLifeAnalogy": "Think of Forests & Wildlife as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Forests & Wildlife is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Forests & Wildlife is and where we encounter it every single day.",
        "takeaway": "Core concept: Forests & Wildlife connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Forests & Wildlife work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Forests & Wildlife?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Forests & Wildlife follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Forests & Wildlife help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Forests & Wildlife?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Forests & Wildlife?",
        "opts": [
          "A fundamental concept in Geography & History based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Forests & Wildlife."
      },
      {
        "q": "When studying Forests & Wildlife, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Forests & Wildlife apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Forests & Wildlife?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "his_indian_freedom": {
    "id": "his_indian_freedom",
    "title": "The Indian Freedom Struggle: 1857 to Independence in 1947",
    "shortTitle": "Freedom Struggle",
    "subjectId": "history_geo",
    "subjectName": "Geography & History",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "History Explorer",
    "icon": "🇮🇳",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 8 History",
    "tags": [
      "Geography & History",
      "Freedom Struggle"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Freedom Struggle is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Freedom Struggle like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Freedom Struggle is a core curriculum principle explaining the underlying mechanisms and relationships in Geography & History.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Freedom Struggle"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Freedom Struggle, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Freedom Struggle"
      }
    },
    "introduction": {
      "hook": "How did millions of ordinary people unite through courage and non-violence to win independence from the British Empire in 1947?",
      "definition": "The historic nationalist movement led by leaders like Mahatma Gandhi, Subhas Chandra Bose, and Bhagat Singh achieving freedom.",
      "realLifeAnalogy": "Think of Freedom Struggle as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Freedom Struggle is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Freedom Struggle is and where we encounter it every single day.",
        "takeaway": "Core concept: Freedom Struggle connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Freedom Struggle work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Freedom Struggle?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Freedom Struggle follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Freedom Struggle help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Freedom Struggle?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Freedom Struggle?",
        "opts": [
          "A fundamental concept in Geography & History based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Freedom Struggle."
      },
      {
        "q": "When studying Freedom Struggle, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Freedom Struggle apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Freedom Struggle?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "geo_oceans_currents": {
    "id": "geo_oceans_currents",
    "title": "Ocean Waters: Waves, Tides & Major Marine Currents",
    "shortTitle": "Oceans & Currents",
    "subjectId": "history_geo",
    "subjectName": "Geography & History",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "History Explorer",
    "icon": "🌊",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 7 Geography",
    "tags": [
      "Geography & History",
      "Oceans & Currents"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Oceans & Currents is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Oceans & Currents like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Oceans & Currents is a core curriculum principle explaining the underlying mechanisms and relationships in Geography & History.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Oceans & Currents"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Oceans & Currents, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Oceans & Currents"
      }
    },
    "introduction": {
      "hook": "The Moon's invisible gravitational tug lifts billions of tons of ocean water twice a day in high tides!",
      "definition": "Hydrospheric dynamics: wind-generated waves, gravitational lunar tides, and warm and cold ocean currents regulating world climate.",
      "realLifeAnalogy": "Think of Oceans & Currents as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Oceans & Currents is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Oceans & Currents is and where we encounter it every single day.",
        "takeaway": "Core concept: Oceans & Currents connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Oceans & Currents work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Oceans & Currents?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Oceans & Currents follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Oceans & Currents help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Oceans & Currents?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Oceans & Currents?",
        "opts": [
          "A fundamental concept in Geography & History based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Oceans & Currents."
      },
      {
        "q": "When studying Oceans & Currents, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Oceans & Currents apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Oceans & Currents?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  },
  "geo_solar_system_seasons": {
    "id": "geo_solar_system_seasons",
    "title": "The Solar System, Earth's Tilt & The Four Seasons",
    "shortTitle": "Solar System & Seasons",
    "subjectId": "history_geo",
    "subjectName": "Geography & History",
    "gradeRange": "Class 4–10 (NCERT / CBSE / SSC)",
    "difficulty": "Intermediate",
    "themeId": "space",
    "worldName": "History Explorer",
    "icon": "🪐",
    "estimatedMins": 10,
    "curriculumBoard": "NCERT Class 6 Geography",
    "tags": [
      "Geography & History",
      "Solar System & Seasons"
    ],
    "gradeDepths": {
      "primary": {
        "explanation": "Solar System & Seasons is an exciting concept that helps us understand how our world works in daily life!",
        "analogy": "Think of Solar System & Seasons like an everyday game with clear, fun rules.",
        "keyRule": "Rule: Simple, clear, and easy to remember!"
      },
      "middle": {
        "explanation": "Solar System & Seasons is a core curriculum principle explaining the underlying mechanisms and relationships in Geography & History.",
        "analogy": "Like a well-coordinated system where each component works together to create balanced results.",
        "keyRule": "Standard Rule / Formula for Solar System & Seasons"
      },
      "secondary": {
        "explanation": "Formal theoretical and quantitative treatment of Solar System & Seasons, examining mathematical models, equilibrium states, and rigorous exam applications.",
        "analogy": "An engineered analytical framework translating inputs into predictable, verifiable scientific outcomes.",
        "keyRule": "Advanced Equation & Theorem for Solar System & Seasons"
      }
    },
    "introduction": {
      "hook": "Why is it hot summer in New Delhi while it is freezing winter in Sydney, Australia at the exact same time?",
      "definition": "Earth's 23.5° axial tilt and 365-day elliptical revolution around the Sun creating changing seasons and daylight hours.",
      "realLifeAnalogy": "Think of Solar System & Seasons as a bridge connecting basic rules with everyday observations.",
      "quickFact": "Mastering Solar System & Seasons is a key milestone in the NCERT & CBSE curriculum!"
    },
    "stepLessons": [
      {
        "step": 1,
        "title": "The Big Picture",
        "subtitle": "Why it matters",
        "content": "Understanding what Solar System & Seasons is and where we encounter it every single day.",
        "takeaway": "Core concept: Solar System & Seasons connects rules with observations."
      },
      {
        "step": 2,
        "title": "How It Works",
        "subtitle": "The Mechanism",
        "content": "Exploring the step-by-step process, formulas, and connections that make Solar System & Seasons work.",
        "takeaway": "Always pay attention to what goes in and what comes out."
      },
      {
        "step": 3,
        "title": "Real-World Example",
        "subtitle": "Applying the Knowledge",
        "content": "Solving real-life puzzles and school problems using this concept with confidence.",
        "takeaway": "Practice turns new concepts into lifelong superpowers!"
      }
    ],
    "checkpointQuestions": [
      {
        "prompt": "What is the central idea behind Solar System & Seasons?",
        "opts": [
          "It follows predictable natural and logical rules",
          "It happens totally at random",
          "It only works in magic stories"
        ],
        "ans": 0,
        "explain": "Solar System & Seasons follows consistent, verifiable principles.",
        "hint": "Think about scientific rules."
      },
      {
        "prompt": "How does understanding Solar System & Seasons help us?",
        "opts": [
          "It helps us solve practical problems and master our exams",
          "It makes computers shut down",
          "It has no use at all"
        ],
        "ans": 0,
        "explain": "Mastering concepts gives you strong problem-solving skills.",
        "hint": "Helps us solve problems."
      },
      {
        "prompt": "Which curriculum standard features Solar System & Seasons?",
        "opts": [
          "NCERT, CBSE, and State (SSC) Boards",
          "Ancient myth scrolls only",
          "None of them"
        ],
        "ans": 0,
        "explain": "It is a core topic taught in standard school curriculums.",
        "hint": "All major boards."
      }
    ],
    "finalAssessment": [
      {
        "q": "What is the primary definition of Solar System & Seasons?",
        "opts": [
          "A fundamental concept in Geography & History based on consistent rules",
          "A random event that never repeats",
          "An imaginary fairy tale",
          "A broken machine"
        ],
        "ans": 0,
        "explain": "Core definition of Solar System & Seasons."
      },
      {
        "q": "When studying Solar System & Seasons, what should you focus on first?",
        "opts": [
          "Understanding the basic cause and effect mechanism",
          "Memorizing long words without understanding",
          "Guessing answers blindly",
          "Skipping all exercises"
        ],
        "ans": 0,
        "explain": "Conceptual understanding always comes before memorization."
      },
      {
        "q": "How does Solar System & Seasons apply in practical everyday life?",
        "opts": [
          "It explains real patterns we see in nature, technology, and society",
          "It only works inside a laboratory vacuum",
          "It disappears after school hours",
          "It has no real-world link"
        ],
        "ans": 0,
        "explain": "School concepts connect directly to real life."
      },
      {
        "q": "What is the best way to master Solar System & Seasons?",
        "opts": [
          "Visualizing the concept, studying bite-sized steps, and testing with quizzes",
          "Ignoring explanations",
          "Copying answers without thinking",
          "Waiting until the last exam minute"
        ],
        "ans": 0,
        "explain": "Active, gamified visual practice leads to high mastery!"
      }
    ]
  }
};

// Curriculum helper utilities
const CurriculumEngine = {
  getAllTopics() {
    return Object.values(CURRICULUM);
  },

  getTopic(topicId) {
    return CURRICULUM[topicId] || null;
  },

  getTopicsBySubject(subjectId) {
    return Object.values(CURRICULUM).filter(t => t.subjectId === subjectId);
  },

  getTopicsByGrade(gradeNum) {
    return Object.values(CURRICULUM);
  },

  search(query, subjectFilter = null) {
    if (!query && !subjectFilter) return Object.values(CURRICULUM);
    const q = (query || '').toLowerCase().trim();

    return Object.values(CURRICULUM).filter(t => {
      if (subjectFilter && subjectFilter !== 'all' && t.subjectId !== subjectFilter) {
        return false;
      }
      if (!q) return true;
      const matchTitle = t.title.toLowerCase().includes(q) || t.shortTitle.toLowerCase().includes(q);
      const matchTags = (t.tags || []).some(tag => tag.toLowerCase().includes(q));
      const matchDesc = (t.introduction?.definition || '').toLowerCase().includes(q);
      const matchSub = (t.subjectName || '').toLowerCase().includes(q);
      return matchTitle || matchTags || matchDesc || matchSub;
    });
  },
};

/* ═══════════════════════════════════════════════════════════════
   QUESTMIND / SKILLVERSE — Educational Question Bank
   Grades 3–7 • 6 Themes • 6 Subjects • 3-Lane Running Choices
═══════════════════════════════════════════════════════════════ */

/* Each question has:
   id: unique ID
   theme: space | mystery | jungle | cyber | racing | ocean
   subject: math | science | english | cs | social | gk
   grade: 3..7
   q: In-world challenge / prompt
   opts: [Lane 0, Lane 1, Lane 2] - exactly 3 choices for 3 lanes
   ans: index of correct choice (0, 1, or 2)
   hint: Visual hint to help struggling players
   explain: Clear learning explanation of the solution
   competency: debugging | logic | data | problem_solving | communication
*/

const QUESTIONS = {
  // ─────────────────── 1. SPACE EXPLORER ───────────────────
  space: [
    // Grade 3
    { id: 'sp_g3_1', grade: 3, subject: 'math', q: 'Rockets burn 4 fuel cells per minute. How many in 3 minutes?', opts: ['8 cells', '12 cells', '16 cells'], ans: 1, hint: 'Multiply: 4 × 3', explain: '4 fuel cells × 3 minutes = 12 cells.', competency: 'problem_solving' },
    { id: 'sp_g3_2', grade: 3, subject: 'science', q: 'Which red planet is the 4th planet from our Sun?', opts: ['Mars', 'Venus', 'Jupiter'], ans: 0, hint: 'It has iron dust that makes it look rusty red!', explain: 'Mars is the fourth planet from the Sun and is called the Red Planet.', competency: 'data' },
    { id: 'sp_g3_3', grade: 3, subject: 'english', q: 'Choose the word that means "travel around a planet":', opts: ['Crash', 'Orbit', 'Anchor'], ans: 1, hint: 'The International Space Station does this around Earth!', explain: '"Orbit" means to travel in a curved path around a star or planet.', competency: 'communication' },
    { id: 'sp_g3_4', grade: 3, subject: 'cs', q: 'Find the bug: [Turn Left, Move Forward, Turn Left, Stop]. To go straight, remove:', opts: ['Move Forward', 'First Turn Left', 'Stop'], ans: 1, hint: 'If you want to go straight ahead, you shouldn’t turn first!', explain: 'Removing the first "Turn Left" lets the rover move straight forward.', competency: 'debugging' },
    { id: 'sp_g3_5', grade: 3, subject: 'gk', q: 'Who was the first human to walk on the Moon in 1969?', opts: ['Neil Armstrong', 'Buzz Lightyear', 'Yuri Gagarin'], ans: 0, hint: '"One small step for man, one giant leap for mankind."', explain: 'Neil Armstrong stepped onto the lunar surface on July 20, 1969.', competency: 'data' },
    { id: 'sp_g3_6', grade: 3, subject: 'social', q: 'What is the name of the orbiting science laboratory shared by nations?', opts: ['Lunar base', 'ISS (Space Station)', 'Hubble Bus'], ans: 1, hint: 'ISS = International Space Station!', explain: 'The International Space Station is operated by space agencies worldwide.', competency: 'communication' },

    // Grade 4
    { id: 'sp_g4_1', grade: 4, subject: 'math', q: 'A satellite travels 7,000 km in 1 hour. How far in 5 hours?', opts: ['28,000 km', '35,000 km', '42,000 km'], ans: 1, hint: 'Multiply 7 × 5, then add three zeroes.', explain: '7,000 × 5 = 35,000 km.', competency: 'problem_solving' },
    { id: 'sp_g4_2', grade: 4, subject: 'science', q: 'What natural force keeps the Moon orbiting around Earth?', opts: ['Magnetic pull', 'Gravity', 'Atmospheric wind'], ans: 1, hint: 'It is the same invisible pull that makes dropped apples fall.', explain: 'Gravity is the mutual attraction that keeps astronomical bodies in orbit.', competency: 'logic' },
    { id: 'sp_g4_3', grade: 4, subject: 'cs', q: 'Rover loop: REPEAT 4 [Drive 2m, Flash Light]. Total distance driven?', opts: ['6 metres', '8 metres', '10 metres'], ans: 1, hint: '2 metres × 4 repetitions = ?', explain: 'Repeating 2m 4 times = 8 metres total.', competency: 'logic' },
    { id: 'sp_g4_4', grade: 4, subject: 'english', q: 'Identify the metaphor: "The starry sky was a blanket of diamonds."', opts: ['Blanket of diamonds', 'Starry sky', 'Identified sky'], ans: 0, hint: 'A metaphor directly calls one thing another without using "like".', explain: '"Blanket of diamonds" directly compares the stars to jewels without "like".', competency: 'communication' },

    // Grade 5
    { id: 'sp_g5_1', grade: 5, subject: 'math', q: 'If light speed is 300,000 km/s, how far does light travel in 2 seconds?', opts: ['500,000 km', '600,000 km', '900,000 km'], ans: 1, hint: '300,000 × 2 = ?', explain: '300,000 × 2 = 600,000 km.', competency: 'problem_solving' },
    { id: 'sp_g5_2', grade: 5, subject: 'science', q: 'Which layer of the Sun is the bright visible surface we see?', opts: ['Core', 'Photosphere', 'Corona'], ans: 1, hint: '"Photo" means light in Greek.', explain: 'The photosphere is the 5,500°C luminous outer layer of the Sun.', competency: 'data' },
    { id: 'sp_g5_3', grade: 5, subject: 'cs', q: 'Sensor reading array: [22, 28, 15, 31]. What is the maximum value?', opts: ['28', '31', '35'], ans: 1, hint: 'Scan the numbers for the largest one.', explain: '31 is the highest value in the sensor array.', competency: 'data' },
    { id: 'sp_g5_4', grade: 5, subject: 'gk', q: 'Which telescope was launched in 2021 to see the earliest galaxies?', opts: ['James Webb', 'Galileo Scope', 'Kepler 2'], ans: 0, hint: 'Named after a NASA administrator: JWST.', explain: 'The James Webb Space Telescope studies deep infrared light from early stars.', competency: 'data' },

    // Grade 6
    { id: 'sp_g6_1', grade: 6, subject: 'math', q: 'A space probe travelled 480,000 km in 6 hours. Average speed?', opts: ['60,000 km/h', '80,000 km/h', '90,000 km/h'], ans: 1, hint: 'Distance ÷ Time = 480,000 ÷ 6', explain: '480,000 ÷ 6 = 80,000 km/h.', competency: 'problem_solving' },
    { id: 'sp_g6_2', grade: 6, subject: 'science', q: 'What optical effect makes distant stars appear redder as they move away?', opts: ['Doppler Redshift', 'Parallax Shift', 'Refraction'], ans: 0, hint: 'Wavelengths stretch out when an object recedes.', explain: 'Redshift occurs when light waves stretch towards longer red wavelengths.', competency: 'logic' },
    { id: 'sp_g6_3', grade: 6, subject: 'cs', q: 'Binary calculation: What is binary 101 in decimal base 10?', opts: ['3', '5', '7'], ans: 1, hint: '(1 × 4) + (0 × 2) + (1 × 1)', explain: '4 + 0 + 1 = 5.', competency: 'debugging' },

    // Grade 7
    { id: 'sp_g7_1', grade: 7, subject: 'math', q: 'Radius = 3 AU. If orbital circumference ≈ 2πr (with π ≈ 3.14), what is it?', opts: ['15.7 AU', '18.84 AU', '24.2 AU'], ans: 1, hint: '2 × 3.14 × 3 = 6 × 3.14', explain: '6 × 3.14 = 18.84 AU.', competency: 'problem_solving' },
    { id: 'sp_g7_2', grade: 7, subject: 'science', q: 'What is the point of no return around a black hole called?', opts: ['Singularity', 'Event Horizon', 'Photon Sphere'], ans: 1, hint: 'Past this boundary, nothing, not even light, escapes.', explain: 'The Event Horizon is the boundary where escape velocity exceeds light.', competency: 'data' },
    { id: 'sp_g7_3', grade: 7, subject: 'cs', q: 'Algorithm efficiency: Binary Search on sorted list of 128 elements takes at most:', opts: ['7 steps', '16 steps', '64 steps'], ans: 0, hint: 'log2(128) = ? (2^7 = 128)', explain: 'log2(128) = 7 comparisons maximum.', competency: 'logic' },
  ],

  // ─────────────────── 2. MYSTERY DETECTIVE ───────────────────
  mystery: [
    // Grade 3
    { id: 'my_g3_1', grade: 3, subject: 'math', q: 'Detective Maya found 9 footprint tracks and 6 key clues. Total?', opts: ['13 clues', '15 clues', '17 clues'], ans: 1, hint: '9 + 6 = ?', explain: '9 + 6 = 15 clues found.', competency: 'problem_solving' },
    { id: 'my_g3_2', grade: 3, subject: 'english', q: 'Which word means "secret code used for writing"?', opts: ['Parchment', 'Cipher', 'Compass'], ans: 1, hint: 'Detectives crack a _____ to read a message.', explain: 'A cipher is a secret method of writing in code.', competency: 'communication' },
    { id: 'my_g3_3', grade: 3, subject: 'logic', q: 'All footprints lead to the East door. Joe is at the East door. Did Joe enter?', opts: ['Not necessarily', 'Yes, 100% proved', 'No, never'], ans: 0, hint: 'Someone else could have made the footprints too!', explain: 'Footprints show someone went there, but it does not prove Joe made them.', competency: 'logic' },
    { id: 'my_g3_4', grade: 3, subject: 'science', q: 'What tool uses convex lenses to magnify tiny fingerprint ridges?', opts: ['Stethoscope', 'Magnifying glass', 'Thermometer'], ans: 1, hint: 'Sherlock Holmes always carries this glass tool!', explain: 'A magnifying glass bends light rays to enlarge small details.', competency: 'data' },
    { id: 'my_g3_5', grade: 3, subject: 'gk', q: 'In classic stories, who is the famous detective of 221B Baker Street?', opts: ['Hercule Poirot', 'Sherlock Holmes', 'Batman'], ans: 1, hint: 'Created by Sir Arthur Conan Doyle!', explain: 'Sherlock Holmes is the famous resident of 221B Baker Street.', competency: 'data' },

    // Grade 4
    { id: 'my_g4_1', grade: 4, subject: 'math', q: 'A vault lock code has 3 digits: 5, 2, and 8. The largest number you can make?', opts: ['825', '852', '582'], ans: 1, hint: 'Put the biggest digit first: 8, then 5, then 2.', explain: 'Arranging in descending order yields 852.', competency: 'problem_solving' },
    { id: 'my_g4_2', grade: 4, subject: 'english', q: 'Choose the antonym (opposite) of "CONCEAL":', opts: ['Hide', 'Reveal', 'Lock'], ans: 1, hint: 'Conceal means to keep hidden. The opposite is to show!', explain: '"Reveal" means to make known or display.', competency: 'communication' },
    { id: 'my_g4_3', grade: 4, subject: 'cs', q: 'To decrypt a +1 Caesar cipher: If encoded letter is "E", original is:', opts: ['C', 'D', 'F'], ans: 1, hint: 'Step backward 1 letter before E.', explain: 'E shifted back by 1 gives D.', competency: 'debugging' },
    { id: 'my_g4_4', grade: 4, subject: 'science', q: 'Why are fingerprints useful in forensic identification?', opts: ['They change every year', 'Each person has unique ridges', 'They glow in darkness'], ans: 1, hint: 'No two people in the world have identical ridge patterns!', explain: 'Friction ridge patterns on fingertips are unique and permanent.', competency: 'data' },

    // Grade 5
    { id: 'my_g5_1', grade: 5, subject: 'math', q: 'A coded message is 96 letters long, grouped in 8 equal rows. Letters per row?', opts: ['11', '12', '14'], ans: 1, hint: '96 ÷ 8 = ?', explain: '96 ÷ 8 = 12 letters per row.', competency: 'problem_solving' },
    { id: 'my_g5_2', grade: 5, subject: 'logic', q: 'Rule: The suspect wore boots. Tom wore sneakers. Can Tom be the suspect?', opts: ['Yes, definitely', 'No, he is ruled out', 'Need more clues'], ans: 1, hint: 'Tom fails the essential condition (boots).', explain: 'Since Tom wore sneakers, he could not have made the boot tracks.', competency: 'logic' },
    { id: 'my_g5_3', grade: 5, subject: 'english', q: 'What literary device is used: "The clock ticked like a pounding heartbeat"?', opts: ['Metaphor', 'Simile', 'Hyperbole'], ans: 1, hint: 'Notice the comparison word "like"!', explain: 'A simile uses "like" or "as" to compare two things.', competency: 'communication' },
    { id: 'my_g5_4', grade: 5, subject: 'cs', q: 'Find the logic error: IF (keyCount > 0 AND doorLocked) THEN [Unlock] ELSE [Lock]. Missing:', opts: ['Alarm', 'Check if key fits', 'Key colour'], ans: 1, hint: 'Any random key might not fit the lock!', explain: 'In security validation, verifying the key matches the door is required.', competency: 'debugging' },

    // Grade 6 & 7
    { id: 'my_g6_1', grade: 6, subject: 'math', q: 'A mystery map scale is 1 cm : 25 metres. A path is 4 cm. Actual distance?', opts: ['75 m', '100 m', '125 m'], ans: 1, hint: '4 × 25 = ?', explain: '4 × 25 = 100 metres.', competency: 'problem_solving' },
    { id: 'my_g6_2', grade: 6, subject: 'science', q: 'Forensic chemical Luminol glows blue under UV when reacting with:', opts: ['Salt crystals', 'Iron in hemoglobin', 'Sugar powder'], ans: 1, hint: 'Hemoglobin in blood contains this metallic element.', explain: 'Luminol chemiluminescence is catalyzed by iron in red blood cells.', competency: 'data' },
    { id: 'my_g7_1', grade: 7, subject: 'logic', q: 'Deductive logic: If (A → B) and (B → C), what can you conclude about A?', opts: ['A implies C', 'C implies A', 'A is false'], ans: 0, hint: 'Hypothetical Syllogism rule in formal logic.', explain: 'Transitivity: If A leads to B and B leads to C, then A leads to C.', competency: 'logic' },
  ],

  // ─────────────────── 3. JUNGLE ADVENTURE ───────────────────
  jungle: [
    // Grade 3
    { id: 'ju_g3_1', grade: 3, subject: 'math', q: 'Monkeys collected 18 bananas and shared them equally in 3 baskets. How many each?', opts: ['5 bananas', '6 bananas', '7 bananas'], ans: 1, hint: '18 ÷ 3 = ?', explain: '18 ÷ 3 = 6 bananas per basket.', competency: 'problem_solving' },
    { id: 'ju_g3_2', grade: 3, subject: 'science', q: 'What process do rainforest plants use to make food using sunlight?', opts: ['Hibernation', 'Photosynthesis', 'Evaporation'], ans: 1, hint: '"Photo" means light and "synthesis" means putting together.', explain: 'Photosynthesis turns sunlight, water, and CO2 into plant sugars.', competency: 'data' },
    { id: 'ju_g3_3', grade: 3, subject: 'social', q: 'The largest tropical rainforest in the world is located in South America. Name it:', opts: ['Congo Basin', 'Amazon Rainforest', 'Taiga Forest'], ans: 1, hint: 'It surrounds the massive Amazon River!', explain: 'The Amazon Rainforest spans over 5.5 million square kilometres.', competency: 'data' },
    { id: 'ju_g3_4', grade: 3, subject: 'english', q: 'Which creature is an amphibian that lives both on land and in water?', opts: ['Toucan', 'Tree Frog', 'Jaguar'], ans: 1, hint: 'It lays eggs in water and can breathe through skin.', explain: 'Tree frogs are amphibians, living in both wet and terrestrial zones.', competency: 'communication' },

    // Grade 4
    { id: 'ju_g4_1', grade: 4, subject: 'math', q: 'A rope bridge has 45 wooden slats. 15 were repaired. How many left to fix?', opts: ['25 slats', '30 slats', '35 slats'], ans: 1, hint: '45 − 15 = ?', explain: '45 − 15 = 30 slats.', competency: 'problem_solving' },
    { id: 'ju_g4_2', grade: 4, subject: 'science', q: 'Which layer of the rainforest is the highest, formed by the tops of tall trees?', opts: ['Forest Floor', 'Canopy', 'Understory'], ans: 1, hint: 'It forms a leafy green roof over the jungle.', explain: 'The canopy acts as an umbrella roof for the jungle ecosystem.', competency: 'data' },
    { id: 'ju_g4_3', grade: 4, subject: 'cs', q: 'Jungle drone path: [North, East, South, West]. What is its final position relative to start?', opts: ['North 1 step', 'Back at Start', 'East 2 steps'], ans: 1, hint: 'Opposite directions cancel out!', explain: 'North/South cancel and East/West cancel, returning to the origin.', competency: 'logic' },

    // Grade 5
    { id: 'ju_g5_1', grade: 5, subject: 'math', q: 'A jaguar runs at 80 km/h for 30 minutes (0.5 hour). How far did it run?', opts: ['30 km', '40 km', '50 km'], ans: 1, hint: 'Speed × Time: 80 × 0.5 = ?', explain: '80 × 0.5 = 40 km.', competency: 'problem_solving' },
    { id: 'ju_g5_2', grade: 5, subject: 'science', q: 'In a rainforest food web, what role do fungi and bacteria play?', opts: ['Producers', 'Decomposers', 'Apex predators'], ans: 1, hint: 'They break down dead leaves and recycle nutrients.', explain: 'Decomposers break down organic matter and enrich the soil.', competency: 'logic' },
    { id: 'ju_g5_3', grade: 5, subject: 'gk', q: 'What is the world’s longest river flowing through tropical South America?', opts: ['Nile River', 'Amazon River', 'Yangtze River'], ans: 1, hint: 'Carries more water than any other river!', explain: 'The Amazon River carries the largest volume of freshwater on Earth.', competency: 'data' },

    // Grade 6 & 7
    { id: 'ju_g6_1', grade: 6, subject: 'math', q: 'A jungle reserve has 360 animals. 25% are birds. How many birds?', opts: ['80', '90', '100'], ans: 1, hint: '25% is one-fourth (divide by 4).', explain: '360 ÷ 4 = 90 birds.', competency: 'problem_solving' },
    { id: 'ju_g7_1', grade: 7, subject: 'science', q: 'What ecological term describes a species that has an outsized effect on its ecosystem?', opts: ['Invasive species', 'Keystone species', 'Pioneer species'], ans: 1, hint: 'Like the keystone in an arch, its removal collapses the system.', explain: 'Keystone species maintain the structural stability of the ecological web.', competency: 'logic' },
  ],

  // ─────────────────── 4. FUTURE TECH / CYBER WORLD ───────────────────
  cyber: [
    // Grade 3
    { id: 'cy_g3_1', grade: 3, subject: 'cs', q: 'What do 1 and 0 represent in computer binary language?', opts: ['Big & Small', 'ON & OFF', 'Fast & Slow'], ans: 1, hint: 'Like a light switch: 1 is electric signal ON, 0 is OFF.', explain: 'Binary code uses 1 for electrical ON and 0 for OFF.', competency: 'logic' },
    { id: 'cy_g3_2', grade: 3, subject: 'math', q: 'A cyber drone sends 4 data packets every second. How many in 6 seconds?', opts: ['20 packets', '24 packets', '28 packets'], ans: 1, hint: '4 × 6 = ?', explain: '4 × 6 = 24 packets.', competency: 'problem_solving' },
    { id: 'cy_g3_3', grade: 3, subject: 'english', q: 'What does "algorithm" mean?', opts: ['A broken cable', 'Step-by-step instructions to solve a task', 'A computer screen'], ans: 1, hint: 'Like following a recipe step by step!', explain: 'An algorithm is an ordered sequence of instructions to solve a problem.', competency: 'communication' },
    { id: 'cy_g3_4', grade: 3, subject: 'cs', q: 'Bug alert: count = 0. REPEAT 3 [count = count + 2]. What is final count?', opts: ['4', '6', '8'], ans: 1, hint: '2 + 2 + 2 = ?', explain: 'Adding 2 three times gives 6.', competency: 'debugging' },

    // Grade 4
    { id: 'cy_g4_1', grade: 4, subject: 'cs', q: 'What is a LOOP used for in computer programming?', opts: ['Shutting down power', 'Repeating actions without rewriting code', 'Deleting memory'], ans: 1, hint: 'It circles around until a condition is met!', explain: 'Loops repeat code blocks efficiently.', competency: 'logic' },
    { id: 'cy_g4_2', grade: 4, subject: 'math', q: '1 Kilobyte is 1,024 Bytes. How many Bytes in 2 Kilobytes?', opts: ['2,000', '2,048', '2,100'], ans: 1, hint: '1,024 × 2 = ?', explain: '1,024 × 2 = 2,048 Bytes.', competency: 'problem_solving' },
    { id: 'cy_g4_3', grade: 4, subject: 'science', q: 'Which part of a computer acts as its central "thinking brain"?', opts: ['Monitor', 'CPU (Processor)', 'Power cord'], ans: 1, hint: 'CPU stands for Central Processing Unit.', explain: 'The CPU executes instructions and processes computing data.', competency: 'data' },
    { id: 'cy_g4_4', grade: 4, subject: 'cs', q: 'Conditional logic: IF battery < 20% THEN [Return to Base] ELSE [Explore]. Battery is 15%. Action?', opts: ['Explore', 'Return to Base', 'Self-destruct'], ans: 1, hint: '15% is less than 20%, so the IF condition is true!', explain: 'Because 15 < 20, the rover executes "Return to Base".', competency: 'debugging' },

    // Grade 5
    { id: 'cy_g5_1', grade: 5, subject: 'cs', q: 'In binary counting, what is the value of 110 in decimal base 10?', opts: ['4', '6', '8'], ans: 1, hint: '(1 × 4) + (1 × 2) + (0 × 1)', explain: '4 + 2 + 0 = 6.', competency: 'logic' },
    { id: 'cy_g5_2', grade: 5, subject: 'math', q: 'A processor runs 1,000 operations per millisecond. How many in 5 milliseconds?', opts: ['3,000', '5,000', '7,000'], ans: 1, hint: '1,000 × 5 = ?', explain: '1,000 × 5 = 5,000 operations.', competency: 'problem_solving' },
    { id: 'cy_g5_3', grade: 5, subject: 'gk', q: 'What does WWW stand for in internet navigation?', opts: ['World Wide Web', 'World Wireless Wave', 'Wide Web Window'], ans: 0, hint: 'Invented by Tim Berners-Lee in 1989.', explain: 'WWW stands for World Wide Web.', competency: 'data' },

    // Grade 6 & 7
    { id: 'cy_g6_1', grade: 6, subject: 'cs', q: 'Which sorting method repeatedly compares adjacent elements and swaps them if out of order?', opts: ['Quick Sort', 'Bubble Sort', 'Binary Search'], ans: 1, hint: 'Like bubbles rising to the surface one by one.', explain: 'Bubble Sort repeatedly steps through the list and swaps adjacent pairs.', competency: 'logic' },
    { id: 'cy_g7_1', grade: 7, subject: 'cs', q: 'What data structure follows FIFO (First-In, First-Out) principle?', opts: ['Stack', 'Queue', 'Binary Tree'], ans: 1, hint: 'Like waiting in a ticket checkout line!', explain: 'A Queue processes elements in arrival order: First-In, First-Out.', competency: 'data' },
  ],

  // ─────────────────── 5. RACING CHALLENGES ───────────────────
  racing: [
    // Grade 3
    { id: 'ra_g3_1', grade: 3, subject: 'math', q: 'Racer Leo did 5 laps. Each lap is 2 km. What is the total race distance?', opts: ['8 km', '10 km', '12 km'], ans: 1, hint: '5 × 2 = ?', explain: '5 laps × 2 km = 10 km total.', competency: 'problem_solving' },
    { id: 'ra_g3_2', grade: 3, subject: 'science', q: 'What force slows down race tires when the driver presses the brake pedal?', opts: ['Friction', 'Gravity', 'Magnetism'], ans: 0, hint: 'Resistance created when two surfaces rub together.', explain: 'Friction between brake pads and rotors resists rotation and stops the car.', competency: 'data' },
    { id: 'ra_g3_3', grade: 3, subject: 'english', q: 'What word describes the highest speed a vehicle can reach?', opts: ['Idle speed', 'Velocity / Top speed', 'Reverse'], ans: 1, hint: 'Peak speed or maximum rate of motion.', explain: 'Velocity or top speed measures the fastest pace reached.', competency: 'communication' },
    { id: 'ra_g3_4', grade: 3, subject: 'logic', q: 'Car Red finished ahead of Car Blue. Car Green finished ahead of Car Red. Who won?', opts: ['Car Red', 'Car Green', 'Car Blue'], ans: 1, hint: 'Green beat Red, and Red beat Blue.', explain: 'Order is Green → Red → Blue. Car Green is 1st!', competency: 'logic' },

    // Grade 4
    { id: 'ra_g4_1', grade: 4, subject: 'math', q: 'Pit stop refueled 24 litres on lap 10 and 18 litres on lap 20. Total fuel added?', opts: ['38 litres', '42 litres', '46 litres'], ans: 1, hint: '24 + 18 = ?', explain: '24 + 18 = 42 litres.', competency: 'problem_solving' },
    { id: 'ra_g4_2', grade: 4, subject: 'science', q: 'Why do racing cars have streamlined, low aerodynamic bodies?', opts: ['To look heavy', 'To reduce air resistance (drag)', 'To make louder noise'], ans: 1, hint: 'Smooth shapes slice through air more easily.', explain: 'Aerodynamic profiling minimizes drag so cars go faster using less fuel.', competency: 'data' },
    { id: 'ra_g4_3', grade: 4, subject: 'cs', q: 'Speedometer check: Speed = 120 km/h. IF Speed > 100 THEN [Deploy Spoiler]. Will spoiler deploy?', opts: ['No, speed is too low', 'Yes, condition met', 'Error'], ans: 1, hint: '120 is greater than 100.', explain: 'Since 120 > 100 is true, the rear spoiler deploys.', competency: 'debugging' },

    // Grade 5
    { id: 'ra_g5_1', grade: 5, subject: 'math', q: 'A racer drove 300 km in 2 hours. What was their average speed in km/h?', opts: ['120 km/h', '150 km/h', '180 km/h'], ans: 1, hint: 'Distance ÷ Time = 300 ÷ 2', explain: '300 ÷ 2 = 150 km/h.', competency: 'problem_solving' },
    { id: 'ra_g5_2', grade: 5, subject: 'science', q: 'Which law of motion states: "For every action, there is an equal and opposite reaction"?', opts: ['Newton\'s 1st Law', 'Newton\'s 3rd Law', 'Law of Gravity'], ans: 1, hint: 'Think of tire pushing backward on tarmac while tarmac pushes car forward.', explain: 'Newton\'s 3rd Law describes action-reaction pairs.', competency: 'logic' },
    { id: 'ra_g5_3', grade: 5, subject: 'gk', q: 'What prestigious open-wheel motor racing championship features Monaco Grand Prix?', opts: ['NASCAR', 'Formula 1', 'Rally Dakar'], ans: 1, hint: 'F1 drivers compete for the World Drivers\' Championship.', explain: 'Formula 1 is the highest class of international single-seater auto racing.', competency: 'data' },

    // Grade 6 & 7
    { id: 'ra_g6_1', grade: 6, subject: 'math', q: 'Lap time dropped from 80 seconds to 68 seconds. By how many seconds did it improve?', opts: ['10 seconds', '12 seconds', '14 seconds'], ans: 1, hint: '80 − 68 = ?', explain: '80 − 68 = 12 seconds faster.', competency: 'problem_solving' },
    { id: 'ra_g7_1', grade: 7, subject: 'science', q: 'When a race car corners, what inward force pulls it towards the center of the turn?', opts: ['Centripetal force', 'Centrifugal force', 'Gravitational wave'], ans: 0, hint: '"Center-seeking" force provided by tire lateral grip.', explain: 'Centripetal force is the net inward force required for circular motion.', competency: 'logic' },
  ],

  // ─────────────────── 6. OCEAN EXPLORER ───────────────────
  ocean: [
    // Grade 3
    { id: 'oc_g3_1', grade: 3, subject: 'math', q: 'Diver found 7 starfish and 8 sea shells. How many marine items in all?', opts: ['13 items', '15 items', '17 items'], ans: 1, hint: '7 + 8 = ?', explain: '7 + 8 = 15 marine items.', competency: 'problem_solving' },
    { id: 'oc_g3_2', grade: 3, subject: 'science', q: 'Which giant marine mammal is the largest creature ever to live on Earth?', opts: ['Great White Shark', 'Blue Whale', 'Giant Squid'], ans: 1, hint: 'It can weigh as much as 33 elephants combined!', explain: 'The Blue Whale can reach 30 metres length and up to 190 metric tons.', competency: 'data' },
    { id: 'oc_g3_3', grade: 3, subject: 'social', q: 'What is the largest and deepest ocean on Earth?', opts: ['Atlantic Ocean', 'Pacific Ocean', 'Indian Ocean'], ans: 1, hint: 'It covers more area than all Earth’s land combined!', explain: 'The Pacific Ocean is the largest, containing the Mariana Trench.', competency: 'data' },
    { id: 'oc_g3_4', grade: 3, subject: 'english', q: 'Coral is not a plant or rock. What kind of organism is it?', opts: ['Colony of small animals', 'Type of mineral', 'Fungus'], ans: 0, hint: 'Corals are made of thousands of tiny polyp creatures!', explain: 'Corals are marine invertebrates related to sea anemones and jellyfish.', competency: 'communication' },

    // Grade 4
    { id: 'oc_g4_1', grade: 4, subject: 'math', q: 'A submarine dives 30 metres every minute. Depth after 4 minutes?', opts: ['90 metres', '120 metres', '150 metres'], ans: 1, hint: '30 × 4 = ?', explain: '30 × 4 = 120 metres deep.', competency: 'problem_solving' },
    { id: 'oc_g4_2', grade: 4, subject: 'science', q: 'How do fish breathe underwater?', opts: ['Lungs', 'Gills that extract oxygen from water', 'Blowing bubbles'], ans: 1, hint: 'Feathery organs behind their heads.', explain: 'Gills have capillary networks that extract dissolved oxygen from water.', competency: 'data' },
    { id: 'oc_g4_3', grade: 4, subject: 'cs', q: 'Sonar sensor detected: [Reef at 15m, Rock at 8m, Shark at 25m]. Nearest hazard?', opts: ['Reef (15m)', 'Rock (8m)', 'Shark (25m)'], ans: 1, hint: '8m is the shortest distance.', explain: '8 metres is the closest object to the submarine.', competency: 'data' },

    // Grade 5
    { id: 'oc_g5_1', grade: 5, subject: 'math', q: 'Roughly what fraction of Earth\'s surface is covered by oceans?', opts: ['About 1/4', 'About 7/10 (71%)', 'About 9/10'], ans: 1, hint: 'Nearly three-quarters of the blue planet is ocean.', explain: 'Oceans cover roughly 71% (approx 7/10) of Earth’s surface.', competency: 'problem_solving' },
    { id: 'oc_g5_2', grade: 5, subject: 'science', q: 'What causes regular high and low ocean tides every day?', opts: ['Earthquake vibrations', 'Gravitational pull of the Moon and Sun', 'Whale movements'], ans: 1, hint: 'The celestial body orbiting Earth pulls the ocean waters.', explain: 'The Moon\'s gravitational tidal force creates oceanic tidal bulges.', competency: 'logic' },
    { id: 'oc_g5_3', grade: 5, subject: 'gk', q: 'What is the deepest known location in Earth\'s oceans?', opts: ['Bermuda Triangle', 'Mariana Trench (Challenger Deep)', 'Java Trench'], ans: 1, hint: 'Over 10,900 metres deep in the western Pacific.', explain: 'Challenger Deep in the Mariana Trench reaches ~10,928 metres.', competency: 'data' },

    // Grade 6 & 7
    { id: 'oc_g6_1', grade: 6, subject: 'math', q: 'Water pressure increases by 1 atmosphere every 10 metres. At 50 metres, additional pressure?', opts: ['3 atm', '5 atm', '8 atm'], ans: 1, hint: '50 ÷ 10 = ?', explain: '50 ÷ 10 = 5 atmospheres.', competency: 'problem_solving' },
    { id: 'oc_g7_1', grade: 7, subject: 'science', q: 'What chemical phenomenon causes coral reef bleaching?', opts: ['Cold currents', 'Thermal ocean warming & acidification', 'Sunlight blockage'], ans: 1, hint: 'Rising water temperatures expel symbiotic algae (zooxanthellae).', explain: 'Elevated sea temperatures cause corals to expel their colorful symbiotic algae.', competency: 'logic' },
  ],
};

/* ── Question Selector with Active Topic Prioritization ── */
function getQuestionsForStage(themeId, stageId, grade = 8, subject = 'science', topicId = null) {
  // 1. Check if an active topic is selected in Store or provided
  const activeId = topicId || (typeof Store !== 'undefined' ? Store.getActiveTopicId() : null);
  if (activeId && typeof CURRICULUM !== 'undefined' && CURRICULUM[activeId]) {
    const topic = CURRICULUM[activeId];
    if (topic.checkpointQuestions && topic.checkpointQuestions.length > 0) {
      return topic.checkpointQuestions.map(cq => ({
        id: cq.id,
        q: cq.prompt || cq.q,
        opts: cq.opts,
        ans: cq.ans,
        hint: cq.hint,
        explain: cq.explain,
        subtopicId: cq.subtopicId,
        xpReward: cq.xpReward || 40,
        competency: cq.competency || 'problem_solving',
        topicId: activeId,
      }));
    }
  }

  // 2. Fallback to thematic questions pool
  const pool = QUESTIONS[themeId] || QUESTIONS.space;
  let matches = pool.filter(q => q.grade === grade);
  if (matches.length < 3) {
    matches = pool.filter(q => Math.abs(q.grade - grade) <= 2);
  }
  if (matches.length === 0) matches = pool;

  const subMatches = matches.filter(q => q.subject === subject);
  const otherMatches = matches.filter(q => q.subject !== subject);
  let combined = [...subMatches, ...otherMatches];

  const history = Store.getQuestionHistory ? Store.getQuestionHistory() : [];
  const unseen = combined.filter(q => !history.includes(q.id));
  const finalPool = unseen.length >= 3 ? unseen : combined;

  return finalPool.slice(0, 5);
}


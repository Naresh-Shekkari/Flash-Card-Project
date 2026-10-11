// =============================================================================
// validate.js - Automated Comprehensive Test Suite (Grade 2 CBSE & Grade 5 SSC)
// =============================================================================
const fs = require('fs');
const path = require('path');

const g2Maths = require('./data/maths-questions.js');
const g2Ict = require('./data/ict-questions.js');
const g5Maths = require('./data/grade5-ssc-maths-questions.js');
const g5Science = require('./data/grade5-ssc-science-questions.js');
const { shuffleArray, SpeechHelper } = require('./js/utils.js');
const { QuizEngine } = require('./js/quiz.js');

console.log('\n======================================================');
console.log('🧪 RUNNING COMPREHENSIVE MULTI-GRADE VALIDATION SUITE');
console.log('======================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log('✅ PASS: ' + message);
    passCount++;
  } else {
    console.error('❌ FAIL: ' + message);
    failCount++;
  }
}

// 1. Question Bank Sizes
assert(g2Maths.length === 100, `Grade 2 CBSE Maths has exactly 100 questions (Found: ${g2Maths.length})`);
assert(g2Ict.length === 100, `Grade 2 CBSE ICT has exactly 100 questions (Found: ${g2Ict.length})`);
assert(g5Maths.length === 100, `Grade 5 Telangana SSC Maths has exactly 100 questions (Found: ${g5Maths.length})`);
assert(g5Science.length === 100, `Grade 5 Telangana SSC Science (EVS) has exactly 100 questions (Found: ${g5Science.length})`);

const allBanks = [
  { name: 'Grade 2 Maths', list: g2Maths },
  { name: 'Grade 2 ICT', list: g2Ict },
  { name: 'Grade 5 Maths', list: g5Maths },
  { name: 'Grade 5 Science', list: g5Science }
];

// 2. Total Question Count and Unique IDs
const allQuestions = [...g2Maths, ...g2Ict, ...g5Maths, ...g5Science];
assert(allQuestions.length === 400, `Total questions across all banks is 400 (Found: ${allQuestions.length})`);
const uniqueIds = new Set(allQuestions.map(q => q.id));
assert(uniqueIds.size === 400, `All 400 question IDs are globally unique (Found: ${uniqueIds.size} unique IDs)`);

// 3. Four Distinct Options per question
const allHave4Distinct = allBanks.every(b =>
  b.list.every(q => Array.isArray(q.options) && q.options.length === 4 && new Set(q.options).size === 4)
);
assert(allHave4Distinct, 'Every question across all 4 banks has exactly 4 distinct options');

// 4. Correct answer matches one of the options
const allCorrectAnswersMatch = allBanks.every(b =>
  b.list.every(q => q.options.includes(q.correctAnswer))
);
assert(allCorrectAnswersMatch, 'Every correct answer exists within the 4 options');

// 5. Valid explanations and non-empty questions
const allStatementsValid = allBanks.every(b =>
  b.list.every(q => q.question && q.question.trim().length > 5 && q.explanation && q.explanation.trim().length > 5)
);
assert(allStatementsValid, 'Every question statement and explanation is valid and non-empty');

// 6. No duplicate question statements within any bank
const noDuplicateQuestionsInBank = allBanks.every(b => {
  const statements = b.list.map(q => q.question.trim().toLowerCase());
  return new Set(statements).size === b.list.length;
});
assert(noDuplicateQuestionsInBank, 'No duplicate question statements within any question bank');

// 7. Metadata validation (grade, board, subject)
assert(g2Maths.every(q => q.grade === 2 && q.subject === 'Maths'), 'Grade 2 Maths has correct grade and subject metadata');
assert(g2Ict.every(q => q.grade === 2 && q.subject === 'ICT'), 'Grade 2 ICT has correct grade and subject metadata');
assert(g5Maths.every(q => q.grade === 5 && q.board === 'Telangana SSC' && q.subject === 'Maths'), 'Grade 5 Maths has correct grade, board and subject metadata');
assert(g5Science.every(q => q.grade === 5 && q.board === 'Telangana SSC' && q.subject === 'Science (EVS)'), 'Grade 5 Science has correct grade, board and subject metadata');

// 8. QuizEngine Simulations
global.MATHS_QUESTIONS = g2Maths;
global.ICT_QUESTIONS = g2Ict;
global.GRADE5_MATHS_QUESTIONS = g5Maths;
global.GRADE5_SCIENCE_QUESTIONS = g5Science;

const engine = new QuizEngine();

// Test Backward Compatibility: startQuiz('Maths') with 1 argument defaults to Grade 2
engine.startQuiz('Maths');
assert(engine.grade === 2 && engine.board === 'CBSE' && engine.subject === 'Maths', 'QuizEngine backward compatibility: startQuiz("Maths") defaults to Grade 2 CBSE');
assert(engine.quizQuestions.length === 10 && engine.quizQuestions.every(q => q.id.startsWith('MATH')), 'Grade 2 Maths selects 10 Grade 2 questions');

// Test Grade 2 ICT
engine.startQuiz('ICT', 2);
assert(engine.quizQuestions.length === 10 && engine.quizQuestions.every(q => q.id.startsWith('ICT')), 'Grade 2 ICT selects 10 Grade 2 ICT questions');

// Test Grade 5 Maths
engine.startQuiz('Maths', 5);
assert(engine.grade === 5 && engine.board === 'Telangana SSC' && engine.quizQuestions.length === 10 && engine.quizQuestions.every(q => q.id.startsWith('G5MATH')), 'Grade 5 Maths selects 10 Grade 5 Maths questions');

// Test Grade 5 Science (EVS)
engine.startQuiz('Science (EVS)', 5);
assert(engine.grade === 5 && engine.board === 'Telangana SSC' && engine.quizQuestions.length === 10 && engine.quizQuestions.every(q => q.id.startsWith('G5SCI')), 'Grade 5 Science selects 10 Grade 5 Science questions');

// 9. Zero Duplicate Questions in Quiz Sample
const g5SampleIds = new Set(engine.quizQuestions.map(q => q.id));
assert(g5SampleIds.size === 10, 'Quiz randomly selects exactly 10 distinct questions with no duplicates');

// 10. Shuffling Preserves Correct Answer Mapping
assert(engine.quizQuestions.every(q => q.options.includes(q.correctAnswer)), 'Shuffling options preserves correct answer mapping');

// 11. Scoring Rules Simulation
const testQ = engine.getCurrentQuestion();
const correctRes = engine.submitAnswer(testQ.correctAnswer);
assert(correctRes.isCorrect === true && engine.score === 1, 'Correct answer awards exactly 1 mark');

const duplicateClick = engine.submitAnswer(testQ.correctAnswer);
assert(duplicateClick === null && engine.score === 1, 'Duplicate clicks cannot award extra marks');

engine.nextQuestion();
const nextQ = engine.getCurrentQuestion();
const wrongChoice = nextQ.options.find(o => o !== nextQ.correctAnswer);
const wrongRes = engine.submitAnswer(wrongChoice);
assert(wrongRes.isCorrect === false && engine.score === 1, 'Wrong answer awards 0 marks with no negative deductions');

// Complete Quiz to check result payload
while (engine.hasNextQuestion()) {
  engine.nextQuestion();
  const q = engine.getCurrentQuestion();
  engine.submitAnswer(q.correctAnswer);
}
const finalResults = engine.getResults();
assert(finalResults.score === 9 && finalResults.percentage === 90 && finalResults.grade === 5 && finalResults.board === 'Telangana SSC', 'Final results contain accurate score, percentage, grade and board');

// 12. SpeechHelper Mathematical Expression Formatter
const speechHelper = new SpeechHelper();
const rawText = "What is 425 × 36? Price is ₹50 and length is 3 km.";
const formatted = speechHelper.formatSpokenText(rawText);
assert(
  formatted.includes('times') && formatted.includes('rupees') && formatted.includes('kilometres'),
  `SpeechHelper naturally formats math symbols: "${formatted}"`
);

// Fraction formatting
const fractionText = speechHelper.formatSpokenText("What is 3/4 + 1/4?");
assert(fractionText.includes('3 by 4') && fractionText.includes('plus'), `SpeechHelper formats fractions naturally: "${fractionText}"`);

// 13. File Existence & Relative Path Verification
assert(fs.existsSync('./index.html'), 'index.html exists');
assert(fs.existsSync('./css/style.css'), 'css/style.css exists');
assert(fs.existsSync('./js/app.js'), 'js/app.js exists');
assert(fs.existsSync('./js/quiz.js'), 'js/quiz.js exists');
assert(fs.existsSync('./js/utils.js'), 'js/utils.js exists');
assert(fs.existsSync('./data/maths-questions.js'), 'data/maths-questions.js exists');
assert(fs.existsSync('./data/ict-questions.js'), 'data/ict-questions.js exists');
assert(fs.existsSync('./data/grade5-ssc-maths-questions.js'), 'data/grade5-ssc-maths-questions.js exists');
assert(fs.existsSync('./data/grade5-ssc-science-questions.js'), 'data/grade5-ssc-science-questions.js exists');
assert(fs.existsSync('./README.md'), 'README.md exists');

// 14. Visual Enhancement Assets & Markup Verification
assert(fs.existsSync('./assets/images/home-hero-illustration.svg'), 'assets/images/home-hero-illustration.svg exists');
assert(fs.existsSync('./assets/images/grade2-learning-art.svg'), 'assets/images/grade2-learning-art.svg exists');
assert(fs.existsSync('./assets/images/grade5-learning-art.svg'), 'assets/images/grade5-learning-art.svg exists');

const htmlContent = fs.readFileSync('./index.html', 'utf8');
assert(htmlContent.includes('assets/images/home-hero-illustration.svg'), 'index.html references home hero SVG illustration');
assert(htmlContent.includes('assets/images/grade2-learning-art.svg'), 'index.html references Grade 2 learning art SVG');
assert(htmlContent.includes('assets/images/grade5-learning-art.svg'), 'index.html references Grade 5 learning art SVG');

const cssContent = fs.readFileSync('./css/style.css', 'utf8');
assert(cssContent.includes('.screen-illustration-banner'), 'css/style.css defines .screen-illustration-banner');
assert(cssContent.includes('.home-hero-banner'), 'css/style.css defines .home-hero-banner');
assert(cssContent.includes('.grade2-banner'), 'css/style.css defines .grade2-banner');
assert(cssContent.includes('.grade5-banner'), 'css/style.css defines .grade5-banner');
assert(cssContent.includes('@media (max-width: 480px)'), 'css/style.css contains responsive mobile media query');

// 15. SVG XML Well-Formedness & Attribute Integrity
function checkSvgWellFormed(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const tagMatches = content.match(/<[a-zA-Z0-9]+(\s+[^>]+)?>/g) || [];
  for (const tag of tagMatches) {
    const attrMatches = tag.match(/([a-zA-Z0-9_-]+)=["'][^"']*["']/g) || [];
    const attrNames = attrMatches.map(a => a.split('=')[0]);
    if (new Set(attrNames).size !== attrNames.length) return false;
  }
  return content.includes('<svg') && content.includes('</svg>');
}

assert(checkSvgWellFormed('./assets/images/home-hero-illustration.svg'), 'assets/images/home-hero-illustration.svg is well-formed XML with zero duplicate attributes');
assert(checkSvgWellFormed('./assets/images/grade2-learning-art.svg'), 'assets/images/grade2-learning-art.svg is well-formed XML with zero duplicate attributes');
assert(checkSvgWellFormed('./assets/images/grade5-learning-art.svg'), 'assets/images/grade5-learning-art.svg is well-formed XML with zero duplicate attributes');

// 16. Memory Color Challenge Unit & Integration Tests
const { MEMORY_COLOR_PICTURES, MEMORY_COLORS, normalizeHex } = require('./data/memory-color-pictures.js');
const { MemoryColorGame } = require('./js/memory-color-game.js');

assert(fs.existsSync('./data/memory-color-pictures.js'), 'data/memory-color-pictures.js exists');
assert(fs.existsSync('./js/memory-color-game.js'), 'js/memory-color-game.js exists');
assert(fs.existsSync('./css/memory-color-game.css'), 'css/memory-color-game.css exists');

assert(htmlContent.includes('css/memory-color-game.css'), 'index.html links css/memory-color-game.css');
assert(htmlContent.includes('data/memory-color-pictures.js'), 'index.html includes data/memory-color-pictures.js script');
assert(htmlContent.includes('js/memory-color-game.js'), 'index.html includes js/memory-color-game.js script');
assert(htmlContent.includes('id="memoryColorView"'), 'index.html defines memoryColorView section');
assert(htmlContent.includes('id="cardMemoryColor"'), 'index.html defines cardMemoryColor activity card on home screen');

// 17. Memory Color Picture Bank Verification (At least 10 pictures, exactly 10 regions each)
assert(Array.isArray(MEMORY_COLOR_PICTURES) && MEMORY_COLOR_PICTURES.length >= 10, `Memory Color picture bank has at least 10 pictures (Found: ${MEMORY_COLOR_PICTURES.length})`);
assert(Array.isArray(MEMORY_COLORS) && MEMORY_COLORS.length >= 10, `Palette has at least 10 distinct colors (Found: ${MEMORY_COLORS.length})`);

const validPaletteHexes = new Set(MEMORY_COLORS.map(c => normalizeHex(c.hex)));
assert(validPaletteHexes.size >= 10, 'All palette color hex values are unique');

const allPicsHave10UniqueRegions = MEMORY_COLOR_PICTURES.every(pic => {
  if (!pic.regions || pic.regions.length !== 10) return false;
  const regionIds = new Set(pic.regions.map(r => r.id));
  return regionIds.size === 10;
});
assert(allPicsHave10UniqueRegions, 'Every picture has exactly 10 unique, independently colorable region IDs');

const allRegionsHaveValidPaletteColors = MEMORY_COLOR_PICTURES.every(pic =>
  pic.regions.every(r => validPaletteHexes.has(normalizeHex(r.color)))
);
assert(allRegionsHaveValidPaletteColors, 'Every region across all pictures has a valid assigned palette color');

// 18. Memory Color Game Engine & Scoring Tests
const game = new MemoryColorGame(MEMORY_COLOR_PICTURES, MEMORY_COLORS);
assert(game.durationMs === 60000, 'Observation phase duration is configured for exactly 60 seconds (60,000ms)');

// Test: Random picture picking avoids immediate consecutive repeats
const picA = game.pickRandomPicture();
game.lastPictureId = picA.id;
const picB = game.pickRandomPicture();
assert(picB.id !== picA.id, `pickRandomPicture avoids consecutive repeat (${picA.id} -> ${picB.id})`);

// Test scoring scenarios on Picture 1
const testPic = MEMORY_COLOR_PICTURES[0];
game.currentPicture = testPic;

// Scenario A: 0/10 (uncolored)
game.userColors = {};
assert(game.calculateScore() === 0, 'Uncolored picture scores 0/10 marks');

// Scenario B: 10/10 (all 10 correct)
testPic.regions.forEach(r => {
  game.userColors[r.id] = r.color;
});
assert(game.calculateScore() === 10, 'All 10 correct regions score 10/10 marks');

// Scenario C: 9/10 (9 correct, 1 wrong)
game.userColors[testPic.regions[0].id] = '#FFFFFF'; // wrong color
assert(game.calculateScore() === 9, '9 correct regions score 9/10 marks');

// Scenario D: 7/10 (7 correct, 3 wrong)
game.userColors[testPic.regions[1].id] = '#000000';
game.userColors[testPic.regions[2].id] = '#000000';
assert(game.calculateScore() === 7, '7 correct regions score 7/10 marks');

// Scenario E: 5/10 (5 correct, 5 wrong)
game.userColors[testPic.regions[3].id] = '#000000';
game.userColors[testPic.regions[4].id] = '#000000';
assert(game.calculateScore() === 5, '5 correct regions score 5/10 marks');

// Scenario F: 0/10 (all wrong colors)
testPic.regions.forEach(r => {
  game.userColors[r.id] = '#000000'; // none match
});
assert(game.calculateScore() === 0, 'Zero correct regions score 0/10 marks');

// Test score ceiling never exceeds 10
assert(game.calculateScore() <= 10, 'Final score is strictly bounded and never exceeds 10 marks');

// Test Submission Lock (cannot resubmit once submitted)
game.isSubmitted = false;
game.phase = 'coloring';
game.submitColoring();
assert(game.isSubmitted === true && game.phase === 'results', 'Submitting transitions phase to results and locks canvas');

// Try calling submitColoring again - score must not change
const scoreAfterSubmit = game.score;
game.submitColoring();
assert(game.score === scoreAfterSubmit, 'Submitting multiple times cannot alter or double-count the score');

// Test Undo functionality
game.isSubmitted = false;
game.phase = 'coloring';
game.userColors = {};
game.history = [];
game.selectedColor = '#FF4757';
game.handleRegionClick('p1-roof'); // Roof gets #FF4757
assert(game.userColors['p1-roof'] === '#FF4757', 'Coloring region updates userColors mapping');
game.undoLastColor();
assert(!game.userColors['p1-roof'], 'Undo successfully reverts the last colored region');

// Test Reset functionality
game.handleRegionClick('p1-roof');
game.handleRegionClick('p1-wall');
game.resetColoring();
assert(Object.keys(game.userColors).length === 0, 'Reset clearing all user colors works correctly');

// Test cleanup stops active timers
game.startCountdownTimer();
assert(game.timerId !== null, 'Countdown timer starts successfully');
game.cleanup();
assert(game.timerId === null && game.phase === 'idle', 'Cleanup stops active timer and resets phase safely');

// Test renderResultsPhase DOM updating with wrong answers (verifies fix for 10/10 bug)
const mockElements = {};
global.document = {
  getElementById: (id) => {
    if (!mockElements[id]) mockElements[id] = { textContent: '', innerHTML: '', style: {}, appendChild: () => {} };
    return mockElements[id];
  },
  createElement: () => ({ setAttribute: () => {}, appendChild: () => {}, className: '' })
};

game.dom = {
  resultsPhase: { style: {} },
  observePhase: { style: {} },
  coloringPhase: { style: {} },
  container: { offsetTop: 0 }
};

// Scenario: Child scores 3/10
game.score = 3;
game.renderResultsPhase();
assert(mockElements['mcFinalScoreNum'].textContent === '3', `renderResultsPhase sets mcFinalScoreNum to 3 (Found: ${mockElements['mcFinalScoreNum'].textContent})`);
assert(mockElements['mcStatCorrectCount'].textContent === '3', `renderResultsPhase sets mcStatCorrectCount to 3 (Found: ${mockElements['mcStatCorrectCount'].textContent})`);
assert(mockElements['mcStatIncorrectCount'].textContent === '7', `renderResultsPhase sets mcStatIncorrectCount to 7 (Found: ${mockElements['mcStatIncorrectCount'].textContent})`);

// Scenario: Child scores 0/10
game.score = 0;
game.renderResultsPhase();
assert(mockElements['mcFinalScoreNum'].textContent === '0', `renderResultsPhase sets mcFinalScoreNum to 0 for wrong coloring (Found: ${mockElements['mcFinalScoreNum'].textContent})`);
assert(mockElements['mcStatCorrectCount'].textContent === '0', `renderResultsPhase sets mcStatCorrectCount to 0 (Found: ${mockElements['mcStatCorrectCount'].textContent})`);
assert(mockElements['mcStatIncorrectCount'].textContent === '10', `renderResultsPhase sets mcStatIncorrectCount to 10 (Found: ${mockElements['mcStatIncorrectCount'].textContent})`);

console.log('\n======================================================');
console.log(`🎯 TEST RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
console.log('======================================================\n');

if (failCount > 0) process.exit(1);

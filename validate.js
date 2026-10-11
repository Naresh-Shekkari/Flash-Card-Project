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

console.log('\n======================================================');
console.log(`🎯 TEST RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
console.log('======================================================\n');

if (failCount > 0) process.exit(1);

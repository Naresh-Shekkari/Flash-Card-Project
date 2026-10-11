// =============================================================================
// validate.js - Automated 18-Point Test Suite for Question Banks and Logic
// =============================================================================
const maths = require('./data/maths-questions.js');
const ict = require('./data/ict-questions.js');
const { shuffleArray } = require('./js/utils.js');
const { QuizEngine } = require('./js/quiz.js');

console.log('\n======================================================');
console.log('🧪 RUNNING COMPREHENSIVE 18-POINT VALIDATION SUITE');
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

// 1. Exactly 100 Maths questions
assert(maths.length === 100, `Maths question bank has exactly 100 questions (Found: ${maths.length})`);

// 2. Exactly 100 ICT questions
assert(ict.length === 100, `ICT question bank has exactly 100 questions (Found: ${ict.length})`);

// 3. Every Maths question has exactly 4 distinct options
const mathsOptionsValid = maths.every(q => Array.isArray(q.options) && q.options.length === 4 && new Set(q.options).size === 4);
assert(mathsOptionsValid, 'Every Maths question has exactly 4 distinct options');

// 4. Every ICT question has exactly 4 distinct options
const ictOptionsValid = ict.every(q => Array.isArray(q.options) && q.options.length === 4 && new Set(q.options).size === 4);
assert(ictOptionsValid, 'Every ICT question has exactly 4 distinct options');

// 5. Every Maths question correct answer matches one of the 4 options
const mathsCorrectMatches = maths.every(q => q.options.includes(q.correctAnswer));
assert(mathsCorrectMatches, 'Every Maths correct answer matches one of its options');

// 6. Every ICT question correct answer matches one of the 4 options
const ictCorrectMatches = ict.every(q => q.options.includes(q.correctAnswer));
assert(ictCorrectMatches, 'Every ICT correct answer matches one of its options');

// 7. Every question has a valid explanation
const explanationsValid = maths.every(q => q.explanation && q.explanation.length > 5) &&
                          ict.every(q => q.explanation && q.explanation.length > 5);
assert(explanationsValid, 'Every question has a valid, child-friendly explanation');

// 8. No duplicate question IDs
const allIds = [...maths.map(q => q.id), ...ict.map(q => q.id)];
assert(new Set(allIds).size === 200, `All 200 question IDs are unique (Found: ${new Set(allIds).size} unique IDs)`);

// 9. Subject integrity
const mathsSubjectCheck = maths.every(q => q.subject === 'Maths');
const ictSubjectCheck = ict.every(q => q.subject === 'ICT');
assert(mathsSubjectCheck && ictSubjectCheck, 'Subject tags strictly isolate Maths and ICT');

// 10. Grade level check
const gradeCheck = maths.every(q => q.grade === 2) && ict.every(q => q.grade === 2);
assert(gradeCheck, 'All questions are tagged Grade 2');

// 11-18. Simulate QuizEngine Runs
global.MATHS_QUESTIONS = maths;
global.ICT_QUESTIONS = ict;
global.window = {
  MATHS_QUESTIONS: maths,
  ICT_QUESTIONS: ict,
  shuffleArray: shuffleArray
};

// Simulation Test
const engine = new QuizEngine();

// 11. Random selection returns exactly 10 unique questions
engine.startQuiz('Maths');
const uniqueSample = new Set(engine.quizQuestions.map(q => q.id));
assert(engine.quizQuestions.length === 10 && uniqueSample.size === 10, 'Quiz randomly selects exactly 10 unique questions with no duplicates');

// 12. Selecting Maths never loads ICT questions
assert(engine.quizQuestions.every(q => q.subject === 'Maths'), 'Selecting Maths never loads ICT questions');

// 13. Selecting ICT never loads Maths questions
const ictEngine = new QuizEngine();
ictEngine.startQuiz('ICT');
assert(ictEngine.quizQuestions.every(q => q.subject === 'ICT'), 'Selecting ICT never loads Maths questions');

// 14. Option shuffling preserves correct answer match
const shufflePreserved = engine.quizQuestions.every(q => q.options.includes(q.correctAnswer));
assert(shufflePreserved, 'Shuffling options preserves correct answer mapping');

// 15. Correct answer awards 1 mark
const q1 = engine.getCurrentQuestion();
const res1 = engine.submitAnswer(q1.correctAnswer);
assert(res1.isCorrect === true && engine.score === 1, 'Correct answer awards exactly 1 mark');

// 16. Double click / repeated answer does not award extra marks
const resRepeat = engine.submitAnswer(q1.correctAnswer);
assert(resRepeat === null && engine.score === 1, 'Double-clicking an option cannot award extra marks');

// 17. Wrong answer awards 0 marks without deduction
engine.nextQuestion();
const q2 = engine.getCurrentQuestion();
const wrongChoice = q2.options.find(opt => opt !== q2.correctAnswer);
const res2 = engine.submitAnswer(wrongChoice);
assert(res2.isCorrect === false && engine.score === 1, 'Wrong answer awards 0 marks (score unchanged)');

// 18. Complete 10-question quiz scoring and percentage calculation
while (engine.hasNextQuestion()) {
  engine.nextQuestion();
  const q = engine.getCurrentQuestion();
  engine.submitAnswer(q.correctAnswer); // answer rest correctly
}
const finalRes = engine.getResults();
assert(finalRes.score === 9 && finalRes.percentage === 90 && finalRes.reviewData.length === 10, 'Final score and review data calculated with 100% precision');

console.log('\n======================================================');
console.log(`🎯 TEST RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
console.log('======================================================\n');

if (failCount > 0) process.exit(1);

// =============================================================================
// js/quiz.js - Quiz State Management & Core Logic (Grade 2 CBSE & Grade 5 SSC)
// =============================================================================

class QuizEngine {
  constructor() {
    this.grade = 2;
    this.board = 'CBSE';
    this.subject = 'Maths';
    this.totalQuestionsPerQuiz = 10;
    this.quizQuestions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.isAnswered = false;
    this.reviewData = [];
  }

  /**
   * Start a new quiz with 10 random questions from selected subject and grade
   * Backward-compatible default: grade = 2, board = 'CBSE'
   */
  startQuiz(subjectName, grade = 2, board = null) {
    this.subject = subjectName;
    this.grade = grade;
    this.board = board || (grade === 5 ? 'Telangana SSC' : 'CBSE');
    this.score = 0;
    this.currentIndex = 0;
    this.isAnswered = false;
    this.reviewData = [];

    // Get subject pool according to grade and subject
    let pool = [];

    const getFromEnv = (varName) => {
      if (typeof window !== 'undefined' && window[varName]) return window[varName];
      if (typeof global !== 'undefined' && global[varName]) return global[varName];
      return [];
    };

    if (this.grade === 2) {
      if (subjectName === 'Maths') {
        pool = getFromEnv('MATHS_QUESTIONS');
      } else if (subjectName === 'ICT') {
        pool = getFromEnv('ICT_QUESTIONS');
      }
    } else if (this.grade === 5) {
      if (subjectName === 'Maths') {
        pool = getFromEnv('GRADE5_MATHS_QUESTIONS');
      } else if (subjectName === 'Science (EVS)' || subjectName === 'Science' || subjectName === 'EVS') {
        pool = getFromEnv('GRADE5_SCIENCE_QUESTIONS');
      }
    }

    if (!pool || pool.length === 0) {
      console.error('Question bank empty for Grade', this.grade, subjectName);
      return false;
    }

    // Select exactly 10 distinct questions using Fisher-Yates shuffle
    const shuffleFn = (typeof window !== 'undefined' && window.shuffleArray)
      ? window.shuffleArray
      : (typeof require !== 'undefined' ? require('./utils.js').shuffleArray : null);

    const shuffledPool = shuffleFn(pool);
    const selected = shuffledPool.slice(0, this.totalQuestionsPerQuiz);

    // Deep copy and shuffle options for each question
    this.quizQuestions = selected.map(q => {
      const shuffledOptions = shuffleFn(q.options);
      return {
        ...q,
        options: shuffledOptions
      };
    });

    return true;
  }

  getCurrentQuestion() {
    return this.quizQuestions[this.currentIndex];
  }

  /**
   * Submit an answer for the current question
   * Returns evaluation result and locks question
   */
  submitAnswer(selectedAnswer) {
    if (this.isAnswered) {
      return null; // Prevent repeated scoring / double-clicks
    }

    this.isAnswered = true;
    const currentQ = this.getCurrentQuestion();
    const isCorrect = (selectedAnswer === currentQ.correctAnswer);

    if (isCorrect) {
      this.score += 1;
    }

    // Save for review mode
    this.reviewData.push({
      questionNumber: this.currentIndex + 1,
      id: currentQ.id,
      topic: currentQ.topic,
      grade: currentQ.grade || this.grade,
      board: currentQ.board || this.board,
      question: currentQ.question,
      selectedAnswer: selectedAnswer,
      correctAnswer: currentQ.correctAnswer,
      isCorrect: isCorrect,
      explanation: currentQ.explanation
    });

    return {
      isCorrect,
      selectedAnswer,
      correctAnswer: currentQ.correctAnswer,
      explanation: currentQ.explanation,
      score: this.score
    };
  }

  hasNextQuestion() {
    return (this.currentIndex + 1) < this.quizQuestions.length;
  }

  nextQuestion() {
    if (this.hasNextQuestion()) {
      this.currentIndex += 1;
      this.isAnswered = false;
      return true;
    }
    return false;
  }

  getResults() {
    const percentage = Math.round((this.score / this.totalQuestionsPerQuiz) * 100);
    let message = '';
    let trophy = '🌟';

    if (this.score === 10) {
      message = 'Excellent! You are a Superstar! 🌟';
      trophy = '🏆';
    } else if (this.score >= 8) {
      message = 'Great work! Keep shining! 🎉';
      trophy = '🌟';
    } else if (this.score >= 5) {
      message = 'Good effort! Practice makes you stronger! 💪';
      trophy = '🎈';
    } else {
      message = 'Keep learning! You can do it! 😊';
      trophy = '🌱';
    }

    return {
      grade: this.grade,
      board: this.board,
      subject: this.subject,
      score: this.score,
      total: this.totalQuestionsPerQuiz,
      correctCount: this.score,
      incorrectCount: this.totalQuestionsPerQuiz - this.score,
      percentage: percentage,
      message: message,
      trophy: trophy,
      reviewData: this.reviewData
    };
  }
}

if (typeof window !== 'undefined') {
  window.QuizEngine = QuizEngine;
}

if (typeof module !== 'undefined') {
  module.exports = { QuizEngine };
}

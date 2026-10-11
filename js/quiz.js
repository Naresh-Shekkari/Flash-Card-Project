// =============================================================================
// js/quiz.js - Quiz State Management & Core Logic
// =============================================================================

class QuizEngine {
  constructor() {
    this.subject = 'Maths';
    this.totalQuestionsPerQuiz = 10;
    this.quizQuestions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.isAnswered = false;
    this.reviewData = [];
  }

  /**
   * Start a new quiz with 10 random questions from selected subject
   */
  startQuiz(subjectName) {
    this.subject = subjectName;
    this.score = 0;
    this.currentIndex = 0;
    this.isAnswered = false;
    this.reviewData = [];

    // Get subject pool
    let pool = [];
    if (typeof window !== 'undefined') {
      if (subjectName === 'Maths') {
        pool = window.MATHS_QUESTIONS || [];
      } else if (subjectName === 'ICT') {
        pool = window.ICT_QUESTIONS || [];
      }
    } else if (typeof global !== 'undefined') {
      if (subjectName === 'Maths') {
        pool = global.MATHS_QUESTIONS || [];
      } else if (subjectName === 'ICT') {
        pool = global.ICT_QUESTIONS || [];
      }
    }

    if (!pool || pool.length === 0) {
      console.error('Question bank empty for', subjectName);
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

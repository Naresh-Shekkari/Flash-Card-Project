// =============================================================================
// js/app.js - UI Wiring & Event Handlers
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  const quiz = new window.QuizEngine();

  // DOM Elements
  const homeView = document.getElementById('homeView');
  const quizView = document.getElementById('quizView');
  const resultsView = document.getElementById('resultsView');

  const btnStartMaths = document.getElementById('btnStartMaths');
  const btnStartIct = document.getElementById('btnStartIct');
  const btnQuitQuiz = document.getElementById('btnQuitQuiz');
  const btnNextQuestion = document.getElementById('btnNextQuestion');
  const btnPlayAgain = document.getElementById('btnPlayAgain');
  const btnChangeSubject = document.getElementById('btnChangeSubject');
  const btnToggleReview = document.getElementById('btnToggleReview');
  const soundToggleBtn = document.getElementById('soundToggleBtn');

  // Quiz View Elements
  const quizSubjectLabel = document.getElementById('quizSubjectLabel');
  const liveScoreText = document.getElementById('liveScoreText');
  const progressBarFill = document.getElementById('progressBarFill');
  const progressText = document.getElementById('progressText');
  const cardTopicTag = document.getElementById('cardTopicTag');
  const cardQuestionId = document.getElementById('cardQuestionId');
  const cardQuestionText = document.getElementById('cardQuestionText');
  const optionsGrid = document.getElementById('optionsGrid');
  const feedbackBox = document.getElementById('feedbackBox');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackDetail = document.getElementById('feedbackDetail');
  const feedbackExplanation = document.getElementById('feedbackExplanation');

  // Results View Elements
  const trophyIcon = document.getElementById('trophyIcon');
  const resultsHeading = document.getElementById('resultsHeading');
  const resultsSubtext = document.getElementById('resultsSubtext');
  const finalScoreNumerator = document.getElementById('finalScoreNumerator');
  const finalPercentage = document.getElementById('finalPercentage');
  const statCorrectCount = document.getElementById('statCorrectCount');
  const statIncorrectCount = document.getElementById('statIncorrectCount');
  const statSubjectName = document.getElementById('statSubjectName');
  const reviewContainer = document.getElementById('reviewContainer');
  const reviewList = document.getElementById('reviewList');

  // Sound Toggle
  let soundEnabled = true;
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    window.soundEffects.enabled = soundEnabled;
    soundToggleBtn.textContent = soundEnabled ? '🔊 Sound On' : '🔇 Sound Off';
  });

  // Switch Views
  function showView(viewName) {
    homeView.style.display = 'none';
    quizView.style.display = 'none';
    resultsView.style.display = 'none';

    if (viewName === 'home') homeView.style.display = 'flex';
    if (viewName === 'quiz') quizView.style.display = 'flex';
    if (viewName === 'results') resultsView.style.display = 'flex';

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Start Quiz
  function startSubjectQuiz(subjectName) {
    const ok = quiz.startQuiz(subjectName);
    if (!ok) {
      alert('Could not start quiz. Please ensure questions are loaded.');
      return;
    }
    quizSubjectLabel.textContent = subjectName === 'Maths' ? '📐 Maths' : '💻 ICT';
    showView('quiz');
    renderQuestion();
  }

  // Render Current Question
  function renderQuestion() {
    const q = quiz.getCurrentQuestion();
    const currentNum = quiz.currentIndex + 1;
    const total = quiz.totalQuestionsPerQuiz;

    // Update Header Status
    liveScoreText.textContent = quiz.score;
    const progressPercent = Math.round((currentNum / total) * 100);
    progressBarFill.style.width = progressPercent + '%';
    progressText.textContent = 'Question ' + currentNum + ' of ' + total;

    // Card Details
    cardTopicTag.textContent = q.topic;
    cardQuestionId.textContent = q.id;
    cardQuestionText.textContent = q.question;

    // Reset Feedback and Next Button
    feedbackBox.style.display = 'none';
    btnNextQuestion.style.display = 'none';

    // Clear Options Grid
    optionsGrid.innerHTML = '';
    const prefixes = ['A', 'B', 'C', 'D'];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.setAttribute('type', 'button');
      btn.setAttribute('aria-label', 'Option ' + prefixes[idx] + ': ' + optText);

      btn.innerHTML = `
        <span class="option-prefix">${prefixes[idx]}</span>
        <span class="option-text">${optText}</span>
      `;

      btn.addEventListener('click', () => handleOptionClick(btn, optText));
      optionsGrid.appendChild(btn);
    });
  }

  // Handle Option Click
  function handleOptionClick(selectedBtn, chosenAnswer) {
    const result = quiz.submitAnswer(chosenAnswer);
    if (!result) return; // Prevent multiple clicks

    // Disable all options
    const optionButtons = optionsGrid.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.disabled = true);

    // Update live score
    liveScoreText.textContent = result.score;

    // Highlight Buttons
    optionButtons.forEach(btn => {
      const btnText = btn.querySelector('.option-text').textContent;
      if (btnText === result.correctAnswer) {
        btn.classList.add('btn-correct');
      }
    });

    if (!result.isCorrect) {
      selectedBtn.classList.add('btn-incorrect');
    }

    // Show Feedback Box
    feedbackBox.className = 'feedback-box ' + (result.isCorrect ? 'correct' : 'incorrect');
    if (result.isCorrect) {
      feedbackTitle.textContent = 'Correct! Great job! 🎉';
      feedbackDetail.textContent = 'You earned 1 mark.';
      window.soundEffects.playCorrect();
    } else {
      feedbackTitle.textContent = "Not quite! Let's learn together. 😊";
      feedbackDetail.textContent = 'The correct answer is: ' + result.correctAnswer;
      window.soundEffects.playIncorrect();
    }

    feedbackExplanation.textContent = '💡 ' + result.explanation;
    feedbackBox.style.display = 'block';

    // Show Next Button or Results
    if (quiz.hasNextQuestion()) {
      btnNextQuestion.textContent = 'Next Question ➔';
    } else {
      btnNextQuestion.textContent = 'See Final Results 🏆';
    }
    btnNextQuestion.style.display = 'block';
    btnNextQuestion.focus();
  }

  // Next Question Button
  btnNextQuestion.addEventListener('click', () => {
    if (quiz.hasNextQuestion()) {
      quiz.nextQuestion();
      renderQuestion();
    } else {
      showResults();
    }
  });

  // Show Results Screen
  function showResults() {
    const res = quiz.getResults();

    trophyIcon.textContent = res.trophy;
    resultsHeading.textContent = res.message;
    resultsSubtext.textContent = 'You completed the ' + res.subject + ' quiz!';

    finalScoreNumerator.textContent = res.score;
    finalPercentage.textContent = res.percentage + '%';

    statCorrectCount.textContent = res.correctCount;
    statIncorrectCount.textContent = res.incorrectCount;
    statSubjectName.textContent = res.subject;

    // Play celebration fanfare if high score
    if (res.score >= 8) {
      window.soundEffects.playCelebration();
    }

    // Build Review List
    reviewList.innerHTML = '';
    res.reviewData.forEach(item => {
      const revItem = document.createElement('div');
      revItem.className = 'review-item ' + (item.isCorrect ? 'review-correct' : 'review-incorrect');

      revItem.innerHTML = `
        <div class="review-q-header">
          <span>Question ${item.questionNumber} (${item.topic})</span>
          <span>${item.isCorrect ? '✅ 1/1 Mark' : '❌ 0/1 Mark'}</span>
        </div>
        <div class="review-question">${item.question}</div>
        <div class="review-ans-row">
          <div>Your Answer: <span class="review-ans-chosen ${item.isCorrect ? '' : 'wrong'}">${item.selectedAnswer}</span></div>
          ${!item.isCorrect ? `<div>Correct Answer: <span class="review-ans-correct">${item.correctAnswer}</span></div>` : ''}
        </div>
        <div class="review-expl">💡 ${item.explanation}</div>
      `;
      reviewList.appendChild(revItem);
    });

    reviewContainer.style.display = 'none';
    btnToggleReview.textContent = 'Review Questions 📝';

    showView('results');
  }

  // Toggle Review Accordion
  btnToggleReview.addEventListener('click', () => {
    if (reviewContainer.style.display === 'none') {
      reviewContainer.style.display = 'block';
      btnToggleReview.textContent = 'Hide Review ▲';
      reviewContainer.scrollIntoView({ behavior: 'smooth' });
    } else {
      reviewContainer.style.display = 'none';
      btnToggleReview.textContent = 'Review Questions 📝';
    }
  });

  // Navigation Event Handlers
  btnStartMaths.addEventListener('click', () => startSubjectQuiz('Maths'));
  btnStartIct.addEventListener('click', () => startSubjectQuiz('ICT'));
  btnQuitQuiz.addEventListener('click', () => {
    if (confirm('Are you sure you want to exit? Your current quiz progress will be lost.')) {
      showView('home');
    }
  });
  btnPlayAgain.addEventListener('click', () => startSubjectQuiz(quiz.subject));
  btnChangeSubject.addEventListener('click', () => showView('home'));

  // Keyboard accessibility: 1, 2, 3, 4 for options; Enter for next
  window.addEventListener('keydown', (e) => {
    if (quizView.style.display === 'flex') {
      const optionButtons = optionsGrid.querySelectorAll('.option-btn');
      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        if (optionButtons[idx] && !optionButtons[idx].disabled) {
          optionButtons[idx].click();
        }
      } else if (e.key === 'Enter' && btnNextQuestion.style.display === 'block') {
        btnNextQuestion.click();
      }
    }
  });
});

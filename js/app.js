// =============================================================================
// js/app.js - UI Wiring & Event Handlers (Grade 2 CBSE & Grade 5 SSC)
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  const quiz = new window.QuizEngine();
  const speech = window.speechHelper;

  // Active Grade Tracker: 2 or 5
  let currentSelectedGrade = 2;

  // DOM Elements - Views
  const gradeSelectView = document.getElementById('gradeSelectView');
  const subjectGrade2View = document.getElementById('subjectGrade2View');
  const subjectGrade5View = document.getElementById('subjectGrade5View');
  const quizView = document.getElementById('quizView');
  const resultsView = document.getElementById('resultsView');
  const memoryColorView = document.getElementById('memoryColorView');

  // Memory Color Challenge Elements
  const cardMemoryColor = document.getElementById('cardMemoryColor');
  const btnStartMemoryColor = document.getElementById('btnStartMemoryColor');
  const btnBackToHomeFromMemoryColor = document.getElementById('btnBackToHomeFromMemoryColor');

  // Memory Color Game Instance
  const memoryColorGame = new (window.MemoryColorGame || MemoryColorGame)(
    window.MEMORY_COLOR_PICTURES,
    window.MEMORY_COLORS
  );
  window.memoryColorGame = memoryColorGame;
  memoryColorGame.initDOM();

  // Header Elements
  const headerLogoArea = document.getElementById('headerLogoArea');
  const soundToggleBtn = document.getElementById('soundToggleBtn');

  // Grade Select Buttons & Cards
  const btnSelectGrade2 = document.getElementById('btnSelectGrade2');
  const btnSelectGrade5 = document.getElementById('btnSelectGrade5');
  const cardGrade2 = document.getElementById('cardGrade2');
  const cardGrade5 = document.getElementById('cardGrade5');

  // Subject Navigation Buttons
  const btnBackToGradesFromG2 = document.getElementById('btnBackToGradesFromG2');
  const btnBackToGradesFromG5 = document.getElementById('btnBackToGradesFromG5');
  const btnStartMaths = document.getElementById('btnStartMaths');
  const btnStartIct = document.getElementById('btnStartIct');
  const btnStartG5Maths = document.getElementById('btnStartG5Maths');
  const btnStartG5Science = document.getElementById('btnStartG5Science');

  // Quiz View Elements
  const btnQuitQuiz = document.getElementById('btnQuitQuiz');
  const quizGradeBoardLabel = document.getElementById('quizGradeBoardLabel');
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
  const btnNextQuestion = document.getElementById('btnNextQuestion');

  // Read-Aloud Speech Controls
  const btnReadQuestion = document.getElementById('btnReadQuestion');
  const btnReadOptions = document.getElementById('btnReadOptions');
  const btnStopReading = document.getElementById('btnStopReading');
  const speechStatusIndicator = document.getElementById('speechStatusIndicator');
  const btnReadFeedback = document.getElementById('btnReadFeedback');

  // Results View Elements
  const trophyIcon = document.getElementById('trophyIcon');
  const resultsHeading = document.getElementById('resultsHeading');
  const resultsSubtext = document.getElementById('resultsSubtext');
  const finalScoreNumerator = document.getElementById('finalScoreNumerator');
  const finalPercentage = document.getElementById('finalPercentage');
  const statCorrectCount = document.getElementById('statCorrectCount');
  const statIncorrectCount = document.getElementById('statIncorrectCount');
  const statSubjectName = document.getElementById('statSubjectName');
  const statGradeBoardLabel = document.getElementById('statGradeBoardLabel');
  const btnPlayAgain = document.getElementById('btnPlayAgain');
  const btnChangeSubject = document.getElementById('btnChangeSubject');
  const btnChangeGrade = document.getElementById('btnChangeGrade');
  const btnToggleReview = document.getElementById('btnToggleReview');
  const reviewContainer = document.getElementById('reviewContainer');
  const reviewList = document.getElementById('reviewList');

  // Current Answer Submission Result (for read-aloud feedback)
  let lastAnswerResult = null;

  // Sound Effects Toggle
  let soundEnabled = true;
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    window.soundEffects.enabled = soundEnabled;
    soundToggleBtn.textContent = soundEnabled ? '🔊 Sound On' : '🔇 Sound Off';
  });

  // Speech Helper State Change Listener
  if (speech) {
    speech.onStateChange = (isSpeaking, statusText) => {
      if (isSpeaking) {
        if (btnStopReading) btnStopReading.style.display = 'inline-flex';
        if (speechStatusIndicator) {
          speechStatusIndicator.style.display = 'inline-block';
          speechStatusIndicator.textContent = `🗣️ ${statusText || 'Speaking...'}`;
        }
      } else {
        if (btnStopReading) btnStopReading.style.display = 'none';
        if (speechStatusIndicator) {
          speechStatusIndicator.style.display = 'none';
        }
      }
    };
  }

  // Switch View Helper
  function showView(viewName) {
    // Always cancel ongoing speech on view transitions
    if (speech) speech.stop();

    // Clean up memory color challenge timer if navigating away from it
    if (viewName !== 'memoryColor' && memoryColorGame) {
      memoryColorGame.cleanup();
    }

    gradeSelectView.style.display = 'none';
    subjectGrade2View.style.display = 'none';
    subjectGrade5View.style.display = 'none';
    quizView.style.display = 'none';
    resultsView.style.display = 'none';
    if (memoryColorView) memoryColorView.style.display = 'none';

    if (viewName === 'gradeSelect') gradeSelectView.style.display = 'flex';
    if (viewName === 'subjectGrade2') subjectGrade2View.style.display = 'flex';
    if (viewName === 'subjectGrade5') subjectGrade5View.style.display = 'flex';
    if (viewName === 'quiz') quizView.style.display = 'flex';
    if (viewName === 'results') resultsView.style.display = 'flex';
    if (viewName === 'memoryColor') memoryColorView.style.display = 'flex';

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Memory Color Challenge Launchers
  function startMemoryColorChallenge() {
    showView('memoryColor');
    if (memoryColorGame) {
      memoryColorGame.startChallenge();
    }
  }

  if (btnStartMemoryColor) {
    btnStartMemoryColor.addEventListener('click', (e) => {
      e.stopPropagation();
      startMemoryColorChallenge();
    });
  }

  if (cardMemoryColor) {
    cardMemoryColor.addEventListener('click', () => startMemoryColorChallenge());
    cardMemoryColor.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        startMemoryColorChallenge();
      }
    });
  }

  if (btnBackToHomeFromMemoryColor) {
    btnBackToHomeFromMemoryColor.addEventListener('click', () => {
      if (memoryColorGame) memoryColorGame.cleanup();
      showView('gradeSelect');
    });
  }

  // Grade Selection Handlers
  function chooseGrade(gradeNum) {
    currentSelectedGrade = gradeNum;
    if (gradeNum === 2) {
      showView('subjectGrade2');
    } else if (gradeNum === 5) {
      showView('subjectGrade5');
    }
  }

  btnSelectGrade2.addEventListener('click', () => chooseGrade(2));
  cardGrade2.addEventListener('click', () => chooseGrade(2));
  cardGrade2.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      chooseGrade(2);
    }
  });

  btnSelectGrade5.addEventListener('click', () => chooseGrade(5));
  cardGrade5.addEventListener('click', () => chooseGrade(5));
  cardGrade5.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      chooseGrade(5);
    }
  });

  // Back to Grade Selection
  btnBackToGradesFromG2.addEventListener('click', () => showView('gradeSelect'));
  btnBackToGradesFromG5.addEventListener('click', () => showView('gradeSelect'));
  headerLogoArea.addEventListener('click', () => showView('gradeSelect'));
  headerLogoArea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showView('gradeSelect');
    }
  });

  // Start Quiz for a chosen subject and grade
  function startSubjectQuiz(subjectName, gradeNum) {
    const boardName = (gradeNum === 5) ? 'Telangana SSC' : 'CBSE';
    const ok = quiz.startQuiz(subjectName, gradeNum, boardName);
    if (!ok) {
      alert(`Could not start quiz. Please ensure questions are loaded for Grade ${gradeNum} ${subjectName}.`);
      return;
    }

    currentSelectedGrade = gradeNum;
    quizGradeBoardLabel.textContent = `Grade ${gradeNum} • ${boardName}`;
    if (subjectName === 'Maths') {
      quizSubjectLabel.textContent = '📐 Maths';
    } else if (subjectName === 'ICT') {
      quizSubjectLabel.textContent = '💻 ICT';
    } else if (subjectName === 'Science (EVS)' || subjectName === 'Science') {
      quizSubjectLabel.textContent = '🔬 Science (EVS)';
    } else {
      quizSubjectLabel.textContent = subjectName;
    }

    showView('quiz');
    renderQuestion();
  }

  // Hook Subject Start Buttons
  btnStartMaths.addEventListener('click', () => startSubjectQuiz('Maths', 2));
  btnStartIct.addEventListener('click', () => startSubjectQuiz('ICT', 2));
  btnStartG5Maths.addEventListener('click', () => startSubjectQuiz('Maths', 5));
  btnStartG5Science.addEventListener('click', () => startSubjectQuiz('Science (EVS)', 5));

  // Render Current Flashcard Question
  function renderQuestion() {
    // Cancel any speech from previous question
    if (speech) speech.stop();
    lastAnswerResult = null;

    const q = quiz.getCurrentQuestion();
    const currentNum = quiz.currentIndex + 1;
    const total = quiz.totalQuestionsPerQuiz;

    // Header updates
    liveScoreText.textContent = quiz.score;
    const progressPercent = Math.round((currentNum / total) * 100);
    progressBarFill.style.width = progressPercent + '%';
    progressText.textContent = `Question ${currentNum} of ${total}`;

    // Card Details
    cardTopicTag.textContent = q.topic;
    cardQuestionId.textContent = q.id;
    cardQuestionText.textContent = q.question;

    // Reset Feedback and Next Button
    feedbackBox.style.display = 'none';
    btnNextQuestion.style.display = 'none';

    // Clear and build options grid
    optionsGrid.innerHTML = '';
    const prefixes = ['A', 'B', 'C', 'D'];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.setAttribute('type', 'button');
      btn.setAttribute('aria-label', `Option ${prefixes[idx]}: ${optText}`);

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
    // Cancel any ongoing speech when an answer is chosen
    if (speech) speech.stop();

    const result = quiz.submitAnswer(chosenAnswer);
    if (!result) return; // Prevent repeated clicks

    lastAnswerResult = result;

    // Lock all options for this question
    const optionButtons = optionsGrid.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.disabled = true);

    // Update live score display
    liveScoreText.textContent = result.score;

    // Highlight correct option in green
    optionButtons.forEach(btn => {
      const btnText = btn.querySelector('.option-text').textContent;
      if (btnText === result.correctAnswer) {
        btn.classList.add('btn-correct');
      }
    });

    // If incorrect, highlight selected option in red
    if (!result.isCorrect) {
      selectedBtn.classList.add('btn-incorrect');
    }

    // Display Feedback Box
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

    // Next Button
    if (quiz.hasNextQuestion()) {
      btnNextQuestion.textContent = 'Next Question ➔';
    } else {
      btnNextQuestion.textContent = 'See Final Results 🏆';
    }
    btnNextQuestion.style.display = 'block';
    btnNextQuestion.focus();
  }

  // Next Question Button Click
  btnNextQuestion.addEventListener('click', () => {
    if (speech) speech.stop();
    if (quiz.hasNextQuestion()) {
      quiz.nextQuestion();
      renderQuestion();
    } else {
      showResults();
    }
  });

  // Read-Aloud Button Event Listeners
  btnReadQuestion.addEventListener('click', () => {
    const q = quiz.getCurrentQuestion();
    if (!q) return;
    if (!speech || !speech.isSupported()) {
      alert('Audio reading is not available in this browser. Please try Chrome or Microsoft Edge.');
      return;
    }
    speech.speakQuestion(q.question);
  });

  btnReadOptions.addEventListener('click', () => {
    const q = quiz.getCurrentQuestion();
    if (!q) return;
    if (!speech || !speech.isSupported()) {
      alert('Audio reading is not available in this browser. Please try Chrome or Microsoft Edge.');
      return;
    }
    speech.speakOptions(q.options);
  });

  btnStopReading.addEventListener('click', () => {
    if (speech) speech.stop();
  });

  btnReadFeedback.addEventListener('click', () => {
    if (!lastAnswerResult) return;
    if (!speech || !speech.isSupported()) {
      alert('Audio reading is not available in this browser. Please try Chrome or Microsoft Edge.');
      return;
    }
    speech.speakFeedback(
      lastAnswerResult.isCorrect,
      lastAnswerResult.correctAnswer,
      lastAnswerResult.explanation
    );
  });

  // Show Results Screen
  function showResults() {
    if (speech) speech.stop();
    const res = quiz.getResults();

    trophyIcon.textContent = res.trophy;
    resultsHeading.textContent = res.message;
    resultsSubtext.textContent = `You completed the Grade ${res.grade} (${res.board}) ${res.subject} quiz!`;

    finalScoreNumerator.textContent = res.score;
    finalPercentage.textContent = res.percentage + '%';

    statCorrectCount.textContent = res.correctCount;
    statIncorrectCount.textContent = res.incorrectCount;
    statSubjectName.textContent = res.subject;
    statGradeBoardLabel.textContent = `Grade ${res.grade} • ${res.board}`;

    if (res.score >= 8) {
      window.soundEffects.playCelebration();
    }

    // Build Review List
    reviewList.innerHTML = '';
    res.reviewData.forEach(item => {
      const revItem = document.createElement('div');
      revItem.className = 'review-item ' + (item.isCorrect ? 'review-correct' : 'review-incorrect');

      const reviewAudioBtnId = `btnRevSpeak_${item.id}`;

      revItem.innerHTML = `
        <div class="review-q-header">
          <div class="review-q-left">
            <span class="review-q-badge">Question ${item.questionNumber} (${item.topic})</span>
            <span class="review-q-mark">${item.isCorrect ? '✅ 1/1 Mark' : '❌ 0/1 Mark'}</span>
          </div>
          <button id="${reviewAudioBtnId}" class="speech-btn speech-btn-small" type="button" title="Listen to question">
            🔊 Listen
          </button>
        </div>
        <div class="review-question">${item.question}</div>
        <div class="review-ans-row">
          <div>Your Answer: <span class="review-ans-chosen ${item.isCorrect ? '' : 'wrong'}">${item.selectedAnswer}</span></div>
          ${!item.isCorrect ? `<div>Correct Answer: <span class="review-ans-correct">${item.correctAnswer}</span></div>` : ''}
        </div>
        <div class="review-expl">💡 ${item.explanation}</div>
      `;
      reviewList.appendChild(revItem);

      // Attach audio handler to review card
      const revSpeakBtn = revItem.querySelector(`#${reviewAudioBtnId}`);
      if (revSpeakBtn) {
        revSpeakBtn.addEventListener('click', () => {
          if (!speech || !speech.isSupported()) return;
          const readText = `${item.question}. Correct answer is: ${item.correctAnswer}. ${item.explanation}`;
          speech.speak(readText, `Review Q${item.questionNumber}`);
        });
      }
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
      if (speech) speech.stop();
      reviewContainer.style.display = 'none';
      btnToggleReview.textContent = 'Review Questions 📝';
    }
  });

  // Quit / Exit Quiz Handler
  btnQuitQuiz.addEventListener('click', () => {
    if (speech) speech.stop();
    if (confirm('Are you sure you want to exit? Your current quiz progress will be lost.')) {
      if (quiz.grade === 5) {
        showView('subjectGrade5');
      } else {
        showView('subjectGrade2');
      }
    }
  });

  // Results Actions
  btnPlayAgain.addEventListener('click', () => {
    startSubjectQuiz(quiz.subject, quiz.grade);
  });

  btnChangeSubject.addEventListener('click', () => {
    if (quiz.grade === 5) {
      showView('subjectGrade5');
    } else {
      showView('subjectGrade2');
    }
  });

  btnChangeGrade.addEventListener('click', () => {
    showView('gradeSelect');
  });

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // When quiz is active
    if (quizView.style.display === 'flex') {
      const optionButtons = optionsGrid.querySelectorAll('.option-btn');

      // 1-4 for options
      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        if (optionButtons[idx] && !optionButtons[idx].disabled) {
          optionButtons[idx].click();
        }
      }
      // Enter for Next Question
      else if (e.key === 'Enter' && btnNextQuestion.style.display === 'block') {
        btnNextQuestion.click();
      }
      // 'r' to read question
      else if ((e.key === 'r' || e.key === 'R') && !e.ctrlKey && !e.altKey && !e.metaKey) {
        btnReadQuestion.click();
      }
      // 'o' to read options
      else if ((e.key === 'o' || e.key === 'O') && !e.ctrlKey && !e.altKey && !e.metaKey) {
        btnReadOptions.click();
      }
      // Escape or 's' to stop reading
      else if (e.key === 'Escape' || ((e.key === 's' || e.key === 'S') && speech && speech.isSpeaking)) {
        if (speech) speech.stop();
      }
    }
  });
});

// =============================================================================
// js/memory-color-game.js - Memory Color Challenge Activity Engine
// Grade 2 Educational Visual Memory & Coloring Challenge
// =============================================================================

class MemoryColorGame {
  constructor(pictures = null, colors = null) {
    this.pictures = pictures || (typeof window !== 'undefined' ? window.MEMORY_COLOR_PICTURES : []);
    this.colors = colors || (typeof window !== 'undefined' ? window.MEMORY_COLORS : []);

    // Game State
    this.currentPicture = null;
    this.lastPictureId = null;
    this.phase = 'idle'; // 'observe' | 'coloring' | 'results'
    this.userColors = {}; // { [regionId]: hex }
    this.history = []; // [{ regionId, oldColor, newColor }]
    this.selectedColor = this.colors.length > 0 ? this.colors[0].hex : '#FF4757';
    this.timerId = null;
    this.timerStartTime = 0;
    this.durationMs = 30000; // 30 seconds observation
    this.playedHistory = []; // Recent history to avoid duplicate pictures
    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        const saved = window.sessionStorage.getItem('mc_played_history');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) this.playedHistory = parsed;
        }
      } catch (e) {
        // Ignore sessionStorage restrictions if any
      }
    }
    this.isSubmitted = false;
    this.score = 0;
    this.resultsBreakdown = [];

    // DOM Container References (resolved when mounted)
    this.dom = {
      container: null,
      observePhase: null,
      coloringPhase: null,
      resultsPhase: null,
      timerText: null,
      timerFill: null,
      observeSvgContainer: null,
      coloringSvgContainer: null,
      paletteContainer: null,
      selectedColorPreview: null,
      selectedColorName: null,
      btnUndo: null,
      btnReset: null,
      btnSubmit: null,
      btnTryAnother: null,
      btnPlayAgain: null,
      btnBackToHome: null
    };
  }

  // Bind DOM elements in the HTML view
  initDOM() {
    if (typeof document === 'undefined') return;

    this.dom.container = document.getElementById('memoryColorView');
    this.dom.observePhase = document.getElementById('mcObservePhase');
    this.dom.coloringPhase = document.getElementById('mcColoringPhase');
    this.dom.resultsPhase = document.getElementById('mcResultsPhase');

    this.dom.timerText = document.getElementById('mcTimerText');
    this.dom.timerFill = document.getElementById('mcTimerFill');
    this.dom.observeSvgContainer = document.getElementById('mcObserveSvgContainer');
    this.dom.coloringSvgContainer = document.getElementById('mcColoringSvgContainer');
    this.dom.paletteContainer = document.getElementById('mcPaletteContainer');
    this.dom.selectedColorPreview = document.getElementById('mcSelectedColorPreview');
    this.dom.selectedColorName = document.getElementById('mcSelectedColorName');

    this.dom.btnUndo = document.getElementById('mcBtnUndo');
    this.dom.btnReset = document.getElementById('mcBtnReset');
    this.dom.btnSubmit = document.getElementById('mcBtnSubmit');
    this.dom.btnTryAnother = document.getElementById('mcBtnTryAnother');
    this.dom.btnPlayAgain = document.getElementById('mcBtnPlayAgain');
    this.dom.btnBackToHome = document.getElementById('btnBackToHomeFromMemoryColor');

    this.bindEvents();
  }

  bindEvents() {
    if (!this.dom.container) return;

    if (this.dom.btnUndo) {
      this.dom.btnUndo.onclick = () => this.undoLastColor();
    }
    if (this.dom.btnReset) {
      this.dom.btnReset.onclick = () => this.confirmResetColoring();
    }
    if (this.dom.btnSubmit) {
      this.dom.btnSubmit.onclick = () => this.submitColoring();
    }
    if (this.dom.btnTryAnother) {
      this.dom.btnTryAnother.onclick = () => this.startChallenge(null);
    }
    if (this.dom.btnPlayAgain) {
      this.dom.btnPlayAgain.onclick = () => this.startChallenge(this.currentPicture ? this.currentPicture.id : null);
    }
  }

  // Select a random picture ensuring varied selection without repeats
  pickRandomPicture(preferredId = null) {
    if (!this.pictures || this.pictures.length === 0) return null;
    if (preferredId) {
      const found = this.pictures.find(p => p.id === preferredId);
      if (found) return found;
    }

    if (this.pictures.length === 1) return this.pictures[0];

    if (!Array.isArray(this.playedHistory)) {
      this.playedHistory = [];
    }

    // Sync with external lastPictureId if set (e.g. in test assertions)
    if (this.lastPictureId && !this.playedHistory.includes(this.lastPictureId)) {
      this.playedHistory.push(this.lastPictureId);
    }

    // Allow history to keep up to (pictures.length - 1) items, or 75% of deck
    const maxHistory = Math.max(1, Math.min(this.pictures.length - 1, Math.floor(this.pictures.length * 0.75)));
    while (this.playedHistory.length > maxHistory) {
      this.playedHistory.shift();
    }

    // Filter out recently played pictures
    let available = this.pictures.filter(p => !this.playedHistory.includes(p.id));
    if (available.length === 0) {
      available = this.pictures.filter(p => p.id !== this.lastPictureId);
    }
    const pool = available.length > 0 ? available : this.pictures;

    const randomIndex = Math.floor(Math.random() * pool.length);
    const chosen = pool[randomIndex];

    if (chosen) {
      this.playedHistory.push(chosen.id);
      if (typeof window !== 'undefined' && window.sessionStorage) {
        try {
          window.sessionStorage.setItem('mc_played_history', JSON.stringify(this.playedHistory));
        } catch (e) {
          // Ignore sessionStorage restrictions if any
        }
      }
    }

    return chosen;
  }

  // Start Challenge (Phase A: 30-second observation)
  startChallenge(preferredPictureId = null) {
    this.cleanup();

    const pic = this.pickRandomPicture(preferredPictureId);
    if (!pic) {
      console.error('No pictures available in MemoryColorGame.');
      return;
    }

    this.currentPicture = pic;
    this.lastPictureId = pic.id;
    this.phase = 'observe';
    this.userColors = {};
    this.history = [];
    this.isSubmitted = false;
    this.score = 0;
    this.resultsBreakdown = [];

    // Ensure first color is preselected
    if (this.colors && this.colors.length > 0) {
      this.selectedColor = this.colors[0].hex;
    }

    this.renderObservationPhase();
    this.startCountdownTimer();
  }

  // ---------------------------------------------------------------------------
  // Phase A: Observation
  // ---------------------------------------------------------------------------
  renderObservationPhase() {
    if (!this.dom.observePhase) return;

    // Show observe phase, hide others
    this.dom.observePhase.style.display = 'block';
    if (this.dom.coloringPhase) this.dom.coloringPhase.style.display = 'none';
    if (this.dom.resultsPhase) this.dom.resultsPhase.style.display = 'none';

    // Title & instruction
    const titleEl = document.getElementById('mcObserveTitle');
    if (titleEl) titleEl.textContent = this.currentPicture.title;
    const subEl = document.getElementById('mcObserveSubtitle');
    if (subEl) subEl.textContent = this.currentPicture.subtitle;

    // Render fully colored original SVG
    if (this.dom.observeSvgContainer) {
      this.dom.observeSvgContainer.innerHTML = this.buildSvgString(this.currentPicture, 'colored');
    }

    // Reset countdown display
    this.updateTimerDisplay(Math.ceil(this.durationMs / 1000), 100);
  }

  // Reliable timestamp-based countdown timer
  startCountdownTimer() {
    this.stopCountdownTimer();
    this.timerStartTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - this.timerStartTime;
      const remainingMs = Math.max(0, this.durationMs - elapsed);
      const remainingSec = Math.ceil(remainingMs / 1000);
      const progressPercent = (remainingMs / this.durationMs) * 100;

      this.updateTimerDisplay(remainingSec, progressPercent);

      if (remainingMs <= 0) {
        this.stopCountdownTimer();
        this.transitionToColoringPhase();
      }
    };

    // Run tick immediately and set fast interval (100ms) for smooth progress bar
    tick();
    this.timerId = setInterval(tick, 100);
  }

  stopCountdownTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  updateTimerDisplay(seconds, percent) {
    if (this.dom.timerText) {
      this.dom.timerText.textContent = `${seconds}s`;
    }
    if (this.dom.timerFill) {
      this.dom.timerFill.style.width = `${Math.max(0, Math.min(100, percent))}%`;
    }
  }

  // ---------------------------------------------------------------------------
  // Phase B: Coloring from Memory
  // ---------------------------------------------------------------------------
  transitionToColoringPhase() {
    this.phase = 'coloring';

    if (this.dom.observePhase) this.dom.observePhase.style.display = 'none';
    if (this.dom.resultsPhase) this.dom.resultsPhase.style.display = 'none';
    if (this.dom.coloringPhase) this.dom.coloringPhase.style.display = 'block';

    const titleEl = document.getElementById('mcColoringTitle');
    if (titleEl) titleEl.textContent = `Coloring: ${this.currentPicture.title}`;

    this.renderColorPalette();
    this.renderColoringSvg();
    this.updateSelectedColorUI();
    this.updateActionButtonsState();

    // Scroll to top of coloring container
    if (this.dom.container && typeof window !== 'undefined') {
      window.scrollTo({ top: this.dom.container.offsetTop - 20, behavior: 'smooth' });
    }
  }

  renderColorPalette() {
    if (!this.dom.paletteContainer) return;
    this.dom.paletteContainer.innerHTML = '';

    this.colors.forEach(col => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mc-palette-btn' + (this.selectedColor === col.hex ? ' active' : '');
      btn.setAttribute('data-color', col.hex);
      btn.setAttribute('aria-label', `Select ${col.name} color`);
      btn.innerHTML = `
        <span class="mc-palette-swatch" style="background-color: ${col.hex}; ${col.id === 'white' ? 'border: 2px solid #ced6e0;' : ''}"></span>
        <span class="mc-palette-name">${col.name}</span>
      `;
      btn.onclick = () => this.selectColor(col.hex);
      this.dom.paletteContainer.appendChild(btn);
    });
  }

  selectColor(hex) {
    this.selectedColor = hex;
    this.updateSelectedColorUI();

    // Update active class on palette buttons
    if (this.dom.paletteContainer) {
      const btns = this.dom.paletteContainer.querySelectorAll('.mc-palette-btn');
      btns.forEach(b => {
        if (b.getAttribute('data-color') === hex) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
    }
  }

  updateSelectedColorUI() {
    const colObj = this.colors.find(c => c.hex === this.selectedColor) || { name: 'Color', hex: this.selectedColor };
    if (this.dom.selectedColorPreview) {
      this.dom.selectedColorPreview.style.backgroundColor = colObj.hex;
      if (colObj.hex === '#FFFFFF') {
        this.dom.selectedColorPreview.style.border = '2px solid #ced6e0';
      } else {
        this.dom.selectedColorPreview.style.border = '2px solid #2f3542';
      }
    }
    if (this.dom.selectedColorName) {
      this.dom.selectedColorName.textContent = colObj.name;
    }
  }

  renderColoringSvg() {
    if (!this.dom.coloringSvgContainer) return;
    this.dom.coloringSvgContainer.innerHTML = this.buildSvgString(this.currentPicture, 'outline');

    // Attach click and keyboard listeners to outline regions
    const regions = this.dom.coloringSvgContainer.querySelectorAll('.mc-colorable-region');
    regions.forEach(el => {
      const regionId = el.getAttribute('data-region-id');
      el.onclick = () => this.handleRegionClick(regionId);
      el.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleRegionClick(regionId);
        }
      };
    });
  }

  handleRegionClick(regionId) {
    if (this.isSubmitted || this.phase !== 'coloring') return;
    if (!this.selectedColor) return;

    const oldColor = this.userColors[regionId] || '#FFFFFF';
    const newColor = this.selectedColor;

    if (oldColor === newColor) return; // No change

    // Record action for Undo
    this.history.push({ regionId, oldColor, newColor });
    this.userColors[regionId] = newColor;

    // Update SVG element DOM directly for instant response
    this.updateRegionFillInDOM(regionId, newColor);
    this.updateActionButtonsState();

    // Play subtle click sound if available
    if (typeof window !== 'undefined' && window.soundEffects && window.soundEffects.playClick) {
      window.soundEffects.playClick();
    }
  }

  updateRegionFillInDOM(regionId, color) {
    if (!this.dom.coloringSvgContainer) return;
    const el = this.dom.coloringSvgContainer.querySelector(`[data-region-id="${regionId}"]`);
    if (el) {
      el.setAttribute('fill', color);
      const colObj = this.colors.find(c => c.hex === color);
      const colName = colObj ? colObj.name : color;
      const reg = this.currentPicture.regions.find(r => r.id === regionId);
      const regName = reg ? reg.name : regionId;
      el.setAttribute('aria-label', `${regName} - Colored with ${colName}`);
    }
  }

  undoLastColor() {
    if (this.isSubmitted || this.history.length === 0) return;
    const lastAction = this.history.pop();
    if (!lastAction) return;

    const { regionId, oldColor } = lastAction;
    if (oldColor === '#FFFFFF') {
      delete this.userColors[regionId];
    } else {
      this.userColors[regionId] = oldColor;
    }

    this.updateRegionFillInDOM(regionId, oldColor);
    this.updateActionButtonsState();
  }

  confirmResetColoring() {
    if (this.isSubmitted || this.history.length === 0) return;
    const confirmed = typeof window !== 'undefined' && window.confirm
      ? window.confirm('Would you like to clear all your colors and start coloring fresh?')
      : true;

    if (confirmed) {
      this.resetColoring();
    }
  }

  resetColoring() {
    this.userColors = {};
    this.history = [];
    if (this.currentPicture && this.currentPicture.regions) {
      this.currentPicture.regions.forEach(r => {
        this.updateRegionFillInDOM(r.id, '#FFFFFF');
      });
    }
    this.updateActionButtonsState();
  }

  updateActionButtonsState() {
    const hasHistory = this.history.length > 0;
    if (this.dom.btnUndo) {
      this.dom.btnUndo.disabled = !hasHistory;
      this.dom.btnUndo.style.opacity = hasHistory ? '1' : '0.5';
    }
    if (this.dom.btnReset) {
      this.dom.btnReset.disabled = !hasHistory;
      this.dom.btnReset.style.opacity = hasHistory ? '1' : '0.5';
    }
  }

  // ---------------------------------------------------------------------------
  // Phase C: Submission & Scoring
  // ---------------------------------------------------------------------------
  submitColoring() {
    if (this.isSubmitted || this.phase !== 'coloring') return;
    this.isSubmitted = true;
    this.phase = 'results';

    this.score = this.calculateScore();
    this.renderResultsPhase();

    // Play celebration sound if high score
    if (typeof window !== 'undefined' && window.soundEffects) {
      if (this.score >= 7 && window.soundEffects.playCorrect) {
        window.soundEffects.playCorrect();
      } else if (window.soundEffects.playClick) {
        window.soundEffects.playClick();
      }
    }
  }

  // Calculate score out of 10
  calculateScore() {
    if (!this.currentPicture || !this.currentPicture.regions) return 0;
    let earned = 0;
    this.resultsBreakdown = [];

    this.currentPicture.regions.forEach(region => {
      const userHex = this.userColors[region.id] || null;
      const originalHex = region.color;

      const isMatch = userHex !== null && this.normalizeColor(userHex) === this.normalizeColor(originalHex);
      if (isMatch) {
        earned += 1;
      }

      const userColObj = this.colors.find(c => this.normalizeColor(c.hex) === this.normalizeColor(userHex)) || { name: 'Uncolored', hex: '#FFFFFF' };
      const origColObj = this.colors.find(c => this.normalizeColor(c.hex) === this.normalizeColor(originalHex)) || { name: 'Original', hex: originalHex };

      this.resultsBreakdown.push({
        regionId: region.id,
        regionName: region.name,
        userColorHex: userHex || '#FFFFFF',
        userColorName: userHex ? userColObj.name : 'Not colored',
        originalColorHex: originalHex,
        originalColorName: origColObj.name,
        isCorrect: isMatch
      });
    });

    return Math.min(10, Math.max(0, earned));
  }

  normalizeColor(hex) {
    if (!hex || typeof hex !== 'string') return '';
    let h = hex.trim().toUpperCase();
    if (!h.startsWith('#')) h = '#' + h;
    if (h.length === 4) {
      h = '#' + h[1] + h[1] + h[2] + h[2] + h[3] + h[3];
    }
    return h;
  }

  getFeedbackMessage(score) {
    if (score === 10) {
      return {
        title: 'Outstanding Super Memory! 🌟🏆',
        text: 'Amazing memory! You remembered every color perfectly!',
        badgeClass: 'score-perfect'
      };
    }
    if (score >= 8) {
      return {
        title: 'Fantastic Effort! ⭐',
        text: 'Great job! Your color memory and attention are improving brilliantly!',
        badgeClass: 'score-great'
      };
    }
    if (score >= 5) {
      return {
        title: 'Good Try Superstar! 🎨',
        text: 'Good try! Look carefully at the picture next time and try again!',
        badgeClass: 'score-good'
      };
    }
    return {
      title: 'Keep Practising! 💪',
      text: 'Every challenge helps you learn and focus! Give it another try!',
      badgeClass: 'score-practice'
    };
  }

  renderResultsPhase() {
    if (!this.dom.resultsPhase) return;

    if (this.dom.observePhase) this.dom.observePhase.style.display = 'none';
    if (this.dom.coloringPhase) this.dom.coloringPhase.style.display = 'none';
    this.dom.resultsPhase.style.display = 'block';

    const feedback = this.getFeedbackMessage(this.score);

    // Header score elements
    const headingEl = document.getElementById('mcResultsHeading');
    if (headingEl) headingEl.textContent = feedback.title;

    const subtextEl = document.getElementById('mcResultsSubtext');
    if (subtextEl) subtextEl.textContent = feedback.text;

    const scoreNumEl = document.getElementById('mcFinalScoreNum');
    if (scoreNumEl) scoreNumEl.textContent = String(this.score);

    const correctCountEl = document.getElementById('mcStatCorrectCount');
    if (correctCountEl) correctCountEl.textContent = String(this.score);

    const incorrectCountEl = document.getElementById('mcStatIncorrectCount');
    if (incorrectCountEl) incorrectCountEl.textContent = String(10 - this.score);

    const picNameEl = document.getElementById('mcStatPictureName');
    if (picNameEl) picNameEl.textContent = this.currentPicture.title;

    // Side-by-side pictures comparison
    const userSvgContainer = document.getElementById('mcResultsUserSvg');
    if (userSvgContainer) {
      userSvgContainer.innerHTML = this.buildSvgString(this.currentPicture, 'user-completed');
    }

    const origSvgContainer = document.getElementById('mcResultsOriginalSvg');
    if (origSvgContainer) {
      origSvgContainer.innerHTML = this.buildSvgString(this.currentPicture, 'colored');
    }

    // Region-by-region itemized breakdown cards
    const breakdownContainer = document.getElementById('mcResultsBreakdownList');
    if (breakdownContainer) {
      breakdownContainer.innerHTML = '';
      this.resultsBreakdown.forEach((item, idx) => {
        const itemEl = document.createElement('div');
        itemEl.className = `mc-breakdown-card ${item.isCorrect ? 'correct' : 'incorrect'}`;
        itemEl.innerHTML = `
          <div class="mc-breakdown-row">
            <div class="mc-breakdown-region-info">
              <span class="mc-region-num">#${idx + 1}</span>
              <strong class="mc-region-label">${item.regionName}</strong>
            </div>
            <div class="mc-breakdown-status-badge">
              ${item.isCorrect ? '✅ Correct (+1)' : '❌ Incorrect (0)'}
            </div>
          </div>
          <div class="mc-breakdown-swatch-row">
            <div class="mc-color-compare-box">
              <span class="mc-compare-lbl">Your Color:</span>
              <span class="mc-swatch" style="background-color: ${item.userColorHex}; ${item.userColorHex === '#FFFFFF' ? 'border: 1px dashed #747d8c;' : ''}"></span>
              <span class="mc-swatch-name">${item.userColorName}</span>
            </div>
            <div class="mc-color-compare-box">
              <span class="mc-compare-lbl">Original Color:</span>
              <span class="mc-swatch" style="background-color: ${item.originalColorHex};"></span>
              <span class="mc-swatch-name">${item.originalColorName}</span>
            </div>
          </div>
        `;
        breakdownContainer.appendChild(itemEl);
      });
    }

    // Scroll to results top
    if (this.dom.container && typeof window !== 'undefined') {
      window.scrollTo({ top: this.dom.container.offsetTop - 20, behavior: 'smooth' });
    }
  }

  // ---------------------------------------------------------------------------
  // SVG Generation Utility
  // ---------------------------------------------------------------------------
  buildSvgString(picture, mode) {
    if (!picture) return '';
    const viewBox = picture.viewBox || '0 0 600 420';

    const pathsHtml = picture.regions.map(region => {
      let fill = '#FFFFFF';
      let cursor = 'default';
      let tabIndexAttr = '';
      let roleAttr = '';
      let ariaLabel = region.name;

      if (mode === 'colored') {
        fill = region.color;
      } else if (mode === 'outline') {
        fill = this.userColors[region.id] || '#FFFFFF';
        cursor = 'pointer';
        tabIndexAttr = 'tabindex="0"';
        roleAttr = 'role="button"';
        const colObj = this.colors.find(c => c.hex === fill);
        ariaLabel = `${region.name} - Current color: ${colObj ? colObj.name : 'White'}`;
      } else if (mode === 'user-completed') {
        fill = this.userColors[region.id] || '#FFFFFF';
      }

      return `
        <path
          class="${mode === 'outline' ? 'mc-colorable-region' : 'mc-static-region'}"
          data-region-id="${region.id}"
          d="${region.d}"
          fill="${fill}"
          stroke="#2F3542"
          stroke-width="3"
          stroke-linejoin="round"
          stroke-linecap="round"
          style="cursor: ${cursor}; transition: fill 0.2s ease, stroke-width 0.2s ease;"
          ${tabIndexAttr}
          ${roleAttr}
          aria-label="${ariaLabel}"
        />
      `;
    }).join('\n');

    return `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${viewBox}"
        width="100%"
        height="100%"
        class="mc-svg-canvas"
        role="img"
        aria-label="${picture.title} - ${mode} view"
      >
        <defs>
          <filter id="mcRegionShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.12"/>
          </filter>
        </defs>
        ${pathsHtml}
      </svg>
    `;
  }

  // Complete cleanup when navigating away or stopping
  cleanup() {
    this.stopCountdownTimer();
    this.phase = 'idle';
    this.isSubmitted = false;
  }
}

// Export for Node test environment and browser global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MemoryColorGame };
}

if (typeof window !== 'undefined') {
  window.MemoryColorGame = MemoryColorGame;
}

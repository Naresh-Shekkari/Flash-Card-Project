// =============================================================================
// js/utils.js - Shuffling, Web Audio Synthesizer & Web Speech API Helper
// =============================================================================

/**
 * Fisher-Yates (Knuth) Shuffle Algorithm
 * Returns a new shuffled array without mutating the original
 */
function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Pure Web Audio API Sound Effects (Zero External Files Needed)
 */
class SoundEffects {
  constructor() {
    this.audioCtx = null;
    this.enabled = true;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playCorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.3); // C6

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.5);
    } catch (e) {
      // Audio fallback silent
    }
  }

  playIncorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.25);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      // Audio fallback silent
    }
  }

  playCelebration() {
    if (!this.enabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const start = this.audioCtx.currentTime + idx * 0.12;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.25, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.4);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(start);
        osc.stop(start + 0.4);
      });
    } catch (e) {
      // Audio fallback silent
    }
  }
}

/**
 * Browser-native Web Speech API Text-to-Speech Helper
 */
class SpeechHelper {
  constructor() {
    this.synth = (typeof window !== 'undefined' && 'speechSynthesis' in window) ? window.speechSynthesis : null;
    this.currentUtterance = null;
    this.isSpeaking = false;
    this.onStateChange = null; // callback(isSpeaking, statusText)
  }

  isSupported() {
    return Boolean(this.synth);
  }

  getBestVoice() {
    if (!this.synth) return null;
    const voices = this.synth.getVoices() || [];
    // 1. Look for Indian English (en-IN)
    const inVoice = voices.find(v => v.lang === 'en-IN' || v.lang === 'en_IN');
    if (inVoice) return inVoice;
    // 2. Look for any English voice
    const enVoice = voices.find(v => v.lang && v.lang.startsWith('en'));
    if (enVoice) return enVoice;
    // 3. Fallback to default
    return voices[0] || null;
  }

  /**
   * Cleans text to make mathematical expressions and symbols sound natural
   */
  formatSpokenText(text) {
    if (!text) return '';
    let spoken = text;
    // Currency
    spoken = spoken.replace(/₹\s*(\d+(\.\d+)?)/g, '$1 rupees');
    spoken = spoken.replace(/₹/g, ' rupees ');
    // Math operations
    spoken = spoken.replace(/(\d+)\s*×\s*(\d+)/g, '$1 times $2');
    spoken = spoken.replace(/×/g, ' times ');
    spoken = spoken.replace(/(\d+)\s*÷\s*(\d+)/g, '$1 divided by $2');
    spoken = spoken.replace(/÷/g, ' divided by ');
    spoken = spoken.replace(/\b(\d+)\s*\/\s*(\d+)\b/g, '$1 by $2'); // fractions like 3/4 -> 3 by 4
    spoken = spoken.replace(/(\d+)\s*\+\s*(\d+)/g, '$1 plus $2');
    spoken = spoken.replace(/(\d+)\s*-\s*(\d+)/g, '$1 minus $2');
    spoken = spoken.replace(/(\d+)\s*=\s*(\d+)/g, '$1 equals $2');
    spoken = spoken.replace(/</g, ' is less than ');
    spoken = spoken.replace(/>/g, ' is greater than ');
    // Units
    spoken = spoken.replace(/\bsq\s*cm\b/gi, 'square centimetres');
    spoken = spoken.replace(/\bsq\s*m\b/gi, 'square metres');
    spoken = spoken.replace(/(\d+)\s*km\b/gi, '$1 kilometres');
    spoken = spoken.replace(/(\d+)\s*cm\b/gi, '$1 centimetres');
    spoken = spoken.replace(/(\d+)\s*mm\b/gi, '$1 millimetres');
    spoken = spoken.replace(/(\d+)\s*m\b/gi, '$1 metres');
    spoken = spoken.replace(/(\d+)\s*kg\b/gi, '$1 kilograms');
    spoken = spoken.replace(/(\d+)\s*g\b/gi, '$1 grams');
    spoken = spoken.replace(/(\d+)\s*mL\b/gi, '$1 millilitres');
    spoken = spoken.replace(/(\d+)\s*L\b/gi, '$1 litres');
    // Multiple spaces
    spoken = spoken.replace(/\s+/g, ' ').trim();
    return spoken;
  }

  stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    this.isSpeaking = false;
    this.currentUtterance = null;
    if (this.onStateChange) this.onStateChange(false, '');
  }

  speak(text, statusLabel = 'Speaking...') {
    if (!this.isSupported()) {
      return { success: false, reason: 'unsupported' };
    }
    // Cancel any ongoing speech immediately before starting
    this.stop();

    const naturalText = this.formatSpokenText(text);
    if (!naturalText) return { success: false, reason: 'empty' };

    try {
      const utter = new SpeechSynthesisUtterance(naturalText);
      const voice = this.getBestVoice();
      if (voice) utter.voice = voice;
      utter.rate = 0.88; // comfortable speaking pace for children
      utter.pitch = 1.0;
      utter.lang = voice ? voice.lang : 'en-IN';

      utter.onstart = () => {
        this.isSpeaking = true;
        if (this.onStateChange) this.onStateChange(true, statusLabel);
      };

      utter.onend = () => {
        this.isSpeaking = false;
        this.currentUtterance = null;
        if (this.onStateChange) this.onStateChange(false, '');
      };

      utter.onerror = () => {
        this.isSpeaking = false;
        this.currentUtterance = null;
        if (this.onStateChange) this.onStateChange(false, '');
      };

      this.currentUtterance = utter;
      this.synth.speak(utter);
      return { success: true };
    } catch (err) {
      this.stop();
      return { success: false, reason: 'error', error: err };
    }
  }

  speakQuestion(questionText) {
    return this.speak(questionText, 'Reading Question...');
  }

  speakOptions(optionsArray) {
    if (!Array.isArray(optionsArray)) return { success: false };
    const prefixes = ['Option A', 'Option B', 'Option C', 'Option D'];
    const parts = optionsArray.map((opt, idx) => `${prefixes[idx] || 'Option'}: ${opt}.`);
    const fullText = parts.join(' ... ');
    return this.speak(fullText, 'Reading Options...');
  }

  speakFeedback(isCorrect, correctAnswer, explanation) {
    let text = isCorrect
      ? 'Correct! Great job! You earned 1 mark.'
      : `Not quite! The correct answer is: ${correctAnswer}.`;
    if (explanation) {
      text += ` Explanation: ${explanation}`;
    }
    return this.speak(text, 'Reading Feedback...');
  }
}

if (typeof window !== 'undefined') {
  window.soundEffects = new SoundEffects();
  window.speechHelper = new SpeechHelper();
  window.shuffleArray = shuffleArray;
  window.SpeechHelper = SpeechHelper;
}

if (typeof module !== 'undefined') {
  module.exports = { shuffleArray, SpeechHelper };
}

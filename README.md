# My Smart Learning Cards 🎒✨
**Grade 2 CBSE & Grade 5 Telangana SSC Interactive Flashcard Quiz App**

A colorful, accessible, child-friendly web application designed for young learners in **Grade 2 (CBSE)** and **Grade 5 (Telangana SSC Board)** to practice core subjects through interactive 10-question flashcard quizzes with browser-native text-to-speech audio support.

Live GitHub Pages URL: **https://naresh-shekkari.github.io/Flash-Card-Project/**

---

## 🌟 What's New in this Release

1. **Grade Selection Screen**:
   - **Grade 2 — CBSE Board**: Maths & ICT (Computers).
   - **Grade 5 — Telangana SSC Board**: Maths & Science (EVS - aligned with Telangana SCERT).
2. **Grade 5 Telangana SSC Question Banks**:
   - **Maths**: 100 questions covering Lakhs place value, multi-digit operations, factors & multiples, fractions, decimals, geometry & angles, perimeter & area, and measurement conversions.
   - **Science (EVS)**: 100 questions covering animal senses, Nallamala forests & Chenchus, seed dispersal, digestion & balanced diet, water harvesting & Mission Bhagiratha, historic Telangana forts (Golconda, Ramappa, Warangal), and environmental conservation.
3. **🎨 Memory Color Challenge — Observe, Remember, and Color!**:
   - Special educational activity primarily designed for Grade 2 learners.
   - **15-Second Observation Phase**: A fully colored educational picture is displayed with a live countdown timer.
   - **Coloring Phase**: The matching outline picture appears, and the child recreates the colors from memory using a 10-color palette.
   - **Scoring**: Exactly 10 marks per picture (1 mark per correct region). Max score: 10/10.
   - **Feedback & Comparison**: Side-by-side visual comparison of the child's coloring vs. the original picture, with positive encouraging feedback.
4. **🔊 Browser-Native Read-Aloud Feature**:
   - **Read Question**: Speaks the question statement naturally with mathematical expressions formatted in plain English (e.g., "times", "divided by", "rupees").
   - **Read Options**: Clearly announces options one by one ("Option A: ... Option B: ...").
   - **Read Feedback**: Audio explanation and answer reveal after submitting an answer.
   - **Stop Reading**: Immediate speech cancellation, preventing voice overlaps across cards or screen navigation.
   - **Zero External Dependencies**: Powered entirely by the browser's native Web Speech API (`window.speechSynthesis`).

---

## 📁 Project Structure

```text
Flash-Card-Project/
├── index.html                           # Main application UI (Grades, Subjects, Flashcards & Activity)
├── assets/
│   └── images/
│       ├── home-hero-illustration.svg   # Cheerful vector illustration for main grade selection
│       ├── grade2-learning-art.svg      # Grade 2 CBSE vector learning illustration banner
│       └── grade5-learning-art.svg      # Grade 5 Telangana SSC vector learning illustration banner
├── css/
│   ├── style.css                        # Cheerful, responsive, accessible styles & animations
│   └── memory-color-game.css            # Scoped styles for Memory Color Challenge activity
├── js/
│   ├── app.js                           # View routing, navigation & speech button handlers
│   ├── quiz.js                          # QuizEngine: Grade/subject loading, shuffle & scoring
│   ├── memory-color-game.js             # Memory Color Challenge: Timer, coloring & scoring engine
│   └── utils.js                         # Fisher-Yates shuffle, Web Audio & SpeechHelper (TTS)
├── data/
│   ├── maths-questions.js               # Grade 2 CBSE Maths (100 questions)
│   ├── ict-questions.js                 # Grade 2 CBSE ICT (100 questions)
│   ├── grade5-ssc-maths-questions.js    # Grade 5 Telangana SSC Maths (100 questions)
│   ├── grade5-ssc-science-questions.js  # Grade 5 Telangana SSC Science (EVS) (100 questions)
│   └── memory-color-pictures.js         # 10 Pictures with 10 colorable regions each
├── validate.js                          # 80-point automated verification test suite
└── README.md                            # Documentation and deployment instructions
```

---

## 📊 Question Bank & Picture Summary

| Category | Level | Subject / Activity | Data File | Units |
| :--- | :--- | :--- | :--- | :--- |
| **Quiz** | Grade 2 CBSE | Maths | `data/maths-questions.js` | **100 Questions** |
| **Quiz** | Grade 2 CBSE | ICT | `data/ict-questions.js` | **100 Questions** |
| **Quiz** | Grade 5 Telangana SSC | Maths | `data/grade5-ssc-maths-questions.js` | **100 Questions** |
| **Quiz** | Grade 5 Telangana SSC | Science (EVS) | `data/grade5-ssc-science-questions.js` | **100 Questions** |
| **Activity** | Grade 2 Activity | Memory Color Challenge | `data/memory-color-pictures.js` | **10 Pictures (100 Regions)** |
| **Total** | | | | **400 Questions + 10 Challenge Pictures** |

---

## 🚀 How to Run Locally on Windows 11

### 1. Launch in Browser
Double-click **`index.html`** in Windows File Explorer, or run in PowerShell:
```powershell
Start-Process index.html
```

### 2. Run the Automated 86-Point Test Suite
In PowerShell / terminal:
```powershell
node validate.js
```
Expected output:
```text
======================================================
🎯 TEST RESULTS: 86 PASSED, 0 FAILED
======================================================
```

---

## 🌐 Deploying to GitHub Pages

1. Review and commit your changes on the feature branch:
   ```powershell
   git status
   git add .
   git commit -m "feat: Add Grade 5 Telangana SSC Maths, Science (EVS) and Read-Aloud speech support"
   ```
2. Merge into `main` and push to GitHub:
   ```powershell
   git checkout main
   git merge feature/grade5-ssc-read-aloud
   git push origin main
   ```
3. Your live application will update automatically on GitHub Pages at:
   **https://naresh-shekkari.github.io/Flash-Card-Project/**

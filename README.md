# My Smart Learning Cards 🎒✨
**Grade 2 CBSE Interactive Flashcard Quiz App**

A cheerful, accessible, child-friendly web application designed for an 8-year-old Grade 2 CBSE student to practice **Maths** and **ICT (Computers)** through interactive 10-question flashcard quizzes.

---

## 🌟 Features

- **Child-Friendly UI/UX**: Pastel color theme, large legible fonts, large touch targets, bouncy celebrations, and high-contrast readable buttons.
- **200 Permanent Questions**: Exactly **100 Maths questions** and **100 ICT questions** strictly aligned with the Grade 2 CBSE syllabus.
- **Smart Quiz Engine**:
  - Selects **10 random, non-duplicate questions** per quiz using the Fisher-Yates shuffle algorithm.
  - Shuffles the 4 answer choices dynamically for every card.
  - Prevents repeated clicks or score tampering.
  - Immediate audio-visual feedback (Green for correct, Red with correct answer reveal for mistakes).
- **Web Audio Sound Effects**: Pure JavaScript synthesizer provides delightful chimes and fanfares with zero external audio files.
- **Detailed Results & Review**: Final score out of 10, encouraging badges, and an accordion review of all 10 questions and explanations.
- **Zero Dependencies**: Pure HTML5, CSS3, and Vanilla JavaScript. Works offline and deploys statically to GitHub Pages.

---

## 📁 Project Structure

```text
Flash-Card-Project/
├── index.html                  # Main application UI
├── css/
│   └── style.css               # Cheerful, responsive, accessible styles
├── js/
│   ├── app.js                  # UI controllers and event listeners
│   ├── quiz.js                 # Quiz engine, shuffle & score state
│   └── utils.js                # Fisher-Yates shuffle & Web Audio sound synth
├── data/
│   ├── maths-questions.js      # 100 Grade 2 CBSE Maths questions
│   └── ict-questions.js        # 100 Grade 2 CBSE ICT questions
├── validate.js                 # 18-point automated validation test suite
└── README.md                   # Documentation and deployment guide
```

---

## 🚀 How to Run Locally on Windows 11

### Method 1: Double-click
1. Open this folder in Windows File Explorer:
   `C:\Users\Naresh\Documents\GitHub\Flash-Card-Project`
2. Double-click **`index.html`** to launch the quiz app in your web browser.

### Method 2: From PowerShell / Terminal
```powershell
Start-Process index.html
```

### Running the Automated Tests
In your terminal, run:
```powershell
node validate.js
```
All 18 validation criteria will execute and report passing tests.

---

## 🌐 GitHub Pages Deployment Guide

Follow these beginner-friendly steps to deploy the app for free:

### 1. Commit and Push Files to GitHub
Open your terminal in this repository and run:
```powershell
git add .
git commit -m "Build Grade 2 CBSE Smart Flashcard App"
git push origin main
```

### 2. Configure GitHub Pages
1. Go to your repository on **[github.com](https://github.com/)**.
2. Click on the **Settings** tab (gear icon at the top).
3. In the left-hand navigation menu, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main`.
   - **Folder**: Select `/ (root)`.
5. Click **Save**.

### 3. Access Your Live Site
- Within 1 to 2 minutes, GitHub Pages will deploy your site.
- Refresh the **Pages** settings tab to view your live URL:
  ```text
  https://<your-github-username>.github.io/Flash-Card-Project/
  ```

### 4. Troubleshooting Common Deployment Issues
- **Images or scripts not loading**: Ensure all paths in `index.html` are relative (e.g., `css/style.css`, `data/maths-questions.js`), which is already configured.
- **404 Not Found**: Make sure the root folder was selected in the GitHub Pages settings and wait 60 seconds for GitHub Actions to complete the build.

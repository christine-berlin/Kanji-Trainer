# Kanji-Trainer
# 🇯🇵 KanjiSensei

KanjiSensei is a simple, interactive web app for learning Japanese Kanji.

The app is designed as a lightweight study tool for learners preparing for **JLPT N5** and building a foundation of common Japanese Kanji.

## ✨ Features

* 🎴 **Kanji flashcards**

  * Display a Kanji one at a time.
  * Click the card to reveal additional information.

* 📖 **Kanji information**

  * English meaning
  * On'yomi readings
  * Kun'yomi readings
  * Example words
  * Example readings and meanings

* 🔀 **Random learning**

  * Kanji are shuffled for each round.
  * Progress is displayed while studying.

* 📚 **Show All Kanji**

  * View the complete Kanji collection in a grid.
  * Select any Kanji to view it individually.

* ✕ **Kanji detail view**

  * Selecting a Kanji from the overview opens a focused view.
  * The Next Kanji button and progress counter are hidden.
  * Use the Close button to return to the Kanji overview.

* 📱 **Responsive design**

  * Designed to work on desktop and mobile screens.

## 🛠️ Technologies

KanjiSensei is built with basic web technologies:

* HTML5
* CSS3
* JavaScript

No frameworks or external libraries are required.

## 📁 Project Structure

```text
KanjiSensei/
│
├── index.html      # Main application page
├── style.css       # Application styling
├── app.js          # Application logic
├── kanji.js        # Kanji dataset
└── README.md       # Project documentation
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/KanjiSensei.git
```

### 2. Open the project

Open the project folder in your preferred code editor.

### 3. Run the app

You can simply open:

```text
index.html
```

in your browser.

Alternatively, use a local development server such as VS Code's Live Server extension.

## 🎮 How to Use

### Study Mode

1. Open KanjiSensei.
2. A Kanji appears on the screen.
3. Click the card to reveal:

   * Meaning
   * On'yomi
   * Kun'yomi
   * Example words
4. Click **Next Kanji** to continue.

### Show All Kanji

Click **Show All Kanji** to open the Kanji overview.

From there, you can:

1. Browse the Kanji grid.
2. Click any Kanji.
3. View that Kanji individually.
4. Click **✕ Close** to return to the overview.

## 🎯 Goal

The goal of KanjiSensei is to provide a simple and distraction-free way to practice Japanese Kanji.

The project can be expanded over time with additional JLPT levels, more Kanji, quizzes, writing practice, and other learning features.

## 🔮 Future Ideas

Possible future improvements include:

* [ ] JLPT N4 Kanji
* [ ] JLPT N3 Kanji
* [ ] JLPT N2 Kanji
* [ ] JLPT N1 Kanji
* [ ] Search Kanji
* [ ] Kanji stroke order
* [ ] Writing practice
* [ ] Multiple-choice quizzes
* [ ] Spaced repetition
* [ ] Study statistics
* [ ] Difficulty levels
* [ ] Dark/light mode
* [ ] Japanese example sentences

## 📚 Learning Focus

The initial focus of KanjiSensei is **JLPT N5-level Kanji**.

The Kanji dataset is stored separately in `kanji.js`, making it easy to add or modify Kanji without changing the main application logic.

## 📄 License

This project is currently intended as a personal learning project.

If you plan to publish or distribute it, consider adding an appropriate open-source license such as the MIT License.

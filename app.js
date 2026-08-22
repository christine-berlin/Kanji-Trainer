
let remaining = [];
let current = null;
let progress = 0;
let revealed = false;

// Elements
const kanjiEl = document.getElementById("kanji");
const meaningEl = document.getElementById("meaning");
const onyomiEl = document.getElementById("onyomi");
const kunyomiEl = document.getElementById("kunyomi");
const examplesEl = document.getElementById("examples");
const progressEl = document.getElementById("progress");

const nextButton = document.getElementById("nextButton");
const showAllButton = document.getElementById("showAllButton");

const allKanji = document.getElementById("allKanji");
const kanjiGrid = document.getElementById("kanjiGrid");
const backButton = document.getElementById("backButton");

const card = document.getElementById("card");
const kanjiDetailBack = document.getElementById("kanjiDetailBack");
const tapHint = document.getElementById("tapHint");

let kanjiHistory = [];
let historyIndex = -1;

// Shuffle
function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
}


// Start new round
function newRound() {

    remaining = [...kanji];

    shuffle(remaining);

    progress = 0;
}


// Show next Kanji
function showNextKanji() {

    // If we went backwards and then go forward again,
    // show the next Kanji from history
    if (historyIndex < kanjiHistory.length - 1) {

        historyIndex++;

        current = kanjiHistory[historyIndex];

    } else {

        if (remaining.length === 0) {
            newRound();
        }

        current = remaining.pop();

        // Add new Kanji to history
        kanjiHistory.push(current);

        historyIndex = kanjiHistory.length - 1;
    }

    progress++;
    revealed = false;

    kanjiEl.textContent = current.kanji;

    meaningEl.textContent = "";
    onyomiEl.textContent = "";
    kunyomiEl.textContent = "";
    examplesEl.innerHTML = "";

    tapHint.style.display = "block";

    progressEl.textContent =
        progress + " / " + kanji.length;
}


// Reveal information
function reveal() {

    if (!current) return;

    // If details are currently visible → hide them
    if (revealed) {

        revealed = false;

        meaningEl.textContent = "";
        onyomiEl.textContent = "";
        kunyomiEl.textContent = "";
        examplesEl.innerHTML = "";

        tapHint.style.display = "block";

        return;
    }

    // Otherwise → show details
    revealed = true;

    meaningEl.innerHTML =
        "<strong>Meaning:</strong> " + current.meaning;

    onyomiEl.innerHTML =
        "<strong>On:</strong> " + current.onyomi;

    kunyomiEl.innerHTML =
        "<strong>Kun:</strong> " + current.kunyomi;

    let html = "<strong>Examples:</strong><br><br>";

    current.examples.forEach(example => {

        html += `
            ${example.word} (${example.reading})<br>
            ${example.meaning}<br><br>
        `;

    });

    examplesEl.innerHTML = html;

    tapHint.style.display = "none";
}


// Render all Kanji
function renderKanjiGrid() {

    kanjiGrid.innerHTML = "";

    kanji.forEach(item => {

        const cell = document.createElement("div");

        cell.className = "kanjiCell";

        cell.textContent = item.kanji;

        cell.addEventListener("click", () => {

            openKanjiDetail(item);

        });

        kanjiGrid.appendChild(cell);

    });
}


// Open single Kanji from Show All
function openKanjiDetail(item) {

    current = item;

    revealed = true;

    kanjiEl.textContent = current.kanji;
    

meaningEl.innerHTML =
    "<strong>Meaning:</strong> " + current.meaning;

onyomiEl.innerHTML =
    "<strong>On:</strong> " + current.onyomi;

kunyomiEl.innerHTML =
    "<strong>Kun:</strong> " + current.kunyomi;

let html = "<strong>Examples:</strong><br><br>";

current.examples.forEach(example => {
    html += `
        ${example.word} (${example.reading})<br>
        ${example.meaning}<br><br>
    `;
});

examplesEl.innerHTML = html;
    tapHint.style.display= "none";
    // Hide Show All
    allKanji.style.display = "none";

    // Show Kanji card
    card.style.display = "block";

    // Hide Next and Progress
    nextButton.style.display = "none";
    progressEl.style.display = "none";

    // Hide Show All button
    showAllButton.style.display = "none";

    // Show X / Close button
    kanjiDetailBack.style.display = "block";
}


// Show All Kanji
showAllButton.addEventListener("click", () => {

    renderKanjiGrid();

    card.style.display = "none";

    nextButton.style.display = "none";

    progressEl.style.display = "none";

    showAllButton.style.display = "none";

    kanjiDetailBack.style.display = "none";

    allKanji.style.display = "block";
});


// X / Close button
kanjiDetailBack.addEventListener("click", () => {

    // Hide detail
    card.style.display = "none";

    kanjiDetailBack.style.display = "none";

    // Return to Show All
    allKanji.style.display = "block";
});


// Back button
backButton.addEventListener("click", () => {

    allKanji.style.display = "none";

    card.style.display = "block";

    nextButton.style.display = "block";

    progressEl.style.display = "block";

    showAllButton.style.display = "block";

    kanjiDetailBack.style.display = "none";
});


// Next Kanji
nextButton.addEventListener("click", showNextKanji);


// Reveal when clicking the main card
document.body.addEventListener("click", (e) => {

    if (
        e.target === nextButton ||
        e.target === showAllButton ||
        e.target === backButton ||
        e.target === kanjiDetailBack ||
        e.target.classList.contains("kanjiCell")
    ) {
        return;
    }

    reveal();
});


// Start app
newRound();

showNextKanji();
// Swipe to next Kanji
let touchStartX = 0;
let touchEndX = 0;

card.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

card.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;

    const swipeDistance = touchEndX - touchStartX;

    // Swipe left → next Kanji
    if (swipeDistance < -50) {
        showNextKanji();
    }

    // Swipe right → also next Kanji
    if (swipeDistance > 50) {
        showNextKanji();
    }
});

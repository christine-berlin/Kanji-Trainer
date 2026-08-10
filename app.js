let remaining = [];
let current = null;
let progress = 0;
let revealed = false;
const kanjiDetailBack = document.getElementById("kanjiDetailBack");
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
const closeKanjiButton = document.getElementById("closeKanjiButton");


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function newRound() {
    remaining = [...kanji];
    shuffle(remaining);
    progress = 0;
}


function showNextKanji() {

    if (remaining.length === 0) {
        newRound();
    }

    current = remaining.pop();
    progress++;
    revealed = false;

    kanjiEl.textContent = current.kanji;

    meaningEl.textContent = "";
    onyomiEl.textContent = "";
    kunyomiEl.textContent = "";
    examplesEl.innerHTML = "";

    progressEl.textContent =
        progress + " / " + kanji.length;
}


function reveal() {

    if (revealed || !current) return;

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
}


/* --------------------------------
   KANJI LIST
-------------------------------- */

function renderKanjiGrid() {

    kanjiGrid.innerHTML = "";

    kanji.forEach(item => {

        const cell = document.createElement("div");

        cell.className = "kanjiCell";

        cell.textContent = item.kanji;


        cell.addEventListener("click", () => {

            current = item;
            revealed = false;

            kanjiEl.textContent = current.kanji;

            meaningEl.textContent = "";
            onyomiEl.textContent = "";
            kunyomiEl.textContent = "";
            examplesEl.innerHTML = "";

            allKanji.style.display = "none";

            card.style.display = "block";
            nextButton.style.display = "block";
            progressEl.style.display = "block";
            showAllButton.style.display = "block";

        });


        kanjiGrid.appendChild(cell);

    });
}

function openKanjiDetail(item) {

    current = item;
    revealed = true;

    kanjiEl.textContent = current.kanji;

    meaningEl.innerHTML = "";
    onyomiEl.innerHTML = "";
    kunyomiEl.innerHTML = "";
    examplesEl.innerHTML = "";

    // Hide the Show All screen
    allKanji.style.display = "none";

    // Show only the Kanji card
    card.style.display = "block";

    // Hide Next and progress
    nextButton.style.display = "none";
    progressEl.style.display = "none";
    showAllButton.style.display = "none";

    // Show X button
    kanjiDetailBack.style.display = "block";
}

/* --------------------------------
   SHOW ALL KANJI
-------------------------------- */

showAllButton.addEventListener("click", () => {

    renderKanjiGrid();

    card.style.display = "none";
    nextButton.style.display = "none";
    progressEl.style.display = "none";
    showAllButton.style.display = "none";

    allKanji.style.display = "block";

});


/* --------------------------------
   BACK BUTTON
-------------------------------- */

backButton.addEventListener("click", () => {

    allKanji.style.display = "none";

    card.style.display = "block";
    nextButton.style.display = "block";
    progressEl.style.display = "block";
    showAllButton.style.display = "block";

});


/* --------------------------------
   REVEAL ON SCREEN TAP
-------------------------------- */

document.body.addEventListener("click", (e) => {

    if (
        e.target === nextButton ||
        e.target === showAllButton ||
        e.target === backButton ||
        e.target.classList.contains("kanjiCell")
    ) {
        return;
    }

    reveal();

});


closeKanjiButton.addEventListener("click", () => {

    // Hide Kanji detail
    card.style.display = "none";
    kanjiDetailBack.style.display = "none";

    // Go back to Show All
    allKanji.style.display = "block";

    showAllButton.style.display = "none";
    nextButton.style.display = "none";
    progressEl.style.display = "none";
});

/* --------------------------------
   NEXT KANJI
-------------------------------- */

nextButton.addEventListener("click", showNextKanji);


/* --------------------------------
   START APP
-------------------------------- */

newRound();
showNextKanji();


let remaining = [];
let current = null;
let progress = 0;
let revealed = false;


// =========================
// ELEMENTS
// =========================

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
const kanjiDetailBack =
    document.getElementById("kanjiDetailBack");

const tapHint =
    document.getElementById("tapHint");


// =========================
// KANJI HISTORY
// =========================

let kanjiHistory = [];
let historyIndex = -1;


// =========================
// SHUFFLE
// =========================

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
            [array[j], array[i]];
    }
}


// =========================
// NEW ROUND
// =========================

function newRound() {

    remaining = [...kanji];

    shuffle(remaining);

    progress = 0;
}


// =========================
// UPDATE SWIPE HINTS
// =========================

function updateSwipeHints() {

    const leftHint =
        document.querySelector(".swipeLeft");

    const rightHint =
        document.querySelector(".swipeRight");


    if (!leftHint || !rightHint) {
        return;
    }


    // =========================
    // PREVIOUS
    // =========================

    // First Kanji:
    // Hide Previous

    if (progress <= 1) {

        leftHint.style.display = "none";

    } else {

        leftHint.style.display = "flex";
    }


    // =========================
    // NEXT
    // =========================

    // Last Kanji:
    // Hide Next

    if (progress >= kanji.length) {

        rightHint.style.display = "none";

    } else {

        rightHint.style.display = "flex";
    }


    // =========================
    // FIRST KANJI
    // =========================

    // When only Next is visible,
    // make sure it is on the RIGHT.

    if (progress <= 1) {

        rightHint.style.position = "absolute";
        rightHint.style.right = "20px";
        rightHint.style.left = "auto";
    }
}


// =========================
// SHOW PREVIOUS KANJI
// =========================

function showPreviousKanji() {

    if (historyIndex <= 0) {
        return;
    }


    historyIndex--;


    current =
        kanjiHistory[historyIndex];


    revealed = false;


    kanjiEl.textContent =
        current.kanji;


    meaningEl.textContent = "";
    onyomiEl.textContent = "";
    kunyomiEl.textContent = "";
    examplesEl.innerHTML = "";


    tapHint.style.display =
        "block";


    progress =
        historyIndex + 1;


    progressEl.textContent =
        progress + " / " + kanji.length;


    updateSwipeHints();
}


// =========================
// SHOW NEXT KANJI
// =========================

function showNextKanji() {

    // Do not go beyond the last Kanji

    if (progress >= kanji.length) {
        return;
    }


    // If we went backwards,
    // use existing history

    if (
        historyIndex <
        kanjiHistory.length - 1
    ) {

        historyIndex++;

        current =
            kanjiHistory[historyIndex];

    }


    // Otherwise get a new Kanji

    else {

        if (remaining.length === 0) {
            return;
        }


        current =
            remaining.pop();


        kanjiHistory.push(current);


        historyIndex =
            kanjiHistory.length - 1;
    }


    progress =
        historyIndex + 1;


    revealed = false;


    kanjiEl.textContent =
        current.kanji;


    meaningEl.textContent = "";
    onyomiEl.textContent = "";
    kunyomiEl.textContent = "";
    examplesEl.innerHTML = "";


    tapHint.style.display =
        "block";


    progressEl.textContent =
        progress + " / " + kanji.length;


    updateSwipeHints();
}


// =========================
// REVEAL / HIDE DETAILS
// =========================

function reveal() {

    if (!current) {
        return;
    }


    // If details are visible,
    // hide them

    if (revealed) {

        revealed = false;


        meaningEl.textContent = "";
        onyomiEl.textContent = "";
        kunyomiEl.textContent = "";
        examplesEl.innerHTML = "";


        tapHint.style.display =
            "block";


        return;
    }


    // Show details

    revealed = true;


    meaningEl.innerHTML =
        "<strong>Meaning:</strong> " +
        current.meaning;


    onyomiEl.innerHTML =
        "<strong>On:</strong> " +
        current.onyomi;


    kunyomiEl.innerHTML =
        "<strong>Kun:</strong> " +
        current.kunyomi;


    let html =
        "<strong>Examples:</strong><br><br>";


    current.examples.forEach(example => {

        html += `
            ${example.word} (${example.reading})<br>
            ${example.meaning}<br><br>
        `;

    });


    examplesEl.innerHTML =
        html;


    tapHint.style.display =
        "none";
}


// =========================
// RENDER ALL KANJI
// =========================

function renderKanjiGrid() {

    kanjiGrid.innerHTML = "";


    kanji.forEach(item => {

        const cell =
            document.createElement("div");


        cell.className =
            "kanjiCell";


        cell.textContent =
            item.kanji;


        cell.addEventListener(
            "click",
            () => {

                openKanjiDetail(item);

            }
        );


        kanjiGrid.appendChild(cell);

    });
}


// =========================
// OPEN KANJI FROM SHOW ALL
// =========================

function openKanjiDetail(item) {

    current = item;

    revealed = true;


    kanjiEl.textContent =
        current.kanji;


    meaningEl.innerHTML =
        "<strong>Meaning:</strong> " +
        current.meaning;


    onyomiEl.innerHTML =
        "<strong>On:</strong> " +
        current.onyomi;


    kunyomiEl.innerHTML =
        "<strong>Kun:</strong> " +
        current.kunyomi;


    let html =
        "<strong>Examples:</strong><br><br>";


    current.examples.forEach(example => {

        html += `
            ${example.word} (${example.reading})<br>
            ${example.meaning}<br><br>
        `;

    });


    examplesEl.innerHTML =
        html;


    tapHint.style.display =
        "none";


    // Hide Show All

    allKanji.style.display =
        "none";


    // Show card

    card.style.display =
        "block";


    // Hide Next and Progress

    nextButton.style.display =
        "none";

    progressEl.style.display =
        "none";


    // Hide Show All button

    showAllButton.style.display =
        "none";


    // Show X button

    kanjiDetailBack.style.display =
        "block";
}


// =========================
// SHOW ALL BUTTON
// =========================

showAllButton.addEventListener(
    "click",
    () => {

        renderKanjiGrid();


        card.style.display =
            "none";


        nextButton.style.display =
            "none";


        progressEl.style.display =
            "none";


        showAllButton.style.display =
            "none";


        kanjiDetailBack.style.display =
            "none";


        allKanji.style.display =
            "block";

    }
);


// =========================
// X / CLOSE BUTTON
// =========================

kanjiDetailBack.addEventListener(
    "click",
    () => {

        card.style.display =
            "none";


        kanjiDetailBack.style.display =
            "none";


        allKanji.style.display =
            "block";

    }
);


// =========================
// BACK BUTTON
// =========================

backButton.addEventListener(
    "click",
    () => {

        allKanji.style.display =
            "none";


        card.style.display =
            "block";


        nextButton.style.display =
            "block";


        progressEl.style.display =
            "block";


        showAllButton.style.display =
            "block";


        kanjiDetailBack.style.display =
            "none";


        updateSwipeHints();

    }
);


// =========================
// NEXT BUTTON
// =========================

nextButton.addEventListener(
    "click",
    showNextKanji
);


// =========================
// TAP CARD
// =========================

document.body.addEventListener(
    "click",
    (e) => {

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

    }
);


// =========================
// SWIPE
// =========================

let touchStartX = 0;


card.addEventListener(
    "touchstart",
    (e) => {

        touchStartX =
            e.changedTouches[0].screenX;

    }
);


card.addEventListener(
    "touchend",
    (e) => {

        const touchEndX =
            e.changedTouches[0].screenX;


        const distanceX =
            touchEndX - touchStartX;


        // Ignore small movements

        if (
            Math.abs(distanceX) < 60
        ) {

            return;
        }


        // =========================
        // SWIPE LEFT → PREVIOUS
        // =========================

        if (distanceX < 0) {

            showPreviousKanji();

        }


        // =========================
        // SWIPE RIGHT → NEXT
        // =========================

        else {

            showNextKanji();

        }

    }
);


// =========================
// START APP
// =========================

newRound();

showNextKanji();

updateSwipeHints();

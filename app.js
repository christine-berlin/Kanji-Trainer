let remaining = [];
let current = null;
let progress = 0;
let revealed = false;

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
const swipeHint = document.getElementById("swipeHint");

let kanjiHistory = [];
let historyIndex = -1;

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

function showSwipeHints() {
    if (!swipeHint) return;
    swipeHint.style.display = "flex";
    updateSwipeHints();
}

function hideSwipeHints() {
    if (!swipeHint) return;
    swipeHint.style.display = "none";
}

function updateSwipeHints() {
    const leftHint = document.querySelector(".swipeLeft");
    const rightHint = document.querySelector(".swipeRight");

    if (!leftHint || !rightHint) return;

    leftHint.style.visibility = progress > 1 ? "visible" : "hidden";
    rightHint.style.visibility = progress < kanji.length ? "visible" : "hidden";
}

function showPreviousKanji() {
    if (historyIndex <= 0) return;

    historyIndex--;
    current = kanjiHistory[historyIndex];
    revealed = false;

    kanjiEl.textContent = current.kanji;
    meaningEl.textContent = "";
    onyomiEl.textContent = "";
    kunyomiEl.textContent = "";
    examplesEl.innerHTML = "";

    tapHint.style.display = "block";
    showSwipeHints();

    progress = historyIndex + 1;
    progressEl.textContent = `${progress} / ${kanji.length}`;
    updateSwipeHints();
}

function showNextKanji() {
    if (progress >= kanji.length) return;

    if (historyIndex < kanjiHistory.length - 1) {
        historyIndex++;
        current = kanjiHistory[historyIndex];
    } else {
        if (remaining.length === 0) return;

        current = remaining.pop();
        kanjiHistory.push(current);
        historyIndex = kanjiHistory.length - 1;
    }

    progress = historyIndex + 1;
    revealed = false;

    kanjiEl.textContent = current.kanji;
    meaningEl.textContent = "";
    onyomiEl.textContent = "";
    kunyomiEl.textContent = "";
    examplesEl.innerHTML = "";

    tapHint.style.display = "block";
    progressEl.textContent = `${progress} / ${kanji.length}`;
    showSwipeHints();
}

function reveal() {
    if (!current) return;

    if (revealed) {
        revealed = false;
        meaningEl.textContent = "";
        onyomiEl.textContent = "";
        kunyomiEl.textContent = "";
        examplesEl.innerHTML = "";

        tapHint.style.display = "block";
        showSwipeHints();
        return;
    }

    revealed = true;

    meaningEl.innerHTML = `<strong>Meaning:</strong> ${current.meaning}`;
    onyomiEl.innerHTML = `<strong>On:</strong> ${current.onyomi}`;
    kunyomiEl.innerHTML = `<strong>Kun:</strong> ${current.kunyomi}`;

    let html = "<strong>Examples:</strong><br><br>";
    current.examples.forEach(example => {
        html += `${example.word} (${example.reading})<br>${example.meaning}<br><br>`;
    });
    examplesEl.innerHTML = html;

    tapHint.style.display = "none";
    hideSwipeHints();
}

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

function openKanjiDetail(item) {
    current = item;
    revealed = true;

    const index = kanji.indexOf(item);
    if (index !== -1) {
        kanjiHistory = kanji.slice(0, index + 1);
        historyIndex = index;
        progress = index + 1;
        progressEl.textContent = `${progress} / ${kanji.length}`;
    }

    kanjiEl.textContent = current.kanji;
    meaningEl.innerHTML = `<strong>Meaning:</strong> ${current.meaning}`;
    onyomiEl.innerHTML = `<strong>On:</strong> ${current.onyomi}`;
    kunyomiEl.innerHTML = `<strong>Kun:</strong> ${current.kunyomi}`;

    let html = "<strong>Examples:</strong><br><br>";
    current.examples.forEach(example => {
        html += `${example.word} (${example.reading})<br>${example.meaning}<br><br>`;
    });
    examplesEl.innerHTML = html;

    tapHint.style.display = "none";
    hideSwipeHints();

    allKanji.style.display = "none";
    card.style.display = "block";
    nextButton.style.display = "none";
    progressEl.style.display = "none";
    showAllButton.style.display = "none";
    kanjiDetailBack.style.display = "block";
}

showAllButton.addEventListener("click", () => {
    renderKanjiGrid();
    card.style.display = "none";
    nextButton.style.display = "none";
    progressEl.style.display = "none";
    showAllButton.style.display = "none";
    kanjiDetailBack.style.display = "none";
    allKanji.style.display = "block";
});

kanjiDetailBack.addEventListener("click", () => {
    card.style.display = "none";
    kanjiDetailBack.style.display = "none";
    allKanji.style.display = "block";
});

backButton.addEventListener("click", () => {
    allKanji.style.display = "none";
    card.style.display = "block";
    nextButton.style.display = "block";
    progressEl.style.display = "block";
    showAllButton.style.display = "block";
    kanjiDetailBack.style.display = "none";
    showSwipeHints();
});

nextButton.addEventListener("click", showNextKanji);

document.body.addEventListener("click", (e) => {
    if (suppressCardClick) {
        suppressCardClick = false;
        return;
    }

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

let swipeStartX = 0;
let swipeStartY = 0;
let isDragging = false;
let suppressCardClick = false;
const swipeThreshold = 70;

function resetSwipeState() {
    isDragging = false;
    card.style.transition = "transform 0.18s ease, opacity 0.18s ease";
    card.style.transform = "";
    card.style.opacity = "";
}

function applySwipePosition(deltaX) {
    const clampedX = Math.max(-150, Math.min(150, deltaX));
    card.style.transform = `translateX(${clampedX}px) rotate(${clampedX * 0.08}deg)`;
    card.style.opacity = String(Math.max(0.68, 1 - Math.abs(clampedX) / 250));
}

card.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    swipeStartX = e.clientX;
    swipeStartY = e.clientY;
    isDragging = true;
    card.style.transition = "none";
    card.setPointerCapture?.(e.pointerId);
});

card.addEventListener("pointermove", (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - swipeStartX;
    const deltaY = e.clientY - swipeStartY;

    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 12) {
        resetSwipeState();
        return;
    }

    applySwipePosition(deltaX);
});

card.addEventListener("pointerup", (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - swipeStartX;
    resetSwipeState();

    if (Math.abs(deltaX) < swipeThreshold) return;

    suppressCardClick = true;
    setTimeout(() => {
        suppressCardClick = false;
    }, 0);

    if (deltaX < 0) {
        showPreviousKanji();
    } else {
        showNextKanji();
    }
});

card.addEventListener("pointercancel", resetSwipeState);

newRound();
showNextKanji();
updateSwipeHints();

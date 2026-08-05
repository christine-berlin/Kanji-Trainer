
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

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function newRound(){
    remaining = [...kanji];
    shuffle(remaining);
    progress = 0;
}

function showNextKanji(){

    if(remaining.length === 0){
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

    progressEl.textContent = progress + " / " + kanji.length;
}

function reveal(){

    if(revealed || !current) return;

    revealed = true;

    meaningEl.innerHTML = "<strong>Meaning:</strong> " + current.meaning;

    onyomiEl.innerHTML = "<strong>On:</strong> " + current.onyomi;

    kunyomiEl.innerHTML = "<strong>Kun:</strong> " + current.kunyomi;

    let html = "<strong>Examples:</strong><br><br>";

    current.examples.forEach(example => {
        html += `
            ${example.word} (${example.reading})<br>
            ${example.meaning}<br><br>
        `;
    });

    examplesEl.innerHTML = html;
}

document.body.addEventListener("click", (e) => {

    if(e.target === nextButton) return;

    reveal();

});

nextButton.addEventListener("click", showNextKanji);

newRound();
showNextKanji();
